import React, { useState, useRef } from 'react'
import * as Yup from "yup";
import useForm from "react-hook-form";

export const Form = (props) => {
    const { register, errors, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async data => {
        alert(JSON.stringify(data));
    };
    /*const [error, setError] = useState(null);
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


    };*/

    return (
        <form onSubmit={e => e.preventDefault()} className="">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" {...register("firstName", { required: true, maxLength: 30 })}/>
            {errors.firstName && errors.firstName.type === "required" && (<span style={{ color: "firebrick" }}><b>This is required</b></span>)}
            {errors.firstName && errors.firstName.type === "maxLength" && (<span style={{ color: "firebrick" }}><b>Max length exceeded</b></span>)}

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" {...register("lastName", { required: true, maxLength: 30 })}/>
            {errors.lastName && errors.lastName.type === "required" && (<span style={{ color: "firebrick" }}><b>This is required</b></span>)}
            {errors.lastName && errors.lastName.type === "maxLength" && (<span style={{ color: "firebrick" }}><b>Max length exceeded</b></span>)}

            <label htmlFor="username">Username</label>
            <input id="username" {...register("username", { required: true, maxLength: 30 })}/>
            {errors.username && errors.username.type === "required" && (<span style={{ color: "firebrick" }}><b>This is required</b></span>)}
            {errors.username && errors.username.type === "maxLength" && (<span style={{ color: "firebrick" }}><b>Max length exceeded</b></span>)}

            <label htmlFor="password">Password</label>
            <input id="password" {...register("password", { required: true, maxLength: 30 })}/>
            {errors.password && errors.password.type === "required" && (<span style={{ color: "firebrick" }}><b>This is required</b></span>)}
            {errors.password && errors.password.type === "maxLength" && (<span style={{ color: "firebrick" }}><b>Max length exceeded</b></span>)}

            {/*<input placeholder="First Name" type="text" value={firstName} onChange={e => setFirstName(e.target.value)}></input>

            <label>Last Name</label>
            <input placeholder="Last Name" type="text" value={lastName} onChange={e => setLastName(e.target.value)}></input>

            <label>Email</label>
            <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            
            <label>Username</label>
            <input placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)}></input>

            <label>Password</label>
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>*/}

            {/*{questions.map(question => {
                return (
                    <div key={question.name}>
                        <label>{question.name}</label>
                        <input placeholder={question.name} type={question.type}></input>
                    </div>
                )
            })}*/}
        <label>Password</label>
        <input
            name="password"
            type="password"
            ref={register({
            required: "You must specify a password",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
            })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label>Repeat password</label>
        <input
            name="password_repeat"
            type="password"
            ref={register({
            validate: value =>
                value === password.current || "The passwords do not match"
            })}
        />
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

            <input type="submit" onClick={handleSubmit(onSubmit)} />
        </form>
    )
}