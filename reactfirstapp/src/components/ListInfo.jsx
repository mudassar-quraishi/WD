import React from 'react'

export default function ListInfo() {
  let listOfName ={
    name :"Mudassar Quraishi",
    id: 2,
    class: "MCA"
  }
  let lang=[
    "Java", "Python", "C++", "Go", "React Js"
  ]

  return (
    <>
     <h1>My name is {listOfName.name} and my id is {listOfName.id}.</h1>
     <h2>I am a {listOfName.class} student</h2>
     <p>I am here to learn something new and interesting everday.</p>
     {lang.map(value=> (
      <h3>{value}</h3>
     ))}
    </>
  )
} 