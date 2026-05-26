"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "./Providers";
import { usePathname } from "next/navigation";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 모바일 메뉴 오픈 시 뒷배경 스크롤 차단
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isMenuOpen]);

  // 페이지 이동 시 메뉴 자동으로 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link href="/">TOKIMO</Link>
        </div>
        
        <div className="header-right">
          {/* 모바일에서도 가로 나열로 유지되는 언어 스위처 */}
          <nav className="lang-switcher">
            {(['ko', 'jp', 'en'] as const).map((l, idx) => (
              <React.Fragment key={l}>
                <button 
                  className={`lang-btn ${lang === l ? 'is-active' : ''}`}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
                {idx < 2 && <span className="sep">/</span>}
              </React.Fragment>
            ))}
          </nav>
          
          {/* 데스크탑 전용 네비게이션 (기존 CSS에 의해 모바일에선 display: none 처리됨) */}
          <nav className="nav">
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>{t('nav-about')}</Link>
            <Link href="/project" className={pathname === '/project' ? 'active' : ''}>{t('nav-project')}</Link>
            <Link href="/connect" className={pathname === '/connect' ? 'active' : ''}>{t('nav-connect')}</Link>
          </nav>
        </div>

        {/* 기존 CSS와 완벽 매칭되는 고유 햄버거 버튼 (최상위 z-index 고정) */}
        <div 
          className={`menu-trigger ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* 🍔 햄버거 오픈 시 나타나는 모바일 풀스크린 메뉴 오버레이 */}
      {isMenuOpen && (
        <div className="mobile-fullscreen-menu">
          <div className="mobile-menu-bg" onClick={() => setIsMenuOpen(false)}></div>
          <nav className="mobile-menu-nav">
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>{t('nav-about')}</Link>
            <Link href="/project" className={pathname === '/project' ? 'active' : ''}>{t('nav-project')}</Link>
            <Link href="/connect" className={pathname === '/connect' ? 'active' : ''}>{t('nav-connect')}</Link>
          </nav>
        </div>
      )}

      {/* 📱 기존 CSS에 장착되어 있던 모바일 하단 플로팅 바 브랜딩 연동 */}
      <div className="mobile-bottom-nav">
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>Vision</Link>
        <Link href="/project" className={pathname === '/project' ? 'active' : ''}>Archive</Link>
        <Link href="/connect" className={pathname === '/connect' ? 'active' : ''}>Connect</Link>
      </div>
    </>
  );
}