import React, { useState } from 'react';
import Image from 'next/image';
import { BsX, BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuideModal = ({ isOpen, onClose }: GuideModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  if (!isOpen) return null;

  const steps = [
    {
      title: "Step 1: まずは費用を入力してみましょう",
      points: [
        "① 家賃や光熱費など、項目ごとに予想される費用を入力できます",
        "② 金額の目安が分からない場合は「？」マークをクリック！参考金額を確認できます",
        "③ 入力が終わったら「次へ」ボタンで進みましょう"
      ],
      image: "/images/input-preview.png"
    },
    {
      title: "Step 2: 1人暮らしの費用を確認しましょう",
      points: [
        "① 毎月必要な費用の合計額をチェック！",
        "② 家賃や光熱費など、項目別の内訳も分かりやすく表示されます",
        "③ 金額を見直したい場合は「修正する」ボタンで簡単に戻れます"
      ],
      image: "/images/result-preview.png"
    }
  ];

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">シミュレーションの使い方</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <BsX size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#27acd9]">{currentStepData.title}</h3>
              <ul className="text-gray-600 space-y-2">
                {currentStepData.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[16/9] w-full">
              <Image
                src={currentStepData.image}
                alt={`${currentStepData.title}のプレビュー`}
                fill
                className="object-contain rounded-xl border border-gray-200"
                priority
              />
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => setCurrentStep(1)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentStep === 1 
                    ? 'bg-[#27acd9] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Step 1
              </button>
              <button
                onClick={() => setCurrentStep(2)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentStep === 2 
                    ? 'bg-[#27acd9] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Step 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideModal; 