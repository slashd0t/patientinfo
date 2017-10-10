import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import { withRouter } from 'react-router-dom';
import PersonIcon from 'material-ui-icons/Person';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = createStyleSheet(theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
}));

const Component = ({ patientId, diagnostics, history, classes, match }) => {
    console.log(match);
    return (
        <List>
            {diagnostics.map((p, i) => 
                <ListItem onTouchTap={() => history.push(`/patients/${patientId}/diagnostics/edit/${p.createdAt}`)} dense button key={i}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="headline" component="h2">
                                {p.findings}
                            </Typography>
                            <Typography type="body1" className={classes.pos}>
                                Findings
                            </Typography>
                            <Typography component="p">
                                {p.treatment}
                            </Typography>
                            <Typography type="body1" className={classes.pos}>
                                Treatment
                            </Typography>
                        </CardContent>
                    </Card>
                </ListItem>)}
        </List>
    );
}

Component.propTypes = {
    diagnostics: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    patientId: PropTypes.string
}

export default withRouter(withStyles(styles)(Component));