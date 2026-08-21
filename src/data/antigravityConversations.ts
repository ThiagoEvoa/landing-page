import { ConversationSession } from '../types/antigravity';

export const antigravitySessions: ConversationSession[] = [
  {
    id: 'flutter_workspaces_cli',
    title: 'flutter_workspaces_cli',
    category: 'Projects',
    tagline: 'Scaffolding & modular Flutter workspace architecture generator',
    badge: 'Dart CLI',
    iconName: 'FolderGit2',
    repoUrl: 'https://github.com/ThiagoEvoa/flutter_workspaces_cli',
    quickPrompts: [
      'How do I install flutter_workspaces_cli?',
      'What architecture does it scaffold?',
      'Why use monorepo workspaces in Flutter?'
    ],
    messages: [
      {
        id: 'fwc-1',
        sender: 'user',
        timestamp: '14:20',
        content: 'Can you inspect Thiago\'s `flutter_workspaces_cli` project and explain how it solves multi-package architecture in Flutter?'
      },
      {
        id: 'fwc-2',
        sender: 'agent',
        timestamp: '14:21',
        thinking: 'Inspecting repository ThiagoEvoa/flutter_workspaces_cli. Analyzing Dart CLI entrypoints, workspace template structures, dependency resolution, and developer productivity gains.',
        toolCalls: [
          {
            tool: 'run_command',
            summary: 'Activate CLI package globally',
            args: 'dart pub global activate flutter_workspaces_cli',
            output: '✔ Resolving dependencies... flutter_workspaces_cli 1.0.0 activated.'
          },
          {
            tool: 'view_file',
            summary: 'Inspect workspace scaffold template',
            args: 'packages/workspace_template/pubspec.yaml',
            output: 'name: workspace_root\nworkspace:\n  - apps/main_app\n  - packages/core\n  - packages/ui_kit'
          }
        ],
        content: `**flutter_workspaces_cli** is an open-source Dart CLI tool created by **Thiago Evoá** to scaffold and streamline modular multi-package Flutter architectures.

### 🌟 Why it was built:
Managing large-scale Flutter applications as monolithic codebases leads to tight coupling, slow compilation, and merge friction. This tool scaffolds a clean monorepo architecture leveraging modern **Dart Workspaces**:

- ⚡ **Shared Core Libraries**: Decoupled domain models, network clients, and utilities.
- 🎨 **Standalone UI Kit**: Isolated design system components and design tokens.
- 📱 **Feature Packages**: Independent feature modules with dedicated test harnesses.
- 🚀 **Instant Setup**: Generates the complete monorepo configuration in seconds with a single command.`,
        codeBlock: {
          language: 'bash',
          filename: 'terminal',
          code: `# Install the CLI globally from pub.dev / GitHub\ndart pub global activate flutter_workspaces_cli\n\n# Create a production-ready workspace\nflutter_workspaces_cli create my_enterprise_app`
        },
        metrics: [
          { label: 'Language', value: 'Dart' },
          { label: 'Architecture', value: 'Workspaces Monorepo' },
          { label: 'Stars', value: '2 ★' },
          { label: 'License', value: 'MIT' }
        ],
        tags: ['Dart', 'CLI', 'Flutter', 'Workspaces', 'Developer Tools'],
        links: [
          { label: 'View GitHub Repository', url: 'https://github.com/ThiagoEvoa/flutter_workspaces_cli', primary: true },
          { label: 'Explore Pub.dev Package', url: 'https://github.com/ThiagoEvoa/flutter_workspaces_cli' }
        ],
        suggestedPrompts: [
          'What architecture does it scaffold?',
          'Tell me about agent-team repository',
          'How to contact Thiago?'
        ]
      }
    ]
  },
  {
    id: 'agent-team',
    title: 'agent-team',
    category: 'Projects',
    tagline: 'Autonomous AI agent team workflows for Flutter, Dart Frog, DevOps & Code Review',
    badge: 'AI Multi-Agent Team',
    iconName: 'Cpu',
    repoUrl: 'https://github.com/ThiagoEvoa/agent-team',
    quickPrompts: [
      'What skills are in agent-team?',
      'How does the Orchestration workflow manage SDD?',
      'How do agents automate Flutter QA testing?'
    ],
    messages: [
      {
        id: 'as-1',
        sender: 'user',
        timestamp: '14:24',
        content: 'Show me the `agent-team` repository. What kind of autonomous engineering workflows are implemented?'
      },
      {
        id: 'as-2',
        sender: 'agent',
        timestamp: '14:25',
        thinking: 'Scanning ThiagoEvoa/agent-team repository. Found 7 specialized agent workflow skills: orchestration-workflow, flutter-senior-workflow, dartfrog-senior-workflow, dart-senior-reviewer-workflow, devops-senior-workflow, flutter-qa-consultant, and research-workflow.',
        toolCalls: [
          {
            tool: 'grep_search',
            summary: 'List custom skills in repository',
            args: 'Query: "name:" in agent-team/skills/**/SKILL.md',
            output: 'Found 7 specialized skills:\n1. orchestration-workflow\n2. flutter-senior-workflow\n3. dartfrog-senior-workflow\n4. dart-senior-reviewer-workflow\n5. devops-senior-workflow\n6. flutter-qa-consultant\n7. research-workflow'
          }
        ],
        content: `**agent-team** is a suite of autonomous software engineering skills and protocols engineered by Thiago to orchestrate multi-agent development workflows:

### 🤖 7 Autonomous Workflow Skills:
1. **Orchestration Workflow**: Coordinates Spec-Driven Development (SDD) lifecycles via autonomous developer and reviewer iteration loops.
2. **Flutter Senior Workflow**: Guides Flutter workspace scaffolding, project templates, and clean architecture standards.
3. **Dart Frog Senior Workflow**: Backend API design, route handlers, and PR standards using Dart Frog.
4. **Dart Senior Reviewer**: Picky, high-standard code review auditing widget lifecycles, memory leaks, and isolate offloading.
5. **DevOps Senior Specialist**: Containerization with Docker, docker-compose, and GitHub Actions CI/CD automation.
6. **Flutter QA Consultant**: Automated UI widget interactions, screenshot regression verification, and GitHub test reports.
7. **Research Workflow**: Rigorous codebase investigation and documentation verification without guessing.`,
        codeBlock: {
          language: 'markdown',
          filename: 'skills/orchestration-workflow/SKILL.md',
          code: `---
name: orchestration-workflow
description: Workflow for Orchestrator Agent to manage Spec-Driven Development (SDD) lifecycles
parameters:
  spec_path: { type: string, required: true }
  developer_agent: { type: string }
  reviewer_agent: { type: string }
---
# Objectives
1. Automate Spec-Driven Execution from markdown specs.
2. Coordinate implementation and review iteration loops.
3. Verify deliverables before merging PR.`
        },
        metrics: [
          { label: 'Skills Included', value: '7 Workflows' },
          { label: 'Architecture', value: 'Multi-Agent SDD' },
          { label: 'Target', value: 'Antigravity / MCP' },
          { label: 'License', value: 'MIT' }
        ],
        tags: ['AI Agents', 'Multi-Agent', 'Orchestration', 'Flutter', 'Dart Frog', 'DevOps'],
        links: [
          { label: 'Browse agent-team on GitHub', url: 'https://github.com/ThiagoEvoa/agent-team', primary: true }
        ],
        suggestedPrompts: [
          'How does the Orchestration workflow manage SDD?',
          'Show me dynamic_api_dart',
          'Explore Thiago\'s Medium articles'
        ]
      }
    ]
  },
  {
    id: 'dynamic_api_dart',
    title: 'dynamic_api_dart',
    category: 'Projects',
    tagline: 'Dynamic REST mock API service powered by Dart Frog',
    badge: 'Dart Frog Backend',
    iconName: 'Server',
    repoUrl: 'https://github.com/ThiagoEvoa/dynamic_api_dart',
    quickPrompts: [
      'How does dynamic_api_dart use Dart Frog?',
      'How does in-memory JSON mocking work?',
      'How do I run dynamic_api_dart with Docker?'
    ],
    messages: [
      {
        id: 'dad-1',
        sender: 'user',
        timestamp: '14:28',
        content: 'What is `dynamic_api_dart` and how is it built with Dart Frog?'
      },
      {
        id: 'dad-2',
        sender: 'agent',
        timestamp: '14:29',
        thinking: 'Inspecting dynamic_api_dart implementation. Verified Dart Frog routing (routes/index.dart), dynamic in-memory JSON state handling for GET/POST, and containerized Docker setup.',
        toolCalls: [
          {
            tool: 'run_command',
            summary: 'Start Dart Frog development server',
            args: 'dart_frog dev --port 8080',
            output: '🚀 dynamic_api_dart listening on http://localhost:8080 powered by Dart Frog.'
          },
          {
            tool: 'view_file',
            summary: 'Inspect routes/index.dart',
            args: 'routes/index.dart',
            output: 'import \'package:dart_frog/dart_frog.dart\';\n\nFuture<Response> onRequest(RequestContext context) async { ... }'
          }
        ],
        content: `**dynamic_api_dart** is a lightweight, dynamic REST API mock service built with **Dart Frog**.

### ⚡ Key Capabilities:
- **Powered by Dart Frog**: Clean route-based HTTP server leveraging modern Dart Frog patterns.
- **Dynamic In-Memory Payload Mocking**: Automatically accepts and persists incoming \`POST\` JSON payloads and serves them back on subsequent \`GET\` requests.
- **Docker & Compose Ready**: Includes \`Dockerfile\` and \`docker-compose.yaml\` for instant containerized deployment.
- **Rapid Client Prototyping**: Allows mobile and web teams to test real dynamic endpoints without waiting for monolithic backend services.`,
        codeBlock: {
          language: 'dart',
          filename: 'routes/index.dart',
          code: `import 'dart:io';\nimport 'package:dart_frog/dart_frog.dart';\n\ndynamic json = <dynamic, dynamic>{};\n\nFuture<Response> onRequest(RequestContext context) async {\n  return switch (context.request.method) {\n    HttpMethod.get => get(context),\n    HttpMethod.post => post(context),\n    _ => Future.value(\n        Response(statusCode: HttpStatus.methodNotAllowed),\n      )\n  };\n}\n\nFuture<Response> get(RequestContext context) async => Response.json(body: json);\n\nFuture<Response> post(RequestContext context) async {\n  final request = context.request;\n  json = await request.json();\n  return Response.json(body: json);\n}`
        },
        metrics: [
          { label: 'Engine', value: 'Dart Frog ^1.1.0' },
          { label: 'Deployment', value: 'Docker Compose' },
          { label: 'Latency', value: '< 1ms response' },
          { label: 'License', value: 'MIT' }
        ],
        tags: ['Dart Frog', 'Dart', 'REST API', 'Backend', 'Docker', 'Mocking'],
        links: [
          { label: 'View dynamic_api_dart on GitHub', url: 'https://github.com/ThiagoEvoa/dynamic_api_dart', primary: true }
        ],
        suggestedPrompts: [
          'How does Dart Frog handle route handlers?',
          'Tell me about flutter_workspaces_cli',
          'Get in touch with Thiago'
        ]
      }
    ]
  },
  {
    id: 'about_thiago',
    title: 'Mission & Bio',
    category: 'Architecture',
    tagline: 'Senior Software Engineer, Mobile Architect & Tooling Engineer based in Portugal',
    badge: 'Profile // Core',
    iconName: 'User',
    quickPrompts: [
      'What is Thiago\'s engineering philosophy?',
      'Where is Thiago located?',
      'What are his primary areas of expertise?'
    ],
    messages: [
      {
        id: 'ab-1',
        sender: 'user',
        timestamp: '14:30',
        content: 'Tell me about Thiago Evoá. What is his background, philosophy, and specializations?'
      },
      {
        id: 'ab-2',
        sender: 'agent',
        timestamp: '14:31',
        thinking: 'Synthesizing profile data for Thiago Evoá. Location: Portugal. Core focus: Cross-platform mobile (Flutter/Dart), developer tooling, clean architecture, and autonomous AI agents.',
        content: `**Thiago Evoá** is a **Senior Software Engineer & Mobile Architect** based in **Portugal 🇵🇹**.

> *"Just a guy talking to the computer through code, learning and innovating every single day."*

### 🛠️ Core Engineering Philosophy:
- **Clean Architecture & SOLID Principles**: Building software with strict modular isolation, making codebases adaptable and easy to maintain over multi-year lifecycles.
- **Concurrency & Parallelism**: Deep expertise in Dart **Isolates**, offloading CPU-intensive workloads to maintain silky smooth 120 FPS rendering.
- **Developer Tooling & Automation**: Creating CLI tools and agent skills that eliminate repetitive developer friction.
- **Knowledge Sharing**: Frequent writer on Medium breaking down complex architectural primitives for the developer community.`,
        metrics: [
          { label: 'Location', value: 'Portugal 🇵🇹' },
          { label: 'Public Repos', value: '30+ Repos' },
          { label: 'Articles', value: '10+ Published' },
          { label: 'Focus', value: 'Flutter & Dart' }
        ],
        tags: ['Clean Architecture', 'Flutter', 'Dart', 'Design Patterns', 'Tooling', 'Agent Workflows'],
        links: [
          { label: 'GitHub (@ThiagoEvoa)', url: 'https://github.com/ThiagoEvoa', primary: true },
          { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/thiagoevoa' },
          { label: 'Medium Publications', url: 'https://thiagoevoa.medium.com' }
        ],
        suggestedPrompts: [
          'Show me Thiago\'s core skills and stack',
          'Explore featured projects',
          'How can I get in touch?'
        ]
      }
    ]
  },
  {
    id: 'tech_skills',
    title: 'Core Engine & Skills',
    category: 'Architecture',
    tagline: 'Technical capabilities across Mobile, Backend, Tooling, and Architecture',
    badge: 'Stack // Engine',
    iconName: 'Layers',
    quickPrompts: [
      'What are Thiago\'s highlighted skills?',
      'How does he handle state management?',
      'What backend technologies does he use?'
    ],
    messages: [
      {
        id: 'sk-1',
        sender: 'user',
        timestamp: '14:33',
        content: 'Break down Thiago\'s technical skills and architectural competencies.'
      },
      {
        id: 'sk-2',
        sender: 'agent',
        timestamp: '14:34',
        thinking: 'Querying technical stack matrix. Grouping into Mobile & Cross-Platform, Backend & Cloud, Tooling & DevOps, and Core Architecture.',
        content: `Here is the comprehensive breakdown of Thiago's technical competencies:

### 📱 1. Mobile & Cross-Platform Engine
- **Flutter & Dart** (Expert — Highlighted ✨)
- **State Management**: Bloc, Riverpod, InheritedWidget primitives (Expert)
- **Multi-Platform Optimization**: Mobile, Web, and Desktop performance profiling (Expert)
- **Native Bridges & Integrations**: Android & iOS platform channels (Advanced)

### ☁️ 2. Backend & Cloud Architecture
- **Dart Frog & Shelf** (Advanced — Highlighted ✨)
- **Firebase & Cloud Firestore** (Expert — Highlighted ✨)
- **Node.js & Express REST APIs** (Advanced)
- **WebSockets & Realtime Streams** (Advanced)

### 🛠️ 3. Tooling, DevOps & AI Agents
- **Dart CLI Tooling** (Expert — Highlighted ✨)
- **AI Agent Skills & LLM Ops** (Advanced — Highlighted ✨)
- **GitHub Actions CI/CD & Docker** (Expert)
- **Workspaces Architecture & Monorepos** (Expert)

### 📐 4. Architecture & Core Principles
- **Clean Architecture & SOLID** (Expert — Highlighted ✨)
- **Concurrency & Isolates** (Expert — Highlighted ✨)
- **Design Patterns** (Expert — Highlighted ✨)
- **Automated Unit & Widget Testing** (Expert)`,
        tags: ['Flutter', 'Dart', 'Clean Architecture', 'Design Patterns', 'Dart Frog', 'AI Agents', 'CI/CD'],
        suggestedPrompts: [
          'Read Medium article on Flutter Isolates',
          'Inspect flutter_workspaces_cli',
          'Send a direct message'
        ]
      }
    ]
  },
  {
    id: 'medium_transmissions',
    title: 'Decoded Publications',
    category: 'Publications',
    tagline: 'Technical deep dives, architectural breakdowns, and guides on Medium',
    badge: 'Medium // Articles',
    iconName: 'BookOpen',
    quickPrompts: [
      'What articles has Thiago published?',
      'Tell me about the StatefulBuilder optimization article',
      'Explain the Flutter Isolates article'
    ],
    messages: [
      {
        id: 'med-1',
        sender: 'user',
        timestamp: '14:36',
        content: 'What technical articles has Thiago published on Medium?'
      },
      {
        id: 'med-2',
        sender: 'agent',
        timestamp: '14:37',
        thinking: 'Fetching published Medium articles by @thiagoevoa. Categorizing articles by Performance, Architecture, Tooling, and Testing.',
        content: `Thiago regularly publishes in-depth engineering guides on **Medium**. Here are his top featured articles:

### 📚 Featured Publications:

1. **Rebuilding a portion of code using StatefulBuilder Widget**
   - *Category:* Flutter Optimization • *Read Time:* 4 min
   - *Summary:* Deep dive into optimizing widget rebuild lifecycles in Flutter to prevent full-tree redraws and achieve silky smooth 120 FPS render performance.

2. **Parallelism in Flutter: Unleashing Isolates**
   - *Category:* Performance & Concurrency • *Read Time:* 6 min
   - *Summary:* How to leverage Dart Isolates for heavy computational tasks, JSON parsing, and background processing without stuttering the main UI thread.

3. **Where most of Flutter state managements came from?**
   - *Category:* Architecture & SDK Roots • *Read Time:* 5 min
   - *Summary:* Exploring how Flutter’s native SDK primitives (InheritedWidget, ValueNotifier, ChangeNotifier) shape modern state management ecosystems.

4. **The importance of unit testing your Flutter code**
   - *Category:* Testing & QA • *Read Time:* 5 min
   - *Summary:* Practical strategies and testing harness architectures to ensure regression-free releases and rock-solid code coverage.

5. **Dart Shelf Backend deploying to Cloud**
   - *Category:* Backend & Microservices • *Read Time:* 7 min
   - *Summary:* Step-by-step guide to writing lightweight microservices in pure Dart and deploying them to modern cloud hosting platforms.`,
        links: [
          { label: 'Follow Thiago on Medium', url: 'https://thiagoevoa.medium.com', primary: true }
        ],
        suggestedPrompts: [
          'How does StatefulBuilder work in Flutter?',
          'Tell me about flutter_workspaces_cli',
          'Connect with Thiago'
        ]
      }
    ]
  },
  {
    id: 'contact_uplink',
    title: 'Sub-Space Comm Uplink',
    category: 'Connect',
    tagline: 'Direct messaging channel, email uplink, Discord and LinkedIn connections',
    badge: 'Uplink // Contact',
    iconName: 'Radio',
    quickPrompts: [
      'What is Thiago\'s contact email?',
      'How can I connect on LinkedIn?',
      'What is Thiago\'s Discord handle?'
    ],
    messages: [
      {
        id: 'cu-1',
        sender: 'user',
        timestamp: '14:40',
        content: 'I want to get in touch with Thiago regarding a software engineering role / project collaboration.'
      },
      {
        id: 'cu-2',
        sender: 'agent',
        timestamp: '14:41',
        thinking: 'Initializing direct contact channels. Available channels: Direct Email, LinkedIn, GitHub, Discord, Twitter/X.',
        content: `You can reach Thiago through any of the following direct channels:

### 📡 Direct Communication Channels:

- 📧 **Direct Email**: \`thiagoevoa@gmail.com\`
- 💼 **LinkedIn**: [linkedin.com/in/thiagoevoa](https://www.linkedin.com/in/thiagoevoa)
- 🐙 **GitHub**: [github.com/ThiagoEvoa](https://github.com/ThiagoEvoa)
- 💬 **Discord**: \`ThiagoEvoa\` *(ID: 479237025623441409)*
- 🐦 **X (Twitter)**: [@thiagoevoa](https://twitter.com/thiagoevoa)

---

### 🚀 Availability:
Thiago is currently **open for senior software engineering roles, mobile architecture consultations, and open source collaborations** (Remote & Global).`,
        metrics: [
          { label: 'Status', value: 'Open for Opportunities' },
          { label: 'Response Time', value: '< 24 hours' },
          { label: 'Location', value: 'Portugal 🇵🇹 (Remote)' }
        ],
        links: [
          { label: 'Connect on LinkedIn', url: 'https://www.linkedin.com/in/thiagoevoa', primary: true },
          { label: 'Send Email (thiagoevoa@gmail.com)', url: 'mailto:thiagoevoa@gmail.com' }
        ],
        suggestedPrompts: [
          'Back to featured projects',
          'Explore agent-team',
          'View Thiago\'s bio'
        ]
      }
    ]
  }
];
