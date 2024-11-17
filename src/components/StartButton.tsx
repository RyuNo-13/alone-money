"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "../styles/StartPage.css";

export default function StartButton() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/questions/1"); // 質問1のページに遷移
  };

  return (
    <button type="button" onClick={handleStart} className="startButton">
      スタート
    </button>
  );
}
