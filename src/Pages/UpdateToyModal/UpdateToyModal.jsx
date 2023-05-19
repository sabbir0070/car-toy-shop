import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UpdateToyModal = ({toy,handleUpdate}) => {
const {user} = useContext(AuthContext);
// console.log(toy,6)
const {toyName, sellerName, sellerEmail,rating, photo, price, subCategory, date, quantity, details} = toy
const handleOnSubmit = (event) => {
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

    const updatedInformation = {
      photo, toyName, sellerName, sellerEmail, subCategory, price, rating, quantity, date, details
    }
    console.log(updatedInformation);
fetch(`http://localhost:5000/updateToy`,{
method:"PUT",
headers:{
"content-type":"application/json"
},
body:JSON.stringify(updatedInformation)
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
          <form onSubmit={handleOnSubmit(handleUpdate)}>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 text-gray-800 text-lg font-semibold '>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold ">Toy Photo Url</span>
                </label>
                <input type="url" name='photo' defaultValue={photo} placeholder="Enter Your Photo Url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Toy Name</span>
                </label>
                <input type="text" name='name' defaultValue={toyName} placeholder="Enter Your Toy Name" className="input input-bordered" required />
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
                <select type="text" name='subCategory' defaultValue={subCategory} className="input input-bordered" required>
                  <option value="Bus">Bus</option>
                  <option value="Truck">Truck</option>
                  <option value="private Car">Private Car</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Toy Price</span>
                </label>
                <input type="text" name='price' defaultValue={price} placeholder="Enter Your Toy Price" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Toy Rating</span>
                </label>
                <input type="text" name='rating' defaultValue={rating} placeholder="Enter Your Toy Rating" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-lime-600 font-bold">Available Quantity</span>
                </label>
                <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter Your Toy Quantity" className="input input-bordered" required />
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
              <textarea type="text" defaultValue={details} name='details' placeholder="Enter Your Toy Details" className="input input-bordered h-32 " required />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Updated Toy" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToyModal;