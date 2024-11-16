import { makeStyles } from '@mui/styles'
import DrawerComponent from './DrawerComponent'

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    background: '#f9f9f9',
    width: '100%',
    height: 'fit-content',
    marginTop: '3.5rem',
    paddingTop: '2rem'
  }
})
export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div className={classes.page} >
      <DrawerComponent />
      {children}
    </div>
  )
}