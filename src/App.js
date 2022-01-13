import React,{Fragment, useState} from 'react'
import EditableRows from './components/editableRows'
import ReadOnlyRows from './components/readOnlyRows'
import data from './mock.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  const [contacts,setContact]=useState(data)
 const [editContactId,setEditContactId]=useState(null)
 const [editFormData,setEditFormData]=useState({
   fullName:'',
   address:'',
   phoneNumber:'',
   email:''
 })
 
 const handleEditClick=(contact)=>{
     setEditContactId(contact.id)
     const formValue={
      fullName:contact.fullName,
      address:contact.address,
      phoneNumber:contact.phoneNumber,
      email:contact.email
     }
     setEditFormData(formValue)
 }
 const handleChange=(e)=>{
   const fieldName=e.target.getAttribute('name')
   const fieldValue=e.target.value
   const newFormData={...editFormData}
   newFormData[fieldName]=fieldValue
   setEditFormData(newFormData)
 }
const handleCancelClick=()=>{
  setEditContactId(null)
}
const handleDelete=(contact)=>{
  const newContacts=[...contacts]
  const result=newContacts.filter(ele=>{
    return ele.id!==contact.id
})
setContact(result)
}
 const handleSubmit=(e)=>{
e.preventDefault()
const editedData={
id:editContactId,
fullName:editFormData.fullName,
 address:editFormData.address,
 phoneNumber:editFormData.phoneNumber,
 email:editFormData.email
}
const newContacts=[...contacts]
const result=newContacts.map(ele=>{
  if(editContactId===ele.id){
      return {...ele,...editedData}
  }else{
      return {...ele}
  }
})
setContact(result)
setEditContactId(null)
 }
  return (
    <div className='app-container'>
      <form onSubmit={handleSubmit}>
      <table className="table table-light table-responsive-md">
        <thead className='thead-dark'>
          <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map(contact=>{
              return (
                <Fragment>
                  {
                    editContactId===contact.id ?(
                     <EditableRows handleChange={handleChange} editFormData={editFormData} handleCancelClick={handleCancelClick} />
                    ):(
                      <ReadOnlyRows handleEditClick={handleEditClick} handleDelete={handleDelete} contact={contact}/>              
                    )
                  }
               
                </Fragment>
               
              )
            })
          }
        </tbody>
      </table>
      </form>
    </div>
  )
}

export default App
