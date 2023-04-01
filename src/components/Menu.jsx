import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import "../styles/Menu.css";

const Menu = () => {
   const { setGamePage } = useContext(QuizContext);

   return (
      <div className="menu">
         <h1>Choose a category: </h1>
         <div className="buttons">
            <button
               onClick={() => {
                  setGamePage("generalKnowledgeQuiz");
               }}
            >
               General Knowledge
            </button>
            <button
               onClick={() => {
                  setGamePage("geographyQuiz");
               }}
            >
               Geography
            </button>
            <button
               onClick={() => {
                  setGamePage("foodAndDrinkQuiz");
               }}
            >
               Food and Drink
            </button>
         </div>
      </div>
   );
};

export default Menu;
