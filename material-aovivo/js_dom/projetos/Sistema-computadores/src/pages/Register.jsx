import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert, Card, Row, Col } from "react-bootstrap";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaLock, 
  FaComment, 
  FaUserPlus, 
  FaSignInAlt 
} from "react-icons/fa";
import Header from "../components/Header";
import "./register.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefone: "",
    comment: "",
    senha: "",
  });
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErro("");
    setSucesso("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.telefone || !form.comment || !form.senha) {
      setErro("Preencha todos os campos!");
      return;
    }
    
    setIsLoading(true);
    setErro("");
    setSucesso("Registro realizado com sucesso!");
    
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="register-page">
      <Header hideLogin={true} />
      
      <div className="register-background">
        <div className="register-overlay"></div>
      </div>
      
      <Container className="register-container">
        <div className="register-content">
          <div className="register-header-section">
            <h1 className="register-title">
              <FaUserPlus className="register-icon" />
              Crie sua conta
            </h1>
            <p className="register-subtitle">
              Junte-se ao PU Suporte e Manutenção
            </p>
          </div>

          <Card className="register-card">
            <Card.Body className="register-card-body">
              <Form onSubmit={handleSubmit} className="register-form">
                {erro && (
                  <Alert variant="danger" className="register-alert">
                    {erro}
                  </Alert>
                )}
                
                {sucesso && (
                  <Alert variant="success" className="register-alert">
                    {sucesso}
                  </Alert>
                )}

                <Row>
                  <Col md={6}>
                    <Form.Group className="register-form-group">
                      <Form.Label className="register-label">
                        <FaUser className="input-icon" />
                        Nome Completo
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Digite seu nome completo"
                        value={form.name}
                        onChange={handleChange}
                        className="register-input"
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="register-form-group">
                      <Form.Label className="register-label">
                        <FaEnvelope className="input-icon" />
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        value={form.email}
                        onChange={handleChange}
                        className="register-input"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="register-form-group">
                      <Form.Label className="register-label">
                        <FaPhone className="input-icon" />
                        Telefone
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="telefone"
                        placeholder="(99) 99999-9999"
                        value={form.telefone}
                        onChange={handleChange}
                        className="register-input"
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="register-form-group">
                      <Form.Label className="register-label">
                        <FaLock className="input-icon" />
                        Senha
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="senha"
                        placeholder="Crie uma senha"
                        value={form.senha}
                        onChange={handleChange}
                        className="register-input"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="register-form-group">
                  <Form.Label className="register-label">
                    <FaComment className="input-icon" />
                    Observação
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="comment"
                    placeholder="Deixe seu comentário ou observação"
                    value={form.comment}
                    onChange={handleChange}
                    className="register-input"
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="register-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Criando conta...
                    </>
                  ) : (
                    <>
                      <FaUserPlus className="me-2" />
                      Criar Conta
                    </>
                  )}
                </Button>
              </Form>

              <div className="register-divider">
                <span>ou</span>
              </div>

              <div className="register-login-section">
                <p className="register-login-text">
                  Já possui uma conta?
                </p>
                <Button
                  variant="outline-primary"
                  className="register-login-btn"
                  onClick={() => navigate("/login")}
                >
                  <FaSignInAlt className="me-2" />
                  Fazer Login
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <footer className="register-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} PU Suporte e Manutenção. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}