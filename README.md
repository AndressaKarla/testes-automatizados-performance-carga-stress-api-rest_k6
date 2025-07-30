---
# Projeto de Testes Não Funcionais Automatizados Performance, Carga e Stress | go v1.21.6 | k6 v0.49.0 | xk6-faker v0.3.2 | Javascript | MongoDB v5.0.14 :test_tube:
---
# :information_source: Introdução
Esse projeto "testes-automatizados-performance-carga-stress-api-rest_k6" é executado em um ambiente de desenvolvimento local na API REST "user" desenvolvida pelo [Fernando Papito](https://www.linkedin.com/in/papitoio/) para o curso ["Introdução aos testes de performance com k6"](https://www.youtube.com/watch?v=6n69I_l3FEM&list=PLn2i8I7W73irNVpzHDU2oKWCKLa2VPWEx) da "QANinja Academy", e com o objetivo de praticar ainda mais testes não funcionais automatizados de Performance, Carga e Stress em Javascript e k6 (semelhante ao JMeter).

---
# 🔖 Requisitos funcionais
### Cadastro
- Deve retornar os id ao cadastrar um novo usuário
- Deve retornar 201 ao cadastrar um novo usuário
- Deve retornar 400 ao tentar cadastrar sem email e senha
- Deve retornar 400 se o email for duplicado

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | usuário identificador único           | email    | sim         |
| password | senha do usuário                      | texto    | sim         |

# 🔖 Requisitos não funcionais
### Cadastro
- O cadastro com sucesso deve ocorrer em até 2 segundos
- Cadastros sem sucesso devem ocorrer em até 2 segundos
- Deve poder cadastrar até 100 usuários simultâneos
- A margem de erro no cadastro deve ser de pelo menos 1%

---
# :warning: _Instruções considerando Windows 11, para outras versões do Windows ou outros sistemas operacionais talvez seja necessário algumas adaptações_

# Antes de clonar ou executar esse projeto localmente no computador, é necessário seguir as instruções abaixo :point_down:

## :hammer_and_wrench: Instalar algumas dependências necessárias 
### Janela do "Explorador de Arquivos" > opção "Visualizar" > "Mostrar" e marcar algumas opções
- No Windows 11, abrir uma janela do "Explorador de Arquivos"
- Clicar na opção "Visualizar" > "Mostrar"
- Clicar na opção "Extensões de nomes de arquivos" 
- Clicar na opção "Itens ocultos"

### Baixar e instalar o git e gitbash; configurar o git
- Caso ainda não tenha o git e gitbash baixado e instalado, acessar o link do [git e gitbash](https://git-scm.com/download/win), baixar e instalar como administrador
- Caso ainda não tenha configurado o git, seguir os passos apresentados nesse link ["Configure a ferramenta"](https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/#:~:text=Configure%20a%20ferramenta) e configurar

### Desinstalar completamente MongoDB que já foi instalado em algum outro momento
- Seguir os passos apresentados neste [link](https://www.google.com/search?q=desinstalar+completamente+mongodb+windows+11)
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório "C:", procurar e excluir as pastas "data" > "db"

### Janela do "Explorador de Arquivos", criar pastas "data" > "db", para execução do servidor e gerenciamento de tarefas do MongoDB
- Na janela do "Explorador de Arquivos", acessar o diretório "C:"
- Criar a pasta "data"
- Acessar a pasta criada "data" 
- Criar a pasta "db"

### MongoDB Community versão 5.0.14
- Baixar e instalar o [mongodb 5.0.14](https://www.mongodb.com/try/download/community-edition/releases/archive#:~:text=org%2Dshell_5.0.14_amd64.deb-,Windows%20x64,-Archive%3A%20mongodb) > Msi > mongodb-windows-x86_64-5.0.14-signed.msi
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório "C:\Program Files\MongoDB\Server\5.0\bin"
- Copiar este diretório
- Na ferramenta de pesquisa do Windows, informar "Editar as variáveis de ambiente do sistema" > Clicar na sugestão apresentada e clicar no botão "Variáveis de Ambiente..."
- Na seção "Variávies do sistema", clicar na opção "Path" > Botão "Editar" > Botão "Novo"
- Informar o diretório copiado anteriormente > Clicar nos botões "OK" de cada tela 
- Abrir um novo gitbash ou outro terminal 
- Informar o comando abaixo para confirmar se o mongodb realmente foi instalado e corretamente configurado nas variáveis de ambiente
```
mongo --version
```
- Verificar se foi retornada a mesma versão do mongodb instalada anteriormente:
```
v5.0.14
```
- Informar o comando abaixo para iniciar a execução do servidor e gerenciamento de tarefas do mongodb
```
mongod
```
- As informações devem continuar sendo apresentadas no terminal (não se encerrarem)
- NÃO fechar este gitbash ou terminal

### Desinstalar k6 que já foi instalado em algum outro momento
- Na ferramenta de pesquisa do Windows, informar "Adicionar ou remover programas" 
- Clicar na sugestão apresentada 
- Em "Aplicativos > Aplicativos instalados", no campo de busca, informar "k6"
- No resultado apresentado, clicar em "... > Desinstalar" e prosseguir com as etapas de desinstalação
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório "C:\Program Files", procurar e excluir a pasta "k6"

### Excluir xk6 que já foi instalado em algum outro momento
- Abrir um novo gitbash
- Informar o comando abaixo para verificar em qual diretório o xk6 foi instalado
```
where xk6
```
Ex.: 
```
C:\Users\usuario\go\bin\xk6.exe
```
- Copiar este diretório até antes do trecho "\xk6.exe"

Ex.: 
```
C:\Users\usuario\go\bin
```
- Fechar este gitbash
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório copiado anteriormente, procurar e excluir "xk6.exe"

### Desinstalar go que já foi instalado em algum outro momento
- Na ferramenta de pesquisa do Windows, informar "Adicionar ou remover programas" 
- Clicar na sugestão apresentada 
- Em "Aplicativos > Aplicativos instalados", no campo de busca, informar "Go Programming Language"
- No resultado apresentado, clicar em "... > Desinstalar" e prosseguir com as etapas de desinstalação
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório "C:\Program Files", procurar e excluir a pasta "go"
- Acessar o diretório "C:\Users\usuario", procurar e excluir a pasta "Go"

### k6 versão 0.49.0 
- Baixar e instalar o [k6 v0.49.0](https://github.com/grafana/k6/releases/tag/v0.49.0) > Assets > k6-v0.49.0-windows-amd64.msi
- Abrir um novo gitbash
- Informar o comando abaixo para confirmar se o k6 realmente foi instalado
```
k6 version
```
- Verificar se foi retornada a mesma versão do k6 instalada anteriormente:
```
k6.exe v0.49.0
```
- Fechar este gitbash

### go versão 1.21.6 
- Baixar e instalar o [go 1.21.6](https://go.dev/dl/#:~:text=Archived%20versions%20Show) > Archived versions > Show > go1.21.6 > go1.21.6.windows-amd64.msi
- Abrir um novo gitbash
- Informar o comando abaixo para confirmar se o go realmente foi instalado
```
go version
```
- Verificar se foi retornada a mesma versão do go instalada anteriormente:
```
go version go1.21.6
```
- Fechar este gitbash

### xk6 versão 0.10.0 
- Abrir um novo gitbash
- Informar o comando abaixo para instalar xk6 versão 0.10.0
```
go install go.k6.io/xk6/cmd/xk6@v0.10.0
```
- Fechar este gitbash
- Abrir um novo gitbash
- Informar o comando abaixo para confirmar se o xk6 realmente foi instalado e em qual diretório
```
where xk6
```
Ex.: 
```
C:\Users\usuario\go\bin\xk6.exe
```
- Fechar este gitbash

### Desinstalar completamente Node.js e npm que já foram instalados em algum outro momento 
- Seguir os passos apresentados nesse link ["Guia Passo a Passo para Remover o Node.js no Windows"](https://cursos.qaxperience.com/pt/blog/guia-passo-a-passo-para-remover-o-node-no-windows)
  
### Node versão 18.12.1
- Baixar e instalar o [node v18.12.1](https://nodejs.org/dist/v18.12.1/) > node-v18.12.1-x64.msi
- Abrir um novo gitbash  
- Informar o comando abaixo para confirmar se o node realmente foi instalado
```
node --version
```
- Verificar se foi retornada a mesma versão do node instalada anteriormente:
```
v18.12.1
```
- Informar o comando abaixo para confirmar se o npm realmente foi instalado
```
npm --version
```
- E verificar se foi retornada essa mesma versão do npm:
```
8.19.2
```
- Fechar este gitbash 

---
# :hammer_and_wrench: Clonar o projeto 
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde será clonado o projeto "testes-automatizados-performance-carga-stress-api-rest_k6"
- Copiar esse diretório
- Abrir um novo gitbash
- Informar o comando abaixo para acessar onde será clonado o projeto
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação"
```
- Informar o comando abaixo para clonar este repositório via "HTTPS"

```
git clone https://github.com/AndressaKarla/testes-automatizados-performance-carga-stress-api-rest_k6.git
```

- Ou informar o comando abaixo para clonar este repositório via "SSH"

```
git clone git@github.com:AndressaKarla/testes-automatizados-performance-carga-stress-api-rest_k6.git
```
- NÃO fechar este gitbash

# :hammer_and_wrench: Instalar mais algumas dependências necessárias de "user" (apps > api) 
- No gitbash aberto anteriormente, informar o comando abaixo para acessar o projeto “testes-automatizados-performance-carga-stress-api-rest_k6” clonado anteriormente
```
cd testes-automatizados-performance-carga-stress-api-rest_k6
```
Ex.: 
```
C:\Projetos\Automação\testes-automatizados-performance-carga-stress-api-rest_k6
```
- Informar o comando abaixo para acessar "user" (apps > api) 
```
cd ./apps/api
```
- Informar o comando abaixo para forçar, mesmo tendo possíveis conflitos, a instalação das dependências de "user" (apps > api)
```
npm install --force
```
- Fechar este gitbash 

# :hammer_and_wrench: Instalar as extensões no Visual Studio Code (VS Code)
- Caso ainda não tenha o VS Code baixado e instalado, acessar o site do [Visual Studio Code](https://code.visualstudio.com/download), baixar e instalar com a opção "System Installer"
- Com o Visual Studio Code aberto, caso seja apresentada alguma mensagem de "Instalar pacote de idiomas ...", clicar no ícone de configurações > "Don't Show Again"
- Clicar na opção "Manage > Profiles > Create Profile"
- Em "Profile name", informar "K6 API"
- Clicar na opção "Create"
- Clicar na opção "Extensions", informar e instalar as extensões abaixo:
  - One Dark Pro 
    - binaryify
      - Nas opções apresentadas, clicar na opção "One Dark Pro Darker" para habilitar a extensão
  - Material Icon Theme
    - Philipp Kief
      - Clicar na opção "Material Icon Theme" apresentada para habilitar a extensão 
- Fechar o VS Code

# :hammer_and_wrench: xk6-faker versão 0.3.2
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-performance-carga-stress-api-rest_k6”
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-performance-carga-stress-api-rest_k6"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-performance-carga-stress-api-rest_k6"
```
- Informar o comando abaixo para instalar xk6-faker versão 0.3.2
```
xk6 build --with github.com/grafana/xk6-faker@v0.3.2
```
- NÃO fechar este gitbash

# :bookmark_tabs: Abrir o VS Code diretamente na pasta do projeto "testes-automatizados-performance-carga-stress-api-rest_k6" e verificar que "k6.exe" foi criado automaticamente pelo comando anterior "xk6 build ... xk6-faker@v0.3.2"
- No gitbash aberto anteriormente, informar o comando abaixo para abrir o VS Code diretamente na pasta do projeto "testes-automatizados-performance-carga-stress-api-rest_k6"
```
code .
```
- Aguardar o VS Code ser aberto
- Fechar este gitbash
- No VS Code aberto, caso seja apresentado "Do you trust the authors on the files in this folder?", marcar a opção "Trust the authors of all files in the parent folder ...."
  - Clicar no botão "Yes, I trust the authors ...."
- Verificar que "k6.exe" foi criado automaticamente pelo comando anterior "xk6 build ... xk6-faker@v0.3.2"

# :hammer_and_wrench: Criar arquivo ".env" informando os dados com base no arquivo ".env.example" 
- No VS Code aberto anteriormente, acessar "apps > api > src"
- Criar o arquivo ".env"
  - Informar os dados com base no arquivo [".env.example"](https://github.com/AndressaKarla/testes-automatizados-performance-carga-stress-api-rest_k6/blob/main/apps/api/src/.env.example)
    - Salvar o arquivo ".env" com os dados informados anteriormente
    - Copiar o valor de "MONGO_URL"

---
## :triangular_flag_on_post: Executar API "user" (apps > api) em um ambiente de desenvolvimento local 
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-performance-carga-stress-api-rest_k6”
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-performance-carga-stress-api-rest_k6"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-performance-carga-stress-api-rest_k6"
```
- Informar o comando abaixo para acessar "user" (apps > api) 
```
cd ./apps/api
```
- Informar o comando abaixo para executar API "user" (apps > api) em um ambiente de desenvolvimento local

Ex.: 
```
npm run dev
```
- NÃO fechar este gitbash

## :hammer_and_wrench: Configurar conexão no MongoDB Compass
- Abrir "MongoDB Compass"
- Caso seja apresentada alguma mensagem de "A new version of Compass is available to install", clicar na opção de fechar "x"
- Em "New Connection" > "URI", informar o valor de "MONGO_URL" copiado do arquivo ".env" anteriormente

Ex.: 
```
mongodb://localhost:27017/db
```
ou
```
mongodb://127.0.0.1:27017/db
```
- Clicar em "Save & Connect"
- Em "db", clicar no ícone à esquerda ">" para expandir e ser apresentado a collection "users"

## :triangular_flag_on_post: Executar testes automatizados não funcionais de carga no k6
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-performance-carga-stress-api-rest_k6”
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-performance-carga-stress-api-rest_k6"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-performance-carga-stress-api-rest_k6"
```
- Informar o comando abaixo para executar testes automatizados não funcionais de carga (simulação de um número de usuários fixos que executam alguma ação durante um tempo determinado)
> 10 usuários virtuais (requisições simultâneas)

> tempo de inicialização (ramp-up) de 1 segundo (sleep(1) -> a cada 1 segundo, 10 usuários são escalados/conectados)

> 100 iterações (repetições) durante 30 segundos

```
./k6 run --vus 10 --duration 30s ./tests/post-signup.test.js
```
---
# :bookmark_tabs: Verificar os usuários criados no MongoDB Compass 
- No MongoDB Compass aberto anteriormente, clicar em "View > Reload Data"
- Acessar "db > users"

Ex.:
```
_id: ObjectId: ('6888442c5b0f7060c4cfc81c')
email: "mariana.braga.92668@hotmail.com.br"
password: "e1a711b7e9b91196031cb2214c9ad94f"
```
. . .

```
_id: ObjectId: ('6888454f5b0f7060c4cfc838')
email: "bernardo.lima.17519@gmail.com"
password: "d5f96c333809a2b1dbb684c50cab14ad"
```

# :bookmark_tabs: Excluir "db > users" no MongoDB Compass 
- Na database "db", clicar no ícone "Drop database"
- Informar "db"
- Clicar em "Drop Database"

---
### Feito com ❤️ por Andressa Karla :wave: 

### [![Medium](https://img.shields.io/badge/-Medium-595D60?style=plastic&logo=Medium&logoColor=white&link=https://medium.com/@andressakarla)](https://medium.com/@andressakarla) [![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=plastic&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andressakarla/)](https://www.linkedin.com/in/andressakarla/)

---