import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import * as _ from 'lodash';
import Divider from 'material-ui/Divider';
import moment from 'moment';

const Component = ({ patient }) => {
    return (
        <div>
            <Typography type="headline" gutterBottom>
                {_.capitalize(patient.name.last)}, {_.capitalize(patient.name.first)}
            </Typography>
            <Typography type="subheading" gutterBottom>
                {_.capitalize(patient.gender)} | Birth Date: {moment(patient.birthDate).format('YYYY-MM-DD')}
            </Typography>
            <Typography type="caption" gutterBottom>
                P: {patient.contactNo || 'N/A'}
            </Typography>
            <Typography type="caption" gutterBottom>
                A: {patient.address || 'N/A'}
            </Typography>
        </div>
    );
}

Component.propTypes = {
    patient: PropTypes.object.isRequired
}

export default Component;