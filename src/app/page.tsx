"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-300 via-blue-100 to-amber-100 overflow-hidden text-slate-800">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-16"
      >
        <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-sky-600 via-blue-500 to-amber-400 bg-clip-text text-transparent">
          ☁️ Skyward Protocol
        </h1>
        <p className="text-slate-600 text-lg font-medium">
          Building Communities Through Collective Prosperity
        </p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl mx-auto mt-16 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-10 text-center"
      >
        <h2 className="text-3xl font-semibold text-sky-900 mb-6">
          Post-Capitalist DeFi for Local Communities
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Imagine a world where communities can collectively generate sustainable income to meet their local needs. Skyward Protocol enables local pods to pool resources, generate yield through DeFi, and democratically allocate funds for the collective good.
        </p>
      </motion.section>

      {/* Features + Protocol + Footer same as before */}
    </div>
  );
}
