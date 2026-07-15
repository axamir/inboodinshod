"use client";

import { FormEvent, useEffect, useState } from "react";

const fa = {
  nav: ["مسیر", "خدمات", "مارکت ایده", "ورکشاپ", "ثبت درخواست"],
  heroTag: "استودیوی هم‌آفرینی ایده × هوش مصنوعی",
  before: "این بود",
  beforeWords: ["یه فکر خام", "ذهن شلوغ", "صدتا شاید", "نقطهٔ شروع نامعلوم"],
  after: "این شد",
  afterWords: ["مسئلهٔ روشن", "معماری پروژه", "نقشهٔ راه", "قدم بعدی معتبر"],
  hero: "هرچه در ذهن داری بگو. با هم به چیزی تبدیلش می‌کنیم که بشود فهمید، ساخت، فروخت یا توسعه داد.",
  heroSub: "فضایی امن برای فارسی‌زبان‌هایی که ایده دارند، ایده می‌خواهند یا می‌خواهند یاد بگیرند چگونه با هوش مصنوعی از صفر به یک برسند.",
  cta: "ایده‌ام را شروع می‌کنم",
  see: "ببین چطور کار می‌کند",
  gapTitle: "بین ذهن تو و دنیای واقعی، یک شکاف هست.",
  gapText: "نه چون ایده‌ات ضعیف است؛ چون هنوز زبان، ساختار، شواهد و مسیر ندارد. یک چت AI کافی نیست. یک مشاور دور از ایده هم کافی نیست. تو به یک هم‌آفرین نیاز داری که کنارت فکر کند، سؤال درست بپرسد و کار را تا خروجی قابل‌استفاده جلو ببرد.",
  methodTitle: "یک مسیر زنده؛ از شناخت تا نتیجه.",
  methodSub: "لازم نیست اصطلاحات فنی بلد باشی. از هر میزانی از اطلاعات شروع می‌کنیم و در پایان هر مرحله، گزارش، دارایی و تصمیم مشخص داری.",
  stages: [
    ["۰۱", "شناخت", "تو، تجربه‌ات، هدفت، محدودیت‌ها و چیزی که هنوز نمی‌توانی واضح توضیحش بدهی."],
    ["۰۲", "بارش و کشف", "گفت‌وگوی زنده، سؤال‌های عمیق، تحقیق و هم‌آفرینی با AI برای دیدن امکان‌هایی که پنهان مانده‌اند."],
    ["۰۳", "تعریف", "مسئله، مخاطب، ارزش، مرز MVP، مدل درآمد و تفاوت واقعی پروژه روشن می‌شود."],
    ["۰۴", "مهندسی", "بریف، وایت‌پیپر، معماری محصول، رودمپ، هزینه و ریپوی منبع اصلی ساخته می‌شود."],
    ["۰۵", "ارائه", "لندینگ، روایت، بستهٔ ارائه، سناریوی ساخت/فروش/سرمایه‌گذاری و قدم بعدی آماده می‌شود."],
    ["۰۶", "رشد", "با گزارش مرحله‌ای، بازبینی و تصمیم‌های واقعی تا هدف بعدی همراه پروژه می‌مانیم."],
  ],
  proofTitle: "خروجی فقط «ایدهٔ بهتر» نیست.",
  outputs: ["تعریف مسئله و فرصت", "بریف اجرایی", "وایت‌پیپر", "مدل کسب‌وکار", "معماری محصول", "نقشهٔ راه", "برآورد هزینه", "ریپوی پروژه", "لندینگ و ارائه", "گزارش هر مرحله"],
  pricesTitle: "سه سطح برای سه اندازهٔ تصمیم.",
  pricesSub: "قیمت‌ها نقطهٔ شروع طراحی دامنه‌اند. پیش از پرداخت، خروجی، زمان، مسئولیت و مرز هر پروژه شفاف می‌شود.",
  plans: [
    {tag:"شخصی", price:"۳٬۶۹۰٬۰۰۰", unit:"تومان", title:"ایدهٔ شخصی", text:"برای کسی که یک فکر، مهارت یا پروژهٔ نیمه‌کاره دارد و می‌خواهد آن را قابل‌فهم و قابل‌اقدام کند.", items:["جلسهٔ شناخت و کشف", "تعریف روشن ایده", "بریف و مسیر پیشنهادی", "گزارش و قدم بعدی"]},
    {tag:"استارتاپ", price:"۳۶٬۹۰۰٬۰۰۰", unit:"تومان", title:"استارتاپ کوچک", text:"برای تیمی که باید ایده را به معماری محصول، مدل کسب‌وکار و بستهٔ آمادهٔ ساخت تبدیل کند.", items:["ورکشاپ‌های هم‌آفرینی", "معماری محصول و MVP", "مدل کسب‌وکار و رودمپ", "ریپو، ارائه و سناریوی هزینه"], featured:true},
    {tag:"سازمانی", price:"۳۶۹٬۰۰۰٬۰۰۰", unit:"تومان", title:"مشاورهٔ کمپانی", text:"برای سازمانی که به طراحی سیستم AI، فرصت جدید، تحول فرآیند یا برنامهٔ اجرایی نیاز دارد.", items:["کشف چندذی‌نفعی", "استراتژی و طراحی سیستم", "AI OS و معماری ایجنت", "نظارت، گزارش و انتقال دانش"]},
  ],
  marketTitle: "اگر ایده نداری، از یک «این شد» شروع کن.",
  marketText: "مارکت ایده، کتابخانه‌ای امن از پروژه‌های فکرشده است. می‌توانی براساس شخصیت، مهارت و منابع خودت یک فرصت پیدا کنی؛ آن را بخری، با صاحبش همکاری کنی یا یک مرحله بالاتر ببری. هر «این شد» می‌تواند نقطهٔ شروع یک «این بود» تازه باشد.",
  marketCards: [["خرید", "یک پروژهٔ آمادهٔ بررسی و اجرا"], ["همکاری", "اتصال ایده، صاحب مسئله و سازنده"], ["پلاس", "شخصی‌سازی فرصت براساس شناخت تو"]],
  aboutTag: "امیر احمدی · ایده‌پرداز و معمار AI",
  aboutTitle: "من فقط تحویل نمی‌دهم؛ با ایده زندگی می‌کنم تا شکل بگیرد.",
  aboutText: "ترکیب من، ایده‌پردازی، معماری پروژه، ساخت با هوش مصنوعی و توانایی دیدن ارتباط میان چیزهایی است که در نگاه اول جدا به نظر می‌رسند. اینجا قرار نیست قضاوت شوی یا ایده‌ات را از دست بدهی. قرار است با مالکیت روشن و گزارش قابل‌ردگیری، یک همراه خلاق و مسئول کنار خودت داشته باشی.",
  intakeTitle: "این بودِ تو چیست؟",
  intakeText: "لازم نیست کامل بنویسی. همان چیزی را که در ذهنت هست بگو. این فرم شروع یک گفت‌وگوست، نه قرارداد.",
  labels: ["نام", "راه ارتباطی", "ایده یا مسئله", "الان کجای مسیر هستی؟", "چه نتیجه‌ای می‌خواهی؟", "سطح موردنظر"],
  placeholders: ["نام تو", "ایمیل، تلگرام یا شماره تماس", "هرچه در ذهنت هست؛ خام، پراکنده و بدون ویرایش…", "فقط ایده / شروع کرده‌ام / گیر کرده‌ام", "اگر این پروژه موفق شود چه تغییری می‌کند؟"],
  options: ["ایدهٔ شخصی — ۳٬۶۹۰٬۰۰۰ تومان", "استارتاپ کوچک — ۳۶٬۹۰۰٬۰۰۰ تومان", "مشاورهٔ کمپانی — ۳۶۹٬۰۰۰٬۰۰۰ تومان", "مارکت ایده / آموزش / هنوز نمی‌دانم"],
  send: "ارسال درخواست",
  privacy: "اطلاعات تو بدون اجازه منتشر یا وارد مارکت نمی‌شود.",
  faqTitle: "سؤال‌هایی که قبل از شروع طبیعی‌اند.",
  faqs: [
    ["اگر فقط یک فکر مبهم داشته باشم چه؟", "همین نقطهٔ شروع ماست. شناخت و کشف برای تبدیل ابهام به پرسش‌ها و تصمیم‌های قابل‌بررسی طراحی شده است."],
    ["آیا خودتان پروژه را می‌سازید؟", "براساس دامنه، پروژه را تا آمادگی ساخت می‌رسانیم و می‌توانیم ساخت، نظارت یا اتصال به تیم مناسب را جداگانه تعریف کنیم."],
    ["مالک ایده چه کسی است؟", "مالکیت، محرمانگی، اجازهٔ انتشار و استفاده از خروجی پیش از شروع مکتوب می‌شود. هیچ انتقال مالکیتی خودکار نیست."],
    ["هوش مصنوعی چه نقشی دارد؟", "AI تحقیق، تحلیل، خلق سناریو، مستندسازی و ساخت را تقویت می‌کند؛ تصمیم‌های هویتی، مالکیت و تأیید نهایی انسانی می‌مانند."],
  ],
  freeTag:"شروع بدون ریسک",
  freeTitle:"اول بپرس. رایگان بررسی می‌کنیم که ایده ارزش ادامه دارد یا نه.",
  freeText:"قبل از انتخاب هر پلن، می‌توانی سؤال بپرسی و یک ارزیابی اولیهٔ رایگان بگیری. اگر ایده شواهد، تناسب یا مسیر معقول نداشته باشد صادقانه می‌گوییم. اگر ظرفیت رشد بالایی داشته باشد، ممکن است برای همکاری انتخاب شود.",
  supportTitle:"ایده‌های منتخب می‌توانند تا ۹۰٪ حمایت شوند.",
  supportText:"پس از ارزیابی، بعضی پروژه‌ها ممکن است مشمول کاهش هزینه تا ۹۰٪، پرداخت مرحله‌ای، پس‌پرداخت مبتنی بر هدف یا مدل همکاری شوند. این حمایت تضمینی نیست و فقط با دامنه، معیار موفقیت، مالکیت و شرایط مکتوب ارائه می‌شود.",
  askFree:"سؤال یا ایده‌ام را رایگان مطرح می‌کنم",
  examplesTitle:"مثلاً یک «این بود» چطور «این شد» می‌شود؟",
  examples:[
    ["تخصص پراکنده", "«سال‌ها تجربه دارم ولی نمی‌دانم چطور ارائه‌اش کنم.»", "متد شخصی + مقاله/دوره + لندینگ + مدل درآمد"],
    ["ایدهٔ اپلیکیشن", "«فکر می‌کنم AI می‌تواند این مشکل را حل کند.»", "مسئلهٔ معتبر + MVP + معماری + رودمپ + برآورد ساخت"],
    ["نیاز سازمانی", "«همه AI می‌خواهند، اما نمی‌دانیم کجا استفاده کنیم.»", "نقشهٔ فرصت + پایلوت + AI OS + حاکمیت + برنامهٔ اجرا"],
    ["بدون ایده", "«می‌خواهم وارد این فضا شوم اما نقطهٔ شروع ندارم.»", "شناخت فرد + انتخاب فرصت + آموزش + هم‌آفرینی پروژهٔ اول"],
  ],
  learnTag:"از مصرف‌کننده تا هم‌آفرین",
  learnTitle:"AI فقط تولیدکردن نیست؛ یک روش تازه برای فکرکردن و ساختن است.",
  learnText:"اینجا یاد می‌گیری این‌بودهای خودت را ببینی، سؤال درست بسازی، زمینه و حافظه طراحی کنی، خروجی را نقد کنی، ایجنت و جریان کار بسازی و پروژه را تا نتیجه دنبال کنی.",
  learnSteps:[["پرامپت","درخواست روشن و قابل‌سنجش"],["زمینه","دادن دانش، مرز و معیار"],["هم‌آفرینی","گفت‌وگو، نقد و تصمیم مشترک"],["سیستم","حافظه، ابزار، ایجنت و جریان کار"],["اثر","پروژهٔ واقعی با خروجی قابل‌استفاده"]],
  workshopTag:"پیش‌ثبت‌نام ورکشاپ زنده",
  workshopTitle:"در یک هفته، از پرامپت‌نویسی به هم‌آفرینی حرفه‌ای برس.",
  workshopText:"ورکشاپ گروهی آنلاین برای هر سطحی؛ با اطلاعات روز، تمرین روی مسئلهٔ واقعی خودت، پرسش‌وپاسخ و یک مسیر شخصی برای ادامه. شروع هر گروه پس از رسیدن به حدنصاب ۱۰ نفر برنامه‌ریزی و اعلام می‌شود.",
  workshopValue:"ارزش کامل", workshopOld:"۳۶٬۹۰۰٬۰۰۰", workshopLaunch:"پیش‌ثبت‌نام لانچ", workshopNew:"۹٬۶۳۰٬۰۰۰", workshopUnit:"تومان",
  cohorts:[["گروه ۰۱","بنیان و فکرکردن با AI"],["گروه ۰۲","هم‌آفرینی و ساخت پروژه"],["گروه ۰۳","ایجنت، سیستم و اجرای حرفه‌ای"]],
  prereg:"پیش‌ثبت‌نام بدون پرداخت", seats:"۱۰ ظرفیت", threshold:"شروع پس از تکمیل حدنصاب", namesNote:"نام علاقه‌مندان فقط با رضایت خودشان نمایش داده می‌شود.",
  portfolioTitle:"پشت این کار، یک مسیر واقعی از ایده تا معماری وجود دارد.",
  portfolioText:"نمونه‌کارهای من فقط لندینگ نیستند؛ آزمایش‌هایی در هویت، حافظه، ایجنت‌ها، هم‌آفرینی انسان و ماشین و تبدیل مفاهیم پیچیده به سیستم‌های قابل‌بررسی‌اند.",
  privateTitle:"مشاورهٔ خصوصی، کلاس یا همکاری؟", privateText:"اگر مسئله‌ات حساس است، برای تیم یا سازمان کلاس می‌خواهی، یا می‌خواهی یک مسیر اختصاصی طراحی شود، مستقیم پیام بده.",
  footer: "از ذهن شلوغ، به قدم بعدی روشن.",
};

const en = {
  ...fa,
  nav: ["Method", "Services", "Idea Market", "Workshop", "Apply"],
  heroTag: "Idea co-creation × Artificial intelligence",
  before:"It was", beforeWords:["a raw thought","a crowded mind","a hundred maybes","no clear beginning"],
  after:"It became", afterWords:["a clear problem","project architecture","a roadmap","a credible next step"],
  hero:"Tell us what is in your mind. Together, we turn it into something people can understand, build, sell or grow.",
  heroSub:"A safe, Persian-first studio for people who have an idea, need an idea, or want to learn how to move from zero to one with AI.",
  cta:"Start my idea", see:"See the method",
  gapTitle:"There is a gap between your mind and the real world.",
  gapText:"Not because your idea is weak, but because it does not yet have language, structure, evidence or a path. An AI chat is not enough. A distant consultant is not enough. You need a co-creator who thinks beside you, asks the right questions and stays until the work becomes usable.",
  methodTitle:"A living path, from discovery to outcome.",
  methodSub:"You do not need technical vocabulary. We begin with whatever you know. Every stage ends with a report, a durable asset and a clear decision.",
  stages:[["01","Discovery","You, your experience, goal, constraints and what you cannot yet explain."],["02","Exploration","Live conversation, deep questions, research and AI co-creation reveal hidden possibilities."],["03","Definition","Problem, audience, value, MVP boundary, revenue and differentiation become clear."],["04","Engineering","Brief, whitepaper, product architecture, roadmap, cost and source-of-truth repository."],["05","Presentation","Landing page, narrative and build / sell / fund scenarios become ready."],["06","Growth","Milestone reports, reviews and real decisions take the project toward its next goal."]],
  proofTitle:"The outcome is not merely a “better idea.”",
  outputs:["Problem & opportunity","Executive brief","Whitepaper","Business model","Product architecture","Roadmap","Cost scenarios","Project repository","Landing & pitch","Milestone reports"],
  pricesTitle:"Three levels for three sizes of decision.",
  pricesSub:"Prices begin the scope conversation. Deliverables, timing, responsibility and boundaries are clarified before payment.",
  plans:[{...fa.plans[0],tag:"Personal",unit:"Toman",title:"Personal idea",text:"For someone with a thought, skill or unfinished project who needs a clear, actionable shape.",items:["Discovery session","Clear idea definition","Brief and recommended path","Report and next decision"]},{...fa.plans[1],tag:"Startup",unit:"Toman",title:"Small startup",text:"For a team turning an idea into product architecture, a business model and a build-ready package.",items:["Co-creation workshops","Product and MVP architecture","Business model and roadmap","Repository, pitch and cost scenarios"]},{...fa.plans[2],tag:"Enterprise",unit:"Toman",title:"Company advisory",text:"For organisations designing AI systems, new opportunities, process transformation or an execution programme.",items:["Multi-stakeholder discovery","Strategy and system design","AI OS and agent architecture","Oversight, reporting and transfer"]}],
  marketTitle:"No idea yet? Begin from an “It became.”",
  marketText:"The Idea Market is a safe library of prepared opportunities. Find one aligned with your character, skills and resources; buy it, collaborate, or take it one level higher. Every completed idea can become the beginning of the next.",
  marketCards:[["Acquire","A prepared project ready to evaluate"],["Collaborate","Connect ideas, problem owners and builders"],["Plus","Personalise an opportunity around you"]],
  aboutTag:"Amir Ahmadi · Idea creator & AI architect",
  aboutTitle:"I do not only deliver. I live with the idea until it takes shape.",
  aboutText:"My combination is ideation, project architecture, AI building and seeing connections between things that initially appear separate. You are not here to be judged or lose your idea. You are here to have a creative, responsible partner—with explicit ownership and traceable reporting.",
  intakeTitle:"What is your “It was”?", intakeText:"It does not need to be complete. Tell us what is in your mind. This form begins a conversation, not a contract.",
  labels:["Name","Contact","Idea or problem","Where are you now?","What outcome do you want?","Service level"],
  placeholders:["Your name","Email, Telegram or phone","Write it raw, scattered and unedited…","Only an idea / started / stuck","What changes if this succeeds?"],
  options:["Personal idea — 3,690,000 Toman","Small startup — 36,900,000 Toman","Company advisory — 369,000,000 Toman","Idea Market / learning / not sure"],
  send:"Send request", privacy:"Your information is never published or listed without permission.",
  faqTitle:"Natural questions before beginning.",
  faqs:[["What if I only have a vague thought?","That is exactly where we begin. Discovery turns ambiguity into reviewable questions and decisions."],["Do you build the project?","We prepare it for building and can separately define implementation, supervision or connection to the right team."],["Who owns the idea?","Ownership, confidentiality, publication and use are recorded before work begins. Nothing transfers automatically."],["What does AI do?","AI strengthens research, analysis, scenarios, documentation and building; identity, ownership and final approval remain human."]],
  freeTag:"Start without risk", freeTitle:"Ask first. We review whether the idea deserves to continue—for free.", freeText:"Before choosing a plan, ask a question and receive an initial fit review. If the idea lacks evidence or a credible path, we say so. If it has unusual potential, it may be selected for collaboration.",
  supportTitle:"Selected ideas may receive up to 90% support.", supportText:"After review, selected projects may qualify for up to a 90% fee reduction, milestone payments, outcome-based deferred payment or collaboration. Support is not guaranteed and requires written scope, success criteria and ownership terms.", askFree:"Ask or submit my idea for free",
  examplesTitle:"How does an “It was” become an “It became”?", examples:[["Scattered expertise","I have years of experience but cannot package it.","Personal method + content/course + landing + revenue model"],["App idea","I think AI could solve this problem.","Validated problem + MVP + architecture + roadmap + build estimate"],["Company need","Everyone wants AI, but we do not know where it fits.","Opportunity map + pilot + AI OS + governance + execution plan"],["No idea yet","I want to enter this space but have no starting point.","Personal discovery + opportunity selection + learning + first project"]],
  learnTag:"From consumer to co-creator", learnTitle:"AI is not only generation. It is a new way to think and build.", learnText:"Learn to see your raw inputs, ask better questions, design context and memory, critique outputs, build agents and workflows, and carry a project toward a real outcome.", learnSteps:[["Prompt","A clear, measurable request"],["Context","Knowledge, boundaries and criteria"],["Co-creation","Conversation, critique and shared decisions"],["System","Memory, tools, agents and workflow"],["Impact","A real project with usable output"]],
  workshopTag:"Live workshop pre-registration", workshopTitle:"Move from prompting to professional AI co-creation in one week.", workshopText:"A live online group workshop for every level, with current knowledge, practice on your own problem, Q&A and a personal next path. Each cohort is scheduled when ten people register interest.", workshopValue:"Full value", workshopOld:"36,900,000", workshopLaunch:"Launch pre-registration", workshopNew:"9,630,000", workshopUnit:"Toman", cohorts:[["Cohort 01","Foundations and thinking with AI"],["Cohort 02","Co-creation and project building"],["Cohort 03","Agents, systems and professional execution"]], prereg:"Pre-register without payment", seats:"10 seats", threshold:"Scheduled at ten interested people", namesNote:"Interested names appear only with explicit consent.",
  portfolioTitle:"Behind this studio is a real path from ideas to architecture.", portfolioText:"My work is not a collection of landing pages. It explores identity, memory, agents, human-machine co-creation and turning difficult concepts into reviewable systems.", privateTitle:"Private advisory, class or collaboration?", privateText:"For sensitive work, a private team class or a custom programme, contact me directly.",
  footer:"From a crowded mind to a clear next step.",
};

export default function Home() {
  const [lang, setLang] = useState<"fa"|"en">("fa");
  const t = lang === "fa" ? fa : en;
  useEffect(() => {
    document.documentElement.lang = lang; document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    const observer = new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("seen")),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
    return ()=>observer.disconnect();
  }, [lang]);
  const email = (kind:string, extra="") => {
    const subject = encodeURIComponent(`${kind} — این بود، این شد`);
    const body = encodeURIComponent(`${extra}\n\nنام:\nراه ارتباطی:\nتوضیح:`);
    window.location.href = `mailto:starship.amir@gmail.com?subject=${subject}&body=${body}`;
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`درخواست جدید این بود، این شد — ${d.get("name")}`);
    const body = encodeURIComponent(`نام: ${d.get("name")}\nراه ارتباطی: ${d.get("contact")}\nسطح: ${d.get("plan")}\n\nایده یا مسئله:\n${d.get("idea")}\n\nوضعیت فعلی:\n${d.get("stage")}\n\nنتیجهٔ مورد انتظار:\n${d.get("goal")}`);
    window.location.href = `mailto:starship.amir@gmail.com?subject=${subject}&body=${body}`;
  };
  return <main>
    <nav><a className="logo" href="#top"><span>این بود،</span> این شد</a><div className="navlinks"><a href="#method">{t.nav[0]}</a><a href="#services">{t.nav[1]}</a><a href="#market">{t.nav[2]}</a><a href="#workshop">{t.nav[3]}</a><a href="#apply">{t.nav[4]}</a></div><button className="lang" onClick={()=>setLang(lang === "fa" ? "en" : "fa")}>{lang === "fa" ? "EN" : "فا"}</button></nav>
    <section className="hero" id="top"><div className="grain"/><p className="eyebrow">{t.heroTag}</p><div className="transform"><div className="mess before"><b>{t.before}</b>{t.beforeWords.map((x,i)=><span key={x} style={{"--i":i} as React.CSSProperties}>{x}</span>)}</div><div className="pulse"><i/><span>←</span></div><div className="mess after"><b>{t.after}</b>{t.afterWords.map((x,i)=><span key={x} style={{"--i":i} as React.CSSProperties}>{x}</span>)}</div></div><h1>{t.hero}</h1><p className="lead">{t.heroSub}</p><div className="actions"><a className="primary" href="#apply">{t.cta}</a><a className="secondary" href="#method">{t.see}</a></div></section>
    <section className="gap"><div className="section-tag">01 — GAP</div><h2 className="reveal">{t.gapTitle}</h2><p className="reveal">{t.gapText}</p></section>
    <section className="free-entry"><div className="free-main reveal"><div className="section-tag">{t.freeTag}</div><h2>{t.freeTitle}</h2><p>{t.freeText}</p><button onClick={()=>email(lang==="fa"?"ارزیابی رایگان ایده":"Free idea review")}>{t.askFree}<span>←</span></button></div><aside className="support reveal"><span>UP TO 90%</span><h3>{t.supportTitle}</h3><p>{t.supportText}</p><small>{lang==="fa"?"انتخاب پس از ارزیابی · شرایط مکتوب · بدون وعدهٔ خودکار":"Selected after review · written terms · no automatic promise"}</small></aside></section>
    <section id="method" className="method"><header><div className="section-tag">02 — METHOD</div><h2>{t.methodTitle}</h2><p>{t.methodSub}</p></header><div className="stage-list">{t.stages.map(s=><article key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></section>
    <section className="proof"><h2 className="reveal">{t.proofTitle}</h2><div className="output-grid">{t.outputs.map((x,i)=><div className="reveal" key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</div>)}</div></section>
    <section className="examples"><div className="section-tag">EXAMPLES — BEFORE / AFTER</div><h2 className="reveal">{t.examplesTitle}</h2><div className="example-list">{t.examples.map((x,i)=><article className="reveal" key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><div><small>{t.before}</small><p>{x[1]}</p></div><b>←</b><div><small>{t.after}</small><p>{x[2]}</p></div></article>)}</div></section>
    <section id="services" className="services"><header><div className="section-tag">03 — SERVICES</div><h2>{t.pricesTitle}</h2><p>{t.pricesSub}</p></header><div className="plans">{t.plans.map((p)=><article className={p.featured?"featured":""} key={p.title}><span className="plan-tag">{p.tag}</span><h3>{p.title}</h3><div className="price"><b>{p.price}</b><small>{p.unit}</small></div><p>{p.text}</p><ul>{p.items.map(x=><li key={x}>{x}</li>)}</ul><a href="#apply">{t.cta}</a></article>)}</div></section>
    <section id="market" className="market"><div className="reveal"><div className="section-tag">04 — IDEA MARKET</div><h2>{t.marketTitle}</h2><p>{t.marketText}</p></div><div className="market-cards">{t.marketCards.map((x,i)=><article className="reveal" key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
    <section className="learning"><div className="learning-sticky"><div className="section-tag">{t.learnTag}</div><h2>{t.learnTitle}</h2><p>{t.learnText}</p></div><div className="learning-steps">{t.learnSteps.map((x,i)=><article className="reveal" key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
    <section className="about"><p className="eyebrow">{t.aboutTag}</p><h2 className="reveal">{t.aboutTitle}</h2><p className="reveal">{t.aboutText}</p><div className="signature">Amir Ahmadi · axamir</div><div className="portfolio reveal"><div><h3>{t.portfolioTitle}</h3><p>{t.portfolioText}</p></div><div className="portfolio-links"><a href="https://github.com/axamir" target="_blank" rel="noreferrer"><b>axamir</b><span>GitHub · AI systems &amp; projects ↗</span></a><a href="https://github.com/axamir/shahnameh-of-agents" target="_blank" rel="noreferrer"><b>{lang==="fa"?"شاهنامهٔ ایجنت‌ها":"Shahnameh of Agents"}</b><span>{lang==="fa"?"آرشیو زندهٔ تعامل ایجنت‌ها":"A living archive of agent interactions"} ↗</span></a><a href="https://orcid.org/0009-0000-0614-6869" target="_blank" rel="noreferrer"><b>ORCID</b><span>0009-0000-0614-6869 ↗</span></a></div></div></section>
    <section className="workshop" id="workshop"><div className="workshop-head reveal"><div className="section-tag">{t.workshopTag}</div><h2>{t.workshopTitle}</h2><p>{t.workshopText}</p><div className="workshop-price"><div><small>{t.workshopValue}</small><del>{t.workshopOld}</del></div><span>→</span><div className="launch"><small>{t.workshopLaunch}</small><b>{t.workshopNew}</b><em>{t.workshopUnit}</em></div></div><button onClick={()=>email(lang==="fa"?"پیش‌ثبت‌نام ورکشاپ":"Workshop pre-registration")}>{t.prereg}<span>←</span></button><p className="names-note">{t.namesNote}</p></div><div className="cohorts">{t.cohorts.map((x,i)=><article className="reveal" key={x[0]}><header><span>{x[0]}</span><b>{t.seats}</b></header><h3>{x[1]}</h3><div className="seat-line"><i style={{width:"0%"}}/><span>{lang==="fa"?"۰ / ۱۰":"0 / 10"}</span></div><p>{t.threshold}</p><button onClick={()=>email(lang==="fa"?`پیش‌ثبت‌نام ${x[0]}`:`Pre-register ${x[0]}`,lang==="fa"?"آیا اجازه می‌دهم نامم در فهرست علاقه‌مندان نمایش داده شود؟ بله / خیر":"May my name appear in the interested list? Yes / No")}>{t.prereg}</button></article>)}</div></section>
    <section className="private-contact"><div><div className="section-tag">PRIVATE / TEAM / CLASS</div><h2>{t.privateTitle}</h2><p>{t.privateText}</p></div><div><button onClick={()=>email(lang==="fa"?"درخواست مشاورهٔ خصوصی":"Private consultation")}>{lang==="fa"?"مشاورهٔ خصوصی":"Private advisory"}<span>←</span></button><button onClick={()=>email(lang==="fa"?"درخواست برگزاری کلاس":"Request a private class")}>{lang==="fa"?"درخواست کلاس برای تیم":"Class for my team"}<span>←</span></button><a href="mailto:starship.amir@gmail.com">starship.amir@gmail.com</a></div></section>
    <section id="apply" className="apply"><div><div className="section-tag">05 — START</div><h2>{t.intakeTitle}</h2><p>{t.intakeText}</p><small>inboodinshod.ir</small></div><form onSubmit={submit}><label>{t.labels[0]}<input name="name" required placeholder={t.placeholders[0]}/></label><label>{t.labels[1]}<input name="contact" required placeholder={t.placeholders[1]}/></label><label className="full">{t.labels[2]}<textarea name="idea" required rows={5} placeholder={t.placeholders[2]}/></label><label>{t.labels[3]}<input name="stage" placeholder={t.placeholders[3]}/></label><label>{t.labels[4]}<input name="goal" placeholder={t.placeholders[4]}/></label><label className="full">{t.labels[5]}<select name="plan">{t.options.map(x=><option key={x}>{x}</option>)}</select></label><button>{t.send}<span>←</span></button><p className="privacy">{t.privacy}</p></form></section>
    <section className="faq"><h2>{t.faqTitle}</h2>{t.faqs.map((x,i)=><details key={x[0]}><summary><span>0{i+1}</span>{x[0]}</summary><p>{x[1]}</p></details>)}</section>
    <footer><a className="logo" href="#top"><span>این بود،</span> این شد</a><p>{t.footer}</p><div><a href="https://github.com/axamir" target="_blank">GitHub</a><a href="mailto:starship.amir@gmail.com">Email</a><button onClick={()=>setLang(lang === "fa" ? "en" : "fa")}>{lang === "fa" ? "English" : "فارسی"}</button></div></footer>
  </main>;
}
