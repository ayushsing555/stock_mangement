import {NextRequest, NextResponse} from "next/server";
import connectMongoDb from "@/app/db/conn";
import Stock from "@/app/db/stock";
 export  async function POST(request){
    const data = await request.json();
    await connectMongoDb();
    const newStock = new Stock(
        data
    )
    await newStock.save();
    return NextResponse.json({success:true,newStock})
 }
export  async function GET(request,response){
    await connectMongoDb();
    const data = await Stock.find();
    return NextResponse.json(data)
}