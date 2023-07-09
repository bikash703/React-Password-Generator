import { useState } from "react";

const usePasswordGenerator = () => {

    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const generatePass = (checkBoxData, length) => {
        let charset = "",
            generatePassword = ""

        const checkOptions = checkBoxData.filter((checkbox) => checkbox.state)

        if(checkOptions.length===0){
            setError("Please select atleast one option")
        setPassword('')
        return;
        }

        checkOptions.forEach((option) => {
            switch (option.title) {
                case "Include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;          
                case "Include Numbers":
                    charset += "0123456789";
                    break;
                case "Include Symbols":
                    charset += "!@#$%^&*()";
                    break;         
                default:
                    break;
            }
        });
        for (let i = 0; i <length; i++) {
           const charIndex = Math.floor(Math.random()* charset.length)
           generatePassword += charset[charIndex]
            
        }
        setPassword(generatePassword)
        setError('')
    }

    return {password, error, generatePass}

}

export default usePasswordGenerator;