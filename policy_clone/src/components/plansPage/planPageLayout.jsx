import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Plan } from './plan';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
    //   backgroundColor: 'red',
      color: (props) => props.color,
      
      border:" 1px solid black"
    },
    title:{
        textAlign:'left',
        marginLeft:"40px",
        fontFamily: 'Merriweather',
        color: "#253858",

    }
  });

function PlanLayout()
{
    const classes = useStyles();

    return (
        <div>
           <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Typography >policy bazaar</Typography>
                </Grid>

                <Grid item xs={9} className={classes.root}>
                <Typography className={classes.title} variant="h5">13 Third Party Plans For You</Typography>
                <Plan imageSrc="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif" plantype="Regular Third Party Only" price="RS.  725" ></Plan>
               
                </Grid>
           </Grid>
        </div>
    )
}

export {PlanLayout}