import { useState, useEffect, useRef } from 'react'
import { validation } from '../utils/validation'

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  
  const inputRef = useRef('')
  
  useEffect(() => {
    inputRef.current.focus()
  }, [])

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
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col fixed justify-center items-center top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 max-w-96 max-h-[30rem] p-8 rounded-xl border shadow-lg">
        <h1 className="mb-8 text-2xl text-blue-500">
          SignUp
        </h1>      
        <input
          className="auth-input"
          ref={inputRef} 
          required 
          placeholder="First Name" 
          name='firstName' 
          value={formData.firstName} 
          onChange={handleFormData} 
        />
        <p className={error.firstName ? `auth-error` : 'hidden'}>{error.firstName}</p>
        <input 
          className="auth-input" 
          required
          placeholder="Last Name" 
          name='lastName' 
          value={formData.lastName} 
          onChange={handleFormData}
        />
        <p className={error.lastName ? `auth-error` : 'hidden'}>{error.lastName}</p>
        <input 
          className="auth-input"
          required 
          placeholder="Email" 
          name='email' 
          value={formData.email} 
          onChange={handleFormData}
        />
        <p className={error.email ? `auth-error` : 'hidden'}>{error.email}</p>
        <input 
          className="auth-input"
          required 
          type='password' 
          placeholder="Password" 
          value={formData.password} 
          name='password' 
          onChange={handleFormData}
        />
        <p className={error.password ? `auth-error` : 'hidden'}>{error.password}</p>
        <div className="flex mr-18 text-nowrap">
          <input 
            className='mr-2 focus:outline-blue-500'
            type="checkbox" 
            id="signup-agree" 
            required 
          />
          <label htmlFor='signup-agree'>
            I agree to the <span className="text-blue-500 cursor-pointer text-nowrap">terms and conditions</span>
          </label>
        </div>
        <button className="hover:bg-gray-300 hover:text-blue-500 p-2 my-2 rounded-lg bg-gray-200">Sign up</button>
        <div className="text-sm">
          <p>
            Already have an account? <span className="text-blue-500 cursor-pointer">Sign in</span>
          </p>
        </div>
      </div>  
    </form>
    </>    
  )
}

