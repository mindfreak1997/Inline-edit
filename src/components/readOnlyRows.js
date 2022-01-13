import React from 'react'
import './readOnly.css'
const ReadOnlyRows = ({contact,handleEditClick,handleDelete}) => {
    return (
        <tr>
                  <td>{contact.fullName}</td>
                  <td>{contact.address}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.email}</td>
                  <td>
                      <button className='btn btn-primary me-2' onClick={()=>{
                          handleEditClick(contact)
                      }}>EDIT</button>
                      <button className='btn btn-danger me-2' onClick={()=>{
                          handleDelete(contact)
                      }}>DELETE</button>
                  </td>
                </tr>
              )
    
}

export default ReadOnlyRows
