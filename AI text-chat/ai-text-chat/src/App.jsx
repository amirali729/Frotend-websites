// src/App.jsx
import { useState, useEffect, useRef } from "react";
import models from "./model.json";

function App() {
  // renamed state to plural to avoid shadowing with local vars
  const [messages, setMessages] = useState([]); // { content, isUser, id }
  const [inputValue, setInputValue] = useState("");
  const [isAiReady, setIsAiReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aiModel, setAiModel] = useState("gpt-4o");

  const messageEndRef = useRef(null);

  // Poll for puter.ai.chat being available
  useEffect(() => {
    const checkReady = setInterval(() => {
      if (window.puter?.ai?.chat) {
        setIsAiReady(true);
        clearInterval(checkReady);
      }
    }, 300);

    return () => clearInterval(checkReady);
  }, []);

  // scroll to bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (content, isUser) => {
    setMessages((prev) => [...prev, { content, isUser, id: Date.now() }]);
  };

  // keyboard handler for Enter (send) — prevents shift+enter allowing newlines
  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // model selection handler
  const selectModel = (e) => {
    const newModelId = e.target.value;
    setAiModel(newModelId);
    const modelObj = models.find((m) => m.id === newModelId) || models[0];
    addMessage(`Switched to ${modelObj.name} (${modelObj.provider})`, false);
  };

  // compute currently selected model object for UI
  const currentModel = models.find((m) => m.id === aiModel) || models[0];

  // send message to Puter
  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text || !isAiReady || isLoading) return;

    // add user message locally
    addMessage(text, true);
    setInputValue("");
    setIsLoading(true);

    try {
      // build conversation using messages state (previous messages) and system prompt
      const conversation = [
        { role: "system", content: "You are a helpful assistant." },
        // map existing messages state to role/content
        ...messages.map((m) => ({
          role: m.isUser ? "user" : "assistant",
          content: m.content,
        })),
        // current user message
        { role: "user", content: text },
      ];

      // call Puter chat
      const response = await window.puter.ai.chat(conversation, {
        model: aiModel,
        // if you want streaming: stream: true and then for-await-of handle partials
      });

      // normalize reply
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
    <div className="min-h-screen bg-gradient-to-br from-orange-950/100 via-neutral-950 to-amber-950 flex flex-col items-center justify-center p-4 gap-8">
      <h1 className="sm:text-7xl text-6xl bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent text-center ">
        Multi-Model AI Chat App 
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div
          className={`px-4 py-2 rounded-full text-sm ${
            isAiReady
              ? "bg-green-500/20 border border-green-500/30 text-green-300"
              : "bg-yellow-500/20 border border-yellow-500/30 text-yellow-300"
          }`}
        >
          {isAiReady ? "AI ready" : "waiting for AI..."}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-300 text-sm">Model: </span>
          <select
            value={aiModel}
            onChange={selectModel}
            disabled={!isAiReady}
            className="bg-orange-950/80 border border-orange-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {models.map((model) => (
              <option
                key={model.id}
                value={model.id}
                className="bg-amber-950 open:border-0"
              >
                {model.name} ({model.provider})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full max-w-2xl rounded-3xl p-6 bg-gradient-to-br from-orange-950/90 to-orange-950 backdrop:blur-md border border-orange-800/50">
        <div className="flex items-center justify-center mb-2 p-2 bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl border border-orange-500/30">
          <span className="text-orange-300 text-sm font-medium">
            currently using : {currentModel.name} ({currentModel.provider})
          </span>
        </div>

        <div className="h-96 overflow-y-auto border-b mb-6 p-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50 rounded-2xl border-gray-600">
          {messages.length === 0 && (
            <div className="text-center mt-20 text-gray-400">
              Start the conversation by typing
              <br />
              <span className="block text-gray-500 mt-2 text-xs">
                Try different models to see how they respond
              </span>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 m-2 rounded-2xl w-fit text-wrap max-w-[80%] ${
                msg.isUser
                  ? "ml-auto text-white bg-gradient-to-r from-orange-500 to-red-500"
                  : "text-white bg-gradient-to-r from-amber-600 to-orange-600"
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
          ))}

          {isLoading && (
            <div className="p-3 m-2 rounded-2xl max-w-xs bg-gradient-to-r from-amber-600 to-red-600">
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                {currentModel.name} is thinking...
              </div>
            </div>
          )}

          <div ref={messageEndRef} />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKey}
            placeholder={
              isAiReady ? `Ask ${currentModel.name} anything...` : "waiting AI to be ready"
            }
            disabled={!isAiReady || isLoading}
            className="flex-1 px-4 py-3 bg-yellow-300/30 border border-amber-800 text-white placeholder:bg-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:shadow-2xl focus:shadow-amber-900/30 focus:ring-orange-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          />

          <button
            onClick={sendMessage}
            disabled={!isAiReady || isLoading || !inputValue.trim()}
            className="px-6 py-3 font-semibold text-white hover:opacity-80 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                sending
              </div>
            ) : (
              "send"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
