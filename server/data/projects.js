export const projects = [
  {
    id: "defense-mobile",
    title: "실시간 정보공유를 위한 국방 모바일 환경 신뢰 연동기술개발",
    description: "5G 유/무선 네트워크 구간별 품질 모니터링 시스템을 설계, 개발 및 구축한 프로젝트입니다. 마이크로초(μs) 단위의 정밀한 시간 동기화와 효율적인 데이터 수집/시각화를 구현했습니다.",
    period: "2022.04 - 현재",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=Defense+Mobile&font=roboto",
    tech: ["Python", "FastAPI", "PTP", "Docker", "Swagger Docs", "Linux", "MongoDB"],
    role: "설계, 개발, 구축, 일정관리",
    features: [
      "5G 네트워크 품질 모니터링",
      "실시간 데이터 수집 및 시각화",
      "정밀 시간 동기화",
      "구간별 네트워크 분석"
    ],
    achievements: [
      "품질 모니터링 시간 동기화 오차 마이크로초(μs) 단위로 최적화",
      "효율적인 데이터 수집 및 시각화 시스템 구축"
    ],
    techDetails: [
      "FastAPI 기반 백엔드 시스템 구현",
      "PTP 기반 정밀 시간 동기화",
      "Docker 컨테이너화",
      "MongoDB 기반 데이터 관리"
    ]
  },
  {
    id: "daegu-computing",
    title: "국가 정보자원 관리원 대구3센터 컴퓨팅 자원풀 구축",
    description: "대규모 컴퓨팅 자원풀 구축 프로젝트로, 아키텍처 설계부터 구축 계획, 테스트까지 전반적인 기술 문서화와 이해관계자 간 원활한 의사소통을 담당했습니다.",
    period: "2023.04 - 2023.09",
    image: "https://placehold.co/600x400/059669/ffffff?text=Computing+Pool&font=roboto",
    tech: ["VB", "Excel", "BAT", "Shell Script"],
    role: "설계문서 작성, 구축, 기술 커뮤니케이션",
    features: [
      "컴퓨팅 자원풀 아키텍처 설계",
      "방화벽 이중화 구성",
      "자원 사용량 모니터링",
      "기술 문서화"
    ],
    achievements: [
      "방화벽 이중화 라우팅 순환문제 해결",
      "효율적인 자원 사용량 수집 처리 구현"
    ],
    techDetails: [
      "상세 아키텍처 설계서 작성",
      "구축 및 테스트 계획서 수립",
      "Shell Script 기반 자동화"
    ]
  },
  {
    id: "network-monitoring",
    title: "네트워크 인프라 모니터링 시스템",
    description: "네트워크 인프라 상태를 실시간으로 모니터링하는 웹 기반 대시보드 시스템을 개발했습니다. 특히 Node 정보처리 및 렌더링 성능을 대폭 개선했습니다.",
    period: "2021.01 - 2021.04",
    image: "https://placehold.co/600x400/dc2626/ffffff?text=Network+Monitoring&font=roboto",
    tech: ["Spring Boot", "Java"],
    role: "웹 대시보드 개발",
    features: [
      "실시간 네트워크 모니터링",
      "성능 최적화된 데이터 처리",
      "직관적인 대시보드 UI"
    ],
    achievements: [
      "Node 정보처리 및 렌더링 속도 개선 O(n) -> O(log n)"
    ],
    techDetails: [
      "Spring Boot 기반 백엔드 구현",
      "최적화된 데이터 처리 알고리즘",
      "효율적인 프론트엔드 렌더링"
    ]
  },
  {
    id: "sdn-control",
    title: "초저지연 네트워크 서비스를 위한 SDN기반 관제 시스템",
    description: "SDN 기반의 네트워크 관제 시스템 연구 프로젝트로, 클라우드 관리 플랫폼을 개발하고 성능을 최적화했습니다.",
    period: "2020.05 - 2024.06",
    image: "https://placehold.co/600x400/4f46e5/ffffff?text=SDN+Control&font=roboto",
    tech: ["ElasticSearch", "Kibana", "Docker", "Shell Script", "gRPC", "Linux", "C", "Vue3.js", "MongoDB"],
    role: "설계/개발/구축 책임",
    features: [
      "클라우드 관리 플랫폼",
      "실시간 네트워크 모니터링",
      "인프라 자동화"
    ],
    achievements: [
      "아키텍처 개선으로 개발기간 1년에서 3개월로 단축",
      "시스템 성능 최적화"
    ],
    techDetails: [
      "ELK 스택 기반 모니터링",
      "gRPC 기반 통신",
      "Vue3.js 프론트엔드",
      "Docker 컨테이너화"
    ]
  },
  {
    id: "security-analysis",
    title: "악성코드 분석 및 보안취약점 분석 & ZeroTrust",
    description: "시스템 보안 취약점을 분석하고 악성코드 침투 코드를 분석하는 프로젝트를 수행했습니다.",
    period: "2022.05 - 2022.12",
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=Security+Analysis&font=roboto",
    tech: ["보안분석도구", "ZeroTrust"],
    role: "악성코드/보안취약점/침투시나리오 분석",
    features: [
      "악성코드 분석",
      "시스템 취약점 분석",
      "ZeroTrust 솔루션"
    ],
    achievements: [
      "악성코드 소스 분석 완료",
      "ZeroTrust 솔루션 공급 성공"
    ],
    techDetails: [
      "악성코드 분석 기법",
      "보안 취약점 분석 방법론",
      "ZeroTrust 아키텍처"
    ]
  },
  {
    id: "housing-research",
    title: "국토교통부 R&D 주거환경연구사업",
    description: "대규모 부동산 데이터를 처리하고 최적화하는 시스템을 개발했습니다. 데이터 처리 파이프라인을 대폭 개선하여 처리 시간을 획기적으로 단축했습니다.",
    period: "2017.01 - 2021.12",
    image: "https://placehold.co/600x400/0891b2/ffffff?text=Housing+Research&font=roboto",
    tech: ["MySQL", "GIS", "Spring Boot", "Java", "Alteryx"],
    role: "데이터분석/시스템 개발/DB/로직 최적화",
    features: [
      "부동산 DB 프로세싱",
      "GIS 데이터 처리",
      "데이터 파이프라인 최적화"
    ],
    achievements: [
      "데이터 처리 시간 48시간에서 30분으로 단축",
      "주택등록번호 매칭 신뢰도 95% 달성"
    ],
    techDetails: [
      "MySQL DB 튜닝",
      "GIS 데이터 처리 시스템",
      "최적화된 데이터 파이프라인"
    ]
  },
  {
    id: "spine-doctors",
    title: "최소 침습 시뮬레이터 Spine Doctor's",
    description: "의료 시뮬레이션을 위한 영상처리 시스템을 개발하여 검출 정확도와 처리 속도를 크게 개선했습니다.",
    period: "2018.01 - 2018.12",
    image: "https://placehold.co/600x400/0d9488/ffffff?text=Spine+Doctors&font=roboto",
    tech: ["C#", "OpenCV", "WPF", "Windows API"],
    role: "영상처리 및 소프트웨어개발",
    features: [
      "의료 시뮬레이션",
      "영상처리",
      "정확도 개선"
    ],
    achievements: [
      "시뮬레이션 정확도 70%에서 95%로 개선",
      "처리 시간 3분에서 3초로 단축"
    ],
    techDetails: [
      "OpenCV 기반 영상처리",
      "WPF 기반 UI 구현",
      "Windows API 통합"
    ]
  },
  {
    id: "network-security",
    title: "네트워크 보안접속 에이전트 개발",
    description: "네트워크 패킷 레벨에서 동작하는 보안접속 에이전트를 개발하여 시스템 접속 성능을 크게 개선했습니다.",
    period: "2017.01 - 2017.12",
    image: "https://placehold.co/600x400/0369a1/ffffff?text=Network+Security&font=roboto",
    tech: ["C++", "Windows API"],
    role: "개발, 최적화",
    features: [
      "네트워크 패킷 처리",
      "라우팅 관리",
      "가상인터페이스 관리"
    ],
    achievements: [
      "시스템 접속 패킷 처리 시간 1분에서 10초로 단축"
    ],
    techDetails: [
      "패킷 레벨 처리 최적화",
      "네트워크 가상인터페이스 관리",
      "Windows API 통합"
    ]
  },
  {
    id: "realtime-drawing-call",
    title: "실시간 양방향 판서 통화 앱",
    description: "WebRTC 기반의 실시간 통화와 드로잉 기능을 결합한 혁신적인 안드로이드 애플리케이션입니다. 통화 중 실시간 판서가 가능한 솔루션으로, 프로토콜 최적화를 통해 통화 품질을 대폭 개선했습니다.",
    period: "2016.05 - 2016.12",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=Drawing+Call&font=roboto",
    tech: ["Android", "Java", "Spring Boot", "WebRTC", "Video Stream"],
    role: "안드로이드 앱 설계 및 개발, 서버 개발",
    features: [
      "실시간 음성/영상 통화",
      "통화 중 실시간 드로잉 기능",
      "최적화된 통신 프로토콜",
      "낮은 지연시간의 영상 스트리밍",
      "안정적인 통화 품질"
    ],
    achievements: [
      "통화 드랍률 50%에서 2%로 대폭 개선",
      "실시간 통신 프로토콜 특허 출원",
      "영상/음성 동기화 최적화"
    ],
    techDetails: [
      "WebRTC를 활용한 P2P 통신 구현",
      "실시간 드로잉 동기화 프로토콜 개발",
      "Spring Boot 기반 시그널링 서버 구현",
      "안드로이드 네이티브 코드 최적화"
    ]
  },
  {
    id: "tablet-meeting",
    title: "태블릿 기반 회의 앱",
    description: "기업용 태블릿 기반 회의 솔루션으로, 암호화된 파일 관리와 효율적인 파일 전송 시스템을 갖춘 안드로이드 애플리케이션입니다.",
    period: "2016.01 - 2016.04",
    image: "https://placehold.co/600x400/059669/ffffff?text=Meeting+App&font=roboto",
    tech: ["Android", "Java", "Spring Boot", "Socket 통신"],
    role: "앱 설계/개발, 파일 관리 (암호화) 서버개발",
    features: [
      "암호화된 파일 관리 시스템",
      "실시간 파일 공유",
      "회의록 작성 및 공유",
      "사용자 권한 관리",
      "실시간 협업 기능"
    ],
    achievements: [
      "파일 전송 효율 300% 향상",
      "커스텀 전송 프로토콜 개발",
      "보안 시스템 구축"
    ],
    techDetails: [
      "소켓 기반 실시간 통신 구현",
      "파일 암호화/복호화 시스템",
      "Spring Boot 기반 RESTful API",
      "효율적인 파일 전송 프로토콜"
    ]
  },
  {
    id: "smart-school",
    title: "양방향 스마트스쿨 솔루션",
    description: "교육 현장을 위한 혁신적인 스마트 교육 플랫폼으로, 실시간 양방향 소통과 효율적인 콘텐츠 전송을 지원하는 종합 교육 솔루션입니다.",
    period: "2013.03 - 2014.12",
    image: "https://placehold.co/600x400/dc2626/ffffff?text=Smart+School&font=roboto",
    tech: ["Android", "Java", "Windows API", "C#", "WPF", "WCF", "Socket 통신"],
    role: "앱 개발/네트워크 엔지니어",
    features: [
      "실시간 양방향 교육 플랫폼",
      "동시 영상 전송 시스템",
      "학습자 참여 모니터링",
      "교육 콘텐츠 관리",
      "실시간 피드백 시스템"
    ],
    achievements: [
      "특허 2건 취득 (통신 프로토콜, 무선기반 동시 영상전송)",
      "동시 처리 능력 5대에서 30대로 향상",
      "전송 효율 80%에서 98%로 개선",
      "응답속도 10초에서 1초 이내로 단축"
    ],
    techDetails: [
      "WPF 기반 교사용 인터페이스 개발",
      "안드로이드 학생용 앱 개발",
      "실시간 데이터 동기화 시스템",
      "멀티미디어 스트리밍 최적화",
      "네트워크 프로토콜 설계 및 구현"
    ]
  }
];
