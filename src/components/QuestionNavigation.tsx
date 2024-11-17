import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { NavigationButton } from './NavigationButton';
import { questions } from '@/data/question';

export const QuestionNavigation: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const currentQuestionId = Number(params.id);
  const MAX_QUESTIONS = questions.length;

  const handleNavigate = (nextId: number) => {
    if (nextId === -1) {
      router.push('/result');
    } else if (nextId === 0) {
      router.push('/');
    } else {
      router.push(`/questions/${nextId}`);
    }
  };

  return (
    <div className="navigation-container">
      <NavigationButton
        currentQuestionId={currentQuestionId}
        maxQuestions={MAX_QUESTIONS}
        onNavigate={handleNavigate}
        type="previous"
      />
      <NavigationButton
        currentQuestionId={currentQuestionId}
        maxQuestions={MAX_QUESTIONS}
        onNavigate={handleNavigate}
        type="next"
      />
    </div>
  );
}; 