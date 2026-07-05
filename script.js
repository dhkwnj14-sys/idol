/* ===== Group Data (2026.07.05 기준) ===== */
const GROUPS = [
  {
    id: 'keyveatz',
    name: 'Keyveatz',
    nameKr: '키베이츠',
    agency: 'AOMG',
    debutDate: '2026-06-30',
    status: 'debuted',
    members: 5,
    memberNames: ['손주원', '뉴이', '엄지원', '김유나', '강예슬'],
    genre: 'Hip-hop / R&B',
    concept: 'Girl Crew',
    debutSong: 'OXY',
    album: 'OXY_GEN',
    generation: '5세대',
    featured: true,
    color: 'linear-gradient(135deg, #1a1a2e, #e94560)',
    image: 'images/keyveatz.jpg',
    imageAlt: 'Keyveatz 공식 그룹 사진',
    description: 'AOMG 최초의 걸 크루로, 2026년 6월 30일 데뷔. 힙합 서브컬처와 K-POP을 결합한 독특한 정체성을 가진 5인조 그룹. AOMG 2.0 리브랜딩 프로젝트 "Make It New"의 일환으로 탄생했으며, KCON JAPAN 2026, 서울 파크 뮤직 페스티벌 등에서 데뷔 전부터 활발한 무대 경험을 쌓았다.'
  },
  {
    id: 'unchild',
    name: 'UNCHILD',
    nameKr: '언차일드',
    agency: 'High Up Entertainment',
    debutDate: '2026-04-21',
    status: 'debuted',
    members: 6,
    memberNames: ['나하은', '이브온', '티나', '이예은', '아코', '히키'],
    genre: 'Electronic Pop',
    concept: '어른스러운 자유',
    debutSong: 'UNCHILD',
    album: 'We Are UNCHILD',
    generation: '5세대',
    featured: true,
    color: 'linear-gradient(135deg, #2d1b69, #ff6b9d)',
    image: 'images/unchild.jpg',
    imageAlt: 'UNCHILD 데뷔 컨셉 포토',
    description: 'STAYC 이후 6년 만에 하이업 엔터테인먼트가 선보이는 6인조 걸그룹. 어릴 적 유명 댄서였던 나하은이 멤버로 합류. "UNCHILD"는 두려움의 허들을 가볍게 넘어 새로운 모험을 떠나는 당당한 메시지를 담은 일렉트로닉 팝 곡으로 데뷔했다.'
  },
  {
    id: 'latency',
    name: 'LATENCY',
    nameKr: '레이턴시',
    agency: 'Oddinary Records',
    debutDate: '2026-01-08',
    status: 'debuted',
    members: 4,
    memberNames: ['희연', 'ZZONE(지원)', '해은', '세미'],
    genre: 'Pop Rock / Band',
    concept: '올 걸 밴드',
    debutSong: 'It Was Love',
    album: 'Late O\'Clock (EP)',
    generation: '5세대',
    featured: true,
    color: 'linear-gradient(135deg, #0f3460, #e94560)',
    image: 'images/latency.jpg',
    imageAlt: 'LATENCY 공식 그룹 사진',
    description: '2026년 1월 8일 데뷔한 4인조 올 걸 밴드. 시그니처, LOONA 등 전직 아이돌 멤버들이 모여 결성. 웹 시리즈 "Motchuh Do Rock!"을 통해 밴드 결성 과정이 공개되었으며, 2026년 5월 현재 멤버 현진이 건강상의 이유로 그룹을 떠났다.'
  },
  {
    id: 'hearts2hearts',
    name: 'Hearts2Hearts',
    nameKr: '하츠투하츠',
    agency: 'SM Entertainment',
    debutDate: '2025-02-24',
    status: 'debuted',
    members: 8,
    memberNames: ['카르멘', '지우', '유하', '스텔라', '주은', '에이나', '이안', '예온'],
    genre: 'Dance-pop',
    concept: 'Chase Your Choice',
    debutSong: 'The Chase',
    album: 'The Chase',
    generation: '5세대',
    featured: false,
    color: 'linear-gradient(135deg, #667eea, #764ba2)',
    image: 'images/hearts2hearts.jpg',
    imageAlt: 'Hearts2Hearts 공식 그룹 사진',
    description: 'SM 엔터테인먼트의 8인조 걸그룹. 2025년 2월 24일 데뷔 후 15일 만에 "The Show" 1위를 차지. 2025년 10월 첫 EP "Focus"를 발매했으며, 포켓몬 레전드 Z-A 프로모션 곡 "Pretty Please"로도 주목받았다.'
  },
  {
    id: 'ifeye',
    name: 'ifeye',
    nameKr: '이프아이',
    agency: 'Hi-Hat Entertainment',
    debutDate: '2025-04-08',
    status: 'debuted',
    members: 6,
    memberNames: ['카시아', '원화연', '태린', '라희', '므', '사샤'],
    genre: 'Easy Listening Pop',
    concept: 'ERLU BLUE',
    debutSong: 'NERDY',
    album: 'ERLU BLUE',
    generation: '5세대',
    featured: false,
    color: 'linear-gradient(135deg, #11998e, #38ef7d)',
    image: 'images/ifeye.png',
    imageAlt: 'ifeye 공식 그룹 사진',
    description: '유명 안무가 겸 프로듀서 RyuD가 프로듀싱한 6인조 걸그룹. 글로벌 오디션을 통해 선발된 멤버들로 구성. 데뷔곡 "NERDY"는 꿈과 현실을 넘나드는 판타지 세계관을 담은 이지 리스닝 팝 곡이다.'
  },
  {
    id: 'hitgs',
    name: 'HITGS',
    nameKr: '힛지스',
    agency: 'H Music Entertainment',
    debutDate: '2025-04-28',
    status: 'debuted',
    members: 5,
    memberNames: ['VV', '서진', '서희', '혜린', '이유'],
    genre: 'Dance-pop',
    concept: 'Things We Love',
    debutSong: 'Sourpatch',
    album: 'Things We Love: H',
    generation: '5세대',
    featured: false,
    color: 'linear-gradient(135deg, #fc5c7d, #6a82fb)',
    image: 'images/hitgs.png',
    imageAlt: 'HITGS 데뷔 컨셉 포토',
    description: '우아(Wooah) 이후 H Music의 첫 신규 걸그룹. 2025년 4월 28일 데뷔. "Sourpatch", "Gross", "Charizzma" 등 개성 있는 타이틀곡으로 주목받으며, 2025 SBS 가요대전에도 출연했다.'
  },
  {
    id: 'babydontcry',
    name: 'Baby DON\'T Cry',
    nameKr: '베이비돈크라이',
    agency: 'P NATION',
    debutDate: '2025-06-23',
    status: 'debuted',
    members: 4,
    memberNames: ['이현', '쿠미', '미아', '베니'],
    genre: 'Baby Rock',
    concept: 'F Girl',
    debutSong: 'F Girl',
    album: 'F Girl',
    generation: '5세대',
    featured: false,
    color: 'linear-gradient(135deg, #f7971e, #ffd200)',
    image: 'images/babydontcry.jpg',
    imageAlt: 'Baby DON\'T Cry 공식 그룹 사진',
    description: 'PSY의 P NATION 첫 걸그룹. (G)I-DLE 전소연이 프로듀싱을 맡아 "Baby Rock"이라는 자체 장르를 선보였다. 성적이나 숫자로 사람을 판단하지 말라는 당당한 메시지의 "F Girl"로 데뷔, MV 조회수 2,600만 회를 돌파했다.'
  },
  {
    id: 'saintxogirls',
    name: 'SAINT XO GIRLS',
    nameKr: '세인트 엑스오 걸즈',
    agency: 'Deep Studio Entertainment',
    debutDate: '2027-01-01',
    status: 'upcoming',
    members: 4,
    memberNames: ['레이', '수민', '루미', '하은'],
    genre: 'Quest-style K-POP',
    concept: 'AI 네이티브 퀘스트',
    debutSong: '첫사랑 실패 이후',
    album: 'TBA',
    generation: '5세대',
    featured: false,
    color: 'linear-gradient(135deg, #434343, #000000)',
    image: 'images/saintxo.jpg',
    imageAlt: 'SAINT XO GIRLS 프로필 사진',
    description: 'AI 기반 퀘스트 시스템으로 활동하는 신개념 걸그룹 IP. 2026년 7월 16일 홍대 롤링홀에서 첫 프리데뷔 퀘스트 공연 예정. 첫 퀘스트는 인스타그램 팔로워 11,111명 달성 — 성공 시 "Saint look", 실패 시 "Pig look" 의상으로 무대에 선다. 정식 데뷔는 2027년 상반기 예정.'
  },
  {
    id: 'obzet',
    name: 'OBZET',
    nameKr: '오브제',
    agency: 'Independent',
    debutDate: '2026-07-01',
    status: 'upcoming',
    members: 4,
    memberNames: ['아빈', '도아', '채이', '하유'],
    genre: 'Performance / Dance',
    concept: '퍼포먼스 걸그룹',
    debutSong: 'TBA',
    album: 'TBA',
    generation: '5세대',
    featured: false,
    color: 'linear-gradient(135deg, #8360c3, #2ebf91)',
    image: 'https://kprofiles.com/wp-content/uploads/2026/04/658796423_17892257373438811_1170773502223337613_n.jpeg',
    imageAlt: 'OBZET 프로필 사진',
    description: '전 Liz Entertainment 소속 아티스트 4인이 모인 독립 퍼포먼스 걸그룹. 2025년 2월 결성, 2026년 6월 말~7월 초 데뷔 예정. 각 멤버가 가수, 댄서, 모델, MC 등 다양한 분야에서 활동 경험을 보유하고 있다.'
  },
  {
    id: 'abd',
    name: 'ABD Girl Group',
    nameKr: 'ABD 걸그룹',
    agency: 'ABD (HYBE)',
    debutDate: '2026-09-01',
    status: 'upcoming',
    members: null,
    memberNames: ['박서연 (확정)', '기타 TBA'],
    genre: 'TBA',
    concept: 'TBA',
    debutSong: 'TBA',
    album: 'TBA',
    generation: '5세대',
    featured: false,
    color: 'linear-gradient(135deg, #141e30, #243b55)',
    image: 'https://newsimg.koreatimes.co.kr/2026/05/28/c7beb3b9-7bd0-4363-aefb-417166e9a49e.png',
    imageAlt: 'ABD 걸그룹 티저 (박서연)',
    description: 'HYBE 자회사 ABD 레이블의 신규 걸그룹. 전 I-LAND2 출연자 박서연이 멤버로 확정. 2026년 하반기 데뷔 예정으로, HYBE의 새로운 걸그룹 라인업에 대한 기대가 높다.'
  }
];

const UPCOMING_EVENTS = [
  {
    date: '2026-07-16',
    dateLabel: '7월 16일',
    name: 'SAINT XO GIRLS',
    groupId: 'saintxogirls',
    title: '첫 프리데뷔 Quest 공연',
    description: '홍대 롤링홀에서 열리는 관객 참여형 퀘스트 공연. 인스타 팔로워 11,111명 달성 여부에 따라 무대 의상이 결정된다.'
  },
  {
    date: '2026-07-01',
    dateLabel: '7월 초',
    name: 'OBZET',
    groupId: 'obzet',
    title: '독립 퍼포먼스 걸그룹 데뷔',
    description: '전 Liz Entertainment 출신 4인조 퍼포먼스 걸그룹의 공식 데뷔가 임박했다.'
  },
  {
    date: '2026-07-31',
    dateLabel: '7월 31일',
    name: 'ABD Girl Group',
    groupId: 'abd',
    title: 'HYBE ABD 레이블 걸그룹 (하반기)',
    description: '박서연 등이 포함된 HYBE 자회사 ABD의 신규 걸그룹, 2026년 하반기 데뷔 예정.'
  }
];

/* ===== DOM Elements ===== */
const groupsGrid = document.getElementById('groupsGrid');
const featuredGrid = document.getElementById('featuredGrid');
const timelineList = document.getElementById('timelineList');
const upcomingGrid = document.getElementById('upcomingGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const filterTabs = document.querySelectorAll('.filter-tab');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const header = document.getElementById('header');
const cursorGlow = document.querySelector('.cursor-glow');

let currentFilter = 'all';

/* ===== Render Functions ===== */
function formatDate(dateStr) {
  if (!dateStr || dateStr.startsWith('2027') || dateStr.startsWith('2026-09')) {
    return '데뷔 예정';
  }
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

function getInitials(name) {
  return name.replace(/[^a-zA-Z0-9가-힣]/g, '').slice(0, 2).toUpperCase();
}

function handleImageError(img) {
  img.style.display = 'none';
  const fallback = img.parentElement.querySelector('.image-fallback');
  if (fallback) fallback.classList.remove('hidden');
}

window.handleImageError = handleImageError;

function renderGroupImage(group, className, loading = 'lazy') {
  if (!group.image) {
    return `<span class="group-card-initial image-fallback">${getInitials(group.name)}</span>`;
  }

  return `
    <img
      class="${className}"
      src="${group.image}"
      alt="${group.imageAlt || group.nameKr + ' 그룹 사진'}"
      loading="${loading}"
      referrerpolicy="no-referrer"
      onerror="handleImageError(this)"
    >
    <span class="group-card-initial image-fallback hidden">${getInitials(group.name)}</span>
  `;
}

function renderGroupCard(group, index) {
  const statusClass = group.status === 'debuted' ? 'status--debuted' : 'status--upcoming';
  const statusText = group.status === 'debuted' ? '데뷔' : '예정';

  return `
    <article class="group-card" data-id="${group.id}" style="animation-delay: ${index * 0.05}s">
      <div class="group-card-header" style="background: ${group.color}">
        ${renderGroupImage(group, 'group-card-photo')}
        <span class="group-card-status ${statusClass}">${statusText}</span>
      </div>
      <div class="group-card-body">
        <h3 class="group-card-name">${group.name}</h3>
        <p class="group-card-kr">${group.nameKr} · ${group.agency}</p>
        <div class="group-card-info">
          <span class="group-tag">${group.members ? group.members + '명' : 'TBA'}</span>
          <span class="group-tag">${group.genre}</span>
          <span class="group-tag">${formatDate(group.debutDate)}</span>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedCard(group) {
  return `
    <article class="featured-card" data-id="${group.id}">
      <div class="featured-card-bg" style="background: ${group.color}">
        ${renderGroupImage(group, 'featured-card-photo', 'eager')}
      </div>
      <div class="featured-card-overlay"></div>
      <div class="featured-card-content">
        <span class="featured-badge">HOT</span>
        <h3 class="featured-name">${group.name}</h3>
        <p class="featured-meta">${group.nameKr} · ${group.debutSong} · ${formatDate(group.debutDate)}</p>
      </div>
    </article>
  `;
}

function renderTimeline() {
  const debuted = GROUPS
    .filter(g => g.status === 'debuted')
    .sort((a, b) => new Date(b.debutDate) - new Date(a.debutDate));

  timelineList.innerHTML = debuted.map(g => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <p class="timeline-date">${formatDate(g.debutDate)}</p>
      <h4 class="timeline-group">${g.name} (${g.nameKr})</h4>
      <p class="timeline-detail">${g.agency} · ${g.debutSong} · ${g.members}명</p>
    </div>
  `).join('');
}

function renderUpcoming() {
  upcomingGrid.innerHTML = UPCOMING_EVENTS.map(e => {
    const group = GROUPS.find(g => g.id === e.groupId);
    const thumb = group
      ? renderGroupImage(group, 'upcoming-card-photo')
      : '';

    return `
    <article class="upcoming-card" ${group ? `data-id="${group.id}"` : ''}>
      ${group ? `<div class="upcoming-card-thumb" style="background: ${group.color}">${thumb}</div>` : ''}
      <div class="upcoming-card-body">
        <span class="upcoming-date">📅 ${e.dateLabel}</span>
        <h3 class="upcoming-name">${e.name}</h3>
        <p class="upcoming-desc"><strong>${e.title}</strong><br>${e.description}</p>
      </div>
    </article>
  `;
  }).join('');

  bindCardClicks(upcomingGrid);
}

function renderFeatured() {
  const featured = GROUPS.filter(g => g.featured);
  featuredGrid.innerHTML = featured.map(renderFeaturedCard).join('');
}

function filterGroups() {
  const query = searchInput.value.toLowerCase().trim();

  let filtered = GROUPS;

  if (currentFilter !== 'all') {
    filtered = filtered.filter(g => g.status === currentFilter);
  }

  if (query) {
    filtered = filtered.filter(g =>
      g.name.toLowerCase().includes(query) ||
      g.nameKr.includes(query) ||
      g.agency.toLowerCase().includes(query) ||
      g.genre.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    groupsGrid.innerHTML = '';
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
    groupsGrid.innerHTML = filtered.map((g, i) => renderGroupCard(g, i)).join('');
    bindCardClicks(groupsGrid);
  }
}

function openModal(groupId) {
  const group = GROUPS.find(g => g.id === groupId);
  if (!group) return;

  const members = getGroupMembers(group);

  modalContent.innerHTML = `
    <div class="modal-header" style="background: ${group.color}">
      ${renderGroupImage(group, 'modal-header-photo', 'eager')}
    </div>
    <div class="modal-body">
      <h2 class="modal-title" id="modalTitle">${group.name}</h2>
      <p class="modal-subtitle">${group.nameKr} · ${group.agency} · ${group.generation}</p>
      <dl class="modal-details">
        <div class="modal-detail-row">
          <dt>데뷔일</dt>
          <dd>${formatDate(group.debutDate)}</dd>
        </div>
        <div class="modal-detail-row">
          <dt>데뷔곡</dt>
          <dd>${group.debutSong}</dd>
        </div>
        <div class="modal-detail-row">
          <dt>앨범</dt>
          <dd>${group.album}</dd>
        </div>
        <div class="modal-detail-row">
          <dt>장르</dt>
          <dd>${group.genre}</dd>
        </div>
        <div class="modal-detail-row">
          <dt>컨셉</dt>
          <dd>${group.concept}</dd>
        </div>
        <div class="modal-detail-row">
          <dt>멤버 수</dt>
          <dd>${group.members ? group.members + '명' : '미정'}</dd>
        </div>
      </dl>

      <div class="modal-members-section">
        <div class="modal-members-header">
          <h3 class="modal-members-title">멤버</h3>
          <p class="modal-members-hint">이름을 클릭하면 사진을 볼 수 있어요</p>
        </div>
        <div class="modal-members" id="modalMembers">
          ${members.map((member, index) => {
            const disabled = member.noPhoto || !member.image;
            return `
              <button
                type="button"
                class="member-chip${disabled ? ' member-chip--disabled' : ''}"
                data-member-index="${index}"
                ${disabled ? 'disabled aria-disabled="true"' : ''}
              >${member.name}</button>
            `;
          }).join('')}
        </div>

        <div class="member-preview" id="memberPreview">
          <div class="member-preview-empty">
            <span class="member-preview-icon">👆</span>
            <p>멤버 이름을 클릭해 프로필 사진을 확인하세요</p>
          </div>
          <div class="member-preview-content hidden">
            <div class="member-preview-photo-wrap">
              <img class="member-preview-photo" src="" alt="" referrerpolicy="no-referrer" onerror="handleImageError(this)">
              <span class="group-card-initial image-fallback hidden">${getInitials('')}</span>
            </div>
            <div class="member-preview-info">
              <h4 class="member-preview-name"></h4>
              <p class="member-preview-stage"></p>
              <p class="member-preview-position"></p>
            </div>
          </div>
        </div>
      </div>

      <p class="modal-desc">${group.description}</p>
    </div>
  `;

  bindMemberChipClicks(group, members);

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function showMemberPreview(group, members, index) {
  const member = members[index];
  if (!member || member.noPhoto || !member.image) return;

  const preview = document.getElementById('memberPreview');
  if (!preview) return;

  const empty = preview.querySelector('.member-preview-empty');
  const content = preview.querySelector('.member-preview-content');
  const photo = preview.querySelector('.member-preview-photo');
  const fallback = preview.querySelector('.image-fallback');
  const nameEl = preview.querySelector('.member-preview-name');
  const stageEl = preview.querySelector('.member-preview-stage');
  const positionEl = preview.querySelector('.member-preview-position');

  document.querySelectorAll('.member-chip').forEach((chip, i) => {
    chip.classList.toggle('active', i === index);
  });

  empty.classList.add('hidden');
  content.classList.remove('hidden');

  photo.style.display = '';
  photo.referrerPolicy = 'no-referrer';
  photo.src = member.image;
  photo.alt = `${group.nameKr} ${member.name} 프로필 사진`;
  fallback.textContent = getInitials(member.name);
  fallback.classList.add('hidden');

  nameEl.textContent = member.name;
  stageEl.textContent = member.stageName ? `Stage Name: ${member.stageName}` : '';
  stageEl.style.display = member.stageName ? '' : 'none';
  positionEl.textContent = member.position || '';

  preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function bindMemberChipClicks(group, members) {
  const chips = document.querySelectorAll('.member-chip:not(.member-chip--disabled)');
  chips.forEach(chip => {
    chip.addEventListener('click', e => {
      e.stopPropagation();
      showMemberPreview(group, members, parseInt(chip.dataset.memberIndex, 10));
    });
  });
}

function closeModal() {
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function bindCardClicks(container) {
  container.querySelectorAll('[data-id]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
  });
}

/* ===== Counter Animation ===== */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}

/* ===== Scroll Reveal ===== */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.section-header, .timeline-item, .upcoming-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/* ===== Event Listeners ===== */
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.dataset.filter;
    filterGroups();
  });
});

searchInput.addEventListener('input', filterGroups);

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

document.addEventListener('mousemove', e => {
  if (window.innerWidth > 768) {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  }
});

/* ===== Init ===== */
function init() {
  renderFeatured();
  filterGroups();
  renderTimeline();
  renderUpcoming();
  bindCardClicks(featuredGrid);

  const heroObserver = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        animateCounters();
        heroObserver.disconnect();
      }
    },
    { threshold: 0.5 }
  );

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) heroObserver.observe(heroStats);

  initScrollReveal();
}

init();
