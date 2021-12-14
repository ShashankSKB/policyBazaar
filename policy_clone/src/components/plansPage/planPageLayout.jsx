import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Plan } from './plan';
import { makeStyles } from '@mui/styles';
import { Nav } from './plansBar';
const useStyles = makeStyles({
    root: {
    //   backgroundColor: 'red',
      color: (props) => props.color,
      
      border:" 1px solid black"
    },
    title:{
        textAlign:'left',
        // marginLeft:"90px",
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
                <Grid item xs={4}>
                    <Typography >policy bazaar</Typography>
                </Grid>

                <Grid item xs={8} className={classes.root}>
                    <Nav></Nav>
                <Typography className={classes.title} variant="h5">13 Third Party Plans For You</Typography>
                <Plan imageSrc="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif" plantype="Regular Third Party Only" price="RS.  725" ></Plan>
                <Plan imageSrc="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif" plantype="Regular Third Party Only" price="RS.  725" ></Plan>
                </Grid>
           </Grid>
        </div>
    )
}

export {PlanLayout}