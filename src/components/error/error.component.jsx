import './error.styles.css';

const Error = ({ error }) => {
  return (
    <div className='error-container'>
      <h2>{error.message}</h2>
    </div>
  );
};

export default Error;
