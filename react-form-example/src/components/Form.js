import React, {useState} from 'react'

export const Form = (props) => {
    const [error, setError] = useState(null);
    const questions = props.questions
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let formInputList = [{firstName}, {lastName}, {email}, {username}, {password}];

    const handleSubmit = (e) => {
        e.preventDefault();

        formInputList.forEach((question, index) => {
            if (question.value.length < 10) {
                setError("Fields must be filled with at least 10 characters.");
            } else {
                setError(null);
            }
        });


    };

    return (
        <form onSubmit={handleSubmit} className="">
            <div style={{ color: "red" }}>{error}</div>
            <label>First Name</label>
            <input placeholder="First Name" type="text" value={firstName} onChange={e => setFirstName(e.target.value)}></input>

            <label>Last Name</label>
            <input placeholder="Last Name" type="text" value={lastName} onChange={e => setLastName(e.target.value)}></input>

            <label>Email</label>
            <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            
            <label>Username</label>
            <input placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)}></input>

            <label>Password</label>
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>

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