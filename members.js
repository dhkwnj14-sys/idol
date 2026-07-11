/* ===== Member Photos & Profiles ===== */
const MEMBER_LISTS = {
  keyveatz: [
    { name: '손주원', stageName: '주원', position: '래퍼', image: 'https://kprofiles.com/wp-content/uploads/2025/02/son-juone-scaled.jpg' },
    { name: '뉴이', stageName: 'Newy', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/02/newy-scaled.jpg' },
    { name: '엄지원', stageName: '지원', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/02/Um-Jione-1-scaled.jpg' },
    { name: '김유나', stageName: '유나', position: '래퍼', image: 'https://kprofiles.com/wp-content/uploads/2025/02/kim-yuna-scaled.jpg' },
    { name: '강예슬', stageName: '예슬', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/02/kang-yeseul-scaled.jpg' }
  ],
  unchild: [
    { name: '나하은', stageName: '하은', position: '메인댄서', image: 'https://kprofiles.com/wp-content/uploads/2024/10/unchild-profile-haeun-571x800.jpg' },
    { name: '이브온', stageName: 'Evon', position: '메인보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/10/unchild-profile-evon-571x800.jpg' },
    { name: '티나', stageName: 'Tina', position: '리드댄서', image: 'https://kprofiles.com/wp-content/uploads/2024/10/unchild-profile-tina-571x800.jpg' },
    { name: '이예은', stageName: '예은', position: '리드보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/10/unchild-profile-yeeun-571x800.jpg' },
    { name: '아코', stageName: 'Ako', position: '서브보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/10/unchild-profile-ako-571x800.jpg' },
    { name: '히키', stageName: 'Heekie', position: '리더 · 메인래퍼', image: 'https://kprofiles.com/wp-content/uploads/2024/10/unchild-profile-heekie-571x800.jpg' }
  ],
  latency: [
    { name: '희연', stageName: 'Heeyeon', position: '기타', image: 'https://kprofiles.com/wp-content/uploads/2025/10/LATENCY-LATE-O-CLOCK-HEEYEON-600x800.jpg' },
    { name: 'ZZONE', stageName: '지원', position: '기타', image: 'https://kprofiles.com/wp-content/uploads/2025/10/LATENCY-LATE-O-CLOCK-ZZONE-600x800.jpg' },
    { name: '해은', stageName: 'Haeun', position: '키보드', image: 'https://kprofiles.com/wp-content/uploads/2025/10/LATENCY-LATE-O-CLOCK-HAEUN-600x800.jpg' },
    { name: '세미', stageName: 'Semi', position: '베이스', image: 'https://kprofiles.com/wp-content/uploads/2025/10/LATENCY-LATE-O-CLOCK-SEMI-600x800.jpg' }
  ],
  hearts2hearts: [
    { name: '카르멘', stageName: 'Carmen', position: '메인래퍼', image: 'https://kprofiles.com/wp-content/uploads/2025/01/HKVnM12a8AA9Agl-533x800.jpg' },
    { name: '지우', stageName: 'Jiwoo', position: '리더 · 메인댄서', image: 'https://kprofiles.com/wp-content/uploads/2025/01/H2H-JIWOO-LEMON-TANG-1-533x800.jpg' },
    { name: '유하', stageName: 'Yuha', position: '메인보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/01/H2H-YUHA-LEMON-TANG-1-533x800.jpg' },
    { name: '스텔라', stageName: 'Stella', position: '리드보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/01/HKVnEeabUAEVdMX-533x800.jpg' },
    { name: '주은', stageName: 'Juun', position: '서브보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/01/H2H-JUUN-LEMON-TANG-1-533x800.jpg' },
    { name: '에이나', stageName: 'A-na', position: '서브보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/01/HKVnOzMbYAAh_a_-533x800.jpg' },
    { name: '이안', stageName: 'Ian', position: '서브보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/01/HKVnUraaEAEwvHr-533x800.jpg' },
    { name: '예온', stageName: 'Ye-on', position: '메인댄서 · 막내', image: 'https://kprofiles.com/wp-content/uploads/2025/01/HKVnWbLagAACo4L-533x800.jpg' }
  ],
  ifeye: [
    { name: '카시아', stageName: 'Kasia', position: '리더 · 메인래퍼', image: 'https://kprofiles.com/wp-content/uploads/2024/05/kasia-3.jpg' },
    { name: '원화연', stageName: 'Hwayeon', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/05/Won-Hwayeon.jpg' },
    { name: '태린', stageName: 'Taerin', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/05/Taerin-2.jpg' },
    { name: '라희', stageName: 'Rahee', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/05/Rahee-3.jpg' },
    { name: '므', stageName: 'Meu', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/05/Meu-3.jpg' },
    { name: '사샤', stageName: 'Sasha', position: '메인보컬 · 막내', image: 'https://kprofiles.com/wp-content/uploads/2024/05/sasha2-1-scaled.jpg' }
  ],
  hitgs: [
    { name: 'VV', stageName: 'VV', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/12/vv-3-scaled.jpg' },
    { name: '서진', stageName: 'Seojin', position: '리더 · 래퍼', image: 'https://kprofiles.com/wp-content/uploads/2024/12/seojin3-scaled.jpg' },
    { name: '서희', stageName: 'Seohee', position: '메인보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/12/seohee-4-scaled.jpg' },
    { name: '혜린', stageName: 'Hyerin', position: '비주얼 · 센터', image: 'https://kprofiles.com/wp-content/uploads/2024/12/hyerin-4-scaled.jpg' },
    { name: '이유', stageName: 'Iyoo', position: '메인댄서 · 막내', image: 'https://kprofiles.com/wp-content/uploads/2024/12/iyoo-2-scaled.jpg' }
  ],
  babydontcry: [
    { name: '이현', stageName: 'Yihyun', position: '리더', image: 'https://kprofiles.com/wp-content/uploads/2025/06/yihyun-3.jpg' },
    { name: '쿠미', stageName: 'Kumi', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/06/kumi-2.jpg' },
    { name: '미아', stageName: 'Mia', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2025/06/mia-2.jpg' },
    { name: '베니', stageName: 'Beni', position: '보컬 · 막내', image: 'https://kprofiles.com/wp-content/uploads/2025/06/beni-3.jpg' }
  ],
  rescene: [
    { name: '원이', stageName: 'Woni', position: '리더', image: 'https://kprofiles.com/wp-content/uploads/2024/02/RESCENE-Pretty-Girl-Special-Single-Concept-Photo-WONI-1-900x720.jpg' },
    { name: '리브', stageName: 'Liv', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/02/RESCENE-Pretty-Girl-Special-Single-Concept-Photo-LIV-1-640x800.jpg' },
    { name: '미나미', stageName: 'Minami', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/02/RESCENE-Pretty-Girl-Special-Single-Concept-Photo-MINAMI-1-640x800.jpg' },
    { name: '메이', stageName: 'May', position: '보컬', image: 'https://kprofiles.com/wp-content/uploads/2024/02/RESCENE-Pretty-Girl-Special-Single-Concept-Photo-MAY-1-640x800.jpg' },
    { name: '제나', stageName: 'Zena', position: '비주얼 센터 · 막내', image: 'https://kprofiles.com/wp-content/uploads/2024/02/RESCENE-Pretty-Girl-Special-Single-Concept-Photo-ZENA-1-640x800.jpg' }
  ],
  saintxogirls: [
    { name: '레이', stageName: 'Lei', position: '멤버', image: 'https://kprofiles.com/wp-content/uploads/2024/08/lei-1.jpg' },
    { name: '수민', stageName: 'Soomin', position: '멤버', image: 'https://kprofiles.com/wp-content/uploads/2024/08/sumin.jpg' },
    { name: '루미', stageName: 'Rumi', position: '멤버', image: 'https://kprofiles.com/wp-content/uploads/2024/08/rumi.jpg' },
    { name: '하은', stageName: 'Haeun', position: '멤버', image: 'https://kprofiles.com/wp-content/uploads/2024/08/haeun.jpg' }
  ],
  obzet: [
    { name: '아빈', stageName: 'Abin', position: '리더', image: 'https://kprofiles.com/wp-content/uploads/2026/04/658796423_17892257373438811_1170773502223337613_n.jpeg' },
    { name: '도아', stageName: 'Doa', position: '댄서', image: 'https://kprofiles.com/wp-content/uploads/2026/04/OBZET_Doa_2026_profile_photo_29-600x800.webp' },
    { name: '채이', stageName: 'Chae-i', position: '댄서', image: 'https://kprofiles.com/wp-content/uploads/2026/04/26.04.20-Chaei-1-600x800.jpg' },
    { name: '하유', stageName: 'Hayu', position: '댄서 · 막내', image: 'https://kprofiles.com/wp-content/uploads/2026/04/26.04.21-Hayu-1-600x800.jpg' }
  ],
  abd: [
    { name: '박서연', stageName: 'Seo Yeon', position: '확정 멤버', image: 'https://newsimg.koreatimes.co.kr/2026/05/28/c7beb3b9-7bd0-4363-aefb-417166e9a49e.png' },
    { name: '기타 TBA', stageName: null, position: '미공개', image: null, noPhoto: true }
  ]
};

function getGroupMembers(group) {
  return MEMBER_LISTS[group.id] || group.memberNames.map(name => ({
    name,
    stageName: null,
    position: null,
    image: null,
    noPhoto: true
  }));
}
