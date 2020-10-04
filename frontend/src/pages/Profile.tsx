import React from 'react';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

interface ProfileProps {
    name: string,
    email: string
}


const Profile = ({name, email}: ProfileProps) => {
    const classes = useStyles();

    return (
        <div>
            <h1>My profile</h1>

            <Grid container>
                <Grid item xs={10}>
                    <Grid container>
                        <Grid item xs={1} md={2}>
                            <Typography>Name:</Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography>{name}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography>Email:</Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography>{email}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Avatar src="https://www.gravatar.com/avatar/ecd2e62252ed99dbc3642c072177733e?d=mp&s=300" variant="rounded" className={classes.large} />
                </Grid>
            </Grid>



        </div>
    )
};

export default Profile;
