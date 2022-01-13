import React from 'react'
import './editable.css'

const EditableRows = ({editFormData,handleChange,handleCancelClick}) => {
    return (
        <tr>
             <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleChange}
        ></input>
      </td>
      <td>
        <button className='btn btn-success me-2' type="submit">Save</button>
        <button className='btn btn-danger me-2' type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
        </tr>
    )
}

export default EditableRows
