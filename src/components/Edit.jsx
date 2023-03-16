import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

  const navigate = useNavigate()
  const params = useParams()

  const {id} = params
  console.log(id)

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [blood, setBlood] = useState("")

  const handleSubmit =async (e) => {
    e.preventDefault()
    await axios.put(`http://127.0.0.1:8000/patient/${id}/`,{
      first_name: fname,
      last_name: lname,
      blood: blood,
    })
    navigate("/")
  }

  useEffect(()=>async ()=>{
    const data =await axios.get(`http://127.0.0.1:8000/patient/${id}/`)
    console.log(data.data)
    setFname(data.data.first_name)
    setLname(data.data.last_name)
    setBlood(data.data.blood)
    // setData(data.data)
  },[])

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
      <p className='font-semibold text-3xl mb-8'>Add details</p>
        <div>
          <p>Enter first name:</p>
          <input required={true}  value={fname} onChange={e => setFname(e.target.value)} className="outline-none border border-gray-400"/>
        </div>

        <div className='my-3'>
          <p>Enter last name:</p>
          <input required={true}  value={lname} onChange={e => setLname(e.target.value)} className="outline-none border border-gray-400"/>
        </div>

        <div>
          <p>Enter blood group:</p>
          <input required={true}  value={blood} onChange={e => setBlood(e.target.value)} className="outline-none border border-gray-400"/>
        </div>

        <button type='submit' className='px-2 py-1 border border-gray-400 mt-8 rounded-md'>Submit</button>
    </form>
  )
}

export default Edit