import React, { useState } from 'react'

const FormInput: React.FC = () => {
    const [val, setVal] = useState<string | undefined>('')
  
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setVal(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        console.log(e);
    }

    return (
        <div style={{border: '1px solid black', padding: '10px'}}>
            
            <form onSubmit={handleSubmit}>
                <input type="text" 
                       onChange={handleChange} 
                       placeholder='Enter the value'
                       value={val}
                />

                <br />
                <button type='submit'>Submit!</button>
            </form>

            <h3>{val? val : '-'}</h3>
        </div>
  )
}

export default FormInput
