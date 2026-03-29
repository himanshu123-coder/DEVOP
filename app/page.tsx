"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const message = "Happy Hanuman Jayanti 🙏";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i + 1));
      i++;
      if (i === message.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 via-red-100 to-yellow-100 p-6 overflow-hidden">
      
      <div className="max-w-2xl text-center space-y-6 animate-fadeIn">
        
        {/* Glow Title */}
        <h1 className="text-5xl font-bold text-red-700 animate-pulse drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
          🚩 Jai Bajrang Bali 🚩
        </h1>

        {/* Typing Effect */}
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-800 h-10">
          {text}
        </h2>

        {/* Floating Quote */}
        <p className="text-lg text-gray-800 leading-relaxed animate-float">
          On this sacred day, we celebrate the birth of strength, devotion, and courage.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed animate-float delay-200">
          May Lord Hanuman bless you with power, wisdom, and fearless determination.
        </p>

        {/* Gradient Animated Text */}
        <div className="text-xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text animate-gradient">
          "Bhoot Pishach Nikat Nahi Aave,
          Mahaveer Jab Naam Sunave"
        </div>

        <p className="text-lg text-gray-800 animate-float delay-300">
          May Bajrang Bali remove all obstacles and fill your life with positivity 🙏
        </p>

        <div className="mt-6 text-2xl font-semibold text-orange-900 animate-bounce">
          🔥 Sankat Mochan Hanuman ki Jai 🔥
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </main>
  );
}