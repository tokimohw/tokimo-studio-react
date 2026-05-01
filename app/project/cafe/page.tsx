'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../components/Providers';
import '../../styles/work-detail-cafe.css';

export default function CafeDetailPage() {
  const { t } = useLanguage();

  // ☕ 카테고리별 다국어 메뉴 데이터
  const coffeeMenu = [
    { name: t('cafe-menu-flat-name'), price: t('cafe-price-flat'), desc: t('cafe-menu-flat-desc') },
    { name: t('cafe-menu-latte-name'), price: t('cafe-price-latte'), desc: t('cafe-menu-latte-desc') },
    { name: t('cafe-menu-ame-name'), price: t('cafe-price-ame'), desc: t('cafe-menu-ame-desc') }
  ];

  const dripMenu = [
    { name: t('cafe-menu-drip1-name'), price: t('cafe-price-drip-light'), desc: t('cafe-menu-drip1-desc') },
    { name: t('cafe-menu-drip2-name'), price: t('cafe-price-drip-med'), desc: t('cafe-menu-drip2-desc') },
    { name: t('cafe-menu-drip3-name'), price: t('cafe-price-drip-single'), desc: t('cafe-menu-drip3-desc') }
  ];

  const dessertMenu = [
    { name: t('cafe-menu-matcha-name'), price: t('cafe-price-matcha'), desc: t('cafe-menu-matcha-desc') },
    { name: t('cafe-menu-cheese-name'), price: t('cafe-price-cheese'), desc: t('cafe-menu-cheese-desc') }
  ];

  const sandwichMenu = [
    { name: t('cafe-menu-sando1-name'), price: t('cafe-price-sando1'), desc: t('cafe-menu-sando1-desc') },
    { name: t('cafe-menu-sando2-name'), price: t('cafe-price-sando2'), desc: t('cafe-menu-sando2-desc') }
  ];

  // 📦 판매 상품 (가격까지 t() 적용)
  const shopItems = [
    { id: 1, type: t('cafe-shop-bean'), name: t('cafe-shop-item1-name'), price: t('cafe-price-shop1'), img: "/images/cafe/cafe-roastery1.webp" },
    { id: 2, type: t('cafe-shop-bean'), name: t('cafe-shop-item2-name'), price: t('cafe-price-shop2'), img: "/images/cafe/cafe-roastery2.webp" },
    { id: 3, type: t('cafe-shop-goods'), name: t('cafe-shop-item3-name'), price: t('cafe-price-shop3'), img: "/images/cafe/cafe-02-menu-signature.png" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="cafe-real-layout">
      {/* --- SECTION 01: HERO --- */}
      <section className="cafe-hero">
        <div className="hero-img-wrap">
          <Image src="/images/cafe/cafe-01-hero-full.png" alt="Cafe Space" fill className="object-cover" priority />
          <div className="hero-overlay">
            {/* 영문 타이포그래피는 브랜드 아이덴티티이므로 고정 유지 */}
            <h1>TOKIMO CAFE</h1>
            <p>SEOUL / TOKYO</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 02: SHOP INFO --- */}
      <section className="cafe-info-bar">
        <div className="info-item">
          <span className="label">{t('cafe-info-open')}</span>
          <span className="val">{t('cafe-info-open-val')}</span>
        </div>
        <div className="info-item">
          <span className="label">{t('cafe-info-loc')}</span>
          <span className="val">{t('cafe-info-loc-val')}</span>
        </div>
      </section>

      {/* --- SECTION 03: DINE-IN MENU (4 Categories) --- */}
      <section className="cafe-menu-board">
        {/* Row 1: Coffee & Drip */}
        <div className="menu-column">
          <h2 className="cat-title">{t('cafe-cat-coffee')}</h2>
          {coffeeMenu.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="item-main">
                <span className="item-name">{item.name}</span>
                {/* 통화 기호를 포함하여 가격 표시 */}
                <span className="item-price">{t('currency-symbol')} {item.price}</span>
              </div>
              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="menu-column">
          <h2 className="cat-title">{t('cafe-cat-drip')}</h2>
          {dripMenu.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="item-main">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{t('currency-symbol')} {item.price}</span>
              </div>
              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2: Dessert & Sandwich */}
        <div className="menu-column">
          <h2 className="cat-title">{t('cafe-cat-dessert')}</h2>
          {dessertMenu.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="item-main">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{t('currency-symbol')} {item.price}</span>
              </div>
              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="menu-column">
          <h2 className="cat-title">{t('cafe-cat-sandwich')}</h2>
          {sandwichMenu.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="item-main">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{t('currency-symbol')} {item.price}</span>
              </div>
              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 04: SET MENU --- */}
      <section className="cafe-set-banner">
        <div className="set-box">
          <span className="set-tag">{t('cafe-set-tag')}</span>
          <h3>{t('cafe-set-title')}</h3>
          <p>{t('cafe-set-desc')}</p>
          <span className="price">{t('cafe-price-set')}</span>
        </div>
      </section>

      {/* --- SECTION 05: ONLINE SHOP --- */}
      <section className="cafe-shop-section">
        <div className="section-title">
          <h2>{t('cafe-shop-title')}</h2>
          <p>{t('cafe-shop-desc')}</p>
        </div>
        <div className="shop-grid">
          {shopItems.map(item => (
            <div key={item.id} className="shop-card">
              <div className="shop-img">
                <Image src={item.img} alt={item.name} fill className="object-cover" />
                <button className="buy-btn">{t('cafe-buy-btn')}</button>
              </div>
              <div className="shop-meta">
                <span className="type">{item.type}</span>
                <span className="name">{item.name}</span>
                <span className="price">{t('currency-symbol')} {item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="project-footer">
        <Link href="/project/roastery" className="next-project-link">
          <span className="arrow">←</span> {t('roastery-next')}
          <span className="title">#002 ROASTERY ARCHIVE</span>
        </Link> 
      </footer>
    </main>
  );
}