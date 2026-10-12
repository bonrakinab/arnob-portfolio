export const PROFILE={
  name:'Arnob Banik',firstName:'Arnob',initials:'AB',
  role:'AI Engineer · Full-Stack Developer',location:'Windsor, Ontario',email:'arnob.bnk@gmail.com',
  summary:'MSc Computer Science (Artificial Intelligence) graduate building intelligent retrieval systems, automation platforms and production-minded full-stack software. I combine applied AI research with TypeScript, Python, cloud and enterprise-systems experience.',
  secondary:'Hands-on experience spans machine learning, software development, Oracle Fusion ERP, IT support and technical delivery.',
  recentRole:'Graduate Assistant · University of Windsor',graduationYear:'2026',degree:'MSc Computer Science · Artificial Intelligence',undergrad:'B.Tech Computer Science & Engineering · 8.20/10 CGPA',
  github:'https://github.com/bonrakinab/',linkedin:'https://www.linkedin.com/in/arnob-banik-377417232/',resume:'/assets/Arnob_Banik_Resume.pdf',portrait:'/assets/arnob.JPG'
};

export const NAV=[['about','About'],['skills','Skills'],['work','Work'],['experience','Experience'],['achievements','Achievements'],['contact','Contact']];

export const SKILLS=[
  {symbol:'Py',name:'Python',family:'Languages',logo:'python',projects:['Color-Aware CIR','Phishing URL Detection','Student Dropout Analysis']},
  {symbol:'R',name:'R',family:'Languages',logo:'r',projects:['Data analysis coursework']},
  {symbol:'Sq',name:'SQL',family:'Languages',projects:['Oracle Fusion ERP','Flowdesk','Analytics']},
  {symbol:'Mt',name:'MATLAB',family:'Languages',logo:'matlab',projects:['Academic computing']},
  {symbol:'C',name:'C',family:'Languages',logo:'c',projects:['Computer science coursework']},
  {symbol:'Js',name:'JavaScript',family:'Languages',logo:'javascript',projects:['Flowdesk','Portfolio','GAOTek RFID']},
  {symbol:'Ts',name:'TypeScript',family:'Languages',logo:'typescript',projects:['Flowdesk','Full-stack applications']},
  {symbol:'Ht',name:'HTML/CSS',family:'Languages',logo:'html5',projects:['Portfolio','Web interfaces']},
  {symbol:'Re',name:'React',family:'Frontend',logo:'react',projects:['Portfolio','Product interfaces']},
  {symbol:'Nx',name:'Next.js',family:'Frontend',logo:'nextjs',projects:['Flowdesk','Full-stack applications']},
  {symbol:'An',name:'Angular',family:'Frontend',logo:'angularjs',projects:['GAOTek RFID product website']},
  {symbol:'Tw',name:'Tailwind CSS',family:'Frontend',logo:'tailwindcss',projects:['Responsive interfaces']},
  {symbol:'Vi',name:'Vite',family:'Frontend',logo:'vitejs',projects:['Portfolio']},
  {symbol:'Nd',name:'Node.js',family:'Backend',logo:'nodejs',projects:['Full-stack APIs','Automation tooling']},
  {symbol:'Fl',name:'Flask',family:'Backend',logo:'flask',projects:['Phishing URL Detection','Plant Disease Diagnosis']},
  {symbol:'Ap',name:'REST APIs',family:'Backend',concept:'api',projects:['Flowdesk','Application integrations']},
  {symbol:'Pg',name:'PostgreSQL',family:'Databases',logo:'postgresql',projects:['Flowdesk','Application data']},
  {symbol:'Sb',name:'Supabase',family:'Databases',logo:'supabase',projects:['Job Application Dashboard']},
  {symbol:'Pr',name:'Prisma',family:'Databases',logo:'prisma',projects:['Flowdesk']},
  {symbol:'Pt',name:'PyTorch',family:'Tools',logo:'pytorch',projects:['Color-Aware CIR']},
  {symbol:'Tf',name:'TensorFlow',family:'Tools',logo:'tensorflow',projects:['Plant Disease Diagnosis','ML experiments']},
  {symbol:'Sk',name:'scikit-learn',family:'Tools',logo:'scikitlearn',projects:['Phishing URL Detection','Student Dropout Analysis']},
  {symbol:'Aw',name:'AWS',family:'Tools',logo:'amazonwebservices',projects:['Cloud foundations']},
  {symbol:'Oc',name:'OCI',family:'Tools',logo:'oracle',projects:['Data science','Cloud foundations']},
  {symbol:'Ve',name:'Vercel',family:'Tools',logo:'vercel',projects:['Portfolio','Flowdesk']},
  {symbol:'Gi',name:'Git',family:'Tools',logo:'git',projects:['Version control across projects']},
  {symbol:'Gh',name:'GitHub Actions',family:'Tools',logo:'github',projects:['CI/CD workflows']},
  {symbol:'Do',name:'Docker',family:'Tools',logo:'docker',projects:['Development workflows']},
  {symbol:'Li',name:'Linux',family:'Tools',logo:'linux',projects:['IT systems','Cloud development']},
  {symbol:'Or',name:'Oracle Fusion ERP',family:'Tools',logo:'oracle',projects:['Banglalink enterprise systems']},
  {symbol:'Bi',name:'BI Publisher',family:'Tools',logo:'oracle',projects:['Oracle reporting']},
  {symbol:'Jr',name:'JIRA',family:'Tools',logo:'jira',projects:['Change management','Issue tracking']},
  {symbol:'Ed',name:'EDMS',family:'Tools',concept:'document',projects:['Banglalink document systems']},
  {symbol:'Cl',name:'CLIP',family:'Concepts',concept:'vision',projects:['Color-Aware CIR']},
  {symbol:'Be',name:'BERT',family:'Concepts',concept:'nlp',projects:['Phishing URL Detection']},
  {symbol:'Hn',name:'HNSW',family:'Concepts',concept:'graph',projects:['Color-Aware CIR']},
  {symbol:'Gn',name:'GNNs',family:'Concepts',concept:'graph',projects:['Political Bias Detection']},
  {symbol:'Nl',name:'NLP',family:'Concepts',concept:'nlp',projects:['Phishing URL Detection','Political Bias Detection']},
  {symbol:'Cv',name:'Computer Vision',family:'Concepts',concept:'vision',projects:['Color-Aware CIR','Plant Disease Diagnosis']},
  {symbol:'Ml',name:'Machine Learning',family:'Concepts',concept:'ml',projects:['Phishing URL Detection','Student Dropout Analysis']},
  {symbol:'Ai',name:'Artificial Intelligence',family:'Concepts',concept:'ai',projects:['MSc research','Applied AI systems']}
];

export const PROJECTS=[
  {kicker:'Applied AI Research',title:'Color-Aware Composed Image Retrieval',description:'Palette-aware fashion retrieval combining a reference image, modification text and explicit RGB colour input.',features:['Fine-tuned CLIP RN50x4 fusion','RGB-box consistency and voxelized colour partitions','HNSW / exact-scan routing over FashionIQ','No replacement of the semantic retrieval backbone'],metrics:['77,684 FashionIQ images','1.52 ms/query at Q=1000','MSc thesis · 2026'],tech:['Python','PyTorch','CLIP','HNSW','Computer Vision'],github:'https://github.com/bonrakinab/Fashion_recommender',visual:'retrieval'},
  {kicker:'Full-Stack Product',title:'Flowdesk',description:'A personal and household CRM that unifies tickets, schedules, notes, finances, medication and focus tools in one secure workspace.',features:['Next.js + TypeScript application','Auth.js and multi-user isolation','40+ authenticated API routes','PWA and Android shell'],metrics:['40+ authenticated routes','PWA + Android','Multi-user isolation'],tech:['Next.js','TypeScript','Prisma','PostgreSQL'],github:'https://github.com/bonrakinab/flowdesk',visual:'dashboard'},
  {kicker:'Machine Learning & NLP',title:'Phishing URL Detection',description:'A phishing-detection system comparing classical machine learning with transformer-based approaches on a large real-world URL dataset.',features:['TF-IDF + SMOTE feature pipeline','Random Forest, Decision Tree and Logistic Regression','BERT-based comparison','Flask prediction interface'],metrics:['235,795 URLs','>99% precision & recall','Web interface'],tech:['Python','BERT','scikit-learn','Flask'],github:'https://github.com/bonrakinab/Phishing-URL-Detection-Using-Artificial-Intelligence',visual:'security'},
  {kicker:'Predictive Analytics',title:'Student Dropout Analysis',description:'Predictive modelling for identifying students at risk of dropping out from academic and demographic records.',features:['4,424 student records','PCA preprocessing','Five-fold cross-validation','Random Forest and AdaBoost comparison'],metrics:['4,424 records','78% accuracy','5-fold CV'],tech:['Python','scikit-learn','Machine Learning','SQL'],github:'https://github.com/bonrakinab/Student-Dropout-Analysis-and-Prediction-Using-Machine-Learning-Algorithms',visual:'analytics'},
  {kicker:'Computer Vision',title:'Plant Disease Diagnosis',description:'An image-classification workflow for recognising plant diseases from leaf images and comparing deep-learning architectures.',features:['CNN, ResNet34 and VGG16 comparison','Image preprocessing and classification','Model evaluation workflow','Flask prediction interface'],metrics:['3 deep-learning architectures','Image classification','Web interface'],tech:['Python','TensorFlow','Computer Vision','Flask'],github:'https://github.com/bonrakinab/Plant-Disease-Diagnosis',visual:'vision'}
];

export const CERTIFICATIONS=[
  {name:'Oracle Cloud Infrastructure 2023 Certified Data Science Professional',issuer:'Oracle',href:'https://catalog-education.oracle.com/pls/certview/sharebadge?id=CEF2C31B5B6954508DA07FA226229F9EEC0045BDC85273A003BA8BF873E083D2'},
  {name:'Oracle Cloud Infrastructure 2023 Foundations Associate',issuer:'Oracle',href:'https://catalog-education.oracle.com/pls/certview/sharebadge?id=682F8AA7D152591265961BE85C29EB2A9C0FB9B73F49D1F57626536BF89CFDC6'},
  {name:'Oracle Cloud Data Management 2023 Certified Foundations Associate',issuer:'Oracle',href:'https://catalog-education.oracle.com/pls/certview/sharebadge?id=76CB958EB6FFED02723CC1F73F3B6E939E478540E7CED2F1CA5EB5033B6C0D81'},
  {name:'Google IT Support',issuer:'Google',href:'https://www.credly.com/badges/21253fb7-e08b-42d5-8157-0bcc325bc71c'},
  {name:'AWS Cloud Foundations',issuer:'AWS Academy',href:'https://www.credly.com/badges/dafaa625-6501-4356-8768-ea1512a28e67'},
  {name:'IT Security: Defense against the Digital Dark Arts',issuer:'Coursera',href:'https://www.coursera.org/account/accomplishments/certificate/YVRWCKR55XD3'},
  {name:'Machine Learning for All',issuer:'Coursera',href:'https://www.coursera.org/account/accomplishments/certificate/UTRVM8GNG6QK'}
];

export const TIMELINE=[
  {period:'2025 — 2026',type:'Experience',title:'Graduate Assistant',place:'University of Windsor · Windsor, Ontario',detail:'Completed three graduate-assistant appointments supporting computer-science course delivery, student learning and assessment.'},
  {period:'Sep 2024 — Aug 2026',type:'Education',title:'MSc Computer Science · Artificial Intelligence',place:'University of Windsor',detail:'Completed graduate study in AI and defended the thesis “Augmented Color Input in CIR Requirements” in August 2026.'},
  {period:'Sep 2023 — Jun 2024',type:'Experience',title:'Enterprise Solutions & Services Specialist Engineer, IT',place:'Banglalink · Dhaka, Bangladesh',detail:'Redesigned Oracle Fusion ERP tax mappings, reducing roughly 15,000 tax conditions to 460, while supporting EDMS, change management and ISO 27001 audit documentation.'},
  {period:'Jun 2023 — Sep 2023',type:'Experience',title:'Information Technology Intern',place:'Banglalink · Dhaka, Bangladesh',detail:'Built an IT-support chatbot and supported Oracle ERP documentation, EDMS configuration and technical troubleshooting.'},
  {period:'Dec 2022 — Mar 2023',type:'Experience',title:'Software Development Intern · Team Leader',place:'GAOTek Inc. · Remote',detail:'Developed an Angular RFID product website and coordinated onboarding and defect tracking for the Version 4 RFID team.'},
  {period:'Jul 2019 — Jul 2023',type:'Education',title:'B.Tech Computer Science & Engineering',place:'Vellore Institute of Technology',detail:'Graduated with an 8.20/10 CGPA and a foundation across algorithms, databases, software engineering, machine learning and computer systems.'}
];

export const ACHIEVEMENTS=[
  {label:'Enterprise simplification',value:15000,suffix:' → 460',decimals:0,caption:'Tax conditions consolidated in Oracle Fusion ERP mappings.',detail:'Banglalink',logo:'Oracle Fusion ERP'},
  {label:'Retrieval research',value:77684,suffix:'',decimals:0,caption:'FashionIQ images used in the colour-aware CIR study.',detail:'MSc thesis',logo:'PyTorch'},
  {label:'Inference efficiency',value:1.52,suffix:' ms',decimals:2,caption:'Amortized query cost at Q=1000 for the reported Prebuilt-2 configuration.',detail:'CIR evaluation',concept:'graph'},
  {label:'Phishing detection',value:99,prefix:'>',suffix:'%',decimals:0,caption:'Precision and recall achieved by the best-performing models.',detail:'235,795 URLs',logo:'Python'},
  {label:'Predictive analytics',value:78,suffix:'%',decimals:0,caption:'Best predictive accuracy in the student-dropout analysis.',detail:'4,424 records',concept:'ml'},
  {label:'Undergraduate result',value:8.2,suffix:'/10',decimals:2,caption:'B.Tech Computer Science & Engineering CGPA.',detail:'Vellore Institute of Technology',concept:'education'}
];