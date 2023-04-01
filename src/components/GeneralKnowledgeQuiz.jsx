import { useContext, useState } from "react";
import { QuizContext } from "../helpers/Contexts";
import { GeneralKnowledgeQuestions } from "../helpers/Questions";
import "../styles/Quiz.css"

const GeneralKnowledgeQuiz = () => {
   const { score, setScore, setGamePage } = useContext(QuizContext);

   const [question, setQuestion] = useState(0);
   const [chosenOption, setChosenOption] = useState("");

   const nextQuestion = () => {
      if (GeneralKnowledgeQuestions[question].answer === chosenOption) {
         setScore(score + 1);
      }
      setQuestion(question + 1);
   };

   const finishQuiz = () => {
      if (GeneralKnowledgeQuestions[question].answer === chosenOption) {
         setScore(score + 1);
      }
      setGamePage("end");
   };

   return (
      <div className="quiz">
         <h1>General Knowledge Quiz</h1>
         <h2>{GeneralKnowledgeQuestions[question].prompt}</h2>
         <div className="options">
            <button onClick={() => setChosenOption("A")}>
               {GeneralKnowledgeQuestions[question].optionA}
            </button>
            <button onClick={() => setChosenOption("B")}>
               {GeneralKnowledgeQuestions[question].optionB}
            </button>
            <button onClick={() => setChosenOption("C")}>
               {GeneralKnowledgeQuestions[question].optionC}
            </button>
            <button onClick={() => setChosenOption("D")}>
               {GeneralKnowledgeQuestions[question].optionD}
            </button>
         </div>

         {question === GeneralKnowledgeQuestions.length - 1 ? (
            <button onClick={finishQuiz}>Finish Quiz</button>
         ) : (
            <button onClick={nextQuestion}>Next Question</button>
         )}
      </div>
   );
};

export default GeneralKnowledgeQuiz;
