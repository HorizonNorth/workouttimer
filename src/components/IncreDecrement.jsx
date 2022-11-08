import ExpandLess from "../icons/ExpandLess" 
import ExpandMore from "../icons/ExpandMore" 

export default function IncreDecrement(props) {  
  const value = props.value

  return (
    <div id={`${props.id}-label`} className="switchersElement" >
      <p>{props.name}</p>
      <div className="switchers">
        <button onClick={() => value > 1 ? props.set(prev => prev - 1) : props.set(1)}
                id={`${props.id}-decrement`} className="switch-button">
                  <ExpandMore/>
              </button>
        <span id={`${props.id}-length`}>{value}</span>
        <button onClick={() => value < 60 ? props.set(prev => prev + 1): props.set(60)} 
                id={`${props.id}-increment`}
                className="switch-button">
                  <ExpandLess/>
                </button>
      </div>
    </div>
  )
}
