import Grid from '@mui/material/Grid';
import { Prop1side } from './prop1Side';
import { Proposal1 } from './proposal1';
function PropLayout1()
{


    return (
        <div>
            <Grid container spacing={2} >
            <Grid item xs={3} >
                <Prop1side></Prop1side>
            </Grid>
            <Grid item xs={9} >
                <Proposal1></Proposal1>
            </Grid>
            </Grid>
        </div>
    )
}

export {PropLayout1} 