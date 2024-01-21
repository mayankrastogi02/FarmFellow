import React, { useState } from 'react';
import { CohereClient } from 'cohere-ai';

// Initialize the Cohere client
const cohere = new CohereClient({
    token: 'KSDkNiEz5wL8LAyJac6mXXKYN90gh0bsSMMNWCl1',
});

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {

        event.preventDefault();
        // Append the user's message to the chat history
        setMessages([...messages, { role: 'USER', message: input }]);

        // Clear the input field
        setInput('');
        // Set loading state to true
        setIsLoading(true);

        // Generate the chatbot's response
        const response = await cohere.generate({
            prompt: input,
            history: messages.map((message) => message.message).join('\n'),
        });

        // Append the chatbot's response to the chat history
        console.log(response);
        setMessages([...messages, { role: 'USER', message: input }, { role: 'CHATBOT', message: response.generations[0].text.trim() }]);


        // Set loading state to false
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col h-[75vh] p-12">
            <div className="overflow-auto h-full px-24">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'USER' ? 'justify-end' : 'justify-start'} p-2`}>
                        <div className={`rounded-lg px-4 py-2 ${message.role === 'USER' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                            <p>{message.message}</p>
                        </div>
                    </div>
                ))}
                {isLoading && <div className="p-2">Chatbot is typing...</div>}
            </div>
            <form className="m-2 px-24" onSubmit={sendMessage}>
                <input className="w-full rounded-md bg-slate-300 border-gray-300 shadow-xl h-8 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-4" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="w-full py-2 px-4 bg-black hover:bg-slate-700 rounded-md text-white text-sm mt-2" type='submit'>Send</button>
            </form>
        </div>
    );
}

export default Chat;
