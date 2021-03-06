import React, { Component } from 'react';
import axios from 'axios';

import '../Styles/signup.css'


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.saveChange = this.saveChange.bind(this);
        this.register = this.register.bind(this)
    }


    saveChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    register(e) {
        e.preventDefault();
        const { firstName, lastName, email, password, yearOfBirth, idCard, driveLicense, car, location, km, gender, visible } = this.state
        if ((firstName.length !== 0) && (email.length !== 0) && (password.length !== 0)) {
            axios.post('http://localhost:5000/drivers/signup', { firstName, lastName, email, password, yearOfBirth, idCard, driveLicense, car, location, km, gender })
                .then(res => {
                    if (res.data === 'Done') {
                        this.props.onAccept(true)
                    }
                })
        }
        console.log(this.state)
    }

    
    render() {
        const { firstName, lastName, email, password, yearOfBirth, idCard, driveLicense, car, location, km, gender, visible } = this.state
        return (
            <div className="signin">
                <h1 className="registration" >Sign up</h1>
                <form action="" onSubmit={this.register}>
                    <input className="dezz" type="text" placeholder="First Name" name='firstName' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="text" placeholder="Last Name" name='lastName' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="email" placeholder="Email" name='email' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="text" placeholder="Password" name='password' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="text" placeholder="Repeat Password" name='repeatPassword' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="number" placeholder="Id Card" name='idCard' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="number" placeholder="Drive License" name='driveLicense' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="text" placeholder="Car" name='car' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="text" placeholder="Location" name='location' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="number" placeholder="Year Of Birth" name='yearOfBirth' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="number" placeholder="Km Price" name='km' onChange={this.saveChange} />&nbsp;
                        <input className="dezz" type="text" placeholder="Gender" name='gender' onChange={this.saveChange} />
                    <button type="submit" className="button">Sign Up</button>
                </form>
            </div>
        )
    }
}
export default SignUp;