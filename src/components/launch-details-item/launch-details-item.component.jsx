import { Box, Divider, Grid, Typography } from '@mui/material';

import { GET_ROCKET_DETAILS } from '../../graphql/queries/rocket-details.query';
import { useQuery } from '@apollo/client';
import Loading from '../loading/loading.component';
import Error from '../error/error.component';

const LaunchDetailsItem = ({ launchId }) => {
  const { loading, error, data } = useQuery(GET_ROCKET_DETAILS);

  if (error) return <Error error={error} />;

  let currencyFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  let massFormatter = new Intl.NumberFormat('de-DE', {
    style: 'unit',
    unit: 'kilogram',
  });

  return (
    <>
      <Grid
        sm={4}
        md={8}
        sx={{
          p: 2,
          margin: 'auto',
          height: '100vh',
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          data.launchesPast.map((pastLaunch) => {
            if (pastLaunch.id === launchId) {
              return (
                <Box
                  key={pastLaunch.id}
                  sx={{
                    my: 4,
                    mx: 2,
                    width: '100%',
                  }}
                >
                  <Grid container>
                    <Grid item xs container direction='column' spacing={2}>
                      <Grid item xs>
                        <Typography variant='h3'>
                          Launch Rocket Details
                        </Typography>
                        <Typography variant='h6'>
                          Mission <strong>{pastLaunch.mission_name}</strong>
                        </Typography>
                        <Divider />
                        <Typography variant='h5' sx={{ marginTop: '50px' }}>
                          Rocket:{' '}
                          <strong>{pastLaunch.rocket.rocket_name}</strong>{' '}
                        </Typography>
                        <Typography variant='h5'>
                          Landing Vehicle:{' '}
                          <strong>
                            {
                              pastLaunch.rocket?.first_stage.cores[0]
                                .landing_vehicle
                            }
                          </strong>
                        </Typography>
                        <Typography variant='h5'>
                          Landing Type:{' '}
                          <strong>
                            {
                              pastLaunch.rocket?.first_stage.cores[0]
                                .landing_type
                            }
                          </strong>
                        </Typography>
                        <Typography variant='h5'>
                          Launch Cost{' '}
                          <strong>
                            {currencyFormatter.format(
                              pastLaunch.rocket.rocket.cost_per_launch
                            )}
                          </strong>
                        </Typography>
                        <Typography variant='h5'>
                          Rocket Mass:{' '}
                          <strong>
                            {massFormatter.format(
                              pastLaunch.rocket.rocket.mass?.kg
                            )}
                          </strong>
                        </Typography>
                        <Typography variant='h5' sx={{ marginTop: '20px' }}>
                          Info : <strong>{pastLaunch.details}</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              );
            } else {
              return null;
            }
          })
        )}
      </Grid>
    </>
  );
};

export default LaunchDetailsItem;
