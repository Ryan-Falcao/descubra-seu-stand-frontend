# Descubra seu Stand — Frontend

Interface web feita em **React** para consumir a API que descobre o Stand (JoJo's Bizarre Adventure) do usuário a partir da data de nascimento.

## Sobre o projeto

O usuário informa a data de nascimento, o front envia essa informação para o backend (Spring Boot) via requisição HTTP, e exibe na tela o Stand descoberto, junto com o arcano correspondente.

## Tecnologias

- React
- Axios (requisições HTTP)
- Vercel (deploy)

## 📁 Estrutura principal

```
src/
├── axios.js             # Configuração da instância do Axios (baseURL da API)
├── DescobrirStand.jsx    # Componente principal com o formulário e exibição do resultado
└── App.jsx               # Componente raiz da aplicação
```

## Configuração

No arquivo `axios.js`, configure a `baseURL` apontando para o endereço do backend:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "URL_DO_SEU_BACKEND_AQUI",
});

export default api;
```

> Troque `URL_DO_SEU_BACKEND_AQUI` pelo endereço onde o backend está rodando (local ou em produção).

## Como rodar localmente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o `axios.js` com a URL do backend (local ou deploy)
4. Rode o projeto:
   ```bash
   npm run dev
   ```
5. Acesse pelo endereço indicado no terminal (geralmente `http://localhost:5173`)

## Integração com o backend

O componente `DescobrirStand.jsx` faz uma requisição `POST` para o endpoint `/api/stand/descobrir` do backend, enviando a data de nascimento informada pelo usuário, e exibe o Stand retornado.

Se estiver testando localmente com o backend também local, verifique se o CORS do backend está liberando a origem do front (ex: `http://localhost:5173`).

## Status

Projeto funcional, com frontend e backend integrados e implantados em produção (React no frontend, Spring Boot no backend).

## ✍️ Autor

Ryan Marques Monteiro Falcão — projeto criado como forma de aprendizado prático de React e integração com uma API Spring Boot.
