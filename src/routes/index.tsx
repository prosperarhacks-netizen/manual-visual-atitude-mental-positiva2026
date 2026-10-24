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
      { title: "Manual Visual da Atitude Mental Positiva" },
      {
        name: "description",
        content: "Consulte os principais conceitos da Atitude Mental Positiva de forma visual e prática.",
      },
      { property: "og:title", content: "Manual Visual da Atitude Mental Positiva" },
      {
        property: "og:description",
        content: "Um material visual e prático para compreender e consultar os principais conceitos da Atitude Mental Positiva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Manual Visual da Atitude Mental Positiva" },
      {
        name: "twitter:description",
        content: "Consulte os principais conceitos da Atitude Mental Positiva de forma visual e prática.",
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

const CHECKOUT_BASICO = "https://pay.cakto.com.br/m59v9ri_1238518";
const CHECKOUT_COMPLETO = "https://pay.cakto.com.br/ao3oyow";
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
            Entenda e visualize os principais conceitos do livro Atitude Mental Positiva.
          </h1>

          <p className="text-ink/80 text-base md:text-lg leading-relaxed mb-8">
            Tudo organizado em uma experiência simples, visual e prática para você compreender os conceitos, refletir sobre suas atitudes e consultar as principais ideias sempre que quiser.
          </p>

          <div className="max-w-xl mx-auto mb-8">
            <img
              src={heroImagem}
              width="1080"
              height="1080"
              alt="Manual Visual da Atitude Mental Positiva"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto subtle-float"
            />
          </div>

          <p className="text-ink/80 text-base md:text-lg leading-relaxed mb-8">
            Você encontra os principais conceitos da obra reunidos em um material organizado, com explicações diretas, exemplos cotidianos, ilustrações, diagramas, comparações visuais e ferramentas de consulta.
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
            O Manual Visual da Atitude Mental Positiva possui
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              i: "🧩",
              t: "CONTEÚDO SIMPLES E ORGANIZADO",
              d: "Os principais conceitos sobre pensamentos, crenças, atitudes, objetivos, persistência e desenvolvimento pessoal são apresentados em categorias, com explicações diretas para facilitar a compreensão.",
            },
            {
              i: "👀",
              t: "VISUAL E FÁCIL DE CONSULTAR",
              d: "Ilustrações, diagramas, tabelas comparativas e fichas visuais ajudam você a visualizar as ideias, diferenciar conceitos e encontrar rapidamente aquilo que deseja revisar.",
            },
            {
              i: "💬",
              t: "EXPLICAÇÕES DIRETAS",
              d: "Cada conceito é apresentado de maneira objetiva, com explicações e exemplos cotidianos para ajudar você a compreender a ideia principal e relacioná-la a situações do dia a dia.",
            },
            {
              i: "⭐",
              t: "CONSULTE QUANDO PRECISAR",
              d: "Além das explicações, você encontra fichas-resumo, quadros comparativos, glossário e recursos de consulta para revisar os principais conceitos sempre que quiser.",
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
              Você gostaria de compreender os principais conceitos da Atitude Mental Positiva e ter tudo organizado em um material que pudesse consultar sempre que precisasse?
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
            "Compreender os principais conceitos da Atitude Mental Positiva de forma simples e organizada",
            "Explorar a relação entre pensamentos, crenças e atitudes por meio de explicações acessíveis",
            "Refletir sobre objetivos, iniciativa, persistência e formas de lidar com obstáculos",
            "Relacionar os conceitos a situações do cotidiano",
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
              alt="Manual Visual da Atitude Mental Positiva com quatro bônus exclusivos"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              className="w-full h-auto subtle-float"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5 text-gradient-gold">Manual Visual da Atitude Mental Positiva</h3>

            <p className="text-ink mb-3">Você recebe:</p>

            <ul className="space-y-3">
              {[
                "Fundamentos da Atitude Mental Positiva",
                "Pensamentos, crenças e atitudes",
                "Objetivos, propósito e direção",
                "Iniciativa, persistência e ação",
                "Obstáculos, fracassos e aprendizados",
                "Relacionamentos e ambiente",
                "Aplicações dos conceitos no dia a dia",
                "Exemplos cotidianos",
                "Explicações claras e diretas",
                "Ilustrações e diagramas",
                "Exemplos cotidianos",
                "Tabelas comparativas",
                "Fichas-resumo",
                "Glossário de consulta",
                "Atlas visual de consulta",
                "Referências rápidas",
                "Material organizado por categorias",
                "Recursos visuais para consultar os principais conceitos",
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
            { img: bonus1Imagem, t: "ATLAS VISUAL DOS 20 CONCEITOS DA ATITUDE MENTAL POSITIVA", d: "Um material de consulta visual com fichas de 20 conceitos relacionados à Atitude Mental Positiva. Cada ficha apresenta uma explicação objetiva e um exemplo prático para ajudar você a revisar as ideias de maneira organizada." },
            { img: bonus2Imagem, t: "COMPARATIVO VISUAL DE ATITUDES", d: "Uma coleção de quadros comparativos para visualizar diferentes formas de pensar, reagir e agir diante de situações cotidianas. Consulte as comparações e os exemplos para compreender melhor as diferenças entre as atitudes apresentadas." },
            { img: bonus3Imagem, t: "DIÁRIO DE ATITUDE E REFLEXÃO PESSOAL", d: "Um material para registrar pensamentos, refletir sobre atitudes, observar situações do cotidiano e anotar aprendizados. Tenha um espaço organizado para acompanhar suas reflexões e identificar pontos que deseja desenvolver." },
            { img: bonus4Imagem, t: "GUIA DE CONSULTA RÁPIDA EM 5 MINUTOS", d: "Um guia visual organizado por assunto para ajudar você a localizar e revisar os principais conceitos do manual com praticidade, sem precisar procurar página por página." },
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
                <span>Manual Visual da Atitude Mental Positiva</span>
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
                "Manual Visual da Atitude Mental Positiva",
                "Fundamentos da Atitude Mental Positiva",
                "Objetivos, propósito e direção",
                "Iniciativa, persistência e ação",
                "Obstáculos, fracassos e aprendizados",
                "Ilustrações e diagramas",
                "Exemplos cotidianos",
                "Aplicações práticas",
                "Atlas visual de consulta",
                "Referências rápidas",
                "Ilustrações",
                "Recursos visuais para consultar os principais conceitos",
                "Material organizado para consultas rápidas",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink/90 text-sm">
                  <CheckIcon /><span>{t}</span>
                </li>
              ))}

              {[
                "Bônus #1 — Atlas Visual dos 20 Conceitos da Atitude Mental Positiva",
                "Bônus #2 — Comparativo Visual de Atitudes",
                "Bônus #3 — Diário de Atitude e Reflexão Pessoal",
                "Bônus #4 — Guia de Consulta Rápida em 5 Minutos",
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

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">Você tem garantia vitalícia no Manual Visual da Atitude Mental Positiva.</h2>
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
                "Manual Visual da Atitude Mental Positiva",
                "Bônus #1 — Atlas Visual dos 20 Conceitos da Atitude Mental Positiva",
                "Bônus #2 — Comparativo Visual de Atitudes",
                "Bônus #3 — Diário de Atitude e Reflexão Pessoal",
                "Bônus #4 — Guia de Consulta Rápida em 5 Minutos",
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
            { q: "O que é o Manual Visual da Atitude Mental Positiva?", a: "É um material digital que organiza os principais ensinamentos e conceitos de Atitude Mental Positiva por meio de explicações originais, ilustrações, mapas mentais, diagramas e fichas de consulta. A proposta é facilitar a compreensão, a revisão e a consulta das ideias mais importantes." },
            { q: "O material serve para mim mesmo que eu não goste de leituras longas?", a: "Sim. A proposta é apresentar o conteúdo de forma organizada e visual, combinando explicações diretas, diagramas, quadros comparativos e fichas de consulta. Assim, você pode estudar por partes e revisar os assuntos no seu próprio ritmo." },
            { q: "Preciso ter lido o livro para usar o material?", a: "Não. O manual foi planejado para apresentar os conceitos de maneira organizada e acessível, sem exigir a leitura prévia do livro de referência. Se você já conhece a obra, também poderá utilizá-lo como material complementar de consulta." },
            { q: "Posso acessar pelo celular?", a: "Sim. Por ser um material digital, você poderá acessá-lo pelo celular, tablet ou computador, utilizando um dispositivo compatível com o formato dos arquivos disponibilizados." },
            { q: "O acesso é imediato?", a: "Sim. Após a confirmação do pagamento, o acesso é liberado conforme as instruções enviadas ao comprador. Verifique seu e-mail e as orientações de acesso para localizar os materiais." },
            { q: "O material pode ser impresso?", a: "Sim, desde que o arquivo disponibilizado permita impressão. Você poderá imprimir as páginas que considerar úteis para estudo e consulta pessoal, respeitando as condições de uso do material." },
            { q: "Os 4 bônus já estão incluídos?", a: "Sim. No Plano Completo, os quatro bônus estão incluídos na oferta: Atlas Visual dos 20 Conceitos da Atitude Mental Positiva, Comparativo Visual de Atitudes, Diário de Atitude e Reflexão Pessoal e Guia de Consulta Rápida em 5 Minutos." },
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
          Tenha uma experiência visual, simples e organizada para compreender, revisar e aplicar os principais ensinamentos de Atitude Mental Positiva.
        </h2>

        <CTAButton onClick={scrollToOffer}>QUERO ACESSAR AGORA</CTAButton>

        <div className="mt-16 pt-8 border-t border-antique-gold/15 max-w-3xl mx-auto space-y-4 text-xs md:text-[13px] text-ink/45 leading-relaxed text-center">
          <p className="text-center text-ink/55 tracking-wider">Copyright © 2026 | Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.</p>
          <p>O <strong>Manual Visual da Atitude Mental Positiva</strong> é um material digital independente, criado para fins educacionais e de organização de conteúdo. O material apresenta e organiza conceitos relacionados à Atitude Mental Positiva de forma visual e simplificada.</p>
          <p>A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais, sujeitando os infratores às sanções previstas na legislação aplicável.</p>
        </div>
      </Section>
    </main>
  );
}
