# Frontend Mentor - IP Address Tracker

Esta é a minha solução para o desafio [IP Address Tracker no Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Os desafios do Frontend Mentor ajudam a melhorar as habilidades de codificação ao construir projetos realistas.

## 📖 Índice

- [Visão Geral](#visão-geral)
  - [O Desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [O Processo](#o-processo)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento Contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)

## 🔭 Visão Geral

### O Desafio

Os usuários devem ser capazes de:
- Visualizar seu próprio endereço IP no mapa assim que a página realizar o carregamento inicial.
- Pesquisar por qualquer endereço IP ou Domínio e visualizar as informações de rastreamento e localização no mapa.
- Visualizar o layout ideal da interface dependendo do tamanho da tela do dispositivo (Responsividade mobile-first/desktop).
- Visualizar os estados de *hover* e *focus* nos elementos interativos.

### Screenshot

![Screenshot do Layout Desktop](./assets/images/screenshot-desktop.png)
![Screenshot do Layout Mobile](<img width="481" height="723" alt="{49B59233-8D4E-42E4-B6BE-00B2C5BE7BA8}" src="https://github.com/user-attachments/assets/981508b5-108d-4c8b-b0c6-397baacb46d5" />
)


## ⚙️ O Processo

### Tecnologias Utilizadas

Seguindo as convenções e boas práticas de estruturação web, este projeto foi construído utilizando:

- HTML5 Semântico
- CSS3 (Flexbox, funções matemáticas dinâmicas como `calc()`, e Media Queries)
- **Vanilla JavaScript (ES6+)** - Construção de lógica pura sem frameworks, priorizando os fundamentos.
- [LeafletJS](https://leafletjs.com/) - Biblioteca leve e open-source para renderização de mapas interativos.
- [IP Geolocation API by IPify](https://geo.ipify.org/) - API RESTful para consulta de dados geográficos e de rede.

### O que eu aprendi

Este projeto foi fundamental para solidificar a manipulação direta do **DOM** e o gerenciamento de eventos, lidando com requisições assíncronas para consumo de APIs REST via `fetch` com a sintaxe moderna `async/await`.

Alguns pontos técnicos de destaque da implementação:

**1. Validação Dinâmica com Regex:**
Implementação de Expressões Regulares (Regex) aliadas a Operadores Ternários para criar um roteamento inteligente. O script identifica em tempo real se o usuário digitou um IP numérico ou um Domínio, ajustando os parâmetros de requisição automaticamente:

```javascript
const isIp = /^(\d{1,3}\.){3}\d{1,3}$/.test(iporDomain);
const apiParameter = isIp ? 'ipAddress' : 'domain';
const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${apiParameter}=${iporDomain}`;
```

**2. Renderização Otimizada de Mapa:**
Para evitar consumo excessivo de memória com a sobreposição de múltiplas camadas de mapas no LeafletJS, a arquitetura reaproveita os objetos globais. O método `setView()` atualiza as coordenadas da câmera, enquanto o marcador central (`marker`) é reciclado utilizando `.setLatLng()`.

```javascript
// Atualização eficiente de coordenadas sem recriar nós no DOM
map.setView([lat, lng], 13);
marker.setLatLng([lat, lng]);
```

**3. Tratamento de Erros e UX:**
Prevenção de recarregamento indesejado do formulário com `e.preventDefault()` e encapsulamento das requisições de rede em blocos `try/catch` para capturar exceções HTTP e fornecer *feedbacks* de alerta caso a API falhe.

### Desenvolvimento Contínuo

Este projeto serviu como um excelente rito de passagem no fortalecimento dos fundamentos do Front-End (HTML, CSS e JavaScript). A meta agora, como estudante de Sistemas de Informação trilhando o caminho para se tornar Full Stack, é levar essa base sólida de lógica e consumo de dados para o lado do servidor, iniciando o aprofundamento em Back-End com ferramentas como Node.js e Express.

