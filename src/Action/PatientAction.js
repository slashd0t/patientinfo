import * as PatientType from '../Type/PatientType';
import * as _ from 'lodash';

export const fetchPatients = () => (dispatch, getState, { Api }) =>
    dispatch({
        type: PatientType.FETCH_PATIENTS,
        payload: Api.PatientsApi.findAll()
    });

export const createPatient = data => (dispatch, getState, { Api }) => {
  console.log('createPatient:',data);
  return dispatch({
      type: PatientType.CREATE_PATIENT,
      payload: Api.PatientsApi.create(data)
  });
}

export const fetchPatient = id => (dispatch, getState, { Api }) =>
    dispatch({
        type: PatientType.FETCH_PATIENT,
        payload: Api.PatientsApi.findOneById(id)
    });

export const createDiagnostic = (patient, diagnosticData) => (dispatch, getState, { Api }) => {
    console.log('createDiagnostic 1:',patient);
    console.log('createDiagnostic 2:',getState().p);

    // const diagnostics1 = getState().p.diagnostics.unshift(diagnosticData);
    // console.log('createDiagnostic 2:',diagnostics1);

    const diagnostics = [patient]
    return dispatch({
        type: PatientType.CREATE_DIAGNOSTIC,
        payload: Api.PatientsApi.update(patient._id, { diagnostics })
    });
};
