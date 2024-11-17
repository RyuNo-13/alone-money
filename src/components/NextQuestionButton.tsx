// "use client"

// // import { useState } from "react"

// // export default function HandleNextButton() {
// //     const [ count, setCount ] = useState(0);

// //     const nextQuestion = () => {
// //         setCount(count + 1);
// //     }

// //     return(
// //         <>
// //         <button onClick={nextQuestion}>質問NO:{count}</button>
// //         </>
// //     )
// // }

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();
  const currentQuestionId = Number(params.id);

  const handleNext = () => {
    const nextQuestionId = currentQuestionId + 1;
    router.push(`/questions/${nextQuestionId}`);
  };

  return (
    <div>
     
      {currentQuestionId < 5 ? (
        <button onClick={handleNext}>次の質問</button>
      ) : ( 
        <button onClick={() => router.push('/result')}>結果ページへ</button>
      )}
    </div>
  );
}
