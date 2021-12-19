import Grid from '@mui/material/Grid';
import { Prop1side } from './prop1Side';
import { Proposal1 } from './proposal1';
import { Top } from '../../plansPage/topComp';
function PropLayout1()
{


    return (
        <div>
            <Grid container spacing={2} >
            <Grid item md={3} >
            <div className="logo" style={{marginBottom:"45px"}}><img src="https://twowheeler.policybazaar.com/images/PB-logo.svg"></img></div>
                <Prop1side></Prop1side>
            </Grid>
            <Grid item md={9}>
                <Top ></Top>
                <Proposal1></Proposal1>
            </Grid>
            </Grid>
        </div>
    )
}

export {PropLayout1} 