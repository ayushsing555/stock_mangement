'use client'
export  function Button(props){
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(props.productDetail)
        const response = await fetch("http://localhost:3000/api/stock",{
            method:"post",
            body:JSON.stringify({
                name:props.productDetail.name,
                price:props.productDetail.price,
                Quantity:props.productDetail.quantity
            })
        })
        const data = await response.json();
        if(data.success){
            alert("successfully added");
        }
    }
    return(
        <>
             <button onClick={handleSubmit}  class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400">Add Product</button>
        </>
    )
}