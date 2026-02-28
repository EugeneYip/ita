const { useState } = React;

const C = {
  bg: "#faf6f1",
  card: "#ffffff",
  cardAlt: "#f5f0ea",
  accent: "#2563eb",
  accentLight: "#3b82f6",
  gold: "#b45309",
  green: "#047857",
  red: "#b91c1c",
  orange: "#c2410c",
  purple: "#7c3aed",
  pink: "#be185d",
  teal: "#0d9488",
  text: "#1e293b",
  textMuted: "#475569",
  textDim: "#94a3b8",
  border: "#e2ddd7",
  highlight: "#fffbeb",
  tagBg: "#eff6ff",
};

const Badge = ({ children, color = C.accent, style = {} }) => (
  <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 9999, fontSize: 11, fontWeight: 600, background: color + "18", color, letterSpacing: 0.3, ...style }}>{children}</span>
);

const Section = ({ title, titlePt, icon, children, accent = C.accent }) => (
  <div style={{ marginBottom: 28 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, borderBottom: `2px solid ${accent}44`, paddingBottom: 8 }}>
      <span style={{ fontSize: 20 }}>{icon}</span>
      <div>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: C.text }}>{title}</h3>
        {titlePt && <div style={{ fontSize: 13, color: C.textMuted, marginTop: 1 }}>{titlePt}</div>}
      </div>
    </div>
    {children}
  </div>
);

const InfoRow = ({ label, value, icon }) => (
  <div style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13 }}>
    {icon && <span style={{ width: 18, textAlign: "center" }}>{icon}</span>}
    <span style={{ color: C.textMuted, minWidth: 100 }}>{label}</span>
    <span style={{ color: C.text, fontWeight: 500, flex: 1 }}>{value}</span>
  </div>
);

const TimeBlock = ({ time, activity, activityPt, details, detailsPt, highlight }) => (
  <div style={{ display: "flex", gap: 12, marginBottom: 10, padding: "8px 12px", borderRadius: 8, background: highlight ? C.highlight : "transparent", borderLeft: highlight ? `3px solid ${C.gold}` : `3px solid ${C.border}` }}>
    <div style={{ minWidth: 70, fontSize: 12, fontWeight: 600, color: highlight ? C.gold : C.accent, paddingTop: 1 }}>{time}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{activity}</div>
      {activityPt && <div style={{ fontSize: 12, color: C.textMuted }}>{activityPt}</div>}
      {details && <div style={{ fontSize: 12, color: C.textDim, marginTop: 3, lineHeight: 1.5 }}>{details}</div>}
      {detailsPt && <div style={{ fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>{detailsPt}</div>}
    </div>
  </div>
);

const CompanyCard = ({ name, namePt, date, speaker, speakerTitle, attire, agenda, agendaPt, bg, website, linkedin }) => (
  <div style={{ background: C.card, borderRadius: 12, padding: 16, marginBottom: 12, borderLeft: `4px solid ${bg || C.accent}`, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
      <div>
        <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: C.text }}>{name}</h4>
        {namePt && <div style={{ fontSize: 12, color: C.textMuted }}>{namePt}</div>}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <Badge color={C.accent}>{date}</Badge>
        <Badge color={attire.includes("Business") ? C.gold : C.green}>{attire}</Badge>
      </div>
    </div>
    {speaker && <div style={{ marginTop: 8, fontSize: 12 }}><span style={{ color: C.textDim }}>Speaker / Palestrante: </span><span style={{ color: C.text, fontWeight: 600 }}>{speaker}</span>{speakerTitle && <span style={{ color: C.textDim }}> · {speakerTitle}</span>}</div>}
    {website && <div style={{ fontSize: 11, marginTop: 4 }}><span style={{ color: C.textDim }}>🔗 </span><span style={{ color: C.accent }}>{website}</span></div>}
    {linkedin && <div style={{ fontSize: 11 }}><span style={{ color: C.textDim }}>💼 </span><span style={{ color: C.accent }}>{linkedin}</span></div>}
    {agenda && (
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: C.textDim, marginBottom: 4 }}>AGENDA / PAUTA</div>
        {agenda.map((item, i) => (
          <div key={i} style={{ fontSize: 12, color: C.textMuted, padding: "2px 0", display: "flex", gap: 6 }}>
            <span style={{ color: C.accent }}>›</span>
            <span>{item}</span>
            {agendaPt && agendaPt[i] && <span style={{ color: C.textDim }}>| {agendaPt[i]}</span>}
          </div>
        ))}
      </div>
    )}
  </div>
);

const TABS = [
  { id: "overview", label: "Overview", labelPt: "Visão Geral", icon: "📋" },
  { id: "daily", label: "Daily", labelPt: "Dia a Dia", icon: "📅" },
  { id: "companies", label: "Companies", labelPt: "Empresas", icon: "🏢" },
  { id: "frameworks", label: "Frameworks", labelPt: "Estruturas", icon: "🧠" },
  { id: "logistics", label: "Logistics", labelPt: "Logística", icon: "🧳" },
  { id: "emergency", label: "Emergency", labelPt: "Emergência", icon: "🚨" },
];

const DAY_TABS = [
  { id: 0, label: "2/27 Fri", short: "Partida" },
  { id: 1, label: "2/28 Sat", short: "Chegada Milão" },
  { id: 2, label: "3/1 Sun", short: "Tour Milão" },
  { id: 3, label: "3/2 Mon", short: "Pagani+Ferrari" },
  { id: 4, label: "3/3 Tue", short: "Casile→Roma" },
  { id: 5, label: "3/4 Wed", short: "EIIS+SHAPE" },
  { id: 6, label: "3/5 Thu", short: "Olive Hill" },
  { id: 7, label: "3/6 Fri", short: "Fifth Beat" },
  { id: 8, label: "3/7 Sat", short: "Partida" },
];

function App() {
  const [tab, setTab] = useState("overview");
  const [dayIdx, setDayIdx] = useState(3);

  const renderOverview = () => (
    <div>
      <Section title="Trip at a Glance" titlePt="Resumo da Viagem" icon="🇮🇹" accent={C.green}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 16 }}>
          {[
            { label: "Duration / Duração", value: "10 Days / Dias", icon: "📅" },
            { label: "Cities / Cidades", value: "Milan → Rome", icon: "🏙️" },
            { label: "Companies / Empresas", value: "7 Visits / Visitas", icon: "🏢" },
            { label: "Trip ID", value: "227138", icon: "🔖" },
          ].map((item, i) => (
            <div key={i} style={{ background: C.card, borderRadius: 10, padding: 14, textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{item.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{item.value}</div>
              <div style={{ fontSize: 11, color: C.textDim }}>{item.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Timeline Overview" titlePt="Cronograma Geral" icon="🗓️" accent={C.purple}>
        {[
          { date: "2/27 Fri", en: "Depart USA", pt: "Partida dos EUA", meals: "—", attire: "—", color: C.textDim },
          { date: "2/28 Sat", en: "Arrive Milan · Welcome Dinner", pt: "Chegada em Milão · Jantar de Boas-Vindas", meals: "D", attire: "—", color: C.accent },
          { date: "3/1 Sun", en: "Milan Walking Tour · Duomo", pt: "Tour a Pé em Milão · Duomo", meals: "B L", attire: "Casual", color: C.accent },
          { date: "3/2 Mon", en: "⭐ Pagani + Ferrari (Motor Valley)", pt: "⭐ Pagani + Ferrari (Vale dos Motores)", meals: "B L", attire: "Casual", color: C.gold },
          { date: "3/3 Tue", en: "⭐ Casile e Casile → Train to Rome", pt: "⭐ Casile e Casile → Trem para Roma", meals: "B", attire: "Biz Casual", color: C.gold },
          { date: "3/4 Wed", en: "⭐ EIIS + Intellera SHAPE", pt: "⭐ EIIS + Intellera SHAPE", meals: "B", attire: "Biz Casual", color: C.gold },
          { date: "3/5 Thu", en: "⭐ Olive Hill Sabina", pt: "⭐ Olive Hill Sabina", meals: "B", attire: "Casual+Jacket", color: C.gold },
          { date: "3/6 Fri", en: "⭐ Rome Tour + Fifth Beat + Farewell", pt: "⭐ Tour Roma + Fifth Beat + Jantar de Despedida", meals: "B D", attire: "Biz Casual", color: C.gold },
          { date: "3/7 Sat", en: "Depart Rome", pt: "Partida de Roma", meals: "B", attire: "—", color: C.textDim },
        ].map((d, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "8px 10px", borderRadius: 8, marginBottom: 4, background: d.en.includes("⭐") ? C.highlight : "transparent", alignItems: "center" }}>
            <span style={{ minWidth: 70, fontSize: 12, fontWeight: 700, color: d.color }}>{d.date}</span>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 13, color: C.text, fontWeight: 500 }}>{d.en}</span>
              <span style={{ fontSize: 12, color: C.textDim, marginLeft: 8 }}>{d.pt}</span>
            </div>
            <Badge color={C.green} style={{ fontSize: 10 }}>{d.meals}</Badge>
            <Badge color={d.attire.includes("Biz") ? C.gold : C.textDim} style={{ fontSize: 10, minWidth: 60, textAlign: "center" }}>{d.attire}</Badge>
          </div>
        ))}
      </Section>

      <Section title="Meal Coverage Summary" titlePt="Resumo das Refeições Incluídas" icon="🍽️" accent={C.orange}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, fontSize: 13, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 1fr", gap: 4, marginBottom: 8, fontWeight: 700, color: C.textDim, fontSize: 11 }}>
            <span>DATE</span><span>BREAKFAST / CAFÉ</span><span>LUNCH / ALMOÇO</span><span>DINNER / JANTAR</span>
          </div>
          {[
            ["2/28", false, false, true],
            ["3/1", true, true, false],
            ["3/2", true, true, false],
            ["3/3", true, false, false],
            ["3/4", true, false, false],
            ["3/5", true, false, false],
            ["3/6", true, false, true],
            ["3/7", true, false, false],
          ].map(([d, b, l, din], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 1fr", gap: 4, padding: "3px 0", borderTop: `1px solid ${C.border}` }}>
              <span style={{ fontWeight: 600, color: C.text, fontSize: 12 }}>{d}</span>
              {[b, l, din].map((v, j) => (
                <span key={j} style={{ color: v ? C.green : C.textDim, fontSize: 12 }}>{v ? "✅ Included / Incluído" : "— On own / Por conta"}</span>
              ))}
            </div>
          ))}
          <div style={{ marginTop: 10, padding: "8px 10px", background: C.orange + "12", borderRadius: 6, fontSize: 12, color: C.orange }}>
            ⚠️ ~9 meals to arrange on your own / ~9 refeições por sua conta
          </div>
        </div>
      </Section>

      <Section title="Key Alerts" titlePt="Alertas Importantes" icon="⚠️" accent={C.red}>
        {[
          { icon: "⏰", en: "3/2 Mon: 6:15 AM breakfast — earliest morning of the trip", pt: "3/2 Seg: Café às 6:15 — manhã mais cedo da viagem" },
          { icon: "🧳", en: "3/3 Tue: Check out Milan 8:30 AM — pack night before, no return", pt: "3/3 Ter: Check-out Milão 8:30 — arrume malas na noite anterior, sem retorno" },
          { icon: "🥾", en: "3/5 Thu: Comfortable shoes + jacket — 10-min uphill walk", pt: "3/5 Qui: Sapatos confortáveis + jaqueta — caminhada de 10 min subindo" },
          { icon: "🌅", en: "3/7 Sat early group: 3:30 AM lobby — boxed breakfast at front desk", pt: "3/7 Sáb grupo cedo: 3:30 no lobby — café da manhã na recepção" },
          { icon: "🛂", en: "Passport needed at both hotel check-ins for scanning", pt: "Passaporte necessário no check-in de ambos os hotéis" },
          { icon: "💳", en: "Credit card required per room at both hotels for incidentals", pt: "Cartão de crédito por quarto em ambos os hotéis para despesas extras" },
          { icon: "🚇", en: "Rome transit: ROMA72H + ROMA24H via Stephanie Adams", pt: "Transporte Roma: ROMA72H + ROMA24H via Stephanie Adams" },
          { icon: "🏎️", en: "Ferrari production line restricted — museum + Fiorano panoramic only", pt: "Linha de produção da Ferrari restrita — apenas museu + panorâmica Fiorano" },
          { icon: "🏛️", en: "Rome walking tour: exterior only, no entrances. Whispers mandatory.", pt: "Tour a pé em Roma: apenas exterior, sem entradas. Fones obrigatórios." },
          { icon: "👥", en: "Ferrari museum tour: group splits into 2, each with a site guide", pt: "Tour do museu Ferrari: grupo dividido em 2, cada um com um guia local" },
        ].map((a, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "6px 10px", marginBottom: 4, fontSize: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16 }}>{a.icon}</span>
            <div><span style={{ color: C.text }}>{a.en}</span><br /><span style={{ color: C.textDim }}>{a.pt}</span></div>
          </div>
        ))}
      </Section>
    </div>
  );

  const renderDaily = () => {
    const days = [
      { title: "Depart USA / Partida dos EUA", meals: "None / Nenhuma", hotel: "Starhotels E.C.H.O. (pre-night)", attire: "—",
        schedule: [
          { time: "—", activity: "Depart on self-booked flights", activityPt: "Partida em voos reservados individualmente", details: "Early check-in confirmed for pre-night at Starhotels E.C.H.O. Pre-paid; incidentals at own expense.", detailsPt: "Check-in antecipado confirmado. Hospedagem pré-paga; despesas extras por conta própria." },
        ]
      },
      { title: "Arrive Milan / Chegada em Milão", meals: "Dinner / Jantar", hotel: "Starhotels E.C.H.O. (1/3)", attire: "Casual",
        schedule: [
          { time: "4:00 PM", activity: "Hotel check-in", activityPt: "Check-in no hotel", details: "Starhotels E.C.H.O., Viale Andrea Doria 4. Passport + credit card. Store luggage if room not ready.", detailsPt: "Passaporte + cartão de crédito. Guarde bagagem se o quarto não estiver pronto." },
          { time: "6:00 PM", activity: "Meet in lobby with Jack & Stephanie", activityPt: "Encontro no lobby com Jack e Stephanie" },
          { time: "6:30 PM", activity: "Depart on foot (12 min walk)", activityPt: "Saída a pé (12 min de caminhada)" },
          { time: "7:00 PM", activity: "Welcome Dinner — Osteria Mamma Rosa (2 hrs)", activityPt: "Jantar de Boas-Vindas — Osteria Mamma Rosa (2h)", highlight: true, details: "Menu: Aperitif → Cured meats, fried veg, buffalo mozzarella → Penne ragù + Risotto (half each) → Beef w/ thyme + roast potatoes → Tiramisù. Drinks: water, coffee, digestif. All dietary restrictions accommodated.", detailsPt: "Menu: Aperitivo → Frios, legumes fritos, mozzarella de búfala → Penne ragù + Risoto (meia porção cada) → Carne com tomilho + batatas assadas → Tiramisù. Bebidas: água, café, digestivo. Restrições alimentares atendidas." },
        ]
      },
      { title: "Milan Walking Tour / Tour a Pé em Milão", meals: "Breakfast, Lunch / Café, Almoço", hotel: "Starhotels E.C.H.O. (2/3)", attire: "Comfortable shoes / Sapatos confortáveis",
        schedule: [
          { time: "7:00 AM", activity: "Breakfast at hotel (ground floor)", activityPt: "Café da manhã no hotel (térreo)" },
          { time: "9:45 AM", activity: "Meet guide, depart on foot", activityPt: "Encontro com guia, saída a pé" },
          { time: "10:00 AM", activity: "Milan City Tour (1.5 hrs)", activityPt: "Tour pela cidade de Milão (1,5h)", details: "Duomo, La Scala, Vittorio Emanuele Gallery. Entrance to Duomo/La Scala + whispers included.", detailsPt: "Duomo, La Scala, Galeria Vittorio Emanuele. Entrada no Duomo/La Scala + fones incluídos." },
          { time: "11:30 AM", activity: "Duomo Terraces by lift", activityPt: "Terraços do Duomo de elevador", highlight: true },
          { time: "12:30 PM", activity: "Cathedral interior tour", activityPt: "Tour interior da catedral" },
          { time: "1:30 PM", activity: "Group Lunch — Fresco e Cimmino (1.5 hrs)", activityPt: "Almoço em grupo — Fresco e Cimmino (1,5h)", details: "Eggplant Parmigiana → Paccheri alla Nerano (zucchini & provolone) → Water", detailsPt: "Parmigiana de berinjela → Paccheri alla Nerano (abobrinha e provolone) → Água" },
          { time: "PM", activity: "Free time — dinner on own", activityPt: "Tempo livre — jantar por conta própria" },
        ]
      },
      { title: "⭐ Motor Valley — Pagani + Ferrari / Vale dos Motores", meals: "Breakfast, Lunch / Café, Almoço", hotel: "Starhotels E.C.H.O. (3/3)", attire: "Casual",
        schedule: [
          { time: "6:15 AM", activity: "Breakfast (ground floor) ⚠️ EARLY", activityPt: "Café da manhã (térreo) ⚠️ BEM CEDO" },
          { time: "7:00 AM", activity: "Depart by coach (2.5 hr drive)", activityPt: "Saída de ônibus (2,5h de viagem)", details: "Destination: San Cesario sul Panaro / Destino: San Cesario sul Panaro" },
          { time: "10:00 AM", activity: "⭐ PAGANI Factory Tour (1 hr)", activityPt: "⭐ Tour pela Fábrica PAGANI (1h)", highlight: true, details: "Museum & Atelier guided tour. Horacio Pagani's design philosophy. Artisans handcrafting carbon fiber. Huayra/Utopia assembly.", detailsPt: "Tour guiado pelo Museu e Ateliê. Filosofia de design de Horacio Pagani. Artesãos trabalhando fibra de carbono. Montagem do Huayra/Utopia." },
          { time: "11:45 AM", activity: "Group Lunch in Modena — Ristorante il Fantino (1.5 hrs)", activityPt: "Almoço em grupo em Modena — Ristorante il Fantino (1,5h)", details: "Fried gnocco & tigelle w/ cold cuts → Gramigna pasta w/ sausage ragù (or Tortelli Zucca) → Pork ribs in Lambrusco (or cheese platter) → Water & soft drinks", detailsPt: "Gnocco frito e tigelle com frios → Gramigna com ragù de linguiça (ou Tortelli de abóbora) → Costela de porco no Lambrusco (ou tábua de queijos) → Água e refrigerantes" },
          { time: "1:30 PM", activity: "⭐ FERRARI Museum & Factory Grounds (2 hrs)", activityPt: "⭐ Museu e Terrenos da Fábrica FERRARI (2h)", highlight: true, details: "1:30 PM free museum access. 2:00 PM guided tour — split into 2 groups. Historic F1 cars, prototypes, interactive exhibits. Fiorano Track panoramic tour. ⚠️ Production line RESTRICTED.", detailsPt: "1:30 acesso livre ao museu. 2:00 tour guiado — dividido em 2 grupos. Carros históricos de F1, protótipos, exposições interativas. Tour panorâmico da Pista de Fiorano. ⚠️ Linha de produção RESTRITA." },
          { time: "4:00 PM", activity: "Coach back to Milan (3 hrs) — dinner on own", activityPt: "Ônibus de volta a Milão (3h) — jantar por conta" },
        ]
      },
      { title: "⭐ Casile e Casile → Rome / → Roma", meals: "Breakfast only / Apenas café", hotel: "→ Starhotels Michelangelo, Rome (1/4)", attire: "Business Casual",
        schedule: [
          { time: "6:30 AM", activity: "Breakfast (ground floor)", activityPt: "Café da manhã (térreo)" },
          { time: "8:30 AM", activity: "⚠️ CHECK OUT Milan hotel", activityPt: "⚠️ CHECK-OUT do hotel em Milão", details: "Return key, settle incidentals, LOAD LUGGAGE ON COACH. Pack night before!", detailsPt: "Devolver chave, acertar extras, COLOCAR BAGAGEM NO ÔNIBUS. Arrume malas na noite anterior!" },
          { time: "9:00 AM", activity: "Depart by coach", activityPt: "Saída de ônibus" },
          { time: "10:00 AM", activity: "⭐ CASILE E CASILE (2.5 hrs)", activityPt: "⭐ CASILE E CASILE (2,5h)", highlight: true, details: "Speaker: Francesco Casile, CEO (50+ yrs). Heritage & positioning, human-centered brand design, strategy → creative direction, modernizing traditional brands, Q&A.", detailsPt: "Palestrante: Francesco Casile, CEO (50+ anos). Herança e posicionamento, design de marca centrado no ser humano, estratégia → direção criativa, modernização de marcas tradicionais, perguntas e respostas." },
          { time: "12:30 PM", activity: "Lunch on own (2.5 hrs)", activityPt: "Almoço por conta (2,5h)", details: "Assistant provides restaurant/shopping recommendations / Assistente indica restaurantes e lojas" },
          { time: "3:00 PM", activity: "Coach to train station", activityPt: "Ônibus até a estação de trem" },
          { time: "4:00 PM", activity: "Frecciarossa 9465 to Rome (3 hrs)", activityPt: "Frecciarossa 9465 para Roma (3h)", highlight: true, details: "Coach #5. Seats: 6A-B, 7A-B, 8A-D, 9A-D, 10A-D, 11A-D, 12A-D, 13A-C", detailsPt: "Vagão #5. Assentos reservados." },
          { time: "7:15 PM", activity: "Meet assistant Christian, board coach", activityPt: "Encontro com assistente Christian, embarcar no ônibus", details: "Transit passes (ROMA72H + ROMA24H) → Stephanie Adams", detailsPt: "Passes de transporte (ROMA72H + ROMA24H) → Stephanie Adams" },
          { time: "8:00 PM", activity: "Check in Starhotels Michelangelo, Rome", activityPt: "Check-in Starhotels Michelangelo, Roma", details: "14 Via della Stazione di San Pietro. Passport + credit card.", detailsPt: "Passaporte + cartão de crédito." },
        ]
      },
      { title: "⭐ EIIS + Intellera SHAPE", meals: "Breakfast only / Apenas café", hotel: "Starhotels Michelangelo (2/4)", attire: "Business Casual",
        schedule: [
          { time: "6:00 AM", activity: "Breakfast (ground floor)", activityPt: "Café da manhã (térreo)" },
          { time: "10:45 AM", activity: "Depart by coach", activityPt: "Saída de ônibus" },
          { time: "11:30 AM", activity: "⭐ EIIS (1.5 hrs)", activityPt: "⭐ EIIS — Instituto Europeu de Inovação para Sustentabilidade (1,5h)", highlight: true, details: "Speaker: Andrea Geremicca. 11:30-12:00 Welcome → 12:00-12:30 Lecture on Innovation → 12:30-1:00 Q&A → Tour of 15th-century palazzo.", detailsPt: "Palestrante: Andrea Geremicca. Boas-vindas → Palestra sobre Inovação → Perguntas e respostas → Tour pelo palácio do século XV." },
          { time: "1:00 PM", activity: "Lunch on own", activityPt: "Almoço por conta", details: "Assistant provides recommendations / Assistente indica opções" },
          { time: "3:00 PM", activity: "⭐ INTELLERA SHAPE (1.5 hrs)", activityPt: "⭐ INTELLERA SHAPE (1,5h)", highlight: true, details: "Speaker: Ivan Massimiliano Cardaci, CEO. Design thinking in public sector, SHAPE methodology (problem framing → stakeholder mapping → prototyping → iteration), integrating strategy/policy/service design, Q&A.", detailsPt: "Palestrante: Ivan Massimiliano Cardaci, CEO. Design thinking no setor público, metodologia SHAPE (enquadramento → mapeamento de stakeholders → prototipagem → iteração), integração de estratégia/política/design de serviços, P&R." },
          { time: "4:30 PM", activity: "Return to hotel (30 min) — dinner on own", activityPt: "Retorno ao hotel (30 min) — jantar por conta" },
        ]
      },
      { title: "⭐ Olive Hill Sabina / Fazenda de Oliveiras", meals: "Breakfast only / Apenas café", hotel: "Starhotels Michelangelo (3/4)", attire: "Casual + shoes + jacket / + sapatos + jaqueta",
        schedule: [
          { time: "6:00 AM", activity: "Breakfast (ground floor)", activityPt: "Café da manhã (térreo)" },
          { time: "8:00 AM", activity: "Depart by coach (1 hr 45 min)", activityPt: "Saída de ônibus (1h45)" },
          { time: "10:00 AM", activity: "⭐ OLIVE HILL SABINA (2 hrs)", activityPt: "⭐ OLIVE HILL SABINA (2h)", highlight: true, details: "Speakers: Emma & Scott Notman. ⚠️ 10-min uphill walk from coach. Grove tour (Emma) → Processing tour & business strategy (Scott) → Q&A → Tasting → Take a bottle home!", detailsPt: "Palestrantes: Emma e Scott Notman. ⚠️ Caminhada de 10 min subindo desde o ônibus. Tour pelo olival (Emma) → Tour de processamento e estratégia (Scott) → P&R → Degustação → Leve uma garrafa para casa!" },
          { time: "12:00 PM", activity: "Return to hotel (1.5 hrs)", activityPt: "Retorno ao hotel (1,5h)" },
          { time: "PM", activity: "Free — lunch & dinner on own", activityPt: "Livre — almoço e jantar por conta" },
        ]
      },
      { title: "⭐ Rome Tour + Fifth Beat + Farewell / Tour Roma + Despedida", meals: "Breakfast, Dinner / Café, Jantar", hotel: "Starhotels Michelangelo (4/4)", attire: "Business Casual",
        schedule: [
          { time: "6:00 AM", activity: "Breakfast (ground floor)", activityPt: "Café da manhã (térreo)" },
          { time: "9:30 AM", activity: "Meet guide Carlotta in lobby", activityPt: "Encontro com guia Carlotta no lobby" },
          { time: "9:30 AM", activity: "Rome Walking Tour (3 hrs)", activityPt: "Tour a Pé por Roma (3h)", details: "Colosseum (80 AD, 55,000 capacity) → Arch of Constantine (315 AD) → Palatine Hill → Roman Forum. NO entrances. Whispers mandatory.", detailsPt: "Coliseu (80 d.C., 55.000 lugares) → Arco de Constantino (315 d.C.) → Monte Palatino → Fórum Romano. SEM entradas. Fones obrigatórios." },
          { time: "12:30 PM", activity: "Lunch on own", activityPt: "Almoço por conta" },
          { time: "2:00 PM", activity: "Meet assistant in lobby, board coach", activityPt: "Encontro com assistente no lobby, embarcar" },
          { time: "3:00 PM", activity: "⭐ FIFTH BEAT (1.5 hrs)", activityPt: "⭐ FIFTH BEAT (1,5h)", highlight: true, details: "Speaker: Raffaele Boiano, CEO & Founder. Design philosophy, embedding design in clients, measuring impact (KPIs), AI & emerging tech in digital experience design, Q&A.", detailsPt: "Palestrante: Raffaele Boiano, CEO e Fundador. Filosofia de design, incorporação de design em clientes, mensuração de impacto (KPIs), IA e tecnologias emergentes em design de experiência digital, P&R." },
          { time: "6:30 PM", activity: "Depart on foot (15 min)", activityPt: "Saída a pé (15 min)" },
          { time: "7:00 PM", activity: "Farewell Dinner — Taverna Angelica (2 hrs)", activityPt: "Jantar de Despedida — Taverna Angelica (2h)", highlight: true, details: "Standard: Pork neck w/ tomato & rosemary → Ravioli amatriciana → Dark chocolate w/ mango & passion fruit. Pork-free: Roasted cardoncello mushroom → Three pepper pasta → Same dessert. Water + 1 soft drink.", detailsPt: "Padrão: Pescoço de porco com tomate e alecrim → Ravioli amatriciana → Chocolate amargo com manga e maracujá. Sem porco: Cogumelo cardoncello assado → Massa três pimentas → Mesma sobremesa. Água + 1 refrigerante." },
        ]
      },
      { title: "Program Ends — Depart Rome / Fim do Programa — Partida de Roma", meals: "Breakfast / Café", hotel: "Check out / Check-out", attire: "—",
        schedule: [
          { time: "3:30 AM", activity: "⚠️ Early departure group — lobby", activityPt: "⚠️ Grupo de partida antecipada — lobby", details: "Mini-van → FCO Terminal 1. Lucien (TAP 839, 6:00), Roy Chowdhury (AA 719, 6:10), Hickey (BA 1576, 6:10), Lenz (BA 1576, 6:10), Darkoa-Ampem (BA 553, 6:45). Boxed breakfast at front desk.", detailsPt: "Mini-van → FCO Terminal 1. Café da manhã em caixa na recepção (fruta, torrada com geleia/Nutella, croissant, água, suco)." },
          { time: "6:30 AM", activity: "Breakfast (ground floor)", activityPt: "Café da manhã (térreo)" },
          { time: "10:00 AM", activity: "Later departure group — lobby", activityPt: "Grupo de partida posterior — lobby", details: "Mini-van → FCO Terminal 3. Assistant: Christian De Cesare. Avalon (AA 719, 1:10), Bunn (BA 1576, 1:10), Maz (BA 1576, 1:10), Bouchrouche (BA 553, 1:20), Xing (WizzAir 6065, 1:45).", detailsPt: "Mini-van → FCO Terminal 3. Assistente: Christian De Cesare." },
          { time: "11:00 AM", activity: "CHECK OUT Rome hotel", activityPt: "CHECK-OUT do hotel em Roma", details: "Return key, settle incidentals, store luggage at front desk if needed.", detailsPt: "Devolver chave, acertar extras, guardar bagagem na recepção se necessário." },
        ]
      },
    ];

    const day = days[dayIdx];
    return (
      <div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 16 }}>
          {DAY_TABS.map((dt) => (
            <button key={dt.id} onClick={() => setDayIdx(dt.id)} style={{ padding: "6px 10px", borderRadius: 8, border: `1px solid ${dayIdx === dt.id ? C.accent : C.border}`, cursor: "pointer", fontSize: 11, fontWeight: dayIdx === dt.id ? 700 : 400, background: dayIdx === dt.id ? C.accent : C.card, color: dayIdx === dt.id ? "#fff" : C.textMuted, transition: "all 0.2s" }}>
              <div>{dt.label}</div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>{dt.short}</div>
            </button>
          ))}
        </div>
        <div style={{ background: C.card, borderRadius: 12, padding: 16, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700, color: C.text }}>{DAY_TABS[dayIdx].label} — {day.title}</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <Badge color={C.green}>🍽️ {day.meals}</Badge>
            <Badge color={C.purple}>🏨 {day.hotel}</Badge>
            <Badge color={C.gold}>👔 {day.attire}</Badge>
          </div>
          {day.schedule.map((s, i) => (
            <TimeBlock key={i} {...s} />
          ))}
        </div>
      </div>
    );
  };

  const renderCompanies = () => (
    <div>
      <CompanyCard name="Pagani" namePt="Pagani — fabricante boutique de hipercarros" date="3/2 Mon" speaker="(Site guides / Guias locais)" speakerTitle="Factory & Atelier / Fábrica e Ateliê" attire="Casual" bg={C.red}
        agenda={["Museum & Atelier guided tour (1 hr)", "Horacio Pagani's design philosophy", "Artisans handcrafting carbon fiber", "Huayra / Utopia assembly observation"]}
        agendaPt={["Tour guiado pelo Museu e Ateliê (1h)", "Filosofia de design de Horacio Pagani", "Artesãos trabalhando fibra de carbono", "Observação da montagem Huayra / Utopia"]} />

      <CompanyCard name="Ferrari" namePt="Ferrari — marca icônica de carros esportivos de luxo" date="3/2 Mon" speaker="(2 site guides / 2 guias locais)" speakerTitle="Museum & Fiorano / Museu e Fiorano" attire="Casual" bg={C.red}
        agenda={["Free museum access (1:30 PM)", "Guided tour — 2 groups (2:00 PM)", "Historic F1 cars, prototypes, interactive exhibits", "Fiorano Track & Viale Enzo Ferrari panoramic tour", "⚠️ Production line access RESTRICTED"]}
        agendaPt={["Acesso livre ao museu (1:30)", "Tour guiado — 2 grupos (2:00)", "Carros históricos F1, protótipos, exposições interativas", "Tour panorâmico Pista Fiorano e Viale Enzo Ferrari", "⚠️ Acesso à linha de produção RESTRITO"]} />

      <CompanyCard name="Casile e Casile" namePt="Showroom de luxo e distribuição de marcas" date="3/3 Tue" speaker="Francesco Casile" speakerTitle="CEO & Founder / Fundador (50+ years / anos)" attire="Business Casual" bg={C.pink}
        website="casileecasile.it" agenda={["Introduction (heritage, positioning, sectors)", "Human-centered brand & communication design", "Strategy → Creative direction", "Brand identity ↔ Business objectives", "Modernizing traditional brands", "Q&A"]}
        agendaPt={["Introdução (herança, posicionamento, setores)", "Design de marca centrado no ser humano", "Estratégia → Direção criativa", "Identidade de marca ↔ Objetivos de negócio", "Modernização de marcas tradicionais", "Perguntas e respostas"]} />

      <CompanyCard name="EIIS" namePt="Instituto Europeu de Inovação para Sustentabilidade" date="3/4 Wed" speaker="Andrea Geremicca" attire="Business Casual" bg={C.green}
        website="eiis.eu" agenda={["Welcome & Greetings (11:30-12:00)", "Lecture on Innovation (12:00-12:30)", "Q&A (12:30-1:00)", "Tour of 15th-century palazzo"]}
        agendaPt={["Boas-vindas (11:30-12:00)", "Palestra sobre Inovação (12:00-12:30)", "Perguntas e respostas (12:30-1:00)", "Tour pelo palácio do século XV"]} />

      <CompanyCard name="Intellera SHAPE" namePt="Unidade de design e inovação em experiência (parte da Accenture)" date="3/4 Wed" speaker="Ivan Massimiliano Cardaci" speakerTitle="CEO" attire="Business Casual" bg={C.teal}
        website="intelleraconsulting.com" linkedin="linkedin.com/in/ivancardaci"
        agenda={["Why design thinking matters in public sector", "Human-centered design in gov't & regulated sectors", "SHAPE methodology (framing → mapping → prototyping → iteration)", "Integrating strategy, policy, service design", "Q&A"]}
        agendaPt={["Por que design thinking importa no setor público", "Design centrado no ser humano no governo", "Metodologia SHAPE (enquadramento → mapeamento → prototipagem → iteração)", "Integração de estratégia, política e design de serviços", "Perguntas e respostas"]} />

      <CompanyCard name="Olive Hill Sabina" namePt="Fazenda familiar orgânica de oliveiras" date="3/5 Thu" speaker="Emma & Scott Notman" speakerTitle="Co-owners / Coproprietários (since / desde 2018)" attire="Casual + shoes + jacket" bg={C.orange}
        agenda={["Grove tour & growth methods (Emma)", "Processing tour & business strategy (Scott)", "Q&A", "Olive oil tasting", "🎁 Take a bottle home!"]}
        agendaPt={["Tour pelo olival e métodos de cultivo (Emma)", "Tour de processamento e estratégia de negócios (Scott)", "Perguntas e respostas", "Degustação de azeite", "🎁 Leve uma garrafa para casa!"]} />

      <CompanyCard name="Fifth Beat" namePt="Consultoria italiana de design digital e inovação" date="3/6 Fri" speaker="Raffaele Boiano" speakerTitle="CEO & Founder / Fundador" attire="Business Casual" bg={C.purple}
        website="fifthbeat.com" linkedin="linkedin.com/in/rboiano"
        agenda={["Design philosophy & methodology", "Embedding design within client organizations", "Measuring impact (KPIs, adoption, business outcomes)", "Design leadership & cross-functional collaboration", "AI & emerging tech in digital experience design", "Q&A"]}
        agendaPt={["Filosofia e metodologia de design", "Incorporação de design em organizações clientes", "Mensuração de impacto (KPIs, adoção, resultados)", "Liderança em design e colaboração multifuncional", "IA e tecnologias emergentes em design de experiência", "Perguntas e respostas"]} />
    </div>
  );

  const renderFrameworks = () => (
    <div>
      <Section title="Keeley's Ten Types of Innovation" titlePt="Os Dez Tipos de Inovação de Keeley — Mapeamento por Empresa" icon="🔟" accent={C.accent}>
        {[
          { type: "Profit Model / Modelo de Lucro", cat: "Configuration", companies: "Ferrari (controlled scarcity / escassez controlada), Olive Hill (premium niche / nicho premium), Pagani (ultra-bespoke / ultrapersonalizado)" },
          { type: "Network / Rede", cat: "Configuration", companies: "Casile e Casile (ecosystem intermediary / intermediário ecossistêmico), EIIS (cross-institutional / interinstitucional)" },
          { type: "Structure / Estrutura", cat: "Configuration", companies: "Intellera SHAPE (Accenture integration / integração Accenture), Fifth Beat (embedding design / incorporação de design)" },
          { type: "Process / Processo", cat: "Configuration", companies: "Pagani (handcraft + carbon fiber / artesanato + fibra de carbono), Olive Hill (regenerative farming / agricultura regenerativa), Ferrari (racing→road / corrida→estrada)" },
          { type: "Product Performance / Desempenho", cat: "Offering", companies: "Ferrari (performance engineering / engenharia de desempenho), Pagani (materials science / ciência de materiais)" },
          { type: "Product System / Sistema", cat: "Offering", companies: "Ferrari (car + brand + racing / carro + marca + corrida), Casile e Casile (portfolio curation / curadoria de portfólio)" },
          { type: "Service / Serviço", cat: "Experience", companies: "Fifth Beat (design consulting / consultoria), Intellera SHAPE (public service redesign / redesign de serviço público)" },
          { type: "Channel / Canal", cat: "Experience", companies: "Casile e Casile (intermediary / intermediário), Olive Hill (DTC vs. distribution / DTC vs. distribuição)" },
          { type: "Brand / Marca", cat: "Experience", companies: "Ferrari (identity filter / filtro de identidade), Pagani (founder mythology / mitologia do fundador), Casile e Casile ('Made in Italy')" },
          { type: "Customer Engagement / Engajamento", cat: "Experience", companies: "Ferrari (Fiorano as brand theater / teatro de marca), Pagani (bespoke co-creation / cocriação), EIIS (learning experiences / experiências de aprendizagem)" },
        ].map((item, i) => (
          <div key={i} style={{ padding: "8px 12px", marginBottom: 4, borderRadius: 8, background: i % 2 === 0 ? C.cardAlt : "transparent", fontSize: 12 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 2 }}>
              <span style={{ fontWeight: 700, color: C.text, minWidth: 220 }}>{item.type}</span>
              <Badge color={item.cat === "Configuration" ? C.accent : item.cat === "Offering" ? C.green : C.purple}>{item.cat}</Badge>
            </div>
            <div style={{ color: C.textMuted, paddingLeft: 4 }}>{item.companies}</div>
          </div>
        ))}
      </Section>

      <Section title="Verganti's Design-Driven Innovation" titlePt="Inovação Orientada pelo Design de Verganti" icon="💡" accent={C.gold}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 10, lineHeight: 1.6 }}>
            <strong style={{ color: C.text }}>Three modes / Três modos:</strong><br />
            🔧 <strong>Technology-push / Empurrão tecnológico:</strong> Driven by new tech / Impulsionado por nova tecnologia<br />
            📊 <strong>Market-pull / Puxão do mercado:</strong> Driven by customer needs / Impulsionado por necessidades do cliente<br />
            🎨 <strong>Design-driven / Orientado pelo design:</strong> Proposes new <em>meanings</em> / Propõe novos <em>significados</em> — changes what a product means before form/function / muda o que um produto significa antes da forma/função
          </div>
        </div>
        {[
          { company: "Pagani", color: C.red, en: "Purest design-driven case. Horacio as visionary interpreter. Carbon fiber = technology, but its meaning (art + science) is the innovation.", pt: "Caso mais puro de design-driven. Horacio como intérprete visionário. Fibra de carbono = tecnologia, mas seu significado (arte + ciência) é a inovação." },
          { company: "Ferrari", color: C.red, en: "Design-driven at core, now facing technology-push pressures (electrification) challenging its meaning structure. Identity filter = mechanism for processing this tension.", pt: "Design-driven no núcleo, agora enfrentando pressões de technology-push (eletrificação) desafiando sua estrutura de significado. Filtro de identidade = mecanismo para processar essa tensão." },
          { company: "Casile e Casile", color: C.pink, en: "A 'meaning intermediary' — Francesco curates brands, managing the meaning layer for designers.", pt: "Um 'intermediário de significado' — Francesco faz curadoria de marcas, gerenciando a camada de significado para designers." },
          { company: "EIIS", color: C.green, en: "Changing the meaning of sustainability: from compliance burden → strategic opportunity.", pt: "Mudando o significado de sustentabilidade: de ônus de conformidade → oportunidade estratégica." },
          { company: "Intellera SHAPE", color: C.teal, en: "Design-driven logic in public services — redefining what government services mean to citizens.", pt: "Lógica design-driven em serviços públicos — redefinindo o que serviços governamentais significam para cidadãos." },
          { company: "Olive Hill", color: C.orange, en: "A meaning play in a commodity market. 'Olive oil' = undifferentiated. 'Hand-harvested organic oil from regenerated Sabina grove' = meaning proposition.", pt: "Uma jogada de significado num mercado de commodities. 'Azeite' = indiferenciado. 'Azeite orgânico colhido à mão de olival regenerado em Sabina' = proposta de significado." },
          { company: "Fifth Beat", color: C.purple, en: "The meta-case — helps organizations become design-driven. Their methodology itself is the innovation.", pt: "O metacaso — ajuda organizações a se tornarem design-driven. Sua própria metodologia é a inovação." },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "8px 12px", marginBottom: 6, borderRadius: 8, borderLeft: `3px solid ${item.color}`, background: C.card, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
            <div style={{ minWidth: 100, fontWeight: 700, fontSize: 12, color: item.color }}>{item.company}</div>
            <div style={{ flex: 1, fontSize: 12 }}>
              <div style={{ color: C.text, lineHeight: 1.5 }}>{item.en}</div>
              <div style={{ color: C.textDim, lineHeight: 1.5 }}>{item.pt}</div>
            </div>
          </div>
        ))}
      </Section>

      <Section title="Ferrari Identity Filter — Cross-Company" titlePt="Filtro de Identidade Ferrari — Aplicação Entre Empresas" icon="🔍" accent={C.red}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>
            The "identity filter" describes how a company evaluates new technologies, trends, or pressures against its core identity to decide what to adopt, adapt, or reject.<br />
            O "filtro de identidade" descreve como uma empresa avalia novas tecnologias, tendências ou pressões contra sua identidade central para decidir o que adotar, adaptar ou rejeitar.
          </div>
        </div>
        {[
          { company: "Pagani", en: "Horacio IS the filter. Key question: what happens when the founder is no longer the gatekeeper?", pt: "Horacio É o filtro. Questão-chave: o que acontece quando o fundador não é mais o guardião?", color: C.red },
          { company: "Ferrari", en: "Documented in the case study. Probe current examples — how is the electric Ferrari being filtered?", pt: "Documentado no estudo de caso. Investigue exemplos atuais — como a Ferrari elétrica está sendo filtrada?", color: C.red },
          { company: "Casile e Casile", en: "Francesco's 50+ years of curation IS an identity filter for brands he represents.", pt: "Os 50+ anos de curadoria de Francesco SÃO um filtro de identidade para as marcas que representa.", color: C.pink },
          { company: "EIIS", en: "Filter = 'Does this contribute to genuine sustainability, or is it performative?'", pt: "Filtro = 'Isso contribui para sustentabilidade genuína, ou é performativo?'", color: C.green },
          { company: "Olive Hill", en: "Small enough that founders' personal values are the filter. Ask what they turned down.", pt: "Pequeno o suficiente para que os valores pessoais dos fundadores sejam o filtro. Pergunte o que recusaram.", color: C.orange },
          { company: "Fifth Beat", en: "Filter on two levels: own brand identity + helping clients develop their own filters.", pt: "Filtro em dois níveis: identidade da própria marca + ajudar clientes a desenvolver seus próprios filtros.", color: C.purple },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "8px 12px", marginBottom: 6, borderRadius: 8, borderLeft: `3px solid ${item.color}`, background: C.card, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
            <div style={{ minWidth: 100, fontWeight: 700, fontSize: 12, color: item.color }}>{item.company}</div>
            <div style={{ flex: 1, fontSize: 12 }}>
              <div style={{ color: C.text, lineHeight: 1.5 }}>{item.en}</div>
              <div style={{ color: C.textDim, lineHeight: 1.5 }}>{item.pt}</div>
            </div>
          </div>
        ))}
      </Section>
    </div>
  );

  const renderLogistics = () => (
    <div>
      <Section title="Accommodations" titlePt="Hospedagem" icon="🏨" accent={C.purple}>
        {[
          { name: "Starhotels E.C.H.O. — Milan / Milão", addr: "Viale Andrea Doria, 4", dates: "Feb 27 – Mar 3 (3 nights / noites)", checkIn: "Feb 27 (pre-night / noite extra) / Feb 28 (program / programa)", checkOut: "Mar 3, 8:30 AM", web: "starhotels.com", notes: "Pre-night pre-paid. Incidentals at own expense. Breakfast: ground floor. / Noite extra pré-paga. Extras por conta própria. Café: térreo." },
          { name: "Starhotels Michelangelo — Rome / Roma", addr: "14 Via della Stazione di San Pietro", dates: "Mar 3 – Mar 7 (4 nights / noites)", checkIn: "Mar 3, 8:00 PM", checkOut: "Mar 7, 11:00 AM", web: "starhotels.com/en/our-hotels/michelangelo-rome/", notes: "Transit passes via Stephanie Adams: ROMA72H + ROMA24H. / Passes de transporte via Stephanie Adams." },
        ].map((h, i) => (
          <div key={i} style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <h4 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: C.text }}>{h.name}</h4>
            <InfoRow label="Address / Endereço" value={h.addr} icon="📍" />
            <InfoRow label="Dates / Datas" value={h.dates} icon="📅" />
            <InfoRow label="Check-in" value={h.checkIn} icon="🔑" />
            <InfoRow label="Check-out" value={h.checkOut} icon="🚪" />
            <InfoRow label="Website" value={h.web} icon="🔗" />
            <div style={{ marginTop: 6, fontSize: 12, color: C.textDim, padding: "6px 8px", background: C.cardAlt, borderRadius: 6 }}>
              📋 Check-in requires passport scan + 1 credit card/room. / Check-in exige digitalização do passaporte + 1 cartão de crédito por quarto.<br />{h.notes}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Transportation" titlePt="Transporte" icon="🚄" accent={C.teal}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h4 style={{ margin: "0 0 6px", color: C.text, fontSize: 14 }}>Frecciarossa 9465 — Milan → Rome / Milão → Roma</h4>
          <InfoRow label="Date / Data" value="Mar 3 (Tue / Ter)" icon="📅" />
          <InfoRow label="Departure / Partida" value="4:00 PM CET" icon="🕓" />
          <InfoRow label="Duration / Duração" value="3 hours / horas" icon="⏱️" />
          <InfoRow label="Coach / Vagão" value="#5" icon="🚃" />
          <InfoRow label="Seats / Assentos" value="6A-B, 7A-B, 8A-D, 9A-D, 10A-D, 11A-D, 12A-D, 13A-C" icon="💺" />
        </div>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h4 style={{ margin: "0 0 6px", color: C.text, fontSize: 14 }}>Rome Transit Passes / Passes de Transporte de Roma</h4>
          <InfoRow label="Per person / Por pessoa" value="1× ROMA72H + 1× ROMA24H" icon="🚇" />
          <InfoRow label="Distribution / Distribuição" value="Christian → Stephanie Adams → group / grupo" icon="👥" />
        </div>
      </Section>

      <Section title="Departure Flights — Mar 7" titlePt="Voos de Partida — 7 de Março" icon="✈️" accent={C.orange}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h4 style={{ margin: "0 0 8px", color: C.gold, fontSize: 13 }}>Early Group / Grupo Cedo — 3:30 AM lobby → FCO Terminal 1</h4>
          {[
            ["Lucien, Gaethan Nicholas", "TAP PORTUGAL 839", "6:00 AM"],
            ["Roy Chowdhury, Arijit", "AMERICAN AIRLINES #719", "6:10 AM"],
            ["Hickey, Morgan Elizabeth", "BRITISH AIRWAYS #1576", "6:10 AM"],
            ["Lenz, Abigail Mary", "BRITISH AIRWAYS #1576", "6:10 AM"],
            ["Darkoa-Ampem, Ellen", "BRITISH AIRWAYS #553", "6:45 AM"],
          ].map(([n, f, t], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 70px", gap: 8, padding: "3px 0", borderBottom: `1px solid ${C.border}`, fontSize: 12 }}>
              <span style={{ color: C.text }}>{n}</span>
              <span style={{ color: C.textMuted }}>{f}</span>
              <span style={{ color: C.gold, fontWeight: 600 }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 8, fontSize: 11, color: C.orange }}>🥐 Boxed breakfast at front desk / Café em caixa na recepção: fruit, toast w/ jam/Nutella, croissant, water, juice / fruta, torrada, croissant, água, suco</div>
        </div>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h4 style={{ margin: "0 0 8px", color: C.accent, fontSize: 13 }}>Later Group / Grupo Posterior — 10:00 AM lobby → FCO Terminal 3</h4>
          <div style={{ fontSize: 11, color: C.textDim, marginBottom: 6 }}>Assistant / Assistente: Christian De Cesare · +39 392 4426115</div>
          {[
            ["Avalon, Myles Danilo", "AMERICAN AIRLINES #719", "1:10 PM"],
            ["Bunn, Brittany Madison", "BRITISH AIRWAYS #1576", "1:10 PM"],
            ["Maz, Chester McDonald", "BRITISH AIRWAYS #1576", "1:10 PM"],
            ["Bouchrouche, Ryan Maroun", "BRITISH AIRWAYS #553", "1:20 PM"],
            ["Xing, Victor Min", "WizzAir #6065", "1:45 PM"],
          ].map(([n, f, t], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 70px", gap: 8, padding: "3px 0", borderBottom: `1px solid ${C.border}`, fontSize: 12 }}>
              <span style={{ color: C.text }}>{n}</span>
              <span style={{ color: C.textMuted }}>{f}</span>
              <span style={{ color: C.accent, fontWeight: 600 }}>{t}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Dress Code Summary" titlePt="Resumo do Dress Code" icon="👔" accent={C.gold}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            ["3/2 Mon", "Pagani & Ferrari", "Casual", C.green],
            ["3/3 Tue", "Casile e Casile", "Business Casual", C.gold],
            ["3/4 Wed", "EIIS & SHAPE", "Business Casual", C.gold],
            ["3/5 Thu", "Olive Hill", "Casual + sapatos + jaqueta", C.orange],
            ["3/6 Fri", "Fifth Beat", "Business Casual", C.gold],
          ].map(([d, c, a, col], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 8, padding: "6px 0", borderBottom: i < 4 ? `1px solid ${C.border}` : "none", fontSize: 12, alignItems: "center" }}>
              <span style={{ fontWeight: 700, color: C.text }}>{d}</span>
              <span style={{ color: C.textMuted }}>{c}</span>
              <Badge color={col}>{a}</Badge>
            </div>
          ))}
        </div>
      </Section>

      <Section title="All Speakers & Key Personnel" titlePt="Todos os Palestrantes e Pessoal-Chave" icon="👤" accent={C.accent}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            ["Francesco Casile", "CEO & Founder / Fundador", "Casile e Casile", "3/3"],
            ["Andrea Geremicca", "Speaker / Palestrante", "EIIS", "3/4"],
            ["Ivan M. Cardaci", "CEO", "Intellera SHAPE", "3/4"],
            ["Emma Notman", "Co-owner / Coproprietária", "Olive Hill", "3/5"],
            ["Scott Notman", "Co-owner / Coproprietário", "Olive Hill", "3/5"],
            ["Raffaele Boiano", "CEO & Founder / Fundador", "Fifth Beat", "3/6"],
          ].map(([n, t, c, d], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr 1fr 50px", gap: 8, padding: "5px 0", borderBottom: `1px solid ${C.border}`, fontSize: 12, alignItems: "center" }}>
              <span style={{ fontWeight: 600, color: C.text }}>{n}</span>
              <span style={{ color: C.textDim }}>{t}</span>
              <span style={{ color: C.textMuted }}>{c}</span>
              <Badge color={C.accent}>{d}</Badge>
            </div>
          ))}
          <div style={{ marginTop: 12, fontSize: 11, color: C.textDim, borderTop: `1px solid ${C.border}`, paddingTop: 8 }}>
            <strong style={{ color: C.textMuted }}>Program Staff / Equipe do Programa:</strong><br />
            Jack — Program Leader / Líder (from / a partir de 2/28)<br />
            Stephanie Adams — Program Leader / Líder (from / a partir de 2/28, receives / recebe Rome transit passes)<br />
            Carlotta — Rome Tour Guide / Guia em Roma (3/6)<br />
            Christian De Cesare (female / feminino) — Rome Assistant / Assistente Roma (from / a partir de 3/3) · +39 392 4426115
          </div>
        </div>
      </Section>
    </div>
  );

  const renderEmergency = () => (
    <div>
      <Section title="Emergency Contacts" titlePt="Contatos de Emergência" icon="🚨" accent={C.red}>
        <div style={{ background: C.card, borderRadius: 10, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            { label: "WorldStrides WorldAssist (24hr)", value: "+1-703-933-6143", icon: "📞" },
            { label: "WhatsApp (non-urgent / não urgente, 24hr)", value: "+1-540-500-1987", icon: "💬" },
            { label: "Trip ID / ID da Viagem", value: "227138", icon: "🔖" },
            { label: "Account Manager / Gerente de Conta", value: "Jennifer Seymour · jennifer.seymour@worldstrides.com · 434-951-5938", icon: "👤" },
            { label: "Rome Assistant / Assistente Roma", value: "Christian De Cesare · +39 392 4426115 (WhatsApp)", icon: "🇮🇹" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "10px 0", borderBottom: i < 4 ? `1px solid ${C.border}` : "none" }}>
              <InfoRow label={c.label} value={c.value} icon={c.icon} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Medical & Insurance" titlePt="Médico e Seguro" icon="🏥" accent={C.green}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            { en: "If medical treatment needed: inform program leaders, local staff, and WorldAssist", pt: "Se precisar de tratamento médico: informe os líderes do programa, equipe local e WorldAssist" },
            { en: "Arrange transportation via hotel staff, local guide, emergency services, or hospital", pt: "Organize transporte via equipe do hotel, guia local, serviços de emergência ou hospital" },
            { en: "Second opinion / consultation: activate Doctors on Call via WorldAssist", pt: "Segunda opinião / consulta: ative Doctors on Call via WorldAssist" },
            { en: "Mental health support: AXA Behavioral Health Hotline", pt: "Apoio em saúde mental: Linha AXA Behavioral Health" },
            { en: "24-hour A&E hospitals available in both Milan and Rome", pt: "Hospitais com pronto-socorro 24h disponíveis em Milão e Roma" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "6px 0", borderBottom: i < 4 ? `1px solid ${C.border}` : "none", fontSize: 12 }}>
              <div style={{ color: C.text }}>{item.en}</div>
              <div style={{ color: C.textDim }}>{item.pt}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="All Website Links" titlePt="Todos os Links" icon="🔗" accent={C.accent}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            ["Starhotels E.C.H.O. (Milan / Milão)", "starhotels.com"],
            ["Starhotels Michelangelo (Rome / Roma)", "starhotels.com/.../michelangelo-rome/"],
            ["Osteria Mamma Rosa", "osteriamammarosa.it"],
            ["Duomo di Milano", "duomomilano.it/en/"],
            ["Fresco e Cimmino", "frescocimmino.it"],
            ["Ristorante il Fantino", "sites.google.com/view/trattoriailfantino"],
            ["Casile e Casile", "casileecasile.it"],
            ["EIIS", "eiis.eu"],
            ["Intellera Consulting", "intelleraconsulting.com"],
            ["Fifth Beat", "fifthbeat.com"],
            ["Taverna Angelica", "tavernangelica.wixsite.com/taverna-angelica"],
            ["Colosseum / Coliseu", "archeoroma.beniculturali.it"],
            ["Roman Forum / Fórum Romano", "archeoroma.beniculturali.it/.../roman-forum..."],
          ].map(([n, u], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: `1px solid ${C.border}`, fontSize: 12 }}>
              <span style={{ color: C.text }}>{n}</span>
              <span style={{ color: C.accent, fontSize: 11 }}>{u}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  const content = { overview: renderOverview, daily: renderDaily, companies: renderCompanies, frameworks: renderFrameworks, logistics: renderLogistics, emergency: renderEmergency };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)", padding: "20px 16px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>🇮🇹</span>
          <div>
            <h1 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.3, color: "#fff" }}>INTB 6230 Italy Field Study</h1>
            <div style={{ fontSize: 12, color: "#e2e8f0" }}>Guia Completo Bilíngue EN/PT-BR | Feb 27 – Mar 8, 2026</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 2, padding: "8px 8px 0", overflowX: "auto", borderBottom: `1px solid ${C.border}`, background: C.cardAlt }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "8px 12px", borderRadius: "8px 8px 0 0", border: "none", cursor: "pointer", fontSize: 12, fontWeight: tab === t.id ? 700 : 400, background: tab === t.id ? C.card : "transparent", color: tab === t.id ? C.text : C.textDim, borderBottom: tab === t.id ? `2px solid ${C.accent}` : "2px solid transparent", whiteSpace: "nowrap", transition: "all 0.2s" }}>
            {t.icon} {t.label}
            <div style={{ fontSize: 10, opacity: 0.6 }}>{t.labelPt}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: 16, maxWidth: 800, margin: "0 auto" }}>
        {content[tab]()}
      </div>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
