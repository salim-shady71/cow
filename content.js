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
  day: 3,
  level: "Level 1 — The Data Detective",
  title: "Clean the Dataset",
  subtitle: "Real-world data is messy. Before analysis, it must be cleaned and prepared.",

  objective: "Identify issues in the retail dataset and clean the data so that it is ready for analysis.",

  tools: ["Python", "Pandas", "Jupyter Notebook"],

  datasetName: "UCI Online Retail Dataset",
  datasetUrl: "https://archive.ics.uci.edu/ml/datasets/online+retail",

  steps: [
    "Load the dataset again in your notebook.",
    "Check for missing values using df.isnull().sum().",
    "Identify rows where important fields are missing.",
    "Look for negative quantities or strange values.",
    "Remove cancelled transactions if necessary (Invoice numbers starting with 'C').",
    "Create a cleaned dataframe that removes invalid records.",
    "Verify the dataset again using df.describe() and df.info()."
  ],

  expectedOutput: [
    "A cleaned dataframe without invalid rows",
    "A notebook section explaining what cleaning steps were applied",
    "Code cells showing how missing or incorrect values were handled",
    "A dataset ready for exploratory analysis"
  ],

  hint: "Retail datasets often contain cancelled orders and negative quantities. Look carefully for those patterns.",

  professorTip: "Data cleaning often takes more time than modelling. Good analysts document their cleaning steps clearly.",

  reflection: "What types of problems did you find in the dataset? How might these errors affect business analysis if left untreated?",

  xpReward: 50,

  message: "You have now looked at the data and started understanding it. Today you do something every analyst must do — cleaning the data. This is not the glamorous part of analytics, but it is one of the most important parts. A model built on messy data is useless. Be patient with the process today.",

  checkpoint: "Once the dataset is clean, the real analysis becomes much easier.",

  reward: "Reward unlocked: ONE SEXY ICECREAM ON ME!!!!"
};
