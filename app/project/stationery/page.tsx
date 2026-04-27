'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../components/Providers';
import '../../styles/stationery-archive.css';

export default function StationeryPage() {
  const { t, lang, setLanguage } = useLanguage();
  const [isSwitching, setIsSwitching] = useState(false);

  // 언어 변경 시 "카메라 셔터" 효과 (Blink)
  const handleLangChange = (newLang: 'ko' | 'en' | 'jp') => {
    setIsSwitching(true);
    setTimeout(() => {
      setLanguage?.(newLang);
      setIsSwitching(false);
    }, 400);
  };

  const archiveItems = [
    { 
      id: '01', 
      name: 'Archive Notebook v.1', 
      cat: 'EDITORIAL',
      img: '/images/stationery/item1.webp',
      spec: { paper: 'Munken 120g', binding: 'Otabind', ink: 'Soy Ink' },
      layout: 'layout-wide'
    },
    { 
      id: '02', 
      name: 'Brass Object Pen', 
      cat: 'CRAFT',
      img: '/images/stationery/item4.webp',
      spec: { paper: '-', binding: '-', ink: 'Gel 0.5mm' },
      layout: 'layout-tall'
    },
    { 
      id: '03', 
      name: 'Texture Sample Kit', 
      cat: 'MATERIAL',
      img: '/images/stationery/item6.webp',
      spec: { paper: 'Mixed 12 types', binding: 'Screw', ink: '-' },
      layout: 'layout-small'
    }
  ];

  return (
    <main className={`stat-container ${isSwitching ? 'is-switching' : ''}`} data-lang={lang}>
      {/* 물리적 질감을 위한 노이즈 오버레이 */}
      <div className="noise-overlay"></div>

      {/* --- 01. NAVIGATION (Brutalist style) --- */}
      <nav className="stat-nav">
        <div className="nav-left">
          <div className="lang-switcher">
            {['ko', 'en', 'jp'].map((l) => (
              <span key={l} className={lang === l ? 'active' : ''} onClick={() => handleLangChange(l as any)}>
                {l.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <div className="nav-center">
          <a href="/" className="logo">TOKIMO ARCHIVE</a>
        </div>
        <div className="nav-right">
          <span className="tech-spec">VER. 2026 / NEXT.JS / CSS-GRID</span>
        </div>
      </nav>

      {/* --- 02. HERO (The Manifesto) --- */}
      <section className="stat-hero">
        <div className="hero-blueprint-bg"></div>
        <div className="hero-content">
          <p className="manifesto-label">MANIFESTO 01.</p>
          <h1 className="manifesto-title">
            DIGITAL PRECISION,<br/>
            ANALOG <span className="italic-text">SOUL.</span>
          </h1>
          <p className="hero-sub">{t('stat-hero-sub')}</p>
        </div>
      </section>

      {/* --- 03. ARCHIVE GRID (The Products) --- */}
      <section className="archive-section">
        <div className="section-label">SELECTED OBJECTS</div>
        <div className="archive-grid">
          {archiveItems.map((item) => (
            <div key={item.id} className={`archive-card ${item.layout}`}>
              <div className="img-container">
                <Image src={item.img} alt={item.name} fill className="object-cover" />
                <div className="id-tag">REF.{item.id}</div>
              </div>
              <div className="card-meta">
                <div className="meta-row">
                  <span className="label">NAME</span>
                  <span className="value">{item.name}</span>
                </div>
                <div className="meta-row">
                  <span className="label">SPEC</span>
                  <span className="value">{item.spec.paper} / {item.spec.binding}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 04. STORYTELLING (Anatomy of TOKIMO) --- */}
      <section className="anatomy-section">
        <div className="section-label">ANATOMY OF BRAND</div>
        <div className="anatomy-grid">
          <div className="anatomy-col logic">
            <h3>0/1 LOGIC</h3>
            <div className="code-block">
              <code>{`main {\n  display: grid;\n  soul: infinite;\n}`}</code>
            </div>
            <p>{t('anatomy-logic-desc')}</p>
          </div>
          <div className="anatomy-col texture">
            <div className="texture-visual"></div>
            <h3>TEXTURE</h3>
            <p>{t('anatomy-texture-desc')}</p>
          </div>
        </div>
      </section>

      {/* --- 05. FOOTER --- */}
      <footer className="stat-footer">
        <div className="f-top">
          <div className="f-logo-big">TOKIMO</div>
          <div className="f-info">
            <p>SEOUL / TOKYO</p>
            <p>© 2026 ALL RIGHTS RECORDED.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}