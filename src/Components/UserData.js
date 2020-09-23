import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            final_data: [],
        }
    }

    render() {
        // console.log(this.props.add.comments.stored_data)
        this.state.final_data = this.props.add.comments.stored_data
        let data = this.state.final_data
        // console.log(data);
        let show_user = data.reverse().map((e) => {
            return (
                <div class="card mb-1">
                    <div class="card-body">
                        <div>
                            <div className="row">
                                <div class="card-body">
                                    <h4 class="text-danger ">Details of {e.first_name}</h4>
                                    <p className="font-weight-bolder">Full name is {e.first_name} {e.last_name}</p>
                                    <p>Born in  {e.dob} and is earning {e.salary}</p>
                                    <p>Gender : {e.gender}</p>
                                </div>
                                <div className="col-md-6 col-sm-12 h-15 text-center">
                                    <img src="https://nocas2.aai.aero/nocas/assets/images/usermanual.svg" alt="user image" class="img-thumbnail" />    </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <h1 class="text-danger">Details of user published</h1>
                <div class="card">
                    <div class="card-body">
                        {show_user}
                    </div>
                </div>
                <Link to="/"><button class="btn btn-outline-success mt-5 mb-5">Back to previous page</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        add: state
    }
}
export default connect(mapStateToProps)(UserData) 
