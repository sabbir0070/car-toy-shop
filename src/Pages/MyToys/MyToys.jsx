import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import MyToyTable from '../MyToyTable/MyToyTable';
import Select from 'react-select';
import UseTitle from '../../Hooks/UseTitle';

const options = [
  { value: "Price-Ascending", label: "Ascending" },
  { value: "Price-Descending", label: "Descending" }
]

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])
 UseTitle('My Toys')
  useEffect(() => {
    const [value, type] = selectedOption.value
      .split("-")
      .map((item) => item.toLowerCase());
    fetch(`https://toys-car-project-server.vercel.app/myToy?email=${user?.email}&value=${value}&type=${type}`)
      .then(res => res.json())
      .then(data => {
        setToys(data)
        // console.log(data)
      })
  }, [user, control, selectedOption])

  const handleDelete = (id) => {
    console.log('confirm deleted', id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://toys-car-project-server.vercel.app/myToy/${id}`, {
            method: "DELETE"
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data?.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
              const remaining = toys.filter(toy => toy._id !== id);
              setToys(remaining);
            })
        }
      })
  }

  return (
    <div>
      <h2 className='text-center text-3xl font-semibold text-lime-600 mt-5'>My All Toys</h2>
      <div className='text-lg mt-5 font-semibold   mx-auto h-4 w-60'>
        <Select
          defaultValue={options[0]}
          onChange={setSelectedOption}
          options={options}
        >
        </Select>

      </div>
      <div className="overflow-x-auto my-7 mt-14">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No:</th>
              <th>image</th>
              <th>ToyName</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              toys.map((toy, index) => <MyToyTable handleDelete={handleDelete} toy={toy} key={toy._id} index={index} setControl={setControl} control={control}></MyToyTable>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;