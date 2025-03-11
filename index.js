import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Сайт", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "YouTube", url: "#" }
];

export default function LinkTree() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-yellow-400 p-6 text-center">
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="w-32 h-32 mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h1 className="text-white text-3xl font-bold mb-4">Тижні Добрих Справ</h1>
      <p className="text-white text-lg mb-6">Хто, як не ми? Коли, як не зараз?</p>
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          className="block w-full max-w-xs mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Button className="w-full py-3 text-lg bg-white bg-opacity-30 text-white font-semibold shadow-lg rounded-2xl border-2 border-white hover:bg-opacity-50 hover:border-yellow-300 hover:text-yellow-300 transition-all">
            {link.name}
          </Button>
        </motion.a>
      ))}
    </div>
  );
}
