# Calculadora Node 💻

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🚀 Primeiros passos

### Pré-requisitos  

Para executar a aplicação localmente, é necessário ter instalado em sua máquina:

- <a href="https://nodejs.org/en">NodeJs</a>
- <a href="https://git-scm.com">Git</a>

### Clonar

Para clonar este projeto na sua máquina local:

```bash
git clone https://github.com/victorzld/calculadora-node.git
```
### Iniciar o projeto

Para iniciar o seu projeto:

```bash
cd calculadora-node
npm i
npm run dev
```

## 📍 API Endpoints

| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /api/calculadora</kbd>     | realiza o calculo conforme as opereções - [response details](#get-auth-detail)
|

### POST /api/calculadora

REQUEST

```bash
{
  "initialValue": 10,
  "operations": [
    { "type": "add", "value": 5 },
    { "type": "multiply", "value": 3 },
    { "type": "subtract", "value": 4 },
    { "type": "divide", "value": 2 }
  ]
}
```

RESPONSE

```bash
{
  "result": 20.5
}
```
