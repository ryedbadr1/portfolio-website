\
        import React, { useState, useEffect, useRef } from "react";
        import { motion } from "framer-motion";
        import { Sun, Moon, Download, Mail, GitHub, Linkedin } from "lucide-react";
        // NOTE: This component uses TailwindCSS classes. Make sure Tailwind is configured in your project.

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
              bullets: [
                "Led a hedge fund of 8 people focused on automated algorithmic trading models",
                "Developed base trading models and led quant engineers to optimize strategies with AI",
                "Generated 24% ROI in one week and 80% ROI in the first year",
              ],
            },
            {
              role: "Founder and Software Engineer",
              org: "Badr Software Development",
              location: "IL",
              dates: "Jan 2020 – Dec 2023",
              bullets: [
                "Automated 50% of administrative tasks for a recruiting firm, saving $40,000 annually",
                "Deployed a Node.js + MongoDB web app used by 4000+ UIUC students",
                "Built an AI app using TensorFlow to detect eye diseases from images",
              ],
            },
          ],
          research: [
            {
              title: "ADAPT Lab - Evolvable Compiler Construction",
              org: "University of Illinois",
              dates: "May 2024 – Sept 2024",
              bullets: [
                "Worked on evolvable compiler construction with ML and formal methods in x86 Assembly and C",
              ],
            },
            {
              title: "GlueTest / Dept. of CS",
              org: "University of Illinois",
              dates: "June 2023 – Sept 2023",
              bullets: [
                "Translated Apache Commons from Java to Python and co-authored GlueTest (IEEE 2024)",
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
            "MongoDB",
            "Git",
            "JavaScript",
            "HTML",
            "CSS",
            "Assembly",
          ],
        };

        const FAQ = [
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
            q: /velocity|trading|quant/i,
            a:
              "Founder & Algorithm Engineer of Velocity Quant Trading Group — led quant team, built trading models and generated notable ROI (24% in one week, 80% in the first year).",
          },
          {
            q: /badr software|badr software development|badr software/i,
            a:
              "Built automation tools and a Node.js + MongoDB campus app used by 4000+ students; implemented AI models for eye disease detection.",
          },
          {
            q: /research|gluetest|ieee|compiler/i,
            a:
              "Research assistant roles at UIUC including work on evolvable compilers (ADAPT Lab) and GlueTest (co-author, IEEE 2024).",
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
        ];

        function answerQuery(input) {
          input = input.trim();
          if (!input) return "Ask me anything about my background — education, experience, projects, or skills.";

          for (let item of FAQ) {
            if (item.q.test(input)) return item.a;
          }

          const keywords = {
            education: ["school", "degree", "gpa", "illinois", "uiuc"],
            experience: ["intern", "provenair", "velocity", "badr", "founder", "engineer"],
            research: ["research", "gluetest", "compiler", "ieee"],
            skills: RESUME.skills.map((s) => s.toLowerCase()),
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
                    return `Key roles: ${RESUME.experience.map((e) => `${e.role} @ ${e.org}`).join("; ")}`;
                  case "research":
                    return `Research highlights: ${RESUME.research.map((r) => r.title).join("; ")}`;
                  case "skills":
                    return `Techs: ${RESUME.skills.join(", ")}`;
                  case "contact":
                    return `Email: ${RESUME.email}`;
                  default:
                    return "I worked on many projects — ask about internships, research, or specific technologies.";
                }
              }
            }
          }

          return (
            "I have a background in full-stack and algorithm engineering. Ask about a specific role, skill, or project (e.g. 'Tell me about ProvenAir' or 'What languages do you know?')."
          );
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
          const [dark, setDark] = useState(false);
          const [query, setQuery] = useState("");
          const [messages, setMessages] = useState([
            { from: "bot", text: `Hi — I'm Ryed's portfolio assistant. Ask me about Ryed's education, experience, research, or skills.` },
          ]);
          const [skillFilter, setSkillFilter] = useState("");
          const messagesEndRef = useRef(null);

          useEffect(() => {
            document.documentElement.classList.toggle("dark", dark);
          }, [dark]);

          useEffect(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
          }, [messages]);

          function submitQuery(e) {
            e?.preventDefault?.();
            if (!query.trim()) return;
            const userMsg = { from: "you", text: query };
            setMessages((m) => [...m, userMsg]);
            const ans = answerQuery(query);
            setTimeout(() => {
              setMessages((m) => [...m, { from: "bot", text: ans }]);
            }, 350);
            setQuery("");
          }

          return (
            <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
              <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{RESUME.name}</h1>
                  <p className="text-sm opacity-80">{RESUME.title} • {RESUME.location}</p>
                </div>
                <div className="flex items-center gap-4">
                  <a href={RESUME.github} aria-label="GitHub" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <GitHub size={18} />
                  </a>
                  <a href={RESUME.linkedin} aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Linkedin size={18} />
                  </a>
                  <a href={`mailto:${RESUME.email}`} aria-label="Email" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Mail size={18} />
                  </a>

                  <button
                    onClick={() => setDark((d) => !d)}
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    aria-label="Toggle theme"
                  >
                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                  </button>

                  <a
                    href="/resume.pdf"
                    download
                    className="ml-2 inline-flex items-center gap-2 bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 px-3 py-2 rounded-md shadow"
                  >
                    <Download size={14} /> Resume
                  </a>
                </div>
              </header>

              <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <section className="lg:col-span-2 space-y-6">
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold">About</h2>
                    <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">
                      Hi — I'm <strong>{RESUME.name}</strong>, a software engineer with broad experience in full-stack systems,
                      algorithm engineering, and applied machine learning. I enjoy shipping production features and building systems
                      that scale. Below are highlights pulled from my resume — explore the site or ask the chatbot about anything.
                    </p>

                    <div className="mt-4 flex gap-3 flex-wrap">
                      <a href={RESUME.website} target="_blank" rel="noreferrer" className="underline">Personal site</a>
                      <a href={RESUME.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
                      <a href={RESUME.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold mb-3">Experience</h2>
                    <div className="space-y-4">
                      {RESUME.experience.map((exp, i) => (
                        <article key={i} className="border border-slate-100 dark:border-slate-700 p-4 rounded-lg">
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
                        </article>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold">Research & Publications</h2>
                    <div className="mt-3 space-y-3">
                      {RESUME.research.map((r, idx) => (
                        <div key={idx} className="p-3 border rounded-lg border-slate-100 dark:border-slate-700">
                          <strong>{r.title}</strong>
                          <div className="text-sm opacity-80">{r.org} • {r.dates}</div>
                          <ul className="mt-2 text-sm ml-5 list-disc opacity-80">
                            {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </section>

                <aside className="space-y-6">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h3 className="font-semibold">Skills</h3>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {RESUME.skills.map((s, i) => (
                        <span key={i} className="text-sm px-2 py-1 bg-white dark:bg-slate-900 rounded-full block border border-slate-100 dark:border-slate-700">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow">
                    <h3 className="font-semibold">Quick Contact</h3>
                    <p className="text-sm opacity-80 mt-2">{RESUME.location} • <a className="underline" href={`mailto:${RESUME.email}`}>{RESUME.email}</a></p>
                    <div className="mt-3 flex gap-2">
                      <a href={RESUME.github} className="text-sm underline">GitHub</a>
                      <a href={RESUME.linkedin} className="text-sm underline">LinkedIn</a>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => copy(RESUME.email)}
                        className="px-3 py-2 bg-slate-900 dark:bg-slate-200 dark:text-slate-900 text-white rounded-md"
                      >Copy email</button>
                      <a href={`mailto:${RESUME.email}`} className="px-3 py-2 border rounded-md">Email</a>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow">
                    <h3 className="font-semibold">Ask me (chatbot)</h3>
                    <div className="mt-3 h-56 flex flex-col border rounded-md overflow-hidden bg-white dark:bg-slate-900">
                      <div className="flex-1 p-3 overflow-auto">
                        {messages.map((m, i) => (
                          <div key={i} className={`mb-2 ${m.from === "you" ? "text-right" : "text-left"}`}>
                            <div className={`inline-block p-2 rounded ${m.from === "you" ? "bg-slate-900 text-white" : "bg-slate-100 dark:bg-slate-800"}`}>{m.text}</div>
                          </div>
                        ))}
                        <div ref={messagesEndRef} />
                      </div>

                      <form onSubmit={submitQuery} className="p-2 border-t flex gap-2">
                        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask about my experience, skills, or research" className="flex-1 bg-transparent outline-none px-2" />
                        <button type="submit" className="px-3 py-1 rounded bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900">Ask</button>
                      </form>
                    </div>

                    <div className="mt-2 text-xs opacity-70">This is a local demo chatbot that answers questions using the information on this page. To connect a real LLM, follow the README instructions below.</div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow text-sm">
                    <h3 className="font-semibold">Resume / Deploy</h3>
                    <p className="mt-2 opacity-80">This site is ready to deploy. Download the resume, or click the button below to copy contact information.</p>
                    <div className="mt-3 flex gap-2">
                      <a href="/resume.pdf" download className="px-3 py-2 border rounded-md">Download Resume</a>
                      <button onClick={() => copy(RESUME.website)} className="px-3 py-2 rounded bg-slate-900 text-white">Copy site URL</button>
                    </div>
                  </div>
                </aside>
              </main>

              <footer className="max-w-6xl mx-auto p-6 text-center text-sm opacity-70">
                Built with ❤️ — demo portfolio for {RESUME.name}. Replace placeholder links (e.g. /resume.pdf) with real deploy paths.
              </footer>
            </div>
