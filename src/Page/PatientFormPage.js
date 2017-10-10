import React, { Component } from 'react';
import PatientFormComponent from '../Component/PatientFormComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PatientAction from '../Action/PatientAction';

class PatientFormPage extends Component {
    submitHandler = (values) => {
        console.log('PatientFormPage submitHandler:',values)
        this.props.createPatient(values);
    };

    render() {
        return (
            <PatientFormComponent onSubmit={this.submitHandler} />
        );
    }
}

export default connect(
    state => state,
    dispatch => ({
        createPatient: bindActionCreators(PatientAction.createPatient, dispatch)
    })
)(PatientFormPage);
