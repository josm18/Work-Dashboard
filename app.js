const initialData = {
  weekPlan: {
    '2026-07-27': {morning:'urban', afternoon:'stats'},
    '2026-07-28': {morning:'river', afternoon:'writing'},
    '2026-07-29': {morning:'stats', afternoon:'urban'},
    '2026-07-30': {morning:'writing', afternoon:'sleep'},
    '2026-07-31': {morning:'sleep', afternoon:'river'}
  },
  workspaces: [
    { id:'urban', name:'Urban Heat Mapping', kind:'project', status:'active', accent:'#799b7c', accentInk:'#406044', health:'On track', healthTone:'green', goal:'Mapping neighbourhood-level heat exposure patterns.', deadline:'2026-08-14', phase:'Data analysis', collaborators:'M. Chen · S. Patel', tasks:[{id:'u1',title:'Review sensor data gaps',done:false,due:'Today',focus:true},{id:'u2',title:'Clean July field readings',done:true,due:'24 Jul',focus:false},{id:'u3',title:'Draft methods figure',done:false,due:'30 Jul',focus:false},{id:'u4',title:'Confirm model assumptions',done:true,due:'22 Jul',focus:false},{id:'u5',title:'Prepare supervisor update',done:false,due:'1 Aug',focus:false}], notes:[{id:'un1',title:'Fieldwork log — 24 July',date:'24 JUL 2026',body:'Two sensors from the western route report intermittent readings after 14:00. Cross-check their placement against the shaded street segment before excluding observations.'},{id:'un2',title:'Methods decisions',date:'21 JUL 2026',body:'Use daily maximum apparent temperature as the primary comparison measure. Keep the raw air-temperature plot in the appendix.'}], resources:[{title:'Study protocol',meta:'Google Drive document',url:'#'},{title:'Sensor data directory',meta:'External data folder',url:'#'}], dates:[{date:'2026-07-30',title:'Methods figure draft',type:'Milestone'},{date:'2026-08-14',title:'Supervisor progress review',type:'Deadline'}] },
    { id:'river', name:'River Microplastics', kind:'project', status:'active', accent:'#7697aa', accentInk:'#416576', health:'Needs attention', healthTone:'amber', goal:'Assessing microplastic concentrations along the river corridor.', deadline:'2026-08-03', phase:'Literature review', collaborators:'You · L. Bauer', tasks:[{id:'r1',title:'Finish screening 12 articles',done:false,due:'Today',focus:true},{id:'r2',title:'Add extraction criteria to protocol',done:false,due:'29 Jul',focus:false},{id:'r3',title:'Schedule field-team check-in',done:false,due:'31 Jul',focus:false},{id:'r4',title:'Create citation library',done:true,due:'20 Jul',focus:false}], notes:[{id:'rn1',title:'Literature review — polymer types',date:'25 JUL 2026',body:'Most comparable studies use FTIR confirmation after visual sorting. Need to distinguish the reported sampling mesh size in the extraction table.'}], resources:[{title:'Zotero collection',meta:'Reference library',url:'#'},{title:'Sampling SOP',meta:'Google Drive PDF',url:'#'}], dates:[{date:'2026-08-03',title:'Literature review checkpoint',type:'Deadline'},{date:'2026-08-07',title:'Team check-in',type:'Meeting'}] },
    { id:'sleep', name:'Sleep & Cognition', kind:'project', status:'active', accent:'#a78db3', accentInk:'#675476', health:'On track', healthTone:'green', goal:'Exploring sleep consistency and attention in graduate students.', deadline:'2026-08-22', phase:'Study design', collaborators:'You', tasks:[{id:'s1',title:'Revise participant information sheet',done:false,due:'28 Jul',focus:false},{id:'s2',title:'Outline preregistration',done:false,due:'4 Aug',focus:false},{id:'s3',title:'Review ethics feedback',done:true,due:'23 Jul',focus:false},{id:'s4',title:'Update recruitment estimate',done:true,due:'24 Jul',focus:false}], notes:[{id:'sn1',title:'Ethics feedback',date:'23 JUL 2026',body:'Clarify how withdrawal requests will be handled after pseudonymisation. Include contact details for the study administrator.'}], resources:[{title:'Ethics application',meta:'Google Drive document',url:'#'}], dates:[{date:'2026-08-22',title:'Ethics resubmission',type:'Deadline'}] },
    { id:'archive', name:'Archive Narratives', kind:'project', status:'active', accent:'#b6926f', accentInk:'#76583f', health:'Paused', healthTone:'gray', goal:'A digital archive of oral histories and place.', deadline:'', phase:'Paused', collaborators:'You · P. Weber', tasks:[{id:'a1',title:'Tag interview transcripts',done:true,due:'15 Jul',focus:false},{id:'a2',title:'Sketch archive taxonomy',done:false,due:'When resumed',focus:false}], notes:[{id:'an1',title:'Next steps on return',date:'12 JUL 2026',body:'Begin with a controlled vocabulary for place, period, and narrator. Avoid committing to a public-facing taxonomy before reviewing all transcripts.'}], resources:[{title:'Archive inventory',meta:'Google Drive spreadsheet',url:'#'}], dates:[] },
    { id:'stats', name:'Applied Statistics', kind:'course', status:'active', accent:'#c39750', accentInk:'#805a1a', health:'Needs attention', healthTone:'amber', goal:'Current course · modelling and inference.', deadline:'2026-08-01', phase:'Week 5', collaborators:'Coursework', tasks:[{id:'st1',title:'Complete regression problem set',done:false,due:'Today',focus:true},{id:'st2',title:'Watch Week 5 seminar',done:false,due:'29 Jul',focus:false},{id:'st3',title:'Review residual diagnostics notes',done:true,due:'24 Jul',focus:false},{id:'st4',title:'Start assignment outline',done:false,due:'30 Jul',focus:false}], notes:[{id:'stn1',title:'Week 5 — regression',date:'24 JUL 2026',body:'Check variance inflation factors before interpreting coefficients. Interaction terms require centred predictors for the clearest interpretation.'}], resources:[{title:'Course portal',meta:'External link',url:'#'},{title:'Problem-set notebook',meta:'Google Colab',url:'#'}], dates:[{date:'2026-08-01',title:'Problem set 3 due',type:'Assignment'},{date:'2026-08-10',title:'Course assignment due',type:'Assignment'}] },
    { id:'writing', name:'Scientific Writing', kind:'course', status:'active', accent:'#7e9c91', accentInk:'#41675c', health:'On track', healthTone:'green', goal:'Current course · writing for publication.', deadline:'2026-08-06', phase:'Week 4', collaborators:'Coursework', tasks:[{id:'w1',title:'Annotate two discussion sections',done:false,due:'29 Jul',focus:false},{id:'w2',title:'Submit peer feedback',done:false,due:'2 Aug',focus:false},{id:'w3',title:'Complete abstract exercise',done:true,due:'22 Jul',focus:false}], notes:[{id:'wn1',title:'Discussion section patterns',date:'22 JUL 2026',body:'Strong examples move from the immediate finding to its mechanism, then state the boundary of the claim before drawing out implications.'}], resources:[{title:'Reading list',meta:'Google Drive document',url:'#'}], dates:[{date:'2026-08-06',title:'Peer feedback due',type:'Assignment'}] }
  ]
};

let data = loadData();
let activeWorkspace = 'urban';
let currentView = 'home';
let activeTab = 'overview';
let workspaceFilter = 'all';
let supabaseClient = null;
let cloudUser = null;
let cloudEnabled = false;
let cloudSaveTimer = null;

function normalizeData(candidate){
  const saved = candidate && Array.isArray(candidate.workspaces) ? candidate : structuredClone(initialData);
  saved.workspaces.forEach(workspace => { if(!workspace.status) workspace.status='active'; });
  if(!saved.weekPlan) saved.weekPlan=structuredClone(initialData.weekPlan);
  Object.values(saved.weekPlan).forEach(plan => { if(!('morning' in plan)){ plan.morning=plan.workspace||''; plan.afternoon=''; delete plan.workspace; delete plan.note; } });
  return saved;
}
function loadData(){
  try {
    return normalizeData(JSON.parse(localStorage.getItem('fieldwork-data')) || structuredClone(initialData));
  } catch { return structuredClone(initialData); }
}
function saveData(){ localStorage.setItem('fieldwork-data', JSON.stringify(data)); if(cloudEnabled) queueCloudSave(); }
function cloudConfig(){ return window.FIELDWORK_SUPABASE || {}; }
function hasCloudConfig(){ const config=cloudConfig(); return Boolean(config.url && config.publishableKey); }
function setAppAccess(granted, message=''){
  document.getElementById('appShell').classList.toggle('locked',!granted);
  document.getElementById('authGate').hidden=granted;
  if(message) document.getElementById('authStatus').textContent=message;
}
function setSyncStatus(label, color='#70a46f'){ const status=document.getElementById('syncStatus'); if(!status)return; status.querySelector('span:last-child').textContent=label; status.querySelector('.status-dot').style.background=color; }
function updateProfile(){
  const name=document.getElementById('profileName'); const initial=document.getElementById('profileInitial'); const signOut=document.getElementById('signOutButton');
  if(cloudUser){ const display=cloudUser.user_metadata?.full_name || cloudUser.email || 'Signed in'; name.textContent=display; initial.textContent=display.trim().charAt(0).toUpperCase(); signOut.hidden=false; return; }
  signOut.hidden=true;
  name.textContent=hasCloudConfig()?'Sign in with Google':'Connect cloud'; initial.textContent='A';
}
function queueCloudSave(){ clearTimeout(cloudSaveTimer); setSyncStatus('Saving securely…','#c18d38'); cloudSaveTimer=setTimeout(syncCloudState,700); }
async function syncCloudState(){
  if(!cloudEnabled || !supabaseClient || !cloudUser)return;
  const { error }=await supabaseClient.from('dashboard_state').upsert({user_id:cloudUser.id,data},{onConflict:'user_id'});
  if(error){ console.error('Cloud sync failed:',error); setSyncStatus('Sync needs attention','#b6604f'); return; }
  setSyncStatus('Synced securely','#70a46f');
}
async function loadCloudState(user){
  cloudUser=user; updateProfile(); setSyncStatus('Loading your dashboard…','#c18d38');
  const { data:row, error }=await supabaseClient.from('dashboard_state').select('data').eq('user_id',user.id).maybeSingle();
  if(error && error.code!=='PGRST116'){ console.error('Cloud load failed:',error); setSyncStatus('Cloud setup incomplete','#b6604f'); setAppAccess(false,'We could not load this private dashboard. Please try again.'); return; }
  cloudEnabled=true;
  if(row?.data){ data=normalizeData(row.data); localStorage.setItem('fieldwork-data',JSON.stringify(data)); renderAll(); setSyncStatus('Synced securely','#70a46f'); }
  else { await syncCloudState(); }
  setAppAccess(true);
}
async function initializeCloud(){
  updateProfile();
  if(!hasCloudConfig()){ setSyncStatus('Local preview','#8b958b'); setAppAccess(true); return; }
  setAppAccess(false,'Checking your secure session…');
  if(!window.supabase?.createClient){ setSyncStatus('Cloud library unavailable','#b6604f'); setAppAccess(false,'The sign-in service is unavailable. Please refresh and try again.'); return; }
  const config=cloudConfig(); supabaseClient=window.supabase.createClient(config.url,config.publishableKey);
  setSyncStatus('Sign in to sync','#c18d38');
  const { data:{session}, error }=await supabaseClient.auth.getSession();
  if(error){ console.error('Session check failed:',error); setSyncStatus('Sign-in unavailable','#b6604f'); setAppAccess(false,'Sign-in is unavailable. Please refresh and try again.'); return; }
  if(session?.user) await loadCloudState(session.user);
  else setAppAccess(false);
  supabaseClient.auth.onAuthStateChange(async(event,sessionState)=>{
    if(event==='SIGNED_IN' && sessionState?.user && sessionState.user.id!==cloudUser?.id) await loadCloudState(sessionState.user);
    if(event==='SIGNED_OUT'){ cloudUser=null; cloudEnabled=false; updateProfile(); setSyncStatus('Signed out','#8b958b'); setAppAccess(false); }
  });
}
async function connectGoogle(){
  if(!hasCloudConfig()){ toast('Add your Supabase URL and publishable key first.'); return; }
  if(!supabaseClient){ await initializeCloud(); }
  if(cloudUser){ toast(`Connected as ${cloudUser.email || 'your Google account'}`); return; }
  document.getElementById('authStatus').textContent='Redirecting to Google…';
  const { error }=await supabaseClient.auth.signInWithOAuth({provider:'google',options:{redirectTo:window.location.origin+window.location.pathname}});
  if(error){ console.error('Google sign-in failed:',error); document.getElementById('authStatus').textContent='Google sign-in could not start. Please try again.'; }
}
async function signOut(){
  if(!supabaseClient || !cloudUser)return;
  setSyncStatus('Signing out…','#c18d38');
  const { error }=await supabaseClient.auth.signOut();
  if(error){ console.error('Sign-out failed:',error); setSyncStatus('Could not sign out','#b6604f'); toast('Sign out did not complete. Please try again.'); return; }
  cloudUser=null; cloudEnabled=false; updateProfile(); setSyncStatus('Signed out','#8b958b'); setAppAccess(false);
}
async function uploadResearchImage(file){
  if(!cloudEnabled || !cloudUser) throw new Error('Sign in before uploading research images.');
  if(!file.type.startsWith('image/')) throw new Error('Only image files can be uploaded.');
  const extension=file.name.split('.').pop() || 'png'; const path=`${cloudUser.id}/${crypto.randomUUID()}.${extension}`;
  const { error }=await supabaseClient.storage.from('project-images').upload(path,file,{upsert:false,contentType:file.type});
  if(error) throw error;
  return path;
}
function getWs(id=activeWorkspace){ return data.workspaces.find(w=>w.id===id); }
function activeWorkspaces(){ return data.workspaces.filter(w=>w.status!=='completed'); }
function allTasks(){ return activeWorkspaces().flatMap(w=>w.tasks.map(t=>({...t, workspace:w}))); }
function progress(w){ return w.tasks.length ? Math.round(w.tasks.filter(t=>t.done).length / w.tasks.length * 100) : 0; }
function fmtDate(value){ if(!value) return 'No deadline'; const d=new Date(`${value}T12:00:00`); return d.toLocaleDateString('en-GB',{day:'numeric',month:'short'}); }
function daysUntil(value){ return Math.round((new Date(`${value}T12:00:00`)-new Date('2026-07-27T12:00:00'))/86400000); }
function healthStyle(w){ const tones={green:['var(--sage)','var(--sage-ink)'],amber:['var(--amber)','var(--amber-ink)'],gray:['#e7e8e4','#727b73'],coral:['var(--coral)','var(--coral-ink)']}; const [bg,ink]=tones[w.healthTone]||tones.green; return `--health:${bg};--health-ink:${ink};`; }
function titleCase(v){ return v[0].toUpperCase()+v.slice(1); }

function renderSidebar(){
  document.getElementById('workspaceNav').innerHTML=activeWorkspaces().map(w=>`<button class="workspace-link ${activeWorkspace===w.id && currentView==='detail'?'active':''}" data-open-workspace="${w.id}" style="--dot:${w.accent}"><span class="mini-dot"></span><span>${w.name}</span></button>`).join('');
  document.getElementById('taskWorkspace').innerHTML=activeWorkspaces().map(w=>`<option value="${w.id}">${w.name}</option>`).join('');
}
function renderFocus(){
  const focus=allTasks().filter(t=>t.focus).slice(0,3);
  document.getElementById('focusList').innerHTML=focus.length?focus.map(t=>taskHtml(t,t.workspace,true)).join(''):'<p class="portfolio-empty">No focus tasks yet. Choose one small thing to begin.</p>';
  document.getElementById('focusCount').textContent=`${focus.filter(t=>t.done).length} of ${focus.length}`;
}
function taskHtml(t,w,showWs=false){return `<label class="task-item ${t.done?'done':''}"><input class="check" type="checkbox" data-task="${t.id}" data-workspace="${w.id}" ${t.done?'checked':''}/><span class="task-copy"><span class="task-title">${escapeHtml(t.title)}</span><span class="task-meta">${showWs?`<b>${escapeHtml(w.name)}</b> · `:''}${escapeHtml(t.due||'No date')}</span></span></label>`;}
function renderDeadlines(){
  const dates=activeWorkspaces().flatMap(w=>w.dates.map(d=>({...d,workspace:w}))).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,4);
  document.getElementById('deadlineList').innerHTML=dates.map(d=>{const dt=new Date(`${d.date}T12:00:00`);return `<div class="deadline-item"><div class="deadline-date"><b>${dt.getDate()}</b>${dt.toLocaleDateString('en-GB',{month:'short'}).toUpperCase()}</div><div><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.workspace.name)} · ${escapeHtml(d.type)}</p></div></div>`}).join('');
}
function cardHtml(w){ const pct=progress(w); return `<article class="workspace-card" data-open-workspace="${w.id}" style="--accent:${w.accent};${healthStyle(w)}"><div class="card-top"><span class="type-label">${w.kind.toUpperCase()}</span><span class="health">${w.health}</span></div><h3>${escapeHtml(w.name)}</h3><p class="card-goal">${escapeHtml(w.goal)}</p><div class="card-bottom"><div class="progress-text"><span>PROGRESS</span><span>${pct}%</span></div><div class="progress-track"><div class="progress-bar" style="width:${pct}%"></div></div><div class="card-date">${w.deadline?`Next: <strong>${fmtDate(w.deadline)}</strong>`:'No active deadline'}</div></div></article>`; }
function renderCards(){ const active=activeWorkspaces(); document.getElementById('workspaceGrid').innerHTML=active.map(cardHtml).join(''); document.getElementById('activeWorkspaceTitle').textContent=`Your ${active.length} active workspace${active.length===1?'':'s'}`; }
function renderInsights(){ const attention=activeWorkspaces().filter(w=>w.health==='Needs attention'); const title=attention.length?attention.map(w=>w.name).join(' & '):'No workspace needs attention'; document.getElementById('attentionTitle').textContent=title; document.getElementById('attentionText').textContent=attention.length?'A deadline or unfinished next action is asking for a closer look.':'You are in a good place.'; const completed=allTasks().filter(t=>t.done).length; const total=allTasks().length; document.getElementById('weekProgress').textContent=`${completed} of ${total} tasks complete`; }
function renderHome(){ renderFocus();renderDeadlines();renderCards();renderInsights(); }
function renderPortfolio(){ const list=data.workspaces.filter(w=>{ if(workspaceFilter==='completed') return w.status==='completed'; if(w.status==='completed') return false; if(workspaceFilter==='all') return true; return workspaceFilter==='attention'?w.health==='Needs attention':w.kind===workspaceFilter; }); document.getElementById('portfolioList').innerHTML=list.length?list.map(w=>{const pct=progress(w);const rowStatus=w.status==='completed'?`Completed ${fmtDate(w.completedAt)}`:w.health;return `<article class="portfolio-row" data-open-workspace="${w.id}" style="--accent:${w.accent};${healthStyle(w)}"><div class="portfolio-title"><span class="portfolio-dot"></span><div><h3>${escapeHtml(w.name)}</h3><p>${titleCase(w.kind)} · ${escapeHtml(w.phase)}</p></div></div><span class="health">${rowStatus}</span><div class="row-progress"><div class="progress-text"><span>PROGRESS</span><span>${pct}%</span></div><div class="progress-track"><div class="progress-bar" style="width:${pct}%;background:${w.accent}"></div></div></div><div class="row-date">${w.status==='completed'?`Archived<br><strong>${fmtDate(w.completedAt)}</strong>`:w.deadline?`Next deadline<br><strong>${fmtDate(w.deadline)}</strong>`:'<strong>Paused</strong>'}</div><span class="row-arrow">›</span></article>`}).join(''):`<p class="portfolio-empty">${workspaceFilter==='completed'?'No completed workspaces yet.':'Nothing in this view.'}</p>`;
}
function renderWeekPlanner(){
  const week=['2026-07-27','2026-07-28','2026-07-29','2026-07-30','2026-07-31'];
  const active=activeWorkspaces();
  const plans=week.map(date=>({date,day:new Date(`${date}T12:00:00`),plan:data.weekPlan[date]||{morning:'',afternoon:''}}));
  const options=(plan,field)=>[`<option value="">—</option>`,...active.map(w=>`<option value="${w.id}" ${plan[field]===w.id?'selected':''}>${escapeHtml(w.name)}</option>`)].join('');
  const dayHeader=`<div class="mini-plan week-days"><span></span>${plans.map(({day})=>`<span>${day.toLocaleDateString('en-GB',{weekday:'short'}).toUpperCase()}<b>${day.getDate()}</b></span>`).join('')}</div>`;
  const row=(field,label)=>`<div class="mini-plan"><time>${label.toUpperCase()}</time>${plans.map(({date,plan})=>`<select aria-label="${label} workspace for ${date}" data-plan-date="${date}" data-plan-field="${field}">${options(plan,field)}</select>`).join('')}</div>`;
  document.getElementById('weekPlanner').innerHTML=dayHeader+row('morning','Morning')+row('afternoon','Afternoon');
}
function renderCalendar(){ renderWeekPlanner(); const dates=activeWorkspaces().flatMap(w=>w.dates.map(d=>({...d,workspace:w}))).sort((a,b)=>a.date.localeCompare(b.date)); document.getElementById('calendarList').innerHTML=dates.map(d=>`<article class="calendar-event" style="--accent:${d.workspace.accent}"><time class="event-date">${fmtDate(d.date).toUpperCase()}</time><span class="event-dot"></span><div class="event-copy"><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.workspace.name)} · ${escapeHtml(d.type)}</p></div></article>`).join(''); }
function heroHtml(w){const status=w.status==='completed'?`Completed ${fmtDate(w.completedAt)}`:w.health;return `<p class="project-kind">${w.kind.toUpperCase()} · ${escapeHtml(w.phase)}</p><div class="project-title-line"><h1>${escapeHtml(w.name)}</h1><span class="health" style="${healthStyle(w)}">${status}</span></div><p>${escapeHtml(w.goal)}</p><div class="hero-meta"><span class="meta-chip">${progress(w)}% task progress</span>${w.status==='completed'?`<span class="meta-chip">Archived ${fmtDate(w.completedAt)}</span>`:w.deadline?`<span class="meta-chip">Next deadline ${fmtDate(w.deadline)}</span>`:''}<span class="meta-chip">${escapeHtml(w.collaborators)}</span></div>`;}
function renderDetail(){ const w=getWs(); if(!w)return; document.getElementById('projectHero').innerHTML=heroHtml(w); document.getElementById('detailActions').innerHTML=`<button class="archive-button ${w.status==='completed'?'restore-button':''}" id="toggleWorkspaceStatus">${w.status==='completed'?'Restore to active':'Mark as complete'}</button>`; document.querySelectorAll('.detail-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===activeTab)); let content='';
  if(activeTab==='overview') content=`<div class="detail-layout"><div><section class="detail-section"><p class="eyebrow">WHAT'S NEXT</p><h2>Tasks</h2><div class="task-list">${w.tasks.map(t=>taskHtml(t,w)).join('')}</div><button class="add-inline" data-add-task="${w.id}">+ Add task</button></section><section class="detail-section"><p class="eyebrow">RECENT NOTES</p><h2>Research trail</h2><div class="note-list">${w.notes.slice(0,2).map(n=>noteCard(n)).join('')}</div></section></div><aside class="detail-side"><section class="panel"><p class="eyebrow">CURRENT PHASE</p><h3>${escapeHtml(w.phase)}</h3><p>Your task progress is ${progress(w)}%. Keep the next action specific and small.</p></section><section class="panel"><p class="eyebrow">AT A GLANCE</p><h3>${w.tasks.filter(t=>!t.done).length} open tasks</h3><p>${w.deadline?`Next deadline is ${fmtDate(w.deadline)}.`:'There is no scheduled deadline.'}</p></section></aside></div>`;
  if(activeTab==='notes') content=`<div class="notes-layout"><div class="note-toolbar"><div><p class="eyebrow">LIVING NOTE</p><h2>Working notes</h2></div><button id="saveNote">Save changes</button></div><div class="note-editor" id="noteEditor" contenteditable="true" data-placeholder="Start writing a research note…">${w.notes[0]?escapeHtml(w.notes[0].body):''}</div><section class="detail-section" style="margin-top:31px"><p class="eyebrow">NOTE PAGES</p><div class="note-list">${w.notes.map(noteCard).join('')}</div><button class="add-inline" id="newNote">+ New note page</button></section></div>`;
  if(activeTab==='timeline') content=`<div class="timeline-detail">${w.dates.length?w.dates.sort((a,b)=>a.date.localeCompare(b.date)).map(d=>`<article class="calendar-event" style="--accent:${w.accent}"><time class="event-date">${fmtDate(d.date).toUpperCase()}</time><span class="event-dot"></span><div class="event-copy"><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.type)} · ${escapeHtml(w.name)}</p></div></article>`).join(''):'<p class="portfolio-empty">No milestones or deadlines recorded yet.</p>'}<button class="add-inline" id="addDate">+ Add key date</button></div>`;
  if(activeTab==='resources') content=`<div class="resources-list"><p class="eyebrow">LINKED MATERIAL</p><h2 style="font-family:var(--serif);font-weight:500;font-size:29px;margin:0 0 13px">Resources</h2>${w.resources.map(r=>`<div class="resource-item"><span class="resource-icon">↗</span><div><a href="${r.url}" target="_blank" rel="noreferrer">${escapeHtml(r.title)}</a><p>${escapeHtml(r.meta)}</p></div></div>`).join('')}<button class="add-inline" id="addResource">+ Add link</button></div>`;
  document.getElementById('detailBody').innerHTML=content;
}
function noteCard(n){return `<article class="note-card"><p class="note-date">${escapeHtml(n.date)}</p><h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.body)}</p></article>`;}
function escapeHtml(str=''){return String(str).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function renderAll(){ renderSidebar();renderHome();renderPortfolio();renderCalendar();if(currentView==='detail')renderDetail(); }

function openView(view){ currentView=view; document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===`${view}View`)); document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.view===view)); document.getElementById('breadcrumb').innerHTML=view==='detail'?`<span>Workspaces / ${escapeHtml(getWs().name)}</span>`:`<span>Monday, 27 July</span>`; document.getElementById('sidebar').classList.remove('open'); window.scrollTo({top:0,behavior:'smooth'}); renderAll(); }
function openWorkspace(id){activeWorkspace=id;activeTab='overview';currentView='detail';openView('detail');}
function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200);}
function openModal(workspace='urban'){document.getElementById('taskWorkspace').value=workspace;document.getElementById('modalBackdrop').hidden=false;setTimeout(()=>document.getElementById('taskName').focus(),10);}
function closeModal(){document.getElementById('modalBackdrop').hidden=true;}

document.addEventListener('click',e=>{
  const open=e.target.closest('[data-open-workspace]'); if(open){openWorkspace(open.dataset.openWorkspace);return;}
  const view=e.target.closest('[data-view]'); if(view){openView(view.dataset.view);return;}
  const filter=e.target.closest('[data-filter]'); if(filter){workspaceFilter=filter.dataset.filter;document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===filter));renderPortfolio();return;}
  const tab=e.target.closest('[data-tab]'); if(tab){activeTab=tab.dataset.tab;renderDetail();return;}
  if(e.target.closest('#profileButton')||e.target.closest('#googleSignIn')){connectGoogle();return;}
  if(e.target.closest('#signOutButton')){signOut();return;}
  if(e.target.closest('#quickAdd'))openModal();
  if(e.target.closest('#addFocus'))openModal();
  if(e.target.closest('#newWorkspaceBtn')||e.target.closest('#newWorkspaceTop'))toast('New workspace creation comes in the cloud-connected version.');
  if(e.target.closest('#toggleWorkspaceStatus')){const w=getWs(); if(w.status==='completed'){w.status='active';delete w.completedAt;toast(`${w.name} restored to active work`);}else{w.status='completed';w.completedAt=new Date().toISOString().slice(0,10);toast(`${w.name} moved to completed work`);}saveData();renderAll();}
  if(e.target.closest('#closeModal'))closeModal();
  if(e.target.closest('#menuButton'))document.getElementById('sidebar').classList.toggle('open');
  if(e.target.closest('[data-add-task]'))openModal(e.target.closest('[data-add-task]').dataset.addTask);
  if(e.target.closest('#newNote')){const w=getWs();w.notes.unshift({id:`n${Date.now()}`,title:'Untitled note',date:'27 JUL 2026',body:'Start documenting your work here.'});saveData();renderDetail();toast('New note page created');}
  if(e.target.closest('#saveNote')){const w=getWs();if(!w.notes.length)w.notes.unshift({id:`n${Date.now()}`,title:'Working notes',date:'27 JUL 2026',body:''});w.notes[0].body=document.getElementById('noteEditor').innerText.trim();w.notes[0].date='27 JUL 2026';saveData();toast('Note saved on this device');}
  if(e.target.closest('#addDate'))toast('Key-date editing is ready for the cloud data layer.');
  if(e.target.closest('#addResource'))toast('Link editing is ready for the cloud data layer.');
  if(e.target.closest('#searchButton'))toast('Search will span tasks and research notes.');
});
document.addEventListener('change',e=>{if(e.target.matches('[data-task]')){const w=getWs(e.target.dataset.workspace);const task=w.tasks.find(t=>t.id===e.target.dataset.task);task.done=e.target.checked;saveData();renderAll();toast(task.done?'Task marked complete':'Task reopened');} if(e.target.matches('[data-plan-date]')){const {planDate,planField}=e.target.dataset;data.weekPlan[planDate] ||= {morning:'',afternoon:''};data.weekPlan[planDate][planField]=e.target.value;saveData();toast('Week plan saved');}});
document.getElementById('quickAddForm').addEventListener('submit',e=>{e.preventDefault();const title=document.getElementById('taskName').value.trim();const workspace=document.getElementById('taskWorkspace').value;const due=document.getElementById('taskDue').value;const focus=document.getElementById('taskFocus').checked;if(!title)return;getWs(workspace).tasks.push({id:`t${Date.now()}`,title,done:false,due:due?fmtDate(due):'No date',focus});saveData();e.target.reset();closeModal();renderAll();toast('Task added');});
document.getElementById('modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal();});
renderAll();
initializeCloud();
