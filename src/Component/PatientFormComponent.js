import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import GenderComponent from './Form/GenderComponent';
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
        name: {
            last: '',
            first: ''
        },
        gender: 'male',
        birthDate: '',
        contactNo: '',
        address: ''
    };

    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        if (name.match(/\s*\.\s*/)) {
            const [first, last] = _.split(name, '.');
            const oldState = this.state[first];
            this.setState({
                [first]: {
                    ...oldState,
                    [last]: value
                }
            });
        } else {
            this.setState({
                [name]: value
            });
        }
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
                    required
                    label="Last Name" 
                    name="name.last" 
                    value={this.state.name.last}
                    className={classes.textField} 
                    onChange={this.handleInputChange}
                    margin="normal" />
                <TextField  
                    required
                    label="First Name" 
                    name="name.first" 
                    value={this.state.name.first}
                    className={classes.textField} 
                    onChange={this.handleInputChange}
                    margin="normal" />
                <GenderComponent name="gender" onChange={this.handleInputChange} />
                <TextField  
                    required
                    type="date"
                    helperText="Birth Date" 
                    name="birthDate" 
                    value={this.state.birthDate}
                    onChange={this.handleInputChange}
                    className={classes.textField} 
                    margin="normal" />
                <TextField  
                    label="Contact No." 
                    name="contactNo" 
                    value={this.state.contactNo}
                    onChange={this.handleInputChange}
                    className={classes.textField} 
                    margin="normal" />
                <TextField  
                    multiline
                    rows="2"
                    rowsMax="2"
                    label="Address" 
                    name="address" 
                    value={this.state.address}
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