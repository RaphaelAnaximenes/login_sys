# login_sys - Login system w/ Typescript, mocked credentials

Olá, AnxDev aqui! ;)

## Sobre o projeto

Este projeto simula um sistema de logins (em implementação), capaz de identificar 
o tipo de requisição (req.method) e, baseado nisso, tratar a requisição:

```
Caso: GET para /login:
 • Retorna sucesso (loginJSon), caso este endpoint seja requisitado

Caso: POST para /login:
 • Retorna `login sucess` e status 200, caso o payload (req.body) com login e senha existente na "db" seja válido
 • Retorna `denied` e status 404, caso o payload (req.body) com login e senha não exista na "db"

Caso: GET para endpoint inexistente: 
 • Retorna 404 page
 
 Obs.: Todos requests são logados no console pelo middleware 'requestLogger'
```
Como instalar as dependencias: 
npm install (flags opcionais: --save-dev --global)[recomendado]

@AnxDev
