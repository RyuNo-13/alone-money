"use client";

import React from "react";
import { useAnswer } from "../context/AnswerContext";
import { questions } from "@/data/question";

const ResultPage: React.FC = () => {
  const { answers } = useAnswer();

  const calculateTotal = () => {
    let total = 0;
    Object.values(answers).forEach((questionAnswers) => {
      Object.values(questionAnswers).forEach((value) => {
        total += value; // 各回答の値を合計
      });
    });
    return total;
  };

  const total = calculateTotal(); // 合計を計算

  return (
    <div>
      <h1>結果</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>
            質問 {question.id}: {question.title}
          </h2>
          <ul>
            {question.items.map((item, index) => (
              <li key={index}>
                {item}: {answers[question.id]?.[item] || "回答なし"}円
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h2>合計：{total}円</h2>
      </div>
    </div>
  );
};

export default ResultPage;