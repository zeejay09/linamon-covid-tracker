import React, { Component } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router';
import './LoginForm.css';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false || sessionStorage.getItem('isLoggedIn'),
        }
    }


    render() {

        if (this.state.isLoggedIn) {
            // redirect to home if signed up
            return <Redirect to={{ pathname: "/" }} />;
        }

        return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
                axios.post('http://la-covid-api.jeexpoy.com/v1/login', values).then(
                    res => {
                        if (res.status === 200) {
                            sessionStorage.setItem('authToken', res.data.success.token);
                            sessionStorage.setItem('isLoggedIn', true);
                            console.log(res.data);
                            this.setState({
                                email: '',
                                password: '',
                                isLoggedIn: true
                            })
                        }
                    }
                );
            }}

            validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 characters minimum.")
                // .matches(/(?=.*[0-9])/, "Password must contain a number.")
            })}
        >
            {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                    )}
                    <label htmlFor="email">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                    />
                    {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                    )}
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </form>
            );
            }}
        </Formik>
        )
    }
}
