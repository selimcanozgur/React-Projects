function FinishQuiz({ points, totalPoint, highscore, dispatch }) {
  const percentage = (points / totalPoint) * 100;
  return (
    <div className="flex justify-center">
      <div className="text-slate-200 bg-blue-500 rounded-lg w-[550px] py-24 text-3xl text-center mt-16">
        <p>
          You scored <strong>{points}</strong> out of
          <label className="pl-4">
            {totalPoint} ({Math.ceil(percentage)}%)
            {percentage < 50 ? "😢" : "💖"}
          </label>
        </p>
        <p className="mt-4 text-yellow-400 font-semibold">
          {" "}
          High Score: {highscore}
        </p>
        <button
          className="mt-12 px-2 py-4 w-36 rounded-full"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default FinishQuiz;
