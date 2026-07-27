const initialData = {
  theme: 'light',
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
let activeNoteId = null;
let plannerWeekOffset = 0;
let editingTask = null;
let supabaseClient = null;
let cloudUser = null;
let cloudEnabled = false;
let cloudSaveTimer = null;

function normalizeData(candidate){
  const saved = candidate && Array.isArray(candidate.workspaces) ? candidate : structuredClone(initialData);
  if(!['light','dark'].includes(saved.theme)) saved.theme='light';
  saved.workspaces.forEach(workspace => { if(!workspace.status) workspace.status='active'; if(!Array.isArray(workspace.images)) workspace.images=[]; if(!Array.isArray(workspace.tags)) workspace.tags=[]; if(!Array.isArray(workspace.notes)) workspace.notes=[]; if(!Array.isArray(workspace.dates)) workspace.dates=[]; if(!Array.isArray(workspace.resources)) workspace.resources=[]; (workspace.tasks||[]).forEach(task=>{ if(!task.priority)task.priority='medium'; if(!Array.isArray(task.tags))task.tags=[]; if(!Array.isArray(task.subtasks))task.subtasks=[]; if(!task.description)task.description=''; }); });
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
async function uploadImageToWorkspace(file){
  if(!cloudEnabled || !cloudUser){ toast('Sign in to upload private research images.'); return; }
  const workspace=getWs(); if(!workspace)return;
  try {
    toast('Uploading image…');
    const path=await uploadResearchImage(file);
    workspace.images.unshift({id:crypto.randomUUID(),path,name:file.name,uploadedAt:new Date().toISOString()});
    saveData(); renderDetail(); toast('Image uploaded privately');
  } catch(error) { console.error('Image upload failed:',error); toast(error.message || 'Image upload failed.'); }
}
async function hydrateResearchImages(workspace){
  const gallery=document.getElementById('imageGallery'); if(!gallery || getWs()?.id!==workspace.id)return;
  if(!workspace.images?.length){ gallery.innerHTML='<p class="image-empty">No images attached to this workspace yet.</p>'; return; }
  if(!cloudEnabled || !supabaseClient){ gallery.innerHTML='<p class="image-empty">Sign in to load private research images.</p>'; return; }
  gallery.innerHTML='<p class="image-empty">Loading private images…</p>';
  const signed=await Promise.all(workspace.images.map(async image=>{ const {data:result,error}=await supabaseClient.storage.from('project-images').createSignedUrl(image.path,3600); return {image,url:error?null:result?.signedUrl}; }));
  if(getWs()?.id!==workspace.id || activeTab!=='notes')return;
  gallery.innerHTML=signed.map(({image,url})=>url?`<figure class="research-image"><img src="${url}" alt="${escapeHtml(image.name)}"/><button class="delete-image" data-delete-image="${image.id}" aria-label="Delete ${escapeHtml(image.name)}">×</button><figcaption>${escapeHtml(image.name)}</figcaption></figure>`:'<p class="image-empty">An image could not be loaded.</p>').join('');
}
async function deleteResearchImage(imageId){
  const workspace=getWs(); const image=workspace?.images?.find(item=>item.id===imageId); if(!workspace || !image)return;
  if(!window.confirm(`Delete “${image.name}” from this workspace?`))return;
  const {error}=await supabaseClient.storage.from('project-images').remove([image.path]);
  if(error){ console.error('Image delete failed:',error); toast('Image could not be deleted.'); return; }
  workspace.images=workspace.images.filter(item=>item.id!==imageId); saveData(); renderDetail(); toast('Image deleted');
}
function getWs(id=activeWorkspace){ return data.workspaces.find(w=>w.id===id); }
function activeWorkspaces(){ return data.workspaces.filter(w=>w.status!=='completed'); }
function allTasks(){ return activeWorkspaces().flatMap(w=>w.tasks.map(t=>({...t, workspace:w}))); }
function progress(w){ return w.tasks.length ? Math.round(w.tasks.filter(t=>t.done).length / w.tasks.length * 100) : 0; }
function fmtDate(value){ if(!value) return 'No deadline'; const d=new Date(`${value}T12:00:00`); return d.toLocaleDateString('en-GB',{day:'numeric',month:'short'}); }
function workspaceState(w){ return w.status==='completed'?'finished':w.health==='Needs attention'?'needs_attention':w.health==='Paused'?'paused':'on_track'; }
function workspaceStateLabel(w){ return ({on_track:'On track',needs_attention:'Needs attention',paused:'Paused',finished:'Finished'})[workspaceState(w)]; }
function setWorkspaceState(w,state){
  if(state==='finished'){ w.status='completed'; w.health='Finished'; w.healthTone='gray'; w.completedAt=w.completedAt || new Date().toISOString().slice(0,10); return; }
  w.status='active'; delete w.completedAt;
  if(state==='needs_attention'){ w.health='Needs attention'; w.healthTone='amber'; }
  else if(state==='paused'){ w.health='Paused'; w.healthTone='gray'; }
  else { w.health='On track'; w.healthTone='green'; }
}
function accentTextColor(hex){ const clean=(hex || '#799b7c').replace('#',''); const r=parseInt(clean.slice(0,2),16)||0; const g=parseInt(clean.slice(2,4),16)||0; const b=parseInt(clean.slice(4,6),16)||0; return ((r*299+g*587+b*114)/1000)>155?'#3e5742':'#eef4ed'; }
function nextWorkspaceDeadline(w){
  const entries=[]; if(w.deadline)entries.push({date:w.deadline,title:'Workspace deadline',type:'Deadline'}); (w.dates||[]).forEach(item=>entries.push(item)); (w.tasks||[]).filter(task=>task.dueDate && !task.done).forEach(task=>entries.push({date:task.dueDate,title:task.title,type:'Task'}));
  const today=new Date().toISOString().slice(0,10); const future=entries.filter(item=>item.date>=today); const dates=(future.length?future:entries).sort((a,b)=>a.date.localeCompare(b.date)); return dates[0] || null;
}
function daysUntil(value){ return Math.round((new Date(`${value}T12:00:00`)-new Date('2026-07-27T12:00:00'))/86400000); }
function parseTags(value=''){ return [...new Set(value.split(',').map(tag=>tag.trim().replace(/^#/,'')).filter(Boolean))]; }
function localDateKey(date){ const year=date.getFullYear(); const month=String(date.getMonth()+1).padStart(2,'0'); const day=String(date.getDate()).padStart(2,'0'); return `${year}-${month}-${day}`; }
function plannerMonday(){ const date=new Date(); date.setHours(12,0,0,0); date.setDate(date.getDate()-((date.getDay()+6)%7)+(plannerWeekOffset*7)); return date; }
function plannerDates(){ const monday=plannerMonday(); return Array.from({length:5},(_,index)=>{ const day=new Date(monday); day.setDate(monday.getDate()+index); return {date:localDateKey(day),day}; }); }
function healthStyle(w){ const tones={green:['var(--sage)','var(--sage-ink)'],amber:['var(--amber)','var(--amber-ink)'],gray:['var(--neutral)','var(--neutral-ink)'],coral:['var(--coral)','var(--coral-ink)']}; const [bg,ink]=tones[w.status==='completed'?'gray':w.healthTone]||tones.green; return `--health:${bg};--health-ink:${ink};`; }
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
function taskHtml(t,w,showWs=false,allowManage=false){const subtaskText=t.subtasks?.length?`<span class="task-subtask-count">${t.subtasks.filter(item=>item.done).length}/${t.subtasks.length} subtasks</span>`:'';return `<div class="task-item ${t.done?'done':''}"><label class="task-select"><input class="check" type="checkbox" data-task="${t.id}" data-workspace="${w.id}" ${t.done?'checked':''}/><span class="task-copy"><span class="task-title">${escapeHtml(t.title)}${t.priority&&t.priority!=='medium'?`<em class="task-priority">${t.priority.toUpperCase()}</em>`:''}</span><span class="task-meta">${showWs?`<b>${escapeHtml(w.name)}</b> · `:''}${escapeHtml(t.due||'No date')}</span>${subtaskText}</span></label>${allowManage?`<button class="edit-task" data-edit-task="${t.id}" data-task-workspace="${w.id}">Edit</button><button class="delete-task" data-delete-task="${t.id}" data-task-workspace="${w.id}">Delete</button>`:''}</div>`;}
function renderDeadlines(){
  const dates=activeWorkspaces().map(workspace=>{const deadline=nextWorkspaceDeadline(workspace);return deadline?{...deadline,workspace}:null;}).filter(Boolean).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,4);
  document.getElementById('deadlineList').innerHTML=dates.map(d=>{const dt=new Date(`${d.date}T12:00:00`);return `<div class="deadline-item"><div class="deadline-date"><b>${dt.getDate()}</b>${dt.toLocaleDateString('en-GB',{month:'short'}).toUpperCase()}</div><div><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.workspace.name)} · ${escapeHtml(d.type)}</p></div></div>`}).join('');
}
function cardHtml(w){ const pct=progress(w); const next=nextWorkspaceDeadline(w); return `<article class="workspace-card" data-open-workspace="${w.id}" style="--accent:${w.accent};${healthStyle(w)}"><div class="card-top"><span class="type-label">${w.kind.toUpperCase()}</span><span class="health">${workspaceStateLabel(w)}</span></div><h3>${escapeHtml(w.name)}</h3><p class="card-goal">${escapeHtml(w.goal)}</p><div class="card-bottom"><div class="progress-text"><span>PROGRESS</span><span>${pct}%</span></div><div class="progress-track"><div class="progress-bar" style="width:${pct}%"></div></div><div class="card-date">${next?`Next: <strong>${fmtDate(next.date)}</strong> · ${escapeHtml(next.title)}`:'No active deadline'}</div></div></article>`; }
function renderCards(){ const active=activeWorkspaces(); document.getElementById('workspaceGrid').innerHTML=active.map(cardHtml).join(''); document.getElementById('activeWorkspaceTitle').textContent=`Your ${active.length} active workspace${active.length===1?'':'s'}`; }
function renderInsights(){ const attention=activeWorkspaces().filter(w=>w.health==='Needs attention'); const title=attention.length?attention.map(w=>w.name).join(' & '):'No workspace needs attention'; document.getElementById('attentionTitle').textContent=title; document.getElementById('attentionText').textContent=attention.length?'A deadline or unfinished next action is asking for a closer look.':'You are in a good place.'; const completed=allTasks().filter(t=>t.done).length; const total=allTasks().length; document.getElementById('weekProgress').textContent=`${completed} of ${total} tasks complete`; }
function renderReminders(){
  const today=localDateKey(new Date());
  const reminders=activeWorkspaces().flatMap(workspace=>{
    const next=nextWorkspaceDeadline(workspace);
    if(!next)return [];
    const distance=Math.round((new Date(`${next.date}T12:00:00`)-new Date(`${today}T12:00:00`))/86400000);
    return distance<=7?[{workspace,...next,distance}]:[];
  }).sort((a,b)=>a.date.localeCompare(b.date));
  document.getElementById('reminderList').innerHTML=reminders.length?reminders.map(item=>{
    const label=item.distance<0?`${Math.abs(item.distance)} day${Math.abs(item.distance)===1?'':'s'} overdue`:item.distance===0?'Due today':item.distance===1?'Due tomorrow':`Due in ${item.distance} days`;
    const tone=item.distance<0?'overdue':item.distance<=2?'soon':'upcoming';
    return `<button class="reminder-item" data-open-workspace="${item.workspace.id}"><span class="reminder-level ${tone}">${label}</span><span class="reminder-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.workspace.name)} · ${fmtDate(item.date)}</small></span><span>›</span></button>`;
  }).join(''):'<p class="portfolio-empty">Nothing is due in the next seven days.</p>';
}
function renderTodayDate(){ const today=new Date(); document.getElementById('todayWeekday').textContent=today.toLocaleDateString('en-GB',{weekday:'short'}).toUpperCase(); document.getElementById('todayDate').textContent=today.getDate(); document.getElementById('todayMonth').textContent=today.toLocaleDateString('en-GB',{month:'short'}).toUpperCase(); }
function renderHome(){ renderFocus();renderDeadlines();renderCards();renderInsights();renderTodayDate();renderWeekPlanner();renderReminders(); }
function renderPortfolio(){ const list=data.workspaces.filter(w=>{ if(workspaceFilter==='completed') return w.status==='completed'; if(w.status==='completed') return false; if(workspaceFilter==='all') return true; return workspaceFilter==='attention'?w.health==='Needs attention':w.kind===workspaceFilter; }); document.getElementById('portfolioList').innerHTML=list.length?list.map(w=>{const pct=progress(w);const next=nextWorkspaceDeadline(w);return `<article class="portfolio-row" data-open-workspace="${w.id}" style="--accent:${w.accent};${healthStyle(w)}"><div class="portfolio-title"><span class="portfolio-dot"></span><div><h3>${escapeHtml(w.name)}</h3><p>${titleCase(w.kind)} · ${escapeHtml(w.phase)}</p></div></div><span class="health">${workspaceStateLabel(w)}</span><div class="row-progress"><div class="progress-text"><span>PROGRESS</span><span>${pct}%</span></div><div class="progress-track"><div class="progress-bar" style="width:${pct}%;background:${w.accent}"></div></div></div><div class="row-date">${next?`Next deadline<br><strong>${fmtDate(next.date)}</strong>`:w.status==='completed'?`Finished<br><strong>${fmtDate(w.completedAt)}</strong>`:'<strong>No deadline</strong>'}</div><span class="row-arrow">›</span></article>`}).join(''):`<p class="portfolio-empty">${workspaceFilter==='completed'?'No completed workspaces yet.':'Nothing in this view.'}</p>`;
}
function renderWeekPlanner(){
  const week=plannerDates();
  const active=activeWorkspaces();
  const plans=week.map(({date,day})=>({date,day,plan:data.weekPlan[date]||{morning:'',afternoon:''}}));
  const options=(plan,field)=>[`<option value="">—</option>`,...active.map(w=>`<option value="${w.id}" ${plan[field]===w.id?'selected':''}>${escapeHtml(w.name)}</option>`)].join('');
  const dayHeader=`<div class="mini-plan week-days"><span></span>${plans.map(({day})=>`<span>${day.toLocaleDateString('en-GB',{weekday:'short'}).toUpperCase()}<b>${day.getDate()}</b></span>`).join('')}</div>`;
  const row=(field,label)=>`<div class="mini-plan"><time>${label.toUpperCase()}</time>${plans.map(({date,plan})=>`<select aria-label="${label} workspace for ${date}" data-plan-date="${date}" data-plan-field="${field}">${options(plan,field)}</select>`).join('')}</div>`;
  document.getElementById('weekPlanner').innerHTML=dayHeader+row('morning','Morning')+row('afternoon','Afternoon');
  const start=plans[0].day; const end=plans[plans.length-1].day;
  document.getElementById('weekRange').textContent=`${start.toLocaleDateString('en-GB',{day:'numeric',month:'short'})} – ${end.toLocaleDateString('en-GB',{day:'numeric',month:'short'})}`;
}
function renderCalendar(){ renderWeekPlanner(); const dates=activeWorkspaces().flatMap(w=>w.dates.map(d=>({...d,workspace:w}))).sort((a,b)=>a.date.localeCompare(b.date)); document.getElementById('calendarList').innerHTML=dates.map(d=>`<article class="calendar-event" style="--accent:${d.workspace.accent}"><time class="event-date">${fmtDate(d.date).toUpperCase()}</time><span class="event-dot"></span><div class="event-copy"><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.workspace.name)} · ${escapeHtml(d.type)}</p></div></article>`).join(''); }
function heroHtml(w){const next=nextWorkspaceDeadline(w);return `<p class="project-kind">${w.kind.toUpperCase()} · ${escapeHtml(w.phase)}</p><div class="project-title-line"><h1>${escapeHtml(w.name)}</h1><span class="health" style="${healthStyle(w)}">${workspaceStateLabel(w)}</span></div><p>${escapeHtml(w.goal)}</p><div class="hero-meta"><span class="meta-chip">${progress(w)}% task progress</span>${next?`<span class="meta-chip">Next: ${fmtDate(next.date)} · ${escapeHtml(next.title)}</span>`:''}<span class="meta-chip">${escapeHtml(w.collaborators)}</span>${w.tags.map(tag=>`<span class="tag-chip">#${escapeHtml(tag)}</span>`).join('')}</div>`;}
function renderDetail(){ const w=getWs(); if(!w)return; document.getElementById('projectHero').innerHTML=heroHtml(w); document.getElementById('detailActions').innerHTML=`<button class="archive-button edit-workspace-button" id="editWorkspaceButton">Edit workspace</button><button class="archive-button ${w.status==='completed'?'restore-button':''}" id="toggleWorkspaceStatus">${w.status==='completed'?'Restore to active':'Mark as complete'}</button><button class="archive-button delete-workspace-button" id="deleteWorkspaceButton">Delete workspace</button>`; document.querySelectorAll('.detail-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===activeTab)); let content='';
  if(activeTab==='overview') { const next=nextWorkspaceDeadline(w); content=`<div class="detail-layout"><div><section class="detail-section"><p class="eyebrow">WHAT'S NEXT</p><h2>Tasks</h2><div class="task-list">${w.tasks.map(t=>taskHtml(t,w,false,true)).join('')}</div><button class="add-inline" data-add-task="${w.id}">+ Add task</button></section><section class="detail-section"><p class="eyebrow">RECENT NOTES</p><h2>Research trail</h2><div class="note-list">${w.notes.slice(0,2).map(n=>noteCard(n)).join('')}</div></section></div><aside class="detail-side"><section class="panel"><p class="eyebrow">CURRENT PHASE</p><h3>${escapeHtml(w.phase)}</h3><p>Your task progress is ${progress(w)}%. Keep the next action specific and small.</p></section><section class="panel"><p class="eyebrow">AT A GLANCE</p><h3>${w.tasks.filter(t=>!t.done).length} open tasks</h3><p>${next?`Next deadline: ${fmtDate(next.date)} · ${escapeHtml(next.title)}`:'There is no scheduled deadline.'}</p></section></aside></div>`; }
  if(activeTab==='notes') { const note=w.notes.find(item=>item.id===activeNoteId) || w.notes[0]; if(note)activeNoteId=note.id; content=`<div class="notes-layout">${note?`<div class="note-toolbar"><div><p class="eyebrow">LIVING NOTE</p><input class="note-editor-title" id="noteTitle" value="${escapeHtml(note.title)}" aria-label="Note title" /></div><div class="note-actions"><button class="delete-text-button" id="deleteNote">Delete</button><button id="saveNote">Save changes</button></div></div><div class="note-editor" id="noteEditor" contenteditable="true" data-placeholder="Start writing a research note…">${escapeHtml(note.body)}</div>`:'<p class="portfolio-empty">Create a note to start documenting this workspace.</p>'}<section class="image-section"><div class="image-section-heading"><p class="eyebrow">RESEARCH IMAGES</p><button class="upload-image-button" id="uploadImageButton">+ Upload image</button></div><div class="image-gallery" id="imageGallery"></div></section><section class="detail-section" style="margin-top:31px"><p class="eyebrow">NOTE PAGES</p><div class="note-list">${w.notes.map(noteCard).join('')}</div><button class="add-inline" id="newNote">+ New note page</button></section></div>`; }
  if(activeTab==='timeline') content=`<div class="timeline-detail">${w.dates.length?w.dates.sort((a,b)=>a.date.localeCompare(b.date)).map((d,index)=>`<article class="calendar-event timeline-entry" style="--accent:${w.accent}"><time class="event-date">${fmtDate(d.date).toUpperCase()}</time><span class="event-dot"></span><div class="event-copy"><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.type)} · ${escapeHtml(w.name)}</p></div><button class="delete-row" data-delete-date="${index}">Delete</button></article>`).join(''):'<p class="portfolio-empty">No milestones or deadlines recorded yet.</p>'}<button class="add-inline" id="addDate">+ Add key date</button></div>`;
  if(activeTab==='resources') content=`<div class="resources-list"><p class="eyebrow">LINKED MATERIAL</p><h2 style="font-family:var(--serif);font-weight:500;font-size:29px;margin:0 0 13px">Resources</h2>${w.resources.length?w.resources.map((r,index)=>`<div class="resource-item"><span class="resource-icon">↗</span><div><a href="${escapeHtml(r.url)}" target="_blank" rel="noreferrer">${escapeHtml(r.title)}</a><p>${escapeHtml(r.meta)}</p></div><button class="delete-row" data-delete-resource="${index}">Delete</button></div>`).join(''):'<p class="portfolio-empty">No resource links yet.</p>'}<button class="add-inline" id="addResource">+ Add link</button></div>`;
  document.getElementById('detailBody').innerHTML=content;
  if(activeTab==='notes') hydrateResearchImages(w);
}
function noteCard(n){return `<article class="note-card ${n.id===activeNoteId?'active':''}" data-open-note="${n.id}"><p class="note-date">${escapeHtml(n.date)}</p><h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.body)}</p><button data-open-note="${n.id}">Open note →</button></article>`;}
function escapeHtml(str=''){return String(str).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function applyTheme(){ const dark=data.theme==='dark'; document.body.classList.toggle('dark-theme',dark); const toggle=document.getElementById('themeToggle'); toggle.textContent=dark?'☀':'☾'; toggle.setAttribute('aria-label',dark?'Enable light mode':'Enable dark mode'); toggle.title=dark?'Enable light mode':'Enable dark mode'; }
function renderAll(){ applyTheme();renderSidebar();renderHome();renderPortfolio();if(currentView==='detail')renderDetail(); }

function openView(view){ currentView=view; document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===`${view}View`)); document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.view===view)); document.getElementById('breadcrumb').innerHTML=view==='detail'?`<span>Workspaces / ${escapeHtml(getWs().name)}</span>`:`<span>Monday, 27 July</span>`; document.getElementById('sidebar').classList.remove('open'); window.scrollTo({top:0,behavior:'smooth'}); renderAll(); }
function openWorkspace(id){activeWorkspace=id;activeTab='overview';currentView='detail';openView('detail');}
function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200);}
function openModal(workspace='urban'){document.getElementById('taskWorkspace').value=workspace;document.getElementById('modalBackdrop').hidden=false;setTimeout(()=>document.getElementById('taskName').focus(),10);}
function closeModal(){document.getElementById('modalBackdrop').hidden=true;}
function openWorkspaceModal(){ document.getElementById('workspaceModalBackdrop').hidden=false; setTimeout(()=>document.getElementById('workspaceName').focus(),10); }
function closeWorkspaceModal(){ document.getElementById('workspaceModalBackdrop').hidden=true; }
function workspaceId(name){ return `${name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') || 'workspace'}-${Date.now().toString(36)}`; }
const workspaceTemplates={
  custom:{},
  literature:{kind:'project',goal:'Map the evidence and turn it into a defensible synthesis.',phase:'Literature review',tags:['literature','reading'],tasks:['Define the review question','Set inclusion and exclusion criteria','Screen the first batch of sources'],noteTitle:'Review protocol',noteBody:'Record search terms, databases, inclusion criteria, and decisions that affect the review.'},
  experiment:{kind:'project',goal:'Plan, run, and document a rigorous study or fieldwork cycle.',phase:'Study planning',tags:['methods','data'],tasks:['Write the study protocol','Prepare materials and logistics','Create a data-quality checklist'],noteTitle:'Study log',noteBody:'Capture field decisions, deviations from protocol, observations, and questions to resolve.'},
  manuscript:{kind:'project',goal:'Move a research story from outline to submission.',phase:'Outline',tags:['writing','publication'],tasks:['Draft the paper outline','List target figures and tables','Choose a target journal'],noteTitle:'Manuscript decisions',noteBody:'Track the central claim, audience, journal requirements, and editorial decisions.'},
  course:{kind:'course',goal:'Turn course material into steady weekly progress.',phase:'Week 1',tags:['coursework','study'],tasks:['Review this week’s learning objectives','Block a study session','Capture questions for the next class'],noteTitle:'Course notes',noteBody:'Keep concise notes, worked examples, questions, and links to useful course material.'}
};
function applyWorkspaceTemplate(){
  const template=workspaceTemplates[document.getElementById('workspaceTemplate').value] || {};
  if(!Object.keys(template).length)return;
  document.getElementById('workspaceKind').value=template.kind;
  if(!document.getElementById('workspaceGoal').value.trim())document.getElementById('workspaceGoal').value=template.goal;
}
function createWorkspaceFromForm(){
  const name=document.getElementById('workspaceName').value.trim(); const kind=document.getElementById('workspaceKind').value; const goal=document.getElementById('workspaceGoal').value.trim(); const deadline=document.getElementById('workspaceDeadline').value; const template=workspaceTemplates[document.getElementById('workspaceTemplate').value] || {};
  if(!name)return;
  const palette=[['#799b7c','#406044'],['#7697aa','#416576'],['#a78db3','#675476'],['#b6926f','#76583f'],['#c39750','#805a1a'],['#7e9c91','#41675c']]; const [accent,accentInk]=palette[data.workspaces.length%palette.length]; const id=workspaceId(name);
  const timestamp=Date.now();
  const workspace={id,name,kind,status:'active',accent,accentInk,health:'On track',healthTone:'green',goal:goal||template.goal||`A new ${kind==='course'?'course':'research project'} workspace.`,deadline,phase:template.phase || (kind==='course'?'Getting started':'Planning'),collaborators:kind==='course'?'Coursework':'You',tags:[...(template.tags||[])],tasks:(template.tasks||[]).map((title,index)=>({id:`task-${timestamp}-${index}`,title,done:false,due:'No date',dueDate:'',focus:false,priority:'medium',tags:[],description:'',subtasks:[]})),notes:[{id:`note-${timestamp}`,title:template.noteTitle || 'Start here',date:new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase(),body:template.noteBody || 'Capture your first ideas, decisions, or next steps here.'}],images:[],resources:[],dates:deadline?[{date:deadline,title:'First deadline',type:kind==='course'?'Assignment':'Deadline'}]:[]};
  data.workspaces.push(workspace); saveData(); document.getElementById('workspaceForm').reset(); closeWorkspaceModal(); openWorkspace(id); toast(`${name} created`);
}
async function deleteCurrentWorkspace(){
  const workspace=getWs(); if(!workspace)return;
  const confirmation=window.prompt(`This permanently deletes “${workspace.name}”, including its notes, tasks, deadlines, and ${workspace.images?.length||0} private image(s).\n\nType the workspace name to confirm:`);
  if(confirmation!==workspace.name){ toast('Workspace deletion cancelled'); return; }
  if(workspace.images?.length){
    const {error}=await supabaseClient.storage.from('project-images').remove(workspace.images.map(image=>image.path));
    if(error){ console.error('Workspace image deletion failed:',error); toast('Workspace was kept because its images could not be deleted.'); return; }
  }
  data.workspaces=data.workspaces.filter(item=>item.id!==workspace.id);
  activeWorkspace=activeWorkspaces()[0]?.id || data.workspaces[0]?.id || null;
  saveData(); openView('workspaces'); toast(`${workspace.name} permanently deleted`);
}
function openWorkspaceEditor(){
  const workspace=getWs(); if(!workspace)return;
  document.getElementById('editWorkspaceName').value=workspace.name;
  document.getElementById('editWorkspaceKind').value=workspace.kind;
  document.getElementById('editWorkspaceState').value=workspaceState(workspace);
  document.getElementById('editWorkspaceColor').value=workspace.accent;
  document.getElementById('editWorkspaceGoal').value=workspace.goal;
  document.getElementById('editWorkspacePhase').value=workspace.phase;
  document.getElementById('editWorkspaceAuthors').value=workspace.collaborators;
  document.getElementById('editWorkspaceTags').value=workspace.tags.join(', ');
  document.getElementById('editWorkspaceDeadline').value=workspace.deadline || '';
  document.getElementById('workspaceEditorBackdrop').hidden=false;
}
function closeWorkspaceEditor(){ document.getElementById('workspaceEditorBackdrop').hidden=true; }
function saveWorkspaceEditor(){
  const workspace=getWs(); if(!workspace)return;
  const name=document.getElementById('editWorkspaceName').value.trim(); if(!name)return;
  workspace.name=name; workspace.kind=document.getElementById('editWorkspaceKind').value; setWorkspaceState(workspace,document.getElementById('editWorkspaceState').value); workspace.accent=document.getElementById('editWorkspaceColor').value; workspace.accentInk=accentTextColor(workspace.accent); workspace.goal=document.getElementById('editWorkspaceGoal').value.trim() || workspace.goal; workspace.phase=document.getElementById('editWorkspacePhase').value.trim() || 'Planning'; workspace.collaborators=document.getElementById('editWorkspaceAuthors').value.trim() || 'You'; workspace.tags=[...new Set(document.getElementById('editWorkspaceTags').value.split(',').map(tag=>tag.trim().replace(/^#/,'')).filter(Boolean))]; workspace.deadline=document.getElementById('editWorkspaceDeadline').value;
  saveData(); closeWorkspaceEditor(); renderAll(); toast('Workspace settings saved');
}
function openDateModal(){ document.getElementById('dateForm').reset(); document.getElementById('dateModalBackdrop').hidden=false; setTimeout(()=>document.getElementById('timelineDate').focus(),10); }
function closeDateModal(){ document.getElementById('dateModalBackdrop').hidden=true; }
function saveDate(){ const workspace=getWs(); const date=document.getElementById('timelineDate').value; const title=document.getElementById('timelineTitle').value.trim(); if(!workspace || !date || !title)return; workspace.dates.push({date,title,type:document.getElementById('timelineType').value}); if(!workspace.deadline || date<workspace.deadline)workspace.deadline=date; saveData(); closeDateModal(); renderDetail(); toast('Key date added'); }
function deleteDate(index){ const workspace=getWs(); const item=workspace?.dates[index]; if(!item || !window.confirm(`Delete “${item.title}”?`))return; workspace.dates.splice(index,1); saveData(); renderDetail(); toast('Key date deleted'); }
function openResourceModal(){ document.getElementById('resourceForm').reset(); document.getElementById('resourceModalBackdrop').hidden=false; setTimeout(()=>document.getElementById('resourceName').focus(),10); }
function closeResourceModal(){ document.getElementById('resourceModalBackdrop').hidden=true; }
function saveResource(){ const workspace=getWs(); const title=document.getElementById('resourceName').value.trim(); const url=document.getElementById('resourceUrl').value.trim(); if(!workspace || !title || !url)return; workspace.resources.push({title,url,meta:document.getElementById('resourceMeta').value.trim() || 'External link'}); saveData(); closeResourceModal(); renderDetail(); toast('Resource link added'); }
function deleteResource(index){ const workspace=getWs(); const item=workspace?.resources[index]; if(!item || !window.confirm(`Delete the link “${item.title}”?`))return; workspace.resources.splice(index,1); saveData(); renderDetail(); toast('Resource link deleted'); }
function deleteTask(workspaceId,taskId){ const workspace=getWs(workspaceId); const task=workspace?.tasks.find(item=>item.id===taskId); if(!task || !window.confirm(`Delete task “${task.title}”?`))return; workspace.tasks=workspace.tasks.filter(item=>item.id!==taskId); saveData(); renderAll(); toast('Task deleted'); }
function openTaskEditor(workspaceId,taskId){
  const workspace=getWs(workspaceId); const task=workspace?.tasks.find(item=>item.id===taskId); if(!task)return;
  editingTask={workspaceId,taskId};
  document.getElementById('taskEditorTitle').textContent=`Edit task · ${workspace.name}`;
  document.getElementById('editTaskTitle').value=task.title;
  document.getElementById('editTaskDue').value=task.dueDate || '';
  document.getElementById('editTaskPriority').value=task.priority || 'medium';
  document.getElementById('editTaskTags').value=(task.tags||[]).join(', ');
  document.getElementById('editTaskDescription').value=task.description || '';
  document.getElementById('editTaskSubtasks').value=(task.subtasks||[]).map(item=>typeof item==='string'?item:item.title).join('\n');
  document.getElementById('editTaskFocus').checked=Boolean(task.focus);
  document.getElementById('taskEditorBackdrop').hidden=false;
  setTimeout(()=>document.getElementById('editTaskTitle').focus(),10);
}
function closeTaskEditor(){ document.getElementById('taskEditorBackdrop').hidden=true; editingTask=null; }
function saveTaskEditor(){
  if(!editingTask)return;
  const workspace=getWs(editingTask.workspaceId); const task=workspace?.tasks.find(item=>item.id===editingTask.taskId); const title=document.getElementById('editTaskTitle').value.trim();
  if(!workspace || !task || !title)return;
  const dueDate=document.getElementById('editTaskDue').value;
  const original=task.subtasks || [];
  const priorDone=Object.fromEntries(original.filter(item=>typeof item==='object').map(item=>[item.title,item.done]));
  task.title=title; task.dueDate=dueDate; task.due=dueDate?fmtDate(dueDate):'No date'; task.priority=document.getElementById('editTaskPriority').value; task.tags=parseTags(document.getElementById('editTaskTags').value); task.description=document.getElementById('editTaskDescription').value.trim(); task.focus=document.getElementById('editTaskFocus').checked;
  task.subtasks=document.getElementById('editTaskSubtasks').value.split('\n').map(item=>item.trim()).filter(Boolean).map((title,index)=>({id:`sub-${Date.now()}-${index}`,title,done:Boolean(priorDone[title])}));
  saveData(); closeTaskEditor(); renderAll(); toast('Task updated');
}
function openSearchModal(){ document.getElementById('searchModalBackdrop').hidden=false; document.getElementById('searchInput').value=''; renderSearchResults(''); setTimeout(()=>document.getElementById('searchInput').focus(),10); }
function closeSearchModal(){ document.getElementById('searchModalBackdrop').hidden=true; }
function renderSearchResults(query){
  const term=query.trim().toLowerCase(); const results=[];
  if(term){ data.workspaces.forEach(workspace=>{
    const workspaceText=[workspace.name,workspace.goal,workspace.phase,workspace.collaborators,...(workspace.tags||[])].join(' ').toLowerCase();
    if(workspaceText.includes(term))results.push({type:'Workspace',title:workspace.name,detail:workspace.goal,workspaceId:workspace.id});
    workspace.tasks.forEach(task=>{ if([task.title,task.description,...(task.tags||[])].join(' ').toLowerCase().includes(term))results.push({type:'Task',title:task.title,detail:workspace.name,workspaceId:workspace.id}); });
    workspace.notes.forEach(note=>{ if([note.title,note.body].join(' ').toLowerCase().includes(term))results.push({type:'Note',title:note.title,detail:workspace.name,workspaceId:workspace.id,noteId:note.id}); });
    workspace.resources.forEach(resource=>{ if([resource.title,resource.meta,resource.url].join(' ').toLowerCase().includes(term))results.push({type:'Resource',title:resource.title,detail:workspace.name,workspaceId:workspace.id,tab:'resources'}); });
  }); }
  document.getElementById('searchResults').innerHTML=!term?'<p class="portfolio-empty">Search workspace names, tasks, notes, tags, and resources.</p>':results.length?results.slice(0,30).map(result=>`<button class="search-result" data-search-workspace="${result.workspaceId}" ${result.noteId?`data-search-note="${result.noteId}"`:''} ${result.tab?`data-search-tab="${result.tab}"`:''}><span>${result.type}</span><strong>${escapeHtml(result.title)}</strong><small>${escapeHtml(result.detail)}</small></button>`).join(''):'<p class="portfolio-empty">No matches found.</p>';
}
function saveActiveNote(){ const workspace=getWs(); const note=workspace?.notes.find(item=>item.id===activeNoteId); if(!note)return; note.title=document.getElementById('noteTitle').value.trim() || 'Untitled note'; note.body=document.getElementById('noteEditor').innerText.trim(); note.date=new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase(); saveData(); renderDetail(); toast('Note saved'); }
function deleteActiveNote(){ const workspace=getWs(); const note=workspace?.notes.find(item=>item.id===activeNoteId); if(!note || !window.confirm(`Delete “${note.title}”?`))return; workspace.notes=workspace.notes.filter(item=>item.id!==note.id); activeNoteId=workspace.notes[0]?.id || null; saveData(); renderDetail(); toast('Note deleted'); }

document.addEventListener('click',e=>{
  const searchResult=e.target.closest('[data-search-workspace]'); if(searchResult){activeWorkspace=searchResult.dataset.searchWorkspace;activeTab=searchResult.dataset.searchTab || (searchResult.dataset.searchNote?'notes':'overview');if(searchResult.dataset.searchNote)activeNoteId=searchResult.dataset.searchNote;closeSearchModal();openView('detail');return;}
  const open=e.target.closest('[data-open-workspace]'); if(open){openWorkspace(open.dataset.openWorkspace);return;}
  const view=e.target.closest('[data-view]'); if(view){openView(view.dataset.view);return;}
  const filter=e.target.closest('[data-filter]'); if(filter){workspaceFilter=filter.dataset.filter;document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===filter));renderPortfolio();return;}
  const tab=e.target.closest('[data-tab]'); if(tab){activeTab=tab.dataset.tab;renderDetail();return;}
  const noteLink=e.target.closest('[data-open-note]'); if(noteLink){activeNoteId=noteLink.dataset.openNote;renderDetail();return;}
  if(e.target.closest('#profileButton')||e.target.closest('#googleSignIn')){connectGoogle();return;}
  if(e.target.closest('#signOutButton')){signOut();return;}
  if(e.target.closest('#themeToggle')){data.theme=data.theme==='dark'?'light':'dark';saveData();applyTheme();toast(`${data.theme==='dark'?'Dark':'Light'} mode enabled`);return;}
  if(e.target.closest('#quickAdd'))openModal();
  if(e.target.closest('#addFocus'))openModal();
  if(e.target.closest('#newWorkspaceBtn')||e.target.closest('#newWorkspaceTop'))openWorkspaceModal();
  if(e.target.closest('#editWorkspaceButton'))openWorkspaceEditor();
  if(e.target.closest('#toggleWorkspaceStatus')){const w=getWs(); if(w.status==='completed'){setWorkspaceState(w,'on_track');toast(`${w.name} restored to active work`);}else{setWorkspaceState(w,'finished');toast(`${w.name} marked as finished`);}saveData();renderAll();}
  if(e.target.closest('#deleteWorkspaceButton'))deleteCurrentWorkspace();
  if(e.target.closest('#closeModal'))closeModal();
  if(e.target.closest('#closeWorkspaceModal'))closeWorkspaceModal();
  if(e.target.closest('#closeWorkspaceEditor'))closeWorkspaceEditor();
  if(e.target.closest('#closeDateModal'))closeDateModal();
  if(e.target.closest('#closeResourceModal'))closeResourceModal();
  if(e.target.closest('#closeTaskEditor'))closeTaskEditor();
  if(e.target.closest('#closeSearchModal'))closeSearchModal();
  if(e.target.closest('#menuButton'))document.getElementById('sidebar').classList.toggle('open');
  if(e.target.closest('[data-add-task]'))openModal(e.target.closest('[data-add-task]').dataset.addTask);
  if(e.target.closest('#newNote')){const w=getWs();const note={id:`n${Date.now()}`,title:'Untitled note',date:new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase(),body:''};w.notes.unshift(note);activeNoteId=note.id;saveData();renderDetail();toast('New note page created');}
  if(e.target.closest('#saveNote'))saveActiveNote();
  if(e.target.closest('#deleteNote'))deleteActiveNote();
  if(e.target.closest('[data-edit-task]')){const taskButton=e.target.closest('[data-edit-task]');openTaskEditor(taskButton.dataset.taskWorkspace,taskButton.dataset.editTask);}
  if(e.target.closest('[data-delete-task]')){const taskButton=e.target.closest('[data-delete-task]');deleteTask(taskButton.dataset.taskWorkspace,taskButton.dataset.deleteTask);}
  if(e.target.closest('#uploadImageButton'))document.getElementById('imageUpload').click();
  if(e.target.closest('[data-delete-image]'))deleteResearchImage(e.target.closest('[data-delete-image]').dataset.deleteImage);
  if(e.target.closest('#addDate'))openDateModal();
  if(e.target.closest('[data-delete-date]'))deleteDate(Number(e.target.closest('[data-delete-date]').dataset.deleteDate));
  if(e.target.closest('#addResource'))openResourceModal();
  if(e.target.closest('[data-delete-resource]'))deleteResource(Number(e.target.closest('[data-delete-resource]').dataset.deleteResource));
  if(e.target.closest('#searchButton'))openSearchModal();
  if(e.target.closest('#previousWeek')){plannerWeekOffset-=1;renderWeekPlanner();}
  if(e.target.closest('#nextWeek')){plannerWeekOffset+=1;renderWeekPlanner();}
});
document.addEventListener('change',e=>{if(e.target.matches('[data-task]')){const w=getWs(e.target.dataset.workspace);const task=w.tasks.find(t=>t.id===e.target.dataset.task);task.done=e.target.checked;saveData();renderAll();toast(task.done?'Task marked complete':'Task reopened');} if(e.target.matches('[data-plan-date]')){const {planDate,planField}=e.target.dataset;data.weekPlan[planDate] ||= {morning:'',afternoon:''};data.weekPlan[planDate][planField]=e.target.value;saveData();toast('Week plan saved');} if(e.target.matches('#imageUpload')){const file=e.target.files?.[0];if(file)uploadImageToWorkspace(file);e.target.value='';} if(e.target.matches('#workspaceTemplate'))applyWorkspaceTemplate();});
document.getElementById('quickAddForm').addEventListener('submit',e=>{e.preventDefault();const title=document.getElementById('taskName').value.trim();const workspace=document.getElementById('taskWorkspace').value;const due=document.getElementById('taskDue').value;const focus=document.getElementById('taskFocus').checked;if(!title)return;getWs(workspace).tasks.push({id:`t${Date.now()}`,title,done:false,due:due?fmtDate(due):'No date',dueDate:due||'',focus,priority:document.getElementById('taskPriority').value,tags:parseTags(document.getElementById('taskTags').value),description:'',subtasks:[]});saveData();e.target.reset();closeModal();renderAll();toast('Task added');});
document.getElementById('modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal();});
document.getElementById('workspaceModalBackdrop').addEventListener('click',e=>{if(e.target.id==='workspaceModalBackdrop')closeWorkspaceModal();});
document.getElementById('workspaceForm').addEventListener('submit',e=>{e.preventDefault();createWorkspaceFromForm();});
document.getElementById('workspaceEditorBackdrop').addEventListener('click',e=>{if(e.target.id==='workspaceEditorBackdrop')closeWorkspaceEditor();});
document.getElementById('workspaceEditorForm').addEventListener('submit',e=>{e.preventDefault();saveWorkspaceEditor();});
document.getElementById('dateModalBackdrop').addEventListener('click',e=>{if(e.target.id==='dateModalBackdrop')closeDateModal();});
document.getElementById('dateForm').addEventListener('submit',e=>{e.preventDefault();saveDate();});
document.getElementById('resourceModalBackdrop').addEventListener('click',e=>{if(e.target.id==='resourceModalBackdrop')closeResourceModal();});
document.getElementById('resourceForm').addEventListener('submit',e=>{e.preventDefault();saveResource();});
document.getElementById('taskEditorBackdrop').addEventListener('click',e=>{if(e.target.id==='taskEditorBackdrop')closeTaskEditor();});
document.getElementById('taskEditorForm').addEventListener('submit',e=>{e.preventDefault();saveTaskEditor();});
document.getElementById('searchModalBackdrop').addEventListener('click',e=>{if(e.target.id==='searchModalBackdrop')closeSearchModal();});
document.getElementById('searchInput').addEventListener('input',e=>renderSearchResults(e.target.value));
renderAll();
initializeCloud();
