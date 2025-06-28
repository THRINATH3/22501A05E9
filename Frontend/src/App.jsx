import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const {handleSubmit,register} = useForm();
  function getURL(data){
     console.log(data);
  }
  return (
    <>
      <div className="container bg-secondary" style={{minHeight:'50vh',borderRadius:'10px',alignContent:'center',width:'500px',padding:'50px'}}>
        <h2 className='text-white'>Long URL's to Short URL's</h2>
        <form action="" onSubmit={handleSubmit(getURL)}>
          <div className="">
          <label htmlFor="urlw" className='form-label text-white'>Enter the url:</label>
          <input type="url" className='form-control' name='urlw' id='urlw'
          {...register('urlw')}/>
          </div>
          <div className="text-center mt-5">
              <button className="btn btn-warning" type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
