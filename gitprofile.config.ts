const CONFIG = {
  github: {
    username: 'moliere73', 
  },
  base: '/meredithma/',
  projects: {
    github: {
      display: true,
      header: 'Featured Projects',
      mode: 'automatic', // 🔧 FIXED: Changed to automatic since manual projects don't exist
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [], // Empty for now
      },
    },
    external: {
      header: 'Research & Academic Projects',
      projects: [
        {
          title: 'Model-Based Transfer Learning (MBTL)',
          description: 'Bridging AI and Cognitive Science with strategic task selection achieving 5-43x sample efficiency in reinforcement learning. Published research connecting human cognition to machine learning.',
          imageUrl: 'https://via.placeholder.com/400x200/6366f1/ffffff?text=AI+Research',
          link: '#',
        },
        {
          title: 'Space Fortress Cognitive Game Engine',
          description: 'ML-powered cognitive research platform processing 1M+ player interactions with 99.9% data integrity. Built for Anderson ACT-R Lab at Carnegie Mellon.',
          imageUrl: 'https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Cognitive+Engine',
          link: '#',
        },
        {
          title: 'Advanced Generative AI Suite',
          description: 'Custom implementations of DDPM, optimized GPT with RoPE+GQA (35% memory reduction), LoRA fine-tuning, and Text-to-3D generation achieving state-of-the-art results.',
          imageUrl: 'https://via.placeholder.com/400x200/06b6d4/ffffff?text=Generative+AI',
          link: '#',
        },
      ],
    },
  },
  seo: { 
    title: 'Meredith Ma - AI Research Engineer & Cognitive Scientist', 
    description: 'Carnegie Mellon AI & Cognitive Science student specializing in generative AI, computer vision, and cognitive modeling. Research at Anderson ACT-R Lab.', 
    imageURL: '' 
  },
  social: {
    linkedin: 'merema',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'qianxunm@andrew.cmu.edu',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    // AI/ML Technologies
    'Python',
    'PyTorch', 
    'TensorFlow',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Reinforcement Learning',
    
    // Programming Languages
    'Java',
    'JavaScript',
    'TypeScript', 
    'C/C++',
    'Swift',
    'SQL',
    'R',
    'Go',
    
    // Frameworks & Libraries
    'React',
    'Node.js',
    'Next.js',
    'Django',
    'SpringBoot',
    'OpenCV',
    'NumPy',
    
    // Cloud & Tools
    'AWS',
    'Docker',
    'Git',
    'Linux/Unix',
    'MongoDB',
    'PostgreSQL',
    
    // Specialized
    'Cognitive Modeling',
    'ACT-R',
    'Transformers',
    'Diffusion Models',
    'RANSAC',
    'SVD Optimization',
  ],
  experiences: [
    {
      company: 'Anderson (ACT-R) Laboratory, Carnegie Mellon University',
      position: 'Undergraduate Research Scientist & ML Engineer',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://act-r.psy.cmu.edu/',
    },
    {
      company: 'SHER Laboratory, Carnegie Mellon University', 
      position: 'Research Assistant & Data Analyst',
      from: 'September 2023',
      to: 'December 2023',
      companyLink: 'https://www.cmu.edu/dietrich/psychology/sherlab/index.html',
    },
  ],
  certifications: [
    {
      name: 'Grace Hopper Celebration',
      body: 'Attending GHC 2024 & 2025',
      year: '2024-2025',
      link: 'https://ghc.anitab.org/',
    },
  ],
  educations: [
    {
      institution: 'Carnegie Mellon University',
      degree: 'Bachelor of Science in Artificial Intelligence & Cognitive Science, Minor: Game Design',
      from: '2022',
      to: '2026',
    },
  ],
  publications: [],
  blog: {
    source: '',  
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cyberpunk',
      'synthwave',
      'forest',
      'luxury',
      'dracula',
      'night',
      'coffee',
      'winter',
      'nord',
      'sunset',
    ],
  },

  footer: `Built with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and passion for AI 🤖`,

  enablePWA: true,
};

export default CONFIG;
