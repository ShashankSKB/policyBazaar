import Grid from '@mui/material/Grid';
import { Proposal3 } from './prop3body';
import { Prop3side } from './prop3side';
import { Top } from '../../plansPage/topComp';
function PropLayout3()
{


    return (
        <div>
            <Grid container spacing={2} >
            <Grid item md={3} >
            <div className="logo" style={{marginBottom:"45px"}}><img src="https://twowheeler.policybazaar.com/images/PB-logo.svg"></img></div>
                <Prop3side></Prop3side>
            </Grid>
            <Grid item md={9}>
                <Top ></Top>
                <Proposal3></Proposal3>
            </Grid>
            </Grid>
        </div>
    )
}

export {PropLayout3} 