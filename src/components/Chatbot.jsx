import React, { useState, useRef, useEffect } from 'react';
import responses from '../Data/responses';
import '../css/chat.css';
import stringSimilarity from 'string-similarity';

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^a-z0-9\s]/gi, "")   
    .trim();
}

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

useEffect(() => {
  scrollToBottom();
}, [messages]);

const scrollToBottom = () => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'end',
      inline: 'nearest'
    });
  }
};

function getBotResponse(userMessage) {
  const normalizedMsg = normalizeText(userMessage);

  let bestMatch = { rating: 0, answer: '' };

  for (const entry of responses) {
    for (const keyword of entry.keywords) {
      const normalizedKeyword = normalizeText(keyword);
      const similarity = stringSimilarity.compareTwoStrings(normalizedMsg, normalizedKeyword);

      if (similarity > bestMatch.rating) {
        bestMatch = { rating: similarity, answer: entry.answer };
      }
    }
  }

  if (bestMatch.rating > 0.5) {
    return bestMatch.answer;
  }

  return (
  `Lo siento, no tengo una respuesta programada para esa consulta.\n` +
  `📌 Puedes intentar reformular tu pregunta o consultar alguno de estos temas:\n` +
  `• vacaciones\n` +
  `• libre compensado\n` +
  `• horario / planilla / asistencia\n` +
  `• descuento por horas no trabajadas\n`+
  `• Regularizacion de Marcas\n\n`+ 
  `📩 De no existir el tema solicitado escribir a planificacion.rinconada@enjoy.cl para más ayuda.`
);
}

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'Colaborador' };
    const botReply = getBotResponse(input);
    const botMessage = { text: botReply, sender: 'bot' };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Asistente de Trabajo</div>
      
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${msg.sender}`}
          >
            <strong>{msg.sender === 'Colaborador' ? 'Tú' : 'Dotabot'}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Haz tu pregunta..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default Chatbot;
