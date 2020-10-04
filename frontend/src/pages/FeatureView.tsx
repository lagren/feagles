import React, {useEffect, useState} from 'react';
import {Button, Typography} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";

type Feature = {
    id: number,
    title: string,
    slug: string,
    description: string,
}

interface FeatureProps {
    feature: Feature
}

// function FeatureView({feature}) {
const FeatureView = ({feature}: FeatureProps) => {
    const [dirty, setDirty] = useState(false)
    const [enabled, setEnabled] = useState(false)

    const enabledChanged = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setDirty(true)
        setEnabled(checked)
    }

    const save = () => {
        setDirty(false)

        console.log("test: ", {"foo": "bar"})
    }

    console.log("feature: ", feature)
    // const feature = props.feature
    return (<div>
        <Grid container spacing={0}>
            <Grid item>
                {/*<FormControlLabel control={<Switch />} label="" labelPlacement="start" />*/}
                <Switch onChange={enabledChanged} value={enabled}/>
            </Grid>
            <Grid item>
                <Typography variant="h6">{feature.title}</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" variant="contained" disabled={!dirty} onClick={save}>Save</Button>
            </Grid>

        </Grid>

        <Typography style={{fontFamily: "monospace"}}>{feature.slug}</Typography>
        <Typography paragraph>{feature.description}</Typography>

        <Targeting/>
        <hr/>

    </div>)
}

function Targeting() {
    const [working, setWorking] = useState<Boolean>(true)
    const [targeting, setTargeting] = useState({})

    const [type, setType] = useState('user_id')
    const [rollout, setRollout] = useState(10)

    // console.log("targeting:" ,targeting)


    useEffect(() => {
        fetch('/api/server/projects/:projectId/features/:featureId/env/:envId/targeting')
            .then(resp => resp.json())
            .then(data => {
                setTargeting(data)
                setRollout(data.flexible.percentage)
            })
            .then(() => setWorking(false))

    }, [])

    const sliderChange = (event: any, newValue: any) => {
        setRollout(newValue)
    }

    const typeChange = (event: any, newValue: any) => {
        setType(event.target.value)
    }

    if (working) {
        return <CircularProgress/>
    }

    return (
        <div>
            <Typography variant="h6">Targeting</Typography>

            <Paper>
                <Grid container justify={"space-between"}>
                    <Grid item xs={8}>
                        <Typography>Gradual roll out</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel control={<Checkbox color="primary"/>} label="Enabled"/>
                    </Grid>
                </Grid>

                <Typography>Base decision on </Typography>
                <Select value={type} onChange={typeChange}>
                    <MenuItem value="default">Default</MenuItem>
                    <MenuItem value="user_id">User ID</MenuItem>
                    <MenuItem value="session_id">Session ID</MenuItem>
                    <MenuItem value="random">Random</MenuItem>
                </Select>

                <Slider value={rollout} onChange={sliderChange} step={5}/>

                <RolloutStats rollout={rollout} type={type}/>
            </Paper>
        </div>
    )
}

interface RolloutStats {
    rollout: number,
    type: string
}

function RolloutStats({rollout, type}:RolloutStats) {
    if (rollout === 0) {
        return <Typography paragraph><strong>No</strong> users will have this feature
            enabled</Typography>
    } else if (rollout === 100) {
        return <Typography paragraph><strong>All</strong> users will have this feature
            enabled</Typography>
    } else {
        return <Typography paragraph><strong>{rollout}%</strong> of users based on {type}</Typography>
    }
}

interface LoaderProps {
    featureId: number
}

export default function Loader({featureId}: LoaderProps) {
    const [feature, setFeature] = useState<Feature | undefined>(undefined)
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        fetch('/api/server/projects/:id/features/')
            .then(resp => resp.json())
            .then(data => setFeature(data[0]))
            .then(() => setLoading(false))
            .catch(err => {
                console.log(err)
            })
    }, [featureId])

    if (loading || feature === undefined) {
        return <CircularProgress/>
    } else {
        return <FeatureView feature={feature}/>
    }

}
