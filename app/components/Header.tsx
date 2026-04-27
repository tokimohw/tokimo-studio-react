"use client";

import Link from "next/link";
import { useLanguage } from "./Providers";
import { usePathname } from "next/navigation";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  return (
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
        <nav className="nav">
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>{t('nav-about')}</Link>
          <Link href="/project" className={pathname === '/project' ? 'active' : ''}>{t('nav-project')}</Link>
          <Link href="/connect" className={pathname === '/connect' ? 'active' : ''}>{t('nav-connect')}</Link>
        </nav>
      </div>
    </header>
  );
}
import React from "react";