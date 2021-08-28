import React from 'react'
import {
  Chip
} from '@material-ui/core'

const Message = ({ message, own }) => {

  return (
    <Chip style={{ marginLeft: own ? 'auto' : 0, marginTop: 10, padding: '10px 5px' }} label={message} color={own ? 'primary' : 'default'} />
  )
}

export default Message
