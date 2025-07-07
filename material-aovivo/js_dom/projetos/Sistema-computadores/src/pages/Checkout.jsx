import React, { useState, useEffect } from "react";
import "./checkout.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const converter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function Checkout() {
  const [carrinho, setCarrinho] = useState([]);
  const [qtdCarrinho, setQtdCarrinho] = useState(0);
  const [logado, setLogado] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Verifica se o usuário está logado
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      // Se não estiver logado, redireciona para login
      navigate("/login", { replace: true });
      return;
    }
    setLogado(true);
    setIsLoading(false);
  }, [navigate]);

  // Carrega o carrinho do localStorage ao abrir a página
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoSalvo);
  }, []);

  // Atualiza a quantidade sempre que o carrinho mudar
  useEffect(() => {
    const total = carrinho.reduce((acc, item) => acc + (item.quantidade || 1), 0);
    setQtdCarrinho(total);
  }, [carrinho]);

  // Atualiza a quantidade de um serviço no carrinho
  const alterarQuantidade = (id, delta) => {
    setCarrinho((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantidade: Math.max(1, (item.quantidade || 1) + delta) }
          : item
      )
    );
  };

  // Remove um serviço do carrinho
  const removerServico = (id) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== id));
  };

  // Salva o carrinho atualizado no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  // Função para fazer logout
  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setLogado(false);
    navigate("/login");
  };

  // Soma total
  const total = carrinho.reduce(
    (acc, item) => acc + (item.preco * (item.quantidade || 1)),
    0
  );

  // Se estiver carregando, mostra loading
  if (isLoading) {
    return (
      <div className="checkout-loading">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
          <p>Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  // Se não estiver logado, não renderiza nada (já redirecionou)
  if (!logado) {
    return null;
  }

  return (
    <>
      <Header hideLogin={logado}>
        {logado && (
          <Button
            className="btn-sair ms-3"
            onClick={handleLogout}
            style={{ float: "right" }}
          >
            Sair
          </Button>
        )}
        <Badge 
          className="badge-carrinho ms-2"
        >
          🛒 {qtdCarrinho} itens
        </Badge>
      </Header>
      
      <Container className="mt-4">
        <div className="checkout-header-section">
          <h2 className="checkout-title">🛒 Seu Carrinho</h2>
          <p className="checkout-subtitle">
            Revise seus serviços selecionados antes de finalizar
          </p>
        </div>

        {carrinho.length === 0 ? (
          <div className="checkout-empty-state">
            <div className="empty-cart-icon">
              <FaShoppingCart size={80} />
            </div>
            <h3>Seu carrinho está vazio</h3>
            <p>Adicione alguns serviços para começar!</p>
            <Button 
              className="btn-solicitar mt-3"
              size="lg"
              onClick={() => navigate("/")}
            >
              Ver Serviços Disponíveis
            </Button>
          </div>
        ) : (
          <Row>
            <Col lg={8}>
              <div className="checkout-items">
                {carrinho.map((servico) => (
                  <Card key={servico.id} className="checkout-item-card mb-3">
                    <Row className="g-0">
                      <Col md={3}>
                        <img
                          src={servico.poster}
                          alt={servico.nome}
                          className="checkout-item-image"
                        />
                      </Col>
                      <Col md={9}>
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="checkout-item-info">
                              <Card.Title className="checkout-item-title">
                                {servico.nome}
                              </Card.Title>
                              <Card.Text className="checkout-item-description">
                                {servico.descricao}
                              </Card.Text>
                              <div className="checkout-item-details">
                                <span className="checkout-item-duration">
                                  ⏱️ {servico.duracao}
                                </span>
                              </div>
                            </div>
                            <div className="checkout-item-actions">
                              <Button
                                className="btn-remover"
                                size="sm"
                                onClick={() => removerServico(servico.id)}
                              >
                                <FaTrash />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="checkout-item-controls">
                            <div className="quantity-controls">
                              <Button
                                className="btn-quantidade"
                                size="sm"
                                onClick={() => alterarQuantidade(servico.id, -1)}
                                disabled={(servico.quantidade || 1) <= 1}
                              >
                                <FaMinus />
                              </Button>
                              <span className="quantity-display">
                                {servico.quantidade || 1}
                              </span>
                              <Button
                                className="btn-quantidade"
                                size="sm"
                                onClick={() => alterarQuantidade(servico.id, 1)}
                              >
                                <FaPlus />
                              </Button>
                            </div>
                            <div className="checkout-item-price">
                              <span className="price-per-unit">
                                {converter.format(servico.preco)} cada
                              </span>
                              <span className="price-total">
                                {converter.format(servico.preco * (servico.quantidade || 1))}
                              </span>
                            </div>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
            </Col>
            
            <Col lg={4}>
              <Card className="checkout-summary">
                <Card.Header>
                  <h4 className="mb-0">📋 Resumo do Pedido</h4>
                </Card.Header>
                <Card.Body>
                  <div className="summary-item">
                    <span>Itens ({qtdCarrinho}):</span>
                    <span>{converter.format(total)}</span>
                  </div>
                  <div className="summary-item">
                    <span>Taxa de serviço:</span>
                    <span>Grátis</span>
                  </div>
                  <hr />
                  <div className="summary-total">
                    <strong>Total:</strong>
                    <strong>{converter.format(total)}</strong>
                  </div>
                  
                  <Button 
                    className="btn-finalizar w-100 mt-3"
                    size="lg"
                    onClick={() => alert('Funcionalidade de finalização será implementada!')}
                  >
                    🚀 Finalizar Compra
                  </Button>
                  
                  <Button 
                    className="btn-continuar w-100 mt-2"
                    onClick={() => navigate("/")}
                  >
                    Continuar Comprando
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
}

