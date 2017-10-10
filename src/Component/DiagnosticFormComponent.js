import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import * as _ from 'lodash';

const styleSheet = createStyleSheet(theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
}));

class FormComponent extends Component {
    state = {
        findings: '',
        treatment: ''
    };

    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }  

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const { classes } = this.props;

        return (
            <form onSubmit={this.submitHandler} className={classes.container}>
                <TextField  
                    multiline
                    rows="3"
                    label="Findings" 
                    name="findings" 
                    value={this.state.findings}
                    onChange={this.handleInputChange}
                    className={classes.textField} 
                    margin="normal" />
                <TextField  
                    multiline
                    rows="3"
                    label="Treatment" 
                    name="treatment" 
                    value={this.state.treatment}
                    onChange={this.handleInputChange}
                    className={classes.textField} 
                    margin="normal" />
                <Button type="submit" raised color="primary" className={classes.button}>Create</Button>
            </form>
        );
    }
}

FormComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default withStyles(styleSheet)(FormComponent);