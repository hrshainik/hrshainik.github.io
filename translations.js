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
        'I build production-ready web applications, bridging design and engineering to transform ideas into dependable, user-focused products. I work with international clients both on <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a> and through my personal portfolio, delivering software that is trusted and used in real-world environments.',
      p3: "My academic background in Biochemistry & Molecular Biology has shaped a structured and analytical approach to problem-solving, allowing me to design software systems with clarity, precision, and long-term maintainability in mind.",
    },
    experience: {
      heading: "Experience",
      present: "Present",
      upwork: {
        title: "Full-Stack Developer · Upwork",
        description:
          "Building scalable web applications for international clients. Projects range from SaaS platforms to e-commerce solutions, focusing on clean architecture, performance optimization, and exceptional user experiences.",
      },
      biofidex: {
        title: "Founder & CEO · biofideX",
        description:
          "Building an educational platform focused on bioscience education. Leading product development, technical architecture, and user experience design for a comprehensive learning ecosystem.",
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
      biofidex: {
        title: "biofideX — Bioscience Education",
        description:
          "A modern bioscience learning platform where students and professionals can explore quizzes, articles, and courses across life science disciplines. Designed for clarity and accessibility, with interactive assessments and structured content that support effective, evidence-based learning.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        description:
          "An e-commerce platform for Islamic fashion, built with a clean shopping experience, secure payments, and real-time inventory management.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        description:
          "A professional service website for a Dubai-based cleaning company, showcasing residential and commercial services with a clear structure and user-friendly experience.",
      },
    },
    services: {
      heading: "Services",
      web: {
        title: "Website Design & Development",
        description:
          "Modern, fast, and responsive websites built with clean UI and thoughtful user experience.",
        items: [
          "Business & personal websites",
          "Landing pages & portfolios",
          "Responsive & SEO-ready layouts",
          "Performance-focused frontend",
        ],
      },
      app: {
        title: "Web App & Dashboard Development",
        description:
          "User-friendly web applications and dashboards that turn complex ideas into simple experiences.",
        items: [
          "SaaS & internal tools",
          "Admin panels & dashboards",
          "Frontend + backend integration",
          "Scalable UI systems",
        ],
      },
      uiux: {
        title: "UI/UX Improvement & Optimization",
        description:
          "Improving existing websites and apps to look better, feel smoother, and perform faster.",
        items: [
          "UI redesign & UX cleanup",
          "Mobile & accessibility fixes",
          "Frontend refactoring",
          "Performance optimization",
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
        "ফ্রন্টএন্ড ইঞ্জিনিয়ারিং ও ব্যবহারকারী অভিজ্ঞতায় বিশেষ দক্ষতাসম্পন্ন পণ্য-চালিত ডেভেলপার।",
    },
    about: {
      heading: "পরিচিতি",
      p1: "আমি ঢাকা, বাংলাদেশে অবস্থানরত একজন পণ্য-চালিত ফুল-স্ট্যাক ডেভেলপার, যিনি ফ্রন্টএন্ড ইঞ্জিনিয়ারিং ও ব্যবহারকারী অভিজ্ঞতায় বিশেষভাবে দক্ষ। চিন্তাশীল ও সুপরিকল্পিত ডিজিটাল পণ্য নির্মাণের প্রতি গভীর আগ্রহ থেকেই আমি বায়োকেমিস্ট্রি থেকে সফটওয়্যার ডেভেলপমেন্টে পদার্পণ করেছি।",
      p2Html:
        'আমি প্রোডাকশন-রেডি ওয়েব অ্যাপ্লিকেশন তৈরি করি, ডিজাইন ও ইঞ্জিনিয়ারিংকে একত্রিত করে ধারণাকে নির্ভরযোগ্য, ব্যবহারকারী-কেন্দ্রিক পণ্যে রূপান্তরিত করি। আমি <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a>-এ এবং সরাসরি আমার ব্যক্তিগত পোর্টফোলিওর মাধ্যমে আন্তর্জাতিক ক্লায়েন্টদের সাথে কাজ করি, এমন সফটওয়্যার ডেলিভার করি যা বাস্তব পরিবেশে বিশ্বস্তভাবে ব্যবহৃত হচ্ছে।',
      p3: "বায়োকেমিস্ট্রি ও মলিকুলার বায়োলজিতে আমার শিক্ষাগত পটভূমি সমস্যা সমাধানে একটি কাঠামোগত ও বিশ্লেষণমূলক দৃষ্টিভঙ্গি গড়ে দিয়েছে, যা আমাকে স্পষ্টতা, নির্ভুলতা ও দীর্ঘমেয়াদী রক্ষণযোগ্যতার কথা বিবেচনা করে সফটওয়্যার সিস্টেম ডিজাইন করতে সাহায্য করে।",
    },
    experience: {
      heading: "অভিজ্ঞতা",
      present: "বর্তমান",
      upwork: {
        title: "ফুল-স্ট্যাক ডেভেলপার · Upwork",
        description:
          "আন্তর্জাতিক ক্লায়েন্টদের জন্য স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরি করছি। প্রকল্পগুলো SaaS প্ল্যাটফর্ম থেকে ই-কমার্স সমাধান পর্যন্ত বিস্তৃত, পরিষ্কার আর্কিটেকচার, পারফরম্যান্স অপ্টিমাইজেশন এবং অসাধারণ ব্যবহারকারী অভিজ্ঞতায় মনোযোগ দিয়ে।",
      },
      biofidex: {
        title: "প্রতিষ্ঠাতা ও সিইও · biofideX",
        description:
          "বায়োসায়েন্স শিক্ষায় একটি শিক্ষামূলক প্ল্যাটফর্ম নির্মাণ করছি। একটি বিস্তৃত শিক্ষা ইকোসিস্টেমের জন্য পণ্য উন্নয়ন, প্রযুক্তিগত আর্কিটেকচার এবং ব্যবহারকারী অভিজ্ঞতা ডিজাইনে নেতৃত্ব দিচ্ছি।",
      },
    },
    education: {
      heading: "শিক্ষা",
      university: "জগন্নাথ বিশ্ববিদ্যালয়",
      field: "বায়োকেমিস্ট্রি ও মলিকুলার বায়োলজি",
      description:
        "বিশ্লেষণমূলক চিন্তাভাবনা, গবেষণা পদ্ধতি এবং বৈজ্ঞানিক সমস্যা সমাধানে একটি শক্তিশালী ভিত্তি গড়ে তুলেছি, যা এখন সফটওয়্যার ইঞ্জিনিয়ারিং ও পণ্য উন্নয়নে আমার পদ্ধতিগত পদ্ধতিকে প্রভাবিত করে।",
      badge: "বিএসসি",
    },
    projects: {
      heading: "প্রকল্প",
      biofidex: {
        title: "biofideX — বায়োসায়েন্স শিক্ষা",
        description:
          "একটি আধুনিক বায়োসায়েন্স লার্নিং প্ল্যাটফর্ম যেখানে শিক্ষার্থী ও পেশাদাররা জীবন বিজ্ঞান বিষয়ক কুইজ, প্রবন্ধ ও কোর্স অন্বেষণ করতে পারেন। স্পষ্টতা ও অ্যাক্সেসিবিলিটির জন্য ডিজাইন করা, ইন্টারেক্টিভ মূল্যায়ন ও কাঠামোবদ্ধ বিষয়বস্তু সহ যা কার্যকর, প্রমাণ-ভিত্তিক শিক্ষাকে সমর্থন করে।",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        description:
          "ইসলামিক ফ্যাশনের জন্য একটি ই-কমার্স প্ল্যাটফর্ম, পরিষ্কার কেনাকাটার অভিজ্ঞতা, নিরাপদ পেমেন্ট এবং রিয়েল-টাইম ইনভেন্টরি ম্যানেজমেন্ট সহ নির্মিত।",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        description:
          "দুবাই-ভিত্তিক একটি ক্লিনিং কোম্পানির জন্য একটি পেশাদার সার্ভিস ওয়েবসাইট, আবাসিক ও বাণিজ্যিক সেবা পরিষ্কার কাঠামো ও ব্যবহারকারী-বান্ধব অভিজ্ঞতায় প্রদর্শন করে।",
      },
    },
    services: {
      heading: "সেবা",
      web: {
        title: "ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট",
        description:
          "পরিষ্কার UI ও চিন্তাশীল ব্যবহারকারী অভিজ্ঞতা সহ আধুনিক, দ্রুত ও রেসপন্সিভ ওয়েবসাইট।",
        items: [
          "ব্যবসায়িক ও ব্যক্তিগত ওয়েবসাইট",
          "ল্যান্ডিং পেজ ও পোর্টফোলিও",
          "রেসপন্সিভ ও SEO-রেডি লেআউট",
          "পারফরম্যান্স-কেন্দ্রিক ফ্রন্টএন্ড",
        ],
      },
      app: {
        title: "ওয়েব অ্যাপ ও ড্যাশবোর্ড ডেভেলপমেন্ট",
        description:
          "ব্যবহারকারী-বান্ধব ওয়েব অ্যাপ্লিকেশন ও ড্যাশবোর্ড যা জটিল ধারণাকে সহজ অভিজ্ঞতায় রূপান্তরিত করে।",
        items: [
          "SaaS ও অভ্যন্তরীণ টুলস",
          "অ্যাডমিন প্যানেল ও ড্যাশবোর্ড",
          "ফ্রন্টএন্ড + ব্যাকএন্ড ইন্টিগ্রেশন",
          "স্কেলেবল UI সিস্টেম",
        ],
      },
      uiux: {
        title: "UI/UX উন্নতি ও অপ্টিমাইজেশন",
        description:
          "বিদ্যমান ওয়েবসাইট ও অ্যাপগুলোকে আরও সুন্দর, মসৃণ ও দ্রুত করে তোলা।",
        items: [
          "UI রিডিজাইন ও UX পরিষ্কার",
          "মোবাইল ও অ্যাক্সেসিবিলিটি সংশোধন",
          "ফ্রন্টএন্ড রিফ্যাক্টরিং",
          "পারফরম্যান্স অপ্টিমাইজেশন",
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
        "আমি বর্তমানে নতুন সুযোগ ও আকর্ষণীয় প্রকল্পের জন্য উন্মুক্ত আছি। আপনার যদি একটি সম্পূর্ণ প্ল্যাটফর্মের প্রয়োজন হয় বা কোনো বিদ্যমান অ্যাপ্লিকেশন অপ্টিমাইজ করতে চান, আসুন আলোচনা করি কীভাবে আমি সাহায্য করতে পারি।",
      emailAria: "hrsshainik@gmail.com-এ ইমেইল পাঠান",
    },
    footer: { text: "ডিজাইন ও নির্মাণ করেছেন হাবিবুর রহমান" },
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
        "مطوّر يركز على المنتج مع تخصص قوي في هندسة الواجهة الأمامية وتجربة المستخدم.",
    },
    about: {
      heading: "نبذة عني",
      p1: "أنا مطوّر فول-ستاك مدفوع بالمنتج مقيم في دكا، بنغلاديش، مع تركيز قوي على هندسة الواجهة الأمامية وتجربة المستخدم. انتقلت من الكيمياء الحيوية إلى تطوير البرمجيات نتيجة شغفي الحقيقي ببناء منتجات رقمية مدروسة ومصمّمة بعناية.",
      p2Html:
        'أبني تطبيقات ويب جاهزة للإنتاج، أجمع بين التصميم والهندسة لتحويل الأفكار إلى منتجات موثوقة تتمحور حول المستخدم. أعمل مع عملاء دوليين عبر <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a> ومن خلال محفظتي الشخصية، مُسلِّماً برمجيات موثوقة تُستخدم في بيئات حقيقية.',
      p3: "أرست خلفيتي الأكاديمية في الكيمياء الحيوية وعلم الأحياء الجزيئي نهجاً منظماً وتحليلياً لحل المشكلات، مما يمكّنني من تصميم أنظمة برمجية بوضوح ودقة مع مراعاة قابلية الصيانة على المدى الطويل.",
    },
    experience: {
      heading: "الخبرة",
      present: "حتى الآن",
      upwork: {
        title: "مطوّر فول-ستاك · Upwork",
        description:
          "بناء تطبيقات ويب قابلة للتوسّع للعملاء الدوليين. تتراوح المشاريع من منصات SaaS إلى حلول التجارة الإلكترونية، مع التركيز على البنية النظيفة وتحسين الأداء وتجارب المستخدم الاستثنائية.",
      },
      biofidex: {
        title: "المؤسس والرئيس التنفيذي · biofideX",
        description:
          "بناء منصة تعليمية متخصصة في تعليم علوم الأحياء. قيادة تطوير المنتج والبنية التقنية وتصميم تجربة المستخدم لمنظومة تعليمية شاملة.",
      },
    },
    education: {
      heading: "التعليم",
      university: "جامعة جاغانات",
      field: "الكيمياء الحيوية وعلم الأحياء الجزيئي",
      description:
        "أرسيت أساساً متيناً في التفكير التحليلي ومنهجية البحث وحل المشكلات العلمية، مما يُشكّل الآن نهجي المنهجي في هندسة البرمجيات وتطوير المنتجات.",
      badge: "بكالوريوس",
    },
    projects: {
      heading: "المشاريع",
      biofidex: {
        title: "biofideX — التعليم البيولوجي",
        description:
          "منصة تعلّم حديثة لعلوم الأحياء يمكن للطلاب والمحترفين من خلالها استكشاف الاختبارات والمقالات والدورات عبر تخصصات علوم الحياة. مصمّمة للوضوح وسهولة الوصول، مع تقييمات تفاعلية ومحتوى منظم.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        description:
          "منصة تجارة إلكترونية للأزياء الإسلامية، مبنية بتجربة تسوق نظيفة ومدفوعات آمنة وإدارة مخزون في الوقت الفعلي.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        description:
          "موقع خدمات احترافي لشركة تنظيف مقرها دبي، يعرض خدمات السكن والتجارة بهيكل واضح وتجربة سهلة الاستخدام.",
      },
    },
    services: {
      heading: "الخدمات",
      web: {
        title: "تصميم وتطوير المواقع",
        description:
          "مواقع حديثة وسريعة ومتجاوبة مبنية بواجهة مستخدم نظيفة وتجربة مستخدم مدروسة.",
        items: [
          "مواقع الأعمال والشخصية",
          "صفحات الهبوط والمحافظ",
          "تصميمات متجاوبة وجاهزة لتحسين محركات البحث",
          "واجهة أمامية تركز على الأداء",
        ],
      },
      app: {
        title: "تطوير تطبيقات الويب ولوحات التحكم",
        description:
          "تطبيقات ويب ولوحات تحكم سهلة الاستخدام تحوّل الأفكار المعقدة إلى تجارب بسيطة.",
        items: [
          "أدوات SaaS والأدوات الداخلية",
          "لوحات الإدارة ولوحات التحكم",
          "تكامل الواجهة الأمامية والخلفية",
          "أنظمة واجهة مستخدم قابلة للتوسع",
        ],
      },
      uiux: {
        title: "تحسين وتطوير واجهة وتجربة المستخدم",
        description:
          "تحسين المواقع والتطبيقات القائمة لتبدو أفضل وتعمل بسلاسة أكبر وأداء أسرع.",
        items: [
          "إعادة تصميم الواجهة وتنظيف تجربة المستخدم",
          "إصلاحات الهاتف المحمول وإمكانية الوصول",
          "إعادة هيكلة الواجهة الأمامية",
          "تحسين الأداء",
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
        "أنا منفتح حالياً على الفرص الجديدة والمشاريع المثيرة للاهتمام. سواء كنت بحاجة إلى منصة كاملة أو تريد تحسين تطبيق قائم، لنناقش كيف يمكنني المساعدة.",
      emailAria: "إرسال بريد إلكتروني إلى hrsshainik@gmail.com",
    },
    footer: { text: "تصميم وبناء بواسطة حبيب الرحمن" },
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
        "Desarrollador orientado al producto con fuerte enfoque en ingeniería frontend y experiencia de usuario.",
    },
    about: {
      heading: "Sobre mí",
      p1: "Soy un desarrollador full-stack orientado al producto, basado en Dhaka, Bangladesh, con un fuerte enfoque en ingeniería frontend y experiencia de usuario. Hice la transición de Bioquímica al desarrollo de software por una genuina pasión por construir productos digitales bien pensados y bien diseñados.",
      p2Html:
        'Construyo aplicaciones web listas para producción, uniendo diseño e ingeniería para transformar ideas en productos confiables centrados en el usuario. Trabajo con clientes internacionales tanto en <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a> como a través de mi portafolio personal, entregando software de confianza utilizado en entornos reales.',
      p3: "Mi formación académica en Bioquímica y Biología Molecular me ha dado un enfoque estructurado y analítico para resolver problemas, permitiéndome diseñar sistemas de software con claridad, precisión y con la mantenibilidad a largo plazo en mente.",
    },
    experience: {
      heading: "Experiencia",
      present: "Presente",
      upwork: {
        title: "Desarrollador Full-Stack · Upwork",
        description:
          "Construyendo aplicaciones web escalables para clientes internacionales. Los proyectos van desde plataformas SaaS hasta soluciones e-commerce, enfocándose en arquitectura limpia, optimización de rendimiento y experiencias de usuario excepcionales.",
      },
      biofidex: {
        title: "Fundador y CEO · biofideX",
        description:
          "Construyendo una plataforma educativa enfocada en educación en biociencias. Liderando el desarrollo del producto, la arquitectura técnica y el diseño de experiencia de usuario para un ecosistema de aprendizaje integral.",
      },
    },
    education: {
      heading: "Formación",
      university: "Universidad Jagannath",
      field: "Bioquímica y Biología Molecular",
      description:
        "Construí una sólida base en pensamiento analítico, metodología de investigación y resolución de problemas científicos que ahora informa mi enfoque sistemático al desarrollo de software y productos.",
      badge: "Licenciatura",
    },
    projects: {
      heading: "Proyectos",
      biofidex: {
        title: "biofideX — Educación en Biociencias",
        description:
          "Una plataforma moderna de aprendizaje en biociencias donde estudiantes y profesionales pueden explorar cuestionarios, artículos y cursos en disciplinas de ciencias de la vida. Diseñada para claridad y accesibilidad, con evaluaciones interactivas y contenido estructurado.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        description:
          "Una plataforma de e-commerce para moda islámica, construida con una experiencia de compra clara, pagos seguros y gestión de inventario en tiempo real.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        description:
          "Un sitio web de servicios profesionales para una empresa de limpieza con sede en Dubái, mostrando servicios residenciales y comerciales con estructura clara y experiencia amigable.",
      },
    },
    services: {
      heading: "Servicios",
      web: {
        title: "Diseño y Desarrollo Web",
        description:
          "Sitios web modernos, rápidos y responsivos construidos con UI limpia y experiencia de usuario bien pensada.",
        items: [
          "Sitios web de negocios y personales",
          "Landing pages y portafolios",
          "Diseños responsivos y listos para SEO",
          "Frontend enfocado en rendimiento",
        ],
      },
      app: {
        title: "Desarrollo de Apps y Dashboards",
        description:
          "Aplicaciones web y dashboards amigables que transforman ideas complejas en experiencias simples.",
        items: [
          "SaaS y herramientas internas",
          "Paneles de administración y dashboards",
          "Integración frontend + backend",
          "Sistemas UI escalables",
        ],
      },
      uiux: {
        title: "Mejora y Optimización UI/UX",
        description:
          "Mejorar sitios y apps existentes para que luzcan mejor, funcionen más suavemente y rindan más rápido.",
        items: [
          "Rediseño UI y limpieza UX",
          "Correcciones móviles y de accesibilidad",
          "Refactorización frontend",
          "Optimización de rendimiento",
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
        "Actualmente estoy abierto a nuevas oportunidades y proyectos interesantes. Ya sea que necesites una plataforma completa o quieras optimizar una aplicación existente, hablemos sobre cómo puedo ayudarte.",
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
        "Développeur orienté produit avec une forte expertise en ingénierie frontend et expérience utilisateur.",
    },
    about: {
      heading: "À propos",
      p1: "Je suis un développeur full-stack orienté produit basé à Dhaka, Bangladesh, avec un fort accent sur l'ingénierie frontend et l'expérience utilisateur. J'ai effectué une transition de la Biochimie vers le développement logiciel par une véritable passion pour la création de produits numériques réfléchis et bien conçus.",
      p2Html:
        'Je construis des applications web prêtes pour la production, alliant design et ingénierie pour transformer des idées en produits fiables centrés sur l\'utilisateur. Je travaille avec des clients internationaux sur <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a> et via mon portfolio personnel, livrant des logiciels de confiance utilisés dans des environnements réels.',
      p3: "Mon parcours académique en Biochimie et Biologie Moléculaire a façonné une approche structurée et analytique de la résolution de problèmes, me permettant de concevoir des systèmes logiciels avec clarté, précision et maintenabilité à long terme.",
    },
    experience: {
      heading: "Expérience",
      present: "Présent",
      upwork: {
        title: "Développeur Full-Stack · Upwork",
        description:
          "Construction d'applications web scalables pour des clients internationaux. Les projets vont des plateformes SaaS aux solutions e-commerce, avec un accent sur l'architecture propre, l'optimisation des performances et des expériences utilisateur exceptionnelles.",
      },
      biofidex: {
        title: "Fondateur et PDG · biofideX",
        description:
          "Construction d'une plateforme éducative axée sur l'éducation en biosciences. Pilotage du développement produit, de l'architecture technique et de la conception de l'expérience utilisateur pour un écosystème d'apprentissage complet.",
      },
    },
    education: {
      heading: "Formation",
      university: "Université Jagannath",
      field: "Biochimie et Biologie Moléculaire",
      description:
        "J'ai construit une solide base en pensée analytique, méthodologie de recherche et résolution de problèmes scientifiques qui informe désormais mon approche systématique de l'ingénierie logicielle et du développement produit.",
      badge: "Licence",
    },
    projects: {
      heading: "Projets",
      biofidex: {
        title: "biofideX — Éducation en Biosciences",
        description:
          "Une plateforme d'apprentissage moderne en biosciences où étudiants et professionnels peuvent explorer des quiz, des articles et des cours dans les disciplines des sciences de la vie. Conçue pour la clarté et l'accessibilité, avec des évaluations interactives et un contenu structuré.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        description:
          "Une plateforme e-commerce pour la mode islamique, construite avec une expérience d'achat claire, des paiements sécurisés et une gestion des stocks en temps réel.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        description:
          "Un site web de services professionnels pour une entreprise de nettoyage basée à Dubaï, présentant des services résidentiels et commerciaux avec une structure claire et une expérience conviviale.",
      },
    },
    services: {
      heading: "Services",
      web: {
        title: "Conception et Développement Web",
        description:
          "Sites web modernes, rapides et responsifs construits avec une UI propre et une expérience utilisateur réfléchie.",
        items: [
          "Sites web d'entreprise et personnels",
          "Pages d'atterrissage et portfolios",
          "Mises en page responsives et prêtes pour le SEO",
          "Frontend orienté performance",
        ],
      },
      app: {
        title: "Développement d'Apps et Tableaux de Bord",
        description:
          "Applications web et tableaux de bord conviviaux qui transforment des idées complexes en expériences simples.",
        items: [
          "SaaS et outils internes",
          "Panneaux d'administration et tableaux de bord",
          "Intégration frontend + backend",
          "Systèmes UI scalables",
        ],
      },
      uiux: {
        title: "Amélioration et Optimisation UI/UX",
        description:
          "Améliorer les sites et applications existants pour qu'ils paraissent mieux, fonctionnent plus fluidement et soient plus rapides.",
        items: [
          "Refonte UI et nettoyage UX",
          "Corrections mobile et accessibilité",
          "Refactorisation frontend",
          "Optimisation des performances",
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
        "Je suis actuellement ouvert à de nouvelles opportunités et projets intéressants. Que vous ayez besoin d'une plateforme complète ou souhaitiez optimiser une application existante, discutons de comment je peux vous aider.",
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
        "Produktorientierter Entwickler mit starkem Fokus auf Frontend-Engineering und User Experience.",
    },
    about: {
      heading: "Über mich",
      p1: "Ich bin ein produktorientierter Full-Stack-Entwickler mit Sitz in Dhaka, Bangladesch, mit starkem Fokus auf Frontend-Engineering und User Experience. Ich habe aus echter Leidenschaft für die Entwicklung durchdachter, gut gestalteter digitaler Produkte von der Biochemie zur Softwareentwicklung gewechselt.",
      p2Html:
        'Ich entwickle produktionsreife Webanwendungen und verbinde Design mit Engineering, um Ideen in zuverlässige, nutzerzentrierte Produkte zu verwandeln. Ich arbeite mit internationalen Kunden sowohl über <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a> als auch direkt über mein persönliches Portfolio und liefere Software, die in realen Umgebungen eingesetzt wird.',
      p3: "Mein akademischer Hintergrund in Biochemie und Molekularbiologie hat einen strukturierten und analytischen Ansatz zur Problemlösung geprägt, der es mir ermöglicht, Softwaresysteme mit Klarheit, Präzision und langfristiger Wartbarkeit zu entwerfen.",
    },
    experience: {
      heading: "Erfahrung",
      present: "Heute",
      upwork: {
        title: "Full-Stack-Entwickler · Upwork",
        description:
          "Entwicklung skalierbarer Webanwendungen für internationale Kunden. Die Projekte reichen von SaaS-Plattformen bis hin zu E-Commerce-Lösungen, mit Fokus auf saubere Architektur, Performance-Optimierung und außergewöhnliche Nutzererlebnisse.",
      },
      biofidex: {
        title: "Gründer & CEO · biofideX",
        description:
          "Aufbau einer Bildungsplattform mit Schwerpunkt auf Biowissenschaften. Leitung der Produktentwicklung, technischen Architektur und User-Experience-Gestaltung für ein umfassendes Lernökosystem.",
      },
    },
    education: {
      heading: "Ausbildung",
      university: "Jagannath-Universität",
      field: "Biochemie & Molekularbiologie",
      description:
        "Ich habe ein solides Fundament in analytischem Denken, Forschungsmethodik und wissenschaftlicher Problemlösung aufgebaut, das jetzt meinen systematischen Ansatz in der Softwareentwicklung und Produktentwicklung prägt.",
      badge: "B.Sc.",
    },
    projects: {
      heading: "Projekte",
      biofidex: {
        title: "biofideX — Biowissenschaftliche Bildung",
        description:
          "Eine moderne Biowissenschafts-Lernplattform, auf der Studierende und Fachleute Quizze, Artikel und Kurse aus den Lebenswissenschaften erkunden können. Für Übersichtlichkeit und Barrierefreiheit konzipiert, mit interaktiven Assessments und strukturierten Inhalten.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        description:
          "Eine E-Commerce-Plattform für islamische Mode, entwickelt mit einem klaren Einkaufserlebnis, sicheren Zahlungen und Echtzeit-Bestandsverwaltung.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        description:
          "Eine professionelle Service-Website für ein in Dubai ansässiges Reinigungsunternehmen, das Wohn- und Gewerbeservices mit klarer Struktur und benutzerfreundlicher Erfahrung präsentiert.",
      },
    },
    services: {
      heading: "Leistungen",
      web: {
        title: "Website-Design & Entwicklung",
        description:
          "Moderne, schnelle und responsive Websites mit sauberer Benutzeroberfläche und durchdachter User Experience.",
        items: [
          "Geschäftliche & persönliche Websites",
          "Landingpages & Portfolios",
          "Responsive & SEO-optimierte Layouts",
          "Performance-fokussiertes Frontend",
        ],
      },
      app: {
        title: "Web-App & Dashboard-Entwicklung",
        description:
          "Benutzerfreundliche Webanwendungen und Dashboards, die komplexe Ideen in einfache Erlebnisse verwandeln.",
        items: [
          "SaaS & interne Tools",
          "Admin-Panels & Dashboards",
          "Frontend + Backend-Integration",
          "Skalierbare UI-Systeme",
        ],
      },
      uiux: {
        title: "UI/UX-Verbesserung & Optimierung",
        description:
          "Bestehende Websites und Apps verbessern, damit sie besser aussehen, flüssiger laufen und schneller werden.",
        items: [
          "UI-Redesign & UX-Bereinigung",
          "Mobile- & Barrierefreiheits-Korrekturen",
          "Frontend-Refactoring",
          "Performance-Optimierung",
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
        "Ich bin derzeit offen für neue Möglichkeiten und interessante Projekte. Ob Sie eine komplette Plattform benötigen oder eine bestehende Anwendung optimieren möchten – lassen Sie uns besprechen, wie ich helfen kann.",
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
        "Desenvolvedor orientado a produto com forte foco em engenharia frontend e experiência do usuário.",
    },
    about: {
      heading: "Sobre mim",
      p1: "Sou um desenvolvedor full-stack orientado a produto, baseado em Dhaka, Bangladesh, com forte foco em engenharia frontend e experiência do usuário. Fiz a transição da Bioquímica para o desenvolvimento de software por uma genuína paixão por construir produtos digitais bem pensados e bem projetados.",
      p2Html:
        'Construo aplicações web prontas para produção, unindo design e engenharia para transformar ideias em produtos confiáveis centrados no usuário. Trabalho com clientes internacionais tanto no <a href="https://www.upwork.com/freelancers/~018853a57064b0cb97" target="_blank" rel="noopener noreferrer">Upwork</a> quanto pelo meu portfólio pessoal, entregando software de confiança usado em ambientes reais.',
      p3: "Minha formação acadêmica em Bioquímica e Biologia Molecular moldou uma abordagem estruturada e analítica para a resolução de problemas, permitindo-me projetar sistemas de software com clareza, precisão e com a manutenibilidade a longo prazo em mente.",
    },
    experience: {
      heading: "Experiência",
      present: "Presente",
      upwork: {
        title: "Desenvolvedor Full-Stack · Upwork",
        description:
          "Construindo aplicações web escaláveis para clientes internacionais. Os projetos vão desde plataformas SaaS até soluções de e-commerce, com foco em arquitetura limpa, otimização de desempenho e experiências de usuário excepcionais.",
      },
      biofidex: {
        title: "Fundador e CEO · biofideX",
        description:
          "Construindo uma plataforma educacional focada em educação em biociências. Liderando o desenvolvimento do produto, arquitetura técnica e design de experiência do usuário para um ecossistema de aprendizagem abrangente.",
      },
    },
    education: {
      heading: "Formação",
      university: "Universidade Jagannath",
      field: "Bioquímica e Biologia Molecular",
      description:
        "Construí uma sólida base em pensamento analítico, metodologia de pesquisa e resolução de problemas científicos que agora informa minha abordagem sistemática à engenharia de software e desenvolvimento de produtos.",
      badge: "Bacharelado",
    },
    projects: {
      heading: "Projetos",
      biofidex: {
        title: "biofideX — Educação em Biociências",
        description:
          "Uma plataforma moderna de aprendizagem em biociências onde estudantes e profissionais podem explorar questionários, artigos e cursos nas disciplinas de ciências da vida. Projetada para clareza e acessibilidade, com avaliações interativas e conteúdo estruturado.",
      },
      albayt: {
        title: "Al-Bayt Elegance",
        description:
          "Uma plataforma de e-commerce para moda islâmica, construída com uma experiência de compra clara, pagamentos seguros e gestão de estoque em tempo real.",
      },
      noorJabal: {
        title: "Noor Jabal Cleaning",
        description:
          "Um site de serviços profissionais para uma empresa de limpeza sediada em Dubai, apresentando serviços residenciais e comerciais com estrutura clara e experiência amigável.",
      },
    },
    services: {
      heading: "Serviços",
      web: {
        title: "Design e Desenvolvimento Web",
        description:
          "Sites modernos, rápidos e responsivos construídos com UI limpa e experiência de usuário bem pensada.",
        items: [
          "Sites empresariais e pessoais",
          "Landing pages e portfólios",
          "Layouts responsivos e prontos para SEO",
          "Frontend focado em desempenho",
        ],
      },
      app: {
        title: "Desenvolvimento de Apps e Dashboards",
        description:
          "Aplicações web e dashboards amigáveis que transformam ideias complexas em experiências simples.",
        items: [
          "SaaS e ferramentas internas",
          "Painéis de administração e dashboards",
          "Integração frontend + backend",
          "Sistemas de UI escaláveis",
        ],
      },
      uiux: {
        title: "Melhoria e Otimização de UI/UX",
        description:
          "Melhorar sites e aplicações existentes para que fiquem melhores, funcionem com mais fluidez e sejam mais rápidos.",
        items: [
          "Redesign de UI e limpeza de UX",
          "Correções de mobile e acessibilidade",
          "Refatoração de frontend",
          "Otimização de desempenho",
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
        "Estou atualmente aberto a novas oportunidades e projetos interessantes. Seja para uma plataforma completa ou para otimizar uma aplicação existente, vamos discutir como posso ajudar.",
      emailAria: "Enviar um e-mail para hrsshainik@gmail.com",
    },
    footer: { text: "Projetado e desenvolvido por Habibur Rahman" },
    langSwitcher: { buttonAria: "Selecionar idioma", label: "Idioma" },
  },
};
