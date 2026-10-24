import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImagem from "@/assets/1.png";
import receberImagem from "@/assets/2.png";
import demonstrativo1 from "@/assets/3.jpg";
import demonstrativo2 from "@/assets/4.jpg";
import demonstrativo3 from "@/assets/5.jpg";
import demonstrativo4 from "@/assets/6.jpg";
import bloco2Imagem1 from "@/assets/7.jpg";
import bloco2Imagem2 from "@/assets/8.jpg";
import bloco2Imagem3 from "@/assets/9.jpg";
import bloco2Imagem4 from "@/assets/10.jpg";
import bonus1Imagem from "@/assets/11.jpg";
import bonus2Imagem from "@/assets/12.jpg";
import bonus3Imagem from "@/assets/13.jpg";
import bonus4Imagem from "@/assets/14.jpg";

const planoBasicoHabitosImagem = heroImagem;
const planoCompletoImagem = receberImagem;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manual Visual de Quem Pensa Enriquece" },
      {
        name: "description",
        content: "Consulte os principais ensinamentos de Quem Pensa Enriquece de forma visual e prática.",
      },
      { property: "og:title", content: "Manual Visual de Quem Pensa Enriquece" },
      {
        property: "og:description",
        content: "Um material visual e prático para compreender e consultar os principais ensinamentos de Quem Pensa Enriquece.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Manual Visual de Quem Pensa Enriquece" },
      {
        name: "twitter:description",
        content: "Consulte os principais ensinamentos de Quem Pensa Enriquece de forma visual e prática.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroImagem,
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

const CHECKOUT_BASICO = "https://pay.cakto.com.br/fxu3n5t_1208385";
const CHECKOUT_COMPLETO = "https://pay.cakto.com.br/z2u9tng";
const PAGINAS_MANUAL = [
  bloco2Imagem1,
  bloco2Imagem2,
  bloco2Imagem3,
  bloco2Imagem4,
];

function scrollToOffer(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* -------------------- BASE UI -------------------- */

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative px-6 md:px-10 py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function GoldOrnament() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-antique-gold" />
      <span className="text-antique-gold text-xs tracking-[0.4em]">✦</span>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-antique-gold" />
    </div>
  );
}

function CTAButton({ children, href, onClick, variant = "primary" }: { children: React.ReactNode; href?: string; onClick?: (e: React.MouseEvent) => void; variant?: "primary" | "ghost" }) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-md font-semibold text-base md:text-lg tracking-wide transition-all duration-300 uppercase border-0 outline-none btn-motion";
  const styles =
    variant === "primary"
      ? { backgroundColor: "#16A34A", color: "#FFFFFF" }
      : { backgroundColor: "transparent", color: "#16A34A", border: "1px solid #16A34A" };
  // Sombras da animação de hover/clique, na mesma cor do botão.
  const motionVars = {
    "--btn-shadow-hover": variant === "primary"
      ? "0 16px 40px -6px rgba(22,163,74,0.55)"
      : "0 10px 26px -10px rgba(17,17,17,0.28)",
    "--btn-shadow-press": variant === "primary"
      ? "0 6px 16px -6px rgba(22,163,74,0.45)"
      : "0 4px 12px -6px rgba(17,17,17,0.22)",
    // Sombras do pulso contínuo: repouso e ponto mais brilhante.
    "--btn-pulse-rest": variant === "primary"
      ? "0 10px 28px rgba(22,163,74,0.38)"
      : "0 0 0 rgba(0,0,0,0)",
    "--btn-pulse-active": variant === "primary"
      ? "0 14px 36px -6px rgba(22,163,74,0.5), 0 0 22px rgba(34,197,94,0.26)"
      : "0 10px 26px -12px rgba(17,17,17,0.16)",
  } as React.CSSProperties;

  const cls = variant === "primary" ? `${base} text-white btn-pulse` : `${base}`;
  const enter = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "primary") e.currentTarget.style.backgroundColor = "#15803D";
    else {
      e.currentTarget.style.backgroundColor = "rgba(200,169,107,0.1)";
    }
  };
  const leave = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "primary") e.currentTarget.style.backgroundColor = "#16A34A";
    else e.currentTarget.style.backgroundColor = "transparent";
  };
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener" className={cls} style={{ ...styles, ...motionVars, ...(variant === "primary" ? { boxShadow: "0 10px 28px rgba(22, 163, 74, 0.38)", border: "1px solid #16A34A", outline: "none" } : {}) }} onMouseEnter={enter} onMouseLeave={leave}>
        {children}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls} style={{ ...styles, ...motionVars, ...(variant === "primary" ? { boxShadow: "0 10px 28px rgba(22, 163, 74, 0.38)" } : {}) }} onMouseEnter={enter} onMouseLeave={leave}>
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </button>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`shrink-0 w-6 h-6 rounded-full bg-[#B9852D]/15 border border-[#B9852D]/40 flex items-center justify-center text-[#B9852D] text-sm ${className}`}>
      ✓
    </span>
  );
}

/* -------------------- 1. TOP OFFER BAR -------------------- */

function TopOfferBar() {
  const today = new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo" }).format(new Date());

  return (
    <div className="w-full text-center py-2.5 px-4 text-xs md:text-sm font-semibold tracking-wide"
      style={{
        background: "rgba(201, 79, 10, 0.15)",
        color: "#B91C1C",
        borderBottom: "1px solid rgba(201, 79, 10, 0.40)",
      }}>
      ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {today && <>• <b className="text-[#B91C1C]">{today}</b></>}
    </div>
  );
}

/* -------------------- 3. GALLERY MARQUEE -------------------- */

function GalleryMarquee() {
  const loop = [...PAGINAS_MANUAL, ...PAGINAS_MANUAL];
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-surface-raised border-y border-antique-gold/15">
      <div className="text-center px-6 mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Veja uma amostra dos materiais que você vai receber
        </h2>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-surface-raised to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-surface-raised to-transparent" />
      <div className="marquee-viewport group">
        <div className="marquee-track">
          {loop.map((page, i) => (
            <div key={i} className="shrink-0 px-3 md:px-4 w-[60vw] sm:w-[42vw] md:w-[26vw] lg:w-[19vw] xl:w-[17vw]">
              <div className="rounded-lg overflow-hidden border border-antique-gold/25 shadow-[0_20px_50px_-20px_rgba(3,12,6,0.85)] bg-canvas">
                <img
                  src={page}
                  alt={`Prévia ${(i % PAGINAS_MANUAL.length) + 1}`}
                  width="640"
                  height="905"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  className="w-full h-auto block"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- 6. PHOTO CAROUSEL (Demonstrativo) -------------------- */

const DEMONSTRATIVO_IMAGES = [
  { src: demonstrativo1, alt: "Demonstração 6" },
  { src: demonstrativo2, alt: "Demonstração 7" },
  { src: demonstrativo3, alt: "Demonstração 8" },
  { src: demonstrativo4, alt: "Demonstração 9" },
];

function DemonstrativoCarousel() {
  const loop = [...DEMONSTRATIVO_IMAGES, ...DEMONSTRATIVO_IMAGES];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-surface to-transparent" />
      <div className="marquee-viewport group">
        <div className="marquee-track">
          {loop.map((img, i) => (
            <div key={i} className="shrink-0 px-3 md:px-4 w-[62vw] sm:w-[44vw] md:w-[28vw] lg:w-[20vw] xl:w-[18vw]">
              <div className="rounded-lg overflow-hidden border border-antique-gold/25 shadow-[0_20px_50px_-20px_rgba(3,12,6,0.85)] bg-canvas">
                <img src={img.src} alt={img.alt} width="640" height="905" loading="lazy" fetchPriority="low" decoding="async" className="w-full h-auto block" draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------- FAQ -------------------- */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="premium-card rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left p-5 md:p-6">
        <span className="font-medium text-ink pr-4">{q}</span>
        <span className={`text-antique-gold text-xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-ink/70 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ==================================================================== */
/* PAGE                                                                  */
/* ==================================================================== */

function Index() {
  return (
    <main className="min-h-screen bg-canvas text-ink overflow-x-hidden">
      {/* 1 · TOP OFFER BAR */}
      <TopOfferBar />

      {/* 2 · HERO */}
      <Section className="pt-16 md:pt-24">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-ink">
            Entenda os principais conceitos do livro Quem Pensa Enriquece.
          </h1>

          <p className="text-ink/80 text-base md:text-lg leading-relaxed mb-8">
            Tudo organizado em uma experiência simples, visual e prática para você compreender os conceitos essenciais, visualizar as conexões entre as ideias e consultar os principais ensinamentos sempre que quiser.
          </p>

          <div className="max-w-xl mx-auto mb-8">
            <img
              src={heroImagem}
              width="1080"
              height="1080"
              alt="Manual Visual de Quem Pensa Enriquece"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto subtle-float"
            />
          </div>

          <p className="text-ink/80 text-base md:text-lg leading-relaxed mb-8">
            Você encontra os principais conceitos e ensinamentos organizados em um material visual, com explicações originais, ilustrações, mapas mentais, diagramas, exemplos de aplicação e ferramentas de consulta.
          </p>

          <div>
            <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
            <p className="text-xs text-ink/50 mt-4 tracking-wide">📩 <strong>Você recebe tudo na hora, direto no seu e-mail e WhatsApp.</strong></p>
          </div>
        </div>
      </Section>

      {/* 3 · GALLERY MARQUEE */}
      <GalleryMarquee />

      {/* 4 · MATERIAIS / FEATURES */}
      <Section className="bg-surface">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">
            O Manual Visual de Quem Pensa Enriquece possui
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              i: "🧩",
              t: "CONTEÚDO SIMPLES E ORGANIZADO",
              d: "Os principais ensinamentos são organizados por temas e conceitos essenciais, com explicações diretas para facilitar a compreensão e permitir que você encontre o que deseja consultar.",
            },
            {
              i: "👀",
              t: "VISUAL E FÁCIL DE CONSULTAR",
              d: "Ilustrações, mapas mentais, diagramas e fichas visuais ajudam você a visualizar as ideias, compreender as conexões entre os conceitos e localizar rapidamente aquilo que deseja revisar.",
            },
            {
              i: "💬",
              t: "EXPLICAÇÕES DIRETAS",
              d: "Cada conceito é apresentado por meio de explicações originais, objetivas e exemplos de aplicação, ajudando você a compreender a ideia central sem depender apenas de longos blocos de texto.",
            },
            {
              i: "⭐",
              t: "CONSULTE QUANDO PRECISAR",
              d: "Além das explicações, você encontra recursos visuais, fichas de consulta, mapas mentais e referências organizadas para revisar os principais ensinamentos sempre que quiser.",
            },
          ].map((c) => (
            <div key={c.t} className="premium-card rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center text-2xl mb-4">
                {c.i}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-ink">{c.t}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <CTAButton onClick={scrollToOffer}>EU QUERO O MATERIAL</CTAButton>
        </div>
      </Section>

      {/* 5 · DEMONSTRATIVO CAROUSEL */}
      <Section className="bg-surface py-10 md:py-14">
        <DemonstrativoCarousel />
      </Section>

      {/* 6 · URGENCY BANNER */}
      <Section>
        <div className="relative gold-border rounded-2xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,var(--terracotta),transparent_60%)]" />
          <div className="relative">
            <GoldOrnament />
            <h2 className="text-2xl md:text-4xl font-semibold max-w-3xl mx-auto leading-tight mb-4">
              Você gostaria de ter os principais ensinamentos organizados em um material visual para consultar sempre que precisasse?
            </h2>
            <p className="text-ink/70 mb-8">Aproveite a oferta por tempo limitado.</p>
            <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>
          </div>
        </div>
      </Section>

      {/* 7 · FOR WHOM */}
      <Section className="bg-surface-raised border-y border-antique-gold/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Este material é ideal para você que deseja:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Consultar os principais ensinamentos de forma simples e organizada",
            "Visualizar conceitos importantes por meio de mapas mentais e diagramas",
            "Compreender as relações entre objetivos, crenças, planejamento, decisão e persistência",
            "Relacionar os conceitos a situações e objetivos pessoais",
            "Encontrar rapidamente uma ideia quando quiser revisá-la",
          ].map((t) => (
            <article key={t} className="premium-card rounded-xl p-6">
              <CheckIcon className="mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-ink">{t}</h3>
            </article>
          ))}
        </div>
      </Section>

      {/* 8 · EVERYTHING YOU RECEIVE */}
      <Section className="bg-surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Tudo o que você vai <span className="text-gradient-gold">receber</span>
          </h2>
        </div>

        <div className="premium-card rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={receberImagem}
              width="1080"
              height="1080"
              alt="Manual Visual de Quem Pensa Enriquece com quatro bônus exclusivos"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              className="w-full h-auto subtle-float"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5 text-gradient-gold">Manual Visual de Quem Pensa Enriquece</h3>

            <p className="text-ink mb-3">Você recebe:</p>

            <ul className="space-y-3">
              {[
                "Conceitos essenciais organizados por temas",
                "Definição de objetivos e desejo definido",
                "Fé, crenças e autossugestão",
                "Conhecimento especializado",
                "Imaginação e geração de possibilidades",
                "Planejamento organizado",
                "Decisão e consistência",
                "Persistência diante dos obstáculos",
                "Cooperação e aliança com outras pessoas",
                "Subconsciente e padrões mentais, conforme a abordagem apresentada no material",
                "Relações entre os principais conceitos",
                "Explicações originais, claras e diretas",
                "Ilustrações e diagramas explicativos",
                "Mapas mentais para visualizar conexões",
                "Exemplos de aplicação prática",
                "Fichas visuais de consulta",
                "Índice visual para facilitar a navegação",
                "Recursos para reflexão e aplicação",
                "Material organizado para consultas rápidas",
                "Acesso imediato",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-ink/90">
                  <CheckIcon />{b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 9 · BONUS */}
      <Section className="bg-surface-raised border-y border-antique-gold/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-antique-gold text-sm tracking-[0.3em] uppercase mb-2">E NÃO PARA POR AÍ...</div>
          <p className="text-ink/70 text-sm tracking-[0.2em] uppercase mb-3">VOCÊ TAMBÉM VAI RECEBER</p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            🎁 <span className="text-gradient-gold">4 Bônus Exclusivos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: bonus1Imagem, t: "FICHAS VISUAIS DOS CONCEITOS ESSENCIAIS", d: "Um material de consulta com fichas individuais dos principais conceitos. Cada ficha apresenta uma explicação visual original e uma aplicação prática para ajudar você a revisar ideias específicas de maneira organizada." },
            { img: bonus2Imagem, t: "MAPA VISUAL DOS PRINCIPAIS ENSINAMENTOS", d: "Um mapa mental panorâmico que conecta os principais temas e conceitos do material. Visualize as relações entre as ideias e tenha uma visão geral para facilitar suas revisões." },
            { img: bonus3Imagem, t: "DIÁRIO DE APLICAÇÃO DOS ENSINAMENTOS", d: "Um material de apoio para registrar objetivos, reflexões, ações planejadas e aprendizados. Tenha um espaço organizado para relacionar os conceitos aos seus objetivos e acompanhar suas ações ao longo do tempo." },
            { img: bonus4Imagem, t: "GUIA DE CONSULTA RÁPIDA DO MATERIAL", d: "Um guia organizado para ajudar você a navegar pelo manual, localizar conceitos e escolher o recurso visual mais adequado para cada consulta, sem precisar procurar informação por informação." },
          ].map((b, i) => (
            <div key={b.t} className="premium-card rounded-xl overflow-hidden flex flex-col">
              <div className="bg-gradient-to-br from-surface-soft to-canvas">
                <img src={b.img} alt={b.t} width="540" height="540" loading="lazy" fetchPriority="low" decoding="async" className="w-full h-auto object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-antique-gold text-[10px] tracking-[0.3em] uppercase mb-2">BÔNUS #{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2 text-ink">{b.t}</h3>
                <p className="text-sm text-ink/65 leading-relaxed mb-4">{b.d}</p>
                <div className="mt-auto inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/35 text-xs">
                  <span className="text-ink/60">Valor: <s>R$29</s></span><span className="text-[#16A34A] font-bold">GRÁTIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 10 · PLANS / OFERTA */}
      <Section id="oferta" className="bg-surface">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#B91C1C]/10 border border-[#B91C1C]/35 text-[#B91C1C] text-xs md:text-sm font-semibold tracking-wider mb-5">
            ⏰ ÚLTIMA CHANCE — OFERTA TERMINA HOJE
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold">Escolha a opção ideal para você</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {/* PLANO BÁSICO */}
          <article className="premium-card rounded-2xl p-8 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 tracking-wider text-ink">PLANO BÁSICO</h3>

            <div className="mb-6">
              <img
                src={planoBasicoHabitosImagem}
                width="1080"
                height="1080"
                alt="Mockup do Plano Básico"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-ink/80 mb-4 font-medium">Você recebe:</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-ink/85 text-sm">
                <CheckIcon />
                <span>Manual Visual de Quem Pensa Enriquece</span>
              </li>
            </ul>

            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-ink/60 mb-1">
                De <span className="text-[#B91C1C] line-through">R$37,90</span> por:
              </div>
              <div className="text-4xl md:text-5xl font-bold" style={{ color: "#16A34A" }}>R$27,90</div>
              <div className="text-sm text-ink/70 mt-1">ou 2x de R$13,95 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-antique-gold/10 border border-antique-gold/30 text-antique-gold text-xs">
                💰 Você economiza R$10,00
              </div>
            </div>

            <CTAButton href={CHECKOUT_BASICO} variant="ghost">QUERO O BÁSICO</CTAButton>
          </article>

          {/* PLANO COMPLETO */}
          <article className="rounded-2xl p-8 flex flex-col relative gold-border shadow-gold gold-glow">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-2 tracking-wider text-gradient-gold mt-3">PLANO COMPLETO</h3>
            <p className="text-center text-ink/75 text-sm mb-5">⚡ 2x mais conteúdos</p>

            <div className="mb-6">
              <img
                src={planoCompletoImagem}
                width="1080"
                height="1080"
                alt="Mockup do Plano Completo"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-ink/85 mb-4 font-medium">Você recebe:</p>

            <ul className="space-y-3 mb-6">
              {[
                "Manual Visual de Quem Pensa Enriquece",
                "Conceitos essenciais organizados por temas",
                "Fé, crenças e autossugestão",
                "Conhecimento especializado",
                "Imaginação e geração de possibilidades",
                "Subconsciente e padrões mentais, conforme a abordagem apresentada no material",
                "Relações entre os principais conceitos",
                "Aplicações práticas",
                "Exemplos de aplicação prática",
                "Fichas visuais de consulta",
                "Ilustrações",
                "Recursos para reflexão e aplicação",
                "Material organizado para consultas rápidas",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/90 text-sm">
                  <CheckIcon /><span>{t}</span>
                </li>
              ))}

              {[
                "Bônus #1 — Fichas Visuais dos Conceitos Essenciais",
                "Bônus #2 — Mapa Visual dos Principais Ensinamentos",
                "Bônus #3 — Diário de Aplicação dos Ensinamentos",
                "Bônus #4 — Guia de Consulta Rápida do Material",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/90 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-antique-gold/15 border border-antique-gold/40 flex items-center justify-center text-antique-gold text-sm">🎁</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-6 mt-auto">
              <div className="text-sm text-ink/60 mb-1">
                De <span className="text-[#B91C1C] line-through">R$57,90</span> por:
              </div>
              <div className="text-5xl md:text-6xl font-bold" style={{ color: "#16A34A" }}>R$37,90</div>
              <div className="text-sm text-ink/70 mt-1">ou 5x de R$7,58 no cartão</div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-antique-gold/10 border border-antique-gold/30 text-antique-gold text-xs">
                💰 Você economiza R$20,00
              </div>
            </div>

            <CTAButton href={CHECKOUT_COMPLETO}>
              <span className="text-center">QUERO O PLANO COMPLETO</span>
            </CTAButton>

            <p className="text-xs text-ink/50 mt-4 text-center tracking-wide">🔒 Compra 100% segura&nbsp; • &nbsp;Pagamento único&nbsp; • &nbsp;Acesso imediato</p>
          </article>
        </div>
      </Section>

      {/* 11 · GUARANTEE */}
      <Section className="bg-surface">
        <div className="max-w-3xl mx-auto text-center premium-card rounded-2xl p-10 md:p-14">
          <div className="inline-flex flex-col items-center gap-3 mb-8">
            <div className="w-32 h-32 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center">
              <svg className="w-16 h-16 text-antique-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 013 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285v0Z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] text-antique-gold uppercase mb-1">100% Garantia</div>
              <div className="text-3xl font-bold text-gradient-gold">VITALÍCIA</div>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">Você tem garantia vitalícia no Manual Visual de Quem Pensa Enriquece.</h2>
          <p className="text-ink/75 leading-relaxed max-w-xl mx-auto mb-3">
            Se o conteúdo não fizer sentido para o que você procura, não facilitar sua compreensão ou você simplesmente decidir que não quer continuar com o produto, poderá solicitar o reembolso conforme as condições da oferta.
          </p>
          <p className="text-antique-gold font-semibold tracking-wide mb-2">Sem burocracia.</p>
          <p className="text-ink/85 leading-relaxed max-w-xl mx-auto">O risco fica do nosso lado.</p>
        </div>
      </Section>

      {/* 12 · HOW ACCESS WORKS */}
      <Section className="bg-surface-raised border-y border-antique-gold/15">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3">Como é o Acesso</h2>
          <p className="text-antique-gold text-xs tracking-[0.4em] uppercase">(PASSO A PASSO)</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              i: "🛒",
              t: "Conclua sua compra",
              d: "Depois que o pagamento for confirmado, seu acesso será liberado.",
            },
            {
              i: "📩",
              t: "Entre na área de membros",
              d: "Os materiais ficarão organizados em um único lugar para você acessar.",
            },
            {
              i: "📱",
              t: "Acesse os materiais",
              items: [
                "Manual Visual de Quem Pensa Enriquece",
                "Bônus #1 — Fichas Visuais dos Conceitos Essenciais",
                "Bônus #2 — Mapa Visual dos Principais Ensinamentos",
                "Bônus #3 — Diário de Aplicação dos Ensinamentos",
                "Bônus #4 — Guia de Consulta Rápida do Material",
              ],
            },
            {
              i: "🧠",
              t: "Comece sua leitura",
              items: [
                "Escolha um conceito",
                "Leia a explicação original",
                "Visualize os mapas mentais e diagramas",
                "Observe as relações entre as ideias",
                "Veja como os conceitos podem ser relacionados aos seus objetivos",
                "Utilize as fichas e os recursos de consulta",
                "Volte ao material sempre que quiser revisar um ensinamento",
              ],
            },
          ].map((s, i) => (
            <div key={s.t} className="premium-card rounded-xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center text-2xl mx-auto mb-4">{s.i}</div>
              <div className="text-antique-gold text-[10px] tracking-[0.3em] uppercase mb-2">0{i + 1}</div>
              <h3 className="text-lg font-semibold mb-2 text-ink">{s.t}</h3>
              {s.d && <p className="text-sm text-ink/65 leading-relaxed">{s.d}</p>}
              {s.items && (
                <ul className="space-y-2 text-sm text-ink/70 text-left inline-block">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-antique-gold">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton onClick={scrollToOffer}>QUERO MEU ACESSO AGORA</CTAButton>
        </div>
      </Section>

      {/* 13 · FAQ */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">Perguntas <span className="text-gradient-gold">Frequentes</span></h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {[
            { q: "O que é o Manual Visual de Quem Pensa Enriquece?", a: "É um material digital que organiza os principais ensinamentos e conceitos de Quem Pensa Enriquece por meio de explicações originais, ilustrações, mapas mentais, diagramas e fichas de consulta. A proposta é facilitar a compreensão, a revisão e a consulta das ideias mais importantes." },
            { q: "O material serve para mim mesmo que eu não goste de leituras longas?", a: "Sim. O material foi pensado para apresentar os conceitos de forma visual, organizada e objetiva. Você pode consultar um tema específico, visualizar um mapa mental ou utilizar uma ficha sem precisar percorrer longos blocos de texto para encontrar a ideia desejada." },
            { q: "Preciso ter lido o livro para usar o material?", a: "Não necessariamente. As explicações visuais ajudam você a compreender os conceitos apresentados no próprio material. Entretanto, o manual é uma seleção organizada de ensinamentos essenciais, não uma reprodução integral do livro. Quem já conhece a obra poderá utilizá-lo especialmente como referência para revisões rápidas." },
            { q: "Posso acessar pelo celular?", a: "Sim. Por ser um material digital em PDF, você pode abri-lo em um celular compatível com a leitura de PDFs, além de computadores e tablets. A experiência visual pode variar conforme o tamanho da tela e o aplicativo utilizado." },
            { q: "O acesso é imediato?", a: "Sim. Após a confirmação do pagamento, o acesso é liberado conforme as instruções enviadas ao comprador. Verifique seu e-mail e as orientações de acesso para localizar os materiais." },
            { q: "O material pode ser impresso?", a: "Sim. O PDF foi planejado em formato A4, adequado para impressão. Você pode imprimir as páginas que desejar, utilizando uma impressora e papel compatíveis. A qualidade final dependerá das configurações de impressão." },
            { q: "Os 4 bônus já estão incluídos?", a: "Sim. No Plano Completo, os quatro bônus estão incluídos na oferta: Fichas Visuais dos Conceitos Essenciais, Mapa Visual dos Principais Ensinamentos, Diário de Aplicação dos Ensinamentos e Guia de Consulta Rápida do Material." },
            { q: "O acesso possui mensalidade?", a: "Não. A oferta apresenta pagamento único, conforme o plano escolhido. Não há mensalidade prevista na estrutura desta oferta." },
            { q: "Posso voltar ao material sempre que quiser?", a: "Sim. A proposta é que você utilize o material como referência para consultar e revisar os conceitos sempre que precisar, respeitando as condições de acesso disponibilizadas após a compra." },
            { q: "Como funciona a garantia?", a: "A oferta informa garantia vitalícia. Se o conteúdo não fizer sentido para o que você procura, não facilitar sua compreensão ou você decidir que não quer continuar com o produto, poderá solicitar o reembolso conforme as condições da oferta. Consulte as condições apresentadas no momento da compra para saber como realizar a solicitação." },
            { q: "Preciso comprar algum material para usar as atividades?", a: "Não é necessário adquirir materiais específicos para consultar o manual e os mapas mentais. Para o Diário de Aplicação, você pode preencher os campos digitalmente, quando o aplicativo permitir, ou imprimir as páginas e utilizar papel e caneta." },
          ].map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <Section className="text-center">
        <GoldOrnament />

        <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl mx-auto leading-tight mb-8">
          Tenha uma experiência visual, simples e organizada para compreender, revisar e aplicar os principais ensinamentos de Quem Pensa Enriquece.
        </h2>

        <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>

        <div className="mt-16 pt-8 border-t border-antique-gold/15 max-w-3xl mx-auto space-y-4 text-xs md:text-[13px] text-ink/45 leading-relaxed text-center">
          <p className="text-center text-ink/55 tracking-wider">Copyright © 2026 | Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.</p>
          <p>O <strong>Manual Visual de Quem Pensa Enriquece</strong> é um material digital independente, criado para fins educacionais e de organização de conteúdo. O material apresenta e organiza ideias relacionadas ao tema de conceitos de forma visual e simplificada.</p>
          <p>A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais, sujeitando os infratores às sanções previstas na legislação aplicável.</p>
        </div>
      </Section>
    </main>
  );
}
