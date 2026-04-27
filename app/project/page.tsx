"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../components/Providers";
import { Locale } from "../translations"; // 👈 Locale 타입 임포트 (오류 해결 핵심)
import "../styles/project.css";

const PROJECTS = [
  { id: "fashion", num: "01", catKey: "cat-identity", nameKey: "p01-name", descKey: "p01-desc", img: "/images/index/project-lookbook.png", tech: ["#IDENTITY", "#DIGITAL_FLAGSHIP"] },
  { id: "roastery", num: "02", catKey: "cat-space", nameKey: "p02-name", descKey: "p02-desc", img: "/images/cafe/cafe-roastery2.jpeg", tech: ["#PROCESS", "#TEXTURE"] },
  { id: "cafe", num: "03", catKey: "cat-space", nameKey: "p03-name", descKey: "p03-desc", img: "/images/index/project-cafe.png", tech: ["#BRANDING", "#SPACE_EXP"] },
  { id: "furniture", num: "04", catKey: "cat-object", nameKey: "p04-name", descKey: "p04-desc", img: "/images/furniture/project_03_p1.png", tech: ["#CURATION", "#OBJECT"] },
  { id: "stationery", num: "05", catKey: "cat-object", nameKey: "p05-name", descKey: "p05-desc", img: "/images/stationery/stationery.png", tech: ["#ARCHIVE", "#MATERIAL"] }
];

export default function ProjectPage() {
  const { t, lang, setLanguage } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex];

  // 언어 옵션 배열을 Locale 타입으로 고정하여 setLanguage 오류 해결
  const langOptions: Locale[] = ['ko', 'en', 'jp'];

  return (
    <main className={`project-archive-page lang-${lang}`}>
      {/* 1. 배경 감성: 노이즈와 블러된 잔상 */}
      <div className="archive-bg-glow" style={{ backgroundImage: `url(${activeProject.img})` }} />
      <div className="archive-noise" />
      
      <section className="editorial-layout">
        {/* 2. 좌측: 버티컬 메타데이터 (아카이브 넘버링) */}
        <aside className="side-metadata">
          <div className="metadata-top">
            <span className="archive-label">TOKIMO_ARCHIVE</span>
            <span className="current-year">©2026</span>
          </div>
          <div className="idx-large">{activeProject.num}</div>
          <div className="cat-label">{t(activeProject.catKey)}</div>
        </aside>

        {/* 3. 중앙: 메인 에디토리얼 컨텐츠 */}
        <div className="main-content">
          <div className="text-frame" key={activeProject.id}>
            <div className="project-tags">
              {activeProject.tech.map(tag => <span key={tag} className="tag-item">{tag}</span>)}
            </div>
            <h1 className="project-heading">
              {t(activeProject.nameKey)}
            </h1>
            <p className="project-summary">{t(activeProject.descKey)}</p>
            
            <Link href={`/project/${activeProject.id}`} className="view-link">
              <span>EXPLORE ARCHIVE</span>
              <div className="link-line"></div>
            </Link>
          </div>

          <div className="visual-frame">
            <div className="img-container">
              <img src={activeProject.img} alt="Archive visual" className="active-img" key={activeProject.img} />
            </div>
            {/* 장식용 좌표 마크 (디테일) */}
            <div className="visual-coord">35.6895° N, 139.6917° E</div>
          </div>
        </div>

        {/* 4. 오른쪽: 인터랙티브 타임라인 네비게이터 */}
        <nav className="project-timeline">
          {PROJECTS.map((p, idx) => (
            <button 
              key={p.id} 
              className={`timeline-item ${idx === activeIndex ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="timeline-bar"></div>
              <span className="timeline-label">{p.num}</span>
            </button>
          ))}
        </nav>
      </section>

      {/* 5. 언어 스위처: 우측 하단 배치 (네비 겹침 방지 및 모던한 배치) */}
      <div className="bottom-lang-bar">
        {langOptions.map((l) => (
          <button 
            key={l} 
            onClick={() => setLanguage(l)} 
            className={lang === l ? 'on' : ''}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </main>
  );
}