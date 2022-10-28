import React, {useState, useEffect} from "react";
import IncreDecrement from "./components/IncreDecrement";
import Timer from "./components/Timer";
import BeepSound from "./BeepSound.wav"


export default function App() {
  const [sessionLength, setSessionLength] = useState(25)
  const [time, setTime] = useState([sessionLength,0])
  const [breakLength, setBreakLength] = useState(5)
  const [active, setActive] = useState(false)
  const [breake, setBreake] = useState(false)

  useEffect(() => {
    setTime([sessionLength, 0])
  }, [sessionLength])
  
  let beep = document.getElementById('beep')

  function reset() {
    setBreakLength(5)
    setSessionLength(25)
    setTime([sessionLength, 0])
    setActive(false)
    setBreake(false)
    beep.pause()
    beep.currentTime = 0;
  }

  if (time[1] === 0 && time[0] === 0) {
         beep.play() }

  return (
    <>
      <p className="header">WORKOUT TIMER</p>
      <div className="wrapper">
        <div className="switchers_wrapper">
          <IncreDecrement name="Break Length" id="break" value={breakLength} set={setBreakLength} />
          <IncreDecrement name="Session Length" id="session" value={sessionLength} set={setSessionLength}/>
        </div>
        <Timer time={time} setTime={setTime} reset={reset} 
                breakLength={breakLength} sessionLength={sessionLength}
                active={active} setActive={setActive}
                breake={breake} setBreake={setBreake}/>
      <audio src={BeepSound} id="beep"></audio>
      </div>
   </>
  )
}



 