"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="copyright">© 2026 TOKIMO ARCHIVE.</p>
          <div className="location">
            SEOUL — TOKYO <span id="local-time">00:00:00</span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}