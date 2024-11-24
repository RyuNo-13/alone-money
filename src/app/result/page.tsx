"use client";
import React from "react";
import { useAnswer } from "../context/AnswerContext";
import { questions } from "@/data/question";
import { BsHouseFill } from "react-icons/bs";
import { FaBolt, FaUtensils, FaWifi, FaShoppingBasket, FaWallet, FaRedo } from "react-icons/fa";
import Link from "next/link";

const ResultPage: React.FC = () => {
  const { answers } = useAnswer();
  const mainColor = "rgb(39 171 217)"; // #27acd9

  // 既存の計算関数は変更なし
  const calculateCategoryTotal = (questionId: string) => {
    let total = 0;
    if (answers[questionId]) {
      Object.values(answers[questionId]).forEach((value) => {
        total += value;
      });
    }
    return total;
  };

  const total = Object.keys(answers).reduce(
    (acc, questionId) => acc + calculateCategoryTotal(questionId),
    0
  );

  const getIcon = (categoryId: string) => {
    const icons = {
      "1": <BsHouseFill size={28} />,
      "2": <FaBolt size={28} />,
      "3": <FaWifi size={28} />,
      "4": <FaUtensils size={28} />,
      "5": <FaShoppingBasket size={28} />,
      "6": <FaWallet size={28} />,
    };
    return icons[categoryId as keyof typeof icons] || null;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#27acd9]/10 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-2xl font-bold text-center text-[#27acd9] mb-8">
          1人暮らし費用見積もり結果
        </h1>
        
        <div className="space-y-6">
          {questions.map((question) => {
            const categoryTotal = calculateCategoryTotal(question.id);
            return (
              <div key={question.id} 
                className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#27acd9]/5 transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-xl bg-[#27acd9]/10 flex items-center justify-center text-[#27acd9]">
                    {getIcon(question.id)}
                  </div>
                  <span className="text-lg font-medium">{question.title}</span>
                </div>
                <span className="text-xl font-bold text-[#27acd9]">
                  {categoryTotal.toLocaleString()}円
                </span>
              </div>
            );
          })}

          <div className="mt-12 pt-6 border-t-2 border-[#27acd9]/20">
            <div className="flex justify-between items-center px-4">
              <span className="text-xl font-bold">合計</span>
              <span className="text-3xl font-bold text-[#27acd9]">
                {total.toLocaleString()}円
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-12">
            <Link href="/questions/1" className="block">
              <button className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-[#27acd9] rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#2391b8] hover:shadow-lg">
                <FaRedo className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
                修正する
              </button>
            </Link>

            <Link href="/" className="block">
              <button className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#27acd9] bg-white border-2 border-[#27acd9] rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#27acd9]/5 hover:shadow-lg">
                <BsHouseFill className="mr-2" />
                ホームに戻る
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;