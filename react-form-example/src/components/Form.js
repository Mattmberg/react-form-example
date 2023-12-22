import React, {useState} from 'react'

export const Form = (props) => {
    const [value, setValue] = useState('');
    const questions = props.questions

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <input placeholder={question.name}></input>
                    </div>
                )
            })}
            <button type="submit">Submit</button>
        </form>
    )
}