import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UserById = () => {
    let { id } = useParams();
    const navigate = useNavigate();
  return (
    <>
    <Link onClick={() => navigate(-1)} className='text-[20px] font-[700]'>--- back</Link> <br />
        <h1> UserName = { id }
    </h1>
    </>
  )
}

export default UserById