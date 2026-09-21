import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">⌬</span>

              <span>
                <strong>CAROSINE</strong>
                <small>/SECURE BY DESIGN</small>
              </span>
            </a>

            <p>
              CSE Student · Cyber Security Enthusiast ·
              Developer · Research Explorer
            </p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/CAROSENEE"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/md-moshiur-rahman-sajol-251188285/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:moshiur287rahman@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} CAROSENEE. ALL RIGHTS RESERVED.</span>

          <span className="footer-status">
            <i></i>
            SYSTEM ONLINE
          </span>

          <span>♻️ Weakness compels strength</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;