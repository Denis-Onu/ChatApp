import { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import {
  Card,
  InputBase,
  Typography,
  IconButton,
  CardContent,
  CardActions,
  CardMedia,
  Box,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

import useStyles from './styles';
import Message from './components/Message'

function App() {
  const [socket, setSocket] = useState()
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')
  const classes = useStyles()
  const chatRef = useRef()

  useEffect(() => {
    const newSocket = io('http://localhost:5000')
    setSocket(newSocket)
    return () => newSocket.close()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const newMessage = {
      id: socket.id,
      message: value,
    }
    setMessages([...messages, newMessage])
    socket.emit('send-message', newMessage)
    setValue('')
  }

  useEffect(() => {
    if (socket) {
      socket.on('receive-message', message => {
        setMessages([...messages, message])
      })
      return () => socket.off('receive-message')
    }
  }, [socket, messages])

  useEffect(() => {
    chatRef.current.scrollTop = messages.length * 100
  }, [messages])

  return (
    <>
      <Card className={classes.root}>
        <Box boxShadow={1}>
          <CardMedia className={classes.media}>
            <Typography variant='h6'>Chat app</Typography>
          </CardMedia>
        </Box>
        <CardContent ref={chatRef} className={classes.content}>
          {messages.map((m, id) => (
            <Message key={id} own={m.id === socket.id} message={m.message} />
          ))}
        </CardContent>
        <form onSubmit={handleSubmit}>
          <CardActions className={classes.actions}>
            <InputBase value={value} onChange={e => setValue(e.target.value)} className={classes.input} placeholder='Send message...' />
            <IconButton type='submit' className={classes.sendButton}>
              <SendIcon />
            </IconButton>
          </CardActions>
        </form>
      </Card>
    </>
  );
}

export default App;