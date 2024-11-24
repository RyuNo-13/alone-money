"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function StartButton() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/questions/1");
  };

  return (
    <button
      type="button"
      onClick={handleStart}
      className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-[#27acd9] rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#2391b8] hover:shadow-lg"
    >
      シミュレーションを始める
      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
}
