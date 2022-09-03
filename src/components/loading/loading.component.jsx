import './loading.styles.css';

const Loading = () => {
  return (
    <div className='loading-container'>
      <p className='loading-text'>Loading</p>
      <div className='loading-dots'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
