import React, { Component } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            userId: 0,
            first_name: '',
            last_name: '',
            email: '',
            department: '',
            position: '',
            barangay_id: 0,
            password: '',
            c_password: '',
            redirect: false,
            isLoggedIn: sessionStorage.getItem('isLoggedIn') ? sessionStorage.getItem('isLoggedIn') : false,
        }
    }

    componentDidMount = () => {

        const authToken = sessionStorage.getItem('authToken');

        axios.get('/view/user/' + this.props.match.params.id, {headers:{Authorization: authToken}}).then(
            response => {
                console.log(response.data.data);
                this.setState({
                    userId: response.data.data.id,
                    first_name: response.data.data.first_name,
                    last_name: response.data.data.last_name,
                    email: response.data.data.email,
                    department: response.data.data.department,
                    position: response.data.data.position,
                    barangay_id: response.data.data.barangay.id,
                })
            }
        ).catch( function (error) {
            console.log(error);
        })
    }

    handleChange(event) {
        this.setState({barangay_id: event.target.value});
    }

    render() {

        if (!this.state.isLoggedIn) {
            // redirect to home if signed up
            return <Redirect to={{ pathname: "/" }} />;
        } else if (this.state.redirect) {
            return <Redirect to={{ pathname: "/view/users" }} />;
        }

        return (
        <Formik
            initialValues={{ 
                first_name: this.state.first_name ? this.state.first_name : "", 
                last_name: this.state.last_name ? this.state.last_name : "", 
                email: this.state.email ? this.state.email : "",
                department: this.state.department ? this.state.department : "",
                position: this.state.position ? this.state.position : "",
                barangay_id: this.state.barangay_id ? this.state.barangay_id : "",
                password: "",
                c_password: ""
            }}
            enableReinitialize
            onSubmit={(values) => {
                const authToken = sessionStorage.getItem('authToken');
                
                values.barangay_id = parseInt(this.state.barangay_id);

                if (values.email === this.state.email) {
                    delete values.email;
                }
                if (values.password === "" && values.c_password === "") {
                    delete values.password;
                    delete values.c_password;
                }
                console.log(values);
                axios.put('/edit/user/' + this.state.userId, values, {headers:{Authorization: authToken}}).then(
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
            email: Yup.string()
                .email()
                .required("Required"),
            department: Yup.string()
                .required("Required"),
            position: Yup.string()
                .required("Required"),
            password: Yup.string()
                // .required("No password provided.")
                .min(8, "Password is too short - should be 8 characters minimum."),
            c_password: Yup.string().when("password", {
                    is: val => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                      [Yup.ref("password")],
                      "Both password need to be the same"
                    )
                })
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
                        <h3 align="center">Edit User</h3>
                        <label htmlFor="add-user">First Name</label>
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
                        <label htmlFor="add-user">Last Name</label>
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
                        <label htmlFor="add-user">Email</label>
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
                        <label htmlFor="add-user">Department</label>
                        <input
                            name="department"
                            type="text"
                            placeholder="Enter your department"
                            value={values.department}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.department && touched.department && "error"}
                        />
                        {errors.department && touched.department && (
                            <div className="input-feedback">{errors.department}</div>
                        )}<label htmlFor="add-user">Position</label>
                        <input
                            name="position"
                            type="text"
                            placeholder="Enter your department"
                            value={values.position}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.position && touched.position && "error"}
                        />
                        {errors.position && touched.position && (
                            <div className="input-feedback">{errors.department}</div>
                        )}
                        <label htmlFor="add-user">Barangay</label>
                        <select value={this.state.barangay_id} onChange={this.handleChange}>
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
                        <label htmlFor="add-user">Password</label>
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
                        <label htmlFor="add-user">Confirm Password</label>
                        <input
                            name="c_password"
                            type="password"
                            placeholder="Confirm your password"
                            value={values.c_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.c_password && touched.c_password && "error"}
                        />
                        {errors.c_password && touched.c_password && (
                            <div className="input-feedback">{errors.c_password}</div>
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