import React from 'react'
import { Link } from 'react-router-dom'

let data = [
    {
        id : 1,
        name : "bilol"
    },
    {
        id : 2,
        name : "ahmon"
    }
]

const Contact = () => {
  return (
    <>
    <h1>This page is contact page</h1>
    {data.map((elem) => {
        return (
            <p key={elem.id} className='text-[blue] cursor-pointer'>
                <Link to={`user/${elem.id}`}>{elem.name}</Link>
            </p>
        )
    })}
    </>
  )
}

export default Contact