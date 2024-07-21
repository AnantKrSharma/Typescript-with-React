import './App.css';
import React from 'react'
import Button from './component/Button';
import IncrementButton from './component/IncrementButton';
import FormInput from './component/FormInput';
import { CounterContextProvider } from './provider/Counter';
import { useCounter } from './provider/Counter';


function App() {

  return (
    <div className='App'>
      <Button text={`How are you ?`} onClick={() => alert(`I'm fine!`)}/>
      <Button text={`My name is Anant`}/>
      <Button text={1}/>
      <Button text={true}/>

      <IncrementButton text='Click to Increment Value, and Change Book'/>

      <FormInput />

      <CounterContextProvider>
          <CounterContextRender />
      </CounterContextProvider>

    </div>
  )
}

const CounterContextRender: React.FC = () => {
  const context = useCounter();
  
  return <div style={{border: '1px solid black'}}>
            
    <button onClick={(e) => {context?.setCount(context?.count + 1)}}>
        Increase Counter Context Value
    </button>

    <h1>{context?.count}</h1>

</div>
}

export default App;
