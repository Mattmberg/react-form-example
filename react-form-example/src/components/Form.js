import React, {useState} from 'react'

export const Form = (props) => {
    const [value, setValue] = useState('');
    const questions = props.questions

    const handleSubmit = (e) => {
        e.preventDefault();

        if (questions.question.validationType === "text") {

        } else if (questions.question.validationType === "date") {
    
        } else if (questions.question.validationType === "number") {
    
        } else if (questions.question.validationType === "checkbox") {

        } else if (questions.question.validationType === "email") {
        
        } else {
    
        }

        if (value) {
          setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="">
            {questions.map(question => {
                return (
                    <div key={question.name}>
                        <label>{question.name}</label>
                        <input placeholder={question.name} type={question.type}></input>
                    </div>
                )
            })}
            <button type="submit">Submit</button>
        </form>
    )
}