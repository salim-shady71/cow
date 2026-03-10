const QUEST_CONFIG = {
  playerName: "Shreya",
  totalDays: 30,
  globalTip: "U are the most capable person I know, I know rn it sounds like oh he is just saying that because he is dating me, but that is not it. I see something in u and its beautiful,just like who u are as a person. Lets nurture that and grow it together"
};

const LEVELS = [
  { id: 1, name: "Level 1 — The Data Detective", days: [1,2,3,4,5,6], project: "Retail Demand & Seasonality Analysis" },
  { id: 2, name: "Level 2 — Customer Intelligence", days: [7,8,9,10,11,12], project: "Customer Segmentation Using Machine Learning" },
  { id: 3, name: "Level 3 — Predictive Intelligence", days: [13,14,15,16,17,18], project: "Customer Churn Prediction" },
  { id: 4, name: "Level 4 — Strategy Architect", days: [19,20,21,22,23,24], project: "UK to UAE Market Expansion Decision Model" },
  { id: 5, name: "Level 5 — Portfolio Champion", days: [25,26,27,28,29,30], project: "Professional Analytics Portfolio Build" }
];

const PROJECTS = [
  { title: "Retail Demand & Seasonality Analysis", focus: "EDA, cleaning, decomposition, business insight", deliverables: ["Notebook","Charts","README with findings"], dataset: "UCI Online Retail / Walmart sales style retail data" },
  { title: "Customer Segmentation", focus: "K-Means, hierarchical clustering, PCA, personas", deliverables: ["Cluster visuals","Customer personas","Marketing recommendations"], dataset: "Mall customers or retail-derived RFM dataset" },
  { title: "Customer Churn Prediction", focus: "Logistic Regression, Random Forest, XGBoost, model comparison", deliverables: ["Model comparison notebook","Evaluation metrics","Business retention recommendations"], dataset: "IBM Telco Churn" },
  { title: "Market Expansion Decision Model", focus: "Decision analytics, forecasting, strategic recommendation", deliverables: ["Notebook","Strategy summary","Decision framework"], dataset: "World Bank indicators + UAE market inputs" },
  { title: "Portfolio Champion", focus: "GitHub curation, storytelling, employability presentation", deliverables: ["Pinned repos","Strong READMEs","Interview project summaries"], dataset: "All previous projects" }
];

const ACHIEVEMENTS = [
  { id: "first-quest", icon: "🌱", title: "Quest Starter", description: "Complete your first mission.", unlockAtCompletedDays: 1 },
  { id: "data-explorer", icon: "📊", title: "Data Explorer", description: "Complete 5 missions and start seeing patterns.", unlockAtCompletedDays: 5 },
  { id: "insight-seeker", icon: "🧠", title: "Insight Seeker", description: "Complete 10 missions.", unlockAtCompletedDays: 10 },
  { id: "prediction-mage", icon: "🤖", title: "Prediction Mage", description: "Complete 15 missions and enter modelling mode.", unlockAtCompletedDays: 15 },
  { id: "strategy-architect", icon: "🏛️", title: "Strategy Architect", description: "Complete 22 missions and step into decision analytics.", unlockAtCompletedDays: 22 },
  { id: "analytics-champion", icon: "🏆", title: "Analytics Champion", description: "Complete all 30 missions.", unlockAtCompletedDays: 30 }
];

// EDIT THIS OBJECT DAILY
const CURRENT_DAY = {
  day: 2,
  level: "Level 1 — The Data Detective",
  title: "Explore the Dataset",
  subtitle: "Before analysing anything, you must understand what the data actually contains.",
  objective: "Load the retail dataset into Python and explore its structure, variables, and basic statistics to understand what information is available.",

  tools: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],

  datasetName: "UCI Online Retail Dataset",
  datasetUrl: "https://archive.ics.uci.edu/ml/datasets/online+retail",

  steps: [
    "Download the dataset and load it into a Jupyter Notebook using Pandas.",
    "Use df.head() to inspect the first few rows.",
    "Use df.info() to understand the columns and data types.",
    "Use df.describe() to see basic statistics of numerical variables.",
    "Identify which columns are categorical vs numerical.",
    "Write down what each column likely represents in a retail business context."
  ],

  expectedOutput: [
    "A notebook where the dataset is successfully loaded",
    "Basic dataset inspection outputs (head, info, describe)",
    "A short description of each column",
    "A brief note explaining what the dataset appears to represent"
  ],

  hint: "Good analysts always explore the dataset before cleaning or modelling. Look carefully at column names and data types.",

  professorTip: "Understanding the structure of a dataset often reveals problems before they become bugs later in the project.",

  reflection: "If you were presenting this dataset to a business manager, how would you explain what information it contains?",

  xpReward: 50,

  message: "Day 2 already. Yesterday you understood the problem — today you meet the data. Data can look messy or confusing at first, but that is normal. Every analyst has the same moment of opening a dataset and thinking 'what on earth is going on here'. The fun part is slowly making sense of it. Just explore today, no pressure to solve everything.",

  checkpoint: "Today is about curiosity. Just explore and understand the dataset.",

  reward: "Reward unlocked: You now get to choose the movie for our next movie night."
};
