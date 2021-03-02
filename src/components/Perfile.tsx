import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

export default function Profile() {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/felipe-200.png" alt="Felipe Jorge" />
            <div>
                <strong>Felipe Jorge</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level: {level}
                </p>
            </div>
        </div>
    )
}