import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid"
const MovieCard =({totalmovies})=>{
    return(
        <>
        <Grid container spacing={2} p={2}>
            
             {totalmovies.map((item ,index)=>(
              <Grid item xs={12} md={6} lg ={4} key={index} className='m-card'>
                   <Card sx={{ maxWidth: 345}} className='parent-card'>
                   <CardMedia
                     sx={{ height: 140 }}
                     image={item.Poster}
                   />
                   <CardContent >
                     <Typography gutterBottom variant="h5" component="div">
                       {item.Title}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      {item.Type}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                      {item.Year}
                     </Typography>
                   </CardContent>
                 </Card>
                 </Grid>
                ))}
              
                </Grid>
        </> 
    )
}
export default MovieCard
