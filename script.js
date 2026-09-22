/**
 * ==========================================================================
 * ESLAM AL-BIALY (إسلام البيلي) - OFFICIAL PORTFOLIO JAVASCRIPT
 * 15 y/o IoT, Embedded Systems & Flutter Developer | DECI Scholar
 * ==========================================================================
 */

// ==========================================
// 1. COMPREHENSIVE BILINGUAL TRANSLATIONS
// ==========================================
const translations = {
    ar: {
        // Navigation
        nav_about: "عني",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_morse: "معمل مورس",
        nav_experience: "المبادرات",
        nav_contact: "تواصل معي",

        // Hero Section
        hero_status: "متاح للمشاريع والابتكار • باحث بمبادرة أشبال مصر الرقمية (DECI) • 15 عاماً",
        hero_greeting: "أهلاً بك، أنا",
        hero_name: "إسلام البيلي",
        typewriter_prefix: "أبتكر ",
        hero_bio: "مبتكر شاب وشغوف بعالم <strong>الأنظمة المدمجة والإلكترونيات الذكية (Arduino & IoT)</strong>، طالب في <strong>مبادرة أشبال مصر الرقمية (DECI)</strong> للذكاء الاصطناعي، ومطور تطبيقات الموبايل بـ <strong>Flutter & Dart</strong>. أحول الأسلاك والمستشعرات والأكواد إلى حلول واقعية ذكية تخدم المجتمع وتدعم ذوي الهمم واستدامة الطاقة.",
        btn_explore_projects: "استعراض المشاريع",
        btn_get_in_touch: "تواصل معي فوراً",

        // Hero Stats
        stat_projects: "مشاريع تقنية منجزة",
        stat_age: "عاماً من الشغف والإبداع",
        stat_deci: "محاور تميز بمبادرة DECI",
        stat_maker: "بناء التطبيقات والدوائر",

        // Floating Badges
        badge_hardware: "Arduino & IoT",
        badge_flutter: "Flutter & Dart",
        badge_ai: "طالب مبادرة DECI",

        // About Section
        about_tag: "القصة والمسيرة",
        about_title_1: "نبذة عن",
        about_title_2: "إسلام البيلي",
        about_subtitle: "مزيج فريد يجمع بين ابتكار الدوائر الإلكترونية والبرمجة والذكاء الاصطناعي وتطبيقات الهاتف في عمر الـ 15 عاماً.",

        // About Card Main
        about_card1_title: "شغف لا يتوقف بالهندسة والابتكار",
        about_card1_p1: "أنا <strong>إسلام محمد سعدالله</strong> (الشهير بـ <strong>إسلام البيلي</strong>)، عمري 15 عاماً. انطلقت رحلتي بتعلم أساسيات الإلكترونيات ودوائر Arduino كاملة، وقمت بتصميم وبرمجة مختلف الأنظمة التفاعلية من الصفر. قادر على تنفيذ أي فكرة مشروع باستخدام لوحات Arduino والمستشعرات والمحركات.",
        about_card1_p2: "بصفتي طالباً في <strong>مبادرة أشبال مصر الرقمية (DECI)</strong>، تعمقت في لغة Python، بيئة PictoBlox لتدريب نماذج الذكاء الاصطناعي ورؤية الحاسوب، وتحليل البيانات عبر Google Sheets وتصميم عروض الأثر عبر Google Slides، مع بناء تطبيقات ذكية لذوي الهمم بـ MIT App Inventor.",
        highlight_1: "تصميم وتنفيذ أنظمة ذكية بالطاقة المتجددة وإنارة الشوارع التلقائية",
        highlight_2: "بناء أجهزة مساعدة وتقنية لخدمة ذوي الهمم والمكفوفين",
        highlight_3: "بناء وتطوير تطبيقات الموبايل بـ Flutter و Dart و Android Studio",

        // About Pillars
        pillar1_title: "الأنظمة المدمجة وإنترنت الأشياء (IoT)",
        pillar1_desc: "احتراف لوحات Arduino، المتحكمات، المستشعرات المتنوعة، الدوائر التناظرية والرقمية، وبرمجة C/C++ لتنفيذ أجهزة مستقلة بكفاءة عالية.",
        pillar2_title: "مبادرة أشبال مصر الرقمية (DECI)",
        pillar2_desc: "تدريب متقدم في الذكاء الاصطناعي، رؤية الحاسوب (Computer Vision)، لغة Python، وتدريب النماذج لترجمة إشارات اليد بالصوت والكاميرا.",
        pillar3_title: "تطبيقات الموبايل (Flutter & Dart)",
        pillar3_desc: "تطوير تطبيقات عصرية سريعة تدعم أندرويد و iOS، مثل منظم المذاكرة الفعال وتطبيق حساب العمر البيولوجي التفاعلي.",

        // Skills Section
        skills_tag: "الترسانة التقنية",
        skills_title_1: "المهارات",
        skills_title_2: "والأدوات",
        skills_subtitle: "التقنيات والمكونات واللغات التي أوظفها في بناء أنظمة الهاردوير وتطبيقات السوفتوير.",
        skill_cat_hardware: "الأنظمة المدمجة والإلكترونيات",
        skill_cat_mobile: "تطوير تطبيقات الموبايل",
        skill_cat_deci: "الذكاء الاصطناعي ومبادرة DECI",
        skill_cat_tools: "الأدوات والهندسة التطبيقية",

        // Projects Section
        projects_tag: "معرض الإنجازات",
        projects_title_1: "أبرز",
        projects_title_2: "المشاريع المبتكرة",
        projects_subtitle: "استكشف 9 مشاريع عملية قمت بتصميم دوائرها وبرمجتها واختبارها على أرض الواقع.",
        filter_all: "جميع المشاريع (9)",
        filter_iot: "إنترنت الأشياء و Arduino (6)",
        filter_deci: "مبادرة أشبال مصر DECI (1)",
        filter_flutter: "تطبيقات الموبايل Flutter (2)",

        // Morse Lab Section
        morse_tag: "تجربة تفاعلية حية",
        morse_title_1: "معمل إرسال وترجمة",
        morse_title_2: "شفرة مورس",
        morse_subtitle: "محاكاة حية لمشروع جهاز مورس الذي بنيته بـ Arduino! جرب كتابة النص أو الضغط على مفتاح التلغراف واستمع لنغمات مورس الحقيقية مع وميض LED المتزامن.",
        led_status_label: "مؤشر الإشارة (Virtual Hardware LED)",
        morse_input_label: "اكتب أي كلمة أو جملة (عربي أو إنجليزي أو أرقام):",
        btn_transmit: "إرسال وتشفير (Transmit)",
        btn_stop: "إيقاف",
        morse_output_label: "كود مورس الناتج:",
        telegraph_heading: "مفتاح التلغراف اليدوي (Manual Telegraph Key)",
        telegraph_instruction: "اضغط واستمر بالضغط على الزر لإطلاق الصوت والضوء فوراً كما في الدائرة الحقيقية بـ Arduino:",
        press_hold: "اضغط مع الاستمرار (Tap & Hold)",

        // Experience Section
        exp_tag: "المحطات والمبادرات",
        exp_title_1: "التعليم",
        exp_title_2: "والمبادرات الوطنية",
        exp_subtitle: "المشاركات التدريبية والشغف العملي المستمر في التكنولوجيا والبرمجة.",
        item1_title: "طالب متميز بمبادرة أشبال مصر الرقمية (DECI)",
        item1_org: "وزارة الاتصالات وتكنولوجيا المعلومات المصرية",
        item1_desc: "انضمام وتفوق في البرنامج الوطني لتدريب قادة التكنولوجيا المستقبليين. دراسة Python والذكاء الاصطناعي وأدوات Google التحليلية وبناء نماذج Machine Learning وتطبيقات Mobile داعمة لذوي الهمم.",
        item2_title: "مبتكر أنظمة مدمجة و IoT مستقل",
        item2_org: "معمل إسلام البيلي للابتكار والمشاريع الذكية",
        item2_desc: "إتمام كورس الإلكترونيات التأسيسي وكورس برمجة Arduino بالكامل. ابتكار أكثر من 6 نماذج عملية تتنوع بين المدن الذكية، الطاقة المتجددة، الأجهزة المساعدة للمكفوفين، وأنظمة الري الآلية.",
        item3_title: "مطور تطبيقات Mobile بـ (Flutter & Dart)",
        item3_org: "Android Studio & Cross-Platform Development",
        item3_desc: "دراسة وتطبيق مفاهيم Flutter لتصميم واجهات تفاعلية متجاوبة وربط التطبيقات بنماذج الذكاء الاصطناعي وتحليل البيانات البيولوجية وتنظيم الوقت.",

        // Contact Section
        contact_tag: "ابدأ التواصل الآن",
        contact_title_1: "تواصل",
        contact_title_2: "معي",
        contact_subtitle: "هل لديك فكرة مشروع في Arduino أو الذكاء الاصطناعي أو تطبيقات Flutter؟ يسعدني التعاون معك دائماً.",
        contact_phone_label: "الهاتف وواتساب",
        contact_email_label: "البريد الإلكتروني",
        contact_linkedin_label: "لينكد إن (LinkedIn)",
        contact_social_label: "اليوزر نيم الموحد",
        direct_msg_title: "أرسل رسالة مباشرة",
        direct_msg_subtitle: "املأ النموذج وسيتم فتح بريدك الإلكتروني برسالة جاهزة فورياً:",
        btn_send_msg: "إرسال الرسالة",

        // Footer
        footer_bio: "مبتكر أنظمة مدمجة وإنترنت الأشياء، وباحث بمبادرة أشبال مصر الرقمية (DECI) ومطور تطبيقات Flutter.",
        footer_copyright: "© 2026 إسلام البيلي. صُمم ونُفّذ بأعلى معايير الأداء والجماليات السيبرانية.",
        footer_top: "العودة للأعلى"
    },

    en: {
        // Navigation (100% Pure English)
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_morse: "Morse Lab",
        nav_experience: "Initiatives",
        nav_contact: "Contact",

        // Hero Section
        hero_status: "Open for Projects & Innovation • DECI Scholar • 15 Years Old",
        hero_greeting: "Hello, I am",
        hero_name: "Eslam Al-Bialy",
        typewriter_prefix: "I build ",
        hero_bio: "Young technology innovator and passionate creator specializing in <strong>Embedded Systems & Smart Electronics (Arduino & IoT)</strong>, distinguished scholar at <strong>Egypt Digital Cubs Initiative (DECI)</strong> in AI & Computer Vision, and mobile app developer using <strong>Flutter & Dart</strong>. I transform wires, sensors, and code into impactful real-world solutions serving sustainability and accessibility.",
        btn_explore_projects: "Explore Projects",
        btn_get_in_touch: "Get in Touch",

        // Hero Stats
        stat_projects: "Completed Tech Projects",
        stat_age: "Years of Passion & Creation",
        stat_deci: "DECI Program Pillars",
        stat_maker: "Building Apps & Circuits",

        // Floating Badges
        badge_hardware: "Arduino & IoT",
        badge_flutter: "Flutter & Dart",
        badge_ai: "DECI Scholar",

        // About Section
        about_tag: "Story & Journey",
        about_title_1: "About",
        about_title_2: "Eslam Al-Bialy",
        about_subtitle: "A unique fusion of electronic hardware innovation, AI, computer vision, and mobile engineering at age 15.",

        // About Card Main
        about_card1_title: "Unstoppable Drive for Engineering & Building",
        about_card1_p1: "I am <strong>Eslam Mohamed Saadallah</strong> (known professionally as <strong>Eslam Al-Bialy</strong>), 15 years old. My engineering journey started with full mastery of foundational electronics and Arduino architectures. I design, solder, wire, and program complete embedded systems from scratch, capable of bringing any hardware concept to life.",
        about_card1_p2: "As a student at <strong>Egypt Digital Cubs Initiative (DECI)</strong>, I have mastered Python programming, PictoBlox AI computer vision model training, Google Sheets data analytics, and interactive presentation storytelling, alongside building assistive mobile applications with MIT App Inventor.",
        highlight_1: "Engineering renewable eco-cities with solar, hydro, wind & automated night lighting",
        highlight_2: "Inventing assistive wearable devices for the visually impaired and people of determination",
        highlight_3: "Building Cross-Platform Mobile Apps with Flutter & Dart",

        // About Pillars
        pillar1_title: "Embedded Systems & IoT",
        pillar1_desc: "Mastery of Arduino Uno/Nano, microcontroller peripherals, analog/digital sensors, and C/C++ firmware engineering for autonomous hardware.",
        pillar2_title: "Egypt Digital Cubs Initiative (DECI)",
        pillar2_desc: "Advanced training in Python, AI, Computer Vision, and hand gesture recognition models translating sign language into speech and visual cues.",
        pillar3_title: "Mobile App Development (Flutter)",
        pillar3_desc: "Building intuitive cross-platform applications for Android & iOS, including productivity planners and interactive biological health estimators.",

        // Skills Section
        skills_tag: "Technical Arsenal",
        skills_title_1: "Skills",
        skills_title_2: "& Tools",
        skills_subtitle: "The technologies, components, and frameworks I leverage to engineer smart hardware and software solutions.",
        skill_cat_hardware: "Embedded Systems & Electronics",
        skill_cat_mobile: "Mobile App Development",
        skill_cat_deci: "AI & DECI Technologies",
        skill_cat_tools: "Engineering Tools & Lab Workflow",

        // Projects Section
        projects_tag: "Portfolio Showcase",
        projects_title_1: "Featured",
        projects_title_2: "Innovative Projects",
        projects_subtitle: "Explore 9 hands-on engineering projects designed, wired, programmed, and tested in real hardware environments.",
        filter_all: "All Projects (9)",
        filter_iot: "IoT & Arduino (6)",
        filter_deci: "DECI Initiative (1)",
        filter_flutter: "Flutter Apps (2)",

        // Morse Lab Section
        morse_tag: "Live Interactive Experiment",
        morse_title_1: "Morse Code Transceiver",
        morse_title_2: "& Decoder Lab",
        morse_subtitle: "A live browser simulation of the real Arduino Morse Station I engineered! Type any message or press the telegraph key to experience realistic 700Hz sine wave tones and synchronized hardware LED blinking.",
        led_status_label: "Signal Indicator (Virtual Hardware LED)",
        morse_input_label: "Enter any text or numbers to transmit:",
        btn_transmit: "Transmit Morse",
        btn_stop: "Stop",
        morse_output_label: "Generated Morse Code:",
        telegraph_heading: "Manual Telegraph Key",
        telegraph_instruction: "Press and hold the button below to emit live tone and flash the LED instantly, mimicking the physical Arduino circuit:",
        press_hold: "Tap & Hold Telegraph Key",

        // Experience Section
        exp_tag: "Milestones & Initiatives",
        exp_title_1: "Education",
        exp_title_2: "& National Initiatives",
        exp_subtitle: "Practical training tracks, official certifications, and continuous technological pursuit.",
        item1_title: "Distinguished Scholar - Egypt Digital Cubs Initiative (DECI)",
        item1_org: "Ministry of Communications and Information Technology (MCIT)",
        item1_desc: "Selected for Egypt's flagship tech leadership program. Advanced study of Python, Artificial Intelligence, machine learning models, computer vision in PictoBlox, and assistive mobile apps for people of determination.",
        item2_title: "Independent Embedded Systems & IoT Maker",
        item2_org: "Eslam Al-Bialy Hardware & Innovation Lab",
        item2_desc: "Completed comprehensive practical training in electronics fundamentals and Arduino engineering. Built 6+ fully functional prototypes spanning smart cities, assistive smart glasses, and automated irrigation.",
        item3_title: "Mobile Application Developer (Flutter & Dart)",
        item3_org: "Android Studio & Cross-Platform Mobile Track",
        item3_desc: "Designing and building fluid mobile user interfaces, connecting frontends with AI prediction endpoints, biological health calculations, and productivity algorithms.",

        // Contact Section
        contact_tag: "Start a Conversation",
        contact_title_1: "Get In",
        contact_title_2: "Touch",
        contact_subtitle: "Have an innovative project idea in Arduino, AI, or Flutter? I am always excited to collaborate and build impactful solutions.",
        contact_phone_label: "Phone & WhatsApp",
        contact_email_label: "Email Address",
        contact_linkedin_label: "LinkedIn Profile",
        contact_social_label: "Unified Handle",
        direct_msg_title: "Send a Direct Message",
        direct_msg_subtitle: "Fill out the form below and it will compose an email ready to send instantly:",
        btn_send_msg: "Send Message",

        // Footer
        footer_bio: "Embedded systems & IoT innovator, DECI scholar, and Flutter mobile application developer.",
        footer_copyright: "© 2026 Eslam Al-Bialy. Engineered with cutting-edge cyber aesthetics.",
        footer_top: "Back to Top"
    }
};

// ==========================================
// 2. THE 9 DETAILED PROJECTS DATA (BILINGUAL)
// ==========================================
const projectsList = [
    // 1. Smart Eco-City
    {
        id: "eco-city",
        category: "iot",
        svgFile: "eco-city.svg",
        icon: "fas fa-city",
        badgeColor: "cyan",
        badgeIcon: "fas fa-microchip",
        metricIcon: "fas fa-bolt",
        ar: {
            categoryName: "إنترنت الأشياء و Arduino",
            metric: "100% طاقة نظيفة متجددة",
            title: "المدينة الذكية المستدامة بالطاقة المتجددة",
            summary: "مدينة ذكية متكاملة تعمل بالطاقة الشمسية والمائية والرياح، مزودة بإنارة شوارع تلقائية ليلاً وإشارات مرور ذكية تفتح عند استشعار السيارات فقط لتوفير استهلاك الكهرباء.",
            tags: ["Arduino Uno", "الطاقة المتجددة", "LDR Sensors", "Ultrasonic HC-SR04", "المدن الذكية"],
            modalTitle: "المدينة الذكية المستدامة (Smart Renewable Eco-City)",
            modalSubtitle: "مشروع متكامل يجمع بين استدامة مصادر الطاقة والأتمتة الذكية للبنية التحتية",
            overview: "صممت ونفذت نموذجاً مصغراً لمدينة ذكية ذاتية التشغيل بالكامل، تعتمد على مصادر الطاقة النظيفة الثلاثة (الطاقة الشمسية، طاقة الرياح عبر مولد هوائي، والطاقة الكهرومائية). تم ربط جميع الأنظمة بمتحكم Arduino لبرمجة كفاءة استهلاك الطاقة على مدار 24 ساعة.",
            features: [
                "نظام إنارة شوارع ذكي (Smart Street Lighting): يعتمد على مستشعرات الضوء LDR لتعمل الأضواء ليلاً فقط وتنطفئ تماماً في النهار لتوفير الطاقة.",
                "إشارات مرور ذكية تفاعلية (Smart Traffic Light System): مزودة بمستشعرات Ultrasonic؛ لا تفتح الإشارة الخضراء إلا عند رصد وجود سيارة متوقفة، مما ينهي الزحام ويمنع هدر الطاقة.",
                "منظومة توليد ثلاثية هجينة (Hybrid Renewable Generation): محاكاة حقيقية لألواح شمسية ومولد رياح وتوربين مائي.",
                "إدارة أحمال الطاقة تلقائياً عبر Relays لضمان استقرار الشبكة."
            ],
            components: ["Arduino Uno R3", "ألواح شمسية ومولدات رياح", "مستشعرات ضوئية LDR", "مستشعر مسافات HC-SR04", "مصفوفة LED إشارات المرور", "وحدات Relay للتحكم"]
        },
        en: {
            categoryName: "IoT & Arduino",
            metric: "100% Clean Renewable Energy",
            title: "Smart Sustainable Renewable Eco-City",
            summary: "An integrated autonomous smart city powered by hybrid solar, wind, and hydro energy. Features automated LDR night streetlights and ultrasonic smart traffic lights that dynamically turn green only when vehicles arrive.",
            tags: ["Arduino Uno", "Clean Energy", "LDR Sensors", "Ultrasonic HC-SR04", "Smart Cities"],
            modalTitle: "Smart Sustainable Renewable Eco-City",
            modalSubtitle: "Autonomous urban infrastructure engineered for clean energy efficiency and adaptive traffic flow",
            overview: "Engineered and wired a complete working model of a self-sustaining eco-city powered by hybrid renewable sources (solar panels, wind turbines, and hydro energy). An Arduino microcontroller manages energy distribution and executes real-time sensor logic to minimize power waste across the city grid.",
            features: [
                "Automated LDR Street Lighting: Photoresistors detect ambient sunlight; streetlights illuminate only when darkness falls, saving 100% of daytime lighting power.",
                "Dynamic Sensor Traffic Lights: Ultrasonic HC-SR04 sensors detect approaching vehicles, switching traffic lights green on-demand to prevent idle queues and congestion.",
                "Hybrid Clean Energy Generation: Combined solar, wind, and hydro turbine simulations feeding battery banks.",
                "Automated Power Switching via Relay Modules to protect against energy dropouts."
            ],
            components: ["Arduino Uno R3", "Solar & Wind Turbine Units", "LDR Photoresistors", "HC-SR04 Ultrasonic Sonar", "Traffic LED Array", "5V Relay Modules"]
        }
    },

    // 2. Smart Glasses for the Blind
    {
        id: "blind-glasses",
        category: "iot",
        svgFile: "blind-glasses.svg",
        icon: "fas fa-glasses",
        badgeColor: "green",
        badgeIcon: "fas fa-glasses",
        metricIcon: "fas fa-shield-alt",
        ar: {
            categoryName: "التقنيات المساعدة و IoT",
            metric: "رادار سونار 2cm - 4m",
            title: "نظارة المكفوفين الذكية بالسونار التفاعلي",
            summary: "نظارة مساعدة ذكية للمكفوفين ترصد العوائق والحواجز أمام الشخص عبر مستشعرات الموجات فوق الصوتية وتطلق تنبيهات صوتية متدرجة التردد كلما اقترب الحاجز لتوفير حركة آمنة ومستقلة.",
            tags: ["Arduino Nano", "HC-SR04 Ultrasonic", "Piezo Buzzer", "Assistive Tech", "ذوي الهمم"],
            modalTitle: "نظارة المكفوفين الذكية (Smart Ultrasonic Vision Glasses)",
            modalSubtitle: "جهاز عتادي قابل للارتداء لتعزيز استقلالية فاقدي البصر وذوي الإعاقة البصرية",
            overview: "ابتكرت هذه النظارة كحل عتادي خفيف الوزن ومنخفض التكلفة لمساعدة أصحاب الإعاقة البصرية على السير والتنقل بحرية دون الحاجة لمرافق. تعمل النظارة كجهاز رادار سونار شخصي يمسح المسار الأمامي باستمرار.",
            features: [
                "رصد فوري للعوائق (Real-time Obstacle Sonar): قياس المسافة بدقة المليمتر في نطاق يبدأ من 2 سم حتى 4 أمتار.",
                "نغمات تحذيرية متدرجة التردد (Variable Frequency Acoustic Alert): تزداد سرعة وكثافة النغمات الصوتية كلما اقترب العائق لتنبيه المستخدم بسرعة اتخاذ خطوة للخلف.",
                "هيكل مريح وخفيف مصمم للارتداء الطويل مع علبة بطارية مدمجة.",
                "كفاءة استهلاك طاقة عالية تتيح العمل لعدة أيام متواصلة."
            ],
            components: ["Arduino Nano / Mini", "مستشعر HC-SR04 فوق صوتي", "جرس صوتي عالي الدقة Piezo Buzzer", "بطارية 9V مدمجة", "إطار نظارة هندسي خفيف الوزن"]
        },
        en: {
            categoryName: "Assistive IoT",
            metric: "Ultrasonic Sonar Range 2cm - 4m",
            title: "Smart Ultrasonic Sonar Glasses for the Blind",
            summary: "Wearable assistive smart eyewear equipped with ultrasonic sonar sensors that detect obstacles and emit dynamic, frequency-modulated audio alerts as obstacles approach, empowering safe independent movement.",
            tags: ["Arduino Nano", "HC-SR04 Ultrasonic", "Piezo Buzzer", "Assistive Tech", "Accessibility"],
            modalTitle: "Smart Ultrasonic Sonar Glasses for the Blind",
            modalSubtitle: "Wearable assistive hardware enhancing mobility and spatial awareness for visually impaired individuals",
            overview: "Designed and built an ultra-lightweight, affordable assistive device empowering visually impaired individuals to navigate indoor and outdoor spaces safely. The glasses act as a personal sonar radar that continuously sweeps the forward path.",
            features: [
                "Real-time Ultrasonic Obstacle Scanning: Detects barriers from 2 cm up to 4 meters away with high accuracy.",
                "Variable-Frequency Acoustic Feedback: Modulates buzzer chirp frequency proportionally to distance; closer barriers trigger rapid urgent beeps.",
                "Ergonomic Lightweight Chassis: Engineered for comfortable extended daily wear with integrated power management.",
                "Low Power Firmware: Optimized Arduino loop sleep states ensuring long battery life."
            ],
            components: ["Arduino Nano / Mini", "HC-SR04 Ultrasonic Sensor", "High-Decibel Piezo Buzzer", "9V Battery Module", "Lightweight Wearable Frame"]
        }
    },

    // 3. Digital Battery Voltmeter
    {
        id: "voltmeter",
        category: "iot",
        svgFile: "voltmeter.svg",
        icon: "fas fa-car-battery",
        badgeColor: "amber",
        badgeIcon: "fas fa-car-battery",
        metricIcon: "fas fa-tachometer-alt",
        ar: {
            categoryName: "الإلكترونيات والقياسات",
            metric: "دقة قياس الفولت ونسبة الشحن",
            title: "مقياس ومحلل جهد البطاريات الرقمي (Digital Voltmeter)",
            summary: "جهاز فحص وتشخيص دقيق مكون من مجزئ جهد مقاوم وتوصيلات إلكترونية يحسب بدقة قيمة الجهد الكهربائي بالفولت ونسبة الشحن المتبقية في أي بطارية وإظهارها فورياً.",
            tags: ["Arduino Uno", "Voltage Divider", "مجزئ الجهد", "Analog Sensors", "Instrumentation"],
            modalTitle: "مقياس ومحلل جهد وسعة البطاريات الرقمي",
            modalSubtitle: "محطة فحص وتشخيص إلكتروني لقياس الجهد ومستوى الطاقة المتبقي بدقة",
            overview: "قمت ببناء هذا الجهاز لتشخيص وحساب كفاءة البطاريات ومستوى شحنها الفعلي. تم تطبيق القوانين الفيزيائية الرياضية عبر دائرة مجزئ الجهد (Voltage Divider) لحماية مدخل الأردوينو وقراءة قيم الجهد بدقة عالية.",
            features: [
                "دائرة مجزئ جهد مدروسة بدقة (Calibrated Voltage Divider Network): خفض الجهد المقاس ليناسب نطاق مدخل Arduino التناظري 0-5V.",
                "معادلة حسابية متقدمة في الكود لتحويل القراءة التناظرية (ADC) إلى قيمة الفولت الحقيقية بدقة منزلتين عشريتين.",
                "حساب النسبة المئوية التقريبية لشحن البطارية (Battery State of Charge Percentage).",
                "عرض فوري عبر الشاشة وشاشة المراقبة التسلسلية Serial Monitor."
            ],
            components: ["Arduino Uno R3", "مقاومات دقيقة محسوبة (Precision Resistors)", "أسلاك ومجسات فحص (Probes)", "لوحة توصيل Breadboard", "شاشة عرض LCD / Serial Monitor"]
        },
        en: {
            categoryName: "Instrumentation & Testing",
            metric: "Precision Voltage & Charge Gauge",
            title: "Digital Battery Voltmeter & Capacity Gauge",
            summary: "A calibrated diagnostic instrument featuring a precision resistor voltage divider circuit that calculates exact DC voltage and remaining battery charge percentage, outputting live telemetry readings.",
            tags: ["Arduino Uno", "Voltage Divider", "Electronics Lab", "Analog ADC", "Diagnostics"],
            modalTitle: "Digital Battery Voltmeter & Capacity Gauge",
            modalSubtitle: "Precision hardware diagnostic tool for measuring DC voltage and energy capacity",
            overview: "Constructed a dedicated diagnostic instrument to evaluate battery health, real-time potential difference, and charge retention. Leveraged Ohm's Law and voltage divider topologies to protect the Arduino analog input pins while preserving precision.",
            features: [
                "Calibrated Resistor Divider Network: Steps down high battery voltages safely into Arduino's 0-5V ADC input boundary.",
                "High-Precision Firmware Calibration: Converts raw analog readings into voltage values with 2-decimal precision.",
                "Battery State of Charge (SoC) Calculation: Translates voltage drops into remaining battery percentage levels.",
                "Live Output Telemetry: Real-time data streaming to Serial Monitor and external displays."
            ],
            components: ["Arduino Uno R3", "Calibrated Metal Film Resistors", "Diagnostic Probes & Clips", "Breadboard Wiring", "LCD / Serial Display"]
        }
    },

    // 4. Automated Soil Irrigation
    {
        id: "soil-irrigation",
        category: "iot",
        svgFile: "soil-irrigation.svg",
        icon: "fas fa-seedling",
        badgeColor: "green",
        badgeIcon: "fas fa-seedling",
        metricIcon: "fas fa-tint",
        ar: {
            categoryName: "التقنيات الزراعية الذكية",
            metric: "ري آلي ذكي موفر للمياه",
            title: "نظام الري الذكي ورصد رطوبة التربة التلقائي",
            summary: "نظام زراعي ذكي يقيس مستوى رطوبة التربة عبر مجسات خاصة، وعند جفاف التربة يقوم تلقائياً بتشغيل مضخة المياه عبر Relay حتى ترتوي التربة تماماً فيتوقف ذاتياً لتوفير المياه.",
            tags: ["Arduino Uno", "Soil Moisture Sensor", "Water Pump Relay", "AgriTech", "أتمتة الري"],
            modalTitle: "نظام الري الذكي ورصد رطوبة التربة الآلي",
            modalSubtitle: "أتمتة هندسية لحماية المحاصيل وترشيد استهلاك المياه بنسبة 100%",
            overview: "مشروع متخصص في التكنولوجيا الزراعية والبيئية (AgriTech). يهدف لحماية النباتات من الجفاف أو التعفن نتيجة الري الزائد، مع الحفاظ الكامل على الموارد المائية عبر التحكم التلقائي المستقل.",
            features: [
                "استشعار تناظري لرطوبة التربة (Soil Moisture Probe): قراءة نسبة رطوبة التربة كل بضع ثوانٍ.",
                "تحكم آلي بالمضخة عبر ريلاي (Relay Switched DC Pump): إرسال أمر فوري بتشغيل مضخة الري عند انخفاض الرطوبة عن الحد الحرج.",
                "إغلاق ذاتي فوري للمضخة عند وصول التربة لدرجة التشبع المثالية.",
                "حماية ضد التشغيل الجاف وإمكانية التوسع لإضافة حساسات متعددة لأكثر من حوض زرع."
            ],
            components: ["Arduino Uno", "حساس رطوبة التربة (Soil Moisture Sensor)", "وحدة Relay 5V لعزل التيار", "مضخة مياه غاطسة DC Submersible Pump", "أنابيب وخزان مياه تجريبي"]
        },
        en: {
            categoryName: "AgriTech & Automation",
            metric: "Autonomous Moisture-Triggered Irrigation",
            title: "Automated Soil Moisture & Plant Irrigation System",
            summary: "An automated agricultural system using soil moisture probes to detect soil dryness thresholds, automatically triggering a submersible water pump via relay module until optimal hydration is achieved.",
            tags: ["Arduino Uno", "Soil Moisture Sensor", "Relay Control", "AgriTech", "Water Saving"],
            modalTitle: "Automated Soil Moisture & Plant Irrigation System",
            modalSubtitle: "Precision AgriTech solution ensuring optimal plant hydration and maximum water conservation",
            overview: "Engineered an intelligent agricultural telemetry and actuation system designed to eliminate crop loss caused by underwatering or overwatering. Operates completely autonomously without human intervention.",
            features: [
                "Continuous Soil Moisture Sampling: Probes monitor dielectric permittivity and moisture levels continuously.",
                "Threshold-Activated Relay Pump: When soil drops below designated moisture thresholds, the Arduino trips a 5V relay to activate the pump.",
                "Automatic Shutoff: Instantly cuts off water supply the moment saturation target is reached, preventing water wastage.",
                "Dry-run Protection and modular design expandable to multi-zone greenhouse plots."
            ],
            components: ["Arduino Uno", "Capacitive/Resistive Moisture Sensor", "5V Isolated Relay Module", "DC Mini Submersible Water Pump", "Silicone Irrigation Tubing"]
        }
    },

    // 5. Weather Station DHT
    {
        id: "weather-station",
        category: "iot",
        svgFile: "weather-station.svg",
        icon: "fas fa-cloud-sun-rain",
        badgeColor: "cyan",
        badgeIcon: "fas fa-cloud-sun-rain",
        metricIcon: "fas fa-temperature-high",
        ar: {
            categoryName: "إنترنت الأشياء والرصد البيئي",
            metric: "رصد بيئي وتليميتري فوري",
            title: "محطة رصد الطقس والحرارة والرطوبة (DHT Station)",
            summary: "محطة مناخية رقمية تستخدم مستشعرات DHT لقياس درجات الحرارة والرطوبة النسبية للجو بدقة عالية وبث البيانات ومراقبة التغيرات المناخية في البيئة المحيطة.",
            tags: ["Arduino Uno", "DHT11 / DHT22", "الطقس", "رصد بيئي", "Telemetry"],
            modalTitle: "محطة رصد الطقس والحرارة والرطوبة المناخية",
            modalSubtitle: "رصد فوري لبيانات الغلاف الجوي المحيط بدقة عالية وتحليل مستمر",
            overview: "محطة قياس بيئية تعتمد على البروتوكول الرقمي لمستشعرات DHT11/DHT22 لقراءة مؤشرات الطقس الأساسية وإرسالها عبر المنفذ التسلسلي أو شاشة العرض لتحليل مؤشرات الراحة الحرارية.",
            features: [
                "قياس درجة الحرارة المئوية (°C) والفهرنهايت (°F) بدقة ممتازة.",
                "قياس نسبة الرطوبة النسبية في الهواء الجوي (Relative Humidity %).",
                "خوارزمية حساب معامل الحرارة المحسوسة (Heat Index Calculation).",
                "نظام إنذار ضوئي أو صوتي عند تجاوز درجات الحرارة أو الرطوبة الحدود الطبيعية."
            ],
            components: ["Arduino Uno R3", "مستشعر درجة الحرارة والرطوبة DHT11 / DHT22", "مقاومة سحب Pull-up 10kΩ", "توصيلات Breadboard", "واجهة برمجية للرصد"]
        },
        en: {
            categoryName: "Telemetry & Weather",
            metric: "Real-time Environmental Telemetry",
            title: "Environmental DHT Weather & Climate Station",
            summary: "A real-time environmental monitoring station utilizing digital DHT sensors to sample ambient temperature and relative humidity, streaming telemetry data for climate and microclimate analysis.",
            tags: ["Arduino Uno", "DHT11 / DHT22", "Weather Station", "Telemetry", "Environmental"],
            modalTitle: "Environmental DHT Weather & Climate Station",
            modalSubtitle: "High-precision ambient atmospheric data logger and thermal comfort estimator",
            overview: "Engineered an environmental telemetry station reading digital single-bus signals from DHT sensors to calculate ambient thermal conditions, dew points, and humidity levels for home and greenhouse microclimates.",
            features: [
                "Dual Metric Temperature Acquisition: Computes both Celsius (°C) and Fahrenheit (°F) with calibrated offsets.",
                "Relative Humidity Telemetry: Tracks ambient moisture percentage with high temporal resolution.",
                "Heat Index & Comfort Rating: Built-in algorithm calculates apparent felt temperature based on combined humidity and heat.",
                "Auditory/Visual Alert thresholds when parameters breach environmental safety limits."
            ],
            components: ["Arduino Uno R3", "DHT11 / DHT22 Digital Sensor", "10kΩ Pull-up Resistor", "Breadboard Circuitry", "Serial / LCD Telemetry Stream"]
        }
    },

    // 6. Morse Code Station
    {
        id: "morse-station",
        category: "iot",
        svgFile: "morse-station.svg",
        icon: "fas fa-wave-square",
        badgeColor: "amber",
        badgeIcon: "fas fa-wave-square",
        metricIcon: "fas fa-broadcast-tower",
        ar: {
            categoryName: "الاتصالات وهندسة الإشارات",
            metric: "إرسال صوتي 700Hz وضوئي متزامن",
            title: "جهاز إرسال واستقبال وترجمة شفرة مورس",
            summary: "محطة اتصالات عتادية تحول النصوص المكتوبة إلى نغمات مورس صوتية وومضات ضوئية متزامنة، مع مفتاح تلغراف يدوي لإدخال الإشارات وفك تشفيرها كما في أجهزة اللاسلكي الحقيقية.",
            tags: ["Arduino Uno", "Morse Code", "Audio Synthesizer", "LED Signaling", "شفرة مورس"],
            modalTitle: "محطة إرسال واستقبال شفرة مورس العتادية",
            modalSubtitle: "إحياء بروتوكولات الاتصال التاريخية بهندسة إلكترونية حديثة ومحاكاة برمجية متزامنة",
            overview: "قمت ببرمجة وبناء جهاز مورس متكامل بـ Arduino يربط بين عالم الصوت والضوء والبرمجة. يمكن للنظام تحويل أي نص إلى نبضات نقطة (.) وشرطة (-) بقواعد توقيت دقيقة، كما يتيح تدريب المستخدمين على إرسال الإشارات يدوياً عبر زر التلغراف.",
            features: [
                "توليد نغمات صوتية دقيقة (700Hz Acoustic Tone Generator): محاكاة نغمات أجهزة الراديو واللاسلكي العسكرية.",
                "ومضات ضوئية بـ LED عالي السطوع متزامنة بالمللي ثانية مع النغمات الصوتية.",
                "مفتاح تلغراف يدوي (Manual Telegraph Key) للتدريب العملي على إرسال شفرة مورس يدوياً.",
                "خوارزمية فك تشفير وتشفير للنصوص تدعم الحروف الإنجليزية والأرقام والرموز القياسية."
            ],
            components: ["Arduino Uno", "زر ضاغط ميكانيكي (Telegraph Key)", "جرس Piezo عالي النقاء الصوتي", "دايود مشع LED فائق السطوع", "مقاومة 220Ω و 10kΩ"]
        },
        en: {
            categoryName: "Communications & Audio",
            metric: "Synchronized 700Hz Tone & Optical LED",
            title: "Bidirectional Morse Code Transceiver Station",
            summary: "A hardware telecommunication station converting text into synchronized Morse audio tones and LED flashes, featuring a manual telegraph key for tactile transmission and signal decoding.",
            tags: ["Arduino Uno", "Morse Code", "Audio Synthesizer", "LED Signaling", "Telecommunications"],
            modalTitle: "Bidirectional Morse Code Transceiver Station",
            modalSubtitle: "Reviving historical communication protocols through embedded microcontroller engineering",
            overview: "Engineered a standalone Morse telecommunications station bridging sound synthesis, photonics, and embedded logic. Converts text strings into standard dot (.) and dash (-) timing intervals while supporting hands-on manual telegraphy.",
            features: [
                "700Hz Pure Acoustic Tone Synthesis: Generates clean sinusoidal square wave tones mimicking military telegraph transceivers.",
                "Millisecond-Synchronized Optical Flash: High-luminosity LED fires precisely in phase with audio chirps.",
                "Tactile Telegraph Key Input: Direct hardware button simulating the spring-loaded telegraph keys of radio operators.",
                "Full Alphanumeric Encoding & Decoding engine supporting international Morse standards."
            ],
            components: ["Arduino Uno R3", "Mechanical Pushbutton Key", "High-Fidelity Piezo Buzzer", "Ultra-Bright Signal LED", "220Ω & 10kΩ Resistors"]
        }
    },

    // 7. DECI 4-Pillar Universal Accessibility System
    {
        id: "deci-system",
        category: "deci",
        svgFile: "deci-system.svg",
        icon: "fas fa-hands-helping",
        badgeColor: "purple",
        badgeIcon: "fas fa-graduation-cap",
        metricIcon: "fas fa-brain",
        ar: {
            categoryName: "مبادرة أشبال مصر الرقمية (DECI)",
            metric: "رؤية حاسوب وترجمة إشارات اليد",
            title: "نظام الرعاية والتواصل الشامل لذوي الهمم (DECI 4-Pillars)",
            summary: "مشروع التخرج المتقدم بمبادرة أشبال مصر الرقمية DECI. يجمع بين 4 محاور: نموذج ذكاء اصطناعي برؤية الحاسوب لترجمة إشارات اليد، تطبيق هاتف بـ MIT App Inventor، تحليل بيانات بـ Google Sheets، وعرض تقديمي بـ Google Slides.",
            tags: ["DECI", "EDCI", "Computer Vision", "PictoBlox", "Python", "MIT App Inventor", "ذوي الهمم"],
            modalTitle: "منظومة الرعاية المتكاملة لذوي الهمم (DECI 4-Pillar System)",
            modalSubtitle: "مشروع ابتكاري شامل يجسد مهارات مبادرة أشبال مصر الرقمية برعاية وزارة الاتصالات",
            overview: "مشروع ريادي صممته ضمن دراستي في مبادرة أشبال مصر الرقمية (DECI / EDCI). يهدف لتمكين فئات ذوي الإعاقة (الصم والبكم وضعاف البصر) من خلال دمج 4 حلول تقنية متكاملة صممتها ونفذتها بالكامل.",
            features: [
                "المحور الأول: نموذج ذكاء اصطناعي ورؤية حاسوب (AI Computer Vision) مبني في PictoBlox ومبرمج بلغة Python لترجمة إشارات الأصابع واليد بالصوت والكتابة فورياً.",
                "المحور الثاني: تطبيق هاتف محمول ذكي مبني بـ MIT App Inventor يحتوي على تحويل الصوت إلى نص (Speech-to-Text) وزر استغاثة ومساعد شخصي تفاعلي.",
                "المحور الثالث: لوحة بيانات وإحصائيات متقدمة عبر Google Sheets لتحليل تفاعل المستخدمين ومعدلات الاستجابة ومؤشرات التحسن.",
                "المحور الرابع: عرض تقديمي متكامل بـ Google Slides يعرض دراسة الأثر الاجتماعي، المنهجية الهندسية، ونتائج الاختبارات."
            ],
            components: ["بيئة PictoBlox للذكاء الاصطناعي", "كود تدريب نماذج Python", "منصة MIT App Inventor للهواتف", "جداول بيانات Google Sheets التحليلية", "عروض Google Slides التقديمية"]
        },
        en: {
            categoryName: "DECI Initiative Project",
            metric: "AI Computer Vision Sign Language",
            title: "DECI 4-Pillar Universal Accessibility System for People of Determination",
            summary: "Flagship capstone project engineered under Egypt Digital Cubs Initiative (DECI). Unifies 4 pillars: AI Computer Vision sign language translation in PictoBlox, MIT App Inventor mobile app, Google Sheets data analytics, and interactive Google Slides impact presentation.",
            tags: ["DECI", "EDCI", "Computer Vision", "PictoBlox", "Python", "MIT App Inventor", "Accessibility"],
            modalTitle: "DECI 4-Pillar Universal Accessibility System",
            modalSubtitle: "Multidisciplinary assistive ecosystem developed under the Egypt Digital Cubs Initiative (DECI)",
            overview: "A flagship assistive engineering initiative developed as part of my tenure in the Egypt Digital Cubs Initiative (DECI / EDCI), sponsored by Egypt's Ministry of Communications. It bridges AI, mobile software, and data analytics to empower hearing- and speech-impaired individuals.",
            features: [
                "Pillar 1 - AI Computer Vision & Sign Language: Machine learning model built in PictoBlox with Python that translates hand and finger gestures into real-time spoken audio and text.",
                "Pillar 2 - Assistive Mobile Application: Built on MIT App Inventor, featuring Speech-to-Text, emergency SOS broadcast, and intuitive visual communication tiles.",
                "Pillar 3 - Telemetry & Health Analytics: Google Sheets analytical pipeline tracking user engagement, response latency, and accessibility efficacy.",
                "Pillar 4 - Impact Documentation & Storytelling: Professional Google Slides deck detailing the engineering lifecycle, stakeholder testing, and future roadmap."
            ],
            components: ["PictoBlox Computer Vision AI", "Python AI Model Scripts", "MIT App Inventor Architecture", "Google Sheets Analytical Engine", "Google Slides Executive Deck"]
        }
    },

    // 8. StudyFlow Mobile App
    {
        id: "studyflow",
        category: "flutter",
        svgFile: "studyflow.svg",
        icon: "fas fa-book-reader",
        badgeColor: "blue",
        badgeIcon: "fab fa-flutter",
        metricIcon: "fas fa-clock",
        ar: {
            categoryName: "تطبيقات الموبايل بـ Flutter",
            metric: "مؤقت بومودورو وتنظيم المهام",
            title: "تطبيق StudyFlow: منظم المذاكرة وزيادة الإنتاجية",
            summary: "تطبيق هاتف عصري صممته وبرمجته بالكامل بـ Flutter و Dart لطلاب المدارس. يحتوي على تقنية بومودورو الذكية (Pomodoro)، جدول مذاكرة مرن، تنظيم المواد حسب الأولوية، وإحصائيات تفاعلية للإنجاز.",
            tags: ["Flutter", "Dart", "Android Studio", "Pomodoro", "Productivity", "Mobile App"],
            modalTitle: "تطبيق StudyFlow: منظم المذاكرة وزيادة التركيز",
            modalSubtitle: "تطبيق موبايل احترافي ومتجاوب مصمم لتطوير عادات المذاكرة والإنتاجية للطلاب",
            overview: "بصفتي طالباً في سن الـ 15، أدركت التحديات التي يواجهها الطلاب في تنظيم أوقاتهم وتشتت الانتباه. فقمت بتصميم وتطوير تطبيق StudyFlow مستخدماً إطار عمل Flutter ولغة Dart و Android Studio ليكون الرفيق اليومي للنجاح الدراسي.",
            features: [
                "مؤقت بومودورو ذكي (Smart Pomodoro Timer): فترات تركيز متتالية مع فواصل راحة مبرمجة ومؤثرات صوتية محفزة.",
                "إدارة المواد والمهام الدراسية (Subject & Task Manager): تصنيف المواد بالألوان وتحديد الأولويات وتواريخ التسليم.",
                "إحصائيات ورسوم بيانية أسبوعية تظهر عدد الساعات المنجزة ومستوى الالتزام.",
                "تصميم واجهات حديثة (Material Design 3) تدعم الوضعين الفاتح والداكن وحفظ البيانات محلياً بسرعة فائقة."
            ],
            components: ["Flutter Framework (Latest)", "Dart Language", "Android Studio IDE", "Local SQLite / Shared Preferences", "Custom Animated UI Widgets"]
        },
        en: {
            categoryName: "Flutter Mobile Engineering",
            metric: "Smart Pomodoro & Task Scheduler",
            title: "StudyFlow: Student Productivity & Focus Planner",
            summary: "A modern cross-platform mobile application engineered with Flutter and Dart. Features an intelligent Pomodoro focus timer, flexible study timetable scheduler, subject priority tracker, and habit analytics.",
            tags: ["Flutter", "Dart", "Android Studio", "Pomodoro", "Productivity", "Mobile App"],
            modalTitle: "StudyFlow: Student Productivity & Focus Planner",
            modalSubtitle: "High-performance mobile application engineered to optimize focus and academic organization",
            overview: "Recognizing the focus and time-management hurdles faced by modern students, I built StudyFlow from the ground up utilizing Flutter, Dart, and Android Studio. The app delivers a frictionless, beautiful user experience that keeps learners accountable.",
            features: [
                "Intelligent Pomodoro Engine: Configurable work and rest intervals with smooth ring animations and auditory cues.",
                "Curriculum & Task Management: Color-coded subject hierarchies, deadline alerts, and priority sorting.",
                "Progress Telemetry: Weekly bar charts and session summaries visualizing focused hours versus targets.",
                "Fluid Material 3 Interface: Optimized for high-FPS rendering with offline-first local data persistence."
            ],
            components: ["Flutter Framework", "Dart Language", "Android Studio", "Local SQLite Storage", "Custom Canvas & Animation Widgets"]
        }
    },

    // 9. BioAge Mobile App
    {
        id: "bioage",
        category: "flutter",
        svgFile: "bioage.svg",
        icon: "fas fa-heartbeat",
        badgeColor: "blue",
        badgeIcon: "fab fa-flutter",
        metricIcon: "fas fa-heartbeat",
        ar: {
            categoryName: "تطبيقات الموبايل والذكاء الاصطناعي",
            metric: "تقدير العمر البيولوجي بالذكاء الاصطناعي",
            title: "تطبيق BioAge: حاسبة ومحلل العمر البيولوجي للإنسان",
            summary: "تطبيق صحي ذكي بـ Flutter & Dart يجمع البيانات الحيوية للمستخدم (ضغط الدم، نبضات القلب، جودة النوم) ويوظف خوارزميات الذكاء الاصطناعي لحساب وتقدير العمر البيولوجي ومقارنته بالعمر الزمني.",
            tags: ["Flutter", "Dart", "AI Integration", "HealthTech", "Android Studio"],
            modalTitle: "تطبيق BioAge: حاسبة ومحلل العمر البيولوجي",
            modalSubtitle: "تطبيق موبايل متقدم لتقدير العمر الفسيولوجي وتحليل المؤشرات الحيوية بالذكاء الاصطناعي",
            overview: "صممت وطورت تطبيق BioAge باستخدام إطار عمل Flutter ولغة Dart ليساعد المستخدمين على قياس وتحسين صحتهم العامة من خلال تحويل المؤشرات الطبية ونمط الحياة إلى تقدير دقيق للعمر البيولوجي.",
            features: [
                "إدخال وتدقيق المؤشرات الحيوية (Biomarker Input Engine): قياس ضغط الدم، معدل ضربات القلب، جودة النوم، ومستويات النشاط البدني.",
                "الربط السلس مع نماذج الذكاء الاصطناعي لحساب الفارق بين العمر الحقيقي والبيولوجي فورياً.",
                "بطاقات نصائح ذكية مخصصة لتحسين المؤشرات الصحية وخفض العمر البيولوجي.",
                "رسوم بيانية تفاعلية ورسوم متحركة سلسة تعكس الحالة الصحية العامة للمستخدم بدقة عالية."
            ],
            components: ["Flutter SDK", "Dart Language", "REST API Bridge", "State Management (Provider / Bloc)", "Custom Health Gauge Visuals"]
        },
        en: {
            categoryName: "Flutter & AI Mobile App",
            metric: "AI Biological Age & Health Biomarkers",
            title: "BioAge: Biological Age & Health Biomarker Estimator",
            summary: "An intelligent HealthTech mobile application engineered with Flutter & Dart. Analyzes physiological biomarkers (blood pressure, heart rate, sleep quality) using AI algorithms to estimate biological age and provide personalized wellness insights.",
            tags: ["Flutter", "Dart", "AI Integration", "HealthTech", "Mobile App"],
            modalTitle: "BioAge: Biological Age & Health Biomarker Estimator",
            modalSubtitle: "Advanced mobile health analytics platform combining biomarker data with AI predictive logic",
            overview: "Engineered the BioAge cross-platform mobile application utilizing Flutter and Dart. The system ingests personal health indicators and lifestyle metrics to compute estimated physiological age against chronological age, promoting long-term health.",
            features: [
                "Biomarker Ingestion Engine: Intuitive collection of physiological metrics (blood pressure, sleep quality, activity index, resting HR).",
                "AI Prediction Bridge: Real-time API communication calculating the discrepancy between chronological and biological age.",
                "Personalized Wellness Diagnostics: Dynamically generated lifestyle adjustment recommendations to lower biological age.",
                "Radial Health Gauges & Telemetry Visualizations designed with custom painters and high-FPS Flutter animations."
            ],
            components: ["Flutter SDK", "Dart Language", "REST API Bridge", "Modern State Management", "Custom Health Gauge Painters"]
        }
    }
];

// ==========================================
// 3. MORSE CODE AUDIO & SIMULATOR ENGINE
// ==========================================
const MORSE_MAP = {
    // English Alphanumeric
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/',
    // Arabic Mapping for complete cross-compatibility
    'ا': '.-', 'أ': '.-', 'إ': '.-', 'آ': '.-',
    'ب': '-...', 'ت': '-', 'ث': '-.-.', 'ج': '.---', 'ح': '....',
    'خ': '---', 'د': '-..', 'ذ': '--..', 'ر': '.-.', 'ز': '---.',
    'س': '...', 'ش': '----', 'ص': '-.--', 'ض': '...-', 'ط': '..-',
    'ظ': '-.--', 'ع': '.-.-', 'غ': '--.', 'ف': '..-.', 'ق': '--.-',
    'ك': '-.-', 'ل': '.-..', 'م': '--', 'ن': '-.', 'ه': '..-',
    'و': '.--', 'ي': '..', 'ى': '..', 'ة': '.-..', 'ء': '.'
};

class MorseAudioEngine {
    constructor() {
        this.audioCtx = null;
        this.oscillator = null;
        this.gainNode = null;
        this.isPlayingSequence = false;
        this.currentSequenceTimeouts = [];
        this.dotDurationMs = 120; // Standard timing unit
        this.frequency = 700; // Crisp, clear 700Hz tone
    }

    init() {
        if (!this.audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                this.audioCtx = new AudioContextClass();
            }
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }

    startTone() {
        this.init();
        if (!this.audioCtx) return;

        if (!this.oscillator) {
            this.oscillator = this.audioCtx.createOscillator();
            this.gainNode = this.audioCtx.createGain();

            this.oscillator.type = 'sine';
            this.oscillator.frequency.setValueAtTime(this.frequency, this.audioCtx.currentTime);

            // Envelope to avoid clicking
            this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
            this.gainNode.gain.linearRampToValueAtTime(0.25, this.audioCtx.currentTime + 0.01);

            this.oscillator.connect(this.gainNode);
            this.gainNode.connect(this.audioCtx.destination);
            this.oscillator.start();
        }
        this.setLed(true);
    }

    stopTone() {
        if (this.oscillator && this.gainNode && this.audioCtx) {
            this.gainNode.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 0.015);
            setTimeout(() => {
                if (this.oscillator) {
                    try {
                        this.oscillator.stop();
                        this.oscillator.disconnect();
                    } catch (e) {}
                    this.oscillator = null;
                    this.gainNode = null;
                }
            }, 25);
        }
        this.setLed(false);
    }

    setLed(state) {
        const led = document.getElementById('morse-led');
        if (led) {
            if (state) {
                led.classList.add('active');
            } else {
                led.classList.remove('active');
            }
        }
    }

    textToMorse(text) {
        const upper = text.toUpperCase();
        const codeArray = [];
        for (let i = 0; i < upper.length; i++) {
            const char = upper[i];
            if (MORSE_MAP[char]) {
                codeArray.push(MORSE_MAP[char]);
            }
        }
        return codeArray.join(' ');
    }

    playMorseSequence(morseCode, onFinishCallback) {
        this.stopSequence();
        this.init();
        this.isPlayingSequence = true;

        const dot = this.dotDurationMs;
        const dash = dot * 3;
        const intraCharGap = dot;
        const interCharGap = dot * 3;
        const wordGap = dot * 7;

        let currentTimeOffset = 0;

        const tokens = morseCode.split(' ');

        tokens.forEach((symbolGroup, groupIndex) => {
            if (symbolGroup === '/') {
                currentTimeOffset += wordGap;
                return;
            }

            for (let i = 0; i < symbolGroup.length; i++) {
                const symbol = symbolGroup[i];
                const toneDuration = (symbol === '-') ? dash : dot;

                // Schedule tone START
                const startTimeout = setTimeout(() => {
                    if (this.isPlayingSequence) {
                        this.startTone();
                    }
                }, currentTimeOffset);
                this.currentSequenceTimeouts.push(startTimeout);

                currentTimeOffset += toneDuration;

                // Schedule tone STOP
                const stopTimeout = setTimeout(() => {
                    this.stopTone();
                }, currentTimeOffset);
                this.currentSequenceTimeouts.push(stopTimeout);

                // Space between elements of same character
                currentTimeOffset += intraCharGap;
            }

            // Space between characters
            currentTimeOffset += interCharGap;
        });

        // Sequence finish
        const finishTimeout = setTimeout(() => {
            this.isPlayingSequence = false;
            this.setLed(false);
            if (onFinishCallback) onFinishCallback();
        }, currentTimeOffset + 100);
        this.currentSequenceTimeouts.push(finishTimeout);
    }

    stopSequence() {
        this.isPlayingSequence = false;
        this.currentSequenceTimeouts.forEach(t => clearTimeout(t));
        this.currentSequenceTimeouts = [];
        this.stopTone();
        this.setLed(false);
    }
}

const morseEngine = new MorseAudioEngine();

// ==========================================
// 4. ACTIVE LANGUAGE & THEME STATE
// ==========================================
let currentLang = 'ar';
let activeFilter = 'all';

/**
 * Apply language translations to entire DOM
 */
function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update HTML dir and lang attributes
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Button Label: In Arabic show 'EN' to switch to English; in English show 'AR'
    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
        langLabel.textContent = (lang === 'ar') ? 'EN' : 'عربي';
    }

    // Translate all data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update dynamic placeholders & inputs
    const morseInput = document.getElementById('morse-text-input');
    if (morseInput) {
        morseInput.placeholder = (lang === 'en') 
            ? "Type here, e.g. ESLAM, SOS, or 2026..." 
            : "اكتب هنا مثلاً: ESLAM أو SOS أو 2026...";
    }

    const senderName = document.getElementById('sender-name');
    if (senderName) {
        senderName.placeholder = (lang === 'en') ? "Your Full Name" : "اسمك الكريم";
    }

    const senderSubject = document.getElementById('sender-subject');
    if (senderSubject) {
        senderSubject.placeholder = (lang === 'en') ? "Message Subject or Project Title" : "موضوع الرسالة أو اسم المشروع";
    }

    const senderMsg = document.getElementById('sender-message');
    if (senderMsg) {
        senderMsg.placeholder = (lang === 'en') ? "Write project details or inquiries here..." : "اكتب تفاصيل فكرتك أو استفسارك هنا...";
    }

    const morseStatus = document.getElementById('morse-status');
    if (morseStatus) {
        morseStatus.textContent = (lang === 'en') ? "System Ready • READY TO TRANSMIT" : "النظام جاهز للإرسال • READY";
    }

    // Document Title
    document.title = (lang === 'en')
        ? "Eslam Al-Bialy | IoT, Embedded Systems & Flutter Developer"
        : "إسلام البيلي | مطور أنظمة مدمجة، إنترنت الأشياء و Flutter";

    // Re-render project cards dynamically with 100% pure active language
    renderProjects(activeFilter);

    // Restart typewriter with active language phrases
    startTypewriter();

    // Recompute scrollspy active link
    updateActiveNavLink();
}

/**
 * Toggle between Arabic and English
 */
function toggleLanguage() {
    const targetLang = (currentLang === 'ar') ? 'en' : 'ar';
    setLanguage(targetLang);
}

// ==========================================
// 5. PROJECT RENDERING & FILTERING
// ==========================================
function renderProjects(filterCategory = 'all') {
    activeFilter = filterCategory;
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = (filterCategory === 'all')
        ? projectsList
        : projectsList.filter(p => p.category === filterCategory);

    grid.innerHTML = '';

    filtered.forEach(p => {
        const pData = p[currentLang] || p['en'];
        const card = document.createElement('div');
        card.className = `project-card filter-${p.category}`;
        card.setAttribute('data-id', p.id);

        const tagsHtml = pData.tags.map(tag => `<span class="proj-tag">${tag}</span>`).join('');

        const viewDetailsText = (currentLang === 'en') ? "View Full Details" : "عرض كامل التفاصيل";
        const viewSpecsText = (currentLang === 'en') ? "Technical Specifications" : "المواصفات الفنية للدائرة";
        const categoryBadgeText = pData.categoryName;

        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="assets/images/projects/${p.svgFile}" alt="${pData.title}" class="project-img" loading="lazy">
                <div class="project-overlay">
                    <button class="btn btn-overlay" onclick="openProjectModal('${p.id}')">
                        <i class="fas fa-search-plus"></i>
                        <span>${viewDetailsText}</span>
                    </button>
                </div>
                <span class="project-badge badge-${p.badgeColor}">
                    <i class="${p.badgeIcon}"></i> ${categoryBadgeText}
                </span>
            </div>
            <div class="project-body">
                <div class="project-metric">
                    <i class="${p.metricIcon}"></i> <span>${pData.metric}</span>
                </div>
                <h3 class="project-title">${pData.title}</h3>
                <p class="project-desc">${pData.summary}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
                <div class="project-footer">
                    <button class="project-link-btn" onclick="openProjectModal('${p.id}')">
                        <span>${viewSpecsText}</span>
                        <i class="fas ${currentLang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}"></i>
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    // Update active state on filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === filterCategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ==========================================
// 6. PROJECT MODAL POPUP
// ==========================================
function openProjectModal(projectId) {
    const project = projectsList.find(p => p.id === projectId);
    if (!project) return;

    const pData = project[currentLang] || project['en'];
    const modalBody = document.getElementById('modal-body');
    const modal = document.getElementById('project-modal');
    if (!modalBody || !modal) return;

    const isEn = (currentLang === 'en');
    const featuresHeading = isEn ? "Key Technical Capabilities & Features" : "أبرز الخصائص والقدرات الفنية";
    const componentsHeading = isEn ? "Hardware & Software Components Used" : "المكونات والتقنيات المستخدمة";
    const categoryLabel = isEn ? "Category:" : "التصنيف:";
    const closeBtnText = isEn ? "Close" : "إغلاق";

    const featuresHtml = pData.features.map(f => `<li><i class="fas fa-check-circle"></i> <span>${f}</span></li>`).join('');
    const componentsHtml = pData.components.map(c => `<span class="comp-badge"><i class="fas fa-microchip"></i> ${c}</span>`).join('');
    const tagsHtml = pData.tags.map(t => `<span class="proj-tag">${t}</span>`).join('');

    modalBody.innerHTML = `
        <div class="modal-header-custom">
            <div class="modal-icon-badge">
                <i class="${project.icon}"></i>
            </div>
            <div class="modal-title-group">
                <span class="modal-cat-tag"><i class="fas fa-tag"></i> ${categoryLabel} ${pData.categoryName}</span>
                <h2 class="modal-heading">${pData.modalTitle}</h2>
                <p class="modal-subheading">${pData.modalSubtitle}</p>
            </div>
        </div>

        <div class="modal-overview-box">
            <p>${pData.overview}</p>
        </div>

        <div class="modal-section-block">
            <h3><i class="fas fa-bolt"></i> ${featuresHeading}</h3>
            <ul class="modal-features-list">
                ${featuresHtml}
            </ul>
        </div>

        <div class="modal-section-block">
            <h3><i class="fas fa-layer-group"></i> ${componentsHeading}</h3>
            <div class="modal-components-grid">
                ${componentsHtml}
            </div>
        </div>

        <div class="modal-footer-custom">
            <div class="modal-tags-row">
                ${tagsHtml}
            </div>
            <button class="btn btn-secondary" onclick="closeProjectModal()">
                <i class="fas fa-times"></i> <span>${closeBtnText}</span>
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProjectModal(event) {
    if (event && event.target !== event.currentTarget && !event.target.closest('.modal-close') && !event.target.closest('.btn-secondary')) {
        return;
    }
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ==========================================
// 7. TYPEWRITER ANIMATION ENGINE
// ==========================================
let typewriterTimeout = null;

const typewriterPhrases = {
    ar: [
        "أنظمة إنترنت الأشياء والـ Arduino",
        "تطبيقات الهاتف بـ Flutter & Dart",
        "نماذج الذكاء الاصطناعي بمبادرة DECI",
        "أجهزة مساعدة لخدمة ذوي الهمم",
        "دوائر إلكترونية ذكية موفرة للطاقة"
    ],
    en: [
        "Smart IoT & Embedded Systems",
        "Fluid Flutter & Dart Mobile Apps",
        "DECI AI & Computer Vision Models",
        "Assistive Hardware for Determination",
        "Clean Energy & Eco-City Logic"
    ]
};

function startTypewriter() {
    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
    }

    const typewriterEl = document.getElementById('typewriter');
    if (!typewriterEl) return;

    const phrases = typewriterPhrases[currentLang] || typewriterPhrases['en'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 35 : 75;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause after completed phrase
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 350; // Pause before new phrase
        }

        typewriterTimeout = setTimeout(typeLoop, typeSpeed);
    }

    typeLoop();
}

// ==========================================
// 8. SCROLLSPY & ACTIVE NAVBAR MOVING LINE
// ==========================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    let activeId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeId = sectionId;
        }
    });

    // If near bottom of page, highlight contact
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        activeId = 'contact';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
            link.classList.add('active');
        }
    });

    // Navbar background blur/shrink on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (scrollPosition > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

// ==========================================
// 9. TOAST NOTIFICATION & CLIPBOARD
// ==========================================
let toastTimeout = null;

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

function copyText(text, successMessage) {
    const msg = successMessage || ((currentLang === 'en') ? "Copied to clipboard!" : "تم النسخ بنجاح!");
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(msg);
        }).catch(() => {
            fallbackCopy(text, msg);
        });
    } else {
        fallbackCopy(text, msg);
    }
}

function fallbackCopy(text, msg) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showToast(msg);
    } catch (err) {
        showToast((currentLang === 'en') ? "Copy failed" : "فشل النسخ");
    }
    document.body.removeChild(textArea);
}

// ==========================================
// 10. DIRECT MESSAGE FORM HANDLER
// ==========================================
function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('sender-name').value.trim();
    const subject = document.getElementById('sender-subject').value.trim();
    const message = document.getElementById('sender-message').value.trim();

    if (!name || !subject || !message) return;

    const emailTo = "eslamelbialy735@gmail.com";
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${subject} - from ${name}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\n\nProject / Inquiry Details:\n${message}\n\nSent via Eslam Al-Bialy Portfolio`);

    window.location.href = `mailto:${emailTo}?subject=${mailtoSubject}&body=${mailtoBody}`;

    const sentToast = (currentLang === 'en')
        ? "Opening email client with your message..."
        : "جاري فتح برنامج البريد الإلكتروني برسالتك...";
    showToast(sentToast);
}

// ==========================================
// 11. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle Listener
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }

    // 2. Filter Buttons Listeners
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });

    // 3. Morse Code Station Controls
    const morseInput = document.getElementById('morse-text-input');
    const morseOutput = document.getElementById('morse-code-output');
    const btnPlayMorse = document.getElementById('btn-play-morse');
    const btnStopMorse = document.getElementById('btn-stop-morse');
    const telegraphKey = document.getElementById('telegraph-key');
    const morseStatus = document.getElementById('morse-status');

    function updateMorseOutput() {
        if (!morseInput || !morseOutput) return;
        const text = morseInput.value.trim();
        if (!text) {
            morseOutput.textContent = "...";
            return;
        }
        const encoded = morseEngine.textToMorse(text);
        morseOutput.textContent = encoded || "...";
    }

    if (morseInput) {
        morseInput.addEventListener('input', updateMorseOutput);
        updateMorseOutput();
    }

    if (btnPlayMorse) {
        btnPlayMorse.addEventListener('click', () => {
            const text = morseInput ? morseInput.value.trim() : "";
            if (!text) return;
            const encoded = morseEngine.textToMorse(text);
            if (!encoded) return;

            if (morseStatus) {
                morseStatus.textContent = (currentLang === 'en') 
                    ? "Transmitting Audio & LED Signal • TRANSMITTING..." 
                    : "جاري إرسال النغمات والضوء • TRANSMITTING...";
            }

            btnPlayMorse.classList.add('pulsing');

            morseEngine.playMorseSequence(encoded, () => {
                btnPlayMorse.classList.remove('pulsing');
                if (morseStatus) {
                    morseStatus.textContent = (currentLang === 'en') 
                        ? "Transmission Complete • READY" 
                        : "اكتمل الإرسال بنجاح • READY";
                }
            });
        });
    }

    if (btnStopMorse) {
        btnStopMorse.addEventListener('click', () => {
            morseEngine.stopSequence();
            if (btnPlayMorse) btnPlayMorse.classList.remove('pulsing');
            if (morseStatus) {
                morseStatus.textContent = (currentLang === 'en') 
                    ? "Transmission Stopped • READY" 
                    : "تم إيقاف الإرسال • READY";
            }
        });
    }

    // Manual Telegraph Key (Touch / Mouse Down & Up)
    if (telegraphKey) {
        const handleKeyStart = (e) => {
            e.preventDefault();
            morseEngine.startTone();
            telegraphKey.classList.add('pressed');
            if (morseStatus) {
                morseStatus.textContent = (currentLang === 'en') 
                    ? "Manual Telegraph Key Active • TRANSMITTING" 
                    : "مفتاح التلغراف اليدوي نشط • TRANSMITTING";
            }
        };

        const handleKeyEnd = (e) => {
            e.preventDefault();
            morseEngine.stopTone();
            telegraphKey.classList.remove('pressed');
            if (morseStatus) {
                morseStatus.textContent = (currentLang === 'en') 
                    ? "System Ready • READY" 
                    : "النظام جاهز للإرسال • READY";
            }
        };

        telegraphKey.addEventListener('mousedown', handleKeyStart);
        telegraphKey.addEventListener('mouseup', handleKeyEnd);
        telegraphKey.addEventListener('mouseleave', handleKeyEnd);

        telegraphKey.addEventListener('touchstart', handleKeyStart, { passive: false });
        telegraphKey.addEventListener('touchend', handleKeyEnd, { passive: false });
        telegraphKey.addEventListener('touchcancel', handleKeyEnd, { passive: false });
    }

    // 4. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // Close mobile menu when a nav link is clicked
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // 5. Scrollspy Listener
    window.addEventListener('scroll', updateActiveNavLink, { passive: true });

    // 6. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 7. Initial Page Setup in Arabic
    setLanguage('ar');
    updateActiveNavLink();
});
