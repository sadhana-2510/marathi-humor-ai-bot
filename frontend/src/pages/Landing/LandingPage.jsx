import Navbar from "../../components/Navbar.jsx";
import { useState } from "react";

export default function LandingPage() {
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden 
      bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 lg:px-10 text-center pt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
          Marathi–English Humor AI
        </h1>

        <p className="text-base md:text-xl text-gray-300 max-w-2xl">
          A context-aware AI framework for detecting humor, puns, and sarcasm in Marathi
          and bilingual Marathi–English speech, and generating culturally appropriate,
          playful responses.
        </p>

        {/* MAIN ACTION BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
          {/* SPEECH DEMO BUTTON */}
          <button
            onClick={() => setShowSpeechDemo(true)}
            className="px-7 md:px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 
            shadow-xl shadow-cyan-500/30 text-white font-semibold hover:scale-105 hover:shadow-2xl transition-all"
          >
            🎤 Try Speech Demo
          </button>

          {/* TEXT DEMO BUTTON */}
          <button
            onClick={() => setShowTextDemo(true)}
            className="px-7 md:px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 
            shadow-xl shadow-pink-500/30 text-white font-semibold hover:scale-105 hover:shadow-2xl transition-all"
          >
            ⌨️ Try Text Demo
          </button>
        </div>

        {/* SECONDARY NAV BUTTONS: ABOUT / PAPER / TEAM / CONTACT */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
          <button
            onClick={() => scrollToSection("about")}
            className="px-5 py-2 rounded-full border border-cyan-300/80 bg-white/5 
            hover:bg-cyan-500/20 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
            text-sm md:text-base font-medium text-cyan-100 transition-all"
          >
            ℹ️ About Project
          </button>

          <button
            onClick={() => scrollToSection("paper")}
            className="px-5 py-2 rounded-full border border-violet-300/80 bg-white/5 
            hover:bg-violet-500/20 hover:border-violet-300 hover:shadow-[0_0_25px_rgba(196,181,253,0.7)]
            text-sm md:text-base font-medium text-violet-100 transition-all"
          >
            📄 Research Paper
          </button>

          <button
            onClick={() => scrollToSection("team")}
            className="px-5 py-2 rounded-full border border-emerald-300/80 bg-white/5 
            hover:bg-emerald-500/20 hover:border-emerald-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.7)]
            text-sm md:text-base font-medium text-emerald-100 transition-all"
          >
            👥 Team
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 rounded-full border border-rose-300/80 bg-white/5 
            hover:bg-rose-500/20 hover:border-rose-300 hover:shadow-[0_0_25px_rgba(244,114,182,0.7)]
            text-sm md:text-base font-medium text-rose-100 transition-all"
          >
            ✉️ Contact
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="px-6 lg:px-16 py-16 bg-gradient-to-b from-[#020617]/40 to-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            About the Project
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            <span className="font-semibold">
              Context-Aware AI Framework for Humor Detection and Generative Modeling in Marathi Speech
            </span>{" "}
            focuses on understanding and generating Marathi and Marathi–English code-mixed humor. 
            Humor, puns, and sarcasm in Marathi are rich, culturally grounded, and often difficult for 
            traditional NLP systems to detect or reproduce.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            This project builds an end-to-end framework that can detect whether a given text or speech 
            segment is a joke, sarcastic, or a playful expression, and then extend it to generate 
            contextually appropriate humorous responses, suitable for use in voice assistants and 
            conversational agents.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg">
              <h3 className="font-semibold mb-2 text-cyan-200">Problem</h3>
              <p className="text-gray-300 text-sm">
                Marathi humor is highly contextual, culture-specific, and often code-mixed with English.
                Existing datasets and models rarely support such nuanced, bilingual humor understanding.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg">
              <h3 className="font-semibold mb-2 text-indigo-200">Solution</h3>
              <p className="text-gray-300 text-sm">
                Design a pipeline that can process Marathi speech/text, classify it as joke / non-joke /
                sarcasm, and generate playful, human-like humorous responses while preserving cultural tone.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg">
              <h3 className="font-semibold mb-2 text-pink-200">Research Contribution</h3>
              <p className="text-gray-300 text-sm">
                Proposes a pragmatic NLP + speech framework and lays the foundation for a benchmark dataset
                of Marathi spoken humor, which is currently non-existent in the public domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAPER / RESEARCH SECTION */}
      <section
        id="paper"
        className="px-6 lg:px-16 py-16 bg-gradient-to-b from-transparent via-[#020617]/50 to-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">
            Research & Paper Overview
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            The system is built as a multi-phase pipeline that starts with text-based joke detection 
            and gradually evolves into a full speech-aware humor generation framework.
          </p>

          {/* Phases */}
          <div className="space-y-5">
            <div className="bg-white/5 border border-violet-400/20 rounded-2xl p-5">
              <h3 className="font-semibold text-violet-200 mb-2">
                Phase 1 — Text Joke Detector
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                Build a binary classifier that labels input text as <span className="text-cyan-200">joke</span> 
                or <span className="text-cyan-200">non-joke</span> using transformer-based models.
              </p>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>Collect ~500 Marathi jokes + ~500 non-joke texts (news, general sentences).</li>
                <li>Train models such as <span className="text-cyan-200">ai4bharat/IndicBERT</span> or mBERT.</li>
                <li>Evaluate using accuracy and F1-score on held-out data.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-5">
              <h3 className="font-semibold text-cyan-200 mb-2">
                Phase 2 — Speech Integration
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                Integrate speech-to-text systems so the model can operate on real Marathi audio.
              </p>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>Use OpenAI Whisper / Google STT to transcribe Marathi audio.</li>
                <li>Pipe transcription into the joke detector to classify spoken humor.</li>
                <li>Support real-time or recorded audio inputs.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-pink-400/20 rounded-2xl p-5">
              <h3 className="font-semibold text-pink-200 mb-2">
                Phase 3 — Generative Modeling & TTS
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                Extend the system to generate Marathi jokes and deliver them as speech.
              </p>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>Start with rule-based / template joke generators and curated lists.</li>
                <li>Later fine-tune LLMs (e.g., BLOOMZ / LLaMA style models) on Marathi humor data.</li>
                <li>Use Coqui TTS / Google TTS or gTTS to convert generated jokes to audio.</li>
              </ul>
            </div>
          </div>

          {/* Safety / Moderation */}
          <div className="mt-8 bg-white/5 border border-red-400/30 rounded-2xl p-5">
            <h3 className="font-semibold text-red-200 mb-2">
              Safety & Moderation Pipeline
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              To avoid generating or responding to unsafe content (e.g., explicit or offensive humor), 
              the system includes a moderation layer:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
              <li>Pre-filter: Check user input for 18+ or harmful content before humor analysis.</li>
              <li>Post-filter: Optionally evaluate the generated response before sending it back.</li>
              <li>Training-time safety: Prefer safe datasets and avoid explicit training samples.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        id="team"
        className="px-6 lg:px-16 py-16 bg-gradient-to-b from-transparent via-[#020617]/60 to-[#020617]/80"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Project Team
          </h2>
          <p className="text-gray-300 mb-6">
            This project is collaboratively built as part of a final-year engineering / computer science 
            capstone, combining UI/UX engineering with applied NLP and speech processing research.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* NOTE: Replace placeholders with your real names & roles */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg">
              <h3 className="font-semibold text-lg text-emerald-200">Student 1</h3>
              <p className="text-gray-300 text-sm mt-1">
                Frontend & UX Engineer
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Responsible for the React-based UI, interactive dashboards, chat interface, and 
                visualization of humor analytics.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg">
              <h3 className="font-semibold text-lg text-emerald-200">Student 2</h3>
              <p className="text-gray-300 text-sm mt-1">
                NLP & Speech ML Engineer
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Focused on dataset creation, humor/sarcasm model training, speech integration, 
                and backend APIs for prediction and generation.
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            {/* You can replace this with your actual college/department */}
            Guided as part of a final-year project under the Department of Computer Science / Information Technology.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="px-6 lg:px-16 py-16 bg-gradient-to-t from-[#020617]/80 to-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">
            Contact & Collaboration
          </h2>
          <p className="text-gray-300 mb-4">
            For feedback, collaboration ideas, or academic discussion related to Marathi humor detection, 
            bilingual conversational agents, or speech-based AI systems, feel free to reach out.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold text-white">Email:</span>{" "}
                {/* TODO: put your real email here */}
                your-email@example.com
              </p>
              <p className="text-gray-300 text-sm mt-1">
                <span className="font-semibold text-white">Location / College:</span>{" "}
                Your College Name, City, India
              </p>
              <p className="text-gray-300 text-sm mt-1">
                <span className="font-semibold text-white">GitHub / Project Repo:</span>{" "}
                {/* TODO: add your GitHub link or remove this line */}
                github.com/your-username/marathi-humor-bot
              </p>
            </div>

            <button
              onClick={() => window.location.href = "mailto:your-email@example.com"}
              className="mt-3 md:mt-0 px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 
              hover:scale-105 hover:shadow-[0_0_25px_rgba(248,113,113,0.7)] transition-all text-sm font-semibold"
            >
              ✉️ Send us an Email
            </button>
          </div>
        </div>
      </section>

      {/* SPEECH DEMO MODAL */}
      {showSpeechDemo && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-40">
          <div className="bg-gray-900 p-8 rounded-3xl w-[450px] max-w-[90vw] shadow-2xl">
            <h2 className="text-2xl mb-3 font-semibold">🎤 Speech Demo</h2>
            <p className="text-gray-400 mb-4">
              Click the mic and speak a Marathi or Marathi–English joke or sentence.
            </p>

            <button
              onClick={startSpeechRecognition}
              className="w-full py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700"
            >
              🎙 Start Listening
            </button>

            {speechText && (
              <p className="text-gray-200 bg-gray-800 p-4 rounded-xl mt-4 text-sm">
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-40">
          <div className="bg-gray-900 p-8 rounded-3xl w-[450px] max-w-[90vw] shadow-2xl">
            <h2 className="text-2xl mb-3 font-semibold">⌨️ Text Demo</h2>

            <textarea
              value={typedText}
              onChange={(e) => setTypedText(e.target.value)}
              placeholder="Type or paste Marathi / Marathi–English text…"
              className="w-full h-28 p-3 rounded-xl bg-gray-800 text-gray-200 outline-none text-sm"
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
      <footer className="text-center py-4 text-gray-400 text-xs md:text-sm border-t border-white/5 mt-4">
        © {new Date().getFullYear()} Marathi–English Humor AI — All Rights Reserved
      </footer>
    </div>
  );
}
