import React from 'react'

function Student({id, name, marks, clas}) {
    // const {id, name}=props;
    const heading={
        color:'red'
    };

  return (
        <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{marks}</td>
        <td>{clas}</td>
        </tr>
  )
}

export default Student;