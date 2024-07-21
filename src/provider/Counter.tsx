import React, {useContext, createContext, useState} from 'react'

interface CounterProviderProp{
    children: React.ReactNode
}

interface CounterContextValue{
    count: number;
    setCount: (num: number) => void
}


const CounterContext = createContext<CounterContextValue | null>(null);

export const CounterContextProvider: React.FC<CounterProviderProp> = (props) => {
    const [count, setCount] = useState<number>(1)

    return <CounterContext.Provider value={{ count, setCount }}>
        {props.children}
    </CounterContext.Provider>
}


export const useCounter = () => {
    return useContext(CounterContext);
}
