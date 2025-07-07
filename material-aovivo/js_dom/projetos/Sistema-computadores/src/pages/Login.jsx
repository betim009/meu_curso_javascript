import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import Header from "../components/Header";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Se já estiver logado, redireciona para a home
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  // Sempre força para /login se tentar sair
  if (location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const blockPopState = () => {
      if (window.location.pathname !== "/login") {
        navigate("/login", { replace: true });
      }
    };
    window.addEventListener("popstate", blockPopState);
    return () => {
      window.removeEventListener("popstate", blockPopState);
    };
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }
    
    setIsLoading(true);
    setErro("");
    
    // Simula um delay de carregamento
    setTimeout(() => {
      // Salva o usuário no localStorage
      localStorage.setItem("usuario", email);
      setIsLoading(false);
      navigate("/", { replace: true });
    }, 1000);
  };

  return (
    <div className="login-page">
      <Header hideLogin={true} />
      
      <div className="login-background">
        <div className="login-overlay"></div>
      </div>
      
      <Container className="login-container">
        <div className="login-content">
          <div className="login-header-section">
            <h1 className="login-title">
              <FaSignInAlt className="login-icon" />
              Bem-vindo de volta!
            </h1>
            <p className="login-subtitle">
              Faça login para acessar seus serviços de manutenção
            </p>
          </div>

          <Card className="login-card">
            <Card.Body className="login-card-body">
              <Form onSubmit={handleSubmit} className="login-form">
                {erro && (
                  <Alert variant="danger" className="login-alert">
                    {erro}
                  </Alert>
                )}
                
                <Form.Group className="login-form-group">
                  <Form.Label className="login-label">
                    <FaEnvelope className="input-icon" />
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="login-form-group">
                  <Form.Label className="login-label">
                    <FaLock className="input-icon" />
                    Senha
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="login-input"
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="login-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Entrando...
                    </>
                  ) : (
                    <>
                      <FaSignInAlt className="me-2" />
                      Entrar
                    </>
                  )}
                </Button>
              </Form>

              <div className="login-divider">
                <span>ou</span>
              </div>

              <div className="login-register-section">
                <p className="login-register-text">
                  Não possui uma conta?
                </p>
                <Button
                  variant="outline-primary"
                  className="login-register-btn"
                  onClick={() => navigate("/register")}
                >
                  <FaUserPlus className="me-2" />
                  Criar Conta
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <footer className="login-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} PU Suporte e Manutenção. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

