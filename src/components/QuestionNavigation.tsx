import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { questions } from "@/data/question";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const QuestionNavigation = () => {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const currentIndex = questions.findIndex((q) => q.id === id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      router.push(`/questions/${questions[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      router.push(`/questions/${questions[currentIndex + 1].id}`);
    } else {
      router.push("/result");
    }
  };

  return (
    <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-gray-200">
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="flex items-center gap-3 px-8 py-4 text-lg font-medium bg-white border-2 border-[#27acd9] text-[#27acd9] rounded-xl hover:bg-[#27acd9] hover:text-white transition-all duration-300"
        >
          <FaArrowLeft />
          前へ
        </button>
      )}
      <button
        onClick={handleNext}
        className="flex items-center gap-3 px-8 py-4 text-lg font-medium bg-[#27acd9] text-white rounded-xl hover:bg-[#2391b8] transition-all duration-300"
      >
        {currentIndex === questions.length - 1 ? "結果を見る" : "次へ"}
        {currentIndex < questions.length - 1 && <FaArrowRight />}
      </button>
    </div>
  );
};