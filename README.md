# woke-front

Para executar:

Opção 1:

    [projeto] ng serve 
    (Rodando em http://localhost:4200/)

Opção 2:

    [projeto] ng build
    ~~copiar a pasta gerada 'dist' para seu ambiente preferido~~
    ~~tendo instalado o http-server(npm install http-server)~~ 
    [dist] http-server
    (rodando na porta 8080 por padrão)

Adicionadas depêndencias de forma manual:
    
    Bootstrap 5.0.1
    Font Awesome free-5.15.3-web

Componentes, serviços e rotas padrão

Organização modificada para manter nas pastas por nomes:

    serviços em service
    componentes em components...

Componentes:

    companies: listagem das empresas
    home: tela de login
    messages: imcorporado pelos demais módulos e alimentado pelo seu serviço
    nav: navegação
    partners: indica o funcionamento das chamadas para a api por parte das empresas
              com teste prático
    user: tela de dados do usuário

Modelos:
    
    app-constants: constantes de requisições e erros
    candidate, company, contact, person, user: classes modelos
    message: classe utilizada no serviço de mensagens
    
Serviços:
    
    chamadas para a api, controle da autenticação, injeção do token de acesso nas requisições

Autenticação:
    
    por token, salvo em storage local
