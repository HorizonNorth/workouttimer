import {useEffect } from "react";
import PlayPause from "../icons/PlayPause";
import Reset from "../icons/Reset";

export default function Timer({time, setTime, reset, breakLength, sessionLength, active, setActive, breake, setBreake}) {
  
  useEffect(() => {
    let timerID = setInterval(tick, 1000)
    return () => clearInterval(timerID)})
 
      function tick() {
        if (active) {
        let minutes = time[0]
        let seconds = time[1]
        if (seconds === 0) { // zero seconds case
          if (minutes === 0) { 
            if (minutes === 0 && breake === false) { //zero seconds zero minutes, break
              seconds = 0
              minutes = breakLength
              setTime(minutes, seconds)
              setBreake(true)
            } else { // zero seconds zero minutes, session
              seconds = 0
              minutes = sessionLength
              setTime(minutes, seconds)
              setBreake(false)
            }
          } else { // decrement a minute if seconds are zero
            seconds = 59
            minutes--
            setTime([minutes, seconds]) 
          }
        } else seconds -- // standart tick
        setTime([minutes, seconds]) 
      }
    }
    
    return (
    <>
      <div className="timer">
        <p id="timer-label">{breake ? 'BREAK' : 'SESSION'}</p>
        <p id="time-left">{time.map((value) => value < 10 ? '0' + value : value).join(':')}</p>
      </div>
      <div className="buttonsWrapper">
      <button id="start_stop" onClick={() => setActive(!active) }>
        <PlayPause/>
      </button>
      <button id="reset" onClick={() => reset()}>
        <Reset/>
      </button>
      </div>
    </>
  )
}
