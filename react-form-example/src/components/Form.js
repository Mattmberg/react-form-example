import React, { useState, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm } from "react-hook-form";

export const Form = () => {
    const validationSchema = Yup.object.shape({
        firstName: Yup.string() 
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
        lastName: Yup.string()         
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
        username: Yup.string()         
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
        password:Yup.string()         
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
        confirmPassword: Yup.string()         
        .required('Username is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

      const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <label htmlFor="firstName">First Name</label>
            <input
            name="firstName"
            type="text"
            {...register(
            "firstName",   
            {
            required: "You must provide a first name.",
            minLength: {
                value: 8,
                message: "First Name must have at least 8 characters."
            }
            })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

            <label htmlFor="lastName">Last Name</label>
            <input
            name="lastName"
            type="text"
            {...register(
            "lastName",
            {
            required: "You must provide a last name.",
            minLength: {
                value: 8,
                message: "Last Name must have at least 8 characters."
            }
            })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

            <label htmlFor="username">Username</label>
            <input
            name="username"
            type="text"
            {...register(
            "username",
            {
            required: "You must specify a username.",
            minLength: {
                value: 8,
                message: "Username must have at least 8 characters."
            }
            })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <label>Password</label>
        <input
            name="password"
            type="password"
            {...register(
            "password",
            {
            required: "You must specify a password.",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters."
            }
            })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label>Repeat password</label>
        <input
            name="password_repeat"
            type="password"
            {...register(
            "password_repeat",
            {
            validate: value =>
                value === password || "The passwords do not match."
            })}
        />
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

            <input type="submit" onClick={handleSubmit(onSubmit)} />
        </form>
    )
}