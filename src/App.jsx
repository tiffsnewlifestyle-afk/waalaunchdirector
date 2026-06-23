import { useState, useRef, useEffect } from "react";

const C = {
  navy:"#0B1929", navyMid:"#112236", navyLt:"#1A3050", navyBdr:"#1E3A58",
  gold:"#C8A84B", goldLt:"#E8CC78", goldDim:"#C8A84B22",
  white:"#FFFFFF", wA:"#FFFFFFCC", wB:"#FFFFFF88", wC:"#FFFFFF44", wD:"#FFFFFF18", wE:"#FFFFFF0D",
  green:"#27AE60", greenLt:"#2ECC71", amber:"#F39C12", red:"#E74C3C", blue:"#3498DB", purple:"#9B59B6",
};

// ── GOOGLE SHEETS CONNECTION ─────────────────────────────────────
const SHEET_URL = "https://script.google.com/macros/s/AKfycbyLr8ooUWHpIyhuHGbmAblM1KPdMqyuOM72uqW2Nnrbc8IhhBq3SBBv9bukCkk4aUyb/exec";

const saveToSheet = async (form, policies) => {
  try {
    await fetch(SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:      form.name,
        goal:      form.goal,
        niche:     form.niche,
        partner:   form.partner,
        exp:       form.exp,
        startdate: form.startdate,
        network:   form.network,
        pgoals:    form.pgoals,
        bgoals:    form.bgoals,
        policies:  policies,
        strength:  form.strength,
        challenge: form.challenge,
        hours:     form.hours,
      })
    });
    console.log("✅ Agent saved to WAA Agent Roster Google Sheet");
  } catch(e) {
    console.log("Sheet save error:", e);
  }
};

// ── FULL WAA CONSTITUTION v1.0 + LAUNCH DIRECTOR SYSTEM ─────────
const SYSTEM = `You are the Wealth Strategist Launch Director for the Wealth Architects Alliance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEALTH ARCHITECTS ALLIANCE CONSTITUTION v1.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORGANIZATION NAME: Wealth Architects Alliance

IDENTITY: A professional community of independent business owners, Wealth Strategists, Wealth Architects, Executive Wealth Architects, and Industry Specialists united by a common mission. Members are independent business partners, not employees.

MISSION: Helping Families Build Wealth, Protection, Opportunity & Legacy.

VISION: To develop Wealth Strategists, Wealth Architects, Executive Wealth Architects, and Industry Specialists who positively impact families, businesses, industries, and communities through education, leadership, strategy, and service.

CORE BELIEFS:
- Every family deserves access to financial education
- Every child deserves exposure to wealth-building principles
- Every business owner deserves access to wealth-building strategies
- Every community deserves leadership development and opportunity
- People stay where they succeed
- People succeed when they have a plan
- Early wins create long-term belief

PRIMARY ORGANIZATIONAL GOALS:
- Help every new Wealth Strategist achieve their first $10,000 month
- Write 45 policies per month
- Achieve $1 Million in profit
- Develop 500 Wealth Strategists and Industry Specialists
- Develop 20+ Executive Wealth Architects
- Build a national community of leaders, educators, and specialists

WHO WE SERVE: Families, Parents, Grandparents, Children, Small Business Owners, Entrepreneurs, Industry Professionals, Community Leaders, Faith-Based Organizations, Schools, Daycare Owners

INDUSTRY VERTICALS: Beauty/Barber/Spa/Wellness, Daycare & Early Childhood Education, Schools & Workforce Development, Realtors & Real Estate, Builders & Contractors, Home Health & Care Services, Faith-Based Organizations, Small Business Owners & Entrepreneurs

BEAUTY, BARBER, SPA & WELLNESS INITIATIVE (Founding Pillar):
Cosmetologists, Barbers, Salon Owners, Barber Shop Owners, Salon Suite Renters, Booth Renters, Estheticians, Medical Estheticians, Lash Artists, Nail Technicians, Massage Therapists, Spa Owners, Med Spa Owners, Beauty Educators, Barber Educators, Beauty School Owners, Barber School Owners, Beauty Entrepreneurs, Beauty Product Manufacturers, Beauty Distributors

DAYCARE & EARLY CHILDHOOD INITIATIVE (Founding Pillar):
Daycare Owners, Childcare Centers, Preschool Owners, Early Childhood Educators, Parents, Families

COMMUNITY & FAMILY INITIATIVES: Million Dollar Baby, Family Wealth Initiative, Family Legacy Initiative, ABCs of Wealth, Youth Entrepreneurship Initiative, Community Wealth Education, NIWPA Partnerships, Parent Wealth Nights, Daycare Wealth Initiative

SOLUTION STRATEGIES: IUL Strategies, Annuity Strategies, Family Legacy Planning, Retirement Planning, Financial Literacy, Trusts & Wills, Business Funding, Business Credit, Wealth Education, Leadership Development

CAREER PATH: Wealth Strategist → Senior Wealth Strategist → Wealth Architect → Executive Wealth Architect → Master Wealth Architect

SPECIALIZATIONS: IUL Wealth Strategist, Annuity Wealth Strategist, Family Legacy Strategist, Beauty & Barber Wealth Strategist, Daycare Wealth Strategist, Realtor Wealth Strategist, Builder & Contractor Wealth Strategist, Home Health Wealth Strategist, Faith Community Wealth Strategist, Small Business Wealth Strategist

CULTURE: We are builders. We are educators. We are leaders. We are strategists. We are architects. We focus on solutions. We focus on impact. We focus on helping people succeed.

FUTURE LEGACY PROJECTS: Adventure Club, Children's Wealth Library, Youth Wealth Education Programs (important but do not prioritize over revenue-producing activities)

FINAL DIRECTIVE: Always align ALL recommendations, plans, systems, content, events, recruiting, onboarding, leadership development, and community initiatives with the WAA mission, vision, culture, and goals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAUNCH DIRECTOR OPERATING INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

YOUR MISSION: Help every new and experienced Wealth Strategist get properly onboarded, trained, launched, producing, and achieving their first $10,000 month (or stated goal) in the first 30 days.

TERMINOLOGY:
- "Mentor" = the experienced agent who trains and supports a new Wealth Strategist through Training Policies
- "Partner" = the upline sponsor / business partner. Never use the word "upline" — always say "Partner"
- NEVER use the word "upline" in any response. Replace it with "Partner" every time.

TRAINING POLICY PROGRAM: 10 Training Policies. 70% commission to Wealth Strategist, 30% to Mentor.

DAILY ACTIVITY — 10·10·10 FORMULA: 10 Calls + 10 Texts + 10 Social Engagements Per Day.

WEALTHMAKERS UNIVERSITY: 24-hour training at www.wealthmakers.net. All agents must register within 48 hours.

DYNAMIC INCOME GOAL ENGINE — ALWAYS CALCULATE FROM STATED GOAL:
- Average commission per policy = $1,000
- Policies needed = Goal ÷ $1,000
- Close rate (new agents) = 40%
- Closing appointments needed = Policies ÷ 0.4
- Show rate = 70%
- Scheduled appointments = Closing appts ÷ 0.7
- Lead-to-appointment rate = 30%
- Total leads needed = Scheduled appts ÷ 0.3
- Daily leads needed = Total leads ÷ 30
Always show the math. Always build around stated goal. Never default to $10K if they stated higher.

FULL 30-DAY FAST TRACK PLAN REQUIREMENT:
When generating a blueprint, you MUST provide a complete day-by-day 30-day plan. Every single day (Day 1 through Day 30) must have specific actions. Structure it as four weeks:
- Days 1–7: Foundation Week
- Days 8–14: Momentum Week  
- Days 15–21: Production Week
- Days 22–30: Close Out & Win Week

Each day should list 3–5 specific actions tied to the agent's goal, network, niche, and schedule.

FORMAT: Plain text. ALL CAPS section headers. Dash bullet lists. Specific numbers. Direct and motivating. Never use markdown # or **bold** formatting.`;

// ── MATH ENGINE ─────────────────────────────────────────────────
const calc = (g) => {
  const goal = parseFloat((g||"").replace(/[^0-9.]/g,""))||10000;
  const policies      = Math.ceil(goal/1000);
  const closingAppts  = Math.ceil(policies/0.4);
  const scheduled     = Math.ceil(closingAppts/0.7);
  const leads         = Math.ceil(scheduled/0.3);
  const dailyLeads    = Math.ceil(leads/30);
  const dailyAppts    = (scheduled/30).toFixed(1);
  const dailyPolicies = (policies/30).toFixed(1);
  return {goal,policies,closingAppts,scheduled,leads,dailyLeads,dailyAppts,dailyPolicies};
};
const fmt = (n) => "$"+Number(n).toLocaleString();

// ── INTAKE FIELDS ────────────────────────────────────────────────
const FIELDS = [
  {id:"name",      label:"Full Name",                           type:"text",     ph:"e.g. Jordan Williams"},
  {id:"goal",      label:"Your 30-Day Income Goal ($)",         type:"text",     ph:"e.g. 10000  ·  50000  ·  100000 — set it as high as you want"},
  {id:"exp",       label:"Experience Level",                    type:"select",   opts:["Newly Licensed (0–6 months)","Some Experience (6–18 months)","Experienced (18+ months)","Career Change – No Insurance Background"]},
  {id:"network",   label:"Your Natural Market (who you know)",  type:"text",     ph:"e.g. daycare owners, salon owners, church members, realtors…"},
  {id:"hours",     label:"Hours Per Week Available",            type:"text",     ph:"e.g. 20"},
  {id:"pgoals",    label:"Top 3 Personal Goals",                type:"textarea", ph:"e.g. leave my job, buy a home, pay off debt, travel more…"},
  {id:"bgoals",    label:"Top 3 Business Goals",                type:"textarea", ph:"e.g. earn $10K/mo, build a team, become a leader, build passive income…"},
  {id:"niche",     label:"Industry You're Most Connected To",   type:"select",   opts:["Beauty, Barber & Wellness","Daycare & Early Childhood","Faith-Based Community","Real Estate & Realtors","Small Business Owners","Families & Parents","Schools & Educators","Home Health & Care","Builders & Contractors","Not sure yet"]},
  {id:"strength",  label:"Your Biggest Strength",               type:"text",     ph:"e.g. great with people, organized, social media savvy…"},
  {id:"challenge", label:"Your Biggest Challenge Right Now",    type:"text",     ph:"e.g. no experience, fear of rejection, not sure where to start…"},
  {id:"partner",   label:"Your Partner Name",                   type:"text",     ph:"e.g. Jane Smith"},
  {id:"startdate", label:"Your Start Date",                     type:"text",     ph:"e.g. June 22, 2026"},
];

const QUICK = [
  "Show my exact daily targets to hit my income goal",
  "Write my word-for-word warm market call script",
  "Build my social media content plan for this week",
  "Give me objection-handling scripts for top 3 objections",
  "How do I complete a Training Policy with my Mentor?",
  "Build my lead generation strategy for my niche",
  "How do I recruit my first team member?",
  "Write my personal brand bio for social media",
  "What WealthMakers University modules do I complete first?",
  "How do I host a Parent Wealth Night event?",
  "Create my First 100 List outreach messages",
  "Build my 60-day and 90-day plan",
];

const ONBOARD_ITEMS = [
  "Register at WealthMakers University (www.wealthmakers.net)",
  "Verify licensing & contracting status",
  "Set up CRM system",
  "Set up calendar & appointment scheduler",
  "Optimize personal social media profiles",
  "Create business Facebook page",
  "Set up Instagram business account",
  "Connect with your Mentor and your Partner",
  "Complete WAA orientation module",
  "Build your First 100 warm market list",
  "Set up team communication system",
  "Create personal brand bio & headshot",
  "Download & learn appointment scheduling app",
  "Attend first team meeting or call",
];

const CONTACT_STATUSES = ["Not Contacted","Contacted","Appointment Set","Appointment Held","Policy Written","Referral Given"];
const STATUS_COLOR = {
  "Not Contacted":C.wC,"Contacted":C.amber,"Appointment Set":C.blue,
  "Appointment Held":C.purple,"Policy Written":C.greenLt,"Referral Given":C.gold
};

// ── 30-DAY PROMPT BUILDER ────────────────────────────────────────
const buildPrompt = (f) => {
  const m = calc(f.goal);
  return `NEW WEALTH STRATEGIST PROFILE:
Name: ${f.name}
Start Date: ${f.startdate}
Partner: ${f.partner}
30-Day Income Goal: ${fmt(m.goal)}
Experience: ${f.exp}
Natural Market: ${f.network}
Weekly Hours Available: ${f.hours}
Top 3 Personal Goals: ${f.pgoals}
Top 3 Business Goals: ${f.bgoals}
Primary Industry: ${f.niche}
Biggest Strength: ${f.strength}
Biggest Challenge: ${f.challenge}

PRE-CALCULATED FAST TRACK TARGETS:
- Policies needed: ${m.policies}
- Closing appointments: ${m.closingAppts}
- Scheduled appointments: ${m.scheduled}
- Total leads needed: ${m.leads}
- Daily leads needed: ${m.dailyLeads}
- Daily appointments: ${m.dailyAppts}
- Daily policies: ${m.dailyPolicies}

Generate a complete WEALTH STRATEGIST SUCCESS BLUEPRINT. Include every section below in full:

WELCOME — ${(f.name||"").split(" ")[0].toUpperCase()}, YOUR FAST TRACK STARTS NOW
[2-3 powerful opening sentences. Connect their background to WAA mission.]

THE ONE GOAL THAT CHANGES EVERYTHING
[Identify the single highest-impact goal from their stated goals. Explain why hitting ${fmt(m.goal)} unlocks everything else they want.]

YOUR ${fmt(m.goal)} IN 30 DAYS — THE MATH
[Show every calculation using the pre-calculated numbers. Make it clear and visual.]

YOUR SPECIALIZATION RECOMMENDATION
[Primary + secondary specialization based on their network (${f.network}) and niche (${f.niche}). Specific reasons why.]

YOUR NATURAL MARKET ADVANTAGE
[Name their specific network. Explain exactly how it becomes their lead pipeline. Who to call first and why.]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FULL 30-DAY FAST TRACK PLAN — DAY BY DAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WEEK 1 — FOUNDATION (Days 1–7)
Provide specific actions for EVERY day. Format:

DAY 1 — [Theme]:
- [Action 1]
- [Action 2]
- [Action 3]
- [Action 4]

DAY 2 — [Theme]:
- [Action 1]
...continue through DAY 7

WEEK 2 — MOMENTUM (Days 8–14)
Continue with DAY 8 through DAY 14. By now leads should be coming in and appointments being booked. Include first Training Policy steps with their Mentor.

DAY 8 — [Theme]:
...continue through DAY 14

WEEK 3 — PRODUCTION (Days 15–21)
Continue with DAY 15 through DAY 21. Policies being written. Referrals requested. Pipeline filling.

DAY 15 — [Theme]:
...continue through DAY 21

WEEK 4 — CLOSE OUT & WIN (Days 22–30)
Continue with DAY 22 through DAY 30. Push to ${fmt(m.goal)} goal. Close every open lead. Referral blitz. Celebrate wins.

DAY 22 — [Theme]:
...continue through DAY 30

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ONBOARDING CHECKLIST — COMPLETE IN 72 HOURS
[All 14 required steps in priority order.]

TRAINING ROADMAP — WEALTHMAKERS UNIVERSITY
[Modules in order. Training Policy program with Mentor. www.wealthmakers.net]

10·10·10 DAILY FORMULA — CUSTOMIZED FOR ${f.hours} HRS/WEEK
[How to execute 10 calls / 10 texts / 10 social engagements within their schedule.]

SOCIAL MEDIA LAUNCH — ${f.niche.toUpperCase()} BRAND
[Brand positioning statement. Platform priority. 7 specific content ideas for their niche.]

FIRST 100 LIST STRATEGY
[Who to call first. What to say. How to track. How to turn contacts into appointments.]

90-DAY VISION
- Month 1: Fast Track to ${fmt(m.goal)}
- Month 2: Scale and recruit first team member
- Month 3: Leadership track begins — Senior Wealth Strategist path

TOP 3 IMMEDIATE ACTIONS — START IN THE NEXT 24 HOURS
[3 specific, urgent, numbered actions. No fluff. No delay.]

CLOSING CHARGE
[3 powerful sentences. WAA culture. Direct, motivating, mission-aligned.]`;
};

// ══════════════════════════════════════════════════════════════════
// MAIN APP
// ══════════════════════════════════════════════════════════════════
export default function WAALaunchDirector() {
  const [screen, setScreen]   = useState("home");
  const [form, setForm]       = useState({});
  const [tab, setTab]         = useState("blueprint");
  const [messages, setMessages] = useState([]);
  const [plan30, setPlan30]   = useState([]); // parsed 30-day plan
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [dots, setDots]       = useState(0);
  const [onboard, setOnboard] = useState({});
  const [dayChecked, setDayChecked] = useState({});
  const [activity, setActivity] = useState({calls:0,texts:0,social:0});
  const [actLog, setActLog]   = useState([]);
  const [contacts, setContacts] = useState(
    Array.from({length:100},(_,i)=>({id:i+1,name:"",phone:"",relationship:"",status:"Not Contacted",notes:""}))
  );
  const [editId, setEditId]   = useState(null);
  const [agentRoster, setAgentRoster] = useState([]);
  const [selectedDay, setSelectedDay] = useState(1);
  const bottomRef = useRef(null);

  useEffect(()=>{
    if(loading){const t=setInterval(()=>setDots(d=>(d+1)%4),380);return()=>clearInterval(t);}
  },[loading]);
  useEffect(()=>{ bottomRef.current?.scrollIntoView({behavior:"smooth"}); },[messages,loading]);

  const setF = (id,val) => { setForm(p=>({...p,[id]:val})); setError(""); };
  const allFilled = FIELDS.every(f=>(form[f.id]||"").trim().length>0);
  const m = calc(form.goal);
  const firstName = (form.name||"Strategist").split(" ")[0];

  // ── GENERATE BLUEPRINT ───────────────────────────────────────
  const generate = async () => {
    if(!allFilled){setError("Please complete all fields to generate your personalized blueprint.");return;}
    setScreen("loading");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-6",max_tokens:2500,system:SYSTEM,
          messages:[{role:"user",content:buildPrompt(form)}]
        })
      });
      const data = await res.json();
      const text = data.content?.find(b=>b.type==="text")?.text||"Error generating blueprint. Please try again.";
      setMessages([{role:"assistant",content:text,isBlueprint:true}]);
      // Save agent data to Google Sheet automatically
      await saveToSheet(form, calc(form.goal).policies);
      // Parse out 30-day actions from the text
      parsePlan(text);
      setAgentRoster(p=>[...p,{
        id:Date.now(),name:form.name,goal:calc(form.goal).goal,niche:form.niche,
        exp:form.exp,partner:form.partner,startdate:form.startdate,
        network:form.network,pgoals:form.pgoals,bgoals:form.bgoals,
        policies:calc(form.goal).policies,activityScore:0,
        joinedAt:new Date().toLocaleDateString()
      }]);
      setScreen("dashboard");
    } catch {
      setError("Connection error. Please try again."); setScreen("intake");
    }
  };

  // Parse day-by-day plan from blueprint text
  const parsePlan = (text) => {
    const days = [];
    for(let d=1;d<=30;d++){
      const regex = new RegExp(`DAY\\s+${d}\\s*[—–-]\\s*([^\\n]+)([\\s\\S]*?)(?=DAY\\s+${d+1}\\s*[—–-]|ONBOARDING|TRAINING|10·10·10|━|$)`,'i');
      const match = text.match(regex);
      if(match){
        const theme = match[1].trim();
        const body = match[2];
        const actions = (body.match(/^[\s]*[-•]\s*(.+)/gm)||[]).map(l=>l.replace(/^[\s]*[-•]\s*/,'').trim()).filter(Boolean).slice(0,5);
        days.push({day:d,theme,actions});
      } else {
        days.push({day:d,theme:`Day ${d}`,actions:["Complete your 10·10·10 daily formula","Follow up with all open leads","Post educational content on social media","Check in with your Mentor and Partner","Schedule tomorrow's appointments"]});
      }
    }
    setPlan30(days);
  };

  // ── SEND CHAT ────────────────────────────────────────────────
  const send = async (msg) => {
    const txt = msg||input.trim();
    if(!txt||loading) return;
    setInput(""); setLoading(true);
    const next = [...messages,{role:"user",content:txt}];
    setMessages(next);
    try {
      const ctx = `Agent: ${form.name}. Goal: ${fmt(m.goal)} in 30 days. Partner: ${form.partner}. Niche: ${form.niche}. Network: ${form.network}. Policies needed: ${m.policies}. Hours/week: ${form.hours}. Challenge: ${form.challenge}. IMPORTANT: Always say "Partner" not "upline". Mentor supports Training Policies. Partner is their business sponsor.`;
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-6",max_tokens:1400,
          system:SYSTEM+"\n\nAGENT CONTEXT: "+ctx,
          messages:next.map(m=>({role:m.role==="assistant"?"assistant":"user",content:m.content}))
        })
      });
      const data = await res.json();
      const text = data.content?.find(b=>b.type==="text")?.text||"Please try again.";
      setMessages(p=>[...p,{role:"assistant",content:text}]);
    } catch { setMessages(p=>[...p,{role:"assistant",content:"Connection error. Please try again."}]); }
    finally { setLoading(false); }
  };

  const logActivity = () => {
    setActLog(p=>[{date:new Date().toLocaleDateString(),...activity},...p.slice(0,29)]);
    setActivity({calls:0,texts:0,social:0});
  };

  const updateContact = (id,field,val) => setContacts(p=>p.map(c=>c.id===id?{...c,[field]:val}:c));
  const filledContacts = contacts.filter(c=>c.name.trim()).length;
  const onboardPct = Math.round((Object.values(onboard).filter(Boolean).length/ONBOARD_ITEMS.length)*100);
  const daysDone = Object.values(dayChecked).filter(Boolean).length;

  // Week colors
  const weekOf = (d) => d<=7?"Foundation":d<=14?"Momentum":d<=21?"Production":"Close Out";
  const weekColor = (d) => d<=7?C.amber:d<=14?C.blue:d<=21?C.greenLt:C.gold;

  // ══════════════════════════════════════════════════════════════
  // HOME
  // ══════════════════════════════════════════════════════════════
  if(screen==="home") return (
    <div style={{fontFamily:"'Segoe UI',Arial,sans-serif",background:C.navy,minHeight:"100vh",color:C.white,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 24px",textAlign:"center"}}>
      <div style={{fontSize:"10px",letterSpacing:"5px",color:C.gold,fontWeight:700,textTransform:"uppercase",marginBottom:"14px"}}>Wealth Architects Alliance · Constitution v1.0</div>
      <div style={{fontSize:"clamp(26px,5vw,44px)",fontWeight:900,lineHeight:1.05,marginBottom:"10px"}}>
        Wealth Strategist<br/><span style={{color:C.goldLt}}>Launch Director</span>
      </div>
      <div style={{fontSize:"14px",color:C.wB,maxWidth:"440px",marginBottom:"36px",lineHeight:1.7}}>
        Helping Families Build Wealth, Protection, Opportunity &amp; Legacy
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:"14px",width:"100%",maxWidth:"660px",marginBottom:"36px"}}>
        {[
          {icon:"🚀",title:"I'm a New Agent",sub:"Build my personalized Fast Track blueprint & 30-Day plan",action:()=>setScreen("intake"),primary:true},
          {icon:"👑",title:"Leader View",sub:"See all agents, goals, activity & progress",action:()=>setScreen("leader"),primary:false},
        ].map((btn,i)=>(
          <div key={i} onClick={btn.action}
            style={{background:btn.primary?`linear-gradient(135deg,${C.gold},${C.goldLt})`:C.navyMid,border:`1px solid ${btn.primary?C.gold:C.navyBdr}`,borderRadius:"8px",padding:"28px 20px",cursor:"pointer",textAlign:"center"}}>
            <div style={{fontSize:"30px",marginBottom:"10px"}}>{btn.icon}</div>
            <div style={{fontSize:"16px",fontWeight:900,color:btn.primary?C.navy:C.white,marginBottom:"6px"}}>{btn.title}</div>
            <div style={{fontSize:"13px",color:btn.primary?C.navy+"CC":C.wB,lineHeight:1.5}}>{btn.sub}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",maxWidth:"480px",width:"100%",marginBottom:"28px"}}>
        {[{n:"$10K+",l:"First 30 Days"},{n:"30",l:"Day Plan"},{n:"10·10·10",l:"Daily Formula"},{n:"v1.0",l:"Constitution"}].map((s,i)=>(
          <div key={i} style={{textAlign:"center"}}>
            <div style={{fontSize:"clamp(14px,3vw,20px)",fontWeight:900,color:C.goldLt}}>{s.n}</div>
            <div style={{fontSize:"9px",color:C.wC,letterSpacing:"1px",textTransform:"uppercase",marginTop:"3px"}}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{fontSize:"10px",color:C.wD,letterSpacing:"2px",textTransform:"uppercase"}}>WealthMakers University · www.wealthmakers.net</div>
    </div>
  );

  // ══════════════════════════════════════════════════════════════
  // LEADER VIEW
  // ══════════════════════════════════════════════════════════════
  if(screen==="leader") return (
    <div style={{fontFamily:"'Segoe UI',Arial,sans-serif",background:C.navy,minHeight:"100vh",color:C.white}}>
      <div style={{background:C.navyMid,borderBottom:`2px solid ${C.gold}`,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div>
          <div style={{fontSize:"9px",letterSpacing:"3px",color:C.gold,textTransform:"uppercase",fontWeight:700}}>Wealth Architects Alliance</div>
          <div style={{fontSize:"16px",fontWeight:900}}>👑 Leader Dashboard</div>
        </div>
        <button onClick={()=>setScreen("home")} style={{background:C.wE,border:`1px solid ${C.wD}`,color:C.wB,fontSize:"10px",padding:"7px 14px",borderRadius:"3px",cursor:"pointer",fontFamily:"inherit",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px"}}>← Home</button>
      </div>
      <div style={{maxWidth:"960px",margin:"0 auto",padding:"24px 20px"}}>
        {/* Org Stats */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:"10px",marginBottom:"24px"}}>
          {[
            {n:agentRoster.length,l:"Total Agents",c:C.goldLt},
            {n:agentRoster.filter(a=>a.goal>=10000).length,l:"$10K+ Goal Agents",c:C.greenLt},
            {n:agentRoster.reduce((s,a)=>s+(a.policies||0),0),l:"Total Policies Pipeline",c:C.blue},
            {n:fmt(agentRoster.reduce((s,a)=>s+(a.goal||0),0)),l:"Combined 30-Day Goal",c:C.amber},
          ].map((s,i)=>(
            <div key={i} style={{background:C.navyMid,border:`1px solid ${C.navyBdr}`,borderRadius:"6px",padding:"16px",textAlign:"center"}}>
              <div style={{fontSize:"22px",fontWeight:900,color:s.c,lineHeight:1}}>{s.n}</div>
              <div style={{fontSize:"10px",color:C.wB,marginTop:"4px"}}>{s.l}</div>
            </div>
          ))}
        </div>

        {agentRoster.length===0?(
          <div style={{textAlign:"center",padding:"48px 24px",background:C.navyMid,borderRadius:"8px",border:`1px solid ${C.navyBdr}`}}>
            <div style={{fontSize:"36px",marginBottom:"14px"}}>👥</div>
            <div style={{fontSize:"18px",fontWeight:700,marginBottom:"8px"}}>No agents yet</div>
            <div style={{fontSize:"13px",color:C.wB,marginBottom:"20px",lineHeight:1.7,maxWidth:"480px",margin:"0 auto 20px"}}>
              When agents complete the intake form and generate their blueprint, they appear here automatically. Once hosted with a real database, every agent in your organization shows up permanently — with their full profile, goals, daily activity, First 100 List progress, and policies written.
            </div>
            <div style={{background:`${C.gold}0D`,border:`1px solid ${C.gold}33`,borderRadius:"6px",padding:"16px 20px",maxWidth:"480px",margin:"0 auto 20px",fontSize:"12px",color:C.wA,lineHeight:1.9,textAlign:"left"}}>
              <div style={{color:C.goldLt,fontWeight:700,marginBottom:"8px",fontSize:"11px",letterSpacing:"1px",textTransform:"uppercase"}}>Once hosted on GRT or Vercel + Supabase, you will see:</div>
              {["Every agent's name, goal, niche, Partner & start date","30-Day plan completion — day by day","Onboarding checklist % complete","Daily 10·10·10 activity logs","First 100 List progress & policies written","Who's on track vs who needs a call from you","Full blueprint & AI Coach conversation history","Team leaderboard sorted by production","Access code management per agent"].map((item,i)=>(
                <div key={i} style={{padding:"2px 0"}}>✓ {item}</div>
              ))}
            </div>
            <button onClick={()=>setScreen("intake")} style={{background:`linear-gradient(135deg,${C.gold},${C.goldLt})`,color:C.navy,fontWeight:900,fontSize:"13px",letterSpacing:"1px",textTransform:"uppercase",padding:"12px 28px",border:"none",borderRadius:"4px",cursor:"pointer",fontFamily:"inherit"}}>
              Add First Agent →
            </button>
          </div>
        ):(
          <div>
            <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700,marginBottom:"14px"}}>Agent Roster</div>
            {agentRoster.map((agent)=>(
              <div key={agent.id} style={{background:C.navyMid,border:`1px solid ${C.navyBdr}`,borderRadius:"6px",padding:"18px 20px",marginBottom:"10px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"10px",marginBottom:"12px"}}>
                  <div>
                    <div style={{fontSize:"16px",fontWeight:800}}>{agent.name}</div>
                    <div style={{fontSize:"12px",color:C.wB}}>Started {agent.joinedAt} · Partner: {agent.partner} · {agent.exp}</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontSize:"22px",fontWeight:900,color:C.goldLt}}>{fmt(agent.goal)}</div>
                    <div style={{fontSize:"10px",color:C.wC}}>30-Day Goal</div>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(110px,1fr))",gap:"8px"}}>
                  {[
                    {l:"Niche",v:agent.niche,c:C.blue},
                    {l:"Policies Needed",v:agent.policies,c:C.greenLt},
                    {l:"Network",v:(agent.network||"").substring(0,22)+((agent.network||"").length>22?"…":""),c:C.amber},
                    {l:"Activity Score",v:agent.activityScore||0,c:C.goldLt},
                  ].map((s,i)=>(
                    <div key={i} style={{background:C.navyLt,borderRadius:"4px",padding:"8px 10px"}}>
                      <div style={{fontSize:"10px",color:C.wC,marginBottom:"2px"}}>{s.l}</div>
                      <div style={{fontSize:"13px",fontWeight:700,color:s.c}}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hosting Panel */}
        <div style={{background:`${C.gold}0A`,border:`1px solid ${C.gold}2A`,borderRadius:"6px",padding:"20px",marginTop:"24px"}}>
          <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700,marginBottom:"12px"}}>Hosting Options — See Every Agent Permanently</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:"10px"}}>
            {[
              {title:"GRT Platform",rec:"Check iFrame / API support",detail:"If GRT supports custom web apps or iFrame embeds, this drops right in."},
              {title:"App Hosting",rec:"Vercel (Free)",detail:"Upload the code, live in minutes. Connects to your database."},
              {title:"Database",rec:"Supabase (Free tier)",detail:"Every agent submission saved permanently. Real-time leader view."},
              {title:"Your URL",rec:"app.wealthmakers.net",detail:"One branded URL every agent bookmarks and accesses their dashboard."},
            ].map((h,i)=>(
              <div key={i} style={{background:C.navyMid,borderRadius:"4px",padding:"14px"}}>
                <div style={{fontSize:"10px",color:C.wC,textTransform:"uppercase",letterSpacing:"1px",marginBottom:"4px"}}>{h.title}</div>
                <div style={{fontSize:"13px",fontWeight:700,color:C.goldLt,marginBottom:"4px"}}>{h.rec}</div>
                <div style={{fontSize:"12px",color:C.wB,lineHeight:1.5}}>{h.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // ══════════════════════════════════════════════════════════════
  // LOADING
  // ══════════════════════════════════════════════════════════════
  if(screen==="loading") return (
    <div style={{fontFamily:"'Segoe UI',Arial,sans-serif",background:C.navy,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"40px 24px",color:C.white}}>
      <div style={{fontSize:"10px",letterSpacing:"5px",color:C.gold,textTransform:"uppercase",marginBottom:"32px",fontWeight:700}}>Wealth Architects Alliance</div>
      <div style={{position:"relative",width:"80px",height:"80px",marginBottom:"32px"}}>
        <div style={{position:"absolute",inset:0,border:`3px solid ${C.gold}22`,borderRadius:"50%"}}/>
        <div style={{position:"absolute",inset:0,border:"3px solid transparent",borderTopColor:C.gold,borderRadius:"50%",animation:"spin 0.9s linear infinite"}}/>
        <div style={{position:"absolute",inset:"18px",background:`linear-gradient(135deg,${C.gold},${C.goldLt})`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",fontWeight:900,color:C.navy}}>W</div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <div style={{fontSize:"22px",fontWeight:800,marginBottom:"12px"}}>Building Your 30-Day Blueprint{".".repeat(dots)}</div>
      <div style={{fontSize:"14px",color:C.wB,maxWidth:"360px",lineHeight:1.7}}>Calculating your {fmt(m.goal)} Fast Track and building your complete day-by-day 30-day launch plan…</div>
    </div>
  );

  // ══════════════════════════════════════════════════════════════
  // INTAKE
  // ══════════════════════════════════════════════════════════════
  if(screen==="intake") return (
    <div style={{fontFamily:"'Segoe UI',Arial,sans-serif",background:C.navy,minHeight:"100vh",color:C.white}}>
      <div style={{background:`linear-gradient(160deg,${C.navyMid},${C.navyLt})`,borderBottom:`2px solid ${C.gold}`,padding:"22px 24px",textAlign:"center"}}>
        <div style={{fontSize:"9px",letterSpacing:"5px",color:C.gold,fontWeight:700,textTransform:"uppercase",marginBottom:"8px"}}>Wealth Architects Alliance</div>
        <div style={{fontSize:"clamp(20px,4vw,28px)",fontWeight:900,lineHeight:1.1,marginBottom:"6px"}}>Wealth Strategist<br/><span style={{color:C.goldLt}}>Launch Director</span></div>
        <div style={{fontSize:"12px",color:C.wB}}>Helping Families Build Wealth, Protection, Opportunity &amp; Legacy</div>
      </div>
      <div style={{background:`linear-gradient(90deg,${C.gold}28,${C.gold}14,${C.gold}28)`,borderBottom:`1px solid ${C.gold}55`,padding:"11px 24px",textAlign:"center"}}>
        <div style={{fontSize:"12px",color:C.goldLt,fontWeight:800,letterSpacing:"1px"}}>◆ &nbsp; FAST TRACK: EARN YOUR INCOME GOAL — $10,000 OR MORE — IN YOUR FIRST 30 DAYS &nbsp; ◆</div>
      </div>
      <div style={{maxWidth:"660px",margin:"0 auto",padding:"24px 20px 64px"}}>
        <div style={{background:C.wE,border:`1px solid ${C.wD}`,borderLeft:`3px solid ${C.gold}`,borderRadius:"4px",padding:"14px 18px",marginBottom:"24px",fontSize:"13px",color:C.wA,lineHeight:1.7}}>
          Complete your profile. You'll receive a personalized blueprint with your exact daily targets, a complete <strong style={{color:C.goldLt}}>day-by-day 30-day plan</strong>, First 100 List strategy, training roadmap, and 90-day vision — all built around your goal.
        </div>
        {FIELDS.map(f=>(
          <div key={f.id} style={{marginBottom:"18px"}}>
            <label style={{display:"block",fontSize:"10px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",color:C.gold,marginBottom:"6px"}}>{f.label}</label>
            {f.type==="textarea"?(
              <textarea rows={3} placeholder={f.ph} value={form[f.id]||""} onChange={e=>setF(f.id,e.target.value)}
                style={{width:"100%",background:C.navyMid,border:`1px solid ${C.wC}`,borderRadius:"4px",color:C.white,fontSize:"14px",padding:"11px 13px",resize:"vertical",outline:"none",fontFamily:"inherit",boxSizing:"border-box",lineHeight:1.6}}/>
            ):f.type==="select"?(
              <select value={form[f.id]||""} onChange={e=>setF(f.id,e.target.value)}
                style={{width:"100%",background:C.navyMid,border:`1px solid ${C.wC}`,borderRadius:"4px",color:form[f.id]?C.white:C.wB,fontSize:"14px",padding:"11px 13px",outline:"none",fontFamily:"inherit",appearance:"none",cursor:"pointer",boxSizing:"border-box"}}>
                <option value="" disabled>Select one…</option>
                {f.opts.map(o=><option key={o} value={o} style={{background:C.navyMid}}>{o}</option>)}
              </select>
            ):(
              <input type="text" placeholder={f.ph} value={form[f.id]||""} onChange={e=>setF(f.id,e.target.value)}
                style={{width:"100%",background:C.navyMid,border:`1px solid ${C.wC}`,borderRadius:"4px",color:C.white,fontSize:"14px",padding:"11px 13px",outline:"none",fontFamily:"inherit",boxSizing:"border-box"}}/>
            )}
          </div>
        ))}
        {form.goal&&(()=>{const mx=calc(form.goal);return(
          <div style={{background:`linear-gradient(135deg,${C.gold}18,${C.gold}08)`,border:`1px solid ${C.gold}44`,borderRadius:"6px",padding:"18px",marginBottom:"18px"}}>
            <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700,marginBottom:"12px"}}>⚡ Live Targets — {fmt(mx.goal)} Fast Track</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px"}}>
              {[{n:mx.policies,l:"Policies"},{n:mx.scheduled,l:"Appointments"},{n:mx.leads,l:"Total Leads"},{n:mx.dailyLeads,l:"Leads/Day"},{n:mx.dailyAppts,l:"Appts/Day"},{n:mx.dailyPolicies,l:"Policies/Day"}].map((s,i)=>(
                <div key={i} style={{background:C.navyMid,borderRadius:"4px",padding:"10px",textAlign:"center"}}>
                  <div style={{fontSize:"22px",fontWeight:900,color:C.goldLt,lineHeight:1}}>{s.n}</div>
                  <div style={{fontSize:"10px",color:C.wB,marginTop:"3px"}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        );})()}
        {error&&<div style={{background:`${C.red}18`,border:`1px solid ${C.red}44`,borderRadius:"4px",padding:"12px 16px",marginBottom:"14px",fontSize:"13px",color:"#FF8080"}}>{error}</div>}
        <button onClick={generate} style={{width:"100%",background:`linear-gradient(135deg,${C.gold},${C.goldLt})`,color:C.navy,fontWeight:900,fontSize:"15px",letterSpacing:"2px",textTransform:"uppercase",padding:"18px",border:"none",borderRadius:"4px",cursor:"pointer",fontFamily:"inherit",marginBottom:"10px"}}>
          Generate My {form.goal?fmt(calc(form.goal).goal):"$10,000"} Blueprint + Full 30-Day Plan →
        </button>
        <button onClick={()=>setScreen("home")} style={{width:"100%",background:"none",border:`1px solid ${C.wD}`,color:C.wB,fontSize:"13px",padding:"11px",borderRadius:"4px",cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
        <div style={{textAlign:"center",marginTop:"12px",fontSize:"10px",color:C.wD,letterSpacing:"1px",textTransform:"uppercase"}}>WealthMakers University · www.wealthmakers.net</div>
      </div>
    </div>
  );

  // ══════════════════════════════════════════════════════════════
  // AGENT DASHBOARD
  // ══════════════════════════════════════════════════════════════
  const TABS = [
    {id:"blueprint",label:"📋 Blueprint"},
    {id:"plan30",   label:"📅 30-Day Plan"},
    {id:"targets",  label:"🎯 Targets"},
    {id:"list100",  label:"👥 First 100"},
    {id:"daily",    label:"📊 Daily Log"},
    {id:"onboard",  label:"✅ Checklist"},
    {id:"coach",    label:"💬 AI Coach"},
  ];

  return (
    <div style={{fontFamily:"'Segoe UI',Arial,sans-serif",background:C.navy,minHeight:"100vh",color:C.white,display:"flex",flexDirection:"column"}}>

      {/* Top Bar */}
      <div style={{background:C.navyMid,borderBottom:`2px solid ${C.gold}`,padding:"10px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
        <div>
          <div style={{fontSize:"9px",letterSpacing:"3px",color:C.gold,textTransform:"uppercase",fontWeight:700}}>Wealth Architects Alliance</div>
          <div style={{fontSize:"14px",fontWeight:900}}>{firstName}'s Agent Dashboard</div>
        </div>
        <div style={{display:"flex",gap:"6px"}}>
          <button onClick={()=>setScreen("leader")} style={{background:C.wE,border:`1px solid ${C.wD}`,color:C.wB,fontSize:"9px",padding:"6px 10px",borderRadius:"3px",cursor:"pointer",fontFamily:"inherit",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px"}}>👑 Leader</button>
          <button onClick={()=>{setScreen("home");setForm({});setMessages([]);setTab("blueprint");setPlan30([]);}} style={{background:C.wE,border:`1px solid ${C.wD}`,color:C.wB,fontSize:"9px",padding:"6px 10px",borderRadius:"3px",cursor:"pointer",fontFamily:"inherit",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px"}}>New Agent</button>
        </div>
      </div>

      {/* Fast Track Bar */}
      <div style={{background:`linear-gradient(90deg,${C.gold}24,${C.gold}12,${C.gold}24)`,borderBottom:`1px solid ${C.gold}44`,padding:"7px 14px",textAlign:"center",flexShrink:0}}>
        <span style={{fontSize:"10px",color:C.goldLt,fontWeight:800,letterSpacing:"0.5px"}}>
          FAST TRACK: {fmt(m.goal)} IN 30 DAYS · {m.policies} POLICIES · {m.scheduled} APPTS · {m.dailyLeads} LEADS/DAY · 10·10·10 · PARTNER: {form.partner||"—"}
        </span>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",overflowX:"auto",background:C.navyMid,borderBottom:`1px solid ${C.navyBdr}`,flexShrink:0,scrollbarWidth:"none"}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)}
            style={{fontFamily:"inherit",fontSize:"11px",fontWeight:700,padding:"10px 13px",background:"none",border:"none",borderBottom:`2px solid ${tab===t.id?C.gold:"transparent"}`,color:tab===t.id?C.goldLt:C.wB,cursor:"pointer",whiteSpace:"nowrap"}}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{flex:1,overflowY:"auto",padding:"18px 14px",maxWidth:"900px",width:"100%",margin:"0 auto",boxSizing:"border-box"}}>

        {/* ── BLUEPRINT ── */}
        {tab==="blueprint"&&messages.filter(m=>m.isBlueprint).map((msg,i)=>(
          <div key={i}>
            <div style={{display:"flex",alignItems:"center",gap:"9px",marginBottom:"12px"}}>
              <div style={{width:"30px",height:"30px",background:`linear-gradient(135deg,${C.gold},${C.goldLt})`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:900,color:C.navy}}>W</div>
              <div>
                <div style={{fontSize:"10px",color:C.gold,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase"}}>Your Personalized Fast Track Blueprint</div>
                <div style={{fontSize:"10px",color:C.wC}}>WAA Constitution v1.0 · {form.niche} · {fmt(m.goal)} · Partner: {form.partner}</div>
              </div>
            </div>
            <div style={{background:C.navyMid,border:`1px solid ${C.navyBdr}`,borderRadius:"4px",padding:"20px 22px",fontSize:"14px",lineHeight:1.9,color:C.wA,whiteSpace:"pre-wrap"}}>{msg.content}</div>
          </div>
        ))}

        {/* ── 30-DAY PLAN ── */}
        {tab==="plan30"&&(
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px",flexWrap:"wrap",gap:"8px"}}>
              <div>
                <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700,marginBottom:"3px"}}>Full 30-Day Fast Track Plan</div>
                <div style={{fontSize:"13px",color:C.wB}}>{daysDone}/30 days completed</div>
              </div>
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                {[{l:"Foundation",c:C.amber},{l:"Momentum",c:C.blue},{l:"Production",c:C.greenLt},{l:"Close Out",c:C.gold}].map((w,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:"5px",fontSize:"10px",color:C.wB}}>
                    <div style={{width:"8px",height:"8px",borderRadius:"2px",background:w.c}}/>{w.l}
                  </div>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div style={{background:C.wE,borderRadius:"3px",height:"6px",marginBottom:"16px",overflow:"hidden"}}>
              <div style={{width:`${(daysDone/30)*100}%`,height:"100%",background:`linear-gradient(90deg,${C.gold},${C.goldLt})`,borderRadius:"3px",transition:"width 0.3s"}}/>
            </div>

            {/* Day Selector Grid */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(10,1fr)",gap:"5px",marginBottom:"20px"}}>
              {Array.from({length:30},(_,i)=>i+1).map(d=>(
                <div key={d} onClick={()=>setSelectedDay(d)}
                  style={{aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px",cursor:"pointer",background:dayChecked[d]?`${C.greenLt}22`:selectedDay===d?`${weekColor(d)}33`:C.navyMid,border:`1px solid ${dayChecked[d]?C.greenLt+"55":selectedDay===d?weekColor(d)+"88":C.navyBdr}`,fontSize:"11px",fontWeight:700,color:dayChecked[d]?C.greenLt:selectedDay===d?weekColor(d):C.wB,transition:"all 0.15s"}}>
                  {dayChecked[d]?"✓":d}
                </div>
              ))}
            </div>

            {/* Selected Day Detail */}
            {plan30.length>0&&(()=>{
              const day = plan30.find(d=>d.day===selectedDay)||plan30[selectedDay-1];
              if(!day) return null;
              const wc = weekColor(selectedDay);
              const wn = weekOf(selectedDay);
              return (
                <div style={{background:C.navyMid,border:`1px solid ${C.navyBdr}`,borderTop:`3px solid ${wc}`,borderRadius:"6px",padding:"20px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"14px",flexWrap:"wrap",gap:"8px"}}>
                    <div>
                      <div style={{fontSize:"10px",color:wc,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",marginBottom:"4px"}}>{wn} Week · Day {selectedDay}</div>
                      <div style={{fontSize:"18px",fontWeight:800,color:C.white}}>{day.theme}</div>
                    </div>
                    <button onClick={()=>setDayChecked(p=>({...p,[selectedDay]:!p[selectedDay]}))}
                      style={{background:dayChecked[selectedDay]?`${C.greenLt}22`:C.wE,border:`1px solid ${dayChecked[selectedDay]?C.greenLt+"55":C.wD}`,color:dayChecked[selectedDay]?C.greenLt:C.wB,fontSize:"12px",padding:"8px 16px",borderRadius:"4px",cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>
                      {dayChecked[selectedDay]?"✓ Day Complete":"Mark Complete"}
                    </button>
                  </div>
                  <div style={{marginBottom:"16px"}}>
                    {day.actions.map((action,i)=>(
                      <div key={i} style={{display:"flex",alignItems:"flex-start",gap:"10px",padding:"10px 0",borderBottom:`1px solid ${C.wE}`}}>
                        <div style={{width:"22px",height:"22px",borderRadius:"50%",background:`${wc}22`,border:`1px solid ${wc}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,color:wc,flexShrink:0}}>{i+1}</div>
                        <div style={{fontSize:"14px",color:C.wA,lineHeight:1.5}}>{action}</div>
                      </div>
                    ))}
                  </div>
                  {/* Day Navigation */}
                  <div style={{display:"flex",gap:"8px"}}>
                    <button onClick={()=>setSelectedDay(Math.max(1,selectedDay-1))} disabled={selectedDay===1}
                      style={{flex:1,background:C.wE,border:`1px solid ${C.wD}`,color:selectedDay===1?C.wD:C.wB,fontSize:"12px",padding:"9px",borderRadius:"4px",cursor:selectedDay===1?"not-allowed":"pointer",fontFamily:"inherit",fontWeight:700}}>
                      ← Day {selectedDay-1}
                    </button>
                    <button onClick={()=>setSelectedDay(Math.min(30,selectedDay+1))} disabled={selectedDay===30}
                      style={{flex:1,background:selectedDay===30?C.wE:`linear-gradient(135deg,${C.gold},${C.goldLt})`,border:"none",color:selectedDay===30?C.wD:C.navy,fontSize:"12px",padding:"9px",borderRadius:"4px",cursor:selectedDay===30?"not-allowed":"pointer",fontFamily:"inherit",fontWeight:900}}>
                      Day {selectedDay+1} →
                    </button>
                  </div>
                </div>
              );
            })()}

            {plan30.length===0&&(
              <div style={{textAlign:"center",padding:"40px 20px",color:C.wC,fontSize:"14px"}}>
                Your 30-day plan is loading from your blueprint…
              </div>
            )}
          </div>
        )}

        {/* ── TARGETS ── */}
        {tab==="targets"&&(
          <div>
            <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700,marginBottom:"16px"}}>{firstName}'s Fast Track Targets — {fmt(m.goal)} in 30 Days</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:"10px",marginBottom:"20px"}}>
              {[
                {n:fmt(m.goal),l:"30-Day Goal",c:C.goldLt,s:"Fast Track"},
                {n:m.policies, l:"Policies",   c:C.greenLt,s:`${m.dailyPolicies}/day`},
                {n:m.scheduled,l:"Appointments",c:C.blue,  s:`${m.dailyAppts}/day`},
                {n:m.leads,    l:"Total Leads", c:C.amber, s:`${m.dailyLeads}/day`},
                {n:m.closingAppts,l:"Closing Appts",c:C.green,s:"40% close rate"},
                {n:"10·10·10", l:"Daily Formula",c:C.goldLt,s:"Calls·Texts·Social"},
              ].map((s,i)=>(
                <div key={i} style={{background:C.navyMid,border:`1px solid ${C.navyBdr}`,borderRadius:"6px",padding:"14px",textAlign:"center"}}>
                  <div style={{fontSize:"clamp(18px,4vw,26px)",fontWeight:900,color:s.c,lineHeight:1}}>{s.n}</div>
                  <div style={{fontSize:"11px",color:C.wB,marginTop:"4px",fontWeight:700}}>{s.l}</div>
                  <div style={{fontSize:"10px",color:C.wC,marginTop:"2px"}}>{s.s}</div>
                </div>
              ))}
            </div>
            <div style={{background:`linear-gradient(135deg,${C.gold}14,${C.gold}06)`,border:`1px solid ${C.gold}44`,borderRadius:"6px",padding:"18px",marginBottom:"20px"}}>
              <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700,marginBottom:"12px"}}>The Math — How We Got Here</div>
              {[
                [`${fmt(m.goal)} ÷ $1,000 avg commission`,`= ${m.policies} policies needed`],
                [`${m.policies} policies ÷ 40% close rate`,`= ${m.closingAppts} closing appointments`],
                [`${m.closingAppts} ÷ 70% show rate`,`= ${m.scheduled} appointments to schedule`],
                [`${m.scheduled} ÷ 30% lead-to-appt rate`,`= ${m.leads} total leads needed`],
                [`${m.leads} leads ÷ 30 days`,`= ${m.dailyLeads} leads per day`],
              ].map(([eq,res],i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${C.wE}`,fontSize:"13px"}}>
                  <span style={{color:C.wB}}>{eq}</span>
                  <span style={{color:C.goldLt,fontWeight:700}}>{res}</span>
                </div>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(175px,1fr))",gap:"10px"}}>
              {[
                {w:"Week 1",d:"Days 1–7",   wl:"Foundation", pct:0.2,  c:C.amber},
                {w:"Week 2",d:"Days 8–14",  wl:"Momentum",   pct:0.25, c:C.blue},
                {w:"Week 3",d:"Days 15–21", wl:"Production", pct:0.3,  c:C.greenLt},
                {w:"Week 4",d:"Days 22–30", wl:"Close Out",  pct:0.25, c:C.gold},
              ].map((wk,i)=>(
                <div key={i} style={{background:C.navyMid,border:`1px solid ${C.navyBdr}`,borderTop:`3px solid ${wk.c}`,borderRadius:"4px",padding:"14px"}}>
                  <div style={{fontSize:"11px",fontWeight:800,color:wk.c,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"2px"}}>{wk.w} — {wk.wl}</div>
                  <div style={{fontSize:"10px",color:C.wC,marginBottom:"10px"}}>{wk.d}</div>
                  {[["Policies",Math.ceil(m.policies*wk.pct)],["Appts",Math.ceil(m.scheduled*wk.pct)],["Leads",Math.ceil(m.leads*wk.pct)]].map(([l,v])=>(
                    <div key={l} style={{display:"flex",justifyContent:"space-between",fontSize:"12px",padding:"4px 0",borderBottom:`1px solid ${C.wE}`}}>
                      <span style={{color:C.wB}}>{l}</span><span style={{color:wk.c,fontWeight:700}}>{v}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FIRST 100 ── */}
        {tab==="list100"&&(
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"12px",flexWrap:"wrap",gap:"8px"}}>
              <div>
                <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700,marginBottom:"3px"}}>Your First 100 Warm Market List</div>
                <div style={{fontSize:"13px",color:C.wB}}>{filledContacts}/100 added · {contacts.filter(c=>c.status==="Policy Written").length} policies written</div>
              </div>
              <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
                {Object.entries(STATUS_COLOR).map(([s,c])=>(
                  <div key={s} style={{display:"flex",alignItems:"center",gap:"4px",fontSize:"10px",color:C.wB}}>
                    <div style={{width:"7px",height:"7px",borderRadius:"50%",background:c}}/>{contacts.filter(ct=>ct.status===s&&ct.name.trim()).length}
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:C.wE,borderRadius:"3px",height:"5px",marginBottom:"14px",overflow:"hidden"}}>
              <div style={{width:`${filledContacts}%`,height:"100%",background:`linear-gradient(90deg,${C.gold},${C.goldLt})`,borderRadius:"3px",transition:"width 0.3s"}}/>
            </div>
            {editId!==null&&(()=>{const ct=contacts.find(c=>c.id===editId);return(
              <div style={{position:"fixed",inset:0,background:"#000000BB",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
                <div style={{background:C.navyMid,border:`1px solid ${C.gold}55`,borderRadius:"8px",padding:"24px",width:"100%",maxWidth:"420px",maxHeight:"90vh",overflowY:"auto"}}>
                  <div style={{fontSize:"11px",color:C.gold,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",marginBottom:"16px"}}>Contact #{editId}</div>
                  {[["name","Full Name","text"],["phone","Phone Number","tel"],["relationship","Relationship","text"],["notes","Notes","text"]].map(([field,label,type])=>(
                    <div key={field} style={{marginBottom:"12px"}}>
                      <label style={{display:"block",fontSize:"10px",color:C.gold,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",marginBottom:"5px"}}>{label}</label>
                      <input type={type} value={ct[field]||""} onChange={e=>updateContact(editId,field,e.target.value)} placeholder={label}
                        style={{width:"100%",background:C.navyLt,border:`1px solid ${C.wC}`,borderRadius:"4px",color:C.white,fontSize:"14px",padding:"10px 12px",outline:"none",fontFamily:"inherit",boxSizing:"border-box"}}/>
                    </div>
                  ))}
                  <div style={{marginBottom:"16px"}}>
                    <label style={{display:"block",fontSize:"10px",color:C.gold,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",marginBottom:"5px"}}>Status</label>
                    <select value={ct.status} onChange={e=>updateContact(editId,"status",e.target.value)}
                      style={{width:"100%",background:C.navyLt,border:`1px solid ${C.wC}`,borderRadius:"4px",color:C.white,fontSize:"14px",padding:"10px 12px",outline:"none",fontFamily:"inherit",appearance:"none"}}>
                      {CONTACT_STATUSES.map(s=><option key={s} value={s} style={{background:C.navyMid}}>{s}</option>)}
                    </select>
                  </div>
                  <button onClick={()=>setEditId(null)} style={{width:"100%",background:`linear-gradient(135deg,${C.gold},${C.goldLt})`,color:C.navy,fontWeight:900,fontSize:"14px",padding:"12px",border:"none",borderRadius:"4px",cursor:"pointer",fontFamily:"inherit"}}>Save Contact</button>
                </div>
              </div>
            );})()}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(185px,1fr))",gap:"8px"}}>
              {contacts.map(c=>(
                <div key={c.id} onClick={()=>setEditId(c.id)}
                  style={{background:C.navyMid,border:`1px solid ${c.name.trim()?STATUS_COLOR[c.status]+"44":C.navyBdr}`,borderLeft:`3px solid ${c.name.trim()?STATUS_COLOR[c.status]:C.wD}`,borderRadius:"4px",padding:"12px",cursor:"pointer"}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:"4px"}}>
                    <div style={{fontSize:"10px",color:C.wD,fontWeight:700}}>#{c.id}</div>
                    {c.name.trim()&&<div style={{width:"7px",height:"7px",borderRadius:"50%",background:STATUS_COLOR[c.status]}}/>}
                  </div>
                  {c.name.trim()?(
                    <>
                      <div style={{fontSize:"13px",fontWeight:700,color:C.white,marginBottom:"2px"}}>{c.name}</div>
                      <div style={{fontSize:"11px",color:C.wB,marginBottom:"2px"}}>{c.phone}</div>
                      <div style={{fontSize:"10px",color:C.wC}}>{c.relationship}</div>
                    </>
                  ):<div style={{fontSize:"11px",color:C.wD,fontStyle:"italic"}}>+ Add contact</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── DAILY LOG ── */}
        {tab==="daily"&&(
          <div>
            <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700,marginBottom:"16px"}}>Daily 10·10·10 Activity Tracker</div>
            <div style={{background:C.navyMid,border:`1px solid ${C.gold}44`,borderRadius:"6px",padding:"20px",marginBottom:"20px"}}>
              <div style={{fontSize:"11px",color:C.gold,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",marginBottom:"16px"}}>Log Today — {new Date().toLocaleDateString()}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px",marginBottom:"16px"}}>
                {[{key:"calls",label:"📞 Calls",c:C.goldLt},{key:"texts",label:"💬 Texts",c:C.blue},{key:"social",label:"📱 Social",c:C.greenLt}].map(s=>(
                  <div key={s.key} style={{textAlign:"center"}}>
                    <div style={{fontSize:"11px",color:C.wB,marginBottom:"8px",fontWeight:700}}>{s.label}</div>
                    <div style={{fontSize:"36px",fontWeight:900,color:activity[s.key]>=10?s.c:C.wB,lineHeight:1,marginBottom:"8px"}}>{activity[s.key]}</div>
                    <div style={{display:"flex",gap:"6px",justifyContent:"center"}}>
                      <button onClick={()=>setActivity(p=>({...p,[s.key]:Math.max(0,p[s.key]-1)}))}
                        style={{background:C.wE,border:`1px solid ${C.wD}`,color:C.wB,width:"30px",height:"30px",borderRadius:"50%",cursor:"pointer",fontFamily:"inherit",fontSize:"16px",lineHeight:1}}>−</button>
                      <button onClick={()=>setActivity(p=>({...p,[s.key]:p[s.key]+1}))}
                        style={{background:`${s.c}22`,border:`1px solid ${s.c}55`,color:s.c,width:"30px",height:"30px",borderRadius:"50%",cursor:"pointer",fontFamily:"inherit",fontSize:"16px",lineHeight:1}}>+</button>
                    </div>
                    <div style={{background:C.wE,borderRadius:"2px",height:"4px",marginTop:"8px",overflow:"hidden"}}>
                      <div style={{width:`${Math.min(100,(activity[s.key]/10)*100)}%`,height:"100%",background:s.c,transition:"width 0.2s"}}/>
                    </div>
                    <div style={{fontSize:"10px",color:C.wC,marginTop:"3px"}}>{activity[s.key]}/10</div>
                  </div>
                ))}
              </div>
              <button onClick={logActivity} style={{width:"100%",background:`linear-gradient(135deg,${C.gold},${C.goldLt})`,color:C.navy,fontWeight:900,fontSize:"13px",letterSpacing:"1px",textTransform:"uppercase",padding:"12px",border:"none",borderRadius:"4px",cursor:"pointer",fontFamily:"inherit"}}>
                Save Today's Activity
              </button>
            </div>
            {actLog.length>0&&(
              <div>
                <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700,marginBottom:"10px"}}>Activity History</div>
                {actLog.map((log,i)=>(
                  <div key={i} style={{background:C.navyMid,border:`1px solid ${C.navyBdr}`,borderRadius:"4px",padding:"12px 16px",marginBottom:"8px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"}}>
                    <span style={{fontSize:"12px",color:C.wB,fontWeight:700}}>{log.date}</span>
                    <div style={{display:"flex",gap:"16px"}}>
                      {[["📞",log.calls,C.goldLt],["💬",log.texts,C.blue],["📱",log.social,C.greenLt]].map(([ic,v,co],j)=>(
                        <div key={j} style={{textAlign:"center"}}>
                          <div style={{fontSize:"14px",fontWeight:900,color:v>=10?co:C.wC}}>{v}</div>
                          <div style={{fontSize:"9px",color:C.wD}}>{ic}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{fontSize:"10px",padding:"3px 10px",borderRadius:"20px",background:log.calls>=10&&log.texts>=10&&log.social>=10?`${C.greenLt}18`:C.wE,border:`1px solid ${log.calls>=10&&log.texts>=10&&log.social>=10?C.greenLt+"44":C.wD}`,color:log.calls>=10&&log.texts>=10&&log.social>=10?C.greenLt:C.wC,fontWeight:700}}>
                      {log.calls>=10&&log.texts>=10&&log.social>=10?"✓ Full 10·10·10":"Partial"}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── ONBOARDING ── */}
        {tab==="onboard"&&(
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"14px"}}>
              <div style={{fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:C.gold,fontWeight:700}}>Onboarding Checklist</div>
              <div style={{fontSize:"13px",color:C.wB}}>{onboardPct}% complete</div>
            </div>
            <div style={{background:C.wE,borderRadius:"3px",height:"8px",marginBottom:"20px",overflow:"hidden"}}>
              <div style={{width:`${onboardPct}%`,height:"100%",background:`linear-gradient(90deg,${C.gold},${C.goldLt})`,borderRadius:"3px",transition:"width 0.3s"}}/>
            </div>
            {ONBOARD_ITEMS.map((item,i)=>(
              <div key={i} onClick={()=>setOnboard(p=>({...p,[i]:!p[i]}))}
                style={{display:"flex",alignItems:"center",gap:"12px",padding:"14px 16px",borderRadius:"4px",background:onboard[i]?`${C.greenLt}0D`:C.wE,border:`1px solid ${onboard[i]?C.greenLt+"44":C.wD}`,marginBottom:"8px",cursor:"pointer"}}>
                <div style={{width:"20px",height:"20px",borderRadius:"4px",border:`2px solid ${onboard[i]?C.greenLt:C.wC}`,background:onboard[i]?C.greenLt:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {onboard[i]&&<span style={{color:C.navy,fontSize:"12px",fontWeight:900}}>✓</span>}
                </div>
                <span style={{fontSize:"14px",color:onboard[i]?C.wC:C.wA,textDecoration:onboard[i]?"line-through":"none"}}>{item}</span>
              </div>
            ))}
            <div style={{background:`${C.gold}0D`,border:`1px solid ${C.gold}33`,borderRadius:"4px",padding:"14px 18px",marginTop:"16px",fontSize:"13px",color:C.wA,lineHeight:1.7}}>
              📚 <strong style={{color:C.goldLt}}>WealthMakers University</strong> — <span style={{color:C.goldLt,fontWeight:700}}>www.wealthmakers.net</span> — Register and complete orientation within your first 48 hours.
            </div>
          </div>
        )}

        {/* ── AI COACH ── */}
        {tab==="coach"&&(
          <div style={{display:"flex",flexDirection:"column",minHeight:"500px"}}>
            <div style={{flex:1,marginBottom:"12px"}}>
              {messages.length===0&&<div style={{textAlign:"center",padding:"40px 20px",color:C.wC,fontSize:"14px"}}>Ask your AI Coach anything about your blueprint, scripts, strategies, or next steps.</div>}
              {messages.map((msg,i)=>(
                <div key={i} style={{marginBottom:"16px"}}>
                  {msg.role==="user"?(
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                      <div style={{background:`linear-gradient(135deg,${C.gold}44,${C.gold}22)`,border:`1px solid ${C.gold}55`,borderRadius:"14px 14px 3px 14px",padding:"11px 15px",maxWidth:"75%",fontSize:"14px",color:C.white,lineHeight:1.6}}>{msg.content}</div>
                    </div>
                  ):(
                    <div>
                      <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"}}>
                        <div style={{width:"26px",height:"26px",background:`linear-gradient(135deg,${C.gold},${C.goldLt})`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:900,color:C.navy}}>W</div>
                        <div style={{fontSize:"10px",color:C.gold,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase"}}>WAA Launch Director</div>
                      </div>
                      <div style={{background:C.navyMid,border:`1px solid ${C.navyBdr}`,borderRadius:"4px",padding:"16px 18px",fontSize:"14px",lineHeight:1.85,color:C.wA,whiteSpace:"pre-wrap"}}>{msg.content}</div>
                    </div>
                  )}
                </div>
              ))}
              {loading&&(
                <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
                  <div style={{width:"26px",height:"26px",background:`linear-gradient(135deg,${C.gold},${C.goldLt})`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:900,color:C.navy}}>W</div>
                  <div style={{fontSize:"13px",color:C.wB}}>Generating{".".repeat(dots)}</div>
                </div>
              )}
              <div ref={bottomRef}/>
            </div>
            <div style={{marginBottom:"10px",overflowX:"auto"}}>
              <div style={{display:"flex",gap:"6px",paddingBottom:"4px",scrollbarWidth:"none"}}>
                {QUICK.map((q,i)=>(
                  <button key={i} onClick={()=>send(q)} disabled={loading}
                    style={{background:C.wE,border:`1px solid ${C.wD}`,color:C.wA,fontSize:"11px",padding:"6px 12px",borderRadius:"20px",cursor:loading?"not-allowed":"pointer",whiteSpace:"nowrap",fontFamily:"inherit",flexShrink:0,opacity:loading?0.5:1}}>
                    {q}
                  </button>
                ))}
              </div>
            </div>
            <div style={{display:"flex",gap:"8px"}}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}
                placeholder="Ask anything — scripts, plans, objections, content, recruiting…" disabled={loading}
                style={{flex:1,background:C.navyMid,border:`1px solid ${C.wC}`,borderRadius:"4px",color:C.white,fontSize:"14px",padding:"11px 13px",outline:"none",fontFamily:"inherit"}}/>
              <button onClick={()=>send()} disabled={loading||!input.trim()}
                style={{background:loading||!input.trim()?C.wD:`linear-gradient(135deg,${C.gold},${C.goldLt})`,color:loading||!input.trim()?C.wC:C.navy,fontWeight:900,fontSize:"12px",letterSpacing:"1px",padding:"11px 18px",border:"none",borderRadius:"4px",cursor:loading||!input.trim()?"not-allowed":"pointer",fontFamily:"inherit",textTransform:"uppercase",flexShrink:0}}>
                Send
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={{borderTop:`1px solid ${C.navyBdr}`,background:C.navyMid,padding:"7px 14px",textAlign:"center",flexShrink:0}}>
        <span style={{fontSize:"9px",color:C.wD,letterSpacing:"1px",textTransform:"uppercase"}}>
          Wealth Architects Alliance · Constitution v1.0 · Helping Families Build Wealth, Protection, Opportunity &amp; Legacy · www.wealthmakers.net
        </span>
      </div>
    </div>
  );
}
