import Navbar from "../../components/Navbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [showSpeechDemo, setShowSpeechDemo] = useState(false);
  const [showTextDemo, setShowTextDemo] = useState(false);
  const [speechText, setSpeechText] = useState("");
  const [typedText, setTypedText] = useState("");

  const startSpeechRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "mr-IN";
    recognition.onresult = (event) => {
      setSpeechText(event.results[0][0].transcript);
    };

    recognition.start();
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden 
      bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="flex-1 flex flex-col items-center justify-center px-10 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
          Marathi–English Humor AI
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl">
          A bilingual conversational AI that understands humor, cultural nuance, and 
          code-mixed expressions using advanced NLP and deep learning.
        </p>

        <div className="flex gap-6 mt-10">
          
          {/* SPEECH DEMO BUTTON */}
          <button
            onClick={() => setShowSpeechDemo(true)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 
            shadow-xl text-white font-semibold hover:scale-105 transition-all"
          >
            🎤 Try Speech Demo
          </button>

          {/* TEXT DEMO BUTTON */}
          <button
            onClick={() => setShowTextDemo(true)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 
            shadow-xl text-white font-semibold hover:scale-105 transition-all"
          >
            ⌨️ Try Text Demo
          </button>
        </div>
      </section>

      {/* SPEECH DEMO MODAL */}
      {showSpeechDemo && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gray-900 p-8 rounded-3xl w-[450px] shadow-2xl">
            <h2 className="text-2xl mb-3 font-semibold">🎤 Speech Demo</h2>
            <p className="text-gray-400 mb-4">Click the mic and speak a joke or sentence.</p>

            <button
              onClick={startSpeechRecognition}
              className="w-full py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700"
            >
              🎙 Start Listening
            </button>

            {speechText && (
              <p className="text-gray-200 bg-gray-800 p-4 rounded-xl mt-4">
                <b>You said:</b> {speechText}
              </p>
            )}

            <button
              onClick={() => setShowSpeechDemo(false)}
              className="mt-5 w-full py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* TEXT DEMO MODAL */}
      {showTextDemo && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gray-900 p-8 rounded-3xl w-[450px] shadow-2xl">
            <h2 className="text-2xl mb-3 font-semibold">⌨️ Text Demo</h2>

            <textarea
              value={typedText}
              onChange={(e) => setTypedText(e.target.value)}
              placeholder="Type or paste Marathi/English text…"
              className="w-full h-28 p-3 rounded-xl bg-gray-800 text-gray-200 outline-none"
            />

            <button
              className="mt-4 w-full py-3 bg-purple-600 rounded-full hover:bg-purple-700"
            >
              Analyze Humor
            </button>

            <button
              onClick={() => setShowTextDemo(false)}
              className="mt-3 w-full py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Humor AI — All Rights Reserved
      </footer>
    </div>
  );
}
