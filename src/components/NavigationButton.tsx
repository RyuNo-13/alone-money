type NavigationButtonProps = {
  currentQuestionId: number;
  maxQuestions: number;
  onNavigate: (nextId: number) => void;
  type: 'next' | 'previous';
};

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  currentQuestionId,
  maxQuestions,
  onNavigate,
  type
}) => {
  const handleClick = () => {
    const nextId = type === 'next' 
      ? currentQuestionId + 1 
      : currentQuestionId - 1;
    onNavigate(nextId);
  };

  if (type === 'next') {
    return currentQuestionId < maxQuestions ? (
      <button onClick={handleClick}>次の質問</button>
    ) : (
      <button onClick={() => onNavigate(-1)}>結果ページへ</button>
    );
  }

  return currentQuestionId === 1 ? (
    <button onClick={() => onNavigate(0)}>ホームに戻る</button>
  ) : (
    <button onClick={handleClick}>前の質問</button>
  );
}; 