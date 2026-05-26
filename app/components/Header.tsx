"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "./Providers";
import { usePathname } from "next/navigation";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  // 🔥 모바일 메뉴 개폐 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 모바일 메뉴가 열렸을 때 배경 스크롤 차단 (기존 CSS의 body.menu-open과 매칭)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open"); // 🔥 modal-open -> menu-open 으로 수정
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  // 페이지 이동 시 메뉴 강제 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="logo">
          <a href="/">TOKIMO</a>
        </div>
        
        <div className="header-right">
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
          
          {/* 데스크탑 전용 메뉴 (모바일에서는 CSS로 자동 숨김 처리됨) */}
          <nav className="nav">
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>{t('nav-about')}</Link>
            <Link href="/project" className={pathname === '/project' ? 'active' : ''}>{t('nav-project')}</Link>
            <Link href="/connect" className={pathname === '/connect' ? 'active' : ''}>{t('nav-connect')}</Link>
          </nav>
        </div>

        {/* 햄버거 버튼 */}
        <div 
          className={`menu-trigger ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* 🔥 누락되어 있던 모바일 전용 오버레이 추가 (기존 globals.css 완벽 매칭) */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "is-active" : ""}`}>
        <nav className="mobile-nav-links">
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>{t('nav-about')}</Link>
          <Link href="/project" onClick={() => setIsMenuOpen(false)}>{t('nav-project')}</Link>
          <Link href="/connect" onClick={() => setIsMenuOpen(false)}>{t('nav-connect')}</Link>
        </nav>
      </div>
    </>
  );
}