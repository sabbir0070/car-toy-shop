import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UpdateToyModal = ({toy,handleUpdate,setShowModal}) => {
const {user} = useContext(AuthContext);
//  console.log(toy._id)

const {_id, toyName, rating, photo, price, subCategory, date, quantity, details} = toy;
const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form?.photo.value;
    const toyName = form.name.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const subCategory = form?.subCategory?.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const date = form.date.value;
    const details = form.details.value;
    const id = form.id.value;

    const updatedInformation = {
      id,photo, toyName, sellerName, sellerEmail, subCategory, price, rating, quantity, date, details
    }
    console.log(updatedInformation);
handleUpdate(updatedInformation);

}

return (
<>
      <>
        <div className='flex justify-center  items-center  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
          <div className='relative mx-auto  top-4  my-6'>
            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
              <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                <h3 className='text-3xl font-semibold text-green-600 '>Update Toy </h3>
                <button
                  className='bg-transparent border-0 text-black text-right'
                  onClick={() => setShowModal(false)}
                >
                  <span className='text-red-600 font-bold text-3xl'> X </span>
                </button>
              </div>
              {/* <div className='relative p-6 flex-auto mx-auto'> */}
 
<div className="card my-7 w-full max-w-full shadow-2xl bg-base-200">
        <div className="card-body">
        <form onSubmit={handleOnSubmit}>
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
               <input type="text" name='id' defaultValue={_id} placeholder="Enter Your Id" className="input input-bordered hidden " required />       
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
               <input type="email" name='email' defaultValue={user?.email} placeholder="Enter Your Email" className="input input-bordered none" required />
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
                <input type="date" defaultValue={date} name='date' className="input input-bordered" required />
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
              {/* </div> */}
              
            </div>
          </div>
        </div>
      </>
    </>
  // <div>
  //     
  //   </div>
  );
};

export default UpdateToyModal;