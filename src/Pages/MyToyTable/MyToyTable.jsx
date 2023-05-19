import React, { useState } from 'react';
import UpdateToyModal from '../UpdateToyModal/UpdateToyModal';
import Swal from 'sweetalert2';
import { FaBeer, FaTrash, FaUserEdit } from 'react-icons/fa'

const MyToyTable = ({ toy, control, setControl, index, handleDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const { _id, toyName, photo, price, subCategory, date, quantity } = toy;

  const handleUpdate = toy => {
    console.log(toy.id, 10)
    fetch(`http://localhost:5000/myToyUpdate/${toy.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(toy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Do you want to update the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Update',
            denyButtonText: `Don't Update`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not Update', '', 'info')
            }
          })
          setControl(!control)
        }
      })
  }

  return (
    <>
      <tr className=''>
        <th>{index + 1}</th>
        <td>
          <div className="avatar">
            <div className="mask  w-24 h-16">
              <img src={photo} className='w-full h-full rounded-lg' alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td> {toyName} </td>
        <td> {subCategory} </td>
        <td> {price} </td>
        <td> {date} </td>
        <td> {quantity} </td>
        <td>
          <button
            onClick={() => setShowModal(true)}
            className='w-8 h-8 mr-2'
          >
            <FaUserEdit className='w-8 h-8 text-green-500 '></FaUserEdit>
          </button>
          {showModal ? (
            <UpdateToyModal
              key={toy._id}
              setShowModal={setShowModal}
              toy={toy}
              handleUpdate={handleUpdate}
            ></UpdateToyModal>
          ) : null} </td>
        <td>
          <button
            onClick={() => handleDelete(toy._id)}
            className='ml-2'
          >
            <FaTrash className='w-8 h-8 text-red-500'></FaTrash>
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyTable;