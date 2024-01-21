import React, { useEffect } from 'react'
import { useState } from 'react';
import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
    token: 'KSDkNiEz5wL8LAyJac6mXXKYN90gh0bsSMMNWCl1',
});

function ChatModal() {
    const [messages, setMessages] = useState([]);
    const input = 'Can you recommend me a healthy recipe?'
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const sendMessage = async () => {
            // Append the user's message to the chat history
            setMessages([...messages, { role: 'USER', message: input }]);

            // Set loading state to true
            setIsLoading(true);

            // Generate the chatbot's response
            const response = await cohere.generate({
                prompt: input,
                history: messages.map((message) => message.message).join('\n'),
            });

            // Append the chatbot's response to the chat history
            setMessages([...messages, { role: 'USER', message: input }, { role: 'CHATBOT', message: response.generations[0].text.trim() }]);


            // Set loading state to false
            setIsLoading(false);
        };
        sendMessage();

    }, []);

    return (
        <dialog id="chatModal" className="modal modal-bottom sm:modal-middle" >
            <div className="modal-box">
                <>
                    <div className="flex flex-col p-12">
                        <div className="overflow-auto h-full px-2">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex ${message.role === 'USER' ? 'justify-end' : 'justify-start'} p-2`}>
                                    <div className={`rounded-lg px-4 py-2 ${message.role === 'USER' ? 'bg-info-500 text-white' : 'bg-success-500 text-black'}`}>
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && <div className="p-2 text-white">Chatbot is typing...</div>}
                        </div>
                    </div>
                </>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog >
    )
}

export default ChatModal