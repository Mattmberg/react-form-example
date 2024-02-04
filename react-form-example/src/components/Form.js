import React, {useState} from 'react'

export const Form = (props) => {
    const questions = props.questions
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (questions.question.validationType === "text") {

        } else if (questions.question.validationType === "date") {
    
        } else if (questions.question.validationType === "number") {
    
        } else if (questions.question.validationType === "checkbox") {

        } else if (questions.question.validationType === "email") {
        
        } else {
    
        }
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <label>First Name</label>
            <input placeholder="First Name" type="text" value={firstName} onChange={e => setFirstName(e.target.value)}></input>

            <label>Last Name</label>
            <input placeholder="Last Name" type="text" value={lastName} onChange={e => setLastName(e.target.value)}></input>

            <label>Email</label>
            <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            
            {/*{questions.map(question => {
                return (
                    <div key={question.name}>
                        <label>{question.name}</label>
                        <input placeholder={question.name} type={question.type}></input>
                    </div>
                )
            })}*/}
            <button type="submit">Submit</button>
        </form>
    )
}