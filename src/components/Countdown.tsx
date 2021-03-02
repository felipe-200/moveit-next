import { useState, useEffect, useContext } from "react"
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css"

export default function Countdown() {

    const {
        minutes,
        seconds,
        isActive,
        hasFinish,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split("")

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
            {/* Botão que mostra que o ciclo encerrou */}
            {hasFinish ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo Encerrado
                </button>

            ) : (
                    <>
                        {/* Condições que mostra se o botão é INCIAAR CICLO ou ENCERRAR CICLO */}
                        {isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar Ciclo

                            </button>

                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    iniciar um ciclo

                                </button>
                            )
                        }
                    </>
                )}
        </div>
    )
}