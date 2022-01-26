import './watch.css'
import React, {useState} from 'react';
import DisplayComponent from '../components/DisplayComponent'
import BtnComponent from '../components/BtnComponent';
import { AiOutlineEdit } from 'react-icons/fa';

function App(props) {
  const [time,setTime] = useState({ms:0, m:0, s:0, h:0})
  const [interv,setInterv] = useState()
  const [title,setTitle] = useState(props.title)
  const [project,setProject] = useState(props.project)
  const [status, setStatus] = useState(0)
  const [isEdit,setIsEdit] = useState(false)

  //Not started = 0
  // started = 1
  // stopped = 2

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editEvent(props.id,title,project)
    setIsEdit(false)
  };

  const remove = ()=> {
      props.removeEvent(props.id)
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

  console.log(isEdit)

  if(!isEdit){
    return (
        <div className="main-section">
            <div className="clock-holder">
                <div className='stopwatch'>
                    <div className="watchText">
                        <h2>Title:{props.title}</h2>
                        <h4>Project:{props.project}</h4>
                    </div>
                <DisplayComponent time={time}/>
                <BtnComponent status={status} stop={stop} start={start} reset={reset} resume={resume}/>
                    <div className="watchBtn">
                        <button className='watchBtnRmv' onClick={remove}>Remove</button>
                        <button className='watchBtnEdt' onClick={()=> setIsEdit(true)}>Edit</button>        
                    </div>            
                </div>
            </div>
        </div>
    );
  } 
  if(isEdit){
      return(
          <article>
            <div className="main-section">
                <div className="clock-holder">
                    <div className='stopwatch'>
                        <form className='form' onSubmit={handleSubmit}>
                            <div className='form-control'>
                            <label htmlFor='title'>Title : </label>
                            <input
                            type='text'
                            id='title'
                            name='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            />
                    </div>
            <div className='form-control'>
                <label htmlFor='email'>Project : </label>
                <input
                type='project'
                id='project'
                name='project'
                value={project}
                onChange={(e) => setProject(e.target.value)}
                />
            </div>
            <button type='submit'>Edit Event</button>
                        </form>
                    </div>
                </div>
            </div>
        </article>
      )
  }
  
}

export default App;
