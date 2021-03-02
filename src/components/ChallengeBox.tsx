import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import { CountdownContext } from "../contexts/CountdownContext"
import styles from "../styles/components/ChallengeBox.module.css"

export default function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallegeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe {activeChallenge.amount} </header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengefailedButton}
                            onClick={handleChallegeFailed}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.challengSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong> Finish a cicle to earn an challeng </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level UP" />
                Step level finishing challengs.
            </p>
                    </div>
                )
            }

        </div>
    )
}