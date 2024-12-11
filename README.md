# Sistema de Gestão de Estudos

## Descrição

O Sistema de Gestão de Estudos é uma aplicação web projetada para ajudar estudantes a organizar e monitorar seus hábitos de estudo. Com funcionalidades como planejamento de metas, rastreamento de progresso e visualização de relatórios, a ferramenta oferece uma experiência intuitiva e eficiente para melhorar o aprendizado.

---

## Funcionalidades Principais

- **Cadastro e Autenticação de Usuários:**
  - Registro com e-mail e senha.
  - Login via Google e Facebook.
- **Planejamento de Estudos:**
  - Criação de metas diárias, semanais e mensais vinculadas a disciplinas.
- **Gestão de Tarefas e Materiais:**
  - Gerenciamento de tarefas e upload de materiais (PDFs, vídeos, links).
- **Rastreamento de Progresso:**
  - Monitoramento do tempo dedicado às disciplinas.
  - Atualização do status das metas.
- **Gráficos e Relatórios:**
  - Visualização de desempenho por disciplina.
  - Relatórios semanais e mensais com estatísticas detalhadas.
- **Notificações e Lembretes:**
  - Envio de lembretes por e-mail e notificações push.
- **Extras:**
  - Gamificação para incentivar os estudos.
  - Exportação de relatórios em PDF e Excel.

---

## Tecnologias Utilizadas

- **Back-end:** C#, .NET Core, Entity Framework.
- **Front-end:** JavaScript, HTML, CSS, Bootstrap.
- **Banco de Dados:** SQL Server.
- **API REST:** Para integração de funcionalidades adicionais (ex.: envio de e-mails).
- **Controle de Versão:** Git, com repositório no GitHub.
- **Testes:** Xunit ou NUnit.

---

## Metodologia de Desenvolvimento

O projeto segue a metodologia **Scrum**, dividido em sprints quinzenais com entregas incrementais.

### Sprints Planejadas

1. **Configuração do Sistema e Autenticação de Usuários**
2. **Planejamento de Estudos**
3. **Rastreamento de Progresso**
4. **Gráficos e Relatórios**
5. **Notificações e Lembretes**
6. **Funcionalidades Extras e Ajustes Finais**

---

## Como Rodar o Projeto

### Pré-requisitos

- **.NET Core SDK** instalado.
- **SQL Server** configurado.
- **Node.js** (para gerenciamento de dependências front-end).
- **Git** para clonar o repositório.

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/Amarilha/sistema-gestao-estudos
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd sistema-gestao-estudos
   ```
3. Configure o banco de dados no **appsettings.json**.
4. Execute as migrações para criar as tabelas no banco:
   ```bash
   dotnet ef database update
   ```
5. Inicie o servidor:
   ```bash
   dotnet run
   ```
6. Abra o navegador em `http://localhost:5000` para acessar o sistema.

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Adiciona minha feature"
   ```
4. Faça o push para a branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
