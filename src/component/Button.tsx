import React from "react";

interface ButtonProps{
  text: string | number | boolean;
  onClick?: () => void   // optional 
}

// By doing this, we are informing TypeScript that the Button component expects props that match the ButtonProps interface. This resolves the type incompatibility error.
const Button: React.FC<ButtonProps> = ({text, onClick = () => {}}) => {
  return <div>      
          <button onClick={onClick}>
             {`${text}`}
          </button>

          <br />
    </div>
}

export default Button
