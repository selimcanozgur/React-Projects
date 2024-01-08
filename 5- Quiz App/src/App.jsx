import { useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Loading from "./components/Loading";
import StartQuiz from "./components/StartQuiz";
import Error from "./components/Error";
import Questions from "./components/Questions";

const initialState = {
  questions: [],
  status: "loading", // ready, active, error, finished
  index: 0,
  answer: null,
  points: 0,
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
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const quizSize = questions.length;

  useEffect(function () {
    axios
      .get("http://localhost:3000/questions")
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
            questions={questions[index]}
            answer={answer}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
