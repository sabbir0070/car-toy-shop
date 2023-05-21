import { useEffect } from "react"

const UseTitle = (title) =>{
useEffect(()=>{
document.title = `${title} - Toy Shop`;
},[title])
}

export default UseTitle;