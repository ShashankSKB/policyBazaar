import Grid from '@mui/material/Grid';
import { Proposal2 } from './prop2body';
import { Prop2side } from './prop2side';
import { Top } from '../../plansPage/topComp';
function PropLayout2()
{


    return (
        <div>
            <Grid container spacing={2} >
            <Grid item md={3} >
            <div className="logo" style={{marginBottom:"45px"}}><img src="https://twowheeler.policybazaar.com/images/PB-logo.svg"></img></div>
                <Prop2side></Prop2side>
            </Grid>
            <Grid item md={9}>
                <Top ></Top>
                <Proposal2></Proposal2>
            </Grid>
            </Grid>
        </div>
    )
}

export {PropLayout2} 