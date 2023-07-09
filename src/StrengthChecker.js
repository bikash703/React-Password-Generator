import React from 'react';
import './App.css';

const StrengthChecker = ({password}) => {
    
const getPasswordStrength=()=>{
  const   passwordLength = password.length
    if(passwordLength < 5){
        return "Poor";
    }else if(passwordLength < 10){
        return "medium";
    }else if(passwordLength < 15){
        return "Strong";
    }else {
        return "Very Strong"
    }
}
const passwordStrength = getPasswordStrength()

if(!passwordStrength) return <React.Fragment/>
    return (
        <div className="strength">
            <span>Strength:</span>
            <span className='strengthSize'>{passwordStrength}</span>
        </div>
    )
}

export default StrengthChecker
