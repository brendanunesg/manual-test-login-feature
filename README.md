

# Projeto de Testes Manuais — TestHub Login App

Este projeto foi desenvolvido com o objetivo de simular uma aplicação web simples para **práticas de QA manual**, incluindo planejamento, execução de testes e registro de evidências.

# Objetivo

Garantir que a funcionalidade de **login de usuário** funcione corretamente, validando cenários positivos e negativos, além de comportamentos esperados da interface.

# Escopo do Projeto

**Funcionalidade testada:** Login de usuário  
**Aplicação:** TestHub Login App  
**Tecnologias utilizadas:**  
- HTML  
- CSS  
- JavaScript  
- (Executado localmente via VS Code + extensão Live Server)

#  Regras de Negócio

| ID | Regra | Descrição |
|----|--------|------------|
| R1 | Login válido | O sistema só aceita o usuário **qa_user** e a senha **123456** |
| R2 | Erro de credenciais | Se o usuário ou senha estiver errado, deve mostrar **"Usuário ou senha inválidos."** |
| R3 | Campos obrigatórios | Se algum campo estiver vazio, deve mostrar **"Preencha todos os campos."** |
| R4 | Redirecionamento | Login válido redireciona para a tela **dashboard.html** |
| R5 | Máscara de senha | O campo de senha deve ocultar os caracteres digitados |

---

## Casos de Teste

| ID | Cenário | Pré-condição | Passos | Resultado Esperado |
|----|----------|---------------|---------|--------------------|
| CT-001 | Login com credenciais válidas | Usuário cadastrado | 1. Acessar a página de login<br>2. Inserir `qa_user` e `123456`<br>3. Clicar em “Entrar” | Redirecionar para dashboard.html |
| CT-002 | Login com senha incorreta | Usuário cadastrado | 1. Inserir `qa_user` e senha incorreta<br>2. Clicar em “Entrar” | Exibir mensagem “Usuário ou senha inválidos.” |
| CT-003 | Login com campos vazios | Nenhuma | 1. Deixar os campos em branco<br>2. Clicar em “Entrar” | Exibir mensagem “Preencha todos os campos.” |
| CT-004 | Login com usuário inexistente | - | 1. Inserir `user_teste` e `123456`<br>2. Clicar em “Entrar” | Exibir mensagem “Usuário ou senha inválidos.” |
| CT-005 | Máscara de senha | - | 1. Digitar no campo senha | Os caracteres devem estar mascarados |

---

## Massa de Teste

| Tipo de Usuário | Usuário | Senha | Resultado Esperado |
|------------------|----------|--------|--------------------|
| Válido | qa_user | 123456 | Login com sucesso |
| Inválido | qa_user | senha_errada | Mensagem de erro |
| Inexistente | teste | 123456 | Mensagem de erro |
| Campos vazios | (vazio) | (vazio) | Alerta obrigatório |


## Evidências de Teste

Pasta: `/evidences`

| Evidência | Descrição |
|------------|------------|
| `CT001_login_sucesso.png` | Login com sucesso |
| `CT002_senha_invalida.png` | Senha incorreta |
| `CT003_campos_vazios.png` | Campos não preenchidos |


## Como Executar Localmente

### Pré-requisitos
- Visual Studio Code instalado  
- Extensão **Live Server** instalada

### Passos para rodar
1. Abra a pasta `manual-test-login-feature` no VS Code  
2. Abra o arquivo `index.html`  
3. Clique com o **botão direito → Open with Live Server**  
4. A aplicação abrirá no navegador  
5. Execute os testes manuais conforme os cenários descritos

## Conclusão

A aplicação TestHub Login App foi criada para fins de **estudo e demonstração prática de QA manual**.  
Ela simula uma funcionalidade real de autenticação, permitindo praticar:
- Planejamento de testes  
- Execução e registro de resultados  
- Análise de bugs e evidências  


## Autora

**Brenda Nunes**  
Quality Engineer | Testes Manuais e Automação  
brendanunes.goncalves@gmail.com

https://www.linkedin.com/in/brenda-nunes-30b956163/


