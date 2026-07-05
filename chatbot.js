/* ===== GPT Chatbot ===== */
const CHAT_STORAGE_KEY = 'newgirls_openai_api_key';
const CHAT_MODEL_KEY = 'newgirls_openai_model';
const PLACEHOLDER_KEY = 'YOUR_OPENAI_API_KEY_HERE';

const chatbotPanel = document.getElementById('chatbotPanel');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotCloseBtn = document.getElementById('chatbotCloseBtn');
const chatbotSettingsBtn = document.getElementById('chatbotSettingsBtn');
const chatbotSettings = document.getElementById('chatbotSettings');
const chatbotApiKeyInput = document.getElementById('chatbotApiKeyInput');
const chatbotModelSelect = document.getElementById('chatbotModelSelect');
const chatbotSaveKeyBtn = document.getElementById('chatbotSaveKeyBtn');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotForm = document.getElementById('chatbotForm');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSendBtn = document.getElementById('chatbotSendBtn');
const chatbotStatus = document.getElementById('chatbotStatus');
const chatbotSuggestions = document.getElementById('chatbotSuggestions');

let chatHistory = [];
let isChatOpen = false;
let isLoading = false;

function getApiKey() {
  const stored = localStorage.getItem(CHAT_STORAGE_KEY);
  if (stored) return stored;

  const configKey = window.GPT_CONFIG?.apiKey;
  if (configKey && configKey !== PLACEHOLDER_KEY) return configKey;

  return '';
}

function getModel() {
  return localStorage.getItem(CHAT_MODEL_KEY)
    || window.GPT_CONFIG?.model
    || 'gpt-4o-mini';
}

function getEndpoint() {
  const config = window.GPT_CONFIG || {};
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (isLocal && config.proxyEndpoint) return config.proxyEndpoint;
  return config.endpoint || 'https://api.openai.com/v1/chat/completions';
}

function buildSystemPrompt() {
  const groupInfo = GROUPS.map(g => {
    const members = getGroupMembers(g)
      .map(m => `${m.name}${m.position ? `(${m.position})` : ''}`)
      .join(', ');
    return `- ${g.name} (${g.nameKr}): ${g.agency}, 데뷔 ${g.debutDate}, ${g.status === 'debuted' ? '데뷔완료' : '데뷔예정'}, 멤버 ${g.members || '미정'}명 [${members}], 데뷔곡 "${g.debutSong}", 장르 ${g.genre}`;
  }).join('\n');

  return `당신은 "NEWGIRLS" K-POP 신규 여자 아이돌 가이드 페이지의 AI 어시스턴트입니다.
2026년 7월 5일 기준 정보를 바탕으로 친절하고 정확하게 한국어로 답변하세요.

다루는 그룹 목록:
${groupInfo}

규칙:
- 위 그룹과 멤버 정보 범위에서 답변하세요.
- 모르는 정보는 추측하지 말고 "확인된 정보가 없습니다"라고 말하세요.
- 답변은 간결하고 읽기 쉽게, 필요하면 bullet point를 사용하세요.
- K-POP 팬에게 친근한 톤을 유지하세요.`;
}

function appendMessage(role, text) {
  const msg = document.createElement('div');
  msg.className = `chatbot-msg chatbot-msg--${role}`;

  const bubble = document.createElement('div');
  bubble.className = 'chatbot-msg-bubble';
  bubble.textContent = text;

  msg.appendChild(bubble);
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function showTyping() {
  const msg = document.createElement('div');
  msg.className = 'chatbot-msg chatbot-msg--bot';
  msg.id = 'chatbotTyping';

  const bubble = document.createElement('div');
  bubble.className = 'chatbot-msg-bubble chatbot-msg-bubble--typing';
  bubble.innerHTML = '<span></span><span></span><span></span>';

  msg.appendChild(bubble);
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function removeTyping() {
  document.getElementById('chatbotTyping')?.remove();
}

function setLoading(loading) {
  isLoading = loading;
  chatbotSendBtn.disabled = loading;
  chatbotInput.disabled = loading;
  chatbotStatus.textContent = loading ? '답변 생성 중...' : 'K-POP 신규 걸그룹 가이드';
}

async function sendToGPT(userMessage) {
  const apiKey = getApiKey();
  if (!apiKey) {
    appendMessage('bot', 'OpenAI API 키가 필요합니다. ⚙ 버튼을 눌러 API 키를 입력하고 저장해 주세요.');
    chatbotSettings.classList.remove('hidden');
    return;
  }

  chatHistory.push({ role: 'user', content: userMessage });
  appendMessage('user', userMessage);
  setLoading(true);
  showTyping();

  try {
    const response = await fetch(getEndpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: getModel(),
        messages: [
          { role: 'system', content: buildSystemPrompt() },
          ...chatHistory.slice(-10)
        ],
        temperature: 0.7,
        max_tokens: 800
      })
    });

    removeTyping();

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      const errMsg = err.error?.message || `API 오류 (${response.status})`;
      throw new Error(errMsg);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) throw new Error('응답을 받지 못했습니다.');

    chatHistory.push({ role: 'assistant', content: reply });
    appendMessage('bot', reply);
  } catch (error) {
    removeTyping();
    appendMessage('bot', `오류: ${error.message}\n\nAPI 키와 인터넷 연결을 확인해 주세요.`);
  } finally {
    setLoading(false);
    chatbotInput.focus();
  }
}

function openChatbot() {
  isChatOpen = true;
  chatbotPanel.classList.add('open');
  chatbotPanel.setAttribute('aria-hidden', 'false');
  chatbotToggle.setAttribute('aria-expanded', 'true');
  chatbotToggle.querySelector('.chatbot-toggle-icon--open').classList.add('hidden');
  chatbotToggle.querySelector('.chatbot-toggle-icon--close').classList.remove('hidden');

  if (chatbotMessages.children.length === 0) {
    appendMessage('bot', '안녕하세요! NEWGIRLS AI입니다 ✦\n2025~2026년 신규 K-POP 걸그룹에 대해 무엇이든 물어보세요.');
  }

  chatbotInput.focus();
}

function closeChatbot() {
  isChatOpen = false;
  chatbotPanel.classList.remove('open');
  chatbotPanel.setAttribute('aria-hidden', 'true');
  chatbotToggle.setAttribute('aria-expanded', 'false');
  chatbotToggle.querySelector('.chatbot-toggle-icon--open').classList.remove('hidden');
  chatbotToggle.querySelector('.chatbot-toggle-icon--close').classList.add('hidden');
}

function initChatbot() {
  const savedKey = localStorage.getItem(CHAT_STORAGE_KEY);
  if (savedKey) chatbotApiKeyInput.value = savedKey;

  chatbotModelSelect.value = getModel();

  chatbotToggle.addEventListener('click', () => {
    isChatOpen ? closeChatbot() : openChatbot();
  });

  chatbotCloseBtn.addEventListener('click', closeChatbot);

  chatbotSettingsBtn.addEventListener('click', () => {
    chatbotSettings.classList.toggle('hidden');
  });

  chatbotSaveKeyBtn.addEventListener('click', () => {
    const key = chatbotApiKeyInput.value.trim();
    if (!key) {
      localStorage.removeItem(CHAT_STORAGE_KEY);
      appendMessage('bot', 'API 키가 삭제되었습니다.');
      return;
    }
    localStorage.setItem(CHAT_STORAGE_KEY, key);
    localStorage.setItem(CHAT_MODEL_KEY, chatbotModelSelect.value);
    chatbotSettings.classList.add('hidden');
    appendMessage('bot', 'API 키가 저장되었습니다. 이제 질문해 보세요!');
  });

  chatbotForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = chatbotInput.value.trim();
    if (!text || isLoading) return;
    chatbotInput.value = '';
    sendToGPT(text);
  });

  chatbotSuggestions.querySelectorAll('.chatbot-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      if (isLoading) return;
      if (!isChatOpen) openChatbot();
      sendToGPT(btn.dataset.msg);
    });
  });
}

initChatbot();
