import React, { useState } from "react";

const predefinedQuestions = [
  "How do I sell my license?",
  "How long does it take to get paid?",
  "Is it safe to use SoftSell?",
];

const mockResponses: Record<string, string> = {
  "How do I sell my license?":
    "You can upload your license on our site, and we'll evaluate it instantly.",
  "How long does it take to get paid?":
    "Once your license is approved, you get paid within 24 hours.",
  "Is it safe to use SoftSell?":
    "Absolutely. We use secure, verified channels and value your trust.",
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; text: string }[]
  >([]);

  const handleQuestionClick = (question: string) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: question },
      { type: "bot", text: mockResponses[question] },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 max-h-[30rem] flex flex-col bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-300 dark:border-gray-700 overflow-hidden">
          <div className="flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
            <h4 className="text-base font-semibold text-gray-800 dark:text-white">
              Ask SoftSell AI
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl text-gray-500 hover:text-red-500 dark:hover:text-red-400"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 bg-white dark:bg-gray-900 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] text-sm p-2 rounded-lg ${
                  msg.type === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 space-y-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            {predefinedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(q)}
                className="w-full px-3 py-2 rounded-md bg-white dark:bg-gray-700 text-left text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          💬 Chat
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
