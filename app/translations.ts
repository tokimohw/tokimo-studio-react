export type Locale = 'ko' | 'jp' | 'en';

export const i18nData: Record<Locale, Record<string, any>> = {
  ko: {
    // 공통 요소
    "nav-about": "Architecture",
    "nav-project": "Repositories",
    "nav-connect": "Connect",
    "side-craft": "디지털·크래프트맨십",
    "footer-cta": "간결한 가치를 만듭니다.",

    // index
    // Hero 섹션
    "hero-sub-title": "디자인 주도 프론트엔드 & 정숙한 시각적 서사",
    "hero-desc": `카페와 작은 브랜드, 그리고 정적인 공간을 위한 웹사이트.`,
    "hero-role": "프론트엔드 / 브랜딩 / 디렉션",
    "hero-cta": "프로젝트 시작하기 →",
    "meta-role-val": "프론트엔드 개발자",
    "meta-base-val": "서울 / 도쿄",
    "meta-status-val": "작업 가능",

    // About 섹션
    "idx-about-p1": "서울과 도쿄를 오가며, 브랜드와 공간을 위한 차분하고 의도적인 디지털 경험을 만듭니다.",
    "idx-about-p2": "무드와 리듬, 절제된 인터랙션을 중심으로 과하지 않고 자연스럽게 느껴지는 경험을 지향합니다.",
    "idx-about-p3": "빛, 공간, 그리고 정적인 분위기를 웹으로 옮기는 작업에 관심이 있습니다.",
    
    // Project 섹션
    "proj-header-title": "Selected Projects",
    "proj-header-desc": "구조, 브랜딩, 그리고 디지털 경험에 집중합니다.",
    "proj-header-note": "정숙한 구조와 시각적 흐름을 탐구한 작업물들입니다.",
    "proj-view": "상세 보기",
    "proj-01-desc-full": "편집샵을 위한 미니멀 웹사이트. 레이아웃과 제품의 흐름에 집중합니다.",
    "proj-02-desc-full": "조용한 카페의 분위기를 담은 웹사이트. 기능보다 공기감을 반영합니다.",

    // Process 섹션
    "proc-sub": "하나의 브랜드가 디지털 공간에 안착하기까지의 여정.",
    "proc-01-title": "Discovery & Mood",
    "proc-01-desc": "브랜드의 본질을 분석하고 시각적 무드보드를 통해 방향성을 설정합니다.",
    "proc-02-title": "Digital Craft",
    "proc-02-desc": "Vanilla JS를 활용하여 정숙하고 세밀한 인터랙션을 구현합니다.",
    "proc-03-title": "Localization & Launch",
    "proc-03-desc": "일본 시장 진출을 위한 번역 최적화 및 로컬 뉘앙스를 반영합니다.",

    // Services
    "svc-title": "What I Do",
    "svc-desc": "카페와 작은 브랜드를 위한 간결한 웹사이트를 제작합니다.",
    "svc-proof": "단순한 구조, 차분한 인터랙션, 명확한 브랜딩.",
    "svc-01": "카페 웹사이트",
    "svc-01-sub": "싱글 페이지 혹은 소규모 사이트",
    "svc-02": "랜딩 페이지",
    "svc-02-sub": "개인 브랜드 및 프로젝트용",
    "svc-03": "프론트엔드",
    "svc-cta": "소규모 프로젝트 작업 가능합니다. 인스타그램이나 이메일로 연락 주세요.",

    // FAQ & Status
    "faq-title": "Frequently Asked Questions",
    "faq-q1": "제작 기간은 얼마나 걸리나요?",
    "faq-a1": "프로젝트에 따라 다르지만 보통 3~5주 정도 소요됩니다.",
    "faq-q2": "개발만 의뢰하는 것도 가능한가요?",
    "faq-a2": "네, 이미 디자인이 준비되어 있다면 가능합니다.",
    
    // cta
    "cta-jp-small": "정숙한 제작을, 함께.",
    "cta-main": `당신의 브랜드 아이덴티티를 아카이브하세요.`,
    "cta-sub-text": "새로운 프로젝트에 대한 영감을 기다립니다.",
    "cta-link-text": "대화 시작하기 →",

    // about 페이지
    "about-hero-title": "브랜드의 숨결을, 디지털의 정적으로.",
    "about-hero-sub": "서울과 도쿄를 기반으로 브랜드의 철학을 디지털 공간에 설계하는 프론트엔드 디렉터입니다.",
    "about-philo-title": "정돈된 감각 / Structured Sensitivity",
    "about-philo-desc1": "서울에서 시작해 도쿄의 거리로 이어지는 여정을 준비하고 있습니다. 저에게 웹은 단순한 인터페이스가 아닌, 브랜드의 철학이 머무는 '디지털 플래그십 스토어'입니다.",
    "about-philo-desc2": "불필요한 장식을 걷어내고, 여백과 질감 그리고 절제된 움직임을 통해 브랜드 본연의 가치를 전달하는 데 집중합니다.",
    "about-note-title": "디렉터의 메모",
    "about-note-quote": "\"기술은 보이지 않을 때 가장 아름답습니다.\"",
    "about-note-desc": "TOKIMO는 웹사이트 제작을 넘어, 장기적으로 일본 현지에서 카페와 패션 브랜드를 직접 운영하려는 계획을 품고 있습니다. 공간의 여백과 사물의 질감을 디지털로 번역하는 '디지털 제작자'의 자세로 모든 프로젝트에 임합니다.",
    "about-signature": "TOKIMO / 디렉터 현우",

    "about-presence-title": "현지 대응 및 로컬라이징",
    "about-presence-desc": "서울과 도쿄를 기반으로 활동하며, 일본 현지 비즈니스 매너에 맞춘 긴밀한 소통이 가능합니다. 단순한 번역을 넘어 브랜드의 공기감을 일본 시장에 맞게 재설계합니다.",


    // project 페이지
    "page-title": "PROJECTS | TOKIMO ARCHIVE",
    "archive-title": "WORK SELECTED",
    "cat-all": "ALL",
    "cat-space": "SPACE",
    "cat-object": "OBJECT",
    "cat-identity": "IDENTITY",

    // Project 01
    "p01-name": `Seta Fashion Label Digital Flagship`,
    "p01-desc": "도쿄 베이스 레이블의 시각적 아이덴티티와 자연광의 질감을 담은 디지털 플래그십 설계",
    
    // Project 02
    "p02-name": `Slow Roastery`,
    "p02-desc": "로컬 로스터리의 과정과 질감을 담은 웹 아카이브",
    
    // Project 03
    "p03-name": `Kissa Local Roastery`,
    "p03-desc": "로컬 로스터리 카페의 공간적 경험을 웹 아카이브로 번역하는 브랜딩 프로젝트",
    
    // Project 04
    "p04-name": `Aesthetic Select Shop`,
    "p04-desc": "사물의 질감과 생활감을 중심으로 한 라이프스타일 편집샵 커머스 가이드",
    
    // Project 05
    "p05-name": `Stationery Archive`,
    "p05-desc": "필기 도구의 촉감과 물성을 중심으로 한 오브제 아카이브 프로젝트",

    // CTA Section
    "p-cta-title": `Looking for Digital Craftsmanship?`,
    "p-cta-desc": "당신의 브랜드가 가진 고유한 공기감을 디지털로 옮깁니다. 브랜딩, 웹 구축, 그리고 일본 진출에 대한 협업을 환영합니다.",
    "p-cta-btn": "START A PROJECT",

    // connect 페이지
    "connect-header-title": "당신의 이야기를 기록하세요.",
    "connect-phi-label": "01 // 철학",
    "connect-phi-text": "우리는 단순한 웹사이트가 아닌, 시간의 흐름을 견디는 브랜드의 디지털 아카이브를 구축합니다.",
    "connect-res-label": "02 // 응답_시간",
    "connect-res-text": "모든 제안은 48시간 이내에 검토되며, 신중하게 회신합니다.",
    "connect-dir-label": "03 // 직접_문의",
    "form-id-label": "식별자 (성함)",
    "form-protocol-label": "프로토콜 (이메일/SNS)",
    "form-field-label": "분야_선택",
    "form-narrative-label": "프로젝트_서사",
    "form-narrative-placeholder": "프로젝트의 배경과 목표를 자유롭게 기술해 주세요.",
    "form-submit": "EXECUTE LOG",
    "system-waiting": "시스템_준비: 입력 대기 중",
    "system-success": "프로젝트가 아카이브에 기록되었습니다.",

    // fashion 페이지
    "f-title": "정적 선택",
    "f-subtitle": "Curated Silence",
    "f-philosophy": "우리는 배경을 설계합니다. 옷이 아닌, 옷이 존재하는 공간의 공기를 만듭니다.",
    "qv-material": "소재 (Material)",
    "qv-philosophy": "디자인 철학 (Philosophy)",
    "qv-close": "닫기",
    // 제품별 데이터
    "item1-name": "Soft Wool Layer",
    "item1-mat": "울 80%, 캐시미어 20% (Muted Grey Tone)",
    "item1-desc": "피부에 닿는 순간의 고요함. 불필요한 디테일을 덜어내고 오직 실루엣과 여백만을 남겼습니다.",

    // roastery 페이지
    "roastery-id": "#002 / ROASTERY",
    "roastery-title": "TOKIMO ROASTERY & ARCHIVE",
    "roastery-desc": "시간이 멈춘 듯한 공간에서의 한 잔. 우리는 커피를 매개로 도시 속 작은 정적을 설계합니다.",
    "roastery-role": "브랜드 디자인, 웹 개발",
    "roastery-philosophy-title": "커피 속의 정적",
    "roastery-hour": "영업시간",
    "roastery-next": "이전 프로젝트",
    // 
    // 01. Curation
    "ro-curation-tag": "취향의 제안",
    "ro-curation-title": "어떤 순간에 머무르시나요?",
    "ro-curation-desc": "우리는 배전도가 아닌, 당신의 순간에 어울리는 향을 제안합니다.",
    "ro-scene-1": "안개 낀 새벽, 잠을 깨우는 산뜻함",
    "ro-scene-2": "정오의 빛, 가장 균형 잡힌 시간",
    "ro-scene-3": "깊은 밤, 독서와 함께하는 묵직한 정적",
    // 02. Log
    "ro-log-title": "로스팅 기록",
    "ro-log-batch": "최근 배치",
    "ro-log-temp": "투입 온도",
    // 03. Subscription
    "ro-sub-title": "토키모 아카이브 구독",
    "ro-sub-desc": "매달 로스터가 엄선한 원두와 공간의 사진을 함께 보내드립니다.",
    "ro-sub-btn": "구독 시작하기",
    // 04. Experience
    "ro-exp-title": "커핑 & 클래스",
    "ro-exp-desc": "매주 토요일, 우리가 추구하는 커피의 지향점을 공유합니다.",
    // 05. Wholesale
    "ro-whole-title": "비즈니스 파트너십",
    "ro-whole-desc": "귀하의 공간에 가장 잘 어울리는 원두와 무드를 제안합니다.",
    "ro-whole-btn": "샘플 키트 신청하기",
  
    // cafe
// 공통 및 정보
    "cafe-info-open": "운영 시간",
    "cafe-info-loc": "위치",
    "cafe-buy-btn": "장바구니에 담기",
    "cafe-shop-desc": "공간의 경험을 집으로 배달합니다.",
    "cafe-shop-bean": "원두",
    "cafe-shop-goods": "굿즈",
    
    // 메뉴 설명 (커피/드립)
    "cafe-menu-flat-desc": "고소한 우유의 질감과 진한 에스프레소의 밸런스",
    "cafe-menu-latte-desc": "귀리 우유와 수제 시럽이 들어간 시그니처 음료",
    "cafe-menu-ame-desc": "깔끔하고 깊은 풍미의 데일리 커피",
    "cafe-menu-drip1-desc": "푸글렌 스타일의 가볍고 산뜻한 라이트 로스팅",
    "cafe-menu-drip2-desc": "균형 잡힌 단맛과 부드러운 산미의 조화",
    "cafe-menu-drip3-desc": "화사한 꽃향기와 과일의 달콤함",
    
    // 메뉴 설명 (디저트/샌드위치)
    "cafe-menu-matcha-desc": "교토산 말차를 사용한 꾸덕한 질감의 테린느",
    "cafe-menu-cheese-desc": "상큼한 산미와 부드러운 치즈의 조화",
    "cafe-menu-sando1-desc": "부드러운 달걀과 와사비 마요의 깔끔한 조화",
    "cafe-menu-sando2-desc": "달콤한 사과와 고소한 브리치즈를 곁들인 바게트",
    
    // 세트 메뉴
    "cafe-set-tag": "세트 메뉴",
    "cafe-set-title": "사색을 위한 티켓 (THE SILENCE TICKET)",
    "cafe-set-desc": "오늘의 드립 커피 + 테린느 1종 + 영감 노트 1매",

    // 가구 페이지
    "furn-intro-tag": "시간이 머무는 오브제",
    "furn-intro-title": "공간의 본질을 채우는 가구",
    "furn-cat-all": "전체보기",
    "furn-cat-table": "테이블",
    "furn-cat-chair": "체어",
    "furn-cat-sofa": "소파",
    "furn-cat-storage": "수납장",
    "furn-footer-inquiry": "문의하기",
    "furn-footer-faq": "자주 묻는 질문",
    "furn-footer-tel": "전화",
    "furn-footer-email": "이메일",
    "furn-shop-desc": "엄선된 소재와 장인의 손길이 닿은 가구 컬렉션입니다.",

    "nav-products": "PRODUCTS",
    "nav-furniture-about": "ABOUT",
    "nav-store": "STORE",
    "nav-archive": "ARCHIVE",
    "furn-material-wood": "원목",
    "furn-material-stone": "석재",
    "furn-material-metal": "금속",
    "furn-night-mode": "야간 조명",
    "furn-day-mode": "주간 조명",
    "furn-detail-view": "자세히 보기",
    "furn-footer-contact": "문의",

    // 스토리텔링 페이지
    'stat-nav-title': 'STATIONERY ARCHIVE',
    'stat-hero-sub': '우리는 물성이 주는 본질적인 무게를 기록합니다.',
    'stat-hero-title': '기록의 형태.',
    'stat-cat-editorial': '에디토리얼',
    'stat-cat-craft': '공예',
    'stat-cat-tool': '도구',
    'stat-meta-paper': '지질',
    'stat-meta-binding': '제본',
    'stat-meta-ink': '잉크',
    'stat-detail-text': '물성을 만지다',
    'stat-item-01-desc': '무코팅 미색지의 거친 질감을 살린 기록지.',
    'stat-item-02-desc': '손에 닿는 온도를 고려한 황동 소재의 만년필.',
    // Branding Story
    'stat-footer-story': 'TOKIMO는 도쿄와 서울, 그 사이의 조용한 여백에서 시작되었습니다. 웹이라는 무형의 공간과 사물이라는 유형의 물체를 잇는 실험을 계속합니다.',
    // Anatomy Section: Logic (개발자로서의 자아)
    'anatomy-logic-desc': '나에게 코드는 또 다른 방식의 제본입니다. 화면 위에서 픽셀을 정렬하는 논리는, 종이 위에 글자를 배치하는 편집 디자인의 정교함과 닮아 있습니다. 보이지 않는 구조가 주는 편안함을 설계합니다.',
    
    // Anatomy Section: Texture (디렉터로서의 자아)
    'anatomy-texture-desc': '디지털이 줄 수 없는 유일한 것, 그것은 온기입니다. 손가락 끝에 닿는 종이의 거친 입자, 만년필 촉이 종이를 긁는 소리. 우리는 그 사소하지만 강력한 감각의 순간을 아카이빙합니다.'

  },
  jp: {
    // index
    "nav-about": "Architecture",
    "nav-project": "Repositories",
    "nav-connect": "Connect",
    "side-craft": "デジタル・クラフトマンシップ",
    "footer-cta": "シンプルなものづくりを。",

    "hero-sub-title": "デザイン主導のフロントエンドと静かな視覚的物語",
    "hero-desc": `カフェや小さなブランド、<br>そして静かな空間のためのウェブ制作。`,
    "hero-role": "フロントエンド・ブランディング",
    "hero-cta": "プロジェクトを始める →",
    "meta-role-val": "フロントエンド開発",
    "meta-base-val": "ソウル / 東京",
    "meta-status-val": "ご依頼受付中",

    "idx-about-p1": "ソウルと東京を拠点に、ブランドや空間のための静かで意図のあるデジタル体験を設計しています。",
    "idx-about-p2": "ムードやリズム、控えめなインタラクションを大切にし、自然に感じられる体験を目指しています。",
    "idx-about-p3": "光や空間、静けさといった空気感をウェブに落とし込むことに関心があります。",

    "proj-header-title": "Selected Projects",
    "proj-header-desc": "構造、ブランディング、デジタル体験に焦点を当てています。",
    "proj-header-note": "静かな構造と視覚的な流れを追求したアーカイブ。",
    "proj-view": "詳細を見る",
    "proj-01-desc-full": "セレクトショップのためのミニマルなウェブデザイン。レイアウトと製品の流れを重視。",
    "proj-02-desc-full": "静かなカフェの雰囲気を表現したウェブサイト。 機能よりも空気感を反映いたします。",

    // Services
    "svc-title": "What I Do",
    "svc-desc": "カフェや小さなブランドのためのシンプルなウェブ制作。",
    "svc-proof": "シンプルな構造、控えめなインタラクション、明快なブランディング。",
    "svc-01": "カフェのウェブサイト",
    "svc-01-sub": "シングルページ、または小規模サイト",
    "svc-02": "ランディングページ",
    "svc-02-sub": "個人ブランドやプロジェクト向け",
    "svc-03": "フロントエンド",
    "svc-cta": "小規模プロジェクトのご依頼を承っております。<br>Instagramまたはメールでお問い合わせください。",

    // process
    "proc-sub": "一つのブランドが、デジタル空間に深く根を下ろすまでの軌跡。",
    "proc-01-title": "Discovery & Mood",
    "proc-01-desc": "ブランドの本質を読み解き、ムードボードを通じて最適な視覚的アプローチを設計します。",
    "proc-02-title": "Digital Craft",
    "proc-02-desc": "ピクセル単位のUI設計と、細部までこだわり抜いたフロントエンド開発を行います。",
    "proc-03-title": "Localization & Launch",
    "proc-03-desc": "日本のローカルな文脈に寄り添い、違和感のない自然なデジタル体験へと翻訳します。",

    // FAQ & Status
    "faq-title": "Frequently Asked Questions",
    "faq-q1": "制作期間はどのくらいですか？",
    "faq-a1": "プロジェクトによりますが、通常3〜5週間ほどです。",
    "faq-q2": "開発のみの依頼は可能ですか？",
    "faq-a2": "はい、デザインが既に完成している場合は可能です。",

    // cta
    "cta-jp-small": "静かなものづくりを、共に。",
    "cta-main": `ブランドの価値をデジタル空間に記録いたします。`, // 직역보다 '기록/아카이브' 의미 강조
    "cta-sub-text": "新しいプロジェクトへのインスピレーションをお待ちしております。",
    "cta-link-text": "お問い合わせ →",

    // about 페이지
    "about-hero-title": "ブランドの息吹を、デジタルの静寂へ。",
    "about-hero-sub": "ソウルと東京を拠点に、ブランドの哲学をデジタル空間に設計するフロントエンド・ディレクターです。",
    "about-philo-title": "静かな抵抗 / Structured Sensitivity",
    "about-philo-desc1": "ソウルで始まり、東京の街並みへと続く旅を準備しています。私にとってウェブは単なるインターフェースではなく、ブランドの哲学が宿る「デジタル・フラッグシップストア」です。",
    "about-philo-desc2": "過剰な装飾を削ぎ落とし、余白や質感、そして控えめなインタラクションを通じて、ブランド本来の価値を伝えることに注力しています。",
    "about-note-title": "ディレクターズ・ノート",
    "about-note-quote": "「技術は見えない時に最も美しい。」",
    "about-note-desc": "TOKIMOは単にウェブサイトを作ることを超え、長期的に日本国内でカフェやファッションブランドを自ら運営するという計画を抱いています。空間の余白と物の質感をデジタルに翻訳する「デジタル職人」の姿勢で、すべてのプロジェクトに臨みます。",
    "about-signature": "TOKIMO / ディレクター ヒョンウ",

    "about-presence-title": "現地対応とローカライズ",
    "about-presence-desc": "ソウルと東京を拠点に活動しており、日本独自のビジネス慣行とコミュニケーションマナーを遵守しています。 単なる翻訳にとどまらず、ブランドが持つ「空気感」を日本市場に最適化します。",


    // project 페이지
    "page-title": "PROJECTS | TOKIMO ARCHIVE",
    "archive-title": "WORK SELECTED",
    "cat-all": "すべて",
    "cat-space": "空間",
    "cat-object": "オブジェクト",
    "cat-identity": "アイデンティティ",

    "p01-name": `Seta Fashion Label Digital Flagship`,
    "p01-desc": "東京ベースのファッションレーベルにおける視覚的アイデンティティとデジタルの融合。",
    "p02-name": `Slow Roastery`,
    "p02-desc": "ローカルロースタリーのプロセスと質感にフォーカスしたウェブアーカイブ。",
    "p03-name": `Kissa Local Roastery`,
    "p03-desc": "ローカルロースタリーカフェの空間体験をウェブアーカイブへと翻訳するプロジェクト。",
    "p04-name": `Aesthetic Select Shop`,
    "p04-desc": "物の質感と生活感を中心としたライフスタイルセレクトショップのECガイドライン。",
    "p05-name": `Stationery Archive`,
    "p05-desc": "ステーショナリーの触感と物性に焦点を当てたオブジェアーカイブ。",

    "p-cta-title": `Looking for Digital Craftsmanship?`,
    "p-cta-desc": "貴社のブランドが持つ独自の空気感をデジタルへと翻訳します。ブランディング、ウェブ構築そして日本進出に関する協業をお待ちしております。",
    "p-cta-btn": "プロジェクトを始める",

    // conncet 페이지
    "connect-header-title": "物語を記録する。",
    "connect-phi-label": "01 // 哲学",
    "connect-phi-text": "単なるウェブサイトではなく、時の流れに耐えるブランドのデジタルアーカイブを構築します。",
    "connect-res-label": "02 // 応答時間",
    "connect-res-text": "すべての提案は48時間以内に検討され、慎重に返信されます。",
    "connect-dir-label": "03 // 直接アクセス",
    "form-id-label": "識別子 (氏名)",
    "form-protocol-label": "プロトコル (メール/SNS)",
    "form-field-label": "分野選択",
    "form-narrative-label": "プロジェクトの叙事",
    "form-narrative-placeholder": "プロジェクトの背景と目標を自由に記述してください。",
    "form-submit": "ログ実行",
    "system-waiting": "システム準備：入力待機中",
    "system-success": "プロジェクトがアーカイブに記録されました。",

    // fashion 페이지
    "f-title": "静かな選択",
    "f-subtitle": "Curated Silence",
    "f-philosophy": "私たちは背景を設計します。服そのものではなく、服が存在する空間の空気を作ります。",
    "qv-material": "素材 (Material)",
    "qv-philosophy": "哲学 (Philosophy)",
    "qv-close": "閉じる",
    "item1-name": "Soft Wool Layer",
    "item1-mat": "ウール80%、カシミヤ20% (Muted Grey Tone)",
    "item1-desc": "肌に触れた瞬間の静けさ。無駄な装飾を削ぎ落とし、シルエットと余白だけを残しました。",

    // roastery 페이지
    "roastery-id": "#002 / ロースタリー",
    "roastery-title": "TOKIMO ROASTERY & ARCHIVE",
    "roastery-desc": "時間が止まったような空間での一杯。私たちはコーヒーを通じて都市の中の小さな「静적」を設計します。",
    "roastery-role": "ブランドデザイン, ウェブ開発",
    "roastery-philosophy-title": "コーヒーの中の静寂",
    "roastery-hour": "営業時間",
    "roastery-next": "前のプロジェクト",
    // 
    "ro-curation-tag": "好みの提案",
    "ro-curation-title": "どのような瞬間にいらっしゃいますか？",
    "ro-curation-desc": "焙煎度ではなく、あなたの瞬間にふさ와しい香りを提案します。",
    "ro-scene-1": "霧のかかった夜明け、目を覚ます爽やかさ",
    "ro-scene-2": "正午の光、最もバランスの取れた時間",
    "ro-scene-3": "深い夜、読書と共に楽しむ重厚な静寂",
    "ro-log-title": "ロースティング記録",
    "ro-log-batch": "最新バッチ",
    "ro-log-temp": "投入温度",
    "ro-sub-title": "TOKIMO ARCHIVE 購読",
    "ro-sub-desc": "毎月ロースターが厳選した豆と空間の写真を一緒にお届けします。",
    "ro-sub-btn": "購読を開始する",
    "ro-exp-title": "カッピング & クラス",
    "ro-exp-desc": "毎週土曜日、私たちが追求するコーヒーの方向性を共有します。",
    "ro-whole-title": "ビジネスパートナーシップ",
    "ro-whole-desc": "あなたの空間に最もふさ와しい豆とムードを提案します。",
    "ro-whole-btn": "サンプルキットを申し込む",

    // cafe
    // 共通および情報
    "cafe-info-open": "営業時間",
    "cafe-info-loc": "アクセス",
    "cafe-buy-btn": "カートに入れる",
    "cafe-shop-desc": "空間の体験を自宅にお届けします。",
    "cafe-shop-bean": "コーヒー豆",
    "cafe-shop-goods": "グッズ",
    
    // メニュー説明 (コーヒー/ドリップ)
    "cafe-menu-flat-desc": "香ばしいミルクの質感と濃厚なエスプレッソのバランス",
    "cafe-menu-latte-desc": "オーツミルクと自家製シロップのシグネチャーラテ",
    "cafe-menu-ame-desc": "すっきりとした深い味わいのデイリーコーヒー",
    "cafe-menu-drip1-desc": "フグレンスタイルの軽やかで爽やかなライトロースト",
    "cafe-menu-drip2-desc": "バランスの取れた甘みと柔らかな酸味の調和",
    "cafe-menu-drip3-desc": "華やかな花の香りと果実の甘み",
    
    // メニュー説明 (デザート/サンドイッチ)
    "cafe-menu-matcha-desc": "京都産抹茶を使用した濃厚な質感のテリーヌ",
    "cafe-menu-cheese-desc": "爽やかな酸味と滑らかなチーズのハーモニー",
    "cafe-menu-sando1-desc": "ふわふわの卵とワサビマヨのすっきりとした調과",
    "cafe-menu-sando2-desc": "甘いリンゴと香ばしいブリーチーズを添えたバゲット",
    
    // セットメニュー
    "cafe-set-tag": "セットメニュー",
    "cafe-set-title": "思索のためのチケット (THE SILENCE TICKET)",
    "cafe-set-desc": "本日のドリップコーヒー + テリーヌ1種 + インスピレーションノート1枚",

    // 가구 페이지
    "furn-intro-tag": "時間が留まるオブジェ",
    "furn-intro-title": "空間の本質を満たす家具",
    "furn-cat-all": "すべて見る",
    "furn-cat-table": "テーブル",
    "furn-cat-chair": "チェア",
    "furn-cat-sofa": "ソファ",
    "furn-cat-storage": "収納",
    "furn-footer-inquiry": "お問合せ",
    "furn-footer-faq": "よくある質問",
    "furn-footer-tel": "電話",
    "furn-footer-email": "メール",
    "furn-shop-desc": "厳選された素材と職人の手仕事が光る家具コレクション。",

    "nav-products": "製品",
    "nav-furniture-about": "ブランドについて",
    "nav-store": "店舗",
    "nav-archive": "アーカイブ",
    "furn-material-wood": "天然木",
    "furn-material-stone": "石材",
    "furn-material-metal": "金属",
    "furn-night-mode": "夜間照明",
    "furn-day-mode": "昼間照明",
    "furn-detail-view": "詳細を見る",
    "furn-footer-contact": "お問い合わせ",

    //스토리텔링 페이지
    'stat-nav-title': 'ステーショナリー・アーカイブ',
    // Hero & Manifesto
    'stat-hero-sub': '物質が与える本質的な重みを記録します。',
    'stat-hero-title': '記録の形。',
    'stat-cat-editorial': 'エディトリアル',
    'stat-cat-craft': '工芸',
    'stat-cat-tool': '道具',
    'stat-meta-paper': '紙質',
    'stat-meta-binding': '製本',
    'stat-meta-ink': 'インク',
    'stat-detail-text': '質感を触る',
    'stat-item-01-desc': '非塗공のオフホワイト紙の質感を活かした記録用紙。',
    'stat-item-02-desc': '手に触れる温度を考慮した 진鍮素材の万年筆。',
    // Anatomy Section: Logic
    'anatomy-logic-desc': '私にとってコードは、もう一つの製本です。画面上でピクセルを整렬する論理は、紙の上に文字を配置するエディトリアルデザインの精巧さに似ています。目に見えない構造が与える心地よさを設計します。',
    
    // Anatomy Section: Texture
    'anatomy-texture-desc': 'デジタルが与えられない唯一のもの、それは温もりです。指先に触れる紙の荒い粒子、万年筆の先が紙を擦る音。私たちは、その些細ながらも強力な感覚の瞬間をアーカイブします。',
    
    // Branding Story
    'stat-footer-story': 'TOKIMOは東京とソウル、その間の静かな余白から始まりました。ウェブという無形の空間と、物という有形の物体を繋ぐ実験を続けています。'
  },
  en: {
    // index
    "nav-about": "Architecture",
    "nav-project": "Repositories",
    "nav-connect": "Connect",
    "side-craft": "Digital Craftsmanship",
    "footer-cta": "Let’s build something simple.",

    "hero-sub-title": "Design-driven frontend & quiet visual storytelling",
    "hero-desc": `for cafes, small brands,<br>and quiet spaces.`,
    "hero-role": "frontend / branding / direction",
    "hero-cta": "Start a Project →",
    "meta-role-val": "Frontend Developer",
    "meta-base-val": "Seoul / Tokyo",
    "meta-status-val": "Available for freelance",

    "idx-about-p1": "Based in Seoul and Tokyo, designing calm and intentional digital experiences for brands and spaces.",
    "idx-about-p2": "Focusing on mood, pacing, and restrained interaction to create experiences that feel natural.",
    "idx-about-p3": "Interested in translating atmosphere — light, space, and silence — into digital form.",
    
    // project
    "proj-header-title": "Selected Projects",
    "proj-header-desc": "Focused on structure, branding, and digital experience.",
    "proj-header-note": "A selection of works exploring quiet structure and visual flow.",
    "proj-view": "Browse Selection",
    "proj-01-desc-full": "A minimal website for a fashion select shop. Focused on layout and product flow.",
    "proj-02-desc-full": "A simple website for a quiet coffee shop. Reflecting atmosphere rather than features.",
    
    // services
    "svc-title": "What I Do",
    "svc-desc": "Simple websites for cafes and small brands.",
    "svc-proof": "Simple structure, calm interaction, and clear branding.",
    "svc-01": "Cafe websites",
    "svc-01-sub": "Single-page or small websites",
    "svc-02": "Landing pages",
    "svc-02-sub": "For small brands and projects",
    "svc-03": "Frontend",
    "svc-cta": "Available for small projects. Contact via Instagram or Email.",

    // process
    "proc-sub": "The journey of a brand landing in the digital space.",
    "proc-01-title": "Discovery & Mood",
    "proc-01-desc": "Analyzing brand essence and defining direction through visual moodboards.",
    "proc-02-title": "Digital Craft",
    "proc-02-desc": "Implementing quiet interactions using editorial layouts and Vanilla JS.",
    "proc-03-title": "Localization & Launch",
    "proc-03-desc": "Translation optimization and reflecting local nuances for the Japanese market.",

    // cta
    "cta-jp-small": "Creating silence, together.",
    "cta-main": `Let’s archive your Brand Identity.`,
    "cta-sub-text": "I look forward to hearing about your new project.",
    "cta-link-text": "Start a Conversation →",

    // FAQ & Status
    "faq-title": "Frequently Asked Questions",
    "faq-q1": "How long does it take?",
    "faq-a1": "Around 3–5 weeks, depending on the project.",
    "faq-q2": "Can I request only development?",
    "faq-a2": "Yes, if you already have a design.",

    // about 페이지
    "about-hero-title": "Architecting the breath of brands into digital silence.",
    "about-hero-sub": "A frontend director based in Seoul and Tokyo, designing brand philosophy into digital spaces.",
    "about-philo-title": "Structured Sensitivity",
    "about-philo-desc1": "Preparing for a journey that starts in Seoul and continues to the streets of Tokyo. To me, a website is not just an interface, but a 'Digital Flagship Store' where a brand's philosophy resides.",
    "about-philo-desc2": "I focus on delivering the core value of a brand through clean structure, raw textures, and quiet interactions, stripping away unnecessary noise.",
    "about-note-title": "Director’s Note",
    "about-note-quote": "\"Technology is most beautiful when invisible.\"",
    "about-note-desc": "Beyond building websites, TOKIMO plans to operate a physical cafe and fashion brand in Japan. I approach every project as a 'Digital Craftsman', translating the void of space and the texture of objects into digital form.",
    "about-signature": "TOKIMO / DIRECTOR HYUNWOO",
    
    "about-presence-title": "Local Presence",
    "about-presence-desc": "Based in Seoul and Tokyo, I provide seamless communication tailored to Japanese business etiquette. Beyond translation, I re-engineer your brand's atmosphere for the Japanese market.",

    // project 페이지
    "page-title": "PROJECTS | TOKIMO ARCHIVE",
    "archive-title": "WORK SELECTED",
    "cat-all": "ALL",
    "cat-space": "SPACE",
    "cat-object": "OBJECT",
    "cat-identity": "IDENTITY",

    "p01-name": `Seta Fashion Label Digital Flagship`,
    "p01-desc": "Visual identity and digital flagship design for a Tokyo-based label, capturing the texture of natural light.",
    "p02-name": `Slow Roastery`,
    "p02-desc": "A web archive focused on the process and texture of a local roastery.",
    "p03-name": `Kissa Local Roastery`,
    "p03-desc": "A branding project translating the spatial experience of a local cafe into a digital archive.",
    "p04-name": `Aesthetic Select Shop`,
    "p04-desc": "E-commerce guidelines for a lifestyle select shop focused on materiality and daily life.",
    "p05-name": `Stationery Archive`,
    "p05-desc": "An object archive project focusing on the tactile sensation and physical properties of stationery.",

    "p-cta-title": `Looking for Digital Craftsmanship?`,
    "p-cta-desc": "Translating your brand's unique atmosphere into digital form. Welcoming collaborations for branding, web development, and Japan market entry.",
    "p-cta-btn": "START A PROJECT",

    // conncet 페이지
    "connect-header-title": "Log your narrative.",
    "connect-phi-label": "01 // PHILOSOPHY",
    "connect-phi-text": "We build digital archives that endure, not just websites.",
    "connect-res-label": "02 // RESPONSE_TIME",
    "connect-res-text": "All proposals are reviewed within 48 hours with deep consideration.",
    "connect-dir-label": "03 // DIRECT_ACCESS",
    "form-id-label": "IDENTIFIER (NAME)",
    "form-protocol-label": "PROTOCOL (EMAIL/SNS)",
    "form-field-label": "FIELD_SELECTION",
    "form-narrative-label": "PROJECT_NARRATIVE",
    "form-narrative-placeholder": "Describe the project background and goals.",
    "form-submit": "EXECUTE LOG",
    "system-waiting": "SYSTEM_READY: WAITING_FOR_INPUT",
    "system-success": "Project logged to archive.",

    // fashion 페이지
    "f-title": "Curated Silence",
    "f-subtitle": "Archive 01",
    "f-philosophy": "We design the background. Not just clothes, but the atmosphere of the space they inhabit.",
    "qv-material": "Material",
    "qv-philosophy": "Philosophy",
    "qv-close": "Close",
    "item1-name": "Soft Wool Layer",
    "item1-mat": "80% Wool, 20% Cashmere (Muted Grey Tone)",
    "item1-desc": "The quietness the moment it touches the skin. We removed unnecessary details, leaving only the silhouette and negative space.",

    // roastery 페이지
    "roastery-id": "#002 / ROASTERY",
    "roastery-title": "TOKIMO ROASTERY & ARCHIVE",
    "roastery-desc": "A cup in a space where time seems to stand still. We design small moments of silence in the city.",
    "roastery-role": "Brand Design, Web Development",
    "roastery-philosophy-title": "THE SILENCE IN COFFEE",
    "roastery-hour": "HOUR",
    "roastery-next": "PREVIOUS PROJECT",
    // 
    "ro-curation-tag": "SCENE-BASED CURATION",
    "ro-curation-title": "WHICH MOMENT ARE YOU IN?",
    "ro-curation-desc": "We suggest aromas that suit your moment, rather than just roast levels.",
    "ro-scene-1": "Misty Dawn, Refreshing Awakening",
    "ro-scene-2": "Noon Light, The Most Balanced Time",
    "ro-scene-3": "Midnight, Heavy Silence with Reading",
    "ro-log-title": "ROASTING LOG",
    "ro-log-batch": "LAST BATCH",
    "ro-log-temp": "CHARGE TEMP",
    "ro-sub-title": "TOKIMO ARCHIVE SUBSCRIPTION",
    "ro-sub-desc": "Monthly delivery of selected beans and aesthetic brand cards.",
    "ro-sub-btn": "START SUBSCRIPTION",
    "ro-exp-title": "CUPPING & CLASS",
    "ro-exp-desc": "Every Saturday, we share the direction of the coffee we pursue.",
    "ro-whole-title": "B2B WHOLESALE",
    "ro-whole-desc": "We propose the best beans and moods for your unique space.",
    "ro-whole-btn": "REQUEST SAMPLE KIT",

    // cafe
    // Info & Actions
    "cafe-info-open": "OPEN HOURS",
    "cafe-info-loc": "LOCATION",
    "cafe-buy-btn": "ADD TO CART",
    "cafe-shop-desc": "Delivering the spatial experience to your home.",
    "cafe-shop-bean": "BEAN",
    "cafe-shop-goods": "GOODS",
    
    // Menu (Coffee/Drip)
    "cafe-menu-flat-desc": "Balance of nutty milk texture and rich espresso",
    "cafe-menu-latte-desc": "Signature latte with oat milk and homemade syrup",
    "cafe-menu-ame-desc": "Clean and deep flavor daily coffee",
    "cafe-menu-drip1-desc": "Fuglen-style light and refreshing light roasting",
    "cafe-menu-drip2-desc": "Harmony of balanced sweetness and soft acidity",
    "cafe-menu-drip3-desc": "Bright floral aroma and fruity sweetness",
    
    // Menu (Dessert/Sandwich)
    "cafe-menu-matcha-desc": "Rich and fudgy terrine made with Kyoto matcha",
    "cafe-menu-cheese-desc": "Harmony of fresh acidity and smooth cheese",
    "cafe-menu-sando1-desc": "Clean combination of soft egg and wasabi mayo",
    "cafe-menu-sando2-desc": "Baguette with sweet apple and savory Brie cheese",
    
    // Set Menu
    "cafe-set-tag": "SET MENU",
    "cafe-set-title": "THE SILENCE TICKET",
    "cafe-set-desc": "Today's Drip Coffee + 1 Terrine + 1 Inspiration Note",

    // 가구 페이지
    "furn-intro-tag": "OBJECTS OF TIME",
    "furn-intro-title": "FURNITURE THAT FILLS THE ESSENCE",
    "furn-cat-all": "ALL",
    "furn-cat-table": "TABLE",
    "furn-cat-chair": "CHAIR",
    "furn-cat-sofa": "SOFA",
    "furn-cat-storage": "STORAGE",
    "furn-footer-inquiry": "INQUIRY",
    "furn-footer-faq": "FAQ",
    "furn-footer-tel": "TEL",
    "furn-footer-email": "EMAIL",
    "furn-shop-desc": "A collection of furniture crafted with selected materials and artisan touch.",

    "nav-products": "PRODUCTS",
    "nav-furniture-about": "ABOUT",
    "nav-store": "STORE",
    "nav-archive": "ARCHIVE",
    "furn-material-wood": "WOOD",
    "furn-material-stone": "STONE",
    "furn-material-metal": "METAL",
    "furn-night-mode": "NIGHT MODE",
    "furn-day-mode": "DAY MODE",
    "furn-detail-view": "VIEW DETAIL",
    "furn-footer-contact": "CONTACT",

    // 스토리텔링 페이지
    'stat-nav-title': 'STATIONERY ARCHIVE',
    // Hero & Manifesto
    'stat-hero-sub': 'We record the essential weight of materiality.',
    'stat-hero-title': 'Form of Archive.',
    'stat-cat-editorial': 'EDITORIAL',
    'stat-cat-craft': 'CRAFT',
    'stat-cat-tool': 'TOOL',
    'stat-meta-paper': 'PAPER',
    'stat-meta-binding': 'BINDING',
    'stat-meta-ink': 'INK',
    'stat-detail-text': 'FEEL THE TEXTURE',
    'stat-item-01-desc': 'Archive paper utilizing the raw texture of uncoated off-white paper.',
    'stat-item-02-desc': 'Brass fountain pen designed with the temperature of the hand in mind.',
    // Branding Story
    'stat-footer-story': 'TOKIMO began in the quiet void between Tokyo and Seoul. We continue the experiment of bridging intangible web spaces with tangible objects.',
    // Anatomy Section: Logic
    'anatomy-logic-desc': 'To me, code is another form of binding. The logic of aligning pixels on a screen resembles the precision of editorial design. I design the comfort that invisible structures provide.',
    
    // Anatomy Section: Texture
    'anatomy-texture-desc': 'The only thing digital cannot provide is warmth. The raw grain of paper at your fingertips, the sound of a nib scratching the surface. We archive those subtle yet powerful sensory moments.'

  }

};