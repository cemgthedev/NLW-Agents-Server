# 🎮 Sala Interativa

Uma aplicação React moderna para criação e navegação entre salas. Projetada com foco em escalabilidade, boas práticas e estilização consistente com TailwindCSS e suporte ao modo escuro.

---

## 🛠 Tecnologias Utilizadas

- **React 18** – biblioteca para construção de UIs.
- **TypeScript** – tipagem estática para maior robustez.
- **Vite** – empacotador ultrarrápido para ambiente de desenvolvimento.
- **React Router DOM** – navegação declarativa entre rotas.
- **React Query** – gerenciamento de estado assíncrono e cache de dados.
- **TailwindCSS** – utilitários CSS de forma eficiente.
- **class-variance-authority (CVA)** – variação de estilos com base em props.
- **Radix UI** – acessibilidade e componentes base.
- **tailwind-merge + clsx** – merge inteligente de classes.
- **Custom Design Tokens (OKLCH)** – sistema de design com modo claro/escuro baseado em cor perceptiva.

---

## 📁 Estrutura do Projeto

```
src/
│
├── app.tsx                # Setup de rotas e QueryClientProvider
├── main.tsx               # Ponto de entrada da aplicação
├── pages/
│   ├── CreateRoom/        # Página inicial de criação/listagem de salas
│   └── Room/              # Página da sala com visualização por ID
├── components/
│   └── ui/
│       └── button.tsx     # Componente de botão reutilizável com variantes
├── lib/
│   └── utils.ts           # Função utilitária `cn` para merge de classes
├── styles/
│   └── index.css          # Configurações Tailwind e tokens de design
└── vite-env.d.ts          # Tipagens para Vite
```

---

## 🚀 Como Rodar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn
```

3. **Execute o projeto em modo de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

4. **Acesse:**

Abra [http://localhost:5173](http://localhost:5173) no navegador.

> Obs: Certifique-se de que a API está rodando localmente em `http://localhost:3333`.

---

## ✅ Boas Práticas Adotadas

- **Arquitetura modular** com separação clara entre UI, lógica e estilos.
- **Componentização reutilizável** com `cva` para variantes de botão.
- **Dark Mode** configurado com tokens OKLCH para melhor acessibilidade visual.
- **Query caching e loading state** com `React Query`.
- **Uso de `cn` para composição segura de classes Tailwind.**
- **Suporte a acessibilidade** com Radix e foco visual em componentes interativos.

---

## 🔮 Possíveis Melhorias Futuras

- Autenticação de usuários.
- Edição e criação de novas salas.
- WebSocket para salas em tempo real.
- Testes unitários e e2e com Jest e Playwright.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

Desenvolvido com 💜 por Carlos Eduardo M Gomes