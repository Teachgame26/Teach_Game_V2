import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            Teach<span>Game</span>
          </span>
          <p className="footer__tagline">
            Aprende jugando. Compite aprendiendo.
          </p>
        </div>
        <div className="footer__copy">
          © 2025 TeachGame — Plataforma Estudiantil de Juegos
        </div>
      </div>
    </footer>
  );
}

export default Footer;