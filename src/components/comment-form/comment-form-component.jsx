import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';




const CommentForm = ({launchId}) => {

  const [CommentData, setCommentData] = useState([])
  const [OnlyFilteredComments, setOnlyFilteredComments] = useState([])
  const [Author, setAuthor] = useState('')
  const [Comment, setComment] = useState('')

 useEffect(() => {
  fetch(`https://abundant-befitting-pantry.glitch.me/comments/${launchId}`).then(res => res.json()).then(data => setCommentData(data))

 }, []);

useEffect(() => {
  setOnlyFilteredComments(CommentData?.commentList)

}, [CommentData])


const newComment =
    {
      "name": Author,
      "comment": Comment
    }

const handleSubmit = () => {

  if(Author === " " || Comment === " "){
    alert("Please enter the proper values")
  }else{
  CommentData.commentList.push(newComment)

  axios.put(`https://abundant-befitting-pantry.glitch.me/comments/${launchId}`, CommentData)
  }

}
  



  return (

    <Grid
      item
      sm={4}
      md={4}
      component={Paper}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'bottom',
      }}
      elevation={6}
    >
      <Box sx={{
          my: 4,
          mx: 4,
        }}>
           
          
          {
            OnlyFilteredComments?.map(c => (
              <Card variant="outlined" sx={
                {
                  px: 1,
                  py: 2,
                  my: 1,
                  display: "flex",
                  flexDirection: "column"
                }
              }>
                <Typography>{`Author: ${c.name}`}</Typography>
              <Typography>
              {`Comment: ${c.comment}`}
              </Typography>
              </Card>
            ))
          }

      
      </Box>
      <Box
        sx={{
          my: 8,
          mx: 4,
        }}
      >
        <Typography component='h1' variant='h5'>
          Add a comment
        </Typography>
        <Box
          component='form'
          noValidate
          sx={{ mt: 1 }}
          onSubmit={e=>{
            e.preventDefault()
              handleSubmit()
              setAuthor(" ")
              setComment(" ")}
          }
        >
          <TextField
            fullWidth
            required
            id='standard-multiline-flexible'
            label='Name'
            value={Author}
            onChange={e => {
              setAuthor(e?.target.value)
            }}
            variant='standard'
          />
          <TextField
            fullWidth
            required
            id='filled-textarea'
            label='Write a comment'
            maxRows={3}
            placeholder='Placeholder'
            multiline
            value={Comment}
            onChange={e => {
              setComment(e?.target.value)
            }}
            variant='standard'
          />
          <Button
            
            type='submit'
            variant='outlined'
            sx={{
              mt: 3,
              mb: 2,
              borderColor: '#000',
              color: '#000',
              ':hover': {
                bgcolor: '#000',
                color: '#fff',
                borderColor: '#000',
              },
            }}
          >
            Comment
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default CommentForm;
