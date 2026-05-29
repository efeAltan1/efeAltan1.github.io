export type Lang = 'en' | 'tr'
export type T = { en: string; tr: string }

export const t = (obj: T, lang: Lang) => obj[lang]

export const content = {
  nav: {
    logo: 'efe.dev',
    links: {
      projects: { en: 'Projects',   tr: 'Projeler'   },
      about:    { en: 'About',      tr: 'Hakkımda'   },
      contact:  { en: 'Contact',    tr: 'İletişim'   },
    },
  },

  hero: {
    tag:            { en: 'Available for collaboration', tr: 'İş birliğine açık'          },
    name:           'Efe Altan',
    subtitlePrefix: { en: 'Software Developer & ',       tr: 'Yazılım Geliştirici & '     },
    typewriter: {
      en: ['AI Builder', 'Full-Stack Dev', 'Problem Solver'],
      tr: ['YZ İnşaatçısı', 'Tam Yığın Geliştirici', 'Problem Çözücü'],
    },
    bio: {
      en: 'I build tools that make work smarter — from AI-powered document processors to full-stack web platforms. Comfortable across the entire stack, with a focus on clean architecture and real-world impact.',
      tr: 'İşi daha akıllı hale getiren araçlar inşa ediyorum — yapay zeka destekli belge işleyicilerden tam yığın web platformlarına kadar. Tüm katmanlarda rahatım; temiz mimari ve gerçek dünya etkisine odaklanıyorum.',
    },
    ctaPrimary: { en: 'View Projects ↓', tr: 'Projeleri Gör ↓' },
    ctaGhost:   { en: 'Get in Touch',    tr: 'İletişime Geç'   },
    scroll:     { en: 'SCROLL',          tr: 'KAYDIR'          },
  },

  projects: {
    sectionTitle: { en: 'Projects', tr: 'Projeler'           },
    moreSoon:     { en: 'More coming soon', tr: 'Daha fazlası yakında' },
    demoBtn:      { en: 'See Demo ↗', tr: 'Demo ↗'          },
    items: [
      {
        monogram: 'CHX',
        status: 'wip' as const,
        statusLabel: { en: 'In Development', tr: 'Geliştiriliyor' },
        name: 'CHEXOT',
        desc: {
          en: 'AI-powered document processor that extracts structured data from invoices using Claude API — human-in-the-loop review, quality gates, and Excel export.',
          tr: 'Claude API kullanarak faturalardan yapılandırılmış veri çıkaran yapay zeka destekli belge işleyici — insan denetimli gözden geçirme, kalite kontrolleri ve Excel dışa aktarımı.',
        },
        github: 'https://github.com/efeAltan1/Chexot',
        demo: '/projects/chexot',
        tags: [
          { label: 'Claude API', accent: true },
          { label: 'AI',         accent: true },
          { label: 'React'               },
          { label: 'TypeScript'          },
          { label: 'FastAPI'             },
          { label: 'MySQL'               },
        ],
      },
      {
        monogram: 'SMP',
        status: 'live' as const,
        statusLabel: { en: 'Live', tr: 'Yayında' },
        name: 'SMP — Student Management Platform',
        desc: {
          en: 'Full-stack student management with attendance tracking, grade management, and reporting. Deployed on Railway + Netlify with a PostgreSQL database.',
          tr: 'Devam takibi, not yönetimi ve raporlama içeren tam yığın öğrenci yönetim sistemi. Railway + Netlify üzerinde PostgreSQL ile dağıtıldı.',
        },
        github: 'https://github.com/efeAltan1',
        demo: '/projects/smp',
        tags: [
          { label: 'React'      },
          { label: 'TypeScript' },
          { label: 'Node.js'    },
          { label: 'PostgreSQL' },
          { label: 'Railway'    },
          { label: 'Netlify'    },
        ],
      },
      {
        monogram: '30D',
        status: 'live' as const,
        statusLabel: { en: 'Completed', tr: 'Tamamlandı' },
        name: '30 Days of Python',
        desc: {
          en: 'A 30-day Python challenge covering fundamentals to advanced topics — data structures, OOP, file I/O, APIs, and more. One project per day, fully documented.',
          tr: "Temellerden ileri konulara kadar Python öğrenmek için 30 günlük bir meydan okuma — veri yapıları, OOP, dosya I/O, API'ler ve daha fazlası. Günde bir proje, tam dokümantasyon.",
        },
        github: 'https://github.com/efeAltan1',
        demo: '/projects/30daypython',
        tags: [
          { label: 'Python',          accent: true },
          { label: 'OOP'                          },
          { label: 'Data Structures'              },
          { label: 'APIs'                         },
          { label: 'File I/O'                     },
        ],
      },
    ],
  },

  about: {
    sectionTitle: { en: 'About', tr: 'Hakkımda' },
    paragraphs: [
      {
        en: "I'm a developer with a passion for building things that actually get used. My work spans the full stack — from designing clean React interfaces to architecting Python backends that handle real business logic.",
        tr: 'Gerçekten kullanılan şeyler inşa etme tutkusuna sahip bir geliştiriciyim. Çalışmalarım temiz React arayüzleri tasarlamaktan Python backend mimarisi kurmaya kadar tüm katmanları kapsıyor.',
      },
      {
        en: "Recently I've been deep in the AI space, integrating large language models into production workflows — not as demos, but as real tools that replace manual processes inside companies.",
        tr: 'Son zamanlarda yapay zeka alanına derinlemesine daldım; büyük dil modellerini üretim iş akışlarına entegre ediyorum — demo olarak değil, şirketlerde manuel süreçlerin yerini alan gerçek araçlar olarak.',
      },
      {
        en: 'Outside of code, I care about systems thinking, clear communication, and shipping things that are both functional and well-crafted.',
        tr: 'Kodun dışında sistem düşüncesi, açık iletişim ve hem işlevsel hem de özenle yapılmış şeyler çıkarmak önemlidir benim için.',
      },
    ],
    cvBtn: { en: 'View full CV →', tr: "CV'yi Gör →" },
    skills: [
      { en: 'React & TypeScript',   tr: 'React & TypeScript'    },
      { en: 'Python & FastAPI',     tr: 'Python & FastAPI'      },
      { en: 'Claude API / AI',      tr: 'Claude API / YZ'       },
      { en: 'SQL Databases',        tr: 'SQL Veritabanları'     },
      { en: 'Tailwind CSS',         tr: 'Tailwind CSS'          },
      { en: 'REST API Design',      tr: 'REST API Tasarımı'     },
      { en: 'Git & GitHub',         tr: 'Git & GitHub'          },
      { en: 'Railway / Netlify',    tr: 'Railway / Netlify'     },
    ],
  },

  contact: {
    heading:  { en: "Let's talk.", tr: 'Konuşalım.'                                                              },
    subtitle: { en: "Whether it's a project, a collaboration, or just a conversation — my inbox is open.", tr: 'Bir proje, iş birliği veya sadece bir sohbet olsun — mesajlarınıza açığım.' },
    email:    'y.efealtan@gmail.com',
    github:   'https://github.com/efeAltan1',
  },

  footer: {
    copy:  '© 2026 Efe Altan',
    built: { en: 'Built with React + Tailwind', tr: 'React + Tailwind ile yapıldı' },
  },
} as const
