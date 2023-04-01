import { useState } from "react";
import { QuizContext } from "./helpers/Contexts";
import Menu from "./components/Menu";
import GeneralKnowledgeQuiz from "./components/GeneralKnowledgeQuiz";
import GeographyQuiz from "./components/GeographyQuiz";
import FoodAndDrinkQuiz from "./components/FoodAndDrinkQuiz";
import End from "./components/End";
import "./App.css"

const App = () => {
   const [gamePage, setGamePage] = useState("menu");
   const [score, setScore] = useState(0);

   return (
      <div className="app">
         <h1 className="title">Quiz</h1>
         <QuizContext.Provider
            value={{ gamePage, setGamePage, score, setScore }}
         >
            {gamePage === "menu" && <Menu />}
            {gamePage === "generalKnowledgeQuiz" && <GeneralKnowledgeQuiz />}
            {gamePage === "geographyQuiz" && <GeographyQuiz />}
            {gamePage === "foodAndDrinkQuiz" && <FoodAndDrinkQuiz />}
            {gamePage === "end" && <End />}
         </QuizContext.Provider>
      </div>
   );
};

export default App;
