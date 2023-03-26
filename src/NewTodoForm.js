import './App.css';
import React, {useState} from 'react'


function NewTodoForm({func}) {
  const [info, setInfo] = useState("")

  const randomNum = () => {
    return Math.floor(Math.random() * 1000);
  }

  const Submition = e =>{
    e.preventDefault()
    func({info, id: randomNum()})
    setInfo("")
  }

  const InputsInfo = (e) =>{
    setInfo(e.target.value)
  }

  return (
    <div >
      <form onSubmit={Submition}>
        <label>Task:</label>
        <input 
        type='text' 
        name='type' 
        onChange={InputsInfo} 
        value={info}/>
        <input type='submit' />
      </form>
    </div>
  );
}

export default NewTodoForm;
