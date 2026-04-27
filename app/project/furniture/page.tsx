'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../components/Providers';
import '../../styles/work-detail-furniture.css';

export default function FurniturePage() {
  const { t, lang, setLanguage } = useLanguage(); 

  const [isNight, setIsNight] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const handleLangChange = (newLang: 'ko' | 'en' | 'jp') => {
    if (setLanguage) {
      setLanguage(newLang);
    }
  };

    const furnitureItems = [
    // ratio 대신 미세한 크기/위치 차이를 주는 layout 클래스 사용
    { id: '01', type: 'TABLE', material: 'Walnut / Steel', name: 'Dining Table 01', img: '/images/furniture/table1.webp', layout: 'size-a' },
    { id: '02', type: 'CHAIR', material: 'Leather / Oak', name: 'Lounge Chair 02', img: '/images/furniture/chair1.webp', layout: 'size-b' },
    { id: '03', type: 'SOFA', material: 'Fabric / Ash', name: 'Modular Sofa 03', img: '/images/furniture/sofa1.webp', layout: 'size-c' },
    { id: '04', type: 'OBJECT', material: 'Stone / Glass', name: 'Zen Tray 04', img: '/images/furniture/zen tray1.webp', layout: 'size-b' },
    ];

return (
    <main className={`furn-container ${isNight ? 'mode-night' : 'mode-day'}`}>
      <nav className="ee-nav" onMouseLeave={() => setActiveMenu(null)}>
        <div className="nav-top-line">
          <div className="lang-toggle">
            {/* 3. lang 변수를 사용해서 활성화 상태 체크 */}
            <span 
              className={`lang-btn ${lang === 'ko' ? 'is-active' : ''}`} 
              onClick={() => handleLangChange('ko')}
            >
              KR
            </span>
            <span className="divider">/</span>
            <span 
              className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`} 
              onClick={() => handleLangChange('en')}
            >
              EN
            </span>
            <span className="divider">/</span>
            <span 
              className={`lang-btn ${lang === 'jp' ? 'is-active' : ''}`} 
              onClick={() => handleLangChange('jp')}
            >
              JP
            </span>
          </div>

          <div className="logo-center"><a href="/">TOKIMO EDITION</a></div>
          <div className="nav-right-icons">SEARCH / CART</div>
        </div>
        
        <ul className="nav-menu-list">
          {/* PRODUCTS 메뉴 */}
          <li className="nav-item" onMouseEnter={() => setActiveMenu('products')}>
            {t('nav-products')}
            <div className={`nav-dropdown ${activeMenu === 'products' ? 'is-active' : ''}`}>
              <div className="dropdown-inner">
                <div className="drop-col featured">
                  <div className="drop-img-wrap">
                    <Image src="/images/furniture/chair2.webp" alt="Featured" fill className="object-cover" />
                  </div>
                  <p>New Collection: Silence of Form</p>
                </div>
                <div className="drop-col">
                  <h4>CATEGORIES</h4>
                  <Link href="#">{t('furn-cat-table')}</Link>
                  <Link href="#">{t('furn-cat-chair')}</Link>
                  <Link href="#">{t('furn-cat-sofa')}</Link>
                  <Link href="#">{t('furn-cat-storage')}</Link>
                </div>
                <div className="drop-col">
                  <h4>MATERIALS</h4>
                  <Link href="#">{t('furn-material-wood')}</Link>
                  <Link href="#">{t('furn-material-stone')}</Link>
                  <Link href="#">{t('furn-material-metal')}</Link>
                </div>
              </div>
            </div>
          </li>

          {/* ABOUT 메뉴 */}
          <li className="nav-item" onMouseEnter={() => setActiveMenu('about')}>
            {t('nav-furniture-about')}
            <div className={`nav-dropdown ${activeMenu === 'about' ? 'is-active' : ''}`}>
              <div className="dropdown-inner">
                <div className="drop-col">
                  <h4>PHILOSOPHY</h4>
                  <Link href="#">Brand Story</Link>
                  <Link href="#">Craftsmanship</Link>
                </div>
                <div className="drop-col">
                  <h4>OFFLINE</h4>
                  <Link href="#">Seoul Showroom</Link>
                  <Link href="#">Tokyo Studio</Link>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item" onMouseEnter={() => setActiveMenu('store')}>
            {t('nav-store')}
          </li>
        </ul>
      </nav>

      {/* --- 02. MOOD TOGGLE --- */}
      <button className="mood-toggle-btn" onClick={() => setIsNight(!isNight)}>
        <span className="dot"></span>
        {isNight ? t('furn-day-mode') : t('furn-night-mode')}
      </button>

      {/* --- 03. HERO SECTION (Minimalist Typography) --- */}
      <section className="furn-hero-section">
        <div className="hero-content">
          <p className="hero-sub fade-in">Est. 2026</p>
          <h1 className="reveal-up">THE ESSENCE<br/>OF SPACE</h1>
        </div>
      </section>

      {/* --- 04. SOPHISTICATED CATEGORY GRID (Asymmetric) --- */}
      <section className="furn-grid-section">
            <div className="grid-container">
            {furnitureItems.map((item) => (
                <div key={item.id} className={`furn-card ${item.layout}`}>
                <div className="furn-img-container">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                    <div className="object-shadow-layer"></div>
                </div>
                
                {/* 수정된 하단 메타 정보 영역 */}
                <div className="furn-meta">
                    <div className="meta-left">
                    <span className="item-num">No. {item.id}</span>
                    <h3 className="item-name">{item.name}</h3>
                    </div>
                    <div className="meta-right">
                    <span className="item-info">{item.type}</span>
                    <span className="item-info">{item.material}</span>
                    </div>
                </div>
                </div>
            ))}
            </div>
      </section>

      {/* --- 08. FOOTER --- */}
      <div className="project-footer">
        <Link href="/project/cafe" className="next-project-link">
          <span className="arrow">←</span> {t('roastery-next')}
          <span className="title">#003 Cafe Editorial</span>
        </Link> 
      </div>

      {/* --- 05. CUSTOM FOOTER --- */}
      <footer className="furn-custom-footer">
        <div className="footer-wrap">
          <div className="footer-top">
            <h2 className="footer-logo">TOKIMO EDITION</h2>
            <div className="footer-contact-grid">
              <div className="contact-item">
                <span className="label">SUPPORT</span>
                <Link href="#">{t('furn-footer-inquiry')}</Link>
                <Link href="#">{t('furn-footer-faq')}</Link>
              </div>
              <div className="contact-item">
                <span className="label">CONTACT</span>
                <p>T. +82 02 1234 5678</p>
                <p>E. info@tokimo-edition.com</p>
              </div>
              <div className="contact-item">
                <span className="label">ADDRESS</span>
                <p>12, Seongsui-ro, Seongdong-gu,<br/>Seoul, Republic of Korea</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 TOKIMO EDITION. ALL RIGHTS RESERVED.</span>
            <div className="social-links">INSTAGRAM / PINTEREST</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

