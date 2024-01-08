//eslint-disable-next-line
function Questions({ questions }) {
  return (
    <div className="flex justify-center item-center flex-col mt-12">
      <p className="text-slate-200 text-xl">{questions.question}</p>
      <div>
        {questions.options.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
