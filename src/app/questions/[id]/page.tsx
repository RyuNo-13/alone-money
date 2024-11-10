// import React from "react";

// const page = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = await params;
//   console.log({ id });
//   return <div>質問: {id}</div>
// };

// export default page;
"use client";
import React from 'react'
import { useParams } from 'next/navigation';
import QuestionPage from  '../../components/NextQuestionButton';
import PreviousQuestionPage from  '../../components/PreviousQuestionButton';

const page = () => {
  const {id} = useParams();
  console.log({id});
  return (
    <div>
       <h1>質問 {id}</h1>
       <p>ここに質問内容が表示されます</p>
      <PreviousQuestionPage/>
      <QuestionPage/>
    </div>
  )
} 

export default page

