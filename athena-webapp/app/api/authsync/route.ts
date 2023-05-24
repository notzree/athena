
import { NextResponse } from "next/server";

export async function POST(req:Request,res: Response){
    const body = await req.json();
    console.log("request object: ", body)
    return NextResponse.json({text: "Printed"})


}

export async function GET (){
    return NextResponse.json({message:"authsync"})
}