import '../App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Display from './Display';


function Healthcare() {

    const Health = [{
        name: 'Gates Foundation',
        goal: "Guided by the belief that every life has equal value, the Bill & Melinda Gates Foundation works to help all people lead healthy, productive lives. In developing countries, it focuses on improving people's health and giving them the chance to lift themselves out of hunger and extreme poverty.",
        image: 'http://b-i.forbesimg.com/randalllane/files/2014/01/327042a84b1339d57665500a5019de94.jpg',

    },

    {
        name: 'Red Cross',
        goal: "The Red Cross, born of a desire to bring assistance without discrimination to the wounded on the battlefield, endeavors—in its international and national capacity—to prevent and alleviate human suffering wherever it may be found. Its purpose is to protect life and health and to ensure respect for the human being.",
        image: 'https://www.redcross.org/content/dam/redcross/International-Services/Red-Crescent-Relieving-Human-Suffering-4.jpg.transform/1288/q82/feature/image.jpeg',

    },

    {
        name: 'Saint Jude',
        goal: "The mission of St. Jude Children's Research Hospital is to advance cures, and means of prevention, for pediatric catastrophic diseases through research and treatment. Consistent with the vision of our founder Danny Thomas, no child is denied treatment based on race, religion or a family's ability to pay.",
        image: 'https://httpsak-a.akamaihd.net/78527773001/78527773001_6095284371001_6091754651001-vs.jpg?pubId=78527773001&videoId=6091754651001',

    },




    ]

    return (<Grid container spacing={2}>

        {Health.map((Health) => {
            return <Grid item xs={4}>
                <Display name={Health.name} goal={Health.goal} image={Health.image} />

            </Grid>
        })
        }
    </Grid>
    );

}
export default Healthcare;
