import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'

export default function FormInputText({ name, control, label, placeholder, type, ...props }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: {onChange, value },
        fieldState: { error },
      }) => (
        <TextField
          type={type}
          helperText={error ? error.message : null}
          size='small'
          error={!!error}
          onChange={onChange}
          value={value || ''}
          fullWidth 
          label={label}
          placeholder={placeholder}
          margin='normal'
          required
          {...props}
        />
      )}
    />
  )
}