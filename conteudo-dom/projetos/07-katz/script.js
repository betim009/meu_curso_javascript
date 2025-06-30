import { perguntas } from './perguntas.js';
import { perguntasLawton } from './lawton.js';

const divRespostas = document.getElementById("div-respostas");
let escalaAtual = 'katz'; // 'katz' ou 'lawton'

// Função para gerar PDF do resultado (escopo global) - MELHORADA
window.gerarPDF = function(score, interpretacao, escala = 'katz') {
  try {
    // Verificar se a biblioteca jsPDF está disponível
    if (typeof window.jspdf === 'undefined') {
      alert('Erro: Biblioteca jsPDF não encontrada. Tente recarregar a página.');
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Data atual
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const horaAtual = new Date().toLocaleTimeString('pt-BR');
    
    // Configurações do cabeçalho
    doc.setFillColor(13, 110, 253);
    doc.rect(0, 0, 210, 30, 'F');
    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('Calculadoras Médicas', 20, 20);
    
    // Reset para texto normal
    doc.setTextColor(0, 0, 0);
    
    // Título do relatório
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    const titulo = escala === 'katz' ? 'Escala de Katz - AVD' : 'Escala de Lawton - AIVD';
    doc.text(titulo, 20, 45);
    
    // Informações do relatório
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Data da Avaliação: ${dataAtual}`, 20, 55);
    doc.text(`Hora da Avaliação: ${horaAtual}`, 20, 62);
    doc.text(`Profissional: _________________________________`, 20, 69);
    doc.text(`Paciente: _____________________________________`, 20, 76);
    
    // Resultado
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('RESULTADO DA AVALIAÇÃO', 20, 90);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const maxScore = escala === 'katz' ? 6 : 8;
    doc.text(`Pontuação: ${score}/${maxScore}`, 20, 100);
    doc.text(`Interpretação: ${interpretacao}`, 20, 107);
    
    // Interpretação detalhada
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('INTERPRETAÇÃO DA ESCALA:', 20, 120);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    if (escala === 'katz') {
      doc.text('• Pontuação 6: Totalmente independente', 20, 130);
      doc.text('• Pontuação 4-5: Dependência moderada', 20, 137);
      doc.text('• Pontuação 2-3: Dependência significativa', 20, 144);
      doc.text('• Pontuação 0-1: Totalmente dependente', 20, 151);
    } else {
      doc.text('• Pontuação 8: Totalmente independente', 20, 130);
      doc.text('• Pontuação 6-7: Dependência leve', 20, 137);
      doc.text('• Pontuação 4-5: Dependência moderada', 20, 144);
      doc.text('• Pontuação 0-3: Dependência severa', 20, 151);
    }
    
    // Observações
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('OBSERVAÇÕES CLÍNICAS:', 20, 165);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('_________________________________________________', 20, 175);
    doc.text('_________________________________________________', 20, 182);
    doc.text('_________________________________________________', 20, 189);
    
    // Assinatura
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Assinatura do Profissional:', 20, 200);
    doc.text('___________________________', 20, 210);
    
    // Rodapé
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(128, 128, 128);
    doc.text('Este documento foi gerado automaticamente pelo sistema de avaliação.', 20, 280);
    doc.text('Para dúvidas, entre em contato: contato@calculadorasmedicas.com', 20, 285);
    
    // Download do PDF
    const nomeArquivo = escala === 'katz' ? 'escala-katz' : 'escala-lawton';
    doc.save(`${nomeArquivo}-resultado-${dataAtual.replace(/\//g, '-')}.pdf`);
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    alert('Erro ao gerar PDF. Tente novamente.');
  }
};

// Função para alternar entre escalas
function alternarEscala(escala) {
  escalaAtual = escala;
  
  // Atualizar navegação
  document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
  if (escala === 'katz') {
    document.getElementById('nav-katz').classList.add('active');
  } else {
    document.getElementById('nav-lawton').classList.add('active');
  }
  
  // Recriar formulário
  criarFormulario();
}

// Função para criar o formulário de perguntas
function criarFormulario() {
  const perguntasAtuais = escalaAtual === 'katz' ? perguntas : perguntasLawton;
  const tituloEscala = escalaAtual === 'katz' ? 'Escala de Katz - AVD' : 'Escala de Lawton - AIVD';
  const descricaoEscala = escalaAtual === 'katz' 
    ? 'Avaliação de Atividades Básicas da Vida Diária (AVD)'
    : 'Avaliação de Atividades Instrumentais da Vida Diária (AIVD)';
  const autorEscala = escalaAtual === 'katz' ? 'Dr. Sidney Katz' : 'Dr. M. Powell Lawton';
  const anoEscala = escalaAtual === 'katz' ? '1963' : '1969';
  const imagemAutor = escalaAtual === 'katz' ? 'perfil.png' : 'lawton.png';
  const descricaoAutor = escalaAtual === 'katz'
    ? 'Dr. Sidney Katz foi um renomado médico e pesquisador que desenvolveu a Escala de Katz em 1963. Esta escala revolucionou a avaliação da capacidade funcional em idosos e pacientes com condições crônicas.'
    : 'Dr. M. Powell Lawton foi um psicólogo e gerontólogo que desenvolveu a Escala de Lawton em 1969. Esta escala avalia a capacidade de realizar atividades instrumentais da vida diária, complementando a avaliação funcional.';
  const aplicacaoEscala = escalaAtual === 'katz'
    ? 'Amplamente utilizada em geriatria, reabilitação e cuidados de longa duração para avaliar a independência em atividades básicas da vida diária.'
    : 'Utilizada para avaliar a capacidade de realizar atividades mais complexas que permitem ao indivíduo viver independentemente na comunidade.';

  let html = `
    <div class="row">
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-body p-5">
            <div class="text-center mb-5">
              <h4 class="text-primary">📋 ${tituloEscala}</h4>
              <p class="text-muted">${descricaoEscala}</p>
            </div>
            <form id="form-${escalaAtual}">
  `;

  perguntasAtuais.forEach((item, index) => {
    html += `
      <div class="question-block mb-4">
        <div class="row">
          <div class="col-md-6">
            <h5 class="text-primary">${index + 1}. ${item.pergunta}</h5>
            <p class="text-muted">${item.descricao}</p>
          </div>
          <div class="col-md-6">
            <div class="d-grid gap-2">
              <input class="btn-check" type="radio" name="p${index}" id="p${index}-1" value="1" autocomplete="off" required>
              <label class="btn btn-outline-primary" for="p${index}-1">
                <i class="bi bi-check-circle"></i> ${item.resposta_1}
              </label>
              <input class="btn-check" type="radio" name="p${index}" id="p${index}-2" value="0" autocomplete="off">
              <label class="btn btn-outline-primary" for="p${index}-2">
                <i class="bi bi-x-circle"></i> ${item.resposta_2}
              </label>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  html += `
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg px-5">
                  <i class="bi bi-calculator"></i> Ver Resultado
                </button>
              </div>
            </form>
            <div id="resultado" class="mt-4"></div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card shadow-sm author-card">
          <div class="card-body p-3">
            <div class="text-center mb-3">
              <img src="${imagemAutor}" alt="${autorEscala}" class="rounded-circle mb-2" width="60" height="60" style="object-fit: cover;">
              <h5 class="text-primary fw-bold mb-1">${autorEscala}</h5>
              <p class="text-muted small mb-0">Criador da ${escalaAtual === 'katz' ? 'Escala de Katz' : 'Escala de Lawton'}</p>
            </div>
            
            <div class="mb-3">
              <h6 class="fw-bold text-primary mb-2">
                <i class="bi bi-info-circle"></i> Sobre o Autor
              </h6>
              <p class="text-muted small mb-0">
                ${descricaoAutor}
              </p>
            </div>
            
            <div class="mb-3">
              <h6 class="fw-bold text-primary mb-1">
                <i class="bi bi-calendar-check"></i> Ano de Criação
              </h6>
              <p class="text-muted small mb-0">${anoEscala}</p>
            </div>
            
            <div class="mb-3">
              <h6 class="fw-bold text-primary mb-2">
                <i class="bi bi-graph-up"></i> Aplicação
              </h6>
              <p class="text-muted small mb-0">
                ${aplicacaoEscala}
              </p>
            </div>
            
            <div class="text-center">
              <div class="badge bg-primary p-2 mb-2">
                <i class="bi bi-star-fill"></i> Padrão Ouro
              </div>
              <p class="text-muted small mb-0">
                Considerada uma das escalas mais importantes na avaliação funcional
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  divRespostas.innerHTML = html;
  
  // Adicionar o event listener para o formulário após criar o HTML
  const form = document.getElementById(`form-${escalaAtual}`);
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const perguntasAtuais = escalaAtual === 'katz' ? perguntas : perguntasLawton;
  let score = 0;
  let answeredQuestions = 0;

  // Verificar se todas as perguntas foram respondidas
  for (let i = 0; i < perguntasAtuais.length; i++) {
    const value = formData.get(`p${i}`);
    if (value !== null) {
      score += parseInt(value);
      answeredQuestions++;
    }
  }

  // Verificar se todas as perguntas foram respondidas
  if (answeredQuestions < perguntasAtuais.length) {
    alert("Por favor, responda todas as perguntas antes de ver o resultado.");
    return;
  }

  let interpretacao = "";
  let alertClass = "";
  let icon = "";
  const maxScore = escalaAtual === 'katz' ? 6 : 8;

  if (escalaAtual === 'katz') {
    if (score === 6) {
      interpretacao = "Totalmente independente";
      alertClass = "alert-success";
      icon = "🎉";
    } else if (score >= 4) {
      interpretacao = "Dependência moderada";
      alertClass = "alert-warning";
      icon = "⚠️";
    } else if (score >= 2) {
      interpretacao = "Dependência significativa";
      alertClass = "alert-danger";
      icon = "🚨";
    } else {
      interpretacao = "Totalmente dependente";
      alertClass = "alert-danger";
      icon = "🚨";
    }
  } else {
    // Escala de Lawton
    if (score === 8) {
      interpretacao = "Totalmente independente";
      alertClass = "alert-success";
      icon = "🎉";
    } else if (score >= 6) {
      interpretacao = "Dependência leve";
      alertClass = "alert-info";
      icon = "ℹ️";
    } else if (score >= 4) {
      interpretacao = "Dependência moderada";
      alertClass = "alert-warning";
      icon = "⚠️";
    } else {
      interpretacao = "Dependência severa";
      alertClass = "alert-danger";
      icon = "🚨";
    }
  }

  const resultadoDiv = document.getElementById("resultado");
  if (resultadoDiv) {
    resultadoDiv.innerHTML = `
      <div class="alert ${alertClass}">
        <div class="text-center">
          <h6 class="alert-heading">${icon} Resultado da Avaliação</h6>
        </div>
        <div class="row text-center">
          <div class="col-md-6">
            <h4 class="text-primary">${score}/${maxScore}</h4>
            <p class="small text-muted">Pontuação Total</p>
          </div>
          <div class="col-md-6">
            <h5 class="text-primary">${interpretacao}</h5>
            <p class="small text-muted">Nível de Dependência</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-8 mx-auto">
            <h6 class="text-center mb-2">📊 Interpretação da Escala:</h6>
            <div class="row text-center">
              ${escalaAtual === 'katz' ? `
                <div class="col-3">
                  <div class="badge bg-success p-1">6</div>
                  <small class="d-block text-muted">Independente</small>
                </div>
                <div class="col-3">
                  <div class="badge bg-warning p-1">4-5</div>
                  <small class="d-block text-muted">Moderado</small>
                </div>
                <div class="col-3">
                  <div class="badge bg-danger p-1">2-3</div>
                  <small class="d-block text-muted">Significativo</small>
                </div>
                <div class="col-3">
                  <div class="badge bg-danger p-1">0-1</div>
                  <small class="d-block text-muted">Dependente</small>
                </div>
              ` : `
                <div class="col-3">
                  <div class="badge bg-success p-1">8</div>
                  <small class="d-block text-muted">Independente</small>
                </div>
                <div class="col-3">
                  <div class="badge bg-info p-1">6-7</div>
                  <small class="d-block text-muted">Leve</small>
                </div>
                <div class="col-3">
                  <div class="badge bg-warning p-1">4-5</div>
                  <small class="d-block text-muted">Moderado</small>
                </div>
                <div class="col-3">
                  <div class="badge bg-danger p-1">0-3</div>
                  <small class="d-block text-muted">Severo</small>
                </div>
              `}
            </div>
          </div>
        </div>
        <div class="text-center mt-3">
          <button class="btn btn-outline-primary btn-sm me-2" onclick="location.reload()">
            <i class="bi bi-arrow-clockwise"></i> Nova Avaliação
          </button>
          <button class="btn btn-success btn-sm" onclick="gerarPDF(${score}, '${interpretacao}', '${escalaAtual}')">
            <i class="bi bi-download"></i> Baixar PDF
          </button>
        </div>
      </div>
    `;
  }
}

// Iniciar automaticamente quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  criarFormulario();
  
  // Adicionar event listeners para navegação
  document.getElementById('nav-katz').addEventListener('click', function(e) {
    e.preventDefault();
    alternarEscala('katz');
  });
  
  document.getElementById('nav-lawton').addEventListener('click', function(e) {
    e.preventDefault();
    alternarEscala('lawton');
  });
});
