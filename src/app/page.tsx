"use client";
import React, { useState } from "react";
import StartButton from "../components/StartButton";
import { BsHouseFill, BsCheckCircleFill, BsInfoCircle } from "react-icons/bs";
import GuideModal from "@/components/GuideModal";

const Page = () => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#27acd9]/10 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BsHouseFill className="text-[#27acd9] text-5xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            1人暮らしシミュレーション
          </h1>
          <p className="text-gray-600 mb-8">
            初めての1人暮らしにかかる費用を簡単に計算できます
          </p>
          
          <button
            onClick={() => setShowGuide(true)}
            className="inline-flex items-center gap-2 px-6 py-3 text-[#27acd9] bg-white border-2 border-[#27acd9] rounded-lg hover:bg-[#27acd9]/5 transition-all"
          >
            <BsInfoCircle />
            使い方を見る
          </button>
        </div>

        <div className="space-y-4 mb-12">
          <Feature
            title="簡単入力"
            description="家賃、光熱費など、カテゴリーごとに分かりやすく入力できます"
          />
          <Feature
            title="詳細な説明付き"
            description="各項目に参考金額や注意点の説明があるので初めての方でも安心です"
          />
        </div>

        <StartButton />

        <GuideModal 
          isOpen={showGuide} 
          onClose={() => setShowGuide(false)} 
        />
      </div>
    </div>
  );
};

// Featureコンポーネントは機能の説明を表示するためのUIコンポーネントです
// 引数として title(機能名) と description(説明文) を受け取ります
// 
// コンポーネントの構成:
// - チェックマークアイコン (BsCheckCircleFill)
// - タイトルと説明文を表示するエリア
// - ホバー時に背景色が変化するアニメーション効果付き
const Feature = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#27acd9]/5 transition-all">
    <div className="mt-1">
      <BsCheckCircleFill className="text-[#27acd9] text-xl" />
    </div>
    <div>
      <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default Page;
