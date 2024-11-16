import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod' 
import { signInSchema } from '../lib/zodSchemes'
import FormInputText from './FormInputText'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

export default function SingInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [open, setOpen] = useState(false)
  const {
    handleSubmit,
    control,
    reset
  } = useForm({
    resolver: zodResolver(signInSchema)
  })
  
  const onSubmit = (data) => {
    setOpen(true)
    reset()
  }

  return(
    <Paper elevation={6} sx={{ maxHeight: '25rem', maxWidth: '15rem', padding: '1.5rem', marginLeft: '30rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography
        variant='h5'
        sx={{marginBottom: '2rem', color: "rgb(59 130 246)"}}
        >
        Sing In
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText 
          type='text'
          name="email"
          control={control}
          label={'email'}
          placeholder={'Email'}
          autoFocus
        />

        <FormInputText
          type={showPassword ? 'text' : 'password'}
          name="password"
          control={control}
          label={'password'}
          placeholder={'Password'}
        />

        <FormControlLabel
          sx={{"& .MuiTypography-root": {fontSize: '0.9rem'}}}
          label="Show password"
          control={<Checkbox size='small' checked={showPassword} onChange={()=>{setShowPassword(!showPassword)}} />}
        />
        <Button type='submit' sx={{width: '100%'}}>Sign in</Button>
      </form>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => {setOpen(false)}}>
          <Alert
            onClose={() => {setOpen(false)}}
            severity="success"
            variant="outlined"
            sx={{ width: '100%' }}
          >
            You successfully signed in!
          </Alert>
      </Snackbar>
    </Paper>
  )
}
