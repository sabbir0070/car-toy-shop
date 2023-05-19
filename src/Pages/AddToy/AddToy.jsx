import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { json } from 'react-router-dom';
import Swal from 'sweetalert2';


const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log()
    const photo = form.photo.value;
    const toyName = form.name.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const subCategory = form?.subCategory?.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const date = form.date.value;
    const details = form.details.value;

    const toyInformation = {
      photo, toyName, sellerName, sellerEmail, subCategory, price, rating, quantity, date, details
    }
    console.log(toyInformation);
fetch(`http://localhost:5000/addToy`,{
method:"POST",
headers:{
"content-type":"application/json"
},
body:JSON.stringify(toyInformation)
})
.then(res=>res.json())
.then(data=>{
console.log(data)
if(data?.insertedId > 0){ 
Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Your New Toy added  has been successful',
  showConfirmButton: true,
  timer: 1500,
})
}
})

  }

  return (
    <div>
      <div className="card my-7  w-full max-w-full shadow-2xl bg-base-200">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Add A Toy</h1>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 text-gray-800 text-lg font-semibold '>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold ">Toy Photo Url</span>
                </label>
                <input type="url" name='photo' placeholder="Enter Your Photo Url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Toy Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter Your Toy Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Toy Seller Name</span>
                </label>
                <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder="Enter Your Toy Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Seller Email</span>
                </label>
                <input type="email" name='email' defaultValue={user?.email} placeholder="Enter Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Sub Category</span>
                </label>
                <select type="text" name='subCategory' className="input input-bordered" required>
                  <option value="MiniBus">MiniBus</option>
                  <option value="MiniTruck">MiniTruck</option>
                  <option value="MiniPoliceCar">MiniPoliceCar</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Toy Price</span>
                </label>
                <input type="text" name='price' placeholder="Enter Your Toy Price" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Toy Rating</span>
                </label>
                <input type="text" name='rating' placeholder="Enter Your Toy Rating" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Available Quantity</span>
                </label>
                <input type="text" name='quantity' placeholder="Enter Your Toy Quantity" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Date</span>
                </label>
                <input type="date" name='date' className="input input-bordered" required />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-lime-600 font-bold">Toy Details</span>
              </label>
              <textarea type="text" name='details' placeholder="Enter Your Toy Details" className="input input-bordered h-32 " required />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Add A Toy" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;