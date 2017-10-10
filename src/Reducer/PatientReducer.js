import { List, Record } from 'immutable';
import typeToReducer from 'type-to-reducer';
import * as PatientType from '../Type/PatientType';
import { PENDING, REJECTED, FULFILLED } from 'redux-promise-middleware';
import { map } from 'lodash';

const initialState = {
    patients: List([]),
    patient: {
        name: {
            last: 'Last',
            first: 'First'
        },
        birthDate: '',
        gender: '',
        contactNo: '',
        address: '',
        diagnostics: List([])
    },
    isPending: false,
    error: ''
};

export default typeToReducer({
    [PatientType.FETCH_PATIENTS]: {
        [PENDING]: () => ({
            ...initialState,
            isPending: true
        }),
        [REJECTED]: (state, action) => ({
            ...state,
            isPending: false,
            error: action.payload
        }),
        [FULFILLED]: (state, action) => ({
            ...state,
            isPending: false,
            patients: List(map(action.payload, p => ({ ...p, diagnostics: List(p.diagnostics)})))
        })
    },
    [PatientType.CREATE_PATIENT]: {
        [PENDING]: () => ({
            ...initialState,
            isPending: true
        }),
        [REJECTED]: (state, action) => ({
            ...state,
            isPending: false,
            error: action.payload
        }),
        [FULFILLED]: (state, action) => ({
            ...state,
            isPending: false,
            patients: state.patients.push(action.payload)
        })
    },
    [PatientType.FETCH_PATIENT]: {
        [PENDING]: () => ({
            ...initialState,
            isPending: true
        }),
        [REJECTED]: (state, action) => ({
            ...state,
            isPending: false,
            error: action.payload
        }),
        [FULFILLED]: (state, { payload }) => ({
            ...state,
            isPending: false,
            patient: { ...payload, diagnostics: List(payload.diagnostics) }
        })
    },
}, initialState);
