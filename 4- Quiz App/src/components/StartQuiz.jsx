//eslint-disable-next-line
function StartQuiz({ quizSize, dispatch }) {
  return (
    <div className="text-center text-slate-200">
      <h2 className="text-3xl mt-6 font-semibold">
        Welcome to The React Quiz!
      </h2>
      <h4 className="text-2xl mt-6">
        {quizSize} questions to test your React mastery
      </h4>

      <button
        onClick={() => dispatch({ type: "dataList" })}
        className="mt-12 bg-blue-500 rounded-full px-6 py-4 uppercase font-semibold"
      >
        Start
      </button>
    </div>
  );
}

export default StartQuiz;
