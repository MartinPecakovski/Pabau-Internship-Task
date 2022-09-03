import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import CommentForm from '../comment-form/comment-form-component';
import LaunchDetailsItem from '../launch-details-item/launch-details-item.component';

const LaunchDetails = () => {
  const { launchId } = useParams();

  return (
    <Grid container spacing={2}>
      <LaunchDetailsItem launchId={launchId} />
      <CommentForm launchId={launchId}/>
    </Grid>
  );
};

export default LaunchDetails;
