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
  day: 4,
  level: "Level 1 — The Data Detective",
  title: "Explore the Business Story in the Data",
  subtitle: "Now that the dataset is clean, it is time to uncover the first real patterns and insights.",

  objective: "Use exploratory data analysis to understand product sales, order behaviour, and customer activity in the retail dataset.",

  tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],

  datasetName: "UCI Online Retail Dataset",
  datasetUrl: "https://archive.ics.uci.edu/ml/datasets/online+retail",

  steps: [
    "Load your cleaned dataset into the notebook.",
    "Create a new column for total transaction value using Quantity × UnitPrice.",
    "Find the top-selling products by quantity.",
    "Find the highest-revenue products by total value.",
    "Look at which countries generate the most revenue.",
    "Plot at least three charts that help explain the business story in the data.",
    "Write down three interesting observations from your analysis."
  ],

  expectedOutput: [
    "A notebook section for exploratory data analysis",
    "A transaction value column added to the dataset",
    "Tables showing top products and top countries",
    "At least three charts with short written interpretations",
    "Three business observations based on the data"
  ],

  hint: "Do not just make charts. Ask what each chart tells a manager about sales, products, or customers.",

  professorTip: "Exploratory analysis is where data starts becoming a story. The strongest analysts do not just describe charts — they explain why they matter.",

  reflection: "Which finding today would be most useful to a retail manager trying to improve stock planning or sales strategy?",

  xpReward: 50,

  message: "Today is where things start getting more fun. You are no longer just inspecting or cleaning the data — you are beginning to actually understand the business through it. This is the part where analysts start to feel the data come alive a little. Take your time with the charts and try to notice the small things.",

  checkpoint: "Today is about discovery. By the end of this quest, the dataset should start feeling less like random rows and more like a business story.",

  reward: "Reward unlocked: Visit room to collect your reward ASAP!"
};
