# 📋 Escala de Katz - Avaliação de AVD

Um aplicativo web moderno para avaliação da capacidade funcional de pacientes utilizando a Escala de Katz para Atividades da Vida Diária (AVD).

## 🎯 Sobre o Projeto

A Escala de Katz é um instrumento de avaliação funcional amplamente utilizado na área da saúde para medir a independência em atividades da vida diária (AVD) em idosos e pacientes com condições crônicas. Desenvolvida por Sidney Katz em 1963, esta escala avalia seis funções básicas:

- **Comer**: Capacidade de alimentar-se sozinho
- **Vestir**: Capacidade de escolher e colocar roupas
- **Tomar banho**: Capacidade de realizar higiene corporal
- **Transferência**: Capacidade de mover-se da cama para cadeira
- **Ir ao banheiro**: Capacidade de usar o banheiro independentemente
- **Continência**: Controle sobre urina e fezes

## ✨ Funcionalidades

- **Interface Moderna**: Design responsivo e intuitivo
- **Avaliação Automática**: As perguntas iniciam automaticamente ao carregar a página
- **Validação Completa**: Verifica se todas as perguntas foram respondidas
- **Resultado Detalhado**: Exibe pontuação, interpretação e escala de referência
- **Módulos JavaScript**: Código organizado em módulos ES6
- **Ícones e Animações**: Interface visualmente atrativa

## 🚀 Como Usar

1. **Acesse a aplicação**: Abra o arquivo `index.html` em um navegador
2. **Responda as perguntas**: Selecione uma opção para cada uma das 6 atividades
3. **Visualize o resultado**: Clique em "Ver Resultado" para obter a avaliação
4. **Interpretação**: O sistema mostrará:
   - Pontuação total (0-6)
   - Nível de dependência
   - Escala de referência

## 📊 Interpretação dos Resultados

| Pontuação | Interpretação | Nível de Dependência |
|-----------|---------------|---------------------|
| 6 | Totalmente independente | Independente |
| 4-5 | Dependência moderada | Moderado |
| 2-3 | Dependência significativa | Significativo |
| 0-1 | Totalmente dependente | Dependente |

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com animações
- **JavaScript ES6+**: Módulos e funcionalidades interativas
- **Bootstrap 5**: Framework CSS responsivo
- **Bootstrap Icons**: Ícones modernos

## 📁 Estrutura do Projeto

```
07_katz/
├── index.html          # Página principal
├── script.js           # Lógica principal da aplicação
├── perguntas.js        # Base de dados das perguntas (módulo)
├── style.css           # Estilos customizados
├── design.png          # Imagem de referência do design
└── README.md           # Documentação do projeto
```

## 🔧 Desenvolvimento

### Pré-requisitos
- Navegador moderno com suporte a ES6 modules
- Servidor local (recomendado para desenvolvimento)

### Executando Localmente
```bash
# Usando Python
python3 -m http.server 8000

# Usando Node.js
npx http-server

# Usando PHP
php -S localhost:8000
```

Acesse `http://localhost:8000` no seu navegador.

## 📝 Características Técnicas

- **Módulos ES6**: Separação da base de dados em `perguntas.js`
- **Responsividade**: Interface adaptável a diferentes tamanhos de tela
- **Acessibilidade**: Foco em elementos interativos e contraste adequado
- **Performance**: Carregamento otimizado e animações suaves
- **Manutenibilidade**: Código organizado e bem documentado

## 🎨 Design

- **Paleta de Cores**: Azul primário (#0d6efd) com gradientes
- **Tipografia**: Segoe UI para melhor legibilidade
- **Animações**: Transições suaves e efeitos hover
- **Layout**: Cards com sombras e bordas arredondadas

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração da Escala de Katz.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novas funcionalidades

---

**Desenvolvido com ❤️ para auxiliar profissionais de saúde na avaliação funcional de pacientes.** 