import Box from '@mui/material/Box';

import Input from '@mui/material/Input';

import { useState ,useEffect} from 'react';
import { Inputselectbox } from '../util/selectbox';
import { NormalText } from '../util/normaltext';
import { Inputerror } from '../util/inputerror';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import "./proposol.css"
import { margin } from '@mui/system';
function Proposal1()
{


    return (
        <div>
            {/* <Inputselectbox></Inputselectbox>
            <NormalText></NormalText>
            <Inputerror></Inputerror> */}
             <Grid container spacing={2} className='gridparent-skb'>
             <Grid item xs={6} md={3}>
             <Inputselectbox width={210}></Inputselectbox>
             </Grid>
            <Grid item xs={6} md={9} className='component-pad-skb'>
            <NormalText></NormalText>
            </Grid>
            
            <Grid item xs={6} md={12} className='component-pad-skb'>
            <NormalText></NormalText>
            </Grid>
            <Grid item xs={6} md={12} className='component-pad-skb'>
            <NormalText></NormalText>
            </Grid>
            <Grid item xs={6} md={12} className='component-pad-skb'>
            <NormalText></NormalText>
            </Grid>

            
            <Grid item xs={6} md={6}>
             <Inputselectbox  width={450}></Inputselectbox>
             </Grid>
            <Grid item xs={6} md={6} className='component-pad-skb'>
            <NormalText></NormalText>
            </Grid>
           
            
            <Grid item xs={6} md={12} className='component-pad-skb'>
            <NormalText></NormalText>
            </Grid>
             </Grid>

        </div>
    )
}

export {Proposal1}