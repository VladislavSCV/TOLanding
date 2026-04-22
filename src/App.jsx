import { useEffect, useState } from "react";

const CTA_PRIMARY = "Запросить пилот";
const CTA_SECONDARY = "Посмотреть демо";
const CTA_TERTIARY = "Получить аудит воронки";

const navLinks = [
  { href: "#kak-rabotaet", label: "Как работает" },
  { href: "#chto-menyaetsya", label: "Что меняется" },
  { href: "#ceny", label: "Цены" },
  { href: "#faq", label: "Вопросы" },
];

const flowSteps = [
  { icon: "inspect", title: "Лид приходит", text: "Входящий лид попадает из Telegram, VK или формы сайта." },
  { icon: "sync", title: "Управляемый диалог", text: "Диалог ведется по сценарию и не проваливается между шагами." },
  { icon: "target", title: "Квалификация", text: "Фиксируем сегмент, срочность и приоритет для команды продаж." },
  { icon: "bolt", title: "Оффер", text: "Подаем релевантное предложение и снимаем ключевые возражения." },
  { icon: "growth", title: "Оплата", text: "Доводим до предоплаты и фиксируем этап оплаты в CRM." },
  { icon: "shield", title: "Кабинет контроля", text: "Видны утечки, проблемные диалоги и эффект пилота по выручке." },
];

const leakPoints = [
  {
    icon: "bolt",
    title: "Поздний ответ",
    text: "Лид остывает до первого контакта и платный трафик теряет окупаемость.",
  },
  {
    icon: "iterate",
    title: "Нет повторного контакта",
    text: "Без повторного касания диалоги обрываются до оффера и оплаты.",
  },
  {
    icon: "target",
    title: "Слабая квалификация",
    text: "Менеджеры тратят время на слабые лиды, а сильные лиды теряются.",
  },
  {
    icon: "growth",
    title: "Нет управления оплатой",
    text: "Есть переписка, но нет контролируемого перехода к счету и чеку.",
  },
];

const benefits = [
  {
    icon: "bolt",
    title: "Быстрый ответ по SLA",
    text: "Первый ответ и повторный контакт происходят без провалов по входящему трафику.",
  },
  {
    icon: "inspect",
    title: "Видимость утечек выручки",
    text: "Понятно, на каком этапе теряются лиды и где режется конверсия.",
  },
  {
    icon: "launch",
    title: "Путь до оплаты",
    text: "Сценарий ведет к офферу и оплате, а не заканчивается на переписке.",
  },
  {
    icon: "shield",
    title: "Контролируемый запуск",
    text: "Пилот за 48 часов, контролируемый запуск и еженедельная отчетность по ценности.",
  },
];

const proofItems = [
  { title: "Сравнение с базовой линией", text: "Где выросло и где просело по этапам воронки." },
  { title: "Карта утечек выручки", text: "На каком шаге теряется выручка и где нужно усиление." },
  { title: "Диалоги, где нужен ручной дожим", text: "Список диалогов, где нужен менеджер." },
  { title: "ROI / окупаемость", text: "Сколько окупается пилот и за какой срок." },
];

const featureGroups = [
  {
    title: "Что внутри",
    points: [
      "Слой выручки для Telegram/VK",
      "Квалификация и повторный контакт",
      "Путь до оплаты",
      "Кабинет контроля и карта утечек",
      "Поиск и приоритизация новых клиентов",
      "Поддержка звонков с автоматической передачей менеджеру",
    ],
  },
  {
    title: "Операционный контур",
    points: [
      "Резервные каналы (VK/MAX)",
      "Готовность к требованиям РФ",
      "Запуск за 48 часов",
      "Синхронизация с CRM без замены стека",
      "Контролируемое подключение поиска новых клиентов",
      "Безопасная передача сложных звонков менеджеру",
    ],
  },
];

const postPilotCards = [
  {
    icon: "inspect",
    title: "Поиск новых клиентов",
    text: "Находим и приоритизируем новые возможности по нише, гео, сигналам и бюджету.",
  },
  {
    icon: "sync",
    title: "Поддержка звонков",
    text: "Подключаем голосовой контур и автоматически передаем сложные кейсы менеджеру.",
  },
];

const launchSteps = [
  {
    icon: "inspect",
    title: "1. Активация пакета",
    text: "Фиксируем вертикаль, канал и KPI пилота.",
  },
  {
    icon: "sync",
    title: "2. Подключение канала",
    text: "Настраиваем Telegram/VK и правила передачи менеджеру.",
  },
  {
    icon: "growth",
    title: "3. Оплата + CRM",
    text: "Связываем платежный поток, биллинг и статусы в CRM.",
  },
  {
    icon: "iterate",
    title: "4. Контролируемый запуск на части трафика",
    text: "Запускаем на части входящего трафика и проверяем гипотезу.",
  },
  {
    icon: "launch",
    title: "5. Еженедельный отчет по ценности",
    text: "Показываем прирост и план правок на следующую неделю.",
  },
];

const pricing = [
  {
    name: "Пилот",
    audience:
      "Для бизнеса, который хочет проверить прирост на части входящих лидов. Поиск новых клиентов и голосовой контур подключаются после пилота.",
    price: "от 300 000 ₽ / пилот",
    cta: CTA_PRIMARY,
    points: [
      "1 канал: квалификация и повторный контакт входящих лидов",
      "Путь до оплаты и фиксация этапов в CRM",
      "Еженедельный отчет по результату",
      "Облегченный центр действий для ручного дожима",
    ],
  },
  {
    name: "Рост",
    audience: "Для команды, которая прошла пилот и подключает второй контур роста.",
    price: "от 550 000 ₽ / месяц",
    cta: CTA_PRIMARY,
    points: [
      "Все из пилота + кабинет контроля",
      "Карта утечек выручки и гипотезы по конверсии",
      "Поиск и приоритизация новых клиентов",
      "Контролируемое расширение после базовой линии",
    ],
  },
  {
    name: "Сопровождение",
    audience:
      "Для компаний, которым нужен постоянный прирост конверсии, стабильность каналов и голосовые сценарии с передачей менеджеру.",
    price: "от 900 000 ₽ / месяц",
    cta: CTA_PRIMARY,
    dark: true,
    points: [
      "Все из роста + поддержание платежного и CRM-контура",
      "Резервирование каналов и операционная устойчивость",
      "Голосовые сценарии с автоматической передачей менеджеру",
      "Регулярный прирост конверсии и обновление сценариев по данным",
    ],
  },
];

const faqItems = [
  {
    question: "Как быстро можно запуститься?",
    answer: "Пилот запускается за 48 часов: канал, сценарий, оплата, контролируемый запуск и первый отчет.",
  },
  {
    question: "Вы заменяете нашу CRM?",
    answer: "Нет. TrustOne работает поверх текущего CRM-стека и синхронизирует этапы сделок.",
  },
  {
    question: "Поддерживаете запуск сначала через пилот?",
    answer: "Да. Стартуем с части трафика и масштабируемся только после подтвержденного прироста.",
  },
  {
    question: "Как вы считаете влияние на выручку?",
    answer: "Через сравнение с базовой линией, карту утечек, оплату и еженедельный отчет по этапам.",
  },
  {
    question: "Что если доставка сообщений в Telegram ломается?",
    answer: "Срабатывает резерв по каналам: переключаем коммуникацию в VK/MAX и фиксируем событие.",
  },
  {
    question: "Как работает РФ-оплата и чеки?",
    answer: "Подключаем платежный контур, сверяем вебхуки и ведем операции по пакету комплаенса.",
  },
  {
    question: "Когда подключается менеджер?",
    answer: "При триггерах передачи из кабинета контроля: сложные возражения, срочность, риск оттока.",
  },
  {
    question: "Помогаете ли вы находить новых клиентов?",
    answer:
      "Да. TrustOne собирает кандидатов из CSV, web search, URL scan и подключенных источников, применяет строгие фильтры, оценивает соответствие и объясняет оценку. Затем подсказывает лучший следующий шаг. Это контур приоритизации спроса, а не массовая спам-автоматизация.",
  },
  {
    question: "Работаете ли вы со звонками?",
    answer:
      "Да. TrustOne поддерживает голосовой контур: транскрипт звонка попадает в общий контур выручки, а при низкой уверенности или сложном кейсе диалог автоматически передается менеджеру. Это помогает не терять конверсию и не рисковать качеством общения.",
  },
  {
    question: "Есть ли поддержка после запуска?",
    answer: "Да. Включаем мониторинг, регулярные правки сценариев и контроль эффективности.",
  },
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

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faqSection reveal" id="faq">
      <h2 className="sectionTitle">Частые вопросы</h2>
      <p className="sectionSubtitle">Ключевые вопросы перед запуском пилота</p>
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
        <div className="shell navRow">
          <div className="logoMark">
            <LogoMark />
            <span className="brandName">TrustOne</span>
          </div>
          <nav className="topLinks" aria-label="Навигация по разделам">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="shell">
        <section className="hero reveal is-visible" id="top">
          <h1>
            Не даем лидам из Telegram/VK
            <br />
            теряться и доводим их до оплаты
          </h1>
          <p>
            TrustOne ставится поверх ваших текущих продаж: отвечает по SLA, квалифицирует лидов, дожимает до
            предоплаты, показывает утечки денег и запускается за 48 часов.
          </p>
          <div className="heroButtons">
            <a className="pill primary" href="#contact">
              {CTA_PRIMARY}
            </a>
            <a className="pill secondary" href="#kak-rabotaet">
              {CTA_SECONDARY}
            </a>
          </div>
          <div className="heroTrust">1 вертикаль • 1 канал • запуск за 48 часов • без замены CRM</div>
        </section>
      </main>

      <div className="topDivider" />

      <main className="shell">
        <section className="section reveal" id="kak-rabotaet">
          <h2 className="sectionTitle">Как работает TrustOne</h2>
          <p className="sectionSubtitle">Лид → Диалог → Квалификация → Оффер → Оплата → Кабинет контроля</p>
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

        <section className="section reveal">
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

        <section className="section statement reveal">
          <p>
            <span className="strongLine">Поздний ответ убивает окупаемость платного трафика.</span>
            <span className="strongLine">Слабый повторный контакт убивает конверсию в оплату.</span>
            <span className="fadeLine">TrustOne закрывает обе проблемы через управляемый диалог, путь до оплаты и кабинет контроля.</span>
          </p>
        </section>

        <section className="section reveal" id="chto-menyaetsya">
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

        <section className="section proofSection reveal">
          <h2 className="sectionTitle">Что вы увидите в кабинете</h2>
          <div className="proofGrid">
            {proofItems.map((item) => (
              <article className="proofCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
            <article className="proofVisual" aria-label="Пример еженедельного отчета по ценности">
              <h3>Пример еженедельного отчета по ценности</h3>
              <div className="proofKpis">
                <div>
                  <span>Ответ в SLA</span>
                  <strong>92%</strong>
                </div>
                <div>
                  <span>Конверсия в оплату</span>
                  <strong>+18%</strong>
                </div>
                <div>
                  <span>Потери на повторном контакте</span>
                  <strong>-27%</strong>
                </div>
              </div>
              <div className="proofBars">
                <p>
                  <span>Лид → Диалог</span>
                  <i style={{ width: "88%" }} />
                </p>
                <p>
                  <span>Диалог → Квалификация</span>
                  <i style={{ width: "67%" }} />
                </p>
                <p>
                  <span>Квалификация → Оплата</span>
                  <i style={{ width: "54%" }} />
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section featureSection reveal">
          <div className="featureSplit">
            <div className="featureColumns">
              {featureGroups.map((group) => (
                <article className="featureBox" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <aside className="sectorCard">
              <header>
                <h3>Фокус по нишам</h3>
                <Glyph name="spark" className="sectorSpark" />
              </header>
              <ul>
                <li>Основная: Клиники и эстетические услуги</li>
                <li>Также: Домашние сервисы и ремонт</li>
                <li>Также: Юридические услуги</li>
              </ul>
            </aside>
          </div>
          <p className="featureNote">
            TrustOne сначала закрывает потери во входящем спросе, а затем помогает находить следующий спрос и
            поддерживать сценарии со звонками.
          </p>
        </section>

        <section className="section reveal postPilotSection">
          <h2 className="sectionTitle">Что идет после стабилизации входящего спроса</h2>
          <div className="nextGrowthGrid">
            {postPilotCards.map((item) => (
              <article className="benefitCard" key={item.title}>
                <Glyph name={item.icon} className="benefitIcon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal">
          <h2 className="sectionTitle">Запуск за 48 часов</h2>
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

        <section className="section reveal" id="ceny">
          <h2 className="sectionTitle">Цены</h2>
          <p className="sectionSubtitle">
            Начинаем с пилота на части трафика, фиксируем базовую линию и масштабируемся только после подтвержденного
            результата.
          </p>
          <div className="pricingGrid">
            {pricing.map((plan) => (
              <article className={`priceCard ${plan.dark ? "dark" : ""}`} key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="priceAudience">{plan.audience}</p>
                <strong>{plan.price}</strong>
                <button>{plan.cta}</button>
                <ul>
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="ctaStrip section reveal">
          <article>
            <div className="hireTop">
              <Glyph name="spark" className="hireIcon" />
              <span className="hireBadge">АУДИТ</span>
            </div>
            <h3>Получить аудит воронки</h3>
            <p>Покажем, где теряются лиды и какой сценарий даст быстрый прирост на пилоте.</p>
            <button>{CTA_TERTIARY}</button>
          </article>
          <article className="dark">
            <div className="hireTop">
              <Glyph name="triangle" className="hireIcon" />
              <span className="hireBadge pro">ПИЛОТ</span>
            </div>
            <h3>Запустить пилот с KPI</h3>
            <p>Подключаем 1 канал, фиксируем базовую линию и доводим до оплаты без замены текущего стека.</p>
            <button>{CTA_PRIMARY}</button>
          </article>
        </section>

        <section className="section founder reveal">
          <div className="founderContent">
            <h2 className="sectionTitle">Зачем мы это сделали</h2>
            <p>TrustOne вырос из реальных продаж, где поздний ответ и слабый повторный контакт сжигали платный трафик.</p>
            <p>
              Мы строим не «бота», а слой выручки: квалификация, дожим до оплаты, атрибуция и контроль действий в
              кабинете.
            </p>
            <p>
              Позже мы добавили второй контур роста: поиск и приоритизацию новых клиентов, а также поддержку
              голосовых сценариев там, где нужна быстрая передача менеджеру.
            </p>
            <p>Каждую неделю видно, где деньги потерялись, где выросли, и какие правки дают следующий шаг роста.</p>
          </div>
          <div className="founderVisual">
            <img src="/ref_assets/founder_me.png" alt="Основатель TrustOne" loading="lazy" />
          </div>
        </section>

        <section className="section trustSection reveal">
          <h2 className="sectionTitle">Доверие и операционная надежность</h2>
          <p className="sectionSubtitle">Конкретные опоры для пилота и управляемого масштабирования.</p>
          <div className="partnerRow">
            <span className="partnerBadge">YooKassa</span>
            <span className="partnerBadge">CRM</span>
            <span className="partnerBadge">Изоляция</span>
            <span className="partnerBadge">Аудит</span>
            <span className="partnerBadge">РФ</span>
            <span className="partnerBadge">48ч</span>
          </div>
          <div className="trustList">
            <p>Интеграция YooKassa и платежный контроль</p>
            <p>Синхронизация с CRM без миграции</p>
            <p>Изоляция арендаторов и журнал аудита</p>
            <p>Пакет комплаенса РФ для операций</p>
          </div>
        </section>

        <Faq />
      </main>

      <footer className="footer reveal" id="contact">
        <div className="footerInner">
          <div className="footerBrand">
            <LogoMark className="footerLogoMark" />
            <span>TrustOne</span>
          </div>
          <h2 className="footerLead">Запросить пилот</h2>
          <p className="footerSublead">
            Подключим 1 канал, зафиксируем базовую линию и покажем прирост на части входящих лидов.
          </p>
          <form className="footerForm" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Имя / компания" aria-label="Имя или компания" />
            <input type="text" placeholder="Телеграм / телефон" aria-label="Телеграм или телефон" />
            <button type="submit">{CTA_PRIMARY}</button>
          </form>
          <div className="footerContacts">
            <a href="mailto:hello@trustone.ai">hello@trustone.ai</a>
            <a href="https://t.me/trustone_revenue" target="_blank" rel="noreferrer">
              Telegram: @trustone_revenue
            </a>
          </div>
          <small>© 2026 TrustOne. Слой выручки для мессенджерных продаж</small>
        </div>
      </footer>

      <a className="stickyCta" href="#contact">
        {CTA_PRIMARY}
      </a>
    </div>
  );
}
