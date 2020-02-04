import React from 'react'

const Task = (props) => {
  const { id, text, date, important, active, finishDate } = props.task


  if (active) {
    return (
      <div>
        <p>{important ? <strong className='important'>{text}</strong> : <strong>{text}</strong>}  do <span>{date} </span>
          <button onClick={() => props.change(id)}>ZROBIONE</button>
          <button onClick={() => props.delete(id)}>X</button></p>

      </div>
    )
  } else {
    const finish = new Date(finishDate).toLocaleDateString()
    return (
      <div>
        <p><strong>{text}</strong> <span>( zrobić do {date} ) </span>
          <br /><span>Potwierdzone wykonanie {finish}  </span>
          <button onClick={() => props.delete(id)}>X</button></p>
      </div>
    )
  }
}

export default Task