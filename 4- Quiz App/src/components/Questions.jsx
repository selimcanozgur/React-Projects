import Timer from "./Timer";

//eslint-disable-next-line
function Questions({
  questions,
  dispatch,
  answer,
  index,
  quizSize,
  points,
  totalPoint,
  time,
}) {
  const hasAnswered = answer !== null;
  return (
    <div className="mt-12">
      <Timer time={time} dispatch={dispatch} />
      <div className="flex justify-center">
        <progress className="progStyle w-72" value={index} max={quizSize} />
      </div>
      <div className="progress flex justify-center gap-8 text-slate-200 mx-6 my-6">
        <p>
          Question <strong>{index + 1}</strong>/{quizSize}
        </p>
        <p>
          <strong>
            {points}/{totalPoint}
          </strong>
        </p>
      </div>
      <p className="text-slate-200 text-xl justify-center flex">
        {questions.question}
      </p>
      <div className="flex flex-col items-center mt-8">
        {questions.options.map((item, index) => (
          <button
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "correctAnswer", payload: index })}
            className={`text-slate-200 font-semibold w-[500px] h-12 rounded-full my-2 ${
              hasAnswered
                ? index === questions.correctOption
                  ? "bg-blue-500"
                  : "bg-red-500"
                : ""
            }`}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      {answer !== null && (
        <div className="flex justify-center">
          {index < quizSize - 1 ? (
            <button
              className="w-24 h-12 rounded-full mt-8 text-slate-200"
              onClick={() => dispatch({ type: "nextQuestion" })}
            >
              Next
            </button>
          ) : (
            <button
              className="w-24 h-12 rounded-full mt-8 text-slate-200"
              onClick={() => dispatch({ type: "finishQuiz" })}
            >
              Finish
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Questions;
