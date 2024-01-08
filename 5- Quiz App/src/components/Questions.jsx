//eslint-disable-next-line
function Questions({ questions, dispatch, answer }) {
  const correctOption = answer !== null;
  return (
    <div className="mt-12">
      <p className="text-slate-200 text-xl justify-center flex">
        {questions.question}
      </p>
      <div className="flex flex-col items-center mt-8">
        {questions.options.map((item, index) => (
          <button
            disabled={correctOption}
            onClick={() => dispatch({ type: "correctAnswer", payload: index })}
            className={`bg-slate-600 text-slate-200 font-semibold w-80 h-12 rounded-full my-2 ${
              correctOption
                ? index === questions.correctOption
                  ? "bg-blue-600"
                  : "bg-red-500"
                : ""
            }`}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
