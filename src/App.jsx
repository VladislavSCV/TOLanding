import { useEffect, useRef, useState } from "react";

const showcase = [
  {
    id: "visual-electric",
    brand: "VISUAL ELECTRIC",
    title: "The new\ncreative workflow",
    text: "Turn ideas into paid conversations. Powered by AI, directed by your sales goals.",
    button: "Get Started",
    image: "/ref_assets/workA.png",
    darkText: false,
  },
  {
    id: "vizuur",
    brand: "VIZUUR",
    title: "THE AI SALES\nYOU'VE BEEN\nWAITING FOR",
    text: "Qualify faster, answer objections, and trigger payment at the right moment.",
    button: "Book Demo",
    image: "/ref_assets/hero_work1.png",
    darkText: false,
  },
  {
    id: "warp",
    brand: "WARP",
    title: "From lead to\nproduction revenue",
    text: "Action center, QA loop and monitoring in one operating layer.",
    button: "See Flow",
    image: "/ref_assets/card_orange1.png",
    darkText: false,
  },
];

const benefits = [
  {
    icon: "bolt",
    title: "Fast turnaround",
    text: "Go-live in 48 hours with one channel, one offer and strict response SLA.",
  },
  {
    icon: "target",
    title: "Tailored design",
    text: "Sales Brain, DQL and objection handling are adapted to your exact niche.",
  },
  {
    icon: "growth",
    title: "Scalable solutions",
    text: "From pilot to multi-tenant growth with channel resilience and billing lifecycle.",
  },
  {
    icon: "shield",
    title: "Fixed price",
    text: "Clear setup and monthly model tied to measurable conversion and payment outcomes.",
  },
];

const approach = [
  {
    icon: "inspect",
    title: "Consulting",
    text: "We map baseline metrics, lead leaks and payment blockers before launch.",
  },
  {
    icon: "sync",
    title: "Collaborative review",
    text: "Your team and ours align scripts, handoff rules, compliance and payment logic.",
  },
  {
    icon: "spark",
    title: "Make it pop",
    text: "Human-like pacing, anti-spam trust layer and stronger close triggers in dialogues.",
  },
  {
    icon: "iterate",
    title: "Iterate",
    text: "QA findings become playbook updates, pack versions and new test hypotheses.",
  },
  {
    icon: "launch",
    title: "Ready to take off",
    text: "After uplift is proven we scale channels, expand offers and keep quality stable.",
  },
];

const pricing = [
  {
    name: "Pilot Pack",
    text: "Revenue MVP to stop losing incoming leads in messenger.",
    price: "$10K+",
    cta: "Inquire for Pilot Pack",
    points: ["Single channel", "Sales Brain setup", "Payment flow", "Weekly scorecard"],
  },
  {
    name: "Growth Pack",
    text: "Full revenue layer with action center and quality loops.",
    price: "$20K+",
    cta: "Inquire for Growth Pack",
    points: ["Multiple channels", "ROI attribution", "Prospecting feed", "Ops dashboard"],
  },
  {
    name: "Retainer",
    text: "Ongoing revenue optimization to keep your product moving forward.",
    price: "$8K/mo",
    cta: "Inquire for Retainer",
    dark: true,
    points: [
      "Maintenance & optimization",
      "Feature rollouts",
      "UI/UX + script audits",
      "Playbook library updates",
      "Priority support",
    ],
  },
];

const faqItems = [
  {
    question: "How do we kick things off?",
    answer:
      "You choose a package, we lock the scope and launch a focused go-live flow in 48 hours.",
  },
  {
    question: "Why don't you do cold spam?",
    answer:
      "TrustOne is built as opportunity intelligence plus controlled outreach, not mass spam automation.",
  },
  {
    question: "How does go-live look like?",
    answer:
      "Baseline -> integration -> scripts -> pilot -> payment proof -> scaling roadmap.",
  },
  {
    question: "Can you work with Bitrix24 or amoCRM?",
    answer:
      "Yes. We work as a revenue layer above your current CRM stack without forcing a full migration.",
  },
  {
    question: "How do you handle RF payments and checks?",
    answer:
      "We wire payment flow with webhook reconciliation and compliance checklist for RF operations.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refund conditions are fixed in the agreement by phase and delivery milestones.",
  },
  {
    question: "Do you provide post launch support?",
    answer:
      "Yes, through a retainer model with continuous optimization, QA and conversion monitoring.",
  },
  {
    question: "Do you provide docs and handover?",
    answer:
      "Yes, you get runbooks, onboarding steps, ownership mapping and weekly performance reporting.",
  },
];


const metricsData = [
  { value: 3, suffix: "+", label: "Finalized projects" },
  { value: 94, suffix: "%", label: "Conversion rate improvement" },
  { value: 2, suffix: "+", label: "Years of market experience" },
];

const tickerWords = [
  "Let's work together",
  "✶",
  "Let's work together",
  "✶",
  "Let's work together",
  "✶",
  "Let's work together",
];

function LogoMark({ className = "" }) {
  return (
    <span className={`logoMarkIcon ${className}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="3.5" y="3.5" width="33" height="33" rx="8" stroke="currentColor" strokeWidth="3" />
        <path
          d="M26.5 12C26.5 15.2 23.9 17.8 20.7 17.8H20.6C17.6 17.8 15.2 20.2 15.2 23.2C15.2 26.2 17.6 28.6 20.6 28.6C23.6 28.6 26 26.2 26 23.2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.5 12.2C13.5 16 16.6 19 20.4 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Glyph({ name, className = "" }) {
  const common = { stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };

  const render = () => {
    switch (name) {
      case "bolt":
        return <path d="M18 3 L8 16 H15 L12 29 L24 14 H17 L18 3 Z" fill="currentColor" stroke="none" />;
      case "target":
        return (
          <>
            <circle cx="16" cy="16" r="11" {...common} />
            <circle cx="16" cy="16" r="5" {...common} />
            <circle cx="16" cy="16" r="1.8" fill="currentColor" stroke="none" />
          </>
        );
      case "growth":
        return (
          <>
            <path d="M6 23 L13 16 L18 21 L27 10" {...common} />
            <path d="M21 10 H27 V16" {...common} />
          </>
        );
      case "shield":
        return <path d="M16 4 L27 8 V16 C27 22 22.5 26.8 16 29 C9.5 26.8 5 22 5 16 V8 L16 4 Z" {...common} />;
      case "inspect":
        return (
          <>
            <circle cx="13" cy="13" r="6" {...common} />
            <path d="M18 18 L26 26" {...common} />
            <circle cx="13" cy="13" r="1.8" fill="currentColor" stroke="none" />
          </>
        );
      case "sync":
        return (
          <>
            <path d="M9 12 A9 9 0 0 1 24 9" {...common} />
            <path d="M23 6 V10 H19" {...common} />
            <path d="M23 20 A9 9 0 0 1 8 23" {...common} />
            <path d="M9 26 V22 H13" {...common} />
          </>
        );
      case "spark":
        return (
          <>
            <path d="M16 4 L19 13 L28 16 L19 19 L16 28 L13 19 L4 16 L13 13 Z" fill="currentColor" stroke="none" />
            <circle cx="27" cy="6.5" r="1.7" fill="currentColor" stroke="none" />
          </>
        );
      case "iterate":
        return (
          <>
            <path d="M8 12 H24" {...common} />
            <path d="M20 8 L24 12 L20 16" {...common} />
            <path d="M24 20 H8" {...common} />
            <path d="M12 16 L8 20 L12 24" {...common} />
          </>
        );
      case "launch":
        return (
          <>
            <path d="M8 24 L24 8" {...common} />
            <path d="M15 8 H24 V17" {...common} />
            <path d="M8 15 V24 H17" {...common} />
          </>
        );
      case "diamond":
        return <path d="M16 4 L28 16 L16 28 L4 16 L16 4 Z" {...common} />;
      case "triangle":
        return <path d="M16 5 L27 25 H5 L16 5 Z" {...common} />;
      default:
        return <circle cx="16" cy="16" r="10" {...common} />;
    }
  };

  return (
    <span className={`glyph ${className}`} aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        {render()}
      </svg>
    </span>
  );
}

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useMobileFlag(breakpoint = 940) {
  const [mobile, setMobile] = useState(() => window.innerWidth < breakpoint);

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return mobile;
}

function formatMetricValue(value, suffix) {
  return `${value}${suffix}`;
}

function MetricValue({ end, suffix, delay = 0 }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frameId = 0;
    let timeoutId = 0;

    const runCount = () => {
      setStarted(true);
      const start = performance.now();
      const duration = 1180;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setValue(Math.round(end * eased));
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (!visible) return;
        observer.disconnect();
        timeoutId = window.setTimeout(runCount, delay);
      },
      { threshold: 0.55 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay, end]);

  return (
    <strong ref={ref} className={`metricValue ${started ? "is-live" : ""}`}>
      {formatMetricValue(value, suffix)}
    </strong>
  );
}

function Showcase() {
  const mobile = useMobileFlag();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [mobile]);

  const maxIndex = mobile ? showcase.length - 1 : showcase.length - 2;
  const step = mobile ? "100% + 14px" : "52% + 14px";

  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="showcase sectionDot reveal">
      <div className="showcaseViewport">
        <div className="showcaseTrack" style={{ transform: `translateX(calc(-${index} * (${step})))` }}>
          {showcase.map((slide) => (
            <article className="showcaseCard" key={slide.id}>
              <img src={slide.image} alt={slide.brand} loading="lazy" />
              <div className={`showcaseOverlay ${slide.darkText ? "darkText" : ""}`}>
                <span className="showcaseBrand">{slide.brand}</span>
                <h3>
                  {slide.title.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p>{slide.text}</p>
                <button>{slide.button}</button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="showcaseArrows">
        <button aria-label="Previous slide" onClick={prev}>
          {"\u2190"}
        </button>
        <button aria-label="Next slide" onClick={next}>
          {"\u2192"}
        </button>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sectionDot faqSection reveal" id="faq">
      <h2 className="sectionTitle">FAQ</h2>
      <p className="sectionSubtitle">Some common questions and answers</p>
      <div className="faqList">
        {faqItems.map((item, idx) => {
          const isOpen = idx === open;
          return (
            <article
              className={`faqItem ${isOpen ? "open" : ""}`}
              key={item.question}
              role="button"
              tabIndex={0}
              onClick={() => setOpen(isOpen ? -1 : idx)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setOpen(isOpen ? -1 : idx);
                }
              }}
            >
              <header>
                <h3>{item.question}</h3>
                <span>{isOpen ? "\u2212" : "+"}</span>
              </header>
              <div className="faqAnswer">
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function App() {
  useReveal();

  return (
    <div className="page">
      <header className="topNav reveal is-visible">
        <div className="shell">
          <div className="logoMark">
            <LogoMark />
          </div>
        </div>
      </header>

      <main className="shell">
        <section className="hero sectionDot reveal is-visible">
          <h1>
            Building revenue systems
            <br />
            for immersive digital sales.
          </h1>
          <p>
            We design, build and ship messenger-first sales flows that turn incoming leads into payments.
          </p>
          <div className="heroButtons">
            <button className="pill light">Let&apos;s talk</button>
            <button className="pill dark">Pricing</button>
          </div>
        </section>
      </main>

      <div className="topDivider" />

      <main className="shell">
        <Showcase />

        <section className="sectionDot benefitsSection reveal">
          <h2 className="sectionTitle">Benefits</h2>
          <div className="benefitsGrid">
            {benefits.map((item) => (
              <article className="benefitCard" key={item.title}>
                <Glyph name={item.icon} className="benefitIcon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sectionDot statement reveal">
          <p>
            <span className="strongLine">BUILDING SYSTEMS THAT NOT ONLY</span>
            <span className="strongLine">LOOK GREAT BUT ALSO</span>
            <span className="fadeLine">DELIVER MEASURABLE RESULTS.</span>
          </p>
        </section>

        <section className="metrics reveal">
          {metricsData.map((item, idx) => (
            <article key={item.label} style={{ "--metric-delay": `${idx * 120}ms` }}>
              <MetricValue end={item.value} suffix={item.suffix} delay={idx * 120} />
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="sectionDot sectors reveal">
          <div className="serviceList">
            <h3>Telegram Revenue Layer</h3>
            <h3>VK + MAX Fallback</h3>
            <h3>Website Lead Capture</h3>
            <h3>Custom Sales Brain</h3>
            <h3>YooKassa Integration</h3>
            <h3>User Interface & Action Center</h3>
            <h3>Vertical Pack Library</h3>
          </div>
          <aside className="sectorCard">
            <header>
              <h3>Sectors</h3>
              <Glyph name="spark" className="sectorSpark" />
            </header>
            <ul>
              <li>Online Education</li>
              <li>Beauty & Clinics</li>
              <li>Fitness Studios</li>
              <li>Home Services</li>
              <li>Legal & Consulting</li>
              <li>Real Estate</li>
              <li>Automotive</li>
              <li>eCommerce</li>
            </ul>
          </aside>
        </section>

        <section className="sectionDot reveal">
          <h2 className="sectionTitle">Approach</h2>
          <div className="approachGrid">
            {approach.map((item, idx) => (
              <article className={`approachCard ${idx === approach.length - 1 ? "wide" : ""}`} key={item.title}>
                <Glyph name={item.icon} className="approachIcon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sectionDot reveal">
          <h2 className="sectionTitle">Pricing</h2>
          <p className="sectionSubtitle">
            Deploy your messenger revenue layer with fixed scope, clear milestones and measurable outcomes.
          </p>
          <div className="pricingShell">
            <div className="pricingGrid">
              {pricing.map((plan) => (
                <article className={`priceCard ${plan.dark ? "dark" : ""}`} key={plan.name}>
                  <h3>{plan.name}</h3>
                  <p>{plan.text}</p>
                  <strong>{plan.price}</strong>
                  <hr />
                  <button>{plan.cta}</button>
                  <ul>
                    {plan.points.map((point) => (
                      <li key={point}>+ {point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="asyncNote">No calls. Async communication</div>
          </div>
        </section>

        <section className="hireStrip reveal">
          <article>
            <div className="hireTop">
              <Glyph name="spark" className="hireIcon" />
              <span className="hireBadge">OPERATIONS READY</span>
            </div>
            <h3>Launch as Pilot</h3>
            <p>Trusted by teams that need measurable uplift without replacing the whole stack.</p>
            <button>Start Pilot</button>
          </article>
          <article className="dark">
            <div className="hireTop">
              <Glyph name="triangle" className="hireIcon" />
              <span className="hireBadge pro">PRO</span>
            </div>
            <h3>Launch as Revenue Layer</h3>
            <p>Production-ready with billing lifecycle, tenant isolation and action center workflows.</p>
            <button>Book Architecture Call</button>
          </article>
        </section>

        <section className="sectionDot founder reveal">
          <div className="founderContent">
            <h2 className="sectionTitle">The founder</h2>
            <p>
              TrustOne was built from real sales operations where delayed response and weak follow-up kill paid
              traffic efficiency.
            </p>
            <p>
              We ship deterministic sales workflows, not chatbot noise: qualification, objection handling, close
              trigger, payment and attribution.
            </p>
            <p>Every release is tied to revenue impact, actionability and operational resilience.</p>
          </div>
          <div className="founderVisual">
            <img src="/ref_assets/founder_me.png" alt="Founder" loading="lazy" />
          </div>
        </section>

        <section className="sectionDot partners reveal">
          <h2 className="sectionTitle">Partners</h2>
          <p className="sectionSubtitle">
            We collaborate with operators and founders focused on measurable sales growth.
          </p>
          <div className="partnerRow">
            <span className="partnerBadge">T1</span>
            <span className="partnerBadge">VK</span>
            <span className="partnerBadge">YK</span>
            <span className="partnerBadge">OPS</span>
            <span className="partnerBadge muted">+</span>
          </div>
        </section>

        <Faq />
      </main>

      <footer className="footer reveal">
        <div className="footerInner">
          <div className="footerBrand">
            <LogoMark className="footerLogoMark" />
            <span>trustone</span>
          </div>
          <div className="footerTicker" aria-hidden="true">
            <div className="footerTrack">
              {tickerWords.concat(tickerWords).map((word, idx) => (
                <span key={`${word}-${idx}`}>{word}</span>
              ))}
            </div>
          </div>
          <a className="footerEmail" href="mailto:inquiries@trustone.ai">
            inquiries@trustone.ai
          </a>
          <p>© 2026 TrustOne Studio. All rights reserved</p>
          <small>Brought to you by TrustOne</small>
          <div className="footerX">X</div>
        </div>
      </footer>
    </div>
  );
}


