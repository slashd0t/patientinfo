import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';

const styleSheet = createStyleSheet(theme => ({
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
}));

class RadioButtonsGroup extends Component {
    state = {
        selectedValue: 'male',
    };

    handleChange = (event, value) => {
        this.setState({ selectedValue: value });
        this.props.onChange(event);
    };

    render() {
        const classes = this.props.classes;

        return (
            <FormControl required value={this.state.selectedValue}>
                <RadioGroup
                    aria-label="gender"
                    name="gender"
                    className={classes.group}
                    selectedValue={this.state.selectedValue}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
        );
    }
}

RadioButtonsGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(RadioButtonsGroup);