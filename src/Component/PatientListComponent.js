import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import { withRouter } from 'react-router-dom';
import PersonIcon from 'material-ui-icons/Person';

const styleSheet = createStyleSheet(theme => ({
}));

const Component = ({ patients, history }) => {
    return (
        <List>
            {patients.map(p => 
            <ListItem onTouchTap={() => history.push(`/patients/view/${p._id}`)} dense button key={p._id}>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={`${p.name.last}, ${p.name.first}`} />
            </ListItem>)}
        </List>
    );
}

Component.propTypes = {
    patients: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(withStyles(styleSheet)(Component));