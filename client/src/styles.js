import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

  root: {
    marginTop: 50,
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    background: 'rgb(245, 245, 245)',
    padding: 15
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
    height: 500
  },
  actions: {
    background: '#eee',
  },
  input: {
    flexGrow: 1,
    background: '#fafafa',
    padding: '5px 10px',
    borderRadius: 20
  },
  sendButton: {
    flexShrink: 1,
  },
  chip: {
    fontSize: 15
  },
  joinForm: {
    padding: 50,
  },
  textField: {
    display: 'block',
    margin: '30px 0'
  }
}))

export default useStyles