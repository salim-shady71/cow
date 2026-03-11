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
  day: 5,
  level: "Level 1 — The Data Detective",
  title: "Discover Time Trends and Seasonality",
  subtitle: "Retail businesses often follow strong time patterns. Your task today is to uncover them.",

  objective: "Analyse how sales change over time and identify trends or seasonal patterns in the retail dataset.",

  tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],

  datasetName: "UCI Online Retail Dataset",
  datasetUrl: "https://archive.ics.uci.edu/ml/datasets/online+retail",

  steps: [
    "Ensure the InvoiceDate column is converted into a datetime format.",
    "Create new columns for Month and Year from the date field.",
    "Calculate total sales per month using the transaction value column created earlier.",
    "Plot a chart showing sales over time.",
    "Look for patterns such as peaks or dips in certain months.",
    "Identify whether the dataset shows any seasonal behaviour.",
    "Write a short explanation of what the time trend suggests about the business."
  ],

  expectedOutput: [
    "A notebook section analysing sales over time",
    "Monthly sales aggregation table",
    "A line chart showing sales trends over time",
    "Written explanation of any patterns or seasonality discovered"
  ],

  hint: "Retail businesses often see strong spikes around holidays or specific seasons. Look carefully at the monthly trend.",

  professorTip: "Time analysis is extremely powerful in business analytics. Trends and seasonality help companies plan inventory, staffing, and marketing.",

  reflection: "If you were managing this retail company, how would the sales trends influence inventory or marketing decisions?",

  xpReward: 50,

  message: "You have now cleaned the data and started understanding products and customers. Today you look at something very important in retail — time. Businesses often rise and fall with seasons, holidays, and buying patterns. Today you are trying to see whether the data reveals those rhythms.",

  checkpoint: "Once you understand time patterns, you are much closer to understanding how the business actually operates.",

  reward: "Reward unlocked: You choose the dessert the next time we eat out."
};
