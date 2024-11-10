import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function PreviousQuestionPage() {
  const router = useRouter();
  const params = useParams();
  const currentQuestionId = Number(params.id);

  const handlePrevious = () => {
    const previousQuestionId = currentQuestionId - 1;
    router.push(`/questions/${previousQuestionId}`);
  };

  return (
    <div>
      {/* if文はreturn内にかけないからif()が出力されてた */}
      {/* if({currentQuestionId >= 2 && currentQuestionId <= 7}) {
        <button onClick={handlePrevious}>前の質問</button>
      } */}
      {Number(currentQuestionId) >= 2 && Number(currentQuestionId) <= 7 ? (
        <button onClick={handlePrevious}>前の質問</button>
      ) : null}
    </div>
  );
}
