"use client";
import React from "react";
import { useParams } from "next/navigation";
import QuestionPage from "../../../components/NextQuestionButton";
import PreviousQuestionPage from "../../../components/PreviousQuestionButton";
import { questions, Question } from "@/data/question";
import { useAnswer } from "@/app/context/AnswerContext";

const page: React.FC = () => {
  const { id } = useParams() as { id: string };;
  const { answers, setAnswer } = useAnswer();
  // デバッグ用：id の値をコンソールに出力
  // console.log("Received id:", id);
  
  // id が存在しない場合の表示
  if (!id) {
    return <div>読み込み中...</div>;
  }

  // id に基づいて質問を検索 qs=questionの省略
  const question: Question | undefined = questions.find((qs) => qs.id === id);
  // console.log("qs Element:", question);

  // 質問が見つからない場合の表示。★質問が見つからない場合のページを作成する？→エラーページと同じにするか？？
  if (!question) {
    return <div>質問が見つかりません。</div>;
  }

  const handleChange = (item:string, value:string) => {
    const numberValue = Number(value);
    if(!isNaN(numberValue)) {
      setAnswer(id, item, numberValue)
    } else {
      setAnswer(id, item, 0);
    }
  }


  return (
    <div>
      <h1>
        質問 {question.id}: {question.title}
      </h1>
      <ul>
        {question.items.map((item, index) => (
          <li key={index}>{item} 
          <input type="number" placeholder="10000" value={answers[id]?.[item] || ""} onChange={(e) => handleChange(item, e.target.value)}/> 円</li>
        ))}
      </ul>
      <div>
      <PreviousQuestionPage />
      <QuestionPage />
      </div>
    </div>
  );
};

export default page;
