/**
 * translations.js — Portfolio i18n strings
 * Languages: en (English), bn (Bengali), ar (Arabic RTL), es (Spanish), fr (French), de (German), pt (Portuguese)
 *
 * Key format: dot-notation resolved by getNestedValue() in lang.js
 * data-i18n       → sets element.textContent
 * data-i18n-html  → sets element.innerHTML (use for content with embedded links)
 * data-i18n-aria  → sets element.setAttribute('aria-label', ...)
 */

const TRANSLATIONS = {
  /* ═══════════════════════════════════════════════════════════════
     ENGLISH (default)
  ═══════════════════════════════════════════════════════════════ */
  en: {
    langNames: {
      en: "English",
      bn: "বাংলা",
      ar: "العربية",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
    },
    meta: {
      title:
        "Habibur Rahman — Full-Stack Developer | Next.js, React & TypeScript Expert",
      description:
        "Product-driven full-stack developer specializing in Next.js, React, and TypeScript. Building scalable web applications, SaaS platforms, and e-commerce solutions for international clients.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      services: "Services",
      techStack: "Tech Stack",
      skipLink: "Skip to main content",
    },
    hero: {
      greeting: "Hello, I'm",
      jobTitle: "Full-Stack Developer",
      tagline:
        "Product-driven developer with a strong focus on frontend engineering and user experience.",
    },
    about: {
      heading: "About",
      p1: "I am a product-driven full-stack developer based in Dhaka, Bangladesh, with a strong focus on frontend engineering and user experience. I transitioned from Biochemistry to software development out of a genuine passion for building thoughtful, well-designed digital products.",
      p2Html:
        'I build production-ready web applications, bridging design and engineering to transform ideas into dependable, user-focused products. I work with international clients through <a href="https://qubetix.co" target="_blank" rel="noopener noreferrer">Qubetix</a> — my digital studio — and on <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a>, delivering software that is trusted and used in real-world environments.',
      p3: "My academic background in Biochemistry & Molecular Biology has shaped a structured and analytical approach to problem-solving, allowing me to design software systems with clarity, precision, and long-term maintainability in mind.",
      p4Html:
        'What truly excites me is the chance to merge my background in biochemistry with software craft. Through <a href="https://biofidex.com" target="_blank" rel="noopener noreferrer">biofideX</a>, I\'m building an educational platform that turns life-science concepts into thoughtful, interactive learning experiences — a project that lives at the exact intersection of the two disciplines I care about most.',
    },
    experience: {
      heading: "Experience",
      present: "Present",
      qubetix: {
        title: "Founder & CEO · Qubetix",
        description:
          "Leading a digital studio that partners with ambitious teams worldwide, designing and shipping brand systems, marketing sites, web platforms, and AI-native products end-to-end — from first concept through to launch and beyond.",
      },
      upwork: {
        title: "Full-Stack Developer · Upwork",
        description:
          "Building scalable web applications for international clients across SaaS, e-commerce, and internal tooling — with a focus on clean architecture, performance optimization, and interfaces that feel effortless to use.",
      },
      biofidex: {
        title: "Founder & CEO · biofideX",
        description:
          "Founded and lead the technical direction of an educational platform for the life sciences, owning product strategy, architecture, and UX design across a complete learning ecosystem for students and professionals.",
      },
    },
    education: {
      heading: "Education",
      university: "Jagannath University",
      field: "Biochemistry & Molecular Biology",
      description:
        "Built a strong foundation in analytical thinking, research methodology, and scientific problem-solving that now informs my systematic approach to software engineering and product development.",
      badge: "BSc",
    },
    projects: {
      heading: "Projects",
      showAll: "Show all projects",
      showFewer: "Show fewer projects",
      links: {
        appStore: "App Store",
        googlePlay: "Google Play",
      },
      biofidex: {
        title: "biofideX",
        category: "EdTech · Bioscience",
        description:
          "A modern bioscience learning platform where students and professionals explore quizzes, articles, and courses across life science disciplines. Designed to feel clear and accessible, with interactive assessments and structured content that support evidence-based learning.",
      },
      prottoy: {
        title: "Prottoy",
        category: "EdTech · Mobile App",
        description:
          "A focused academic quiz app for HSC students and admission-test candidates in Bangladesh. Short 10-minute sessions with instant explanations and analytics that surface weak chapters — offline-first, so studying never depends on connectivity.",
      },
      luna: {
        title: "Luna Corporate",
        category: "Corporate · Brand Portfolio",
        description:
          "A bilingual corporate site for a Polish consumer-goods manufacturer, presenting a five-brand portfolio, European distribution network, and trade-show coverage. Engineered on Qwik for near-zero blocking JavaScript and instant interactivity.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        category: "E-Commerce · Fashion",
        description:
          "An e-commerce platform for Islamic modest fashion, built around a calm, considered shopping experience — secure Stripe payments, real-time inventory across regions, and a storefront that puts the garment and the customer at the centre of every page.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        category: "Service · Local Business",
        description:
          "A professional service website for a Dubai-based cleaning company, showcasing residential and commercial offerings with a clear information architecture, locally-tuned copy, and a frictionless inquiry flow that turns curious visitors into booked appointments.",
      },
    },
    services: {
      heading: "Services",
      ai: {
        title: "AI-Native Product Development",
        description:
          "Bringing language models, agents, and AI-powered workflows into production-grade web apps — designed to feel native to the product, not bolted on.",
        items: [
          "LLM integration & prompt engineering",
          "RAG systems & semantic search",
          "AI agents & chat interfaces",
          "Streaming UIs & real-time inference",
        ],
      },
      saas: {
        title: "SaaS Platforms & Web Apps",
        description:
          "Multi-tenant SaaS products, internal tools, and dashboards engineered for scale — with type-safe APIs, real-time data, and frictionless billing baked in.",
        items: [
          "Multi-tenant SaaS architecture",
          "Auth, billing & subscriptions",
          "Real-time dashboards & analytics",
          "Type-safe end-to-end stacks",
        ],
      },
      experience: {
        title: "High-Performance Web Experiences",
        description:
          "Marketing sites, landing pages, and brand-driven web experiences built for speed, conversion, and motion — passing Core Web Vitals with room to spare.",
        items: [
          "Conversion-focused landing pages",
          "Motion design & micro-interactions",
          "Core Web Vitals & technical SEO",
          "Accessibility & inclusive UX",
        ],
      },
    },
    tech: {
      heading: "Tech Stack",
      frontend: "Frontend Frameworks",
      state: "State Management",
      styling: "Styling & Animation",
      backend: "Backend & Database",
      payments: "Payments & Auth",
      deployment: "Deployment",
    },
    contact: {
      heading: "Get In Touch",
      label: "What's Next?",
      description:
        "I'm currently open to new opportunities and interesting projects. Whether you need a complete platform or want to optimize an existing application, let's discuss how I can help.",
      emailAria: "Send an email to hrsshainik@gmail.com",
    },
    footer: { text: "Designed & Built by Habibur Rahman" },
    langSwitcher: { buttonAria: "Select language", label: "Language" },
  },

  /* ═══════════════════════════════════════════════════════════════
     BENGALI — বাংলা
  ═══════════════════════════════════════════════════════════════ */
  bn: {
    langNames: {
      en: "ইংরেজি",
      bn: "বাংলা",
      ar: "আরবি",
      es: "স্প্যানিশ",
      fr: "ফরাসি",
      de: "জার্মান",
      pt: "পর্তুগিজ",
    },
    meta: {
      title:
        "হাবিবুর রহমান — ফুল-স্ট্যাক ডেভেলপার | Next.js, React ও TypeScript বিশেষজ্ঞ",
      description:
        "পণ্য-চালিত ফুল-স্ট্যাক ডেভেলপার যিনি Next.js, React এবং TypeScript-এ বিশেষজ্ঞ। আন্তর্জাতিক ক্লায়েন্টদের জন্য স্কেলেবল ওয়েব অ্যাপ্লিকেশন, SaaS প্ল্যাটফর্ম ও ই-কমার্স সমাধান তৈরি করেন।",
    },
    nav: {
      about: "পরিচিতি",
      experience: "অভিজ্ঞতা",
      education: "শিক্ষা",
      projects: "প্রকল্প",
      services: "সেবা",
      techStack: "প্রযুক্তি স্ট্যাক",
      skipLink: "মূল বিষয়বস্তুতে যান",
    },
    hero: {
      greeting: "হ্যালো, আমি",
      jobTitle: "ফুল-স্ট্যাক ডেভেলপার",
      tagline:
        "প্রোডাক্ট-কেন্দ্রিক একজন ডেভেলপার — মূল মনোযোগ ফ্রন্টএন্ড ইঞ্জিনিয়ারিং আর দারুণ ইউজার এক্সপেরিয়েন্স ঘিরে।",
    },
    about: {
      heading: "পরিচিতি",
      p1: "ঢাকা থেকে কাজ করি — একজন প্রোডাক্ট-কেন্দ্রিক ফুল-স্ট্যাক ডেভেলপার, যার মূল আগ্রহ ফ্রন্টএন্ড ইঞ্জিনিয়ারিং আর ইউজার এক্সপেরিয়েন্স ঘিরে। বায়োকেমিস্ট্রি ছেড়ে সফটওয়্যারে এসেছি — কারণ ভালোভাবে চিন্তা করে, যত্ন নিয়ে ডিজাইন করা ডিজিটাল প্রোডাক্ট গড়ার আগ্রহটা ভেতর থেকেই এসেছিল।",
      p2Html:
        'প্রোডাকশনে চলার মতো ওয়েব অ্যাপ্লিকেশন বানাই — ডিজাইন আর ইঞ্জিনিয়ারিংকে এক জায়গায় এনে আইডিয়াকে এমন প্রোডাক্টে রূপ দিই, যা মানুষ ভরসা করে ব্যবহার করতে পারেন। আন্তর্জাতিক ক্লায়েন্টদের সঙ্গে কাজ করি আমার ডিজিটাল স্টুডিও <a href="https://qubetix.co" target="_blank" rel="noopener noreferrer">Qubetix</a>-এর মাধ্যমে এবং <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a>-এ — এমন সফটওয়্যার ডেলিভার করি যা বাস্তব পরিবেশে দিনের পর দিন কাজে লাগছে।',
      p3: "বায়োকেমিস্ট্রি ও মলিকুলার বায়োলজির একাডেমিক ব্যাকগ্রাউন্ড আমাকে সমস্যাকে গুছিয়ে, বিশ্লেষণাত্মকভাবে ভাবতে শিখিয়েছে। সেই অভ্যাসটাই আজ আমাকে এমন সফটওয়্যার সিস্টেম ডিজাইন করতে সাহায্য করে — যেগুলো স্পষ্ট, নির্ভুল আর দীর্ঘমেয়াদে মেনটেইন করা সহজ।",
      p4Html:
        'যেটা আমাকে সবচেয়ে বেশি টানে, সেটা হলো এই সম্ভাবনা — বায়োকেমিস্ট্রির পটভূমি আর সফটওয়্যার গড়ার কারিগরিকে এক জায়গায় মিশিয়ে দেওয়া। <a href="https://biofidex.com" target="_blank" rel="noopener noreferrer">biofideX</a>-এ ঠিক সেটাই করছি — এমন একটা শিক্ষামূলক প্ল্যাটফর্ম গড়ছি যেখানে জীববিজ্ঞানের ধারণাগুলো যত্নসহকারে, ইন্টার‍্যাক্টিভভাবে শেখা যায়। আমার সবচেয়ে প্রিয় দুটো দুনিয়া — বায়ো আর কোড — ঠিক এখানে এসে মিলেছে।',
    },
    experience: {
      heading: "অভিজ্ঞতা",
      present: "বর্তমান",
      qubetix: {
        title: "প্রতিষ্ঠাতা ও সিইও · Qubetix",
        description:
          "একটি ডিজিটাল স্টুডিও পরিচালনা করছি, যেখানে বিশ্বজুড়ে উচ্চাকাঙ্ক্ষী টিমের সঙ্গে কাজ করে আমরা ব্র্যান্ড সিস্টেম, মার্কেটিং সাইট, ওয়েব প্ল্যাটফর্ম আর AI-নেটিভ প্রোডাক্ট — প্রথম আইডিয়া থেকে শুরু করে লঞ্চ পর্যন্ত — পুরোটাই তৈরি করি।",
      },
      upwork: {
        title: "ফুল-স্ট্যাক ডেভেলপার · Upwork",
        description:
          "আন্তর্জাতিক ক্লায়েন্টদের জন্য স্কেলেবল ওয়েব অ্যাপ্লিকেশন বানাচ্ছি — SaaS, ই-কমার্স থেকে শুরু করে ইন্টারনাল টুলিং পর্যন্ত। ফোকাসটা থাকে পরিষ্কার আর্কিটেকচার, পারফরম্যান্স আর এমন ইন্টারফেস তৈরির দিকে — যেগুলো ব্যবহারে আরাম পাওয়া যায়।",
      },
      biofidex: {
        title: "প্রতিষ্ঠাতা ও সিইও · biofideX",
        description:
          "জীববিজ্ঞান-শিক্ষার একটি প্ল্যাটফর্ম প্রতিষ্ঠা করে এর টেকনিক্যাল দিকটা নেতৃত্ব দিচ্ছি — প্রোডাক্ট স্ট্র্যাটেজি, আর্কিটেকচার থেকে UX ডিজাইন পর্যন্ত — শিক্ষার্থী আর পেশাজীবীদের জন্য একটি পূর্ণাঙ্গ লার্নিং ইকোসিস্টেম গড়ে তুলতে।",
      },
    },
    education: {
      heading: "শিক্ষা",
      university: "জগন্নাথ বিশ্ববিদ্যালয়",
      field: "বায়োকেমিস্ট্রি ও মলিকুলার বায়োলজি",
      description:
        "বিশ্লেষণাত্মক চিন্তা, গবেষণার পদ্ধতি আর বৈজ্ঞানিকভাবে সমস্যা সমাধানের একটা শক্ত ভিত্তি গড়ে উঠেছিল — যা আজও আমাকে সফটওয়্যার ইঞ্জিনিয়ারিং আর প্রোডাক্ট ডেভেলপমেন্টে গোছানোভাবে কাজ করতে সাহায্য করে।",
      badge: "বিএসসি",
    },
    projects: {
      heading: "প্রকল্প",
      showAll: "সব প্রকল্প দেখুন",
      showFewer: "কম প্রকল্প দেখুন",
      links: {
        appStore: "App Store",
        googlePlay: "Google Play",
      },
      biofidex: {
        title: "biofideX",
        category: "এডটেক · বায়োসায়েন্স",
        description:
          "একটি আধুনিক বায়োসায়েন্স লার্নিং প্ল্যাটফর্ম — শিক্ষার্থী আর পেশাজীবীরা লাইফ সায়েন্সের নানা বিষয়ে কুইজ, আর্টিকেল আর কোর্স ঘুরে দেখতে পারেন। স্পষ্টতা ও অ্যাক্সেসিবিলিটি মাথায় রেখে গড়া; ইন্টার‍্যাক্টিভ অ্যাসেসমেন্ট আর গোছানো কনটেন্টের মাধ্যমে প্রমাণভিত্তিক শেখাকে এগিয়ে নেওয়া হয়।",
      },
      prottoy: {
        title: "Prottoy",
        category: "এডটেক · মোবাইল অ্যাপ",
        description:
          "বাংলাদেশের HSC ও ভর্তি পরীক্ষার্থীদের জন্য একটা মনোযোগী একাডেমিক কুইজ অ্যাপ। ১০ মিনিটের ছোট, পরিকল্পিত প্র্যাকটিস সেশন, সঙ্গে সঙ্গে ব্যাখ্যা, আর যেসব অধ্যায় দুর্বল সেগুলো বের করে আনা অ্যানালিটিক্স — পুরোটাই অফলাইন-প্রথম, ইন্টারনেট না থাকলেও পড়াশোনা থামে না।",
      },
      luna: {
        title: "Luna Corporate",
        category: "কর্পোরেট · ব্র্যান্ড পোর্টফোলিও",
        description:
          "একটি পোলিশ কনজিউমার-গুডস কোম্পানির জন্য দ্বিভাষিক কর্পোরেট সাইট — পাঁচটি ব্র্যান্ডের পোর্টফোলিও, ইউরোপজুড়ে বিতরণ নেটওয়ার্ক আর ট্রেড-শো কভারেজ একসঙ্গে দেখানো। প্রায় ব্লকিং-ফ্রি জাভাস্ক্রিপ্ট ও তাৎক্ষণিক ইন্টার‍্যাক্টিভিটির জন্য Qwik দিয়ে গড়া।",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        category: "ই-কমার্স · ফ্যাশন",
        description:
          "ইসলামিক মডেস্ট ফ্যাশনের জন্য একটি ই-কমার্স প্ল্যাটফর্ম — শান্ত, যত্ন নিয়ে গড়া শপিং অভিজ্ঞতা, নিরাপদ Stripe পেমেন্ট, একাধিক রিজনে রিয়েল-টাইম ইনভেন্টরি, আর এমন একটা স্টোরফ্রন্ট যেখানে প্রতিটা পেজে পোশাক আর ক্রেতা — দুটোই ঠিক কেন্দ্রবিন্দুতে থাকে।",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        category: "সার্ভিস · লোকাল ব্যবসা",
        description:
          "দুবাইভিত্তিক একটি ক্লিনিং কোম্পানির পেশাদার সার্ভিস ওয়েবসাইট — আবাসিক ও বাণিজ্যিক সেবাগুলো স্পষ্ট তথ্য-গঠনে সাজানো, স্থানীয়ভাবে ঠিকঠাক করা কপি, আর এমন একটি ঝামেলাহীন ইনকোয়ারি ফ্লো — যা কৌতূহলী ভিজিটরকে নির্ধারিত অ্যাপয়েন্টমেন্টে রূপান্তর করে।",
      },
    },
    services: {
      heading: "সেবা",
      ai: {
        title: "AI-নেটিভ প্রোডাক্ট ডেভেলপমেন্ট",
        description:
          "ভাষার মডেল, এজেন্ট আর AI-চালিত ওয়ার্কফ্লোকে প্রোডাকশন-গ্রেড ওয়েব অ্যাপে যুক্ত করি — এমনভাবে, যেন এগুলো বাইরে থেকে বসানো না, প্রোডাক্টের ভেতরেরই অংশ।",
        items: [
          "LLM ইন্টিগ্রেশন ও প্রম্পট ইঞ্জিনিয়ারিং",
          "RAG সিস্টেম ও সিম্যান্টিক সার্চ",
          "AI এজেন্ট ও চ্যাট ইন্টারফেস",
          "স্ট্রিমিং UI ও রিয়েল-টাইম ইনফারেন্স",
        ],
      },
      saas: {
        title: "SaaS প্ল্যাটফর্ম ও ওয়েব অ্যাপ",
        description:
          "মাল্টি-টেন্যান্ট SaaS প্রোডাক্ট, ইন্টারনাল টুল আর ড্যাশবোর্ড — স্কেলের কথা মাথায় রেখে তৈরি, যেখানে টাইপ-সেফ API, রিয়েল-টাইম ডেটা আর ঝামেলাহীন বিলিং প্রথম থেকেই থাকে।",
        items: [
          "মাল্টি-টেন্যান্ট SaaS আর্কিটেকচার",
          "Auth, বিলিং ও সাবস্ক্রিপশন",
          "রিয়েল-টাইম ড্যাশবোর্ড ও অ্যানালিটিক্স",
          "টাইপ-সেফ এন্ড-টু-এন্ড স্ট্যাক",
        ],
      },
      experience: {
        title: "হাই-পারফরম্যান্স ওয়েব এক্সপেরিয়েন্স",
        description:
          "মার্কেটিং সাইট, ল্যান্ডিং পেজ আর ব্র্যান্ড-চালিত ওয়েব অভিজ্ঞতা — দ্রুতগতি, কনভার্শন আর মোশনকে মাথায় রেখে গড়া; Core Web Vitals নিশ্চিন্তে পেরিয়ে যায়।",
        items: [
          "কনভার্শন-ফোকাসড ল্যান্ডিং পেজ",
          "মোশন ডিজাইন ও মাইক্রো-ইন্টার‍্যাকশন",
          "Core Web Vitals ও টেকনিক্যাল SEO",
          "অ্যাক্সেসিবিলিটি ও ইনক্লুসিভ UX",
        ],
      },
    },
    tech: {
      heading: "প্রযুক্তি স্ট্যাক",
      frontend: "ফ্রন্টএন্ড ফ্রেমওয়ার্ক",
      state: "স্টেট ম্যানেজমেন্ট",
      styling: "স্টাইলিং ও অ্যানিমেশন",
      backend: "ব্যাকএন্ড ও ডেটাবেস",
      payments: "পেমেন্ট ও অথেনটিকেশন",
      deployment: "ডিপ্লয়মেন্ট",
    },
    contact: {
      heading: "যোগাযোগ করুন",
      label: "পরবর্তী কী?",
      description:
        "নতুন সুযোগ আর মজার প্রকল্পের জন্য এই মুহূর্তে উন্মুক্ত। শূন্য থেকে একটা প্ল্যাটফর্ম দাঁড় করানোর কাজ হোক বা চলমান কোনো অ্যাপকে আরও ভালো করার — আসুন কথা বলি, কীভাবে কাজে লাগতে পারি।",
      emailAria: "hrsshainik@gmail.com-এ ইমেইল পাঠান",
    },
    footer: { text: "ডিজাইন ও তৈরি — হাবিবুর রহমান" },
    langSwitcher: { buttonAria: "ভাষা নির্বাচন করুন", label: "ভাষা" },
  },

  /* ═══════════════════════════════════════════════════════════════
     ARABIC — العربية  (RTL)
  ═══════════════════════════════════════════════════════════════ */
  ar: {
    langNames: {
      en: "الإنجليزية",
      bn: "البنغالية",
      ar: "العربية",
      es: "الإسبانية",
      fr: "الفرنسية",
      de: "الألمانية",
      pt: "البرتغالية",
    },
    meta: {
      title: "حبيب الرحمن — مطوّر فول-ستاك | خبير Next.js وReact وTypeScript",
      description:
        "مطوّر فول-ستاك متخصص في Next.js وReact وTypeScript. يبني تطبيقات ويب قابلة للتوسّع ومنصات SaaS وحلول تجارة إلكترونية للعملاء الدوليين.",
    },
    nav: {
      about: "نبذة عني",
      experience: "الخبرة",
      education: "التعليم",
      projects: "المشاريع",
      services: "الخدمات",
      techStack: "التقنيات",
      skipLink: "انتقل إلى المحتوى الرئيسي",
    },
    hero: {
      greeting: "مرحباً، أنا",
      jobTitle: "مطوّر فول-ستاك",
      tagline:
        "مطوّر يبدأ دائماً من المنتج، مع شغف خاص بهندسة الواجهة الأمامية وتجربة المستخدم.",
    },
    about: {
      heading: "نبذة عني",
      p1: "مطوّر فول-ستاك انطلاقي دائماً من المنتج، أعمل من دكا في بنغلاديش، ويتركّز اهتمامي على هندسة الواجهة الأمامية وتجربة المستخدم. انتقلت من الكيمياء الحيوية إلى البرمجة دافعي الأول حبّ بناء منتجات رقمية مدروسة، يشعر من يستخدمها بأنها صُمّمت بعناية فعلاً.",
      p2Html:
        'أبني تطبيقات ويب جاهزة للإنتاج، أجمع فيها بين التصميم والهندسة لأحوّل الأفكار إلى منتجات يثق بها مستخدموها يومياً. أعمل مع عملاء حول العالم عبر <a href="https://qubetix.co" target="_blank" rel="noopener noreferrer">Qubetix</a> — استوديوي الرقمي — وعلى <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a>، وأسلّم برمجيات تعمل في بيئات حقيقية، لا في عروض تقديمية.',
      p3: "تركت دراستي للكيمياء الحيوية وعلم الأحياء الجزيئي أثراً واضحاً في طريقة تفكيري: منظَّمة وتحليلية في مواجهة المشكلات. هذه العادة هي ما أعتمد عليه اليوم في تصميم أنظمة برمجية واضحة ودقيقة، يسهل صيانتها وتطويرها على المدى الطويل.",
      p4Html:
        'ما يحمّسني فعلاً هو الجمع بين خلفيتي في الكيمياء الحيوية وحرفة البرمجة. وهذا تماماً ما أفعله مع <a href="https://biofidex.com" target="_blank" rel="noopener noreferrer">biofideX</a>: أبني منصة تعليمية تحوّل مفاهيم علوم الحياة إلى تجارب تعلّم تفاعلية ومدروسة. مشروع يجلس عند الحدّ الفاصل بين عالمَين أحبّهما: علم الأحياء وبرمجة الويب.',
    },
    experience: {
      heading: "الخبرة",
      present: "حتى الآن",
      qubetix: {
        title: "المؤسس والرئيس التنفيذي · Qubetix",
        description:
          "أقود استوديو رقمي يعمل مع فرق طموحة حول العالم، نصمّم ونبني لها أنظمة هوية، ومواقع تسويقية، ومنصات ويب، ومنتجات ذكاء اصطناعي أصيلة — من أول فكرة وحتى لحظة الإطلاق وما بعدها.",
      },
      upwork: {
        title: "مطوّر فول-ستاك · Upwork",
        description:
          "أبني تطبيقات ويب قابلة للتوسّع لعملاء دوليين، تتراوح بين منصات SaaS والتجارة الإلكترونية والأدوات الداخلية، مع تركيز على بنية واضحة، وأداء عالٍ، وواجهات تشعر بأنها مريحة وبديهية الاستخدام.",
      },
      biofidex: {
        title: "المؤسس والرئيس التنفيذي · biofideX",
        description:
          "أسّستُ منصة تعليمية متخصّصة في علوم الحياة، وأقود اتجاهها التقني من استراتيجية المنتج إلى البنية التحتية وتصميم تجربة المستخدم، لبناء منظومة تعلّم متكاملة للطلاب والمحترفين.",
      },
    },
    education: {
      heading: "التعليم",
      university: "جامعة جاغانات",
      field: "الكيمياء الحيوية وعلم الأحياء الجزيئي",
      description:
        "بنيت أساساً متيناً في التفكير التحليلي ومنهجية البحث وحلّ المشكلات بصورة علمية. هذا الأساس ما زال يُغذّي طريقتي المنهجية في هندسة البرمجيات وتطوير المنتجات حتى اليوم.",
      badge: "بكالوريوس",
    },
    projects: {
      heading: "المشاريع",
      showAll: "عرض جميع المشاريع",
      showFewer: "عرض مشاريع أقل",
      links: {
        appStore: "App Store",
        googlePlay: "Google Play",
      },
      biofidex: {
        title: "biofideX",
        category: "تعليم رقمي · علوم الحياة",
        description:
          "منصة تعلّم حديثة لعلوم الحياة، يستكشف فيها الطلاب والمحترفون اختبارات ومقالات ودورات تغطّي مختلف تخصصات هذا المجال. صُمّمت بعناية لتكون واضحة وسهلة الوصول، وتقدّم تقييمات تفاعلية ومحتوى منظَّماً يدعم تعلّماً حقيقياً قائماً على الأدلة.",
      },
      prottoy: {
        title: "Prottoy",
        category: "تعليم رقمي · تطبيق جوّال",
        description:
          "تطبيق اختبارات أكاديمية مركَّز لطلاب الـ HSC والمتقدّمين لاختبارات القبول في بنغلاديش. جلسات تدريب قصيرة من 10 دقائق، مع شروحات فورية وتحليلات تكشف الفصول الضعيفة — يعمل دون اتصال أولاً، فلا تتوقّف الدراسة عند انقطاع الإنترنت.",
      },
      luna: {
        title: "Luna Corporate",
        category: "موقع شركات · محفظة علامات",
        description:
          "موقع شركة ثنائي اللغة لشركة بولندية مصنِّعة للمنتجات الاستهلاكية، يعرض محفظتها من خمس علامات تجارية، وشبكة توزيعها في أوروبا، وتغطية حضورها في المعارض. بُني على Qwik ليقدّم تفاعلاً فورياً وحجباً شبه معدوم لـ JavaScript.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        category: "تجارة إلكترونية · أزياء",
        description:
          "منصة تجارة إلكترونية للأزياء الإسلامية المحتشمة، صُمّمت حول تجربة تسوّق هادئة ومدروسة — مدفوعات Stripe آمنة، وإدارة مخزون لحظية عبر عدّة مناطق، وواجهة متجر تضع القطعة والعميل في قلب كلّ صفحة فيها.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        category: "خدمات · شركة محلية",
        description:
          "موقع خدمات احترافي لشركة تنظيف مقرّها دبي، يعرض خدماتها السكنية والتجارية ببنية معلومات واضحة، ونصوص مكيَّفة للسوق المحلي، وتدفّق استفسار سلس يحوّل الزائر الفضولي إلى موعد محجوز بأقل عدد ممكن من الخطوات.",
      },
    },
    services: {
      heading: "الخدمات",
      ai: {
        title: "تطوير منتجات أصيلة بالذكاء الاصطناعي",
        description:
          "أُدمج النماذج اللغوية والوكلاء وسير العمل المعتمد على الذكاء الاصطناعي داخل تطبيقات ويب جاهزة للإنتاج — بحيث تبدو جزءاً أصيلاً من المنتج، لا إضافة لاحقة عليه.",
        items: [
          "دمج نماذج LLM وهندسة التوجيهات",
          "أنظمة RAG والبحث الدلالي",
          "وكلاء الذكاء الاصطناعي وواجهات المحادثة",
          "واجهات بثّ مباشر واستدلال فوري",
        ],
      },
      saas: {
        title: "منصات SaaS وتطبيقات الويب",
        description:
          "منتجات SaaS متعددة المستأجرين، وأدوات داخلية، ولوحات تحكم مُصمَّمة للتوسّع — مع واجهات API آمنة الأنواع، وبيانات لحظية، ونظام فوترة سلس مدمج منذ البداية.",
        items: [
          "بنية SaaS متعددة المستأجرين",
          "المصادقة والفوترة والاشتراكات",
          "لوحات تحكم وتحليلات لحظية",
          "حزم تقنية آمنة الأنواع من الواجهة إلى الخادم",
        ],
      },
      experience: {
        title: "تجارب ويب عالية الأداء",
        description:
          "مواقع تسويقية، وصفحات هبوط، وتجارب ويب قائمة على الهوية — مُصمَّمة للسرعة والتحويل والحركة، تتجاوز معايير Core Web Vitals بمساحة كبيرة.",
        items: [
          "صفحات هبوط تركّز على التحويل",
          "تصميم الحركة والتفاعلات الدقيقة",
          "Core Web Vitals وتحسين السيو التقني",
          "إمكانية الوصول وتجربة شاملة للجميع",
        ],
      },
    },
    tech: {
      heading: "التقنيات",
      frontend: "أطر الواجهة الأمامية",
      state: "إدارة الحالة",
      styling: "التنسيق والحركة",
      backend: "الخادم وقواعد البيانات",
      payments: "المدفوعات والمصادقة",
      deployment: "النشر",
    },
    contact: {
      heading: "تواصل معي",
      label: "ما التالي؟",
      description:
        "أرحّب حالياً بالفرص الجديدة والمشاريع المثيرة للاهتمام. سواء كنت تريد بناء منصة كاملة من الصفر أو تطوير تطبيق قائم بالفعل، لنتحدث ولنرَ كيف يمكنني المساعدة.",
      emailAria: "إرسال بريد إلكتروني إلى hrsshainik@gmail.com",
    },
    footer: { text: "تصميم وتنفيذ — حبيب الرحمن" },
    langSwitcher: { buttonAria: "اختر اللغة", label: "اللغة" },
  },

  /* ═══════════════════════════════════════════════════════════════
     SPANISH — Español
  ═══════════════════════════════════════════════════════════════ */
  es: {
    langNames: {
      en: "Inglés",
      bn: "Bengalí",
      ar: "Árabe",
      es: "Español",
      fr: "Francés",
      de: "Alemán",
      pt: "Portugués",
    },
    meta: {
      title:
        "Habibur Rahman — Desarrollador Full-Stack | Experto en Next.js, React y TypeScript",
      description:
        "Desarrollador full-stack orientado al producto, especializado en Next.js, React y TypeScript. Construyendo aplicaciones web escalables, plataformas SaaS y soluciones e-commerce para clientes internacionales.",
    },
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Formación",
      projects: "Proyectos",
      services: "Servicios",
      techStack: "Tecnologías",
      skipLink: "Saltar al contenido principal",
    },
    hero: {
      greeting: "Hola, soy",
      jobTitle: "Desarrollador Full-Stack",
      tagline:
        "Desarrollador que piensa primero en el producto, con foco real en el frontend y la experiencia de usuario.",
    },
    about: {
      heading: "Sobre mí",
      p1: "Soy desarrollador full-stack, con base en Dhaka, Bangladesh. Trabajo siempre desde el producto, y me apasiona en particular el frontend y todo lo que tiene que ver con la experiencia de usuario. Llegué al desarrollo de software desde la bioquímica, empujado por las ganas de construir productos digitales pensados con cuidado y diseñados con intención.",
      p2Html:
        'Construyo aplicaciones web listas para producción, en las que diseño e ingeniería van de la mano para convertir ideas en productos confiables y centrados en quien los usa. Trabajo con clientes de distintos países a través de <a href="https://qubetix.co" target="_blank" rel="noopener noreferrer">Qubetix</a> — mi estudio digital — y en <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a>, entregando software que se usa día a día en entornos reales.',
      p3: "Mi formación en Bioquímica y Biología Molecular me dejó una forma de pensar muy estructurada y analítica frente a los problemas. Esa misma manera de razonar es la que aplico hoy al diseñar sistemas de software: claros, precisos y pensados para mantenerse sanos en el largo plazo.",
      p4Html:
        'Lo que más me motiva es justamente la posibilidad de unir mi base en bioquímica con el oficio del software. Eso es exactamente lo que hago en <a href="https://biofidex.com" target="_blank" rel="noopener noreferrer">biofideX</a>: una plataforma educativa que convierte los conceptos de las ciencias de la vida en experiencias de aprendizaje interactivas y bien cuidadas. Un proyecto que vive justo en el cruce de las dos disciplinas que más me importan.',
    },
    experience: {
      heading: "Experiencia",
      present: "Presente",
      qubetix: {
        title: "Fundador y CEO · Qubetix",
        description:
          "Lidero un estudio digital que acompaña a equipos ambiciosos en todo el mundo, diseñando y construyendo sistemas de marca, sitios de marketing, plataformas web y productos AI-native de principio a fin — desde la primera idea hasta el lanzamiento y lo que viene después.",
      },
      upwork: {
        title: "Desarrollador Full-Stack · Upwork",
        description:
          "Construyo aplicaciones web escalables para clientes internacionales: SaaS, e-commerce y herramientas internas, siempre con foco en arquitectura limpia, buen rendimiento e interfaces que se sientan naturales de usar.",
      },
      biofidex: {
        title: "Fundador y CEO · biofideX",
        description:
          "Fundé y lidero la dirección técnica de una plataforma educativa para las ciencias de la vida, haciéndome cargo de la estrategia de producto, la arquitectura y el diseño de UX, para llegar a un ecosistema de aprendizaje completo para estudiantes y profesionales.",
      },
    },
    education: {
      heading: "Formación",
      university: "Universidad Jagannath",
      field: "Bioquímica y Biología Molecular",
      description:
        "Construí una base sólida en pensamiento analítico, método de investigación y resolución de problemas con mirada científica — la misma que hoy guía mi forma de encarar la ingeniería de software y el desarrollo de producto.",
      badge: "Licenciatura",
    },
    projects: {
      heading: "Proyectos",
      showAll: "Mostrar todos los proyectos",
      showFewer: "Mostrar menos proyectos",
      links: {
        appStore: "App Store",
        googlePlay: "Google Play",
      },
      biofidex: {
        title: "biofideX",
        category: "EdTech · Biociencias",
        description:
          "Plataforma moderna de aprendizaje en biociencias donde estudiantes y profesionales pueden explorar cuestionarios, artículos y cursos de las distintas disciplinas. Pensada para que todo se sienta claro y accesible, con evaluaciones interactivas y contenido bien estructurado que apoya un aprendizaje basado en evidencia.",
      },
      prottoy: {
        title: "Prottoy",
        category: "EdTech · App Móvil",
        description:
          "App académica de quizzes hecha para estudiantes de HSC y candidatos a exámenes de admisión en Bangladesh. Sesiones cortas de 10 minutos muy enfocadas, explicaciones al instante y analíticas que dejan ver qué capítulos hay que reforzar — y todo offline-first, así que el estudio nunca depende de la conexión.",
      },
      luna: {
        title: "Luna Corporate",
        category: "Corporativo · Portafolio de Marcas",
        description:
          "Sitio corporativo bilingüe para un fabricante polaco de bienes de consumo, que muestra su portafolio de cinco marcas, su red de distribución europea y la cobertura de las ferias en las que participa. Construido sobre Qwik para lograr una interactividad casi instantánea, con un mínimo de JavaScript bloqueante.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        category: "E-Commerce · Moda",
        description:
          "Plataforma de e-commerce dedicada a la moda islámica modesta, construida alrededor de una experiencia de compra calmada y bien pensada — pagos seguros con Stripe, inventario en tiempo real entre regiones, y un escaparate que pone la prenda y al cliente en el centro de cada página.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        category: "Servicios · Negocio Local",
        description:
          "Sitio profesional de servicios para una empresa de limpieza con sede en Dubái, que presenta sus servicios residenciales y comerciales con una arquitectura de información clara, textos ajustados al mercado local y un flujo de contacto sin fricciones que transforma visitas curiosas en citas agendadas.",
      },
    },
    services: {
      heading: "Servicios",
      ai: {
        title: "Desarrollo de Productos AI-Native",
        description:
          "Integro modelos de lenguaje, agentes y flujos basados en IA dentro de aplicaciones web listas para producción — pensados como parte natural del producto, no como una capa pegada encima.",
        items: [
          "Integración de LLM e ingeniería de prompts",
          "Sistemas RAG y búsqueda semántica",
          "Agentes de IA e interfaces conversacionales",
          "UIs en streaming e inferencia en tiempo real",
        ],
      },
      saas: {
        title: "Plataformas SaaS y Apps Web",
        description:
          "Productos SaaS multi-tenant, herramientas internas y dashboards diseñados para escalar — con APIs type-safe, datos en tiempo real y un sistema de facturación fluido desde el primer día.",
        items: [
          "Arquitectura SaaS multi-tenant",
          "Auth, facturación y suscripciones",
          "Dashboards y analíticas en tiempo real",
          "Stacks type-safe de punta a punta",
        ],
      },
      experience: {
        title: "Experiencias Web de Alto Rendimiento",
        description:
          "Sitios de marketing, landings y experiencias web con identidad fuerte — pensadas para velocidad, conversión y movimiento, y diseñadas para pasar los Core Web Vitals con margen.",
        items: [
          "Landing pages enfocadas en conversión",
          "Motion design y micro-interacciones",
          "Core Web Vitals y SEO técnico",
          "Accesibilidad y UX inclusiva",
        ],
      },
    },
    tech: {
      heading: "Tecnologías",
      frontend: "Frameworks Frontend",
      state: "Gestión de Estado",
      styling: "Estilos y Animación",
      backend: "Backend y Base de Datos",
      payments: "Pagos y Autenticación",
      deployment: "Despliegue",
    },
    contact: {
      heading: "Contáctame",
      label: "¿Qué sigue?",
      description:
        "En este momento estoy abierto a nuevas oportunidades y proyectos que valga la pena hacer bien. Da igual si necesitas levantar una plataforma desde cero o pulir una app que ya está en marcha — escríbeme y vemos cómo te puedo ayudar.",
      emailAria: "Enviar un correo a hrsshainik@gmail.com",
    },
    footer: { text: "Diseñado y construido por Habibur Rahman" },
    langSwitcher: { buttonAria: "Seleccionar idioma", label: "Idioma" },
  },

  /* ═══════════════════════════════════════════════════════════════
     FRENCH — Français
  ═══════════════════════════════════════════════════════════════ */
  fr: {
    langNames: {
      en: "Anglais",
      bn: "Bengali",
      ar: "Arabe",
      es: "Espagnol",
      fr: "Français",
      de: "Allemand",
      pt: "Portugais",
    },
    meta: {
      title:
        "Habibur Rahman — Développeur Full-Stack | Expert Next.js, React & TypeScript",
      description:
        "Développeur full-stack orienté produit, spécialisé en Next.js, React et TypeScript. Construction d'applications web scalables, de plateformes SaaS et de solutions e-commerce pour des clients internationaux.",
    },
    nav: {
      about: "À propos",
      experience: "Expérience",
      education: "Formation",
      projects: "Projets",
      services: "Services",
      techStack: "Technologies",
      skipLink: "Aller au contenu principal",
    },
    hero: {
      greeting: "Bonjour, je suis",
      jobTitle: "Développeur Full-Stack",
      tagline:
        "Développeur orienté produit, qui pense vraiment frontend et expérience utilisateur avant tout.",
    },
    about: {
      heading: "À propos",
      p1: "Je suis développeur full-stack, basé à Dhaka, au Bangladesh. Je pars toujours du produit, avec une vraie attention pour le frontend et tout ce qui touche à l'expérience utilisateur. Je suis passé de la biochimie au logiciel parce que j'ai pris goût à concevoir des produits numériques pensés en profondeur, et dessinés avec soin.",
      p2Html:
        'Je conçois des applications web prêtes pour la production, en faisant dialoguer design et ingénierie pour transformer des idées en produits solides, vraiment au service de leurs utilisateurs. Je travaille avec des clients à l\'international via <a href="https://qubetix.co" target="_blank" rel="noopener noreferrer">Qubetix</a> — mon studio numérique — et sur <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a>, en livrant des logiciels utilisés au quotidien, dans des environnements réels.',
      p3: "Ma formation en biochimie et biologie moléculaire m'a laissé une manière de penser très structurée et analytique face aux problèmes. C'est exactement cette habitude que je remets au service de mon travail aujourd'hui : concevoir des systèmes logiciels clairs, précis, et faits pour vieillir sans douleur.",
      p4Html:
        'Ce qui m\'enthousiasme le plus, c\'est justement de pouvoir relier ma formation en biochimie au métier du logiciel. C\'est précisément ce que je fais avec <a href="https://biofidex.com" target="_blank" rel="noopener noreferrer">biofideX</a> : une plateforme éducative qui transforme les concepts des sciences de la vie en expériences d\'apprentissage interactives, soignées. Un projet qui vit exactement à la frontière des deux disciplines auxquelles je tiens le plus.',
    },
    experience: {
      heading: "Expérience",
      present: "Présent",
      qubetix: {
        title: "Fondateur et PDG · Qubetix",
        description:
          "Je dirige un studio numérique qui accompagne des équipes ambitieuses dans le monde entier — nous concevons et livrons systèmes de marque, sites marketing, plateformes web et produits IA, de la toute première idée jusqu'au lancement et au-delà.",
      },
      upwork: {
        title: "Développeur Full-Stack · Upwork",
        description:
          "Je conçois des applications web scalables pour des clients internationaux — SaaS, e-commerce, outils internes — avec une vraie exigence sur l'architecture, la performance, et des interfaces qui se laissent utiliser sans effort.",
      },
      biofidex: {
        title: "Fondateur et PDG · biofideX",
        description:
          "J'ai fondé et je pilote la direction technique d'une plateforme éducative dédiée aux sciences du vivant — stratégie produit, architecture, UX — pour construire un écosystème d'apprentissage complet, pensé pour les étudiants comme pour les professionnels.",
      },
    },
    education: {
      heading: "Formation",
      university: "Université Jagannath",
      field: "Biochimie et Biologie Moléculaire",
      description:
        "Cette formation m'a donné des bases solides en pensée analytique, en méthode de recherche et en résolution de problèmes par la démarche scientifique — bases qui nourrissent encore aujourd'hui ma façon de faire de l'ingénierie logicielle et du produit.",
      badge: "Licence",
    },
    projects: {
      heading: "Projets",
      showAll: "Afficher tous les projets",
      showFewer: "Afficher moins de projets",
      links: {
        appStore: "App Store",
        googlePlay: "Google Play",
      },
      biofidex: {
        title: "biofideX",
        category: "EdTech · Biosciences",
        description:
          "Plateforme moderne d'apprentissage en biosciences, où étudiants et professionnels parcourent quiz, articles et cours dans les différentes disciplines des sciences de la vie. Pensée pour rester claire et accessible, avec évaluations interactives et un contenu structuré qui ancre l'apprentissage sur les preuves.",
      },
      prottoy: {
        title: "Prottoy",
        category: "EdTech · App Mobile",
        description:
          "Application de quiz académique pensée pour les étudiants du HSC et les candidats aux concours d'admission au Bangladesh. Sessions courtes de 10 minutes, explications immédiates et analyses qui identifient les chapitres à retravailler — et tout est offline-first : on étudie même sans connexion.",
      },
      luna: {
        title: "Luna Corporate",
        category: "Corporate · Portfolio de Marques",
        description:
          "Site corporate bilingue pour un fabricant polonais de produits de grande consommation, qui présente son portfolio de cinq marques, son réseau de distribution européen et sa présence sur les salons. Construit avec Qwik pour offrir une interactivité quasi instantanée, avec un JavaScript bloquant réduit au minimum.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        category: "E-Commerce · Mode",
        description:
          "Plateforme e-commerce dédiée à la mode islamique pudique, pensée autour d'une expérience d'achat calme et soignée — paiements sécurisés via Stripe, inventaire en temps réel entre régions, et une vitrine qui met le vêtement et le client au cœur de chaque page.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        category: "Services · Entreprise Locale",
        description:
          "Site de services pour une entreprise de nettoyage à Dubaï, qui met en avant ses prestations résidentielles et commerciales avec une architecture claire, des textes calibrés pour le marché local, et un parcours de prise de contact sans friction qui transforme les visiteurs curieux en rendez-vous confirmés.",
      },
    },
    services: {
      heading: "Services",
      ai: {
        title: "Développement de Produits AI-Native",
        description:
          "J'intègre modèles de langage, agents et flux pilotés par l'IA au cœur d'applications web prêtes pour la production — pour qu'ils se vivent comme partie intégrante du produit, et non comme une couche ajoutée à la dernière minute.",
        items: [
          "Intégration LLM et prompt engineering",
          "Systèmes RAG et recherche sémantique",
          "Agents IA et interfaces conversationnelles",
          "UIs en streaming et inférence en temps réel",
        ],
      },
      saas: {
        title: "Plateformes SaaS et Web Apps",
        description:
          "Produits SaaS multi-tenant, outils internes et tableaux de bord conçus pour passer à l'échelle — avec APIs type-safe, données en temps réel et facturation fluide intégrées dès le départ.",
        items: [
          "Architecture SaaS multi-tenant",
          "Authentification, facturation et abonnements",
          "Dashboards et analytics en temps réel",
          "Stacks type-safe de bout en bout",
        ],
      },
      experience: {
        title: "Expériences Web Haute Performance",
        description:
          "Sites marketing, landing pages et expériences web portées par la marque — pensées pour la vitesse, la conversion et le mouvement, et calibrées pour passer les Core Web Vitals avec de la marge.",
        items: [
          "Landing pages orientées conversion",
          "Motion design et micro-interactions",
          "Core Web Vitals et SEO technique",
          "Accessibilité et UX inclusive",
        ],
      },
    },
    tech: {
      heading: "Technologies",
      frontend: "Frameworks Frontend",
      state: "Gestion d'État",
      styling: "Style et Animation",
      backend: "Backend et Base de Données",
      payments: "Paiements et Authentification",
      deployment: "Déploiement",
    },
    contact: {
      heading: "Me contacter",
      label: "Et maintenant ?",
      description:
        "Je suis ouvert en ce moment à de nouvelles opportunités et à des projets qui valent la peine d'être bien faits. Que ce soit pour construire une plateforme de zéro ou pour faire passer une application existante au niveau suivant — écrivez-moi, on en parle.",
      emailAria: "Envoyer un e-mail à hrsshainik@gmail.com",
    },
    footer: { text: "Conçu et développé par Habibur Rahman" },
    langSwitcher: { buttonAria: "Sélectionner la langue", label: "Langue" },
  },

  /* ═══════════════════════════════════════════════════════════════
     GERMAN — Deutsch
  ═══════════════════════════════════════════════════════════════ */
  de: {
    langNames: {
      en: "Englisch",
      bn: "Bengalisch",
      ar: "Arabisch",
      es: "Spanisch",
      fr: "Französisch",
      de: "Deutsch",
      pt: "Portugiesisch",
    },
    meta: {
      title:
        "Habibur Rahman — Full-Stack-Entwickler | Next.js, React & TypeScript Experte",
      description:
        "Produktorientierter Full-Stack-Entwickler spezialisiert auf Next.js, React und TypeScript. Entwicklung skalierbarer Webanwendungen, SaaS-Plattformen und E-Commerce-Lösungen für internationale Kunden.",
    },
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      education: "Ausbildung",
      projects: "Projekte",
      services: "Leistungen",
      techStack: "Technologien",
      skipLink: "Zum Hauptinhalt springen",
    },
    hero: {
      greeting: "Hallo, ich bin",
      jobTitle: "Full-Stack-Entwickler",
      tagline:
        "Entwickler, der vom Produkt aus denkt — mit klarem Fokus auf Frontend-Engineering und User Experience.",
    },
    about: {
      heading: "Über mich",
      p1: "Ich bin Full-Stack-Entwickler, lebe in Dhaka, Bangladesch, und denke immer vom Produkt aus — mit besonderem Augenmerk auf Frontend-Engineering und User Experience. Von der Biochemie zur Softwareentwicklung bin ich aus echter Lust gewechselt: digitale Produkte zu bauen, die mit Bedacht entworfen und sauber gestaltet sind.",
      p2Html:
        'Ich entwickle produktionsreife Webanwendungen und bringe Design und Engineering so zusammen, dass aus Ideen verlässliche, klar auf den Nutzer ausgerichtete Produkte werden. Ich arbeite mit internationalen Kunden über <a href="https://qubetix.co" target="_blank" rel="noopener noreferrer">Qubetix</a> — mein Digital Studio — und auf <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a> und liefere Software, die im echten Alltag funktioniert, nicht nur in der Demo.',
      p3: "Mein Studium der Biochemie und Molekularbiologie hat mir eine sehr strukturierte, analytische Art beigebracht, Probleme anzugehen. Genau diese Denkweise nehme ich heute mit in den Code: Systeme entwerfen, die klar sind, präzise und auch in fünf Jahren noch wartbar.",
      p4Html:
        'Was mich wirklich antreibt, ist die Möglichkeit, meinen Hintergrund in der Biochemie mit dem Handwerk der Softwareentwicklung zu verbinden. Genau das mache ich mit <a href="https://biofidex.com" target="_blank" rel="noopener noreferrer">biofideX</a>: eine Bildungsplattform, die Konzepte aus den Lebenswissenschaften in durchdachte, interaktive Lernerfahrungen übersetzt. Ein Projekt, das genau dort lebt, wo sich die beiden Disziplinen treffen, die mir am meisten bedeuten.',
    },
    experience: {
      heading: "Erfahrung",
      present: "Heute",
      qubetix: {
        title: "Gründer & CEO · Qubetix",
        description:
          "Ich leite ein Digital Studio, das mit ambitionierten Teams weltweit zusammenarbeitet und Markensysteme, Marketingseiten, Web-Plattformen und AI-Native-Produkte komplett aus einer Hand entwirft und umsetzt — von der ersten Idee bis zum Launch und darüber hinaus.",
      },
      upwork: {
        title: "Full-Stack-Entwickler · Upwork",
        description:
          "Ich entwickle skalierbare Webanwendungen für internationale Kunden — von SaaS über E-Commerce bis hin zu internen Tools — mit Fokus auf saubere Architektur, echte Performance und Interfaces, die sich von selbst bedienen lassen.",
      },
      biofidex: {
        title: "Gründer & CEO · biofideX",
        description:
          "Ich habe biofideX gegründet und führe die technische Richtung der Plattform — von Produktstrategie über Architektur bis zum UX-Design — mit dem Ziel, ein vollständiges Lernökosystem für Studierende und Fachleute der Biowissenschaften aufzubauen.",
      },
    },
    education: {
      heading: "Ausbildung",
      university: "Jagannath-Universität",
      field: "Biochemie & Molekularbiologie",
      description:
        "Dort habe ich ein solides Fundament in analytischem Denken, Forschungsmethodik und wissenschaftlicher Problemlösung aufgebaut — die gleiche Denkweise prägt bis heute, wie ich an Software-Engineering und Produktentwicklung herangehe.",
      badge: "B.Sc.",
    },
    projects: {
      heading: "Projekte",
      showAll: "Alle Projekte anzeigen",
      showFewer: "Weniger Projekte anzeigen",
      links: {
        appStore: "App Store",
        googlePlay: "Google Play",
      },
      biofidex: {
        title: "biofideX",
        category: "EdTech · Biowissenschaften",
        description:
          "Moderne Lernplattform für die Lebenswissenschaften: Studierende und Fachleute können Quizze, Artikel und Kurse aus den unterschiedlichen Disziplinen durchgehen. Bewusst klar und barrierefrei gestaltet, mit interaktiven Assessments und gut strukturierten Inhalten, die evidenzbasiertes Lernen wirklich unterstützen.",
      },
      prottoy: {
        title: "Prottoy",
        category: "EdTech · Mobile App",
        description:
          "Eine fokussierte Lern-App für HSC-Schüler und Zulassungsprüfungs-Kandidaten in Bangladesch. Sie setzt auf kurze 10-Minuten-Sessions, sofortige Erklärungen und Analytics, die zeigen, welche Kapitel noch sitzen müssen — und sie funktioniert offline-first, damit Lernen nie an der Verbindung scheitert.",
      },
      luna: {
        title: "Luna Corporate",
        category: "Corporate · Markenportfolio",
        description:
          "Zweisprachiger Markenauftritt eines polnischen Konsumgüter-Herstellers, der das Portfolio aus fünf Marken, das europäische Vertriebsnetz und die Messeauftritte präsentiert. Auf Qwik gebaut, für nahezu blockierungsfreies JavaScript und ein Gefühl von sofortiger Interaktivität.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        category: "E-Commerce · Mode",
        description:
          "E-Commerce-Plattform für islamische, dezente Mode, gebaut um ein ruhiges, durchdachtes Einkaufserlebnis — sichere Zahlungen über Stripe, Echtzeit-Bestandsführung über mehrere Regionen, und ein Storefront, der Kleidungsstück und Kundin auf jeder einzelnen Seite ins Zentrum stellt.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        category: "Dienstleistungen · Lokales Unternehmen",
        description:
          "Professionelle Service-Website für ein Reinigungsunternehmen aus Dubai, das seine Angebote für Privat- und Gewerbekunden mit klarer Informationsarchitektur, auf den lokalen Markt zugeschnittenen Texten und einem reibungslosen Anfrage-Flow präsentiert — der aus neugierigen Besuchern feste Termine macht.",
      },
    },
    services: {
      heading: "Leistungen",
      ai: {
        title: "AI-Native Produktentwicklung",
        description:
          "Ich bringe Sprachmodelle, Agenten und KI-gestützte Workflows in produktionsreife Web-Apps — so eingebaut, dass sie sich als selbstverständlicher Teil des Produkts anfühlen, nicht wie ein nachträglich aufgeklebtes Feature.",
        items: [
          "LLM-Integration & Prompt-Engineering",
          "RAG-Systeme & semantische Suche",
          "KI-Agenten & Chat-Interfaces",
          "Streaming-UIs & Echtzeit-Inferenz",
        ],
      },
      saas: {
        title: "SaaS-Plattformen & Web-Apps",
        description:
          "Multi-Tenant-SaaS-Produkte, interne Tools und Dashboards, die auf Wachstum ausgelegt sind — mit typsicheren APIs, Echtzeit-Daten und einem Billing, das von Anfang an reibungslos läuft.",
        items: [
          "Multi-Tenant-SaaS-Architektur",
          "Auth, Billing & Abonnements",
          "Echtzeit-Dashboards & Analytics",
          "Typsichere End-to-End-Stacks",
        ],
      },
      experience: {
        title: "Hochperformante Web-Erlebnisse",
        description:
          "Marketing-Sites, Landingpages und markengeprägte Web-Erlebnisse — gebaut auf Tempo, Conversion und Bewegung, und ausgelegt darauf, die Core Web Vitals mit Luft nach oben zu bestehen.",
        items: [
          "Conversion-fokussierte Landingpages",
          "Motion Design & Mikrointeraktionen",
          "Core Web Vitals & technisches SEO",
          "Barrierefreiheit & inklusive UX",
        ],
      },
    },
    tech: {
      heading: "Technologien",
      frontend: "Frontend-Frameworks",
      state: "State Management",
      styling: "Styling & Animation",
      backend: "Backend & Datenbank",
      payments: "Zahlungen & Auth",
      deployment: "Deployment",
    },
    contact: {
      heading: "Kontakt aufnehmen",
      label: "Was kommt als Nächstes?",
      description:
        "Ich bin gerade offen für neue Möglichkeiten und Projekte, die sich lohnen, sorgfältig gemacht zu werden. Egal ob eine komplette Plattform von Null aufgebaut oder eine bestehende Anwendung auf das nächste Level gehoben werden soll — schreib mir, und wir schauen gemeinsam, wie ich helfen kann.",
      emailAria: "E-Mail an hrsshainik@gmail.com senden",
    },
    footer: { text: "Gestaltet & entwickelt von Habibur Rahman" },
    langSwitcher: { buttonAria: "Sprache auswählen", label: "Sprache" },
  },

  /* ═══════════════════════════════════════════════════════════════
     PORTUGUESE — Português
  ═══════════════════════════════════════════════════════════════ */
  pt: {
    langNames: {
      en: "Inglês",
      bn: "Bengali",
      ar: "Árabe",
      es: "Espanhol",
      fr: "Francês",
      de: "Alemão",
      pt: "Português",
    },
    meta: {
      title:
        "Habibur Rahman — Desenvolvedor Full-Stack | Especialista em Next.js, React e TypeScript",
      description:
        "Desenvolvedor full-stack orientado a produto, especializado em Next.js, React e TypeScript. Construindo aplicações web escaláveis, plataformas SaaS e soluções de e-commerce para clientes internacionais.",
    },
    nav: {
      about: "Sobre mim",
      experience: "Experiência",
      education: "Formação",
      projects: "Projetos",
      services: "Serviços",
      techStack: "Tecnologias",
      skipLink: "Ir para o conteúdo principal",
    },
    hero: {
      greeting: "Olá, eu sou",
      jobTitle: "Desenvolvedor Full-Stack",
      tagline:
        "Desenvolvedor que pensa o produto em primeiro lugar — com olhar afiado para frontend e experiência do usuário.",
    },
    about: {
      heading: "Sobre mim",
      p1: "Sou desenvolvedor full-stack, baseado em Dhaka, Bangladesh. Penso sempre a partir do produto, e tenho um carinho especial pelo frontend e por tudo que envolve a experiência do usuário. Vim da bioquímica para o software empurrado por uma vontade genuína: construir produtos digitais pensados com cuidado e desenhados com intenção.",
      p2Html:
        'Construo aplicações web prontas para produção, colocando design e engenharia para conversar e transformar ideias em produtos confiáveis, realmente desenhados em volta de quem os usa. Trabalho com clientes internacionais através da <a href="https://qubetix.co" target="_blank" rel="noopener noreferrer">Qubetix</a> — meu estúdio digital — e no <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a>, entregando software que é usado de verdade, no dia a dia, em ambientes reais.',
      p3: "Minha formação em bioquímica e biologia molecular me deixou um jeito muito estruturado e analítico de encarar problemas. É exatamente essa cabeça que eu trago hoje para o código: projetar sistemas de software claros, precisos e que envelheçam bem ao longo do tempo.",
      p4Html:
        'O que mais me move é justamente a chance de unir minha formação em bioquímica com o ofício do software. É isso que faço no <a href="https://biofidex.com" target="_blank" rel="noopener noreferrer">biofideX</a>: estou construindo uma plataforma educacional que transforma conceitos das ciências da vida em experiências de aprendizagem interativas e bem pensadas. Um projeto que vive exatamente no encontro das duas áreas que mais me importam.',
    },
    experience: {
      heading: "Experiência",
      present: "Presente",
      qubetix: {
        title: "Fundador e CEO · Qubetix",
        description:
          "Lidero um estúdio digital que trabalha lado a lado com times ambiciosos pelo mundo — desenhamos e construímos sistemas de marca, sites de marketing, plataformas web e produtos AI-native do começo ao fim, da primeira ideia até o lançamento e o que vem depois.",
      },
      upwork: {
        title: "Desenvolvedor Full-Stack · Upwork",
        description:
          "Construo aplicações web escaláveis para clientes internacionais — SaaS, e-commerce, ferramentas internas — sempre com foco em arquitetura limpa, performance de verdade e interfaces que se deixam usar sem fricção.",
      },
      biofidex: {
        title: "Fundador e CEO · biofideX",
        description:
          "Fundei e lidero a direção técnica de uma plataforma educacional voltada para as ciências da vida, cuidando de estratégia de produto, arquitetura e design de UX para entregar um ecossistema de aprendizagem completo para estudantes e profissionais.",
      },
    },
    education: {
      heading: "Formação",
      university: "Universidade Jagannath",
      field: "Bioquímica e Biologia Molecular",
      description:
        "Foi onde construí uma base sólida em pensamento analítico, método de pesquisa e resolução de problemas com olhar científico — a mesma base que hoje orienta meu jeito de fazer engenharia de software e desenvolvimento de produto.",
      badge: "Bacharelado",
    },
    projects: {
      heading: "Projetos",
      showAll: "Mostrar todos os projetos",
      showFewer: "Mostrar menos projetos",
      links: {
        appStore: "App Store",
        googlePlay: "Google Play",
      },
      biofidex: {
        title: "biofideX",
        category: "EdTech · Biociências",
        description:
          "Plataforma moderna de aprendizagem em biociências, onde estudantes e profissionais exploram quizzes, artigos e cursos das diferentes disciplinas das ciências da vida. Pensada para ser clara e acessível, com avaliações interativas e conteúdo estruturado que apoia um aprendizado real, baseado em evidência.",
      },
      prottoy: {
        title: "Prottoy",
        category: "EdTech · App Mobile",
        description:
          "App de quizzes acadêmicos feito para estudantes do HSC e candidatos a exames de admissão em Bangladesh. Sessões curtas e direcionadas de 10 minutos, com explicações na hora e analytics que mostram quais capítulos ainda precisam de atenção — e tudo offline-first, então o estudo nunca depende da internet.",
      },
      luna: {
        title: "Luna Corporate",
        category: "Corporativo · Portfólio de Marcas",
        description:
          "Site corporativo bilíngue para um fabricante polonês de bens de consumo, apresentando seu portfólio de cinco marcas, a rede de distribuição na Europa e a presença em feiras. Construído em Qwik para entregar uma interatividade quase instantânea, com um mínimo de JavaScript bloqueante.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        category: "E-Commerce · Moda",
        description:
          "Plataforma de e-commerce para moda islâmica modesta, construída em torno de uma experiência de compra calma e bem pensada — pagamentos seguros via Stripe, inventário em tempo real entre regiões, e uma vitrine que coloca a peça e o cliente bem no centro de cada página.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        category: "Serviços · Negócio Local",
        description:
          "Site profissional de serviços para uma empresa de limpeza com sede em Dubai, mostrando suas opções residenciais e comerciais com uma arquitetura de informação clara, textos ajustados ao mercado local e um fluxo de contato sem fricção que transforma visitantes curiosos em compromissos agendados.",
      },
    },
    services: {
      heading: "Serviços",
      ai: {
        title: "Desenvolvimento de Produtos AI-Native",
        description:
          "Integro modelos de linguagem, agentes e fluxos baseados em IA dentro de aplicações web prontas para produção — pensados como parte natural do produto, não como uma camada colada por cima.",
        items: [
          "Integração de LLMs e prompt engineering",
          "Sistemas RAG e busca semântica",
          "Agentes de IA e interfaces conversacionais",
          "UIs em streaming e inferência em tempo real",
        ],
      },
      saas: {
        title: "Plataformas SaaS e Web Apps",
        description:
          "Produtos SaaS multi-tenant, ferramentas internas e dashboards desenhados para escalar — com APIs type-safe, dados em tempo real e um sistema de cobrança que já nasce funcionando bem.",
        items: [
          "Arquitetura SaaS multi-tenant",
          "Auth, cobrança e assinaturas",
          "Dashboards e analytics em tempo real",
          "Stacks type-safe de ponta a ponta",
        ],
      },
      experience: {
        title: "Experiências Web de Alto Desempenho",
        description:
          "Sites de marketing, landing pages e experiências web com identidade forte — pensadas para velocidade, conversão e movimento, e calibradas para passar nos Core Web Vitals com folga.",
        items: [
          "Landing pages focadas em conversão",
          "Motion design e micro-interações",
          "Core Web Vitals e SEO técnico",
          "Acessibilidade e UX inclusiva",
        ],
      },
    },
    tech: {
      heading: "Tecnologias",
      frontend: "Frameworks Frontend",
      state: "Gerenciamento de Estado",
      styling: "Estilização e Animação",
      backend: "Backend e Banco de Dados",
      payments: "Pagamentos e Autenticação",
      deployment: "Implantação",
    },
    contact: {
      heading: "Entre em contato",
      label: "O que vem a seguir?",
      description:
        "Estou aberto neste momento a novas oportunidades e a projetos que valha a pena fazer com cuidado. Seja para tirar uma plataforma do zero ou para levar uma aplicação que já existe a outro nível — me manda uma mensagem e vamos ver como posso ajudar.",
      emailAria: "Enviar um e-mail para hrsshainik@gmail.com",
    },
    footer: { text: "Projetado e desenvolvido por Habibur Rahman" },
    langSwitcher: { buttonAria: "Selecionar idioma", label: "Idioma" },
  },
};
