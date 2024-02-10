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
        <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>First Name</label>
                <input
                name="firstName"
                type="text"
                {...register('firstName')}
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.firstName?.message}</div>
            </div>

            <div className="form-group">
                <label>First Name</label>
                <input
                name="lastName"
                type="text"
                {...register('lastName')}
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>

            <div className="form-group">
                <label>Username</label>
                <input
                name="username"
                type="text"
                {...register('username')}
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.username?.message}</div>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                name="email"
                type="text"
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                name="password"
                type="password"
                {...register('password')}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            
            <div className="form-group">
                <label>Confirm Password</label>
                <input
                name="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                className={`form-control ${
                    errors.confirmPassword ? 'is-invalid' : ''
                }`}
                />
                <div className="invalid-feedback">
                {errors.confirmPassword?.message}
                </div>
            </div>

            <div className="form-group form-check">
                <input
                name="acceptTerms"
                type="checkbox"
                {...register('acceptTerms')}
                className={`form-check-input ${
                    errors.acceptTerms ? 'is-invalid' : ''
                }`}
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                I have read and agree to the Terms
                </label>
                <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                Register
                </button>
                <button
                type="button"
                onClick={reset}
                className="btn btn-warning float-right"
                >
                Reset
                </button>
            </div>
            </form>
        </div>
    );
};