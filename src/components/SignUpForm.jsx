import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod' 
import { signUpSchema } from '../lib/zodSchemes'
import FormInputText from './FormInputText'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

export default function SingUpForm() {
  const [open, setOpen] = useState(false)
  const {
    handleSubmit,
    control,
    reset
  } = useForm({
    resolver: zodResolver(signUpSchema)
  })
  
  const onSubmit = (data) => {
    setOpen(true)
    reset()
  }
  
  return(
    <Paper elevation={6} sx={{ maxHeight: '35rem', maxWidth: '20rem', padding: '1.5rem', marginLeft: '30rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography
        variant='h5'
        sx={{marginBottom: '2rem', color: "rgb(59 130 246)"}}
        >
        Sing Up
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText 
          type='text'
          name="firstName"
          control={control}
          label={'firstName'}
          placeholder={'First Name'}
          autoFocus
        />

        <FormInputText
          type='text'
          name="lastName"
          control={control}
          label={'lastName'}
          placeholder={'Last Name'}
        />

        <FormInputText 
          type='text'
          name="email"
          control={control}
          label={'email'}
          placeholder={'Email'}
        />

        <FormInputText 
          type='password'
          name="password"
          control={control}
          label={'password'}
          placeholder={'Password'}
        />

        <FormInputText 
          type='password'
          name="confirmPassword"
          control={control}
          label={'confirmPassword'}
          placeholder={'Type password again'}
        />

        <FormControlLabel
          sx={{"& .MuiTypography-root": {fontSize: '0.9rem'}}}
          label="I agree to the terms and conditions"
          control={<Checkbox size='small' required/>}
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
            You successfully signed up!
          </Alert>
      </Snackbar>
    </Paper>
  )
}
