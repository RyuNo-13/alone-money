"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface Answer {
  [questionId: string]: {
    [item: string]: number; // itemに対する回答
  };
}

interface AnswerContextType {
  answers: Answer;
  setAnswer: (
    questionId: string,
    item: string,
    response: number
  ) => void;
}

const AnswerContext = createContext<AnswerContextType | undefined>(undefined);

export const AnswerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Answer>({});

  const setAnswer = (questionId: string, item: string, response: number) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: {
        ...prevAnswers[questionId],
        [item]: response,
      },
    }));
  };

  return (
    <AnswerContext.Provider value={{ answers, setAnswer }}>
      {children}
    </AnswerContext.Provider>
  );
};

export const useAnswer = () => {
  const context = useContext(AnswerContext);
  if (context === undefined) {
    throw new Error("useAnswer must be used within an AnswerProvider");
  }
  return context;
};