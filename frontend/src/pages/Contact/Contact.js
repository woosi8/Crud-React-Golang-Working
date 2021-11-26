import { Button, Box, Typography } from '@mui/material';

const Contact = (props) => {
  const handleCreate = async () => {
    try {
      const result = await props.request('post', '/api/go/test/create_title', {
        content: 'asdf'
      });
      alert(result.result);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <Box>
      <Typography>This is Contact Page</Typography>
      <Button onClick={handleCreate} type="button">
        요청하기
      </Button>
    </Box>
  );
};

export default Contact;
