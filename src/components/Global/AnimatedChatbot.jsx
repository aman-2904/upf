"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Mail, Send, Bot, User } from "lucide-react";

const AnimatedChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm your virtual assistant. How can I help you today?",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showContactOptions, setShowContactOptions] = useState(false);

    const quickReplies = [
        "Get a Quote",
        "Our Services",
        "Contact Info",
        "Business Hours"
    ];

    const botResponses = {
        "get a quote": "I'd be happy to help you get a quote! Please click the call button to speak with our sales team, or use the quick contact options below.",
        "our services": "We offer comprehensive digital solutions including web development, mobile apps, and digital marketing. Would you like to know more about any specific service?",
        "contact info": "You can reach us at +91 9035300045 or email us at sales@upflair.in. Our team is ready to assist you!",
        "business hours": "We're available Monday to Friday, 9 AM to 6 PM IST. For urgent matters, feel free to call us directly!",
        "hello": "Hello! Welcome to UP Flair. How can I assist you today?",
        "hi": "Hi there! I'm here to help you with any questions about our services.",
        "default": "That's a great question! For detailed information, I'd recommend speaking with our expert team. You can call us or send an email using the buttons below."
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newMessage]);
        setInputMessage("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const response = botResponses[inputMessage.toLowerCase()] || botResponses.default;
            const botMessage = {
                id: messages.length + 2,
                text: response,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);

            if (inputMessage.toLowerCase().includes("contact") || inputMessage.toLowerCase().includes("call")) {
                setShowContactOptions(true);
            }
        }, 1500);
    };

    const handleQuickReply = (reply) => {
        setInputMessage(reply);
        handleSendMessage();
    };

    const handleCall = () => {
        window.open("tel:+919035300045", "_self");
    };

    const handleEmail = () => {
        window.open("mailto:sales@upflair.in?subject=Inquiry from Website", "_self");
    };

    return (
        <>
            {/* Floating Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-gradient-to-r from-blue-600 to-purple-900 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse"
                    >
                        <MessageCircle size={24} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    </button>
                )}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 animate-slideUp">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot size={16} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">UP Flair Assistant</h3>
                                <p className="text-xs opacity-90">Online now</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1 rounded-full transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl ${message.sender === "user"
                                            ? "bg-blue-600 text-white rounded-br-md"
                                            : "bg-white text-gray-800 rounded-bl-md shadow-sm border"
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start animate-fadeIn">
                                <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Quick Replies */}
                    <div className="p-3 border-t bg-white">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {quickReplies.map((reply, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuickReply(reply)}
                                    className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>

                        {/* Contact Buttons */}
                        <div className="flex gap-2 mb-3">
                            <button
                                onClick={handleCall}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                            >
                                <Phone size={14} />
                                Call Now
                            </button>
                            <button
                                onClick={handleEmail}
                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                            >
                                <Mail size={14} />
                                Email
                            </button>
                        </div>

                        {/* Input */}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default AnimatedChatbot;