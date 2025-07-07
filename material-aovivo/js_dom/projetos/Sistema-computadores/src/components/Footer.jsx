import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">PU Suporte e Manutenção</h5>
              <p className="footer-description">
                Especialistas em manutenção e suporte técnico para computadores. 
                Oferecemos serviços de qualidade com garantia e atendimento personalizado.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Serviços</h5>
              <ul className="footer-links">
                <li><a href="/">Manutenção Preventiva</a></li>
                <li><a href="/">Limpeza de Computador</a></li>
                <li><a href="/">Formatação</a></li>
                <li><a href="/">Troca de Peças</a></li>
                <li><a href="/">Suporte Técnico</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={4} md={12} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Contato</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>contato@pusuporte.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <span>Seg-Sex: 8h às 18h</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <div className="footer-bottom">
              <hr className="footer-divider" />
              <div className="footer-bottom-content">
                <p className="copyright">
                  © 2024 PU Suporte e Manutenção. Todos os direitos reservados.
                </p>
                <div className="footer-bottom-links">
                  <a href="/sobre">Sobre Nós</a>
                  <a href="/politica-privacidade">Política de Privacidade</a>
                  <a href="/termos-uso">Termos de Uso</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer; 