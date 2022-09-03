import './home.styles.css';

import { GET_COMPANY_INFO } from '../../graphql/queries/company.query';
import { useQuery } from '@apollo/client';
import Loading from '../../components/loading/loading.component';
import Error from '../../components/error/error.component';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const { error, loading, data } = useQuery(GET_COMPANY_INFO);
 

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className='home-container'>
      <div className='company-container'>
        <h1 className='company-name'>{data.company.name}</h1>
        <p className='company-summary'>{data.company.summary}</p>
        <Button
          component={Link}
          to={`/past-launches`}
          variant='outlined'
          sx={{
            fontSize: '22px',
            borderColor: '#fff',
            color: '#fff',
            ':hover': {
              bgcolor: '#fff',
              color: '#000',
            },
            marginTop: '45px',
          }}
        >
          See Past Launches <span className='rocket-animation'>🚀</span>
        </Button>
      </div>
    </div>
  );
};

export default Home;
