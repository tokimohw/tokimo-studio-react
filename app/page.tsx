"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 🔥 Next.js 라우팅 감지용 추가
import { useLanguage } from "./components/Providers";
import "./styles/index.css";

export default function HomePage() {
  const { t } = useLanguage();
  const pathname = usePathname(); // 현재 경로 감지

  // 🔥 [해결의 핵심] 슬라이더 강제 초기화 키 (새로고침과 동일한 효과)
  const [sliderKey, setSliderKey] = useState("init");

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. 라우팅 감지 및 DOM 강제 리렌더링
  useEffect(() => {
    if (pathname === '/') {
      // 페이지로 돌아올 때마다 키값을 고유하게 바꿔 슬라이더 HTML을 완전히 파괴 후 재생성
      setSliderKey(Date.now().toString());
      setCurrentSlide(0); // 슬라이드 순서도 첫 번째로 깔끔하게 리셋
    }
  }, [pathname]);

  // 2. 자동 슬라이드 타이머 (타이머가 꼬이지 않도록 sliderKey를 의존성에 추가)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, [sliderKey, totalSlides]);


  /* =========================
     1. 히어로 슬라이더 (자동 재생 적용)
  ========================= */
  useEffect(() => {
    // 4초마다 다음 슬라이드로 자동 전환
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(slideTimer); // 언마운트 시 타이머 청소
  }, [totalSlides]);

  /* =========================
     2. Next.js 뒤로가기(BFCache) 버그 완벽 방어
  ========================= */
  useEffect(() => {
    // 메인 페이지('/')로 진입하거나 뒤로가기로 돌아왔을 때
    if (pathname === '/') {
      const timer = setTimeout(() => {
        // 강제로 리사이즈 이벤트를 발생시켜 CSS 렌더링 및 슬라이더 크기 재계산
        window.dispatchEvent(new Event("resize"));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // (기존 pageshow 로직도 브라우저 네이티브 뒤로가기를 위해 2차 방어선으로 유지)
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  /* =========================
     3. 패럴랙스 (화면 기준 최적화)
  ========================= */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('[data-speed]');
    let ticking = false;

    const updateParallax = () => {
      // 뷰포트 중앙을 기준으로 패럴랙스 반응 위치를 개선
      const windowCenter = window.innerHeight / 2;

      items.forEach((item) => {
        const el = item as HTMLElement;
        const rect = el.getBoundingClientRect();
        
        // 요소의 중앙과 화면 중앙 사이의 거리 계산
        const distFromCenter = windowCenter - (rect.top + rect.height / 2);
        const speed = parseFloat(el.getAttribute('data-speed') || "0.05");
        
        // 화면에 진입했을 때 자연스럽게 엇갈리도록 계산
        const yPos = distFromCenter * speed; 
        el.style.transform = `translate3d(0, ${-yPos}px, 0)`;
      });
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true }); // passive로 스크롤 성능 향상
    // 초기 로드 시 1회 강제 실행하여 위치 정렬
    updateParallax();

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
            <div className="hero-slider" key={sliderKey}>
              {[1, 2, 3].map((num, idx) => (
                <img
                  key={idx}
                  src={`/images/index/hero-cover${num}.png`}
                  alt={`TOKIMO Cover ${num}`}
                  // 🔥 변경됨: slide -> tokimo-hero-slide, active -> is-active
                  className={`parallax-img tokimo-hero-slide ${
                    currentSlide === idx ? "is-active" : ""
                  }`}
                />
              ))}
            </div>

            {/* dots */}
            <div className="hero-dots">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  // 🔥 변경됨: active -> is-active
                  className={`dot ${
                    currentSlide === idx ? "is-active" : ""
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
interface ProjectCardProps {
  href: string;
  img: string;
  title: string;
  desc: string;
  status: string;
  meta: string;
  t: (key: string) => string; 
}

function ProjectCard({
  href,
  img,
  title,
  desc,
  status,
  meta,
  t,
}: ProjectCardProps) {
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