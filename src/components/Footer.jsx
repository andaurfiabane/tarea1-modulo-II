import './Footer.css';

function Footer() {
  return (
    <footer className="footer" alt="Pie de página">
      <div className="footer-columns">
        <div className="footer-column" alt="Dirección y horario de atención">
          <h3>TIENDAS</h3>
          <p> Alonso de Córdova 102202, Vitacura</p>
          <p>
            Horarios:<br />
            Lunes a Viernes 09:00 - 18:30
          </p>
        </div>
        <div className="footer-column" alt="Medios de contacto">
          <h3>COMPRAS ONLINE</h3>
          <a href="#" className="footer-link">¿Dudas con tu pedido?</a>
          <br />
          <a href="tel:+56999999999" className="footer-link">
            <strong>LLÁMANOS: +56 999999999</strong>
          </a>
          <br />
          <a href="mailto:corejempl@ipss.cl" className="footer-link">
            Escríbenos: corejempl@ipss.cl
          </a>
        </div>
        <div className="footer-column" alt="Información de la tienda">
          <h3>INFORMACIONES</h3>
          <a href="#" className="footer-link">Quiénes somos</a>
          <br />
          <a href="#" className="footer-link">Marcas</a>
          <br />
          <a href="#" className="footer-link">Políticas de cambio y devolución</a>
        </div>
      </div>
      <div className="footer-bottom" alt="Derechos reservados">
        © 2026 - Perfumería FullStack, Todos Los Derechos Reservados
      </div>
    </footer>
  );
}

export default Footer;