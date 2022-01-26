import React, { useState } from "react";
import "./modal.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');
  const [project, setProject] = useState("")

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addEvent(input,project)
    toggleModal()
    setInput("")
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {props.status}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h3>Enter title</h3>
            <input
              type='input'
              id='input'
              name='title'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <h3>Enter Project</h3>
            <input
              type='input'
              id='project'
              name='project'
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
            <div>
                <button onClick={handleSubmit}>Add Event</button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
            
          </div>
        </div>
      )}
      
    </>
  );
}