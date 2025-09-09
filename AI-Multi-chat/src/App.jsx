import { useState, useEffect, useRef } from "react";
import models from "./model.json";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isAiReady, setIsAiReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aiModel, setAiModel] = useState("gpt-4o");

  const messageEndRef = useRef(null);

  useEffect(() => {
    const checkReady = setInterval(() => {
      if (window.puter?.ai?.chat) {
        setIsAiReady(true);
        clearInterval(checkReady);
      }
    }, 300);
    return () => clearInterval(checkReady);
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (content, isUser) => {
    setMessages((prev) => [...prev, { content, isUser, id: Date.now() }]);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const selectModel = (e) => {
    const newModelId = e.target.value;
    setAiModel(newModelId);
    const modelObj = models.find((m) => m.id === newModelId) || models[0];
    addMessage(`Switched to ${modelObj.name} (${modelObj.provider})`, false);
  };

  const currentModel = models.find((m) => m.id === aiModel) || models[0];

  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text || !isAiReady || isLoading) return;

    addMessage(text, true);
    setInputValue("");
    setIsLoading(true);

    try {
      const conversation = [
        { role: "system", content: "You are a helpful assistant." },
        ...messages.map((m) => ({
          role: m.isUser ? "user" : "assistant",
          content: m.content,
        })),
        { role: "user", content: text },
      ];

      const response = await window.puter.ai.chat(conversation, {
        model: aiModel,
      });

      const reply =
        typeof response === "string"
          ? response
          : response?.message?.content || "No reply received";

      addMessage(reply, false);
    } catch (err) {
      console.error("AI call error:", err);
      addMessage("Error: could not reach AI.", false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="w-full max-w-5xl px-4 py-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          Multi-Model AI Chat
        </h1>
        <p className="mt-2 text-gray-400 text-sm sm:text-base">
          Switch models and chat in real-time
        </p>
      </header>

      {/* Model & Status */}
      <div className="flex flex-col sm:flex-row gap-3 items-center w-full max-w-3xl px-4 mb-4">
        <div
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-lg ${
            isAiReady
              ? "bg-green-500/20 border border-green-500/40 text-green-300"
              : "bg-yellow-500/20 border border-yellow-500/40 text-yellow-300"
          }`}
        >
          {isAiReady ? "AI Ready" : "Connecting..."}
        </div>

        <div className="flex items-center gap-2 sm:ml-auto">
          <label className="text-gray-300 text-xs sm:text-sm">Model:</label>
          <select
            value={aiModel}
            onChange={selectModel}
            disabled={!isAiReady}
            className="bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name} ({model.provider})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Chat window */}
      <main className="flex-1 w-full max-w-3xl px-4">
        <div className="h-[70vh] sm:h-[65vh] overflow-y-auto rounded-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-800 p-4 flex flex-col">
          {messages.length === 0 && (
            <div className="m-auto text-center text-gray-400">
              <p className="text-sm sm:text-base">
                Start chatting with <span className="text-purple-400">{currentModel.name}</span>
              </p>
              <p className="text-xs sm:text-sm mt-1 text-gray-500">
                Try switching models to compare answers
              </p>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[80%] sm:max-w-[70%] p-3 mb-3 rounded-2xl shadow-md ${
                msg.isUser
                  ? "ml-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "mr-auto bg-gray-800/80 text-gray-100"
              }`}
            >
              <p className="whitespace-pre-wrap text-sm sm:text-base">
                {msg.content}
              </p>
            </div>
          ))}

          {isLoading && (
            <div className="mr-auto p-3 mb-3 rounded-2xl bg-gray-700/70 text-gray-200 text-sm flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-gray-400 border-t-white rounded-full animate-spin" />
              {currentModel.name} is thinking...
            </div>
          )}
          <div ref={messageEndRef} />
        </div>
      </main>

      {/* Input area */}
      <footer className="w-full max-w-3xl px-4 mt-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKey}
            placeholder={
              isAiReady
                ? `Ask ${currentModel.name}...`
                : "Waiting for AI to connect..."
            }
            disabled={!isAiReady || isLoading}
            className="flex-1 px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
          />
          <button
            onClick={sendMessage}
            disabled={!isAiReady || isLoading || !inputValue.trim()}
            className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm sm:text-base hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
