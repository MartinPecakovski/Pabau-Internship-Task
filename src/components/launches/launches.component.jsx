import { useQuery } from '@apollo/client';
import LaunchItem from '../../components/launch-item/launch-tem.component';
import { GET_PAST_LAUNCHES } from '../../graphql/queries/past-launches.query';
import Loading from '../../components/loading/loading.component';
import Error from '../../components/error/error.component';
import { Box, Container, Grid } from '@mui/material';

const Launches = () => {
  const { loading, error, data } = useQuery(GET_PAST_LAUNCHES);


  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const filteredLaunches = data?.launchesPast.filter(
    (launch) =>
      launch.links.article_link && launch.links.flickr_images.length > 0
  );

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const formatedDate = (estDate) => {
    const getDate = new Date(estDate);
    return getDate.toLocaleString('shq-AL', {
      timeZone: 'Europe/Tirane',
      dateStyle: 'short',
      timeStyle: 'short',
    });
  };

  return (
    <>
      <Container maxWidth='fluid'>
        <Box sx={{ flexGrow: 1 }} my={4} mx={{ lg:3, md:0,}}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {loading ? (
              <Loading />
            ) : (
              filteredLaunches.map((launch) => (
                <LaunchItem
                  key={launch.id}
                  launchId={launch.id}
                  launchImage={
                    launch.links.flickr_images[
                      getRandomInt(0, launch.links?.flickr_images.length)
                    ]
                  }
                  missionName={launch.mission_name}
                  launchSiteName={launch.launch_site.site_name}
                  articleLink={launch.links.article_link}
                  launchDate={formatedDate(launch.launch_date_local)}
                />
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Launches;
