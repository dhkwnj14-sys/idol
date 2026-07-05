"""
OpenAI API CORS 프록시 + 정적 파일 서버
사용법: python proxy-server.py
브라우저: http://localhost:8787
"""

import json
import os
import urllib.error
import urllib.request
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 8787
OPENAI_URL = "https://api.openai.com/v1/chat/completions"


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.abspath(__file__)), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == "/v1/chat/completions":
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length)
            auth = self.headers.get("Authorization", "")

            req = urllib.request.Request(
                OPENAI_URL,
                data=body,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": auth,
                },
                method="POST",
            )
            try:
                with urllib.request.urlopen(req, timeout=60) as resp:
                    data = resp.read()
                    self.send_response(resp.status)
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(data)
            except urllib.error.HTTPError as e:
                self.send_response(e.code)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(e.read())
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": {"message": str(e)}}).encode())
            return

        self.send_response(404)
        self.end_headers()


if __name__ == "__main__":
    print(f"서버 실행: http://localhost:{PORT}")
    print("index.html 을 브라우저에서 열어 챗봇을 사용하세요.")
    HTTPServer(("localhost", PORT), Handler).serve_forever()
