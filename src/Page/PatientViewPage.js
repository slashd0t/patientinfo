import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatientViewComponent from '../Component/PatientViewComponent';
import AddButtonComponent from '../Component/AddButtonComponent';
import DiagnosticListComponent from '../Component/DiagnosticListComponent';
import * as PatientAction from '../Action/PatientAction';
import { bindActionCreators } from 'redux';

class PatientViewPage extends Component {
    componentDidMount() {
        const { fetchPatient, match } = this.props;
        fetchPatient(match.params._id);
    }

    render() {
        const { patient } = this.props;

        return (
            <div>
                <PatientViewComponent patient={patient} />
                <DiagnosticListComponent patientId={patient._id} diagnostics={patient.diagnostics} />
                <AddButtonComponent url={`/patients/${patient._id}/diagnostics/new`} />
            </div>
        );
    }
}

export default connect(
    state => ({
        patient: state.p.patient
    }),
    dispatch => ({ 
        fetchPatient: bindActionCreators(PatientAction.fetchPatient, dispatch)
    })
)(PatientViewPage);