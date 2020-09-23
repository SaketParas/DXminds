import React, { Component } from 'react'
import Carousel from './Carousel';
import { connect } from 'react-redux';
import { note_action } from './../Redux/Action';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            age: '',
            salary: '',
            dob: '',
            gender: ''
        }
    }
    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    input_submit = (e) => {
        e.preventDefault()
        // console.log(this.state);
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            age: this.state.age,
            salary: this.state.salary,
            dob: this.state.dob,
            gender: this.state.gender,
        }
        // console.log(data);
        this.props.userData(data)
        this.reset()
        this.props.history.push('/UserData')
    }
    reset = () => {
        this.setState({
            first_name: '',
            last_name: '',
            age: '',
            salary: '',
            dob: '',
            gender: ''
        })
    }
    render() {
        return (
            <div>
                <Carousel />
                <div className="container">
                    <div class="container  mt-5">
                        <div className="row">
                            <form onSubmit={this.input_submit}>
                                <h2 className="mt-5 text-danger">User Details</h2>
                                <div class="row mt-5">
                                    <div class="col">
                                        First Name<input type="text" class="form-control" placeholder="First name" name="first_name" value={this.state.first_name} onChange={this.input_change} required />
                                    </div>
                                    <div class="col">
                                        Last Name<input type="text" class="form-control" placeholder="Last name" name="last_name" value={this.state.last_name} onChange={this.input_change} required />
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col">
                                        Age<input type="number" class="form-control" placeholder="Age" name="age" value={this.state.age} onChange={this.input_change} required />
                                    </div>
                                    <div class="col">
                                        Salary<input type="number" class="form-control" placeholder="Salary" name="salary" value={this.state.salary} onChange={this.input_change} required />
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col">
                                        Date Of Birth<input type="date" class="form-control" placeholder="DOB" name="dob" value={this.state.note} onChange={this.input_change} required />
                                    </div>
                                    <div class="col">
                                        Gender
                                        <select type="text" class="form-control" name="gender" value={this.state.gender} onChange={this.input_change} required>
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>

                                    </div>
                                </div>
                                <button type="submit" class="btn btn-outline-danger mt-4 float-left mb-5">Submit</button>
                            </form>
                            <div className="col-md-6 col-sm-12 h-15 text-center">
                                <img src="https://myclasscampus.com/assets/myclass_site_new/images/coaching/user-directory.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userData: (data) => dispatch(note_action(data))
    }
}
export default connect(null, mapDispatchToProps)(Home) 
