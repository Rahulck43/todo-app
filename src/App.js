import React from 'react';
import './App.css';
import { useState } from 'react';



function App() {

  const [taskList, setTaskList] = useState([])
  const [task, setTask] = useState('')

  const removeTask=(id)=>{
    setTaskList(taskList.filter(task=>task.id!==id))
  }


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {new Date().toLocaleString('en-US', { weekday: 'long' })} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTaskList([...taskList, { text: task, status: false, id: Date.now() }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          taskList.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    setTaskList(taskList.filter(obj2 => {
                      if (obj.id === obj2.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>removeTask(obj.id)} className="fas fa-times"></i>
                </div>
              </div>
            )
          })}
          
          <h1>Completed Tasks</h1>
        {
          taskList.map((obj) => {
            if (obj.status) {
              return (
               <div className="completedTaskBox">
                  <p>{obj.text}</p>
                </div>
              )
            }
            return null
          })
        }

      </div>

    </div>
  );
}

export default App;