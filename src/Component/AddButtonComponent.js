import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withRouter } from 'react-router-dom';

const styleSheet = createStyleSheet(theme => ({
    button: {
        margin: theme.spacing.unit,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'
    },
}));

const Component = ({ classes, history, url }) => {
    return (
        <Button onClick={() => history.push(url)} fab color="primary" aria-label="add" className={classes.button}>
            <AddIcon />
        </Button>
    );
};

Component.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
}

export default withRouter(withStyles(styleSheet)(Component));