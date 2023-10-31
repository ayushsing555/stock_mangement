import Image from 'next/image'
import Header from './component/header'
import AddProduct from './component/stock'
import DisplayProduct from './component/displayStock';
export default function Home() {
  return (
    <>
      <Header/>
       <div className="flex border-solid justify-center">
      <AddProduct />
      <DisplayProduct />
    </div>
    </>
     
   
  )
}
