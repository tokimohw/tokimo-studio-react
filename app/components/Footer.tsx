"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Section 1: Brand & Location */}
        <div className="footer-col">
          <h4 className="footer-label">STUDIO</h4>
          <p className="footer-text">TOKIMO ARCHIVE</p>
          <p className="footer-text">SEOUL — TOKYO</p>
        </div>

        {/* Section 2: Contact/Follow */}
        <div className="footer-col">
          <h4 className="footer-label">FOLLOW</h4>
          <Link href="https://instagram.com" className="footer-link">INSTAGRAM</Link>
          <Link href="#" className="footer-link">LINKEDIN</Link>
        </div>

        {/* Section 3: Business Info (이미지 내용 반영) */}
        <div className="footer-col">
          <h4 className="footer-label">INFORMATION</h4>
          <p className="footer-text">CEO : PARK HYUNWOO</p>
          <p className="footer-text">E-MAIL : TOKIMO@EXAMPLE.COM</p>
          <p className="footer-text">MON - FRI : 11:00 - 18:00</p>
        </div>

        {/* Section 4: Legal & Copyright */}
        <div className="footer-col footer-last">
          <div className="footer-legal">
            <Link href="#" className="footer-link-sub">PRIVACY POLICY</Link>
            <Link href="#" className="footer-link-sub">TERMS</Link>
          </div>
          <p className="copyright">© 2026 TOKIMO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}