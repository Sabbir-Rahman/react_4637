import './watch.css'
import React, {useState} from 'react';
import DisplayComponent from '../components/DisplayComponent'
import BtnComponent from '../components/BtnComponent';
import Modal from '../components/Modal/Modal';

function App(props) {
  const [time,setTime] = useState({ms:0, m:0, s:0, h:0})
  const [interv,setInterv] = useState()
  const [status, setStatus] = useState(0)

  //Not started = 0
  // started = 1
  // stopped = 2

  const remove = ()=> {
      props.removeEvent(props.id)
  }

  const editWatch = (title) => {
      props.editEvent(props.id,title)
  }

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1)
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({ms:0, m:0, s:0, h:0})
  }

  const resume = () => start()
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedS = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs=0;
    }
    updatedMs ++;

    return setTime({ms:updatedMs, m:updatedM, s:updatedS, h:updatedH})
  }
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className='stopwatch'>
            <h3>{props.title}</h3>
          <DisplayComponent time={time}/>
          <BtnComponent status={status} stop={stop} start={start} reset={reset} resume={resume}/>
          <button onClick={remove}>Remove</button>
          <Modal status="edit" editEvent={editWatch}/>
        </div>
      </div>
    </div>
  );
}

export default App;
