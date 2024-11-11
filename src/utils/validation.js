export function validation(inputElement) {
  if(!inputElement.value.trim()) {
    return 'This field must not be empty.'
  }
  if(inputElement.name === 'email') {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(inputElement.value) ? '' : 'Invalid Email adress'
  }
  if(inputElement.name === 'password') {
    return inputElement.value.length < 8 ? "Your password must have at least 8 characters" : ''
  }
  return ''
}