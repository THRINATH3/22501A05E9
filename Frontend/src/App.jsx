import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const {handleSubmit,register} = useForm();
  return (
    <>
      <div className="container bg-secondary" style={{minHeight:'50vh',borderRadius:'10px',alignContent:'center'}}>
        <h2 className='text-white'>Long URL's to Short URL's</h2>
        <form action="">
          <div className="">
          <label htmlFor="url" className='form-label text-white'>Enter the url:</label>
          <input type="url" className='form-control' name='url' id='url'/>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
