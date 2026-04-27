"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import { i18nData, Locale } from '../translations';

// 1. 타입 정의: setLanguage를 추가하여 컴포넌트와의 호환성 확보
type LanguageContextType = {
  lang: Locale;
  setLang: (lang: Locale) => void;      // 기존 코드 유지용
  setLanguage: (lang: Locale) => void;  // 새로운 컴포넌트용 (Alias)
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within Providers");
  return context;
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>('ko');

  // 번역 함수 (기존 로직 유지)
  const t = (key: string) => i18nData[lang]?.[key] || key;

  // 언어 설정 로직 (Alias 지원을 위해 useCallback 사용 권장)
  const setLanguage = useCallback((newLang: Locale) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      document.documentElement.lang = newLang;
      localStorage.setItem("selectedLang", newLang);
    }
  }, []);

  // 기존 setLang 명칭도 동일하게 작동하도록 연결
  const setLang = setLanguage;

  useEffect(() => {
    // 1. Lenis Smooth Scroll (초기화)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Global Scroll Reveal (IntersectionObserver 로직)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // 컴포넌트가 바뀔 때마다 다시 스캔할 수 있도록 처리
    const updateObserver = () => {
      document.querySelectorAll('.fade-up, .reveal').forEach(el => observer.observe(el));
    };

    updateObserver();

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, [lang]); // 언어 변경 시 텍스트 리렌더링 대응

  return (
    <LanguageContext.Provider value={{ lang, setLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}