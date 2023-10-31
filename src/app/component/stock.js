"use client"
import {useState} from "react";
import {Button} from "./component/Button";

export default function Pge() {
    const [productDetail,setProductDetail] = useState({
        name:"",price:"",quantity:""
    })
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setProductDetail({...productDetail,[name]:value});
    }

    const handleSubmit = async()=>{
        const response = await fetch("https://localhost:3000/api/stock",{
            method:"post",
            body:JSON.stringify({
                name:productDetail.name,
                price:productDetail.price,
                quantity:productDetail.quantity
            })
        })
        const data = await response.json();
        if(data.success){
            alert("successfully added");
            setProductDetail({
                name:"",price:"",quantity:""
            })
        }
    }

    
    return (
        <>
              <div className="bg-green-500 m-4">
                <div className="bg-white p-6 rounded-lg shadow-lg m-3 w-96">
                    <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
                    <form>
                        <div className="mb-4">
                            <label for="product-name" className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
                            <input value={productDetail.name} onChange={handleChange}  type="text" id="product-name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400" placeholder="Enter product name" required />
                        </div>
                        <div className="mb-4">
                            <label for="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                            <input value={productDetail.price} onChange={handleChange}  type="number" id="price" name="price" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400" placeholder="Enter price" required />
                        </div>
                        <div className="mb-4">
                            <label for="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                            <input value={productDetail.quantity} onChange={handleChange} type="number" id="quantity" name="quantity" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400" placeholder="Enter quantity" required />
                        </div>
                        <Button productDetail={productDetail}/>
                    </form>
                </div>
            </div>

        </>
    );
}