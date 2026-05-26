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

  // 모바일 메뉴가 열렸을 때 배경 스크롤 차단 및 Next.js 라우트 변경 시 메뉴 닫기
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false); // 페이지 이동 시 메뉴 닫기
  }, [pathname]);

  return (
    <header className="header">
      <div className="logo">
        <a href="/">TOKIMO</a>
      </div>
      
      {/* 모바일 오버레이를 위해 header-right에 mobile-active 클래스 연동 
        (모바일 전용 메뉴창이 필요할 경우를 대비)
      */}
      <div className={`header-right ${isMenuOpen ? "mobile-active" : ""}`}>
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
        
        <nav className="nav">
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>{t('nav-about')}</Link>
          <Link href="/project" className={pathname === '/project' ? 'active' : ''}>{t('nav-project')}</Link>
          <Link href="/connect" className={pathname === '/connect' ? 'active' : ''}>{t('nav-connect')}</Link>
        </nav>
      </div>

      {/* 🔥 globals.css의 .menu-trigger 스타일에 완벽 매칭 */}
      <div 
        className={`menu-trigger ${isMenuOpen ? "is-active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}