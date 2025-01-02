import express from 'express'
import bodyParser from 'body-parser'

import cors from 'cors';

// Permitir requisições do frontend

const app = express()
app.use(cors());

// Middleware para parsear JSON
app.use(bodyParser.json())

// Rota para a calculadora
app.post('/api/calculadora', (req, res) => {
    const { initialValue, operations } = req.body;

    // Validações básicas
    if (typeof initialValue !== 'number') {
        return res.status(400).json({ error: 'O campo "initialValue" deve ser um número.' });
    }
    if (!Array.isArray(operations) || operations.length === 0) {
        return res.status(400).json({
            error: 'O campo "operations" deve ser uma lista de operações com pelo menos um item.',
        });
    }

    let result = initialValue;

    try {
        for (const operation of operations) {
            const { type, value } = operation;

            if (typeof value !== 'number') {
                throw new Error('Cada operação deve conter um valor numérico válido.');
            }

            switch (type) {
                case 'add':
                    result += value;
                    break;
                case 'subtract':
                    result -= value;
                    break;
                case 'multiply':
                    result *= value;
                    break;
                case 'divide':
                    if (value === 0) {
                        throw new Error('Divisão por zero não é permitida.');
                    }
                    result /= value;
                    break;
                default:
                    throw new Error(`Operação inválida: ${type}. Use add, subtract, multiply ou divide.`);
            }
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ result });
})


app.listen({
    port: '3333'
}, console.log('servidor rodando'))