"use client";
import React from "react";
import { useParams } from "next/navigation";
import { questions } from "@/data/question";
import { useAnswer } from "@/app/context/AnswerContext";
import QuestionForm from "@/components/QuestionForm";
import { QuestionNavigation } from "@/components/QuestionNavigation";

const Page: React.FC = () => {
  const { id } = useParams() as { id: string };
  const { answers, setAnswer } = useAnswer();

  if (!id) return <div>読み込み中...</div>;

  const question = questions.find((qs) => qs.id === id);
  if (!question) return <div>質問が見つかりません。</div>;

  const handleChange = (item: string, value: string) => {
    const numberValue = Number(value);
    setAnswer(id, item, !isNaN(numberValue) ? numberValue : 0);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#27acd9]/10 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">
        <QuestionForm
          question={question}
          answers={answers}
          onAnswerChange={handleChange}
        />
        <QuestionNavigation />
      </div>
    </div>
  );
};

export default Page;