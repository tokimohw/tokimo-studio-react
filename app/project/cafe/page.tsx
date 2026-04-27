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
    { name: "Flat White", price: "6.5", desc: t('cafe-menu-flat-desc') },
    { name: "Tokimo Latte", price: "7.5", desc: t('cafe-menu-latte-desc') },
    { name: "Americano", price: "6.0", desc: t('cafe-menu-ame-desc') }
  ];

  const dripMenu = [
    { name: "Tokyo Blend (Light)", price: "7.0", desc: t('cafe-menu-drip1-desc') },
    { name: "Seoul Mist (Medium)", price: "7.5", desc: t('cafe-menu-drip2-desc') },
    { name: "Ethiopia Single Origin", price: "8.0", desc: t('cafe-menu-drip3-desc') }
  ];

  const dessertMenu = [
    { name: "Matcha Terrine", price: "8.0", desc: t('cafe-menu-matcha-desc') },
    { name: "Rare Cheesecake", price: "8.5", desc: t('cafe-menu-cheese-desc') }
  ];

  const sandwichMenu = [
    { name: "Tamago Sando", price: "9.0", desc: t('cafe-menu-sando1-desc') },
    { name: "Apple Brie Baguette", price: "11.0", desc: t('cafe-menu-sando2-desc') }
  ];

  // 📦 판매 상품 (원두 & 굿즈)
  const shopItems = [
    { id: 1, type: t('cafe-shop-bean'), name: "Tokyo Blend (200g)", price: "24,000", img: "/images/cafe/cafe-roastery1.jpeg" },
    { id: 2, type: t('cafe-shop-bean'), name: "Seoul Mist (200g)", price: "26,000", img: "/images/cafe/cafe-roastery2.jpeg" },
    { id: 3, type: t('cafe-shop-goods'), name: "Tokimo Brass Incense", price: "42,000", img: "/images/cafe/cafe-02-menu-signature.png" }
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
            <h1>TOKIMO CAFE</h1>
            <p>SEOUL / TOKYO</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 02: SHOP INFO --- */}
      <section className="cafe-info-bar">
        <div className="info-item">
          <span className="label">{t('cafe-info-open')}</span>
          <span className="val">11:00 AM — 09:00 PM (DAILY)</span>
        </div>
        <div className="info-item">
          <span className="label">{t('cafe-info-loc')}</span>
          <span className="val">1F, 12, SEONGSUI-RO, SEOUL</span>
        </div>
      </section>

      {/* --- SECTION 03: DINE-IN MENU (4 Categories) --- */}
      <section className="cafe-menu-board">
        {/* Row 1: Coffee & Drip */}
        <div className="menu-column">
          <h2 className="cat-title">COFFEE</h2>
          {coffeeMenu.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="item-main">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="menu-column">
          <h2 className="cat-title">HAND DRIP</h2>
          {dripMenu.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="item-main">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        {/* Row 2: Dessert & Sandwich */}
        <div className="menu-column">
          <h2 className="cat-title">DESSERT</h2>
          {dessertMenu.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="item-main">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
              <p className="item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="menu-column">
          <h2 className="cat-title">SANDWICH</h2>
          {sandwichMenu.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="item-main">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
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
          <span className="price">₩ 14,000</span>
        </div>
      </section>

      {/* --- SECTION 05: ONLINE SHOP --- */}
      <section className="cafe-shop-section">
        <div className="section-title">
          <h2>ONLINE SHOP</h2>
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
                <span className="price">₩ {item.price}</span>
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