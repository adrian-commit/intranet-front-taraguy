import React from "react";
import './tareas.css';

function MisActividades () {
    const [time, setTime] = React.useState(0)
    const [timerOn, setTimeOn] = React.useState(false)

    React.useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval (() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)

        }
        return () => clearInterval(interval)

    },[timerOn])

    return (
        <div className="tareas">
        <h1> Mis Actividades </h1>
        <p> Mis tareas arrancan en: </p>
        <div>
            <span>{("0" + Math.floor((time / 600000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
        <div>
            { !timerOn && time === 0 && (
                <button onClick={() => setTimeOn(true)}> Inicio Tarea </button>
            )}
            { timerOn && (
                <button onClick={() => setTimeOn(false)}> Pausa </button>
            )}
            { !timerOn && time !== 0 && (
                <button onClick={() => setTimeOn(true)}> Reinicio </button>
            )}
            { !timerOn && time > 0 && (
                <button onClick={() => setTime(0)}> Fin Tarea </button>
            )}  
        </div>
        </div>
        
    )
}

export default MisActividades;