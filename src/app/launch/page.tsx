"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LaunchPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-200 via-blue-100 to-amber-50 text-sky-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          Launch Your Community Pod
        </h1>
        <p className="text-lg mb-8 text-slate-600">
          Skyward Protocol empowers communities to pool resources and generate sustainable yield. Coming soon.
        </p>
      </motion.div>
    </div>
  );
}
