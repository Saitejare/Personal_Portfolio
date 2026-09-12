import ragAsset from "@/assets/rag-ai-chatbot.png.asset.json";
import zoraAsset from "@/assets/zora-interface.png.asset.json";
import salesAsset from "@/assets/sales-intelligence.jpg.asset.json";
import analyticsDataPreprocessingAsset from "@/assets/certificates/analytics-vidhya-data-preprocessing.png.asset.json";
import analyticsDataVisualizationAsset from "@/assets/certificates/analytics-vidhya-data-visualization.png.asset.json";
import huggingFaceLlmAsset from "@/assets/certificates/hugging-face-llm-fundamentals.png.asset.json";
import huggingFaceMcpAsset from "@/assets/certificates/hugging-face-mcp-unit-1.png.asset.json";
import ibmMachineLearningAsset from "@/assets/certificates/ibm-machine-learning-python.png.asset.json";
import kaggleIntroMachineLearningAsset from "@/assets/certificates/kaggle-intro-machine-learning.png.asset.json";
import kagglePandasAsset from "@/assets/certificates/kaggle-pandas.png.asset.json";
import kagglePythonAsset from "@/assets/certificates/kaggle-python.png.asset.json";
import nvidiaCodeathonAsset from "@/assets/certificates/nvidia-codeathon-appreciation.png.asset.json";
import sqlBasicAsset from "@/assets/sql-basic-cert.png.asset.json";
import tcsCodevitaAsset from "@/assets/certificates/tcs-codevita-season-13.png.asset.json";
import { profile, projects } from "@/data/portfolio";

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  badge: "Currently exploring SAP + AI",
  greeting: "Hi, I'm Kurapati Sai Teja.",
  roles: ["AI/ML Engineer", "Python Developer", "SAP ABAP Backend Developer"],
  intro:
    "I build practical AI applications and explore how Artificial Intelligence can be integrated with SAP backend systems to create intelligent enterprise solutions.",
};

export const about = {
  paragraphs: [
    "I am a Computer Science student specializing in Artificial Intelligence and Machine Learning. I enjoy building practical AI applications, machine learning models, and backend systems.",
    "My projects include a RAG-based question answering system, Zora, a smart AI desktop assistant, and a full-stack sales intelligence system.",
    "I am currently an SAP ABAP Backend Developer certified, focusing on SAP backend development and exploring the integration of SAP with Artificial Intelligence.",
  ],
  card: [
    ["Name", "Kurapati Sai Teja"],
    ["Location", "Nellore, Andhra Pradesh"],
    ["Education", "B.Tech AI and Machine Learning"],
    ["College", "Lendi Institute of Engineering and Technology"],
    ["CGPA", "8.82"],
  ] as [string, string][],
};

export type Featured = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  details: { heading: string; items: string[] }[];
};

export const featuredProjects: Featured[] = [
  {
    title: "RAG-Based Question Answering System",
    description:
      "A Retrieval-Augmented Generation system that answers questions from uploaded documents using document processing, embeddings, and vector search.",
    technologies: ["Python", "LangChain", "Hugging Face", "FAISS"],
    github: "https://github.com/Saitejare/RAG-Based-Question-Answering-System.git",
    image: ragAsset.url,
    details: [
      {
        heading: "Pipeline",
        items: [
          "Documents are loaded and split into readable chunks",
          "Chunks are converted into embeddings",
          "FAISS stores and searches the vectors",
          "Relevant context is retrieved for each question",
          "The language model generates a grounded answer",
        ],
      },
      {
        heading: "What I learned",
        items: [
          "Why retrieval quality decides answer quality",
          "How chunking strategy affects grounding",
          "How to keep responses traceable to source text",
        ],
      },
    ],
  },
  {
    title: "Zora — Smart AI Desktop Assistant",
    description:
      "A voice-controlled desktop AI assistant that generates responses and performs common desktop and web activities.",
    technologies: ["Python", "Speech Recognition", "Groq", "Kokoro TTS"],
    image: zoraAsset.url,
    github: "https://github.com/Saitejare/ZORA_AI_ASSISTENT.",
    details: [
      {
        heading: "Workflow",
        items: [
          "Voice input is captured from the microphone",
          "Speech recognition transcribes the request",
          "The AI layer plans a supported command",
          "Validated automation carries out the action",
          "Text-to-speech reads the response back",
        ],
      },
      {
        heading: "Highlights",
        items: [
          "Desktop and browser automation with permission checks",
          "Conversation context and memory",
          "Packaged as a standalone Windows application",
        ],
      },
    ],
  },
  {
    title: "Advanced Sales Intelligence",
    description:
      "A React and Python sales analysis system with prediction, demand and profit models, recommendations, advisor rules, and stock alerts.",
    technologies: ["React", "Python", "Flask", "Pandas", "Scikit-learn"],
    image: salesAsset.url,
    github: "https://github.com/Saitejare/advanced_sales",
    details: [
      {
        heading: "What it does",
        items: [
          "Sales dashboard with analytics views",
          "Sales, demand, and profit prediction models",
          "Recommendations and advisor views",
          "Stock alerts for inventory attention",
          "Frontend-to-backend API integration",
        ],
      },
      {
        heading: "What I learned",
        items: [
          "Connecting several analytical workflows in one product",
          "Serving trained model results to a client application",
          "Turning predictions into useful business recommendations",
        ],
      },
    ],
  },
];

export const allProjects = projects;

export type JourneyStage = {
  step: string;
  label: string;
  title: string;
  description: string;
  technologies: string[];
  featuredProject?: string;
  interests?: string[];
  badge?: string;
  current?: boolean;
};

export const journeyStages: JourneyStage[] = [
  {
    step: "01",
    label: "C",
    title: "Started with C",
    description:
      "My programming journey started with C, where I learned programming fundamentals and problem-solving skills.",
    technologies: ["C", "Programming Fundamentals"],
  },
  {
    step: "02",
    label: "Python",
    title: "Learning Python",
    description:
      "After C, I started learning Python and used it to build practical applications and explore different areas of software development.",
    technologies: ["Python"],
  },
  {
    step: "03",
    label: "AI Fundamentals",
    title: "Artificial Intelligence Fundamentals",
    description:
      "I started exploring Artificial Intelligence and learning how intelligent systems work.",
    technologies: ["Artificial Intelligence", "Python"],
  },
  {
    step: "04",
    label: "ML",
    title: "Machine Learning",
    description:
      "I learned how to prepare data, train machine learning models, and evaluate their performance.",
    technologies: ["Machine Learning", "Scikit-learn", "NumPy", "Pandas"],
    featuredProject: "Boston House Price Prediction",
  },
  {
    step: "05",
    label: "DL & NN",
    title: "Deep Learning and Neural Networks",
    description:
      "I explored deep learning and neural networks to understand how models learn patterns from data.",
    technologies: ["Deep Learning", "Neural Networks", "TensorFlow"],
  },
  {
    step: "06",
    label: "Gen AI",
    title: "Generative AI and LLMs",
    description:
      "I started exploring Generative AI and Large Language Models to build applications that can understand and generate useful responses.",
    technologies: ["Generative AI", "LLMs", "Hugging Face"],
  },
  {
    step: "07",
    label: "MCP & RAG",
    title: "Exploring MCP and RAG",
    description:
      "I expanded my Generative AI knowledge by learning about MCP and Retrieval-Augmented Generation, and built a RAG-based question answering system that retrieves information from uploaded documents and generates answers.",
    technologies: ["MCP", "RAG", "LangChain", "Hugging Face", "FAISS"],
    featuredProject: "RAG-Based Question Answering System",
  },
  {
    step: "08",
    label: "SAP ABAP",
    title: "SAP ABAP Backend Developer Certified",
    description:
      "After exploring AI technologies, I expanded my backend development journey into SAP ABAP. I completed my SAP ABAP Backend Developer certification and am interested in combining SAP backend development with Artificial Intelligence.",
    technologies: ["SAP ABAP", "SAP Backend Development"],
    badge: "SAP ABAP Backend Developer Certified",
  },
  {
    step: "09",
    label: "SAP + AI",
    title: "SAP + Artificial Intelligence",
    description:
      "My current focus is exploring how SAP backend systems can be integrated with Artificial Intelligence to build intelligent enterprise applications.",
    technologies: ["SAP", "Artificial Intelligence"],
    interests: [
      "SAP ABAP Backend Development",
      "SAP APIs",
      "Generative AI",
      "RAG",
      "AI-powered enterprise applications",
      "SAP and AI integration",
    ],
    badge: "Currently Exploring",
    current: true,
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
  highlight?: boolean;
  badge?: string;
  note?: string;
};

export const skillGroups: SkillGroup[] = [
  { title: "Programming", items: ["Python", "C", "SQL", "Java (Basic)"] },
  {
    title: "AI and Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Natural Language Processing (NLP)",
      "Scikit-learn",
      "TensorFlow",
      "OpenCV",
      "Hugging Face Transformers",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    title: "Generative AI and LLMs",
    items: [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "FAISS",
      "Embeddings",
      "Vector Search",
      "Prompt Engineering",
      "Model Context Protocol (MCP)",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Python Backend Development",
      "Flask",
      "REST APIs",
      "SAP ABAP",
      "SAP Backend Development",
      "ABAP Development Tools (ADT)",
      "Open SQL",
      "CDS Views",
    ],
  },
  {
    title: "SAP Technologies",
    items: [
      "SAP ABAP",
      "SAP ABAP Backend Development",
      "SAP HANA",
      "SAP S/4HANA",
      "SAP ABAP Development Tools (ADT)",
      "Open SQL",
      "CDS Views",
      "SAP Integration with AI",
    ],
    highlight: true,
    badge: "SAP ABAP Backend Developer Certified",
  },
  { title: "Databases", items: ["MySQL", "MongoDB", "Firebase", "SAP HANA"] },
  {
    title: "AI Tools and Automation",
    items: [
      "n8n",
      "Groq",
      "Kokoro TTS",
      "Speech Recognition",
      "AI Voice Assistants",
      "Workflow Automation",
      "LLM API Integration",
    ],
    note: "Exploring AI-powered workflow automation and intelligent enterprise applications.",
  },
  {
    title: "Tools and Deployment",
    items: [
      "Git",
      "GitHub",
      "Google Cloud Platform",
      "Google Colab",
      "VS Code",
      "Jupyter Notebook",
      "Render",
      "Netlify",
      "Vercel",
    ],
  },
];

export const achievementList = [
  "Global Rank 3479 in TCS CodeVita Season 13",
  "4th Rank in India in NVIDIA GPU Accelerated Computing Codeathon",
];

export type CertificationCategory =
  | "AI and Machine Learning"
  | "Generative AI"
  | "Programming"
  | "Data Analysis"
  | "Cloud and Computing"
  | "Competitive Programming";

export type Certification = {
  name: string;
  issuer: string;
  category: CertificationCategory;
  date?: string;
  description?: string;
  credential?: string;
  image?: string;
};

export const certificationCategories = [
  "All",
  "AI and Machine Learning",
  "Generative AI",
  "Programming",
  "Data Analysis",
  "Cloud and Computing",
  "Competitive Programming",
] as const;

export const certificationList: Certification[] = [
  {
    name: "TCS CodeVita Season 13 — Global Rank Certificate",
    issuer: "Tata Consultancy Services (TCS)",
    category: "Competitive Programming",
    description: "Secured Global Rank 3479 in TCS CodeVita Season 13.",
    image: tcsCodevitaAsset.url,
  },
  {
    name: "The MCP Course: Unit 1 — Fundamentals of MCP",
    issuer: "Hugging Face",
    category: "Generative AI",
    date: "June 7, 2025",
    image: huggingFaceMcpAsset.url,
  },
  {
    name: "The LLM Course — Fundamentals of LLMs",
    issuer: "Hugging Face",
    category: "Generative AI",
    date: "May 27, 2025",
    image: huggingFaceLlmAsset.url,
  },
  {
    name: "Introduction to Data Visualization",
    issuer: "Analytics Vidhya",
    category: "Data Analysis",
    date: "April 17, 2025",
    image: analyticsDataVisualizationAsset.url,
  },
  {
    name: "Data Preprocessing on a Real-World Problem Statement",
    issuer: "Analytics Vidhya",
    category: "Data Analysis",
    date: "April 19, 2025",
    image: analyticsDataPreprocessingAsset.url,
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM Developer Skills Network",
    category: "AI and Machine Learning",
    date: "April 14, 2025",
    credential: "Course code: ML0101EN",
    image: ibmMachineLearningAsset.url,
  },
  {
    name: "Pandas",
    issuer: "Kaggle",
    category: "Data Analysis",
    date: "February 14, 2025",
    image: kagglePandasAsset.url,
  },
  {
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    category: "AI and Machine Learning",
    date: "December 25, 2024",
    image: kaggleIntroMachineLearningAsset.url,
  },
  {
    name: "Python",
    issuer: "Kaggle",
    category: "Programming",
    date: "February 14, 2025",
    image: kagglePythonAsset.url,
  },
  {
    name: "Certificate for Appreciation — NVIDIA 10-Day GPU Accelerated Computing Codeathon",
    issuer: "KPR Institute of Engineering and Technology · Department of Artificial Intelligence and Data Science",
    category: "Cloud and Computing",
    date: "October 19–28, 2024",
    description:
      "Secured 4th rank among the top performers in the 10-Day GPU Accelerated Computing and Codeathon (Back to Future: Skills in Accelerated Computing and Code Challenge).",
    image: nvidiaCodeathonAsset.url,
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    category: "Programming",
    date: "November 4, 2025",
    credential: "Certificate ID: E25F6B800F72",
    image: sqlBasicAsset.url,
  },
];

export const contact = {
  heading: "Let's Build Something Intelligent.",
  description:
    "I am interested in Artificial Intelligence, backend development, and SAP-integrated AI applications.",
  email: profile.email,
  phone: "+91 90595 40424",
  github: profile.github,
  linkedin: profile.linkedin,
};
