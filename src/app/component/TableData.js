"use client";

import {useEffect, useState} from "react";

export function TableData({elem,getData}) {
    const [updateProduct, setUpdateProductValue] = useState({
        name: "", price: "", Quantity: ""
    });
    const [inputBoxe, setInputBoxes] = useState(false);
    const handleInput = async(id)=>{
        const response = await fetch(`http://localhost:3000/api/stock/Individual/${id}`,{
            method:"put",
            body:JSON.stringify({
                name:updateProduct.name,
                price:updateProduct.price,
                Quantity:updateProduct.Quantity
            })
        })
        const data =await response.json();
        if(data.success){
            getData();
            setInputBoxes(false);
        }
    }

    const handleChange=(e)=>{
        const name   = e.target.name;
        const value = e.target.value;
        setUpdateProductValue({...updateProduct,[name]:value});
    }

    const deleteProduct = async(id)=>{
        console.log(id+"ayush");
        const response = await fetch(`http://localhost:3000/api/stock/Individual/${id}`,{
            method:"delete"
        })
        const data = await response.json();
        if(data.success){
            getData();
            alert("successfull deleted");
        }
    }
    useEffect(()=>{
        updateProduct.name = elem.name;
        updateProduct.price = elem.price;
        updateProduct.Quantity = elem.Quantity;
    },[])
    return (
        <>
            <>
                <tr className="bg-white border-2 border-l-transparent border-r-transparent border-green-300">
                    {
                        inputBoxe ? <>
                            <td className="p-2 border-4 border-red-300"><input autoFocus={true} onChange={handleChange} value={updateProduct.name} name="name" className="p-2" type="text" placeholder={elem.name}></input></td>
                            <td className="p-2 border-4 border-red-300"><input autoFocus={true} onChange={handleChange} value={updateProduct.price}  name="price" className="p-2" type="text" placeholder={elem.price}></input></td>
                            <td className="p-2 border-4 border-red-300"><input autoFocus={true} onChange={handleChange} value={updateProduct.Quantity} name="Quantity" className="p-2" type="text" placeholder={elem.Quantity}></input></td>
                            <td className="p-2 border-4 border-red-300"><button onClick={()=>handleInput(elem._id)} className="bg-orange-200 text-white p-1 rounded-md hover:bg-yellow-600  ">Done</button></td>
                        </> : <>
                            <td className="p-2 border-4 border-red-300">{elem.name}</td>
                            <td className="p-2 border-4 border-red-300">{elem.price}</td>
                            <td className="p-2 border-4 border-red-300">{elem.Quantity}</td>
                            <td className="p-2 border-4 border-red-300"><button onClick={() => setInputBoxes(true)} className="bg-yellow-500 text-white p-1 rounded-md hover:bg-yellow-600  ">Update</button></td>
                        </>
                    }
                    <td className="p-2 border-4 border-red-300"><button onClick={()=>deleteProduct(elem._id)} className="bg-red-800 text-white p-1 rounded-md hover:bg-red-600  ">Delete</button></td>
                </tr>
            </>
        </>
    );
}