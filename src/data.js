export const PROFILE = {
  name: 'Arnob Banik',
  firstName: 'Arnob',
  initials: 'AB',
  role: 'AI Engineer · Full-Stack Developer',
  location: 'Windsor, Ontario',
  email: 'arnob.bnk@gmail.com',
  summary: 'MSc Computer Science (Artificial Intelligence) graduate building intelligent retrieval systems, automation platforms and production-minded full-stack software. I combine applied AI research with TypeScript, Python, cloud and enterprise-systems experience.',
  github: 'https://github.com/bonrakinab/',
  linkedin: 'https://www.linkedin.com/in/arnob-banik-377417232/',
  resume: '/assets/Arnob_Banik_Resume.pdf',
  portrait: '/assets/arnob.JPG'
};

export const NAV = [
  ['about','About'],['skills','Skills'],['work','Work'],['timeline','Experience'],['achievements','Achievements'],['contact','Contact']
];

export const SKILLS = [
  {symbol:'Py',name:'Python',family:'Languages',used:'AI research, ML systems and automation'},
  {symbol:'Ts',name:'TypeScript',family:'Languages',used:'Full-stack applications and tooling'},
  {symbol:'Js',name:'JavaScript',family:'Languages',used:'Web interfaces and application logic'},
  {symbol:'Sq',name:'SQL',family:'Languages',used:'Analytics and relational data'},
  {symbol:'Re',name:'React',family:'Frontend',used:'Interactive product interfaces'},
  {symbol:'Nx',name:'Next.js',family:'Frontend',used:'Full-stack product delivery'},
  {symbol:'An',name:'Angular',family:'Frontend',used:'RFID product web development'},
  {symbol:'Tw',name:'Tailwind',family:'Frontend',used:'Responsive UI systems'},
  {symbol:'Nd',name:'Node.js',family:'Backend',used:'APIs and server-side workflows'},
  {symbol:'Fl',name:'Flask',family:'Backend',used:'ML prediction interfaces'},
  {symbol:'Pg',name:'PostgreSQL',family:'Data',used:'Application persistence'},
  {symbol:'Sb',name:'Supabase',family:'Data',used:'Postgres, auth and application data'},
  {symbol:'Pt',name:'PyTorch',family:'AI & Retrieval',used:'Deep learning and retrieval research'},
  {symbol:'Cl',name:'CLIP',family:'AI & Retrieval',used:'Composed image retrieval'},
  {symbol:'Be',name:'BERT',family:'AI & Retrieval',used:'NLP and URL classification'},
  {symbol:'Hn',name:'HNSW',family:'AI & Retrieval',used:'Approximate nearest-neighbour retrieval'},
  {symbol:'Cv',name:'Computer Vision',family:'AI & Retrieval',used:'Fashion retrieval and image diagnosis'},
  {symbol:'Ml',name:'Machine Learning',family:'AI & Retrieval',used:'Classification and predictive analytics'},
  {symbol:'Aw',name:'AWS',family:'Cloud & Ops',used:'Cloud foundations'},
  {symbol:'Oc',name:'OCI',family:'Cloud & Ops',used:'Oracle cloud and data science'},
  {symbol:'Ve',name:'Vercel',family:'Cloud & Ops',used:'Application deployment'},
  {symbol:'Gi',name:'Git',family:'Cloud & Ops',used:'Version control and delivery'},
  {symbol:'Or',name:'Oracle Fusion ERP',family:'Enterprise',used:'Tax mappings and enterprise workflows'},
  {symbol:'Ji',name:'JIRA',family:'Enterprise',used:'Delivery and issue tracking'}
];

export const PROJECTS = [
  {
    kicker:'Applied AI Research',
    title:'Color-Aware Composed Image Retrieval',
    description:'Palette-aware fashion retrieval combining a reference image, modification text and explicit RGB colour input.',
    features:['Fine-tuned CLIP RN50x4 fusion','RGB-box consistency and voxelized colour partitions','HNSW / exact-scan routing over FashionIQ','No replacement of the semantic retrieval backbone'],
    metrics:['77,684 FashionIQ images','1.52 ms/query at Q=1000','MSc thesis · 2026'],
    tech:['Python','PyTorch','CLIP','HNSW','Computer Vision'],
    href:'https://github.com/bonrakinab/Fashion_recommender',
    visual:'retrieval'
  },
  {
    kicker:'Full-Stack Product',
    title:'Flowdesk',
    description:'A personal and household CRM that unifies tickets, schedules, notes, finances, medication and focus tools in one secure workspace.',
    features:['Next.js + TypeScript application','Auth.js and multi-user isolation','40+ authenticated API routes','PWA and Android shell'],
    metrics:['40+ authenticated routes','PWA + Android','Multi-user isolation'],
    tech:['Next.js','TypeScript','Prisma','PostgreSQL','Auth.js'],
    href:'https://flowdesk-banik.vercel.app',
    visual:'dashboard'
  },
  {
    kicker:'Machine Learning & NLP',
    title:'Phishing URL Detection',
    description:'A phishing-detection system comparing classical machine learning with transformer-based approaches on a large real-world URL dataset.',
    features:['TF-IDF + SMOTE feature pipeline','Random Forest, Decision Tree and Logistic Regression','BERT-based comparison','Flask prediction interface'],
    metrics:['235,795 URLs','>99% precision & recall','Web interface'],
    tech:['Python','BERT','scikit-learn','TF-IDF','Flask'],
    href:'https://github.com/bonrakinab/Phishing-URL-Detection-Using-Artificial-Intelligence',
    visual:'security'
  },
  {
    kicker:'Predictive Analytics',
    title:'Student Dropout Analysis',
    description:'Predictive modelling for identifying students at risk of dropping out from academic and demographic records.',
    features:['4,424 student records','PCA preprocessing','Five-fold cross-validation','Random Forest and AdaBoost comparison'],
    metrics:['4,424 records','78% accuracy','5-fold CV'],
    tech:['Python','Pandas','Random Forest','AdaBoost','PCA'],
    href:'https://github.com/bonrakinab/Student-Dropout-Analysis-and-Prediction-Using-Machine-Learning-Algorithms',
    visual:'analytics'
  }
];

export const TIMELINE = [
  {period:'2025 — 2026',type:'Experience',title:'Graduate Assistant',place:'University of Windsor · Windsor, Ontario',detail:'Completed three graduate-assistant appointments supporting computer-science course delivery, student learning and assessment.'},
  {period:'Sep 2024 — Aug 2026',type:'Education',title:'MSc Computer Science · Artificial Intelligence',place:'University of Windsor',detail:'Completed graduate study in AI and defended the thesis “Augmented Color Input in CIR Requirements” in August 2026.'},
  {period:'Sep 2023 — Jun 2024',type:'Experience',title:'Enterprise Solutions & Services Specialist Engineer, IT',place:'Banglalink · Dhaka, Bangladesh',detail:'Redesigned Oracle Fusion ERP tax mappings, reducing roughly 15,000 tax conditions to 460, while supporting EDMS, change management and ISO 27001 audit documentation.'},
  {period:'Jun 2023 — Sep 2023',type:'Experience',title:'Information Technology Intern',place:'Banglalink · Dhaka, Bangladesh',detail:'Built an IT-support chatbot and supported Oracle ERP documentation, EDMS configuration and technical troubleshooting.'},
  {period:'Dec 2022 — Mar 2023',type:'Experience',title:'Software Development Intern · Team Leader',place:'GAOTek Inc. · Remote',detail:'Developed an Angular RFID product website and coordinated onboarding and defect tracking for the Version 4 RFID team.'},
  {period:'Jul 2019 — Jul 2023',type:'Education',title:'B.Tech Computer Science & Engineering',place:'Vellore Institute of Technology',detail:'Graduated with an 8.20/10 CGPA and a foundation across algorithms, databases, software engineering, machine learning and computer systems.'}
];

export const CERTIFICATIONS = [
  {name:'Oracle Cloud Infrastructure 2023 Certified Data Science Professional',issuer:'Oracle',href:'https://catalog-education.oracle.com/pls/certview/sharebadge?id=CEF2C31B5B6954508DA07FA226229F9EEC0045BDC85273A003BA8BF873E083D2'},
  {name:'Oracle Cloud Infrastructure 2023 Foundations Associate',issuer:'Oracle',href:'https://catalog-education.oracle.com/pls/certview/sharebadge?id=682F8AA7D152591265961BE85C29EB2A9C0FB9B73F49D1F57626536BF89CFDC6'},
  {name:'Oracle Cloud Data Management 2023 Certified Foundations Associate',issuer:'Oracle',href:'https://catalog-education.oracle.com/pls/certview/sharebadge?id=76CB958EB6FFED02723CC1F73F3B6E939E478540E7CED2F1CA5EB5033B6C0D81'},
  {name:'Google IT Support',issuer:'Google',href:'https://www.credly.com/badges/21253fb7-e08b-42d5-8157-0bcc325bc71c'},
  {name:'AWS Cloud Foundations',issuer:'AWS Academy',href:'https://www.credly.com/badges/dafaa625-6501-4356-8768-ea1512a28e67'},
  {name:'Machine Learning for All',issuer:'Coursera',href:'https://www.coursera.org/account/accomplishments/certificate/UTRVM8GNG6QK'}
];

export const ACHIEVEMENTS = [
  {label:'Enterprise simplification',number:'15,000 → 460',caption:'Tax conditions consolidated in Oracle Fusion ERP mappings.',detail:'Banglalink'},
  {label:'Retrieval research',number:'77,684',caption:'FashionIQ images used in the colour-aware CIR study.',detail:'MSc thesis'},
  {label:'Inference efficiency',number:'1.52 ms',caption:'Amortized query cost at Q=1000 for the reported Prebuilt-2 configuration.',detail:'CIR evaluation'},
  {label:'Phishing detection',number:'>99%',caption:'Precision and recall achieved by the best-performing models.',detail:'235,795 URLs'},
  {label:'Predictive analytics',number:'78%',caption:'Best predictive accuracy in the student-dropout analysis.',detail:'4,424 records'}
];