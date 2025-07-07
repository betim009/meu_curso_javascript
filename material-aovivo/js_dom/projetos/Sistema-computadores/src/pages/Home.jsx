import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Button, Row, Col, Container, Badge } from "react-bootstrap";
import { servicosManutencao } from "../mocks/servicos";
import "./home.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [logado, setLogado] = useState(false);
  const [qtdCarrinho, setQtdCarrinho] = useState(0);
  const navigate = useNavigate();
  const query = useQuery();
  const termoBusca = query.get("busca")?.toLowerCase() || "";

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    setLogado(!!usuario);
  }, []);

  // Carrega e atualiza a quantidade de itens no carrinho
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    const total = carrinhoSalvo.reduce((acc, item) => acc + (item.quantidade || 1), 0);
    setQtdCarrinho(total);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setLogado(false);
    navigate("/login");
  };

  // Adiciona o serviço ao carrinho no localStorage (sem duplicar)
  const handleSolicitar = (servico) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    const index = carrinhoAtual.findIndex((item) => item.id === servico.id);
    if (index >= 0) {
      // Se já existe, aumenta a quantidade
      carrinhoAtual[index].quantidade = (carrinhoAtual[index].quantidade || 1) + 1;
    } else {
      // Se não existe, adiciona com quantidade 1
      carrinhoAtual.push({ ...servico, quantidade: 1 });
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    
    // Atualiza a quantidade no estado
    const novaQuantidade = carrinhoAtual.reduce((acc, item) => acc + (item.quantidade || 1), 0);
    setQtdCarrinho(novaQuantidade);
    
    navigate("/checkout");
  };

  // Filtra os serviços pelo termo de busca (nome ou descrição)
  const servicosFiltrados = servicosManutencao.filter(
    (servico) =>
      servico.nome.toLowerCase().includes(termoBusca) ||
      servico.descricao.toLowerCase().includes(termoBusca)
  );

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
        {logado && qtdCarrinho > 0 && (
          <Badge 
            className="badge-carrinho ms-2"
          >
            🛒 {qtdCarrinho} itens
          </Badge>
        )}
      </Header>
      <Container className="home-container mt-4">
        <h2 className="home-title">Serviços</h2>
        {servicosFiltrados.length === 0 ? (
          <p>Nenhum serviço encontrado.</p>
        ) : (
          <Row>
            {servicosFiltrados.map((servico) => (
              <Col key={servico.id} sm={12} md={6} lg={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img
                    variant="top"
                    src={servico.poster}
                    alt={servico.nome}
                  />
                  <Card.Body>
                    <Card.Title>{servico.nome}</Card.Title>
                    <Card.Text>{servico.descricao}</Card.Text>
                    <Card.Text>
                      <span className="price">R$ {servico.preco.toFixed(2)}</span> <br />
                      <span className="duration">Duração: {servico.duracao}</span>
                    </Card.Text>
                    {servico.disponivel ? (
                      <Badge className="badge-disponivel mb-2">
                        Disponível
                      </Badge>
                    ) : (
                      <Badge className="badge-indisponivel mb-2">
                        Indisponível
                      </Badge>
                    )}
                    <div>
                      <Button
                        className="btn-solicitar"
                        disabled={!servico.disponivel}
                        onClick={() => handleSolicitar(servico)}
                      >
                        Solicitar serviço
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Home;