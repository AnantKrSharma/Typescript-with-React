import './App.css';
import React from 'react'
import Button from './component/Button';
import IncrementButton from './component/IncrementButton';
import FormInput from './component/FormInput';

function App() {
  return (
    <div className='App'>
      <Button text={`How are you ?`} onClick={() => alert(`I'm fine!`)}/>
      <Button text={`My name is Anant`}/>
      <Button text={1}/>
      <Button text={true}/>

      <IncrementButton text='Click to Increment Value, and Change Book'/>

      <FormInput />
    </div>
  )
}

export default App;
