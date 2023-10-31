import {NextResponse} from "next/server";
import connectMongoDb from "@/app/db/conn";
import Stock from "@/app/db/stock";
export async function DELETE(request,content){
    try{
        const id = content.params.id;
        console.log(id);
        await connectMongoDb();
        const deleteProduct = await Stock.findByIdAndDelete({_id:id});
        return NextResponse.json({success: true});
    }catch(e){
        console.log(e);
        return NextResponse.json({success: false});
    }
}
export async function PUT(request, content) {
    try {
        const data = await request.json();
        const id = content.params.id;
        await connectMongoDb();
        const individualStock = await Stock.findOne({_id: id});
        individualStock.name = data.name;
        individualStock.price = data.price;
        individualStock.Quantity = data.Quantity;
        await individualStock.save();
        return NextResponse.json({success: true});
    }
    catch (e) {
        console.log(e);
        return NextResponse.json({success: false});
    }

}