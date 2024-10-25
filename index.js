// This is the main file that will be executed by node
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const app = express();

app.use(cors());
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
async function sendMessage(message) {
    const model = await genAI.getGenerativeModel({ model: 'gemini-pro' });
    const data = await model.generateContent(message);
    return data;
}

app.use(express.json());
app.post('', (request, response) => {
    let message = request.body.message;
    sendMessage(message).then((data) => {
        response.send({user: 'server', message: data.response.text()});
    });
});
app.listen(4000, () => {
    console.log('App is running...');
});