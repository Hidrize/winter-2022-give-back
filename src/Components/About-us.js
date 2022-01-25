import '../App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Display from './Display';


function Healthcare (){

    const Health= [{
    name: 'Healthcare Charities',
    us: 'write here',
    goal: 'write here',
    image: 'https://blogs.microsoft.com/wp-content/uploads/prod/2020/03/HIMSS-OMB-Blog_Updated.png', 
    
    }, 
    
    
    
    
    ]
    
        return(<Grid container spacing={2}>
        
            {Health.map((Health) =>{
                return <Grid item xs={4}> 
                    <Display name={Health.name} us={Health.us} goal={Health.goal} image={Health.image} />
    
                </Grid>
            })
        }
             </Grid>  
    );
    
    }  
    export default Healthcare;
