import "./planpagelayout.css"
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Plan } from './plan';
import { makeStyles } from '@mui/styles';
import { Nav } from './plansBar';
import { Top } from './topComp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_plans } from '../../Redux/action';
import { useState } from 'react';
import { WheelerBox } from './wheelerDetails';
import { SideCard } from "./sidecard";

const axios = require('axios');

const useStyles = makeStyles({
    root: {
    //   backgroundColor: 'red',
      color: (props) => props.color,
      
     
    },
    title:{
        textAlign:'left',
        // marginLeft:"100px",
        fontFamily: 'Merriweather',
        color: "#253858",
        padding: "0px 35px",

    },
    exclusive:{
        color:"red",
        fontSize:"10px",
        textAlign:"center",
        justifyContent:"center",
        display: "flex"

    },
    sidebox:{
        backgroundColor:"#F2F7FF"
    }
  });

function PlanLayout()
{
    const classes = useStyles();

    const [loading,setLoading]=useState(false);

    const dispatch=useDispatch();
    
    const temp=useSelector(state=>state.addressdetail.data)
    
    useEffect(()=>{
        getData();
    },[]);

    const getData=async()=>{
        // const {data}=await axios.get('http://localhost:3004/plans')
        // console.log("success :",data)
        
        // dispatch(get_plans(data))

        if(temp)
        {
            setLoading(true)
        }
        
        

    }

    console.log("after dispatch",temp)

  

    return loading ? (
        <div>
           <Grid container spacing={2} >
                <Grid item xs={3} className={classes.sidebox}>
      
                    <div className="logo"><img src="https://twowheeler.policybazaar.com/images/PB-logo.svg"></img></div>
                    <WheelerBox></WheelerBox>
                    <SideCard></SideCard>
                </Grid>

                <Grid item xs={9} className={classes.root}>
                    <Top></Top>
                <Nav></Nav>

                <Typography className={classes.title} variant="h5">13 Third Party Plans For You</Typography>
                
                {temp?.map((e)=>(
                    <Plan imageSrc={e.companyIcon} plantype={e.type} price={`RS .${e.price}`} data={e}></Plan>
                ))}
                
                
                <Plan imageSrc="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif" plantype="Regular Third Party Only" price="RS.  725" ></Plan>
                <Plan imageSrc="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif" plantype="Regular Third Party Only" price="RS.  725" ></Plan>
                <Typography className={classes.exclusive} variant="h9">*Above mentioned quotes are exclusive of GST</Typography>
                </Grid>
           </Grid>
        </div>
    ) :(
        <div>
            loading...
        </div>
    )
}

export {PlanLayout}