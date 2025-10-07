        import React, { useState, useEffect, useRef } from "react";
        import { motion, useScroll, useSpring } from "framer-motion";
        import { Download, Mail, Github, Linkedin } from "lucide-react";

        const RESUME = {
          name: "Ryed Badr",
          title: "Software Engineer",
          location: "Chicago, IL",
          email: "ryedbadr1@gmail.com",
          website: "https://ryedbadr.com",
          linkedin: "https://linkedin.com/in/ryed-badr",
          github: "https://github.com/ryedbadr1",
          education: {
            school: "University of Illinois Urbana-Champaign, Grainger School of Engineering",
            degree: "BS in Computer Science",
            dates: "Aug 2022 – May 2026",
            gpa: "3.5/4.0",
          },
          experience: [
            {
              role: "Software Engineering Intern",
              org: "ProvenAir Technologies",
              location: "Chicago, IL",
              dates: "May 2025 – Present",
              skills: ["C#", "Angular", "SQL", "Git"],
              bullets: [
                "Shipped 30+ production features across full-stack systems (C#, Angular, PostgreSQL)",
                "Engineered scalable notification and file-handling systems",
                "Refactored core services and implemented multi-threading to get 13% speedup",
              ],
            },
            {
              role: "Founder and Algorithm Engineer",
              org: "Velocity Quant Trading Group",
              location: "USA & UK",
              dates: "Jan 2023 – Mar 2025",
              skills: ["C++", "Python", "Git", "MongoDB"],
              bullets: [
                "Led a hedge fund of 8 people centered on automated, algorithmic trading models",
                "Developed base trading models and led quant engineers to optimize these strategies with AI",
                "Generated 24% ROI in one week and 80% ROI in the first year after development while managing a $50K+ fund",
              ],
            },
            {
              role: "Founder and Software Engineer",
              org: "Badr Software Development",
              location: "IL",
              dates: "Jan 2020 – Dec 2023",
              skills: ["Python", "HTML", "CSS", "Git", "Node.js", "MongoDB", "React", "C"],
              bullets: [
                "Automated 50% of administrative tasks for a recruiting firm, saving $40,000 annually",
                "Deployed a Node.js + MongoDB web app used by 4000+ UIUC students",
                "Built an AI app using TensorFlow to detect eye diseases from images",
              ],
            },
            {
              role: "Freelance Software Engineer",
              org: "Self-Employed",
              location: "IL",
              dates: "May 2020 – Aug 2022",
              skills: ["C++", "Python", "JavaScript", "HTML", "CSS", "MongoDB"],
              bullets: [
                "Crafted customized software-based solutions for local businesses",
                "Deployed software to manage students of a tutoring business, and automated mundane tutor tasks",
                "Produced multiple inventory management systems with features to forecast future supply and demand",
              ],
            },
            {
              role: "Software Programming Instructor",
              org: "Code Ninjas",
              location: "Naperville, IL",
              dates: "May 2020 – Aug 2022",
              skills: ["JavaScript", "Python"],
              bullets: [
                "Taught kids to code and created lesson plans",
              ],
            },
          ],
          research: [
            {
              title: "ADAPT Lab - Evolvable Compiler Construction",
              org: "University of Illinois",
              dates: "May 2024 – Sept 2024",
              skills: ["Assembly", "C"],
              bullets: [
                "Worked on evolvable compiler construction with ML and formal methods in x86 Assembly and C",
                "Responsible for investigating effectiveness of a Gemini-based environment to optimize compiler evolution",
              ],
            },
            {
              title: "GlueTest / Department of Computer Science",
              org: "University of Illinois",
              dates: "June 2023 – Sept 2023",
              skills: ["Java", "Python", "Git"],
              bullets: [
                "Translated Apache Commons from Java to Python and co-authored GlueTest (IEEE 2024)",
                "Leveraged GraalVM to preserve Java tests and improve cross-language testing accuracy",
                <span>Publication DOI: <a className="underline" href="https://doi.org/10.1109/ICSME58944.2024.00061" target="_blank" rel="noreferrer">10.1109/ICSME58944.2024.00061</a></span>,
              ],
            },
          ],
          skills: [
            "C/C++",
            "Python",
            "Java",
            "SQL",
            "C#",
            "Node.js",
            "Angular",
            "React",    
            "MongoDB",
            "Git",
            "JavaScript",
            "HTML",
            "CSS",
            "Assembly",
          ],
          hobbies: {
            sports: {
              title: "Sports & Athletics",
              description: "Active in multiple sports including soccer, football, and basketball. Love the competitive spirit and teamwork these sports bring.",
              details: ["Soccer", "Football", "Basketball"]
            },
            entertainment: {
              title: "Sports Entertainment",
              description: "Passionate follower of professional sports leagues and motorsports.",
              details: ["NFL", "Formula 1"]
            },
            automotive: {
              title: "Project Car",
              description: "Working on a Honda S2000 with extensive modifications including supercharger, fuel injectors, full exhaust system, air intake, flywheel upgrade, and regular maintenance.",
              details: ["Supercharger installation", "Fuel injectors upgrade", "Full exhaust system", "Air intake modification", "Flywheel upgrade", "Regular maintenance"]
            },
            development: {
              title: "Building Random Apps",
              description: "Love creating applications and exploring new technologies through side projects.",
              details: ["Mobile apps", "Web applications", "Automation tools", "AI/ML projects"]
            },
            cooking: {
              title: "Cooking",
              description: "Enjoy experimenting with different cuisines and cooking techniques.",
              details: ["International cuisine", "Grilling", "Baking", "Meal prep"]
            },
            travel: {
              title: "Travel & Exploration",
              description: "Passionate about exploring the world and experiencing different cultures. Have traveled extensively across the US and internationally.",
              details: {
                domestic: ["Alaska", "Hawaii", "Many of the 50 US states"],
                international: ["Zambia", "Tanzania", "Egypt", "Ethiopia", "Germany", "France", "Turkey", "United Kingdom", "Canada", "Pakistan", "Saudi Arabia", "UAE"]
              }
            }
          },
        };

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function buildVelocityAnswer() {
  const vx = RESUME.experience.find((e) => /velocity/i.test(e.org));
  const roiPhrases = [
    "24% in one week and 80% in the first year",
    "80% first-year ROI and 24% in the highest-performing week",
    "24% weekly high and 80% over the first year",
  ];
  const openers = [
    "Founder & Algorithm Engineer of Velocity Quant Trading Group",
    "Led Velocity Quant Trading Group as Founder & Algorithm Engineer",
    "Built and led algorithms at Velocity Quant Trading Group",
  ];
  const mentionJournal = Math.random() < 0.5;
  const cj = "https://thechicagojournal.com/velocity-quant-trading-group-college-students-innovate-finance-through-ai/";
  const extraBullet = vx && Array.isArray(vx.bullets) ? pick(vx.bullets) : "Developed and optimized ML-driven strategies.";
  return `${pick(openers)} — generated ${pick(roiPhrases)}. ${mentionJournal ? `Featured in The Chicago Journal: ${cj}. ` : ""}Highlight: ${extraBullet}`;
}

function buildResearchAnswer() {
  const doi = "https://doi.org/10.1109/ICSME58944.2024.00061";
  const openers = [
    "Research at UIUC includes evolvable compilers (ADAPT Lab) and GlueTest (IEEE 2024)",
    "UIUC research: ADAPT Lab on evolvable compilers and GlueTest (IEEE 2024)",
    "Worked on ADAPT Lab (evolvable compilers) and co-authored GlueTest (IEEE 2024)",
  ];
  const closers = [
    `Publication DOI: ${doi}`,
    `See DOI: ${doi}`,
    `More details at DOI ${doi}`,
  ];
  return `${pick(openers)}. ${pick(closers)}`;
}

function buildSmallTalkAnswer() {
  const moods = [
    "I'm doing well — thanks for asking!",
    "Feeling great and ready to chat about projects.",
    "All good here — how can I help?",
  ];
  const nudges = [
    "Ask about my experience, skills, or research.",
    "Curious about Velocity Quant or my UIUC research?",
    "You can say 'experience', 'skills', or 'research' to begin.",
  ];
  return `${pick(moods)} ${pick(nudges)}`;
}

const FAQ = [
  {
    q: /(\bhello\b|\bhi\b|\bhey\b|how are you|what's up|good (morning|afternoon|evening)|thanks|thank you)/i,
    a: () => buildSmallTalkAnswer(),
  },
          {
            q: /education|school|degree|gpa/i,
            a: `${RESUME.education.degree} from ${RESUME.education.school} (${RESUME.education.dates}), GPA ${RESUME.education.gpa}`,
          },
          {
            q: /provenair|proven air|intern/i,
            a:
              "Software Engineering Intern at ProvenAir Technologies (May 2025 – Present). Shipped 30+ features, worked with C#, Angular, PostgreSQL, and implemented multi-threading speedups.",
          },
          {
    q: /velocity|trading|quant|hedge|fund|roi|journal/i,
    a: () => buildVelocityAnswer(),
          },
          {
            q: /badr software|badr software development|badr software/i,
            a:
              "Built automation tools and a Node.js + MongoDB campus app used by 4000+ students; implemented AI models for eye disease detection.",
          },
          {
    q: /research|gluetest|ieee|compiler|paper|publication|doi/i,
    a: () => buildResearchAnswer(),
          },
          {
            q: /skills|tech stack|stack|languages/i,
            a: `Primary skills: ${RESUME.skills.join(", ")}.`,
          },
          {
            q: /contact|email|reach/i,
            a: `You can reach me at ${RESUME.email} or via GitHub / LinkedIn.`,
          },
          {
            q: /website|portfolio|resume/i,
            a: `Personal website: ${RESUME.website} — resume available for download.`,
          },
          {
            q: /hobbies|interests|sports|car|travel|cooking|apps/i,
            a: () => {
              const hobbyCategories = Object.values(RESUME.hobbies);
              const randomHobby = pick(hobbyCategories);
              const travelInfo = RESUME.hobbies.travel;
              const carInfo = RESUME.hobbies.automotive;
              
              const responses = [
                `My hobbies include playing sports (soccer, football, basketball), watching NFL and F1, working on my Honda S2000 project car with supercharger and other mods, building random apps, cooking, and traveling extensively.`,
                `I love sports - playing soccer, football, and basketball, plus watching NFL and Formula 1. I'm also into automotive work on my Honda S2000, app development, cooking, and I've traveled to many countries including Zambia, Tanzania, Egypt, Germany, France, Turkey, UK, and more.`,
                `Beyond coding, I enjoy competitive sports, motorsports (NFL/F1), automotive projects (Honda S2000 with supercharger), cooking, and exploring the world - I've been to places like Alaska, Hawaii, Egypt, Germany, France, and many others.`
              ];
              return pick(responses);
            },
          },
        ];

function getSuggestions(input) {
  const low = (input || "").toLowerCase();
  if (/velocity|trading|quant|hedge|fund|roi|journal/.test(low)) {
    return ["velocity", "roi details", "backtester project", "chicago journal"];
  }
  if (/research|gluetest|ieee|compiler|paper|publication|doi/.test(low)) {
    return ["research highlights", "publication doi", "adapt lab", "gluetest"];
  }
  if (/provenair|intern/.test(low)) {
    return ["provenair systems", "notification service", "file handling", "performance"];
  }
  if (/skills|stack|languages?/.test(low)) {
    return ["top languages", "backend", "frontend", "ml/ai"];
  }
  if (/hobbies|interests|sports|car|travel|cooking|apps/.test(low)) {
    return ["sports", "honda s2000", "travel destinations", "cooking"];
  }
  return ["experience", "skills", "research", "hobbies"];
}

function dynamicSearchAnswer(input) {
  const q = input.toLowerCase();
  const hits = [];
  RESUME.experience.forEach((e) => {
    if (
      e.role.toLowerCase().includes(q) ||
      e.org.toLowerCase().includes(q) ||
      e.bullets.some((b) => String(b).toLowerCase().includes(q)) ||
      (e.skills && e.skills.some(skill => skill.toLowerCase().includes(q)))
    ) {
      const skillsText = e.skills ? ` (${e.skills.join(', ')})` : '';
      hits.push(`${e.role} @ ${e.org}${skillsText}`);
    }
  });
  RESUME.research.forEach((r) => {
    if (
      r.title.toLowerCase().includes(q) ||
      r.org.toLowerCase().includes(q) ||
      r.bullets.some((b) => String(b).toLowerCase().includes(q)) ||
      (r.skills && r.skills.some(skill => skill.toLowerCase().includes(q)))
    ) {
      const skillsText = r.skills ? ` (${r.skills.join(', ')})` : '';
      hits.push(`${r.title} @ ${r.org}${skillsText}`);
    }
  });
  if (hits.length > 0) {
    const list = hits.slice(0, 3).join("; ");
    return `Here are related highlights: ${list}.`;
  }
  return "";
}

        function answerQuery(input) {
          input = input.trim();
          if (!input) return "Ask me anything about my background — education, experience, projects, or skills.";

  for (let item of FAQ) {
    if (item.q.test(input)) {
      const ans = typeof item.a === 'function' ? item.a() : item.a;
      return ans;
    }
  }

          const keywords = {
            education: ["school", "degree", "gpa", "illinois", "uiuc"],
    experience: ["intern", "provenair", "velocity", "badr", "founder", "engineer", "hedge", "fund", "roi", "journal"],
    research: ["research", "gluetest", "compiler", "ieee", "paper", "publication", "doi"],
            skills: RESUME.skills.map((s) => s.toLowerCase()),
            hobbies: ["hobbies", "interests", "sports", "soccer", "football", "basketball", "nfl", "f1", "formula 1", "car", "honda", "s2000", "supercharger", "travel", "cooking", "apps"],
            contact: ["email", "contact", "hire", "reach"],
          };
          const low = input.toLowerCase();
          for (let k in keywords) {
            for (let kw of keywords[k]) {
              if (low.includes(kw)) {
        switch (k) {
                  case "education":
                    return `${RESUME.education.degree} — ${RESUME.education.school} (${RESUME.education.dates}).`;
                  case "experience":
            return `Key roles: ${RESUME.experience.map((e) => `${e.role} @ ${e.org}`).sort(() => Math.random() - 0.5).slice(0,3).join("; ")}`;
                  case "research":
            return `Research highlights: ${RESUME.research.map((r) => r.title).sort(() => Math.random() - 0.5).join("; ")}`;
                  case "skills":
            return `Techs: ${RESUME.skills.slice().sort(() => Math.random() - 0.5).slice(0, 8).join(", ")}`;
                  case "hobbies":
            return `My hobbies include sports (soccer, football, basketball), watching NFL/F1, working on my Honda S2000 project car, building apps, cooking, and extensive travel including Alaska, Hawaii, and many international destinations.`;
                  case "contact":
                    return `Email: ${RESUME.email}`;
                  default:
                    return "I worked on many projects — ask about internships, research, or specific technologies.";
                }
              }
            }
          }

  const dynamic = dynamicSearchAnswer(input);
  if (dynamic) return dynamic;

  return "I have a background in full-stack and algorithm engineering. Ask about a specific role, skill, or project (e.g. 'Tell me about ProvenAir' or 'What languages do you know?').";
        }

        const copy = async (text) => {
          try {
            await navigator.clipboard.writeText(text);
            return true;
          } catch (e) {
            return false;
          }
        };

        export default function RyedPortfolio() {
          const [query, setQuery] = useState("");
          const [messages, setMessages] = useState([
            { from: "bot", text: `Hi! I'm Ryed's portfolio assistant. Ask me about Ryed.` },
          ]);
          const [chatSuggestions, setChatSuggestions] = useState([]);
          const [isTyping, setIsTyping] = useState(false);
          const [skillFilter, setSkillFilter] = useState("");
          const [showTop, setShowTop] = useState(false);
          const [celebrate, setCelebrate] = useState(false);
          const chatContainerRef = useRef(null);
          const [parallax, setParallax] = useState({ x: 0, y: 0 });
          const { scrollYProgress } = useScroll();
          const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 });
          const CHAT_API_URL = import.meta.env && import.meta.env.VITE_CHAT_API_URL;
          const GEMINI_KEY = import.meta.env && import.meta.env.VITE_GEMINI_KEY;
          const GEMINI_MODEL = 'gemini-2.0-flash';

          const [cursor, setCursor] = useState({ x: 0, y: 0 });
          const [cursorTrail, setCursorTrail] = useState({ x: 0, y: 0 });
          const [cursorState, setCursorState] = useState('default');
          const [isClicking, setIsClicking] = useState(false);

          const aboutRef = useRef(null);
          const expRef = useRef(null);
          const researchRef = useRef(null);

          const PROGRESS_TEMPLATE = {
            about: false,
            experience: false,
            research: false,
            askedQuestion: false,
            resumeDownloaded: false,
            emailCopied: false,
            githubVisited: false,
            linkedinVisited: false,
            featuredLink1: false,
            featuredLink2: false,
            scrolledToBottom: false,
            siteCompleted: false,
          };

          const [progressMap, setProgressMap] = useState(PROGRESS_TEMPLATE);

          function persistProgress(next) {
            try { localStorage.setItem("siteProgress", JSON.stringify(next)); } catch {}
          }

          function loadProgress() {
            try {
              const raw = localStorage.getItem("siteProgress");
              if (!raw) return;
              const data = JSON.parse(raw);
              setProgressMap((p) => ({ ...p, ...data }));
            } catch {}
          }

          function mark(key) {
            setProgressMap((prev) => {
              if (prev[key]) return prev;
              const next = { ...prev, [key]: true };
              persistProgress(next);
              return next;
            });
          }

          function markSectionViewed(key) { mark(key); }

          function completionPercent(map = progressMap) {
            const keys = Object.keys(PROGRESS_TEMPLATE).filter(k => k !== 'siteCompleted');
            const done = keys.filter((k) => map[k]).length;
            return Math.round((done / keys.length) * 100);
          }

          useEffect(() => { 
            loadProgress(); 
            const checkInitialScroll = () => {
              const scrollTop = window.scrollY;
              const windowHeight = window.innerHeight;
              const documentHeight = document.documentElement.scrollHeight;
              if (scrollTop + windowHeight >= documentHeight - 200) {
                mark('scrolledToBottom');
              }
            };
            setTimeout(checkInitialScroll, 100);
          }, []);


          useEffect(() => {
            const el = chatContainerRef.current;
            if (!el) return;
            el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
          }, [messages, isTyping]);

          useEffect(() => {
            function onScroll() {
              setShowTop(window.scrollY > 300);
              
              const scrollTop = window.scrollY;
              const windowHeight = window.innerHeight;
              const documentHeight = document.documentElement.scrollHeight;
              
              if (scrollTop + windowHeight >= documentHeight - 200) {
                mark('scrolledToBottom');
              }
            }
            onScroll();
            window.addEventListener("scroll", onScroll, { passive: true });
            return () => window.removeEventListener("scroll", onScroll);
          }, []);

          useEffect(() => {
            function onKey(e) {
              const tag = e.target && e.target.tagName;
              if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;
              if (e.key === '/') {
                e.preventDefault();
                const input = document.querySelector('input[placeholder^="Ask about"]');
                if (input) input.focus();
              }
              if (e.key && e.key.toLowerCase() === 'g') {
                window.open(RESUME.github, '_blank');
              }
            }
            window.addEventListener('keydown', onKey);
            return () => window.removeEventListener('keydown', onKey);
          }, []);

          useEffect(() => {
            const handleMouseEnter = (e) => onMouseEnter(e);
            const handleMouseLeave = () => onMouseLeave();
            const handleMouseDown = () => onMouseDown();
            const handleMouseUp = () => onMouseUp();

            document.addEventListener('mouseenter', handleMouseEnter, true);
            document.addEventListener('mouseleave', handleMouseLeave, true);
            document.addEventListener('mousedown', handleMouseDown);
            document.addEventListener('mouseup', handleMouseUp);

            return () => {
              document.removeEventListener('mouseenter', handleMouseEnter, true);
              document.removeEventListener('mouseleave', handleMouseLeave, true);
              document.removeEventListener('mousedown', handleMouseDown);
              document.removeEventListener('mouseup', handleMouseUp);
            };
          }, []);

          useEffect(() => {
            const pct = completionPercent();
            if (pct === 100 && !progressMap.siteCompleted) {
              setCelebrate(true);
              mark('siteCompleted');
              const t = setTimeout(() => setCelebrate(false), 3500);
              return () => clearTimeout(t);
            }
          }, [progressMap]);

          async function submitQuery(e) {
            e?.preventDefault?.();
            if (!query.trim()) return;
            const userMsg = { from: "you", text: query };
            setMessages((m) => [...m, userMsg]);
            setIsTyping(true);
            try {
              if (CHAT_API_URL) {
                const payload = {
                  messages: [
                    { role: "system", content: "You are a helpful portfolio assistant for Ryed Badr. Keep answers concise and relevant to his background. Add line-break spacing between points and try to format response nicely. If the prompt is unrelated to Ryed or his background/skills you are allowed to engage, however, keep responses appropriate and don't be too chatty." },
                    { role: "system", content: `Context: Education=${RESUME.education.degree} @ ${RESUME.education.school}. Experience=${RESUME.experience.map(e=>`${e.role} @ ${e.org} (Skills: ${e.skills?.join(', ') || 'N/A'})`).join('; ')}. Research=${RESUME.research.map(r=>`${r.title} @ ${r.org} (Skills: ${r.skills?.join(', ') || 'N/A'})`).join('; ')}. Skills=${RESUME.skills.join(', ')}. Hobbies: ${Object.entries(RESUME.hobbies).map(([key, hobby]) => `${hobby.title}: ${hobby.description}${key === 'travel' ? ` (Domestic: ${hobby.details.domestic.join(', ')}; International: ${hobby.details.international.join(', ')})` : ` (${hobby.details.join(', ')})`}`).join('; ')}. Links: DOI https://doi.org/10.1109/ICSME58944.2024.00061, Chicago Journal https://thechicagojournal.com/velocity-quant-trading-group-college-students-innovate-finance-through-ai/` },
                    ...messages.slice(-6).map(m => ({ role: m.from === 'you' ? 'user' : 'assistant', content: m.text || '' })),
                    { role: "user", content: query }
                  ]
                };
                const res = await fetch(CHAT_API_URL, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(payload)
                });
                if (!res.ok) {
                  const ans = answerQuery(query);
                  const latency = Math.min(1500, 300 + ans.length * 10);
                  await new Promise((r) => setTimeout(r, latency));
                  setMessages((m) => [...m, { from: "bot", text: ans }]);
                  setChatSuggestions(getSuggestions(query));
                } else {
                  const data = await res.json();
                  const botText = (data && (data.answer || data.text || data.message)) || "";
                  if (botText) {
                    setMessages((m) => [...m, { from: "bot", text: botText }]);
                  } else {
                    const ans = answerQuery(query);
                    const latency = Math.min(1500, 300 + ans.length * 10);
                    await new Promise((r) => setTimeout(r, latency));
                    setMessages((m) => [...m, { from: "bot", text: ans }]);
                    setChatSuggestions(getSuggestions(query));
                  }
                }
              } else if (GEMINI_KEY) {
                const prompt = [
                  "You are a helpful portfolio assistant for Ryed Badr. Keep answers concise and relevant to his background. Add line-break spacing between points and try to format response nicely. If the prompt is unrelated to Ryed or his background/skills you are allowed to engage, however, keep responses appropriate and don't be too chatty.",
                  `Context: Education=${RESUME.education.degree} @ ${RESUME.education.school}. Experience=${RESUME.experience.map(e=>`${e.role} @ ${e.org} (Skills: ${e.skills?.join(', ') || 'N/A'})`).join('; ')}. Research=${RESUME.research.map(r=>`${r.title} @ ${r.org} (Skills: ${r.skills?.join(', ') || 'N/A'})`).join('; ')}. Skills=${RESUME.skills.join(', ')}. Hobbies: ${Object.entries(RESUME.hobbies).map(([key, hobby]) => `${hobby.title}: ${hobby.description}${key === 'travel' ? ` (Domestic: ${hobby.details.domestic.join(', ')}; International: ${hobby.details.international.join(', ')})` : ` (${hobby.details.join(', ')})`}`).join('; ')}. Links: DOI https://doi.org/10.1109/ICSME58944.2024.00061, Chicago Journal https://thechicagojournal.com/velocity-quant-trading-group-college-students-innovate-finance-through-ai/`,
                  ...messages.slice(-4).map(m => `${m.from === 'you' ? 'User' : 'Assistant'}: ${m.text || ''}`),
                  `User: ${query}`
                ].filter(Boolean).join('\n');
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json', 'X-goog-api-key': GEMINI_KEY },
                  body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
                });
                if (!res.ok) {
                  const ans = answerQuery(query);
                  const latency = Math.min(1500, 300 + ans.length * 10);
                  await new Promise((r) => setTimeout(r, latency));
                  setMessages((m) => [...m, { from: "bot", text: ans }]);
                  setChatSuggestions(getSuggestions(query));
                } else {
                  const data = await res.json();
                  const botText = (data?.candidates?.[0]?.content?.parts || []).map(p => p.text).join(' ');
                  if (botText) {
                    setMessages((m) => [...m, { from: "bot", text: botText }]);
                  } else {
                    const ans = answerQuery(query);
                    const latency = Math.min(1500, 300 + ans.length * 10);
                    await new Promise((r) => setTimeout(r, latency));
                    setMessages((m) => [...m, { from: "bot", text: ans }]);
                    setChatSuggestions(getSuggestions(query));
                  }
                }
              } else {
                const ans = answerQuery(query);
                const latency = Math.min(1500, 300 + ans.length * 10);
                await new Promise((r) => setTimeout(r, latency));
                setMessages((m) => [...m, { from: "bot", text: ans }]);
                setChatSuggestions(getSuggestions(query));
              }
            } catch (err) {
              const ans = answerQuery(query);
              const latency = Math.min(1500, 300 + ans.length * 10);
              await new Promise((r) => setTimeout(r, latency));
              setMessages((m) => [...m, { from: "bot", text: ans }]);
              setChatSuggestions(getSuggestions(query));
            } finally {
              setIsTyping(false);
            }
            setQuery("");
            mark("askedQuestion");
          }

          function onMouseMove(e) {
            const { innerWidth, innerHeight } = window;
            const nx = (e.clientX / innerWidth) * 2 - 1;
            const ny = (e.clientY / innerHeight) * 2 - 1;
            setParallax({ x: nx, y: ny });

            setCursor({ x: e.clientX, y: e.clientY });
            
            setTimeout(() => {
              setCursorTrail({ x: e.clientX, y: e.clientY });
            }, 50);
          }

          function onMouseEnter(e) {
            const target = e.target;
            if (!target || typeof target.tagName !== 'string' || typeof target.closest !== 'function') {
              setCursorState('default');
              return;
            }
            
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
              setCursorState('hover');
            } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
              setCursorState('text');
            } else {
              setCursorState('default');
            }
          }

          function onMouseLeave() {
            setCursorState('default');
          }

          function onMouseDown() {
            setIsClicking(true);
            setCursorState('click');
          }

          function onMouseUp() {
            setIsClicking(false);
            setCursorState('default');
          }

          return (
            <div onMouseMove={onMouseMove} className="relative min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors overflow-x-clip pt-6 md:pt-8">
              <div 
                className={`cursor ${cursorState === 'hover' ? 'cursor-hover' : ''} ${cursorState === 'click' ? 'cursor-click' : ''} ${cursorState === 'text' ? 'cursor-text' : ''} ${isClicking ? 'cursor-pulse' : ''}`}
                style={{
                  left: cursor.x - 10,
                  top: cursor.y - 10,
                }}
              />
              <div 
                className="cursor-trail"
                style={{
                  left: cursorTrail.x - 4,
                  top: cursorTrail.y - 4,
                }}
              />
              <div 
                className="cursor-dot"
                style={{
                  left: cursor.x - 2,
                  top: cursor.y - 2,
                }}
              />
              
              <motion.div className="fixed top-0 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-emerald-400" style={{ scaleX: progress }} />
              <div className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40 -z-10 overflow-hidden">
                <div className="bg-aurora absolute -top-32 -left-24 w-[60vw] h-[60vw]" style={{ transform: `translate3d(${parallax.x * 16}px, ${parallax.y * 10}px, 0)` }} />
                <div className="bg-aurora absolute bottom-0 right-[-10vw] w-[50vw] h-[50vw]" style={{ transform: `translate3d(${parallax.x * -12}px, ${parallax.y * -8}px, 0)` }} />
              </div>
              <header className="relative z-10 max-w-6xl mx-auto p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src="/1663431050866.jpeg" 
                    alt="Ryed Badr" 
                    className="hidden md:block w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700 shadow-sm"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">{RESUME.name}</h1>
                    <p className="text-sm opacity-80">{RESUME.title} • {RESUME.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a href={RESUME.github} aria-label="GitHub" onClick={() => mark("githubVisited")} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Github size={18} />
                  </a>
                  <a href={RESUME.linkedin} aria-label="LinkedIn" onClick={() => mark("linkedinVisited")} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Linkedin size={18} />
                  </a>
                  <a href={`mailto:${RESUME.email}`} aria-label="Email" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Mail size={18} />
                  </a>

                  <a
                    href="/resume.pdf"
                    download
                    onClick={() => { mark("resumeDownloaded"); }}
                    className="ml-2 inline-flex items-center gap-2 bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 px-3 py-2 rounded-md shadow"
                  >
                    <Download size={14} /> Resume
                  </a>
                </div>
              </header>

              <section className="relative z-10 max-w-6xl mx-auto px-6 pb-4">
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50/80 dark:bg-slate-800/70 backdrop-blur rounded-2xl shadow">
                    <h2 className="text-2xl font-semibold">Ask me anything</h2>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">Below are some sample subjects to ask my chatbot:</p>
                    <div className="mt-4 flex gap-3 flex-wrap">
                      {['education','experience','research','skills','hobbies'].map((t) => (
                        <button key={t} onClick={() => setQuery(t)} className="text-sm rounded-full bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 px-3 py-1 hover:shadow">
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-slate-100/80 to-white/80 dark:from-slate-800/70 dark:to-slate-900/70 backdrop-blur rounded-2xl shadow">
                    <div className="h-[24rem] flex flex-col border rounded-md overflow-hidden bg-white/80 dark:bg-slate-950/60">
                      <div ref={chatContainerRef} className="flex-1 p-3 overflow-auto chat-scroll">
                        {messages.map((m, i) => (
                          <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`mb-2 ${m.from === "you" ? "text-right" : "text-left"}`}>
                            <div className={`inline-block p-2 rounded ${m.from === "you" ? "bg-slate-900 text-white" : "bg-slate-100 dark:bg-slate-800"}`}>
                              {m.from === "bot" ? (
                                <div className="whitespace-pre-wrap leading-relaxed">
                                  {m.text}
                                </div>
                              ) : (
                                m.text
                              )}
                            </div>
                          </motion.div>
                        ))}
                        {(!isTyping && chatSuggestions.length > 0) && (
                          <div className="mt-2 flex gap-2 flex-wrap">
                            {chatSuggestions.map((s, i) => (
                              <button key={i} onClick={() => setQuery(s)} className="text-xs rounded-full bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 px-2 py-0.5 hover:shadow">
                                {s}
                              </button>
                            ))}
                          </div>
                        )}
                        {isTyping && (
                          <div className="mb-2 text-left">
                            <div className="inline-flex items-center gap-2 px-2 py-2 rounded bg-slate-100 dark:bg-slate-800">
                              <span className="sr-only">Assistant is typing</span>
                              <span className="typing-dot" />
                              <span className="typing-dot" />
                              <span className="typing-dot" />
                            </div>
                          </div>
                        )}
                      </div>
                      <form onSubmit={submitQuery} className="p-2 border-t flex gap-2">
                        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask about my experience, skills, or research" className="flex-1 bg-transparent outline-none px-2" />
                        <button type="submit" className="px-3 py-1 rounded bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900">Ask</button>
                      </form>
                    </div>
                  </div>
                </motion.div>
              </section>

              <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <section className="lg:col-span-2 space-y-6">
                  <motion.div ref={aboutRef} onViewportEnter={() => markSectionViewed("about")} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 200, damping: 18 }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold">About</h2>
                    <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">
                      Hi! I'm <strong>Ryed</strong>, a software engineer who likes building stuff. I have broad experience in full-stack systems,
                      algorithm engineering, and applied machine learning. Below are highlights pulled from my resume. Feel free to explore the site or ask my chatbot about me.
                    </p>

                    <div className="mt-4 flex gap-3 flex-wrap">
                      <a href={RESUME.github} target="_blank" rel="noreferrer" onClick={() => mark("githubVisited")} className="underline">GitHub</a>
                      <a href={RESUME.linkedin} target="_blank" rel="noreferrer" onClick={() => mark("linkedinVisited")} className="underline">LinkedIn</a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.03 }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold mb-3">Featured Links</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[{
                        title: "Velocity Quant Trading Group",
                        desc: "Featured in The Chicago Journal for developments in quantitative trading space.",
                        url: "https://thechicagojournal.com/velocity-quant-trading-group-college-students-innovate-finance-through-ai/",
                        thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop&crop=center",
                        tags: ["Quantitative Trading", "AI", "Finance"],
                      },{
                        title: "IEEE Publication - GlueTest",
                        desc: "Co-authored research paper on software testing and maintenance.",
                        url: "https://doi.org/10.1109/ICSME58944.2024.00061",
                        thumbnail: "https://i.postimg.cc/WFNrq7wZ/output-onlinepngtools.png",
                        tags: ["Research", "IEEE", "Software Engineering"],
                      }].map((link, i) => (
                        <motion.a key={i} href={link.url} target="_blank" rel="noreferrer" onClick={() => mark(`featuredLink${i + 1}`)} whileHover={{ scale: 1.01 }} className="block p-4 border border-slate-100 dark:border-slate-700 rounded-lg bg-white/70 dark:bg-slate-900/50 hover:shadow-md transition-shadow">
                          <div className="aspect-video mb-3 rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800">
                            <img 
                              src={link.thumbnail} 
                              alt={link.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm" style={{display: 'none'}}>
                              {link.title}
                            </div>
                          </div>
                          <div className="font-medium text-slate-900 dark:text-slate-100">{link.title}</div>
                          <div className="text-sm opacity-80 mt-1 text-slate-600 dark:text-slate-400">{link.desc}</div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {link.tags.map((t, j) => (
                              <span key={j} className="text-xs px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">{t}</span>
                            ))}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div ref={expRef} onViewportEnter={() => markSectionViewed("experience")} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.05 }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold mb-3">Experience</h2>
                    <div className="space-y-4">
                      {RESUME.experience.map((exp, i) => (
                        <motion.article key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.06 }} className="border border-slate-100 dark:border-slate-700 p-4 rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{exp.role} <span className="text-sm opacity-80">@ {exp.org}</span></h3>
                              <p className="text-sm opacity-70">{exp.location} • {exp.dates}</p>
                            </div>
                          </div>
                          <ul className="mt-2 list-disc ml-5 text-sm opacity-80">
                            {exp.bullets.map((b, j) => (
                              <li key={j}>{b}</li>
                            ))}
                          </ul>
                        </motion.article>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div ref={researchRef} onViewportEnter={() => markSectionViewed("research")} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold">Research & Publications</h2>
                    <div className="mt-3 space-y-3">
                      {RESUME.research.map((r, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.06 }} className="p-3 border rounded-lg border-slate-100 dark:border-slate-700">
                          <strong>{r.title}</strong>
                          <div className="text-sm opacity-80">{r.org} • {r.dates}</div>
                          <ul className="mt-2 text-sm ml-5 list-disc opacity-80">
                            {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>


                </section>

                <aside className="space-y-6">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h3 className="font-semibold">Skills</h3>
                    <input value={skillFilter} onChange={(e) => setSkillFilter(e.target.value)} placeholder="Filter skills (e.g. Python)" className="mt-3 w-full px-3 py-2 bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700 outline-none" />
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {RESUME.skills.filter((s) => !skillFilter || s.toLowerCase().includes(skillFilter.toLowerCase())).map((s, i) => (
                        <motion.button key={i} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => setQuery(`skills: ${s}`)} className="text-left text-sm px-2 py-1 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-700">
                          {s}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h3 className="font-semibold mb-4">Timeline</h3>
                    <div className="relative">
                      {(() => {
                        const parseDate = (dateStr) => {
                          try {
                            if (!dateStr) {
                              return {
                                start: new Date('2020-01-01'),
                                end: new Date('2020-01-01')
                              };
                            }
                            
                            if (dateStr.includes('Present')) {
                              const [start] = dateStr.split('–').map(s => s.trim());
                              const startDate = parseMonthYear(start);
                              return {
                                start: startDate,
                                end: new Date('2099-12-31')
                              };
                            }
                            
                            const [start, end] = dateStr.split('–').map(s => s.trim());
                            const startDate = parseMonthYear(start);
                            const endDate = end ? parseMonthYear(end) : new Date('2099-12-31');
                            
                            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
                              return {
                                start: new Date('2020-01-01'),
                                end: new Date('2020-01-01')
                              };
                            }
                            
                            return { start: startDate, end: endDate };
                          } catch (error) {
                            return {
                              start: new Date('2020-01-01'),
                              end: new Date('2020-01-01')
                            };
                          }
                        };

                        const parseMonthYear = (dateStr) => {
                          if (!dateStr) return new Date('2020-01-01');
                          
                          const monthNames = {
                            'Jan': 0, 'January': 0, 'Feb': 1, 'February': 1, 'Mar': 2, 'March': 2,
                            'Apr': 3, 'April': 3, 'May': 4, 'Jun': 5, 'June': 5,
                            'Jul': 6, 'July': 6, 'Aug': 7, 'August': 7, 'Sep': 8, 'Sept': 8, 'September': 8,
                            'Oct': 9, 'October': 9, 'Nov': 10, 'November': 10, 'Dec': 11, 'December': 11
                          };
                          
                          const parts = dateStr.trim().split(' ');
                          if (parts.length === 2) {
                            const month = monthNames[parts[0]];
                            const year = parseInt(parts[1]);
                            if (month !== undefined && !isNaN(year)) {
                              return new Date(year, month, 1);
                            }
                          }
                          
                          return new Date(dateStr);
                        };

                        const timelineItems = [...RESUME.experience, ...RESUME.research].map(item => ({
                          ...item,
                          parsedDates: parseDate(item.dates),
                          type: RESUME.experience.includes(item) ? 'experience' : 'research'
                        }));

                        const allDates = timelineItems.flatMap(item => [item.parsedDates.start, item.parsedDates.end]).filter(d => d && !isNaN(d.getTime()));
                        
                        if (allDates.length === 0) {
                          return <div className="text-sm text-slate-500">No timeline data available</div>;
                        }
                        
                        const realDates = allDates.filter(d => d.getFullYear() < 2099);
                        const presentDates = allDates.filter(d => d.getFullYear() === 2099);
                        
                        const minDate = new Date(Math.min(...realDates.map(d => d.getTime())));
                        const maxDate = presentDates.length > 0 ? new Date() : new Date(Math.max(...realDates.map(d => d.getTime())));

                        const orgColors = [
                          'bg-blue-500', 'bg-emerald-500', 'bg-violet-500', 'bg-amber-500', 
                          'bg-rose-500', 'bg-cyan-500', 'bg-lime-500', 'bg-slate-500'
                        ];
                        const orgColorMap = {};
                        let colorIndex = 0;
                        
                        const validItems = timelineItems
                          .filter(item => item.parsedDates && item.parsedDates.start && item.parsedDates.end)
                          .sort((a, b) => {
                            if (!a.parsedDates || !b.parsedDates) return 0;
                            return b.parsedDates.end - a.parsedDates.end;
                          });

                        validItems.forEach(item => {
                          if (!orgColorMap[item.org]) {
                            orgColorMap[item.org] = orgColors[colorIndex % orgColors.length];
                            colorIndex++;
                          }
                        });

                        return (
                          <div className="space-y-3">
                            <div className="relative h-6 mb-4">
                              <div className="absolute inset-0 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                                <span>{minDate.getFullYear()}</span>
                                <span>{maxDate.getFullYear()}</span>
                              </div>
                            </div>

                            <div className="relative h-12 mb-4">
                              {validItems.map((item, index) => {
                                if (!item.parsedDates || !item.parsedDates.start || !item.parsedDates.end) {
                                  return null;
                                }
                                
                                const endDate = item.parsedDates.end.getFullYear() === 2099 ? new Date() : item.parsedDates.end;
                                const startOffset = ((item.parsedDates.start - minDate) / (maxDate - minDate)) * 100;
                                const duration = ((endDate - item.parsedDates.start) / (maxDate - minDate)) * 100;
                                
                                const exactOverlaps = validItems.filter(other => 
                                  other !== item && 
                                  other.parsedDates &&
                                  other.parsedDates.start.getTime() === item.parsedDates.start.getTime() &&
                                  (other.parsedDates.end.getFullYear() === 2099 ? new Date() : other.parsedDates.end).getTime() === endDate.getTime()
                                );
                                
                                const isOverlapping = validItems.some(other => 
                                  other !== item && 
                                  other.parsedDates &&
                                  item.parsedDates.start < (other.parsedDates.end.getFullYear() === 2099 ? new Date() : other.parsedDates.end) && 
                                  endDate > other.parsedDates.start
                                );

                                const overlapIndex = exactOverlaps.findIndex(other => 
                                  validItems.indexOf(other) < validItems.indexOf(item)
                                );
                                const verticalOffset = overlapIndex >= 0 ? (overlapIndex + 1) * 4 : 0;
                                return (
                                  <motion.div
                                    key={`${item.role || item.title}-${index}`}
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    whileInView={{ opacity: 1, scaleX: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className={`absolute h-3 rounded-full ${orgColorMap[item.org]} ${
                                      isOverlapping ? 'opacity-70' : 'opacity-90'
                                    }`}
                                    style={{
                                      left: `${Math.max(0, startOffset)}%`,
                                      width: `${Math.max(2, duration)}%`,
                                      top: `calc(50% + ${verticalOffset}px)`,
                                      transform: 'translateY(-50%)',
                                      zIndex: isOverlapping ? 1 : 2
                                    }}
                                    title={`${item.role || item.title} @ ${item.org} (${item.parsedDates.start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${item.parsedDates.end.getFullYear() === 2099 ? 'Present' : item.parsedDates.end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })})`}
                                  />
                                );
                              })}
                            </div>

                            <div className="space-y-2">
                              <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">Companies & Research</div>
                              <div className="grid grid-cols-1 gap-1">
                                {Object.entries(orgColorMap).map(([org, colorClass]) => {
                                  const orgItems = validItems.filter(item => item.org === org);
                                  const latestItem = orgItems[0];
                                  
                                  return (
                                    <div key={org} className="flex items-center gap-2 text-xs">
                                      <div className={`w-3 h-3 rounded-full ${colorClass} flex-shrink-0`} />
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-slate-900 dark:text-slate-100 truncate">
                                          {org}
                                        </div>
                                        <div className="text-slate-500 dark:text-slate-400 truncate">
                                          {orgItems.map(item => item.role || item.title).join(', ')}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h3 className="font-semibold mb-3">Education</h3>
                    <div className="flex items-start gap-3">
                      <img 
                        src="/illini.png" 
                        alt="University of Illinois" 
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-slate-900 dark:text-slate-100">
                          {RESUME.education.degree}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {RESUME.education.school}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          {RESUME.education.dates}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h3 className="font-semibold">Quick Contact</h3>
                    <p className="text-sm opacity-80 mt-2">{RESUME.location} • <a className="underline" href={`mailto:${RESUME.email}`}>{RESUME.email}</a></p>
                    <div className="mt-3 flex gap-2">
                      <a href={RESUME.github} onClick={() => mark("githubVisited")} className="text-sm underline">GitHub</a>
                      <a href={RESUME.linkedin} onClick={() => mark("linkedinVisited")} className="text-sm underline">LinkedIn</a>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={async () => { const ok = await copy(RESUME.email); if (ok) { mark("emailCopied"); } }}
                        className="px-3 py-2 bg-slate-900 dark:bg-slate-200 dark:text-slate-900 text-white rounded-md"
                      >Copy email</button>
                      <a href={`mailto:${RESUME.email}`} className="px-3 py-2 border rounded-md">Email</a>
                    </div>
                  </div>
                </aside>
              </main>

            <div className="fixed bottom-4 right-4 z-50 hidden md:block">
              <div className="p-3 rounded-xl shadow-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-800 min-w-[220px]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs opacity-70">Site Exploration</div>
                    <div className="text-lg font-semibold">{completionPercent()}%</div>
                  </div>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-emerald-400" style={{ width: `${completionPercent()}%` }} />
                </div>
              </div>
              {showTop && (
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top" className="mt-3 w-10 h-10 rounded-full bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 shadow grid place-items-center">↑</button>
              )}
            </div>
            {celebrate && (
              <motion.div initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} className="fixed bottom-20 right-4 z-50 p-4 rounded-xl shadow-lg bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span role="img" aria-label="tada">🎉</span>
                  <div>
                    <div className="font-semibold">Nice! You explored everything.</div>
                    <div className="text-sm opacity-80">Thanks for checking out the site.</div>
                  </div>
                </div>
              </motion.div>
            )}
            </div>
        );
}
