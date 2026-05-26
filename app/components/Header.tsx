"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "./Providers";
import { usePathname } from "next/navigation";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 모바일 메뉴 오픈 시 바디 스크롤 차단
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // 페이지 이동 시 메뉴 자동으로 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="brand-header">
        <div className="header-logo">
          <Link href="/">TOKIMO</Link>
        </div>
        
        <div className="header-right-zone">
          {/* 다국어 선택기 (전체 환경 공통 노출) */}
          <nav className="brand-lang-switcher">
            {(['ko', 'jp', 'en'] as const).map((l, idx) => (
              <React.Fragment key={l}>
                <button 
                  className={`brand-lang-btn ${lang === l ? 'is-active' : ''}`}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
                {idx < 2 && <span className="brand-sep">/</span>}
              </React.Fragment>
            ))}
          </nav>
          
          {/* 데스크탑 전용 메인 내비게이션 */}
          <nav className="desktop-nav">
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>{t('nav-about')}</Link>
            <Link href="/project" className={pathname === '/project' ? 'active' : ''}>{t('nav-project')}</Link>
            <Link href="/connect" className={pathname === '/connect' ? 'active' : ''}>{t('nav-connect')}</Link>
          </nav>
        </div>

        {/* 🍔 모바일 전용 미니멀 햄버거 트리거 */}
        <button 
          className={`modern-menu-trigger ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="trigger-line"></span>
          <span className="trigger-line"></span>
        </button>
      </header>

      {/* 📱 모바일 풀스크린 오버레이 내비게이션 */}
      <div className={`modern-mobile-overlay ${isMenuOpen ? "is-open" : ""}`}>
        <div className="overlay-bg" onClick={() => setIsMenuOpen(false)}></div>
        <nav className="mobile-menu-links">
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            {t('nav-about')}
          </Link>
          <Link href="/project" className={pathname === '/project' ? 'active' : ''}>
            {t('nav-project')}
          </Link>
          <Link href="/connect" className={pathname === '/connect' ? 'active' : ''}>
            {t('nav-connect')}
          </Link>
        </nav>
      </div>

      {/* 모바일 하단 플로팅 브랜딩 바 (기존 사양 유지) */}
      <div className="mobile-bottom-nav">
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>Vision</Link>
        <Link href="/project" className={pathname === '/project' ? 'active' : ''}>Archive</Link>
        <Link href="/connect" className={pathname === '/connect' ? 'active' : ''}>Connect</Link>
      </div>
    </>
  );
}