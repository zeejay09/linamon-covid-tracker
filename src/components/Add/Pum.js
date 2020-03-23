import React, { Component } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router';
import './Add.css';

export default class Pum extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            barangay_id: '',
            current_brgy_id: localStorage.getItem('brgy_id') ? localStorage.getItem('brgy_id') : false,
            redirect: false,
            isLoggedIn: sessionStorage.getItem('isLoggedIn') ? sessionStorage.getItem('isLoggedIn') : false,
        }
    }

    handleChange(event) {
        this.setState({barangay_id: event.target.value});
    }


    render() {

        if (!this.state.isLoggedIn) {
            // redirect to home if signed up
            return <Redirect to={{ pathname: "/" }} />;
        } else if (this.state.redirect) {
            return <Redirect to={{ pathname: "/view/brgy/" + localStorage.getItem('brgy_id') }} />;
        }

        return (
        <Formik
            initialValues={{ 
                first_name: "", 
                last_name: "", 
                alias: "", 
                barangay_id: 0,
            }}
            onSubmit={(values) => {
                const authToken = sessionStorage.getItem('authToken');
                
                values.barangay_id = parseInt(this.state.barangay_id);
                console.log(values);
                axios.post('/add/pums', values, {headers:{Authorization: authToken}}).then(
                    res => {
                        if (res.status === 200) {
                            console.log(res.data);
                            this.setState({
                                redirect: true,
                            });
                        }
                    }
                ).catch( function (error) {
                    console.log(error);
                });
            }}

            validationSchema={Yup.object().shape({
            first_name: Yup.string()
                .required("Required"),
            last_name: Yup.string()
                .required("Required"),
            alias: Yup.string()
                .required("Required"),
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
                <div className="add-form">
                    <form onSubmit={handleSubmit} className="loginForm">
                        <h3 align="center">Add PUM Case</h3>
                        <label htmlFor="covid-case">First Name</label>
                        <input
                            name="first_name"
                            type="text"
                            placeholder="Enter First Name"
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.first_name && touched.first_name && "error"}
                        />
                        {errors.first_name && touched.first_name && (
                            <div className="input-feedback">{errors.first_name}</div>
                        )}
                        <label htmlFor="covid-case">Last Name</label>
                        <input
                            name="last_name"
                            type="text"
                            placeholder="Enter Last Name"
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.last_name && touched.last_name && "error"}
                        />
                        {errors.last_name && touched.last_name && (
                            <div className="input-feedback">{errors.last_name}</div>
                        )}
                        <label htmlFor="covid-case">Alias</label>
                        <input
                            name="alias"
                            type="text"
                            placeholder="ex. Linamon-COVID-[enter any number here]"
                            value={values.alias}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.alias && touched.alias && "error"}
                        />
                        {errors.alias && touched.alias && (
                            <div className="input-feedback">{errors.alias}</div>
                        )}
                        <label htmlFor="covid-case">Barangay</label>
                        <select value={this.state.current_brgy_id} onChange={this.handleChange}>
                            <option value="0">Select Barangay</option>
                            <option value="1">Busque</option>
                            <option value="2">Larapan</option>
                            <option value="3">Magoong</option>
                            <option value="4">Napo</option>
                            <option value="5">Poblacion</option>
                            <option value="6">Purakan</option>
                            <option value="7">Robocon</option>
                            <option value="8">Samburon</option>
                        </select>
                        {errors.barangay_id && touched.barangay_id && (
                            <div className="input-feedback">{errors.barangay_id}</div>
                        )}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                </div>
            );
            }}
        </Formik>
        )
    }
}
