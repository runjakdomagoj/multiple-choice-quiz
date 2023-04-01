import { useContext, useState } from "react";
import { QuizContext } from "../helpers/Contexts";
import { FoodAndDrinkQuestions } from "../helpers/Questions";
import "../styles/Quiz.css";

const FoodAndDrinkQuiz = () => {
   const { score, setScore, setGamePage } = useContext(QuizContext);

   const [question, setQuestion] = useState(0);
   const [chosenOption, setChosenOption] = useState("");

   const nextQuestion = () => {
      if (FoodAndDrinkQuestions[question].answer === chosenOption) {
         setScore(score + 1);
      }
      setQuestion(question + 1);
   };

   const finishQuiz = () => {
      if (FoodAndDrinkQuestions[question].answer === chosenOption) {
         setScore(score + 1);
      }
      setGamePage("end");
   };

   return (
      <div className="quiz">
         <h1>Food And Drink Quiz</h1>
         <h2>{FoodAndDrinkQuestions[question].prompt}</h2>
         <div className="options">
            <button onClick={() => setChosenOption("A")}>
               {FoodAndDrinkQuestions[question].optionA}
            </button>
            <button onClick={() => setChosenOption("B")}>
               {FoodAndDrinkQuestions[question].optionB}
            </button>
            <button onClick={() => setChosenOption("C")}>
               {FoodAndDrinkQuestions[question].optionC}
            </button>
         </div>

         {question === FoodAndDrinkQuestions.length - 1 ? (
            <button onClick={finishQuiz}>Finish Quiz</button>
         ) : (
            <button onClick={nextQuestion}>Next Question</button>
         )}
      </div>
   );
};

export default FoodAndDrinkQuiz;
