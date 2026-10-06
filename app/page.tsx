"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./components/Providers";
import "./styles/index.css";

export default function HomePage() {
  const { t } = useLanguage();
  const pathname = usePathname();

  /* =========================================================
     메인 페이지 상태
  ========================================================= */

  // 슬라이더의 현재 이미지
  const [currentSlide, setCurrentSlide] = useState(0);

  // 슬라이더 DOM을 다시 만들기 위한 값
  const [sliderKey, setSliderKey] = useState(0);

  // fade-up 요소를 정상적으로 보여주기 위한 상태
  const [homeReady, setHomeReady] = useState(false);

  const totalSlides = 3;

  const containerRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     메인 페이지 초기화 함수

     다른 페이지에서 / 로 돌아왔을 때
     슬라이더와 화면 표시 상태를 다시 정리한다.
  ========================================================= */

  const resetHomePage = useCallback(() => {
    // 현재 메인 페이지가 아니라면 실행하지 않는다.
    if (window.location.pathname !== "/") {
      return;
    }

    // 첫 번째 슬라이드부터 다시 시작
    setCurrentSlide(0);

    // 슬라이더 DOM을 새로 만든다.
    setSliderKey((prev) => prev + 1);

    // fade-up 요소를 다시 보여준다.
    setHomeReady(true);
  }, []);

  /* =========================================================
     1. Next.js 내부 라우팅 대응

     /project/fashion
     /project/cafe
     /about
     /connect
     등 어느 페이지에서든 다시 / 로 돌아오면 실행된다.
  ========================================================= */

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    // 브라우저가 화면을 그린 뒤 초기화
    const frame = window.requestAnimationFrame(() => {
      resetHomePage();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname, resetHomePage]);

  /* =========================================================
     2. 브라우저 뒤로가기 대응

     트랙패드 뒤로가기
     브라우저 뒤로가기 버튼
     키보드 뒤로가기

     모두 브라우저의 history 이동으로 처리된다.

     pageshow는 페이지가 다시 화면에 나타나는 순간 실행된다.
  ========================================================= */

  useEffect(() => {
    const handlePageShow = () => {
      // 메인 페이지가 다시 표시된 경우 슬라이더 복구
      if (window.location.pathname !== "/") {
        return;
      }

      // 브라우저가 기존 화면을 복구한 직후
      // 다음 프레임에서 다시 초기화한다.
      window.requestAnimationFrame(() => {
        resetHomePage();
      });
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [resetHomePage]);

  /* =========================================================
     3. 자동 슬라이드

     4초마다 한 장씩 변경한다.
     기존에 중복되어 있던 타이머는 하나로 정리했다.
  ========================================================= */

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const slideTimer = window.setInterval(() => {
      setCurrentSlide((prev) => {
        return (prev + 1) % totalSlides;
      });
    }, 4000);

    return () => {
      window.clearInterval(slideTimer);
    };
  }, [pathname]);

  /* =========================================================
     4. 패럴랙스

     아래 Mood Archive 이미지에 적용되는 움직임
  ========================================================= */

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const items = container.querySelectorAll("[data-speed]");

    let ticking = false;

    const updateParallax = () => {
      // 화면 가운데 위치
      const windowCenter = window.innerHeight / 2;

      items.forEach((item) => {
        const el = item as HTMLElement;

        const rect = el.getBoundingClientRect();

        // 요소 중심과 화면 중심의 거리
        const distFromCenter =
          windowCenter - (rect.top + rect.height / 2);

        // data-speed 값
        const speed = parseFloat(
          el.getAttribute("data-speed") || "0.05"
        );

        // 이동량 계산
        const yPos = distFromCenter * speed;

        // GPU 가속을 사용하는 이동
        el.style.transform =
          `translate3d(0, ${-yPos}px, 0)`;
      });
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // 페이지 처음 들어왔을 때 한 번 실행
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="main-index">

      {/* =======================================================
         HERO
         메인 화면의 첫 번째 이미지 슬라이더
      ======================================================= */}

      <section
        className={`index-hero fade-up ${
          homeReady ? "visible" : ""
        }`}
      >
        <div className="hero-container full-width">
          <div className="hero-main-img parallax-wrap">

            {/* 배경 텍스트 */}
            <div className="hero-bg-text">
              CRAFTSMANSHIP
            </div>

            {/* =================================================
               HERO SLIDER
            ================================================= */}

            <div
              className="hero-slider"
              key={sliderKey}
            >
              {[1, 2, 3].map((num, idx) => (
                <img
                  key={idx}
                  src={`/images/index/hero-cover${num}.png`}
                  alt={`TOKIMO Cover ${num}`}
                  className={`parallax-img tokimo-hero-slide ${
                    currentSlide === idx
                      ? "is-active"
                      : ""
                  }`}
                />
              ))}
            </div>

            {/* =================================================
               SLIDER DOTS
            ================================================= */}

            <div className="hero-dots">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`dot ${
                    currentSlide === idx
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>

            {/* =================================================
               HERO TEXT
            ================================================= */}

            <div className="hero-title-wrap">
              <h1 className="cover-title">
                TOKIMO ARCHIVE
              </h1>

              <h2 className="cover-sub-title">
                {t("hero-sub-title")}
              </h2>

              <p
                className="hero-description"
                dangerouslySetInnerHTML={{
                  __html: t("hero-desc"),
                }}
              />

              <p className="hero-role">
                {t("hero-role")}
              </p>
            </div>

            {/* =================================================
               HERO SIDE META
            ================================================= */}

            <div className="hero-side-meta">

              <div className="meta-group">
                <span className="meta-label">
                  Role
                </span>

                <span className="meta-value">
                  {t("meta-role-val")}
                </span>
              </div>

              <div className="meta-group">
                <span className="meta-label">
                  Base
                </span>

                <span className="meta-value">
                  {t("meta-base-val")}
                </span>
              </div>

              <div className="meta-group">
                <span className="meta-label">
                  Status
                </span>

                <span className="meta-value">
                  {t("meta-status-val")}
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =======================================================
         MOOD ARCHIVE
         이미지 콜라주 + 패럴랙스 영역
      ======================================================= */}

      <section
        ref={containerRef}
        className="mood-archive-wrap reveal"
      >
        <div className="archive-container">

          <figure
            className="mood-archive-item item-lg offset-up"
            data-speed="0.02"
          >
            <img
              src="/images/all_mood/m_black5.webp"
              alt="01"
            />

            <figcaption className="img-meta">
              01 / DIGITAL CRAFT
            </figcaption>
          </figure>

          <figure
            className="mood-archive-item item-sm offset-down"
            data-speed="0.05"
          >
            <img
              src="/images/all_mood/jp_street2.webp"
              alt="02"
            />

            <figcaption className="img-meta">
              02 / STREET DETAIL
            </figcaption>
          </figure>

          <figure
            className="mood-archive-item item-md overlap-right"
            data-speed="0.03"
          >
            <img
              src="/images/all_mood/m_interior1.webp"
              alt="03"
            />

            <figcaption className="img-meta">
              03 / RAW INTERIOR
            </figcaption>
          </figure>

          <figure
            className="mood-archive-item item-sm-square float-left"
          >
            <img
              src="/images/all_mood/p_lindbergh_bw2.webp"
              alt="04"
            />

            <figcaption className="img-meta">
              04 / GRAIN TEXTURE
            </figcaption>
          </figure>

          <figure
            className="mood-archive-item item-tall overlap-top"
          >
            <img
              src="/images/all_mood/saint2.webp"
              alt="05"
            />

            <figcaption className="img-meta">
              05 / EDITORIAL FORM
            </figcaption>
          </figure>

        </div>
      </section>

      {/* =======================================================
         ABOUT
         TOKIMO 소개 영역
      ======================================================= */}

      <section className="about-section reveal">
        <div className="about-container">

          <div className="about-left">
            <h3 className="section-title">
              About
            </h3>
          </div>

          <div className="about-right">

            <p className="about-text">
              {t("idx-about-p1")}
            </p>

            <p className="about-text mb10">
              Design-driven frontend & quiet visual storytelling
            </p>

            <p className="about-text mb10">
              {t("idx-about-p2")}
            </p>

            <p className="about-text mb10">
              {t("idx-about-p3")}
            </p>

          </div>

        </div>
      </section>

      {/* =======================================================
         PROJECT
         프로젝트 포트폴리오 카드 영역
      ======================================================= */}

      <section
        className={`project-grid-section fade-up ${
          homeReady ? "visible" : ""
        }`}
      >
        <div className="container">

          <div className="project-header">

            <h3 className="p-section-title">
              {t("proj-header-title")}
            </h3>

            <p className="p-section-desc">
              {t("proj-header-desc")}
            </p>

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

      {/* =======================================================
         CTA
         마지막 문의 / 연결 영역
      ======================================================= */}

      <section className="cta-editorial reveal">
        <div className="cta-inner">

          <p className="jp jp-cta">
            {t("cta-jp-small")}
          </p>

          <h2
            className="cta-main"
            dangerouslySetInnerHTML={{
              __html: t("cta-main"),
            }}
          />

          <p className="cta-sub">
            {t("cta-sub-text")}
          </p>

          <Link
            href="/connect"
            className="cta-link"
          >
            {t("cta-link-text")}
          </Link>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   PROJECT CARD

   프로젝트 목록에서 공통으로 사용하는 카드 컴포넌트
========================================================= */

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
    <Link
      href={href}
      className="archive-item"
    >
      <div className="archive-img-wrap">

        <img
          src={img}
          alt={title}
        />

        <div className="project-overlay-info">
          <span>
            {t("proj-view")}
          </span>
        </div>

        <span className="archive-status">
          {status}
        </span>

      </div>

      <div className="archive-info">

        <div className="p-meta">
          {meta}
        </div>

        <h3>
          {title}
        </h3>

        <p
          dangerouslySetInnerHTML={{
            __html: desc,
          }}
        />

      </div>
    </Link>
  );
}