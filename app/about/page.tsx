"use client";

import React from "react";
import { useLanguage } from "../components/Providers";
import "../styles/about.css";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="manifesto-page">
      {/* 01. Hero Section */}
      <section className="manifesto-hero reveal">
        <h1 
          className="main-headline" 
          dangerouslySetInnerHTML={{ __html: t('about-hero-title') }} 
        />
        <p 
          className="hero-sub-text reveal" 
          dangerouslySetInnerHTML={{ __html: t('about-hero-sub') }} 
        />
      </section>

      {/* 02. Philosophy Section */}
      <section className="philosophy-grid">
        <div className="philo-block reveal" data-speed="0.05"> 
          <div className="philo-image">
            <img src="/images/all_mood/jp_street1.webp" alt="TOKIMO Brand Philosophy" />
          </div>

          <div className="philo-text">
            <h2 className="reveal" dangerouslySetInnerHTML={{ __html: t('about-philo-title') }} /> 
            <p className="reveal mb20" dangerouslySetInnerHTML={{ __html: t('about-philo-desc1') }} />
            <p className="reveal mb40" dangerouslySetInnerHTML={{ __html: t('about-philo-desc2') }} />
          </div>
        </div>
      </section>

      {/* 03. Presence Section */}
      <section className="presence-section reveal">
        <div className="container">
          <div className="presence-grid">
            <div className="label-column">
              <span className="meta-label">PRESENCE</span>
            </div>
            <div className="content-column">
              <h2 className="presence-title">{t('about-presence-title')}</h2>
              <p className="presence-desc">{t('about-presence-desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Director's Note (Dark Section) */}
      <section className="director-note reveal">
        <div className="note-container">
          <h3 className="mb20">{t('about-note-title')}</h3>
          <p className="quote-text">"{t('about-note-quote')}"</p>
          <p className="note-desc">{t('about-note-desc')}</p>
          <div className="signature">
            {t('about-signature')}
          </div>
        </div>
      </section>
    </main>
  );
}