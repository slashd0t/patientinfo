import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DiagnosticFormComponent from '../Component/DiagnosticFormComponent'
import * as PatientAction from '../Action/PatientAction';

class DiagnosticFormPage extends Component {
    componentDidMount() {
        const { fetchPatient, match } = this.props;
        fetchPatient(match.params._id);
    }

    submitHandler = values => {
        const { patient, createDiagnostic } = this.props;
        console.log('DiagnosticFormPage submitHandler values:',values)
        console.log('DiagnosticFormPage submitHandler patient:',patient)
        console.log('DiagnosticFormPage submitHandler patient:',patient.diagnostics)
        const tmp = patient.diagnostics.unshift(values);
        console.log('DiagnosticFormPage submitHandler tmp:',tmp)
        createDiagnostic(tmp);
        // createDiagnostic(values);
        // this.props.createDiagnostic(patient);
    }

    render() {
        return <DiagnosticFormComponent onSubmit={this.submitHandler} patientId={this.props.match.params._id} />;
    }
}

export default connect(
    state => ({ patient: state.p.patient }),
    dispatch => ({
        fetchPatient: bindActionCreators(PatientAction.fetchPatient, dispatch),
        createDiagnostic: bindActionCreators(PatientAction.createDiagnostic, dispatch)
    })
)(DiagnosticFormPage);
