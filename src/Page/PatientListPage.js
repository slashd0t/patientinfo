import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatientListComponent from '../Component/PatientListComponent';
import AddButtonComponent from '../Component/AddButtonComponent';
import * as PatientAction from '../Action/PatientAction';
import { bindActionCreators } from 'redux';

class PatientListPage extends Component {
    componentDidMount() {
        this.props.fetchPatients();
    }

    render() {
        return (
            <div>
                <PatientListComponent patients={this.props.patients} />
                <AddButtonComponent url='/patients/new' />
            </div>
        );
    }
}

export default connect(
    state => ({
        patients: state.p.patients
    }),
    dispatch => ({ 
        fetchPatients: bindActionCreators(PatientAction.fetchPatients, dispatch)
    })
)(PatientListPage);