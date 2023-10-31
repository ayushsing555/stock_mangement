'use client'
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import {BiRefresh} from 'react-icons/bi'
import {TableData} from "./TableData";
export default function Page() {
    const [inputValue,setInput] = useState("");
    const router = useRouter();
    const [product, setProduct] = useState([]);
    const getData = async () => {
        const response = await fetch("http://localhost:3000/api/stock", {
            method: "Get"
        });
        const data =await response.json();
        setProduct(data.reverse());
        router.push("/");
    };
    useEffect(() => {
        getData();
    }, []);

    if(product.length==0){
        return(
            <>
              <h1>Loading...</h1>
            </>
        )
    }
    return (
        <>
           <div className="bg-green-500 m-4">
    <div className="bg-white p-6 rounded-lg shadow-lg m-3 w-100">
        <input type="text" value={inputValue} onChange={(e) => setInput(e.target.value)} className="m-2 p-2" autoFocus={true} placeholder="enter your name" />
        <button onClick={getData} className="btn"><BiRefresh/></button>
        <h1 className="text-2xl font-semibold mb-4">Display Product</h1>
        <div className="table-container overflow-y-scroll h-72 w-full border border-gray-300">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 text-left">Product Name</th>
                        <th className="p-2 text-left">Price</th>
                        <th className="p-2 text-left">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((elem) => {
                        if (elem.name.indexOf(inputValue) === 0)
                            return (
                                <TableData key={elem._id} elem={elem} getData={getData} />
                            );
                    })}
                </tbody>
            </table>
        </div>
    </div>
</div>



        </>
    );
}