"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "./components/Providers";
import "./styles/index.css";

export default function HomePage() {
  const { t } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const parallaxRef = useRef<NodeListOf<Element> | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  /* =========================
     슬라이더 + 패럴랙스 (React스럽게)
  ========================= */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // 🔥 방어 코드 (여기 위치 중요)

    // 🔥 parallax 대상 미리 가져오기
    const items = container.querySelectorAll('[data-speed]');

    // 🔥 실제 움직이는 함수
    const updateParallax = () => {
      const scrolled = window.scrollY;

      items.forEach((item) => {
        const speed = parseFloat(item.getAttribute('data-speed') || "0.05");
        const yPos = -(scrolled * speed);
        (item as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    // 🔥 requestAnimationFrame 적용
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="main-index">
      
      {/* ================= HERO ================= */}
      <section className="index-hero fade-up">
        <div className="hero-container full-width">
          <div className="hero-main-img parallax-wrap">

            <div className="hero-bg-text">CRAFTSMANSHIP</div>

            {/* 슬라이더 */}
            <div className="hero-slider">
              {[1, 2, 3].map((num, idx) => (
                <img
                  key={idx}
                  src={`/images/index/hero-cover${num}.png`}
                  alt={`TOKIMO Cover ${num}`}
                  className={`parallax-img slide ${
                    currentSlide === idx ? "active" : ""
                  }`}
                />
              ))}
            </div>

            {/* dots */}
            <div className="hero-dots">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  className={`dot ${
                    currentSlide === idx ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>

            {/* 텍스트 */}
            <div className="hero-title-wrap">
              <h1 className="cover-title">TOKIMO ARCHIVE</h1>
              <h2 className="cover-sub-title">{t("hero-sub-title")}</h2>

              <p
                className="hero-description"
                dangerouslySetInnerHTML={{ __html: t("hero-desc") }}
              />

              <p className="hero-role">{t("hero-role")}</p>
            </div>

            {/* side meta */}
            <div className="hero-side-meta">
              <div className="meta-group">
                <span className="meta-label">Role</span>
                <span className="meta-value">{t("meta-role-val")}</span>
              </div>

              <div className="meta-group">
                <span className="meta-label">Base</span>
                <span className="meta-value">{t("meta-base-val")}</span>
              </div>

              <div className="meta-group">
                <span className="meta-label">Status</span>
                <span className="meta-value">{t("meta-status-val")}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MOOD ================= */}
      <section ref={containerRef} className="mood-archive-wrap reveal">
        <div className="archive-container">

          <figure className="mood-archive-item item-lg offset-up" data-speed="0.02">
            <img src="/images/all_mood/m_black5.webp" alt="01" />
            <figcaption className="img-meta">01 / DIGITAL CRAFT</figcaption>
          </figure>

          <figure className="mood-archive-item item-sm offset-down" data-speed="0.05">
            <img src="/images/all_mood/jp_street2.webp" alt="02" />
            <figcaption className="img-meta">02 / STREET DETAIL</figcaption>
          </figure>

          <figure className="mood-archive-item item-md overlap-right" data-speed="0.03">
            <img src="/images/all_mood/m_interior1.webp" alt="03" />
            <figcaption className="img-meta">03 / RAW INTERIOR</figcaption>
          </figure>

          <figure className="mood-archive-item item-sm-square float-left">
            <img src="/images/all_mood/p_lindbergh_bw2.webp" alt="04" />
            <figcaption className="img-meta">04 / GRAIN TEXTURE</figcaption>
          </figure>

          <figure className="mood-archive-item item-tall overlap-top">
            <img src="/images/all_mood/saint2.webp" alt="05" />
            <figcaption className="img-meta">05 / EDITORIAL FORM</figcaption>
          </figure>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section reveal">
        <div className="about-container">
          <div className="about-left">
            <h3 className="section-title">About</h3>
          </div>

          <div className="about-right">
            <p className="about-text">{t("idx-about-p1")}</p>
            <p className="about-text mb10">
              Design-driven frontend & quiet visual storytelling
            </p>
            <p className="about-text mb10">{t("idx-about-p2")}</p>
            <p className="about-text mb10">{t("idx-about-p3")}</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECT ================= */}
      <section className="project-grid-section fade-up">
        <div className="container">

          <div className="project-header">
            <h3 className="p-section-title">{t("proj-header-title")}</h3>
            <p className="p-section-desc">{t("proj-header-desc")}</p>
          </div>

          <div className="archive-grid">

            <ProjectCard
              href="/project/fashion"
              img="/images/index/project-lookbook.png"
              title={t("proj-01-title")}
              desc={t("proj-01-desc-full")}
              status="001 — Select Shop"
              meta="2026 — WEB / BRAND"
              t={t}
            />

            <ProjectCard
              href="/project/cafe"
              img="/images/index/project-cafe.png"
              title="Slow Coffee Space"
              desc={t("proj-02-desc-full")}
              status="002 — Cafe"
              meta="2026 — WEB / CAFE"
              t={t}
            />

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-editorial reveal">
        <div className="cta-inner">
          <p className="jp jp-cta">{t("cta-jp-small")}</p>

          <h2
            className="cta-main"
            dangerouslySetInnerHTML={{ __html: t("cta-main") }}
          />

          <p className="cta-sub">{t("cta-sub-text")}</p>

          <Link href="/connect" className="cta-link">
            {t("cta-link-text")}
          </Link>
        </div>
      </section>

    </main>
  );
}

/* =========================
   컴포넌트 분리 (핵심)
========================= */

function ProjectCard({
  href,
  img,
  title,
  desc,
  status,
  meta,
  t,
}: any) {
  return (
    <Link href={href} className="archive-item">
      <div className="archive-img-wrap">
        <img src={img} alt={title} />
        <div className="project-overlay-info">
          <span>{t("proj-view")}</span>
        </div>
        <span className="archive-status">{status}</span>
      </div>

      <div className="archive-info">
        <div className="p-meta">{meta}</div>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    </Link>
  );
}