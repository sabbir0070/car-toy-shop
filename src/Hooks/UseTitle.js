import { useEffect } from "react"

const UseTitle = (title) =>{
useEffect(()=>{
document.title = `${title} - Car Toy Shop`;
},[title])
}

export default UseTitle;