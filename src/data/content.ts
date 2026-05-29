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
    typewriter: {
      en: ['Software Developer', 'Data Engineer', 'Systems Thinker', 'AI Evaluator', 'Full-Stack Developer', 'Data Analyst', 'IT Enthusiast'],
      tr: ['Yazılım Geliştirici', 'Veri Mühendisi', 'Sistem Düşünürü', 'YZ Değerlendirici', 'Tam Yığın Geliştirici', 'Veri Analisti', 'Teknoloji Tutkunu'],
    },
    bio: {
      en: "I build tools and systems around data, AI, and workflow design, with a focus on evaluation and making things work better than they did before. When I'm not building, you'll usually find me out on a trail soaking in the quiet of nature, putting up shots on a basketball court, or occasionally unwinding with video games.",
      tr: 'TR — coming soon',
    },
    ctaPrimary: { en: 'View Projects ↓', tr: 'Projeleri Gör ↓' },
    ctaGhost:   { en: 'Get in Touch',    tr: 'İletişime Geç'   },
    scroll:     { en: 'SCROLL',          tr: 'KAYDIR'          },
  },

  projects: {
    sectionTitle: { en: 'Projects', tr: 'Projeler'           },
    moreSoon:     { en: 'More coming soon', tr: 'Daha fazlası yakında' },
    demoBtn:      { en: 'See Demo', tr: 'Demo' },
    items: [
      {
        monogram: 'CHX',
        status: 'wip' as const,
        statusLabel: { en: 'In Development', tr: 'Geliştiriliyor' },
        name: 'CHEXOT',
        desc: {
          en: 'Extracts structured data from invoice PDFs using the Claude API, with a Flask backend and React frontend. Includes a human-in-the-loop review layer, quality gates to catch extraction errors, and Excel export for downstream use.',
          tr: 'TR — coming soon',
        },
        github: 'https://github.com/efeAltan1/Chexot',
        demo: '/projects/chexot',
        tags: [
          { label: 'Claude API', accent: true },
          { label: 'AI Evals',   accent: true },
          { label: 'React'               },
          { label: 'TypeScript'          },
          { label: 'Flask'               },
          { label: 'PostgreSQL'          },
        ],
      },
      {
        monogram: 'SMP',
        status: 'live' as const,
        statusLabel: { en: 'Live', tr: 'Yayında' },
        name: 'SMP: Student Management Platform',
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
          { label: 'MongoDB'    },
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
          en: 'A 30-day Python challenge with one fully documented project per day. Covers core fundamentals, data structures, OOP, file I/O, databases, regex, OS, and APIs.',
          tr: 'TR — coming soon',
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
        en: "I'm a software developer with a full-stack background and a heavy lean toward data. My core stack is React, TypeScript, Python, and Flask, with MongoDB and PostgreSQL on the database side.",
        tr: "Veriye güçlü bir yönelimi olan, tam yığın bir yazılım geliştiriciyim. Temel stack'im React, TypeScript, Python ve Flask; veritabanı tarafında MongoDB ve PostgreSQL kullanıyorum.",
      },
      {
        en: "Most of my work sits at the intersection of data engineering and product development. I've built ETL pipelines with dbt, run data quality checks with Great Expectations, and done SQL-heavy analytics work at Rollic Games, building dashboards, restructuring metric tables, and debugging data stream issues. On the product side, I've shipped full-stack apps using Playwright, BeautifulSoup, and React, built internal QA tooling, and currently design and run AI evaluation workflows with custom evals.",
        tr: "Çalışmalarımın büyük bölümü veri mühendisliği ile ürün geliştirmenin kesişiminde yer alıyor. dbt ile ETL pipeline'ları kurdum, Great Expectations ile veri kalitesi kontrolleri yaptım ve Rollic Games'te yoğun SQL analitiği gerçekleştirdim; dashboard'lar oluşturdum, metrik tablolarını yeniden yapılandırdım ve veri akışı sorunlarını giderdim. Ürün tarafında Playwright, BeautifulSoup ve React ile full-stack uygulamalar geliştirdim, dahili QA araçları inşa ettim ve şu an özel değerlendirmeler yazarak yapay zeka değerlendirme iş akışları tasarlıyor ve yönetiyorum.",
      },
      {
        en: "I care about clean architecture, reliable data, and shipping things that hold up under real use.",
        tr: "Temiz mimari, güvenilir veri ve gerçek kullanımda ayakta kalan şeyler çıkarmak benim için önemlidir.",
      },
    ],
    cvBtn: { en: 'Download CV', tr: "CV'yi İndir" },
    skills: [
      { en: 'React & TypeScript',       tr: 'React & TypeScript'         },
      { en: 'Python & Flask',           tr: 'Python & Flask'             },
      { en: 'MongoDB & PostgreSQL',     tr: 'MongoDB & PostgreSQL'       },
      { en: 'dbt & Great Expectations', tr: 'dbt & Great Expectations'   },
      { en: 'AI Evaluations',           tr: 'YZ Değerlendirmeleri'       },
      { en: 'Playwright & BeautifulSoup', tr: 'Playwright & BeautifulSoup' },
      { en: 'ETL Pipelines',            tr: 'ETL Pipeline\'ları'          },
    ],
  },

  contact: {
    heading:  { en: "Let's talk.", tr: 'Konuşalım.' },
    subtitle: { en: "I'm always down to talk ideas, brainstorm a collaboration, or just meet new people in the space. Get in touch and let's figure out how we can work together.", tr: 'TR — coming soon' },
    email:    'y.efealtan@gmail.com',
    github:   'https://github.com/efeAltan1',
  },

  footer: {
    copy:  '© 2026 Efe Altan',
    built: { en: 'Built with React + Tailwind', tr: 'React + Tailwind ile yapıldı' },
  },
} as const
