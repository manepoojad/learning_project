import React,{useEffect,useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'

function EditProduct() {
    const params=useParams()
    const location=useLocation()
    console.log(params)

    const [productData, setProductData] = useState({
        title: "",
        description: "",
        price: "",
        count: "",
        rate: "",
        category:"",
        image:""
    })

    useEffect(()=>{
        console.log(location)
        const productDataFromLocation = location.state.projectData

    },[])

    const handleInputChange=()=>{
        
    }

  return (
    <div>
        <form>
            <div>
                <label>Title:</label>
                <input
                     type='text'
                     name='title'
                     value={productData.title}
                     placeholder='Enter Product Title'
                     onChange={e=>handleInputChange(e)}
                />
            </div>
            <div></div>
        </form>
    </div>
  )
}

export default EditProduct