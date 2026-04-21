import { useEffect, useState } from "react";

const CTA_PRIMARY = "Запросить пилот";
const CTA_SECONDARY = "Посмотреть демо";
const CTA_TERTIARY = "Получить аудит воронки";

const flowSteps = [
  { icon: "inspect", title: "Lead enters", text: "Лид приходит из Telegram, VK или формы с сайта." },
  { icon: "sync", title: "Guided dialog", text: "Диалог идет по playbook, не ломая стиль вашей команды." },
  { icon: "target", title: "Qualification", text: "Фиксируем сегмент, бюджет, срочность и next best action." },
  { icon: "bolt", title: "Offer", text: "Даём релевантный оффер и снимаем ключевые возражения." },
  { icon: "growth", title: "Payment", text: "Дожимаем до предоплаты, синхронизируем статусы в CRM." },
  { icon: "shield", title: "Action center", text: "Показываем утечки, stuck dialogs и baseline vs uplift." },
];

const leakPoints = [
  {
    icon: "bolt",
    title: "Late response",
    text: "Лид не получает быстрый первый ответ и остывает до контакта с менеджером.",
  },
  {
    icon: "iterate",
    title: "No follow-up",
    text: "Без системного follow-up диалог обрывается до оффера и оплаты.",
  },
  {
    icon: "target",
    title: "Weak qualification",
    text: "Трафик смешивается, приоритеты теряются, команда тратит время на низкий intent.",
  },
  {
    icon: "growth",
    title: "No payment push",
    text: "Есть переписка, но нет управляемого перехода к счёту, предоплате и check.",
  },
];

const benefits = [
  {
    icon: "bolt",
    title: "Fast response SLA",
    text: "Первый ответ и follow-up без провалов по входящему трафику.",
  },
  {
    icon: "inspect",
    title: "Revenue leak visibility",
    text: "Видно, где умирают лиды и какие этапы режут выручку.",
  },
  {
    icon: "launch",
    title: "Payment-ready flow",
    text: "Диалог доводит до offer и оплаты, а не заканчивается на переписке.",
  },
  {
    icon: "shield",
    title: "Controlled rollout",
    text: "Пилот за 48 часов, canary на части трафика и еженедельный value report.",
  },
];

const proofItems = [
  { title: "Baseline vs uplift", text: "Сравнение контрольной и пилотной группы в одном отчёте." },
  { title: "Revenue leak map", text: "Карта утечек по этапам: response, qualification, offer, payment." },
  { title: "Stuck dialogs", text: "Список диалогов, где нужен ручной дожим или смена playbook." },
  { title: "ROI / payback", text: "Отчёт по приросту, стоимости внедрения и сроку окупаемости." },
];

const launchSteps = [
  {
    icon: "inspect",
    title: "1. Pack activation",
    text: "Фиксируем одну вертикаль, один канал и KPI пилота.",
  },
  {
    icon: "sync",
    title: "2. Channel setup",
    text: "Подключаем Telegram/VK, fallback и правила handoff на оператора.",
  },
  {
    icon: "growth",
    title: "3. Payments + CRM",
    text: "Связываем оплату, webhooks и синхронизацию с CRM без её замены.",
  },
  {
    icon: "iterate",
    title: "4. Controlled canary",
    text: "Запускаем на части трафика, сверяем baseline и первые сигналы uplift.",
  },
  {
    icon: "launch",
    title: "5. Weekly value report",
    text: "Каждую неделю показываем, где рост и что нужно поправить в playbook.",
  },
];

const pricing = [
  {
    name: "Pilot",
    text: "Для бизнеса, который хочет проверить uplift на части лидов.",
    price: "от 300 000 ₽ / пилот",
    cta: CTA_PRIMARY,
    points: ["1 канал", "Qualification + payment flow", "Controlled pilot with KPI", "Weekly review included"],
  },
  {
    name: "Growth",
    text: "Для команды, которой нужен action center и второй контур оптимизации.",
    price: "от 550 000 ₽ / мес",
    cta: CTA_PRIMARY,
    points: ["Action center", "Leak map + attribution", "Второй сценарий дожима", "Baseline vs uplift reporting"],
  },
  {
    name: "Managed Revenue Layer",
    text: "Для компаний, где нужен постоянный рост конверсии и стабильность каналов.",
    price: "от 900 000 ₽ / мес",
    cta: CTA_PRIMARY,
    dark: true,
    points: ["Playbook optimization", "Channel resilience", "RF compliance package", "Priority ops support"],
  },
];

const faqItems = [
  {
    question: "How fast can we launch?",
    answer: "Пилот запускается за 48 часов: подключение канала, playbook, payment flow и canary.",
  },
  {
    question: "Do we replace our CRM?",
    answer: "Нет. TrustOne работает поверх текущего CRM-стека и синхронизирует статусы сделок.",
  },
  {
    question: "Do you support pilot-first rollout?",
    answer: "Да. Стартуем с части трафика и показываем baseline vs uplift до масштабирования.",
  },
  {
    question: "How do you track revenue impact?",
    answer: "Через воронку этапов, leak map, payment attribution и weekly value report.",
  },
  {
    question: "What happens if Telegram delivery fails?",
    answer: "Срабатывает channel fallback: переводим коммуникацию в VK/MAX и фиксируем событие в отчёте.",
  },
  {
    question: "How do you handle RF payments and checks?",
    answer: "Подключаем RF-платежи, сверяем вебхуки и выдаём compliance checklist для операционного контура.",
  },
  {
    question: "Who takes over when the bot should stop?",
    answer: "Action center передаёт диалог человеку по правилам handoff и приоритетам выручки.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Да. Managed Revenue Layer включает постоянный мониторинг, QA и обновления playbook.",
  },
];

const tickerWords = [
  CTA_PRIMARY,
  "•",
  CTA_SECONDARY,
  "•",
  CTA_TERTIARY,
  "•",
  CTA_PRIMARY,
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

function HowItWorks() {
  return (
    <section className="showcase sectionDot reveal" id="demo">
      <h2 className="sectionTitle">Как TrustOne работает</h2>
      <p className="sectionSubtitle">Lead → Dialog → Qualification → Offer → Payment → Action Center</p>
      <div className="flowGrid">
        {flowSteps.map((step) => (
          <article className="flowCard" key={step.title}>
            <Glyph name={step.icon} className="flowIcon" />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sectionDot faqSection reveal" id="faq">
      <h2 className="sectionTitle">FAQ</h2>
      <p className="sectionSubtitle">Ответы на вопросы перед пилотом</p>
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
            Не даем лидам из Telegram/VK
            <br />
            теряться и доводим их до оплаты
          </h1>
          <p>
            TrustOne ставится поверх текущих продаж: держит fast response SLA, квалифицирует лидов, дожимает до
            предоплаты, показывает утечки денег и запускается за 48 часов.
          </p>
          <div className="heroButtons">
            <button className="pill light">{CTA_PRIMARY}</button>
            <button className="pill dark">{CTA_SECONDARY}</button>
          </div>
          <div className="heroTrust">1 вертикаль • 1 канал • запуск за 48 часов • без замены CRM</div>
        </section>
      </main>

      <div className="topDivider" />

      <main className="shell">
        <HowItWorks />

        <section className="sectionDot benefitsSection reveal">
          <h2 className="sectionTitle">Где утекают деньги</h2>
          <div className="benefitsGrid">
            {leakPoints.map((item) => (
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
            <span className="strongLine">DELAYED RESPONSE KILLS PAID TRAFFIC EFFICIENCY.</span>
            <span className="strongLine">WEAK FOLLOW-UP KILLS PAYMENT CONVERSION.</span>
            <span className="fadeLine">TRUSTONE FIXES BOTH WITH OPERATIONAL CONTROL.</span>
          </p>
        </section>

        <section className="sectionDot benefitsSection reveal">
          <h2 className="sectionTitle">Что меняется после запуска</h2>
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

        <section className="sectionDot proofSection reveal">
          <h2 className="sectionTitle">What you&apos;ll actually see</h2>
          <div className="proofGrid">
            {proofItems.map((item) => (
              <article className="proofCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sectionDot sectors reveal">
          <div className="serviceList">
            <h3>Telegram/VK revenue layer</h3>
            <h3>Qualification and follow-up</h3>
            <h3>Payment conversion flow</h3>
            <h3>Action center + leak map</h3>
            <h3>Channel fallback (VK/MAX)</h3>
            <h3>Compliance-ready operations</h3>
            <h3>48h onboarding pack</h3>
          </div>
          <aside className="sectorCard">
            <header>
              <h3>Vertical focus</h3>
              <Glyph name="spark" className="sectorSpark" />
            </header>
            <ul>
              <li>Main: Beauty & Clinics</li>
              <li>Also: Home Services</li>
              <li>Also: Legal Services</li>
            </ul>
          </aside>
        </section>

        <section className="sectionDot reveal">
          <h2 className="sectionTitle">Launch in 48 hours</h2>
          <div className="approachGrid">
            {launchSteps.map((item, idx) => (
              <article className={`approachCard ${idx === launchSteps.length - 1 ? "wide" : ""}`} key={item.title}>
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
            Пилотируем на части трафика, показываем baseline vs uplift и масштабируем только после подтверждённого
            эффекта.
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
            <div className="asyncNote">Kickoff call included • Weekly review included • Controlled pilot with KPI</div>
          </div>
        </section>

        <section className="hireStrip reveal">
          <article>
            <div className="hireTop">
              <Glyph name="spark" className="hireIcon" />
              <span className="hireBadge">AUDIT</span>
            </div>
            <h3>Получить аудит воронки</h3>
            <p>Покажем, где теряются лиды, и какой сценарий даст быстрый uplift на пилоте.</p>
            <button>{CTA_TERTIARY}</button>
          </article>
          <article className="dark">
            <div className="hireTop">
              <Glyph name="triangle" className="hireIcon" />
              <span className="hireBadge pro">PILOT</span>
            </div>
            <h3>Запуск с KPI и canary</h3>
            <p>Не ломаем текущий стек: подключаем один канал, фиксируем baseline и доводим до оплаты.</p>
            <button>{CTA_PRIMARY}</button>
          </article>
        </section>

        <section className="sectionDot founder reveal">
          <div className="founderContent">
            <h2 className="sectionTitle">Why this was built</h2>
            <p>
              TrustOne вырос из операционных продаж, где delayed response и слабый follow-up ежедневно сжигали paid
              traffic.
            </p>
            <p>
              Поэтому мы продаём не «бота», а revenue layer: qualification, objection handling, payment, attribution и
              action center в одном контуре.
            </p>
            <p>Каждый релиз привязан к деньгам: где выросло, где утекло и что делаем на следующей неделе.</p>
          </div>
          <div className="founderVisual">
            <img src="/ref_assets/founder_me.png" alt="Founder" loading="lazy" />
          </div>
        </section>

        <section className="sectionDot partners reveal">
          <h2 className="sectionTitle">Trust & operations</h2>
          <p className="sectionSubtitle">Не декор, а прикладные опоры для пилота и масштабирования.</p>
          <div className="partnerRow">
            <span className="partnerBadge">CRM</span>
            <span className="partnerBadge">YK</span>
            <span className="partnerBadge">SLA</span>
            <span className="partnerBadge">ISO</span>
            <span className="partnerBadge">RF</span>
            <span className="partnerBadge">48h</span>
          </div>
          <div className="trustList">
            <p>YooKassa integration</p>
            <p>CRM sync without replacement</p>
            <p>Tenant isolation + audit trail</p>
            <p>RF compliance package</p>
          </div>
        </section>

        <Faq />
      </main>

      <footer className="footer reveal" id="contact">
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
          <a className="footerEmail" href="mailto:hello@trustone.ai">
            hello@trustone.ai
          </a>
          <a className="footerTelegram" href="https://t.me/trustone_revenue" target="_blank" rel="noreferrer">
            Telegram: @trustone_revenue
          </a>
          <form className="footerForm" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Ваш Telegram или телефон" aria-label="Контакт для пилота" />
            <button type="submit">{CTA_PRIMARY}</button>
          </form>
          <p>© 2026 TrustOne. All rights reserved</p>
          <small>Revenue layer for messenger sales</small>
        </div>
      </footer>
    </div>
  );
}
