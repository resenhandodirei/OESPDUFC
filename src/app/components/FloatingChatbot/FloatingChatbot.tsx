"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(["Olá! Como posso ajudar você hoje?"]);

  const handleResponse = (response: string) => {
    setMessages([...messages, response]);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <div className="mb-2 w-64 p-4 bg-white shadow-lg rounded-lg border border-gray-300">
          {messages.map((msg, index) => (
            <p key={index} className="text-sm text-black mb-2">{msg}</p>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <button onClick={() => handleResponse("Quero saber mais sobre os serviços.")} className="p-2 bg-gray-200 rounded text-sm text-black">Serviços</button>
            <button onClick={() => handleResponse("Preciso de suporte técnico.")} className="p-2 bg-gray-200 rounded text-sm text-black">Suporte</button>
            <button onClick={() => handleResponse("Quais são os horários de atendimento?")} className="p-2 bg-gray-200 rounded text-sm text-black">Horários</button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-3 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 text-white"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
