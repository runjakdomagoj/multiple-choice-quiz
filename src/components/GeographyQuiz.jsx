import { useContext, useState } from "react";
import { QuizContext } from "../helpers/Contexts";
import { GeographyQuestions } from "../helpers/Questions";
import "../styles/Quiz.css"

const GeographyQuiz = () => {
   const { score, setScore, setGamePage } = useContext(QuizContext);

   const [question, setQuestion] = useState(0);
   const [chosenOption, setChosenOption] = useState("");

   const nextQuestion = () => {
      if (GeographyQuestions[question].answer === chosenOption) {
         setScore(score + 1);
      }
      setQuestion(question + 1);
   };

   const finishQuiz = () => {
      if (GeographyQuestions[question].answer === chosenOption) {
         setScore(score + 1);
      }
      setGamePage("end");
   };

   return (
      <div className="quiz">
         <h1>Geography Quiz</h1>
         <h2>{GeographyQuestions[question].prompt}</h2>
         <div className="options">
            <button onClick={() => setChosenOption("A")}>
               {GeographyQuestions[question].optionA}
            </button>
            <button onClick={() => setChosenOption("B")}>
               {GeographyQuestions[question].optionB}
            </button>
            <button onClick={() => setChosenOption("C")}>
               {GeographyQuestions[question].optionC}
            </button>
         </div>

         {question === GeographyQuestions.length - 1 ? (
            <button onClick={finishQuiz}>Finish Quiz</button>
         ) : (
            <button onClick={nextQuestion}>Next Question</button>
         )}
      </div>
   );
};

export default GeographyQuiz;
