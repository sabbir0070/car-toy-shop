import React from 'react';
import { Tabs } from 'react-tabs';

const Categorys = () => {
const { loading } = useContext((AuthContext))
    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allToy/${categories}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCategories(data)
            });
    }, [])

    const marvelCars = categories.filter((item) => item.subCategory === 'Engineering')
    console.log(marvelCars);
    const tarzenCar = categories.filter((item) => item.subCategory === 'writer')
    const fantasyCar = categories.filter((item) => item.subCategory === 'Editor')
  return (
<div>
            <h2>Shop by Category</h2>
           

            <Tabs>
              
                <TabList>
                    {
                        marvelCars.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subCategory}</Tab>
                        ))
                    }
                    {
                        tarzenCar.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subCategory}</Tab>
                        ))
                    }
                    {
                        fantasyCar.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subCategory}</Tab>
                        ))
                    }
                </TabList>


                <TabPanel>
                    {marvelCars.slice(0, 2).map((category, index) => (
                        <div>
                            <img src={category.subCategory} alt={''} />
                            <h3>{category.userName}</h3>
                            <p>Price: {category.price}</p>
                            <p>Rating: {category.ratings}</p>
                            <p>Category: {category.subCategory}</p>
                            <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                        </div>
                    ))}


                </TabPanel>

                <TabPanel>
                    {tarzenCar.slice(0, 2).map((category, index) => (
                        <div>
                            <img src={category.subCategory} alt={''} />
                            <h3>{category.userName}</h3>
                            <p>Price: {category.price}</p>
                            <p>Rating: {category.ratings}</p>
                            <p>Category: {category.subCategory}</p>
                            <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                        </div>
                    ))}
                </TabPanel>

                <TabPanel>
                    {fantasyCar.slice(0, 2).map((category, index) => (
                        <div>
                            <img src={category.subCategory} alt={''} />
                            <h3>{category.userName}</h3>
                            <p>Price: {category.price}</p>
                            <p>Rating: {category.ratings}</p>
                            <p>Category: {category.subCategory}</p>
                            <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                        </div>
                    ))}
                </TabPanel>
            </Tabs>
        </div>
  );
};

export default Categorys;