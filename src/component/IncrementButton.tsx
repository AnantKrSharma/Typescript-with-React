import React, {useState} from 'react'

interface IncrementButtonProps{
    text: string;
    onClick?: () => void;
}

interface Book{
    name: string;
    price: number;
}

const IncrementButton: React.FC<IncrementButtonProps> = ({text}) => {
    const [value, setValue] = useState<number>(0)

    const [book, setBook] = useState<Book>({
        name: 'Anne Frank',
        price: 200
    })
    
    function handleClick(){
        setValue(value + 1)
        setBook({ name: "Gulliver's Travels", price: 100 })
    }

    return (
    <div style={{border: '1px solid black' , padding: '10px'}}>
        <h3>{value}</h3>

        <button onClick={handleClick}>
            {text}
        </button>
        
        <p>{`Book name - ${book.name}`}</p>
        <p>{`Book price - ${book.price}`}</p>

        <br />
    </div>
  )
}

export default IncrementButton
