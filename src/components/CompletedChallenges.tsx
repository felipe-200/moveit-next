import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/CompletedChallenges.module.css"

export default function CompletedChallenges() {

    const { ChallengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span> {ChallengesCompleted} </span>
        </div>

    )
}