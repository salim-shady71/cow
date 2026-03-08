
const STORAGE_KEY = "shreya_analytics_quest_progress_v1";
const els = {
  playerName: document.getElementById("playerName"),
  currentLevelLabel: document.getElementById("currentLevelLabel"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  xpValue: document.getElementById("xpValue"),
  rewardsValue: document.getElementById("rewardsValue"),
  globalTip: document.getElementById("globalTip"),
  dashboardGreeting: document.getElementById("dashboardGreeting"),
  dashboardSummary: document.getElementById("dashboardSummary"),
  heroDay: document.getElementById("heroDay"),
  heroRewardState: document.getElementById("heroRewardState"),
  heroXp: document.getElementById("heroXp"),
  dailyMessage: document.getElementById("dailyMessage"),
  checkpointText: document.getElementById("checkpointText"),
  rewardPreview: document.getElementById("rewardPreview"),
  rewardTag: document.getElementById("rewardTag"),
  openRewardBtn: document.getElementById("openRewardBtn"),
  todayTitle: document.getElementById("todayTitle"),
  todayLevelTag: document.getElementById("todayLevelTag"),
  todayMissionSubtitle: document.getElementById("todayMissionSubtitle"),
  todayObjective: document.getElementById("todayObjective"),
  toolsList: document.getElementById("toolsList"),
  datasetText: document.getElementById("datasetText"),
  datasetLink: document.getElementById("datasetLink"),
  xpText: document.getElementById("xpText"),
  stepsList: document.getElementById("stepsList"),
  outputList: document.getElementById("outputList"),
  hintText: document.getElementById("hintText"),
  todayTip: document.getElementById("todayTip"),
  reflectionText: document.getElementById("reflectionText"),
  completeQuestBtn: document.getElementById("completeQuestBtn"),
  goRewardBtn: document.getElementById("goRewardBtn"),
  toggleHintBtn: document.getElementById("toggleHintBtn"),
  levelMap: document.getElementById("levelMap"),
  achievementGrid: document.getElementById("achievementGrid"),
  projectsGrid: document.getElementById("projectsGrid"),
  toast: document.getElementById("toast"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
};

function getDefaultState(){ return { completedDays: [], openedRewards: [], xp: 0 }; }
function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    return { completedDays: parsed.completedDays || [], openedRewards: parsed.openedRewards || [], xp: Number(parsed.xp || 0) };
  }catch{ return getDefaultState(); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
let state = loadState();

function currentLevelName(day){
  const found = LEVELS.find(level => level.days.includes(day));
  return found ? found.name : "Quest";
}
function renderTopSummary(){
  const totalCompleted = state.completedDays.length;
  const progressPct = (totalCompleted / QUEST_CONFIG.totalDays) * 100;
  els.playerName.textContent = QUEST_CONFIG.playerName;
  els.currentLevelLabel.textContent = currentLevelName(CURRENT_DAY.day);
  els.progressText.textContent = `${totalCompleted} / ${QUEST_CONFIG.totalDays}`;
  els.progressFill.style.width = `${progressPct}%`;
  els.xpValue.textContent = state.xp;
  els.rewardsValue.textContent = state.openedRewards.length;
  els.globalTip.textContent = QUEST_CONFIG.globalTip;
  els.dashboardGreeting.textContent = `Welcome back, ${QUEST_CONFIG.playerName}.`;
  els.dashboardSummary.textContent = `Today’s mission continues your journey through ${CURRENT_DAY.level}. Every finished task unlocks XP, progress, and a reward chest chosen by your quest master.`;
  els.heroDay.textContent = `Day ${CURRENT_DAY.day}`;
  els.heroXp.textContent = `+${CURRENT_DAY.xpReward} XP`;
  const isDone = state.completedDays.includes(CURRENT_DAY.day);
  const rewardOpened = state.openedRewards.includes(CURRENT_DAY.day);
  els.heroRewardState.textContent = rewardOpened ? "Opened" : isDone ? "Unlocked" : "Locked";
  els.dailyMessage.textContent = CURRENT_DAY.message;
  els.checkpointText.textContent = CURRENT_DAY.checkpoint;
}
function renderToday(){
  els.todayTitle.textContent = `Day ${CURRENT_DAY.day} — ${CURRENT_DAY.title}`;
  els.todayLevelTag.textContent = CURRENT_DAY.level;
  els.todayMissionSubtitle.textContent = CURRENT_DAY.subtitle;
  els.todayObjective.textContent = CURRENT_DAY.objective;
  els.datasetText.textContent = CURRENT_DAY.datasetName;
  els.datasetLink.href = CURRENT_DAY.datasetUrl;
  els.datasetLink.textContent = CURRENT_DAY.datasetUrl;
  els.xpText.textContent = `${CURRENT_DAY.xpReward} XP`;
  els.toolsList.innerHTML = ""; CURRENT_DAY.tools.forEach(t => { const li=document.createElement("li"); li.textContent=t; els.toolsList.appendChild(li); });
  els.stepsList.innerHTML = ""; CURRENT_DAY.steps.forEach(s => { const li=document.createElement("li"); li.textContent=s; els.stepsList.appendChild(li); });
  els.outputList.innerHTML = ""; CURRENT_DAY.expectedOutput.forEach(o => { const li=document.createElement("li"); li.textContent=o; els.outputList.appendChild(li); });
  els.hintText.textContent = CURRENT_DAY.hint;
  els.todayTip.textContent = CURRENT_DAY.professorTip;
  els.reflectionText.textContent = CURRENT_DAY.reflection;
  const isDone = state.completedDays.includes(CURRENT_DAY.day);
  const rewardOpened = state.openedRewards.includes(CURRENT_DAY.day);
  els.completeQuestBtn.disabled = isDone;
  els.completeQuestBtn.textContent = isDone ? "Quest Completed ✨" : "Complete Today’s Quest";
  els.goRewardBtn.disabled = !isDone;
  els.openRewardBtn.disabled = !isDone || rewardOpened;
  if(rewardOpened){
    els.rewardPreview.textContent = CURRENT_DAY.reward; els.rewardTag.textContent = "Opened"; els.openRewardBtn.textContent = "Reward Already Opened";
  }else if(isDone){
    els.rewardPreview.textContent = "Your reward chest is ready. Open it when you are ready ✨"; els.rewardTag.textContent = "Unlocked"; els.openRewardBtn.textContent = "Open Reward Chest";
  }else{
    els.rewardPreview.textContent = "Complete today’s quest to unlock the mystery reward."; els.rewardTag.textContent = "Locked"; els.openRewardBtn.textContent = "Open Reward Chest";
  }
}
function renderMap(){
  els.levelMap.innerHTML = "";
  LEVELS.forEach(level => {
    const card = document.createElement("div"); card.className = "level-card";
    const head = document.createElement("div"); head.className = "level-head"; head.innerHTML = `<h3>${level.name}</h3><span class="tag">${level.project}</span>`; card.appendChild(head);
    const dayNodes = document.createElement("div"); dayNodes.className = "day-nodes";
    level.days.forEach(day => {
      const btn = document.createElement("button"); btn.className = "day-node"; btn.textContent = `Day ${day}`;
      if(state.completedDays.includes(day)) btn.classList.add("done");
      else if(day === CURRENT_DAY.day) btn.classList.add("current");
      else btn.classList.add("locked");
      if(day === CURRENT_DAY.day) btn.addEventListener("click", () => switchView("today")); else btn.disabled = true;
      dayNodes.appendChild(btn);
    });
    card.appendChild(dayNodes); els.levelMap.appendChild(card);
  });
}
function renderAchievements(){
  els.achievementGrid.innerHTML = "";
  ACHIEVEMENTS.forEach(a => {
    const unlocked = state.completedDays.length >= a.unlockAtCompletedDays;
    const card = document.createElement("div");
    card.className = `achievement-card ${unlocked ? "" : "locked"}`;
    card.innerHTML = `<div class="achievement-icon">${a.icon}</div><h3>${a.title}</h3><p>${a.description}</p><span class="tag">${unlocked ? "Unlocked" : `Unlocks at ${a.unlockAtCompletedDays} days`}</span>`;
    els.achievementGrid.appendChild(card);
  });
}
function renderProjects(){
  els.projectsGrid.innerHTML = "";
  PROJECTS.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    const list = project.deliverables.map(i => `<li>${i}</li>`).join("");
    card.innerHTML = `<h3>${project.title}</h3><p><strong>Focus:</strong> ${project.focus}</p><p><strong>Dataset:</strong> ${project.dataset}</p><p><strong>Deliverables:</strong></p><ul>${list}</ul>`;
    els.projectsGrid.appendChild(card);
  });
}
function switchView(view){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const viewMap = { dashboard:"dashboardView", today:"todayView", map:"mapView", achievements:"achievementsView", projects:"projectsView", howto:"howtoView" };
  document.getElementById(viewMap[view]).classList.add("active");
  document.querySelector(`.nav-btn[data-view="${view}"]`).classList.add("active");
}
function showToast(message){
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => els.toast.classList.remove("show"), 2600);
}
function completeQuest(){
  if(state.completedDays.includes(CURRENT_DAY.day)) return;
  state.completedDays.push(CURRENT_DAY.day);
  state.xp += CURRENT_DAY.xpReward;
  saveState(); renderAll(); showToast(`Quest complete! +${CURRENT_DAY.xpReward} XP earned ✨`);
}
function openReward(){
  if(!state.completedDays.includes(CURRENT_DAY.day)) return;
  if(state.openedRewards.includes(CURRENT_DAY.day)) return;
  state.openedRewards.push(CURRENT_DAY.day);
  saveState(); renderAll(); showToast("Reward chest opened 🎁");
}
function renderAll(){ renderTopSummary(); renderToday(); renderMap(); renderAchievements(); renderProjects(); }

document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));
els.toggleHintBtn.addEventListener("click", () => { els.hintText.classList.toggle("show"); els.toggleHintBtn.textContent = els.hintText.classList.contains("show") ? "Hide Hint" : "Show Hint"; });
els.completeQuestBtn.addEventListener("click", completeQuest);
els.openRewardBtn.addEventListener("click", openReward);
els.goRewardBtn.addEventListener("click", () => switchView("dashboard"));
els.resetProgressBtn.addEventListener("click", () => {
  if(confirm("Reset all locally saved progress for this browser?")){
    state = getDefaultState(); saveState(); renderAll(); switchView("dashboard"); showToast("Local progress reset.");
  }
});
renderAll();
