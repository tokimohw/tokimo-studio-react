'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/work-detail.css';

type Lang = 'JP' | 'EN' | 'KR';

export default function TokimoStore() {
  const [lang, setLang] = useState<Lang>('JP');
  const [activeCategory, setActiveCategory] = useState('ALL');

  // 1. 데이터 정의 (각 아이템에 category 속성 추가)
  const products = [
    { id: 1, category: "JACKET", brand: "TOKIMO ARCHIVE", name: "SOFT WOOL LAYER JACKET", price: "89,000", img: "/images/fashion/full_shot.png", tag: "NEW" },
    { id: 2, category: "KNIT", brand: "TOKIMO SELECT", name: "URBAN KNIT POLO", price: "24,000", img: "/images/fashion/related_01.png", tag: "" },
    { id: 3, category: "PANTS", brand: "TOKIMO ARCHIVE", name: "WIDE CARGO PANTS", price: "32,000", img: "/images/fashion/related_02.png", tag: "SOLD OUT" },
    { id: 4, category: "ACC", brand: "TOKIMO STUDIO", name: "MINIMALIST TOTE BAG", price: "18,000", img: "/images/fashion/f-select4.jpeg", tag: "" },
  ];

  // 2. 언어별 번역 및 화폐 표기 설정
  const translations = {
    JP: { new: "新作", priceTag: "¥", tax: "(税込)", all: "すべて" },
    EN: { new: "NEW ARRIVALS", priceTag: "$", tax: "(TAX IN)", all: "VIEW ALL" },
    KR: { new: "신상품", priceTag: "₩", tax: "(포함)", all: "전체보기" }
  };

  /* --- 필터링 로직 (products 변수명으로 통일) --- */
  const filteredItems = activeCategory === 'ALL' 
    ? products 
    : products.filter(item => item.category === activeCategory);

  return (
    <main className="ldk-layout">
      {/* HEADER: 통합된 미니멀 내비게이션 */}
      <header className="tokimo-minimal-nav">
        <div className="nav-left">
          <div className="logo-hub">
            <span className="main-logo">TOKIMO</span>
            <div className="logo-menu">
              <Link href="/">HOME</Link>
              <Link href="/project">PROJECT</Link>
            </div>
          </div>
        </div>

        <nav className="nav-center">
          <ul>
            <li className={activeCategory === 'ALL' ? 'active' : ''} onClick={() => setActiveCategory('ALL')}>
              {translations[lang].new}
            </li>
            <li className={activeCategory === 'JACKET' ? 'active' : ''} onClick={() => setActiveCategory('JACKET')}>JACKET</li>
            <li className={activeCategory === 'PANTS' ? 'active' : ''} onClick={() => setActiveCategory('PANTS')}>PANTS</li>
          </ul>
        </nav>

        <div className="nav-right">
          <div className="lang-switcher">
            {(['JP', 'EN', 'KR'] as Lang[]).map(l => (
              <button key={l} onClick={() => setLang(l)} className={lang === l ? 'active' : ''}>{l}</button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="ldk-hero">
        <div className="hero-img-wrap">
          <Image src="/images/fashion/main_look.png" alt="Main" fill priority />
          <div className="hero-caption">
            <p>2026 SPRING SUMMER COLLECTION</p>
            <span>VIEW MORE</span>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID: 필터링된 filteredItems를 사용 */}
      <section className="ldk-product-section">
        <div className="section-title">{activeCategory === 'ALL' ? translations[lang].new : activeCategory}</div>
        <div className="ldk-grid">
          {filteredItems.map(product => (
            <div key={product.id} className="ldk-card">
              <div className="ldk-img-vessel">
                {product.tag && <span className="ldk-tag">{product.tag}</span>}
                <Image src={product.img} alt={product.name} width={600} height={800} />
              </div>
              <div className="ldk-info">
                <p className="ldk-p-brand">{product.brand}</p>
                <h3 className="ldk-p-name">{product.name}</h3>
                <p className="ldk-p-price">
                  {translations[lang].priceTag}{product.price} <span className="tax">{translations[lang].tax}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-btn" onClick={() => setActiveCategory('ALL')}>
          {translations[lang].all}
        </div>
      </section>

      <footer className="ldk-footer">
        <div className="footer-inner">
          <div className="footer-col">
            <h4>HELP</h4>
            <ul>
              <li>SHOPPING GUIDE</li>
              <li>CONTACT</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>SOCIAL</h4>
            <ul>
              <li>INSTAGRAM</li>
              <li>PINTEREST</li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>© TOKIMO — SEOUL / TOKYO. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}