import React from 'react'
import './AddTask.css'

class AddTask extends React.Component {
  state = {
    value: '',
    checked: false,
    defaultDate: new Date().toISOString().slice(0, 10)
  }

  handleChange = (e) => {
    if (e.target.type === 'text') {
      this.setState({
        value: e.target.value
      })
    } else if (e.target.type === 'checkbox') {
      this.setState({
        checked: e.target.checked
      })
    } else if (e.target.type === 'date') {
      this.setState({
        defaultDate: e.target.value
      })
    }
  }

  handleClick = () => {
    const { value, defaultDate, checked } = this.state
    if (value.length <= 2) return alert('Za krótkie zadanie!')
    const add = this.props.addTasks(value, defaultDate, checked)
    if (add) {
      this.setState({
        value: '',
        checked: false

      })
    }
  }


  render() {
    const minDate = new Date().toISOString().slice(0, 10)
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <>
        <div className='form'>
          <label htmlFor="text">
            <input
              id='text'
              type="text"
              placeholder='Dodaj Zadanie...'
              name='text'
              value={this.state.value}
              onChange={this.handleChange} />
            <label htmlFor="checkbox">
              <input
                id='checkbox'
                type="checkbox"
                name='checkbox'
                checked={this.state.checked}
                onChange={this.handleChange} /> Priorytet
            </label>
          </label>



          <label htmlFor="date">
            Zrobić do <input
              id='date'
              type="date"
              name='date'
              min={minDate}
              max={maxDate}
              value={this.state.defaultDate}
              onChange={this.handleChange} />
          </label>
        </div>
        <button className='addTaskBtn' onClick={this.handleClick} >DODAJ</button>
      </>
    )
  }
}

export default AddTask;