import Navbar from "../../components/Navbar.jsx";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#ede9fe] to-[#fce7f3]">

      {/* Decorative gradient blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-purple-300 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-orange-300 opacity-20 blur-3xl animate-pulse animation-delay-1500"></div>

      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-5xl bg-white/60 backdrop-blur-2xl rounded-3xl shadow-xl p-14 animate-fadeSlide">

          {/* TITLE */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Marathi–English <span className="text-indigo-600">Humor Chatbot</span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-xl text-gray-700 mb-3">
            Where Marathi wit meets machine intelligence 😄
          </p>

          {/* SHORT DESCRIPTION */}
          <p className="text-gray-600 max-w-2xl leading-relaxed mb-10">
            A code-mixed conversational AI that detects, interprets, and generates 
            humor with cultural nuance — blending NLP, deep learning, and speech 
            technologies into a seamless bilingual experience.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="/chat"
              className="px-8 py-3 rounded-full font-semibold shadow-md text-white text-base bg-gradient-to-r from-orange-500 to-pink-500 hover:shadow-xl hover:scale-[1.03] transition-all"
            >
              💬 Try Demo
            </Link>

            <a
              href="#overview"
              className="px-8 py-3 rounded-full font-semibold bg-white shadow hover:shadow-md hover:scale-[1.02] transition-all text-gray-800"
            >
              📘 Learn More
            </a>
          </div>
        </div>
      </main>

      {/* WAVE DIVIDER */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="fill-white/70"
          ></path>
        </svg>
      </div>

      {/* OVERVIEW GRID */}
      <section id="overview" className="px-10 py-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Project Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* ABOUT */}
          <div className="p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all animate-section">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              📘 About the Project
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The Marathi–English Humor Chatbot explores humor detection and generation 
              in bilingual code-mixed conversations. It integrates NLP, deep learning, 
              speech processing, and linguistic analysis to build a culturally aware 
              conversational AI.
            </p>
          </div>

          {/* PAPER */}
          <div className="p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all animate-section">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              📄 Paper & Research
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The research includes dataset creation, preprocessing, humor labeling, 
              language tagging, and model architectures such as BiLSTM, LSTM, and hybrid 
              networks. Contains evaluation metrics, results visualization, and inference 
              pipeline integration.
            </p>
          </div>

          {/* TEAM */}
          <div className="p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all animate-section">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              👥 Project Team
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <b>Sadhana M</b> — Frontend Developer, UI/UX, NLP & Integration  
              <br />
              <b>Jermi Altrina J</b> — Machine Learning, NLP Model Development  
            </p>
          </div>

          {/* CONTACT */}
          <div className="p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all animate-section">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              ✉️ Contact
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Email:{" "}
              <span className="font-medium">sadupriya2510@gmail.com</span>
              <br />
              GitHub:{" "}
              <a
                href="https://github.com/sadhana-2510/marathi-humor-ai-bot"
                target="_blank"
                className="text-indigo-600 underline font-medium"
              >
                github.com/sadhana-2510/marathi-humor-ai-bot
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="px-10 py-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          🔧 Technologies Used
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
          <span className="px-4 py-2 bg-white/70 backdrop-blur-lg rounded-full shadow">
            React.js
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-lg rounded-full shadow">
            TailwindCSS
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-lg rounded-full shadow">
            Flask / FastAPI
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-lg rounded-full shadow">
            PyTorch
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-lg rounded-full shadow">
            Whisper API
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-lg rounded-full shadow">
            gTTS
          </span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-600 text-sm">
        © {new Date().getFullYear()} Marathi–English Humor Chatbot — All Rights Reserved
      </footer>
    </div>
  );
}
