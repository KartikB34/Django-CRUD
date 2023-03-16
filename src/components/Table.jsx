import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {BsPencil, BsTrash} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Table = () => {

  const [data, setData] = useState(null)

  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/patient/${id}/`)
    console.log("Patient deleted")

    const data =await axios.get('http://127.0.0.1:8000/patient/')
    console.log(data.data)
    setData(data.data)
  }

  useEffect(()=>async ()=>{
    const data =await axios.get('http://127.0.0.1:8000/patient/')
    console.log(data.data)
    setData(data.data)
  },[])

  return (data && 
    <div>
    <div className="overflow-auto rounded-lg shadow md:block">
      <p className='font-semibold text-3xl mb-8 w-full text-center'>List of people</p>
          <table className="w-full">
            <thead className="border-b-2 border-gray-200 bg-gray-50">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Sr no.
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  First name
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Last name
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Blood group
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>

            {data && data.map((item,i) => (
              <tbody key={item.patient_id} className="divide-y divide-gray-100 ">
                <tr className="justify-center bg-white">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {i + 1}
                  </td>
                  <td className="p-3 font-semibold text-gray-700 text-md whitespace-nowrap">
                    {item.first_name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.last_name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.blood}
                  </td>
                  <td className="flex items-center p-3 text-sm text-gray-700 mt-9 whitespace-nowrap">
                        <Link to={`/edit/${item.patient_id}`} className="mx-6 hover:cursor-pointer">
                            <BsPencil className="h-4 mt-1 text-blue-400" />
                        </Link>
                        <div onClick={()=>handleDelete(item.patient_id)} className="hover:cursor-pointer">
                            <BsTrash className="h-4 mt-1 text-red-600"/>
                        </div>
                  </td>
                </tr>
              </tbody>
            ))}
            
          </table>
        </div>

        <div className='flex items-center justify-center pt-12'>
          <Link to="/add" className='px-8 py-3 text-xl border border-gray-400 rounded-xl hover:bg-gray-400 hover:text-white'>
              Add
          </Link>
        </div>
    </div>
  )
}

export default Table