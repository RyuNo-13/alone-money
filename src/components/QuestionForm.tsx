import { Question } from "@/data/question";
import { BsHouseFill, BsInfoCircle } from "react-icons/bs";
import { FaBolt, FaUtensils, FaWifi, FaShoppingBasket, FaWallet } from "react-icons/fa";
import { useState, useEffect } from "react";

type QuestionFormProps = {
  question: Question;
  answers: Record<string, Record<string, number>>;
  onAnswerChange: (item: string, value: string) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ question, answers, onAnswerChange }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [localValues, setLocalValues] = useState<Record<string, string>>({});

  const getIcon = (questionId: string) => {
    const icons = {
      "1": <BsHouseFill size={24} className="text-[#27acd9]" />,
      "2": <FaBolt size={24} className="text-[#27acd9]" />,
      "3": <FaWifi size={24} className="text-[#27acd9]" />,
      "4": <FaUtensils size={24} className="text-[#27acd9]" />,
      "5": <FaShoppingBasket size={24} className="text-[#27acd9]" />,
      "6": <FaWallet size={24} className="text-[#27acd9]" />,
    };
    return icons[questionId as keyof typeof icons] || null;
  };

  const handleInputChange = (item: string, value: string) => {
    const sanitizedValue = value.replace(/[^\d]/g, '');
    setLocalValues(prev => ({
      ...prev,
      [item]: sanitizedValue
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      Object.entries(localValues).forEach(([item, value]) => {
        onAnswerChange(item, value);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [localValues, onAnswerChange]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-14 h-14 rounded-xl bg-[#27acd9]/10 flex items-center justify-center">
          {getIcon(question.id)}
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">質問 {question.id}</p>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            {question.title}
          </h1>
        </div>
      </div>

      <div className="w-full space-y-6">
        {question.items.map((item, index) => (
          <div key={index} 
            className="flex items-center justify-between p-5 rounded-xl hover:bg-[#27acd9]/5 transition-all relative">
            <div className="flex items-center gap-2">
              <span className="text-xl text-gray-700 font-medium tracking-wide">
                {item}
              </span>
              <div 
                className="relative"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <BsInfoCircle className="text-[#27acd9] cursor-help" />
                {hoveredItem === item && (
                  <div className="absolute left-0 bottom-full mb-2 w-72 p-4 bg-white rounded-lg shadow-lg border border-gray-200 text-sm text-gray-600 z-10">
                    {question.descriptions?.[item]}
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input 
                type="number" 
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="10000" 
                value={localValues[item] || answers[question.id]?.[item] || ""} 
                onChange={(e) => handleInputChange(item, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    (e.target as HTMLInputElement).blur();
                  }
                }}
                className="w-40 p-3 text-xl font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27acd9] focus:border-transparent"
              />
              <span className="text-lg text-gray-600 font-medium">円</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default QuestionForm;