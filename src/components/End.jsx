import { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import { GeneralKnowledgeQuestions } from '../helpers/Questions'
import "../styles/End.css"

const End = () => {
    const {score, setScore, setGamePage} = useContext(QuizContext)

    const restartQuiz = () => {
        setScore(0)
        setGamePage("menu")
    }

  return (
    <div className="end">
        <h1>Quiz is over!</h1>
        <h3>{score} / {GeneralKnowledgeQuestions.length}</h3>
        <button onClick={restartQuiz}>Main Menu</button>
    </div>
  )
}

export default End