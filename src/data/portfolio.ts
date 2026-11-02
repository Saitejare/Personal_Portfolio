import zoraImage from "@/assets/zora-interface.png";
import bostonImage from "@/assets/boston-house-ml.jpg";
import tradingImage from "@/assets/trading-bot.jpg";
import libraryImage from "@/assets/library-system.jpg";
import cropImage from "@/assets/crop-ai.jpg";
import medicalImage from "@/assets/medical-ml.jpg";
import salesImage from "@/assets/sales-intelligence.jpg";

export const profile = {
  name: "Kurapati Sai Teja Reddy",
  initials: "KS",
  title: "AI & Machine Learning Student · Python Developer",
  intro:
    "I build practical AI applications with Python, machine learning, and thoughtful data pipelines.",
  location: "Nellore, Andhra Pradesh",
  status: "Open to opportunities",
  email: "saitejareddy9908@gmail.com",
  phone: "+91 90595 40424",
  github: "https://github.com/Saitejare",
  linkedin: "https://www.linkedin.com/in/kurapati-saiteja-reddy/",
};

export const skills = [
  { category: "Programming", items: ["Python", "C", "SQL", "Java (Basic)"] },
  {
    category: "AI & Machine Learning",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "OpenCV",
      "Hugging Face Transformers",
      "Feature Engineering",
      "Model Training",
    ],
  },
  { category: "Backend", items: ["Flask", "FastAPI", "REST APIs"] },
  { category: "Data Analysis", items: ["NumPy", "Pandas", "Matplotlib"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "Firebase", "SQLite"] },
  {
    category: "Cloud & Tools",
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
] as const;

export type ProjectCategory = "AI" | "Machine Learning" | "Full Stack" | "Backend" | "Other";
export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  summary: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  problem: string;
  overview: string;
  features: string[];
  architecture: string[];
  challenges: string[];
  solutions: string[];
  results: string;
  setup: string[];
  future: string[];
};

export const projects: Project[] = [
  {
    slug: "zora-ai-assistant",
    title: "Zora AI Assistant",
    shortTitle: "Zora",
    category: "AI",
    summary:
      "A Windows voice assistant that connects speech, AI planning, desktop automation, browser actions, memory, and spoken responses.",
    image: zoraImage,
    technologies: ["Python", "FastAPI", "LangGraph", "Groq", "React", "Electron"],
    github: "https://github.com/Saitejare/ZORA_AI_ASSISTENT.",
    demo: "",
    problem:
      "Move beyond text-only AI by creating a voice-first assistant that can understand requests and safely carry out supported computer actions.",
    overview:
      "Zora combines a Python AI backend with a React and Electron desktop interface. Its pipeline covers microphone input, transcription, command planning, validated execution, memory, and text-to-speech.",
    features: [
      "Voice interaction and speech recognition",
      "LLM-based request understanding and command planning",
      "Desktop and supported browser automation",
      "Conversation context and memory",
      "Standalone Windows application packaging",
    ],
    architecture: [
      "React and Electron capture the interaction",
      "FastAPI coordinates backend services",
      "Faster-Whisper transcribes speech",
      "LangGraph and Groq plan supported commands",
      "Validated tools execute actions",
      "Edge TTS speaks the response",
    ],
    challenges: [
      "Connecting the desktop interface to a managed Python process",
      "Turning natural language into structured commands",
      "Handling microphone readiness and application startup",
      "Packaging frontend and backend into a Windows installer",
    ],
    solutions: [
      "Separated speech, agent, memory, automation, and interface concerns",
      "Added health and readiness checks",
      "Applied command validation, permission checks, and confirmation for sensitive actions",
      "Used Electron Builder and PyInstaller for distribution",
    ],
    results:
      "The repository documents a working end-to-end desktop application with voice input, AI planning, supported automation, conversation context, spoken output, and Windows packaging.",
    setup: [
      "Follow the repository README prerequisites",
      "Configure the required API key in the environment",
      "Install Python and frontend dependencies",
      "Start the development application or build the Windows installer",
    ],
    future: [
      "More capable multi-step tasks",
      "Broader browser and desktop support",
      "Improved long-term memory",
      "Faster, more natural voice interaction",
    ],
  },
  {
    slug: "boston-house-price-prediction",
    title: "Boston House Price Prediction",
    shortTitle: "House Price ML",
    category: "Machine Learning",
    summary:
      "A Flask web application that uses a Gradient Boosting Regressor to estimate Boston house prices from thirteen housing attributes.",
    image: bostonImage,
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "JavaScript"],
    github: "https://github.com/Saitejare/Boston_house_price_prediction",
    demo: "https://boston-house-price-prediction-sepia.vercel.app",
    problem:
      "Turn structured housing attributes into an accessible, real-time price estimate through a complete machine-learning workflow.",
    overview:
      "The project covers preprocessing, exploratory analysis, model training and evaluation, Pickle serialization, Flask deployment, and a responsive prediction interface.",
    features: [
      "Thirteen housing inputs",
      "Gradient Boosting regression",
      "Real-time Flask predictions",
      "Responsive web interface",
      "Serialized model inference",
    ],
    architecture: [
      "Load and clean the Boston housing dataset",
      "Explore and select features",
      "Train and evaluate the regressor",
      "Serialize the final model",
      "Serve predictions through Flask",
      "Render results in the browser",
    ],
    challenges: [
      "Preparing data consistently for training and inference",
      "Connecting model output to a usable interface",
      "Keeping prediction requests responsive",
    ],
    solutions: [
      "Built a repeatable preprocessing workflow",
      "Stored the trained model for inference",
      "Connected the Flask endpoint to a responsive JavaScript interface",
    ],
    results:
      "Delivered a deployed web application that accepts property details and returns model-generated price estimates.",
    setup: [
      "Clone the repository",
      "Install packages from requirements.txt",
      "Run the Flask application",
      "Open the local address shown by Flask",
    ],
    future: [
      "Add prediction history",
      "Compare more regression algorithms",
      "Add richer visualization and reporting",
    ],
  },
  {
    slug: "trading-bot",
    title: "Binance Futures Trading Bot",
    shortTitle: "Trading Bot",
    category: "Backend",
    summary:
      "A Python command-line trading workflow for Binance Futures Testnet with guided order entry, validation, SQLite records, and activity logs.",
    image: tradingImage,
    technologies: ["Python", "Binance API", "SQLite", "CLI"],
    github: "https://github.com/Saitejare/Trading-Bot",
    demo: "",
    problem:
      "Provide a structured way to practise futures order execution without placing real-capital trades.",
    overview:
      "A conversational command-line application that targets Binance's USDT-M testnet and records operations in both SQLite and a log file.",
    features: [
      "Guided market and limit order flow",
      "Binance Futures Testnet execution",
      "Input and order validation",
      "SQLite transaction ledger",
      "Activity logging",
    ],
    architecture: [
      "Collect and validate order details",
      "Send the request to Binance Testnet",
      "Record the response in SQLite",
      "Append execution events to the activity log",
      "Display the outcome in the terminal",
    ],
    challenges: [
      "Validating quantities and order constraints",
      "Keeping an auditable local record",
      "Handling exchange responses safely",
    ],
    solutions: [
      "Restricted execution to the testnet",
      "Separated configuration into environment variables",
      "Persisted orders and logs for review",
    ],
    results:
      "Built a testnet-only trading workflow supporting guided order placement and local transaction history.",
    setup: [
      "Install the repository dependencies",
      "Create the environment file from the included example",
      "Add Binance Futures Testnet credentials",
      "Run the command-line entry point",
    ],
    future: [
      "Expand validation and recovery flows",
      "Add strategy simulation",
      "Create clearer performance reporting",
    ],
  },
  {
    slug: "library-management-system",
    title: "Library Management System API",
    shortTitle: "Library API",
    category: "Backend",
    summary:
      "A role-aware Node.js API for books, members, borrowing, returns, fines, search, and secure authentication.",
    image: libraryImage,
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Joi"],
    github: "https://github.com/Saitejare/library-management-system",
    demo: "",
    problem:
      "Organize library inventory and lending operations while keeping member and librarian permissions distinct.",
    overview:
      "The backend exposes authenticated APIs for books, profiles, members, borrowing, returns, and history, with reusable validation and security middleware.",
    features: [
      "JWT authentication",
      "Member and librarian roles",
      "Book CRUD, search, filtering, pagination, and sorting",
      "Borrow and return workflows with fine calculation",
      "Helmet, CORS, compression, and rate limiting",
    ],
    architecture: [
      "Express routes receive requests",
      "Joi validates payloads",
      "Authentication and role middleware enforce access",
      "Controllers apply business rules",
      "Mongoose models persist users, books, and borrows",
    ],
    challenges: [
      "Keeping role permissions explicit",
      "Coordinating book availability with borrow records",
      "Applying consistent validation and error responses",
    ],
    solutions: [
      "Used dedicated middleware for authentication and roles",
      "Separated controllers, models, routes, and validators",
      "Added query-building utilities for book discovery",
    ],
    results:
      "Implemented a documented REST API covering the core library and circulation workflows.",
    setup: [
      "Install Node.js dependencies",
      "Configure the environment variables shown in the repository",
      "Start MongoDB",
      "Run the development or production server",
    ],
    future: ["Add a client interface", "Expand audit reporting", "Add automated integration tests"],
  },
  {
    slug: "crop-disease-prediction",
    title: "Crop Disease Prediction",
    shortTitle: "Crop Disease",
    category: "Machine Learning",
    summary:
      "A Jupyter-based machine-learning workflow for crop disease prediction, from data preparation through model evaluation and visualization.",
    image: cropImage,
    technologies: ["Python", "Jupyter", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/Saitejare/Crop_disease_prediction",
    demo: "",
    problem:
      "Explore how prepared agricultural data can support a machine-learning disease prediction workflow.",
    overview:
      "The notebook covers data loading, preprocessing, exploratory analysis, model training, evaluation, prediction, and result visualization.",
    features: [
      "Data loading and preprocessing",
      "Exploratory data analysis",
      "Model training and evaluation",
      "Disease prediction",
      "Result visualization",
    ],
    architecture: [
      "Load the project data",
      "Prepare features",
      "Explore patterns",
      "Train the model",
      "Evaluate and visualize predictions",
    ],
    challenges: [
      "Preparing data for modeling",
      "Comparing model behaviour",
      "Communicating results visually",
    ],
    solutions: [
      "Kept the workflow reproducible in a notebook",
      "Used standard data-science libraries",
      "Organized analysis and prediction steps sequentially",
    ],
    results:
      "Created an educational machine-learning notebook for experimenting with crop disease prediction.",
    setup: [
      "Install the listed Python data-science packages",
      "Open the notebook in Jupyter or VS Code",
      "Run the cells in sequence",
    ],
    future: [
      "Test additional models",
      "Expand evaluation",
      "Package the workflow into an application",
    ],
  },
  {
    slug: "breast-cancer-prediction",
    title: "Breast Cancer Prediction",
    shortTitle: "Cancer Prediction",
    category: "Machine Learning",
    summary:
      "A machine-learning notebook for exploring, preparing, modeling, and evaluating breast cancer detection data.",
    image: medicalImage,
    technologies: ["Python", "Jupyter", "Pandas", "Scikit-learn", "Seaborn"],
    github: "https://github.com/Saitejare/Brest_cancer_prediction",
    demo: "",
    problem:
      "Study predictive modeling methods for breast cancer detection through a transparent, reproducible notebook workflow.",
    overview:
      "The repository focuses on exploratory analysis, preprocessing, model training, comparison, evaluation, and visualization for educational use.",
    features: [
      "Data preprocessing",
      "Exploratory data analysis",
      "Model training",
      "Model comparison",
      "Evaluation visualizations",
    ],
    architecture: [
      "Load the dataset",
      "Explore and preprocess features",
      "Train candidate models",
      "Compare evaluation results",
      "Visualize findings",
    ],
    challenges: [
      "Preparing diagnostic features",
      "Comparing classifiers consistently",
      "Presenting model results responsibly",
    ],
    solutions: [
      "Used a step-by-step notebook workflow",
      "Applied standard Scikit-learn evaluation techniques",
      "Kept the project scoped to education and research",
    ],
    results:
      "Built a reproducible notebook for studying breast cancer detection models and their evaluation.",
    setup: [
      "Install Python, Jupyter, and the listed data-science libraries",
      "Open breast_cancer_detection.ipynb",
      "Execute the notebook cells in order",
    ],
    future: [
      "Strengthen comparative evaluation",
      "Add clearer interpretability analysis",
      "Document dataset limitations",
    ],
  },
  {
    slug: "advanced-sales-intelligence",
    title: "Advanced Sales Intelligence",
    shortTitle: "Sales Intelligence",
    category: "Full Stack",
    summary:
      "A React and Python sales analysis system with prediction, demand and profit models, recommendations, advisor rules, and stock alerts.",
    image: salesImage,
    technologies: ["React", "Python", "Flask", "Pandas", "Scikit-learn"],
    github: "https://github.com/Saitejare/advanced_sales",
    demo: "",
    problem:
      "Turn sales records and predictive models into practical views for analysis, forecasting, recommendations, and inventory attention.",
    overview:
      "The repository combines a React interface with a Python backend, trained sales, demand, and profit models, engineered data, and rule-based advice.",
    features: [
      "Sales dashboard",
      "Sales, demand, and profit prediction",
      "Recommendations and advisor views",
      "Stock alerts",
      "Frontend-to-backend API integration",
    ],
    architecture: [
      "React presents dashboard and prediction workflows",
      "A service layer calls the backend",
      "Python prepares engineered data",
      "Serialized models produce forecasts",
      "Rules generate recommendations and alerts",
    ],
    challenges: [
      "Connecting several analytical workflows",
      "Serving model results to a client application",
      "Turning predictions into useful recommendations",
    ],
    solutions: [
      "Separated dashboard, prediction, recommendation, advisor, and stock-alert views",
      "Maintained dedicated backend model artifacts",
      "Used a shared frontend API service",
    ],
    results:
      "Created a full-stack sales intelligence prototype spanning analytics, predictions, recommendations, and inventory signals.",
    setup: [
      "Follow the frontend and backend dependency files in the repository",
      "Start the Python backend",
      "Start the React interface",
      "Load the included sample sales data where required",
    ],
    future: [
      "Improve deployment packaging",
      "Add model monitoring",
      "Expand business-facing reporting",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "Lendi Institute of Engineering and Technology, Vizianagaram",
    dates: "2023 — Present",
    details: "CGPA: 8.82",
  },
  {
    degree: "Higher Secondary School",
    institution: "Narayana Junior College, Nellore",
    dates: "2021 — 2023",
    details: "92.1%",
  },
  {
    degree: "Secondary School",
    institution: "Narayana High School, Buchireddypalem, Nellore District",
    dates: "2020 — 2021",
    details: "100%",
  },
];

export const achievements = [
  "97th globally in IEEE Xtreme 18.0, a 24-hour international coding competition.",
  "Global Rank 3479 in TCS CodeVita Season 13.",
  "4th rank in India in NVIDIA’s 10-Day GPU Accelerated Computing Codeathon.",
  "Selected for the internal Smart India Hackathon and served as Team Lead.",
];
