import { Question } from "@/data/question";

type QuestionFormProps = {
  question: Question;
  answers: Record<string, Record<string, number>>;
  onAnswerChange: (item: string, value: string) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ question, answers, onAnswerChange }) => {
  return (
    <div>
      <h1>質問 {question.id}: {question.title}</h1>
      <ul>
        {question.items.map((item, index) => (
          <li key={index}>
            {item} 
            <input 
              type="number" 
              placeholder="10000" 
              value={answers[question.id]?.[item] || ""} 
              onChange={(e) => onAnswerChange(item, e.target.value)}
            /> 円
          </li>
        ))}
      </ul>
    </div>
  );
}; 

export default QuestionForm;