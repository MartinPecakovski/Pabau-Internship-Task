import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LaunchItem = ({
  launchId,
  launchImage,
  missionName,
  launchSiteName,
  articleLink,
  launchDate,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/past-launches/${launchId}`);

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card onClick={handleNavigate} sx={{ cursor: 'pointer' }}>
        <CardMedia
          component='img'
          height='240'
          image={launchImage}
          alt={missionName}
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            {missionName}
          </Typography>
          <Typography variant='h6' color='text.secondary'>
            Site Name: {launchSiteName}
          </Typography>
          <Typography variant='h6' color='text.secondary'>
            Launched: {launchDate}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component='a'
            href={articleLink}
            target='_blank'
            variant='outlined'
            size='medium'
            sx={{
              borderColor: '#000',
              color: '#000',
              ':hover': {
                bgcolor: '#000',
                color: '#fff',
                borderColor: '#000',
              },
            }}
          >
            Read the Article
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LaunchItem;
