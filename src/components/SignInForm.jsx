import { useState, useRef, useEffect } from 'react'
import { validation } from '../utils/validation'

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  
  const [error, setError] = useState({
    email: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false)

  const [isSuccess, setIsSuccess] = useState(false)

  const inputRef = useRef('')

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleShowPassword = (e) => {
    setShowPassword(e.target.checked)
  } 

  const handleFormData = (e) => {
    setError(prev => ({...prev, [e.target.name]: validation(e.target)}))
    setFormData(prev => {
      return {
        ...prev, 
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!Object.values(error).every(item => item === '')) return 
    setIsSuccess(true)
  } 

  return (
    <>
    {isSuccess ? (
      <div className='flex fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 border justify-center items-center'>You successfully signed in!!!</div>
    ) : (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col fixed z-10 justify-center items-center top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 max-w-96 max-h-[26rem] p-8 rounded-xl border shadow-lg ">
        <h1 className="mb-8 text-2xl text-blue-500">Login</h1>      
        <input 
          className="auth-input"
          ref={inputRef} 
          placeholder="Email" 
          name='email' 
          value={formData.email} 
          onChange={handleFormData}
        />
        <p className={error.email ? `auth-error` : 'hidden'}>{error.email}</p>
        <input 
          type={showPassword ? 'text' : 'password'} 
          className="auth-input" 
          placeholder="Password" 
          name='password' 
          value={formData.password} 
          onChange={handleFormData}
        />
        <p className={error.password ? `auth-error` : 'hidden'}>{error.password}</p>
        <div className="flex mr-28 ">
          <input 
            className='mr-2'
            type="checkbox" 
            id="show-password" 
            onChange={handleShowPassword}
          />
          <label htmlFor='show-password'>Show Password</label>
        </div>
        <button className="hover:bg-gray-300 hover:text-blue-500 p-2 my-2 rounded-lg bg-gray-200">Sign in</button>
        <div className="text-sm">
          <p>Forgot <span className="text-blue-500 cursor-pointer">Username / Password</span></p>
          <p className="">Don't have an account? <span className="text-blue-500 cursor-pointer">Sign up</span></p>
        </div>
      </div>
    </form>
    )}
    </>
  )
}



