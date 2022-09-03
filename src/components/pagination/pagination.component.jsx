import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MuiPagination = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={4} size='large' />
    </Stack>
  );
};

export default MuiPagination;
