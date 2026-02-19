"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickReplies = [
  "Pour un mariage 💍",
  "Style quotidien ✨",
  "Idée cadeau 🎁",
  "Personnalisation 🔧",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! Je suis Yasmin, votre conseillère styliste spécialisée en bijoux berbères. Je peux vous aider à trouver la pièce parfaite selon votre style, votre morphologie ou l'occasion. Que recherchez-vous aujourd'hui ? 💎",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      const responses = [
        "Excellent choix ! Pour cette occasion, je vous recommande notre Fibule d'Anti-Atlas avec sa cornaline qui apporte de la chaleur.",
        "D'après votre style, le Bracelet Khmissa en argent serait parfait. Il est assez délicat pour être porté au quotidien.",
        "Pour un cadeau, je suggère la Bague Amazigh avec gravure personnalisée. C'est une pièce qui raconte une histoire.",
        "Avez-vous pensé à associer ce collier avec nos boucles Tiznit ? L'ensemble crée une harmonie parfaite."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
      >
        <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
        <span className={`overflow-hidden transition-all duration-300 ${isOpen ? 'w-0' : 'w-auto'} max-w-xs whitespace-nowrap font-medium`}>
          Conseiller IA
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-3xl shadow-2xl z-40 overflow-hidden border border-amber-200"
          >
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Yasmin</h4>
                  <p className="text-xs opacity-90">Styliste IA spécialisée</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.sender === "bot" ? "bg-amber-100" : "bg-gray-200"
                  }`}>
                    {msg.sender === "bot" ? (
                      <Bot className="w-4 h-4 text-amber-700" />
                    ) : (
                      <User className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                    msg.sender === "bot" 
                      ? "bg-white rounded-tl-none shadow-sm" 
                      : "bg-amber-600 text-white rounded-tr-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-amber-700" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full hover:bg-amber-100 transition-colors whitespace-nowrap"
                  >
                    {reply}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Décrivez votre style..."
                  className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-amber-500"
                />
                <Button 
                  size="icon" 
                  className="rounded-full bg-amber-600 hover:bg-amber-700"
                  onClick={() => handleSend()}
                  disabled={isLoading}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
