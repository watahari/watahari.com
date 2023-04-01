import * as React from 'react'
import "modern-css-reset"
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  main,
  footer,
  footerCopyRight,
  footerCaption
} from './layout.module.css'

const Layout = ({ children }) => {
  const year = new Date().getFullYear();
  return (
    <div className={container}>
      <header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            |
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About me
              </Link>
            </li>
            |
            <li className={navLinkItem}>
              <a href="https://blog.watahari.com/" className={navLinkText}>
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={main}>
        {children}
      </main>
      <footer className={footer}>
        <p className={footerCopyRight}>
          &copy; {year} — watahari
        </p>
        <p className={footerCaption}>
          すべての記載/発言/行動/行動の結果は、個人の見解と責任による結果であり、所属組織を代表するものではありません
        </p>
        <p className={footerCaption}>
          <Link to="/rightAndTerms" className={navLinkText}>
            権利表記・利用者への宣言
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default Layout
