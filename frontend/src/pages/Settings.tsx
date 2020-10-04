import React from 'react';
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {Typography} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function() {

    return (
        <div>
            <h1>Settings</h1>

            <h3>General settings</h3>

            <Grid container>
                <Grid item xs={2}>
                    <Typography>URL</Typography>
                </Grid>
                <Grid item xs={10}><Link href='https://example.org/'>https://example.org/</Link></Grid>

                <Grid item xs={2}>
                    <Typography>Auth mode:</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography>Identity-Aware Proxy</Typography>
                </Grid>
            </Grid>

            <h3>Identity-Aware Proxy settings</h3>

            <Typography paragraph>
                Foobar tar bur
            </Typography>

            <h3>Slack integration</h3>

            <Typography paragraph>
                This is a test
            </Typography>

            <form>
                <Grid container>
                    <Grid item xs={5}>
                        <TextField required fullWidth label="Incoming Webhook URL" />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={1}>
                        <Switch />
                    </Grid>
                </Grid>
            </form>

            <h3>Email settings</h3>

            Provider: <Select value="smtp" label="Provider">
                <MenuItem value="smtp">SMTP</MenuItem>
                <MenuItem value="sendgrid">Sendgrid</MenuItem>
            </Select>

            <TextField required label="API key" />

        </div>
    )
}