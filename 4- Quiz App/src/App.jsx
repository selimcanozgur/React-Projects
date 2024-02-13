import { useReducer, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Loading from "./components/Loading";
import StartQuiz from "./components/StartQuiz";
import Error from "./components/Error";
import Questions from "./components/Questions";
import FinishQuiz from "./components/FinishQuiz";

const SECS_PER_QUESTİON = 30;

const initialState = {
  questions: [],
  status: "loading", // ready, active, error, finished
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  time: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceiving":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataList":
      return {
        ...state,
        status: "active",
        time: state.questions.length * SECS_PER_QUESTİON,
      };

    case "dataError":
      return {
        ...state,
        status: "error",
        questions: action.payload,
      };

    case "correctAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };

    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };

    case "tick":
      return {
        ...state,
        time: state.time - 1,
        status: state.time === 0 ? "finished" : state.status,
      };
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, time },
    dispatch,
  ] = useReducer(reducer, initialState);

  const quizSize = questions.length;
  const totalPoint = questions.reduce((acc, item) => acc + item.points, 0);

  useEffect(function () {
    axios
      .get(`http://localhost:3000/questions`)
      .then((res) => {
        dispatch({ type: "dataReceiving", payload: res.data });
      })
      .catch(() => {
        dispatch({ type: "dataError" });
      });
  }, []);
  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartQuiz quizSize={quizSize} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Questions
            time={time}
            questions={questions[index]}
            answer={answer}
            dispatch={dispatch}
            index={index}
            points={points}
            quizSize={quizSize}
            totalPoint={totalPoint}
          />
        )}
        {status === "finished" && (
          <FinishQuiz
            points={points}
            totalPoint={totalPoint}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
