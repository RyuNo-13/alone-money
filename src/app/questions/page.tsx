// src/app/start/page.tsx
"use client";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/questions/1"); // 質問1のページに遷移
  };

  return (
    <div>
      <h1>スタートページ</h1>
      <button onClick={handleStart}>質問を始める</button>
    </div>
  );
}
