import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
function Article() {
    const articleData = [
        {
            title: "Bedbound Patients",
            picture: "https://cdn.flintrehab.com/uploads/2021/08/doctor-helping-bedridden-stroke-patient.jpg",
            tag: "At Give Back. Org we provide the best Quality care for our patients nursing assistance as possible",
        },
        {
            title: "Treating Patients",
            picture: "https://dam.northwell.edu/m/78b87fcc218f1673/Drupal-NEWS_Can-doctors-refuse-to-treat-a-patient.jpg",
            tag: "At Give Back. Org we provide the best treatment as possible  and free medication deliveries",
        }, {
            title: "Wheel Chair Bound Patients",
            picture: "https://media.gettyimages.com/photos/mature-doctor-explains-treatment-plan-to-wheelchair-bound-patient-picture-id1182706350?s=612x612",
            tag: "Here at Give Back. Org we provide transportation accessibility access to enter and exit the along professional and courteous transporters with excellent patient service",
        }
    ]
    return (<Grid container spacing={2}>

        {
            articleData.map((article) => {
                return (<Grid item xs={4}>
                    <Card>
                        <CardMedia className='imagesize'
                            component='img'
                            size='200'

                            image={article.picture}
                            alt='Photo error' />

                        <CardContent>
                            <h3>{article.title}</h3>
                            <h4 id='article-text'>"{article.tag}"</h4>
                        </CardContent>
                    </Card>
                </Grid>
                )
            })
        }
    </Grid>
    );
}
export default Article;