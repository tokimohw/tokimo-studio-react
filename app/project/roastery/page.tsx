'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../components/Providers'; 
import '../../styles/work-detail-roastery.css'; 

export default function RoasteryDetailPage() {
  const { t } = useLanguage();
  
  // 💡 상태 정의
  const [restingProgress, setRestingProgress] = useState(0);
  const [lastRoastDate, setLastRoastDate] = useState('');

  // 💡 [수정] 데이터 정의: t 함수를 사용해야 하므로 컴포넌트 내부에 배치합니다.
  const beans = [
    { 
      id: 1, 
      name: "TOKYO BLEND", 
      note: t('ro-scene-1'), 
      price: "¥1,800", 
      img: "/images/all_mood/m_black8.avif" 
    },
    { 
      id: 2, 
      name: "SEOUL MIST", 
      note: t('ro-scene-2'), 
      price: "¥2,200", 
      img: "/images/all_mood/m_interior1.avif" 
    },
    { 
      id: 3, 
      name: "QUIET MORNING", 
      note: t('ro-scene-3'), 
      price: "¥2,000", 
      img: "/images/all_mood/jp_street2.jpeg" 
    },
  ];

  useEffect(() => {
    // 스크롤 초기화
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 💡 자동 로스팅 날짜 생성 로직
    const now = new Date();
    const roastDay = new Date(now.setDate(now.getDate() - 3));
    setLastRoastDate(roastDay.toISOString().split('T')[0].replace(/-/g, '.'));
    
    // 애니메이션 효과를 위해 약간의 지연 후 바(bar)를 채웁니다.
    setTimeout(() => setRestingProgress(78), 500);
  }, []);

  return (
    <main className="roastery-arch-layout">
      {/* --- 01. INTRO & HERO --- */}
      <section className="arch-intro">
        <span className="project-id">{t('roastery-id')}</span>
        <h1 className="arch-title">{t('roastery-title')}</h1>
        <div className="arch-meta-bar">
          <span>Role — {t('roastery-role')}</span>
          <span className="sep">/</span>
          <span>Base — Seoul, KR</span>
        </div>
      </section>

      <section className="arch-visual full-width">
        <div className="main-img-vessel">
          <Image src="/images/cafe/cafe-01-hero-full.png" alt="Roastery Space" fill className="object-cover" priority />
        </div>
      </section>

      {/* --- 02. PHILOSOPHY --- */}
      <section className="arch-philosophy grid-2">
        <div className="text-side">
          <h2 className="section-title">{t('roastery-philosophy-title')}</h2>
          <p className="description">{t('roastery-desc')}</p>
        </div>
        <div className="img-side">
          <Image src="/images/all_mood/jp_street2.jpeg" alt="Mood" width={500} height={600} />
          <figcaption className="img-caption">RAW TEXTURE, TOKYO STREET</figcaption>
        </div>
      </section>

      {/* --- 03. SCENE-BASED CURATION & BEANS --- */}
      <section className="arch-beans full-width">
        <div className="arch-container">
          <div className="section-header-curation">
            <span className="tag">{t('ro-curation-tag')}</span>
            <h3>{t('ro-curation-title')}</h3>
            <p>{t('ro-curation-desc')}</p>
          </div>
          <div className="bean-list">
            {beans.map((bean) => (
              <div key={bean.id} className="bean-item">
                <div className="bean-img-wrap">
                  <Image src={bean.img} alt={bean.name} width={400} height={500} />
                </div>
                <div className="bean-info">
                  <h4 className="bean-name">{bean.name}</h4>
                  <p className="bean-note">{bean.note}</p>
                  <span className="bean-price">{bean.price}</span>
                  <button className="brewing-guide-btn">Brewing Guide →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 04. THE THERMAL LOG (Receipt Concept) --- */}
      <section className="thermal-log-section">
        <div className="receipt-paper">
          <div className="receipt-header">
            <span className="brand-name">TOKIMO ROASTERY ARCHIVE</span>
            <span className="serial">NO. 8829-001</span>
          </div>
          
          <div className="receipt-body">
            <div className="receipt-row">
              <span>STATUS</span>
              <span className="status-badge">RESTING / 디개싱 중</span>
            </div>
            <div className="receipt-row">
              <span>LAST BATCH</span>
              <span className="mono">{lastRoastDate}</span>
            </div>
            <div className="receipt-row">
              <span>TEMP / HUMID</span>
              <span className="mono">21.5°C / 42%</span>
            </div>
            
            <div className="resting-bar-wrap">
              <div className="bar-label">
                <span>OPTIMAL FLAVOR PROGRESS</span>
                <span>{restingProgress}%</span>
              </div>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: `${restingProgress}%` }}></div>
              </div>
              <p className="bar-desc">가장 깊은 향미를 위해 3일 더 숙성 권장</p>
            </div>
          </div>

          <div className="receipt-footer">
            <p className="stamp">CERTIFIED BY TOKIMO</p>
            <div className="barcode"></div>
          </div>
        </div>
      </section>

      {/* --- 05. SUBSCRIPTION BANNER --- */}
      <section className="arch-subscription">
        <div className="sub-wrap">
          <div className="sub-text">
            <h3>{t('ro-sub-title')}</h3>
            <p>{t('ro-sub-desc')}</p>
            <button className="sub-cta">{t('ro-sub-btn')}</button>
          </div>
          <div className="sub-img">
            <Image src="/images/all_mood/m_black8.avif" alt="Archive Card" width={300} height={400} />
          </div>
        </div>
      </section>

      {/* --- 06. EXPERIENCE & WHOLESALE --- */}
      <section className="arch-business grid-2">
        <div className="biz-item experience">
          <h4>{t('ro-exp-title')}</h4>
          <p>{t('ro-exp-desc')}</p>
          <span className="schedule">Every Sat 10:00 AM —</span>
        </div>
        <div className="biz-item wholesale">
          <h4>{t('ro-whole-title')}</h4>
          <p>{t('ro-whole-desc')}</p>
          <button className="biz-link">{t('ro-whole-btn')} →</button>
        </div>
      </section>

      {/* --- 07. STORE INFO --- */}
      <section className="arch-store-info">
        <div className="info-grid">
          <div className="info-item map-area">
            <Image src="/images/all_mood/m_interior1.avif" alt="Interior" width={500} height={400} />
            <figcaption>Seoul — Seongsu</figcaption>
          </div>
          <div className="info-item text-area">
            <div className="info-block">
              <h5 className="info-label">{t('roastery-hour')}</h5>
              <p className="info-value">Mon — Fri: 10:00 - 20:00</p>
            </div>
            <div className="info-block">
              <h5 className="info-label">CONTACT</h5>
              <p className="info-value">@tokimo_roastery</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- 08. FOOTER --- */}
      <footer className="project-footer">
        <Link href="/project/fashion" className="next-project-link">
          <span className="arrow">←</span> {t('roastery-next')}
          <span className="title">#001 Fashion Editorial</span>
        </Link> 
      </footer>
    </main>
  );
}