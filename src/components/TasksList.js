import React from 'react'
import Task from './Task'

const TasksList = (props) => {

  const active = props.tasks.filter(task => task.active === true)

  const done = props.tasks.filter(task => task.active === false)

  if (active.length >= 2) {
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
  }

  if (done.length >= 2) {
    done.sort((a, b) => {

      a = a.finishDate
      b = b.text.finishDate

      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    })
  }

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)



  return (
    <>
      <hr />
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania!</p>}
      </div>

      <hr />

      <div className="done">
        <h3>Zadania zrobione <span className='spanColor'>({doneTasks.length})</span></h3>
        {doneTasks.length > 5 ? <span className='spanColor'>Wyświetlono 5 ostatnio wykonanych zadań.</span> : null}
        {doneTasks.length > 0 ? doneTasks.slice(0, 5) : <p>Nie masz wykonanych zdań!</p>}
      </div>
    </>
  )
}

export default TasksList
