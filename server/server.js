const io = require('socket.io')(5000, {
  cors: {
    origin: ['http://localhost:3000']
  }
})

io.on('connection', socket => {
  socket.broadcast.emit('receive-message', { message: `${socket.id} entered the chat`, user: null })
  socket.on('send-message', (message) => {
    socket.broadcast.emit('receive-message', message)
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('receive-message', { message: `${socket.id} left the chat`, user: null })
  })
})