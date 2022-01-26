import React, {useEffect, useState} from 'react';
import Watch from './container/Watch'
import Modal from './components/Modal/Modal';

const App = () => {
  const [data,setData] = useState([{"id":1,"title":"test","project":"test project"}])
  
  const removeItem = (id)=> {
      let newData = data.filter((d)=> d.id !== id)
      setData(newData)
  }

  const editItem = (id,editTitle,editProject) => {
      let unEditData = data.filter((d)=> d.id !== id)
      let editData = data.filter((d)=> d.id == id)
      setData(unEditData)
      const newItem = {
        id: editData.id,
        title: editTitle,
        project: editProject
      }
      setData((data) => {
        return [...data, newItem];
      });
  }

  const addItem = (title,project) => {
      const newItem = {
        id: data.length +1,
        title: title,
        project: project 
      }
      setData((data) => {
        return [...data, newItem];
      });
  }

  return (
      <>
        {data.map((d)=> {
            const {id,title,project} = d
            return (
                <div key={id}>
                    <Watch id={id} title={title} project={project} removeEvent={removeItem} editEvent={editItem}/>
                </div>
            )
        })}
        <Modal status="Add" addEvent={addItem} />
      </>
  );
};

export default App;
