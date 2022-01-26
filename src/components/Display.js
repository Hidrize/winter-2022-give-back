import { cardActionAreaClasses } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import '../index.css'
function Display({name, us, goal, image}){

    return(<Card>
        <CardContent>
            <h1>
                {name}
            </h1>
        </CardContent>

    <CardMedia className='imagesize' component='img' image={image} alt='Photo error'/>
    <CardContent>
    <h2> Goals: {goal}</h2> 

    </CardContent>
    
</Card>  
    
    );

}
export default Display;   