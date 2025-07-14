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
        // 🔧 FIXED: Commented out since these repos don't exist
        // projects: [
        //   'moliere73/model-based-transfer-learning',
        //   'moliere73/generative-ai-projects', 
        //   'moliere73/computer-vision-ar',
        //   'moliere73/c0-virtual-machine',
        //   'moliere73/ai-pacman',
        //   'moliere73/sudoku-game'
        // ],
        projects: [], // Empty for now
      },
    },
    external: {
      header: 'Research & Academic Projects',
      projects: [
        {
          title: 'Model-Based Transfer Learning (MBTL)',
          description: 'Bridging AI and Cognitive Science with strategic task selection achieving 5-43x sample efficiency in reinforcement learning. Published research connecting human cognition to machine learning.',
          //imageUrl: 'https://img.freepik.com/free-vector/artificial-intelligence-ai-processor-chip-symbol-futuristic-technology_107791-17836.jpg',
          link: '#', // 🔧 FIXED: Added placeholder link
        },
        {
          title: 'Space Fortress Cognitive Game Engine',
          description: 'ML-powered cognitive research platform processing 1M+ player interactions with 99.9% data integrity. Built for Anderson ACT-R Lab at Carnegie Mellon.',
          //imageUrl: 'https://img.freepik.com/free-vector/gradient-neuromorphic-chip-illustration_23-2149676455.jpg',
          link: '#', // 🔧 FIXED: Added placeholder link
        },
        {
          title: 'Advanced Generative AI Suite',
          description: 'Custom implementations of DDPM, optimized GPT with RoPE+GQA (35% memory reduction), LoRA fine-tuning, and Text-to-3D generation achieving state-of-the-art results.',
          //imageUrl: 'https://img.freepik.com/free-vector/gradient-ai-robot-vectorial-illustration_23-2149437863.jpg',
          link: '#', // 🔧 FIXED: Added placeholder link
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
    linkedin: 'merema', // 🔧 FIXED: Use your actual LinkedIn username (the part after linkedin.com/in/)
    x: '',
    mastodon: '',
    researchGate: '', // 🔧 FIXED: Removed placeholder text
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
    fileUrl: '', // 🔧 FIXED: Empty string instead of commented out
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
  #publications: [
    #{
     # title: 'Model-Based Transfer Learning for Human Decision-Making: Bridging AI and Cognitive Science',
     # conferenceName: 'Carnegie Mellon University Research',
     # journalName: '',
     # authors: 'Meredith Ma',
     # link: '#', // 🔧 FIXED: Added placeholder link
     # description: 'Introduced MBTL framework achieving 5-43x sample efficiency in reinforcement learning through strategic source task selection. Demonstrated connections between computational transfer learning and human developmental psychology using Gaussian Process regression and Bayesian optimization.',
   # },
  #],
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
