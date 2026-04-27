"use client";

import React, { useState } from "react";
import { useLanguage } from "../components/Providers";
import "../styles/connect.css";

export default function ConnectPage() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ id: "", contact: "", category: "WEB", narrative: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('system-success'));
  };

  return (
    <main className={`connect-page lang-${lang}`}>
      <div className="bg-texture" />
      
      <section className="connect-wrapper">
        <header className="connect-header">
          <div className="header-meta">
            <span>TOKIMO_CONNECT_STATION</span>
            <span>EST. 2026 / SEOUL-TOKYO</span>
          </div>
          <h1 className="main-title">{t('connect-header-title')}</h1>
        </header>

        <div className="connect-content">
          <aside className="info-section">
            <div className="info-block">
              <h3 className="block-label">{t('connect-phi-label')}</h3>
              <p className="block-text">{t('connect-phi-text')}</p>
            </div>
            <div className="info-block">
              <h3 className="block-label">{t('connect-res-label')}</h3>
              <p className="block-text">{t('connect-res-text')}</p>
            </div>
            <div className="info-block contact-links">
              <h3 className="block-label">{t('connect-dir-label')}</h3>
              <a href="mailto:studio@tokimo.com" className="link-item">studio@tokimo.com</a>
              <a href="#" className="link-item">@tokimo_archive</a>
            </div>
          </aside>

          <div className="form-section">
            <form onSubmit={handleSubmit} className="log-form">
              <div className="input-row">
                <div className="field-group">
                  <label className="field-label">{t('form-id-label')}</label>
                  <input type="text" placeholder="—" required onChange={(e) => setFormData({...formData, id: e.target.value})} />
                </div>
                <div className="field-group">
                  <label className="field-label">{t('form-protocol-label')}</label>
                  <input type="text" placeholder="—" required onChange={(e) => setFormData({...formData, contact: e.target.value})} />
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">{t('form-field-label')}</label>
                <div className="selector-grid">
                  {['WEB', 'BRANDING', 'FASHION', 'CAFE'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`selector-item ${formData.category === cat ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, category: cat})}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">{t('form-narrative-label')}</label>
                <textarea rows={6} placeholder={t('form-narrative-placeholder')} onChange={(e) => setFormData({...formData, narrative: e.target.value})} />
              </div>

              <button type="submit" className="log-submit">
                <span className="submit-text">{t('form-submit')}</span>
                <span className="submit-icon">↵</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 하단: 언어 버튼 대신 시스템 상태 표시기만 정교하게 배치 */}
      <footer className="connect-footer">
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">{t('system-waiting')}</span>
        </div>
        <div className="footer-copyright">
          © 2026 TOKIMO STUDIO. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </main>
  );
}