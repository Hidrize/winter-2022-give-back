
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Article from '../Data/articlesdata';


function Home() {




  return (

    <Card>
      <CardMedia
        component="img"
        alt=""
        height="300"
        image="https://stanfordhealthcare.org/for-patients-visitors/locations-and-parking/_jcr_content/pv-detail-parsys/columns/parsyscenter/imagewithcaption/image.img.full.high.jpg/1574003649516.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Article />
        </Typography>
      </CardContent>

    </Card>
  )
}

export default Home;
