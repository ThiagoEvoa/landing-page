import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Thiago Evoá',
  fullName: 'Thiago Evoá',
  title: 'Senior Software Engineer & Mobile Architect',
  tagline: 'Crafting high-performance cross-platform applications, developer tooling, and intelligent agent workflows.',
  location: 'Portugal 🇵🇹',
  avatarUrl: 'https://avatars.githubusercontent.com/u/8203577?v=4',
  bioQuote: "Just a guy talking to the computer through code, learning and innovating every single day.",
  bioSummary: "Specialized in Flutter, Dart, and backend architectures. Passionate about developer tooling, clean code architectures, and AI agent skills.",
  aboutText: [
    "I am a software engineer focused on building resilient, scalable, and delightful digital experiences. With a deep foundation in mobile engineering and cross-platform ecosystems, I specialize in architecting Flutter & Dart applications.",
    "Beyond mobile applications, I develop developer-centric CLI tools, mock backends, and custom agent skills to streamline modern development workflows. I regularly share practical insights, architectural deep dives, and performance patterns on Medium."
  ],
  stats: [
    { value: '30+', label: 'Open Source Repos', suffix: 'repos' },
    { value: '10+', label: 'Technical Articles', suffix: 'published' },
    { value: '100%', label: 'Commitment to Craft', suffix: 'focus' },
    { value: 'Multi', label: 'Platform Expertise', suffix: 'iOS/Android/Web' }
  ],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/ThiagoEvoa',
      icon: 'Github',
      username: '@ThiagoEvoa',
      primary: true
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thiagoevoa',
      icon: 'Linkedin',
      username: 'Thiago Evoá',
      primary: true
    },
    {
      name: 'Medium',
      url: 'https://thiagoevoa.medium.com',
      icon: 'BookOpen',
      username: '@thiagoevoa',
      primary: true
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/thiagoevoa',
      icon: 'Twitter',
      username: '@thiagoevoa'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/479237025623441409',
      icon: 'MessageSquare',
      username: 'ThiagoEvoa'
    }
  ],
  skillsCategories: [
    {
      title: 'Mobile & Cross-Platform',
      iconName: 'Smartphone',
      description: 'Architecting fluid, native-grade applications across iOS, Android, Desktop, and Web.',
      skills: [
        { name: 'Flutter', level: 'Expert', highlight: true },
        { name: 'Dart', level: 'Expert', highlight: true },
        { name: 'Kotlin (Android)', level: 'Advanced' },
        { name: 'Swift (iOS)', level: 'Advanced' },
        { name: 'State Management (Bloc/Riverpod)', level: 'Expert' },
        { name: 'Multi-platform Optimization', level: 'Expert' }
      ]
    },
    {
      title: 'Backend, Cloud & APIs',
      iconName: 'Server',
      description: 'Designing reliable services, mock APIs, and seamless data layer integrations.',
      skills: [
        { name: 'Dart Frog', level: 'Advanced', highlight: true },
        { name: 'Shelf (Dart)', level: 'Advanced' },
        { name: 'Node.js / Express', level: 'Advanced' },
        { name: 'Firebase & Firestore', level: 'Expert', highlight: true },
        { name: 'REST & GraphQL APIs', level: 'Expert' },
        { name: 'WebSockets & Realtime', level: 'Advanced' }
      ]
    },
    {
      title: 'Tooling, DevOps & AI',
      iconName: 'Terminal',
      description: 'Automating developer lifecycles, scaffolding CLI tools, and agent workflows.',
      skills: [
        { name: 'Dart CLI Tooling', level: 'Expert', highlight: true },
        { name: 'AI Agent Skills & LLM Ops', level: 'Advanced', highlight: true },
        { name: 'Git & GitHub Actions CI/CD', level: 'Expert' },
        { name: 'Docker / Containerization', level: 'Advanced' },
        { name: 'Automated Testing & QA', level: 'Expert' },
        { name: 'Workspaces Architecture', level: 'Expert' }
      ]
    },
    {
      title: 'Architecture & Core Principles',
      iconName: 'Layers',
      description: 'Engineering maintainable systems that scale gracefully with team velocity.',
      skills: [
        { name: 'Clean Architecture & SOLID', level: 'Expert', highlight: true },
        { name: 'Concurrency & Isolates', level: 'Expert', highlight: true },
        { name: 'Modular Monorepos', level: 'Advanced' },
        { name: 'Design Patterns', level: 'Expert', highlight: true },
        { name: 'Performance Profiling', level: 'Advanced' },
        { name: 'Component-Driven UI', level: 'Expert' }
      ]
    }
  ],
  featuredProjects: [
    {
      id: 'flutter_workspaces_cli',
      title: 'flutter_workspaces_cli',
      description: 'A powerful Dart CLI tool to scaffold and streamline scalable Flutter projects using the workspaces template architecture.',
      longDescription: 'Created to supercharge multi-package Flutter development, allowing developers to manage modular packages, shared core libraries, and feature modules in a unified workspace seamlessly.',
      tags: ['Dart', 'CLI', 'Flutter', 'Workspaces', 'Developer Tools'],
      stars: 2,
      language: 'Dart',
      languageColor: '#00B4AB',
      repoUrl: 'https://github.com/ThiagoEvoa/flutter_workspaces_cli',
      featured: true,
      metrics: 'Scaffolding & Monorepo Tool'
    },
    {
      id: 'agent-team',
      title: 'agent-team',
      description: 'A curated collection of intelligent agent team skills and protocols designed to orchestrate autonomous multi-agent engineering workflows.',
      longDescription: 'Specialized agent instructions and workflows covering Dart, Flutter QA testing, DevOps pipelines, and Spec-Driven Development.',
      tags: ['AI Agents', 'Multi-Agent', 'Orchestration', 'Flutter', 'DevOps'],
      stars: 2,
      language: 'Markdown & Shell',
      languageColor: '#8b5cf6',
      repoUrl: 'https://github.com/ThiagoEvoa/agent-team',
      featured: true,
      metrics: 'Multi-Agent Team'
    },
    {
      id: 'dynamic_api_dart',
      title: 'dynamic_api_dart',
      description: 'A dynamic REST mock API service built with Dart Frog to simulate HTTP endpoints and in-memory JSON state during client development.',
      longDescription: 'Leverages Dart Frog routing with in-memory JSON payload holding and Docker containerization to decouple frontend and mobile client testing.',
      tags: ['Dart Frog', 'Dart', 'REST API', 'Backend', 'Docker'],
      stars: 1,
      language: 'Dart',
      languageColor: '#00B4AB',
      repoUrl: 'https://github.com/ThiagoEvoa/dynamic_api_dart',
      featured: true,
      metrics: 'Dart Frog Backend'
    }
  ],
  articles: [
    {
      id: 'rebuilding-stateful-builder',
      title: 'Rebuilding a portion of code using StatefulBuilder Widget',
      summary: 'Deep dive into optimizing widget rebuild lifecycles in Flutter to prevent full-tree redraws and achieve silky smooth 120Hz render performance.',
      url: 'https://thiagoevoa.medium.com',
      readTime: '4 min read',
      date: 'Published on Medium',
      category: 'Flutter Optimization'
    },
    {
      id: 'parallelism-flutter-isolates',
      title: 'Parallelism in Flutter: Unleashing Isolates',
      summary: 'How to leverage Dart Isolates for heavy computational tasks, JSON parsing, and background processing without stuttering the main UI thread.',
      url: 'https://thiagoevoa.medium.com',
      readTime: '6 min read',
      date: 'Published on Medium',
      category: 'Performance'
    },
    {
      id: 'flutter-state-management-roots',
      title: 'Where most of Flutter state managements came from?',
      summary: 'Exploring how Flutter’s native SDK primitives (InheritedWidget, ValueNotifier, ChangeNotifier) shape modern state management ecosystems.',
      url: 'https://thiagoevoa.medium.com',
      readTime: '5 min read',
      date: 'Published on Medium',
      category: 'Architecture'
    },
    {
      id: 'unit-test-flutter',
      title: 'The importance of unit testing your Flutter code',
      summary: 'Practical strategies and testing harness architectures to ensure regression-free releases and rock-solid code coverage.',
      url: 'https://thiagoevoa.medium.com',
      readTime: '5 min read',
      date: 'Published on Medium',
      category: 'Testing & QA'
    },
    {
      id: 'dart-shelf-backend-deploy',
      title: 'Dart Shelf Backend deploying to Cloud',
      summary: 'Step-by-step guide to writing lightweight microservices in pure Dart and deploying them to modern cloud hosting platforms.',
      url: 'https://thiagoevoa.medium.com',
      readTime: '7 min read',
      date: 'Published on Medium',
      category: 'Backend'
    },
    {
      id: 'creating-private-packages',
      title: 'Creating and managing private packages on Flutter',
      summary: 'Best practices for organizing modular enterprise codebases into isolated, reusable private Dart packages.',
      url: 'https://thiagoevoa.medium.com',
      readTime: '4 min read',
      date: 'Published on Medium',
      category: 'Tooling'
    }
  ],
  experience: [
    {
      period: 'Present',
      role: 'Senior Software Engineer & Architect',
      company: 'Independent / Open Source Contributor',
      description: 'Designing scalable cross-platform architecture, authoring developer tooling, and exploring autonomous AI engineering agents.',
      highlights: [
        'Built flutter_workspaces_cli to solve monorepo & multi-package management in Flutter.',
        'Created custom agent workflows for automated code reviews, QA pipelines, and SDD lifecycles.',
        'Authored in-depth technical publications on Dart performance, isolates, and state management.'
      ],
      technologies: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Node.js', 'Firebase', 'CI/CD']
    },
    {
      period: 'Previous Milestones',
      role: 'Mobile & Full Stack Developer',
      company: 'High-Impact Digital Products',
      description: 'Engineered responsive cross-platform mobile apps, native bridge modules, and robust cloud integrations.',
      highlights: [
        'Delivered production-ready Flutter and native mobile applications with 99.9% crash-free sessions.',
        'Implemented end-to-end unit, widget, and integration test suites.',
        'Optimized build pipelines and automated deployment cycles via GitHub Actions.'
      ],
      technologies: ['Flutter', 'Dart', 'Android', 'iOS', 'Docker', 'REST', 'Git']
    }
  ]
};
