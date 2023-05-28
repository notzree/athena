import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: Response) {
  try {
    let body = await req.json();
    body = body.data;
    console.log("request object:", body);

    const user = await prisma.user.create({
      data: {
        userId: body.id,
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email_addresses[0].email_address,
        gradYear: -1,
      },
    });

    console.log("created user:", user);

    return NextResponse.json({text: "Printed"})
  } catch (error) {
    console.error("Error:", error);
    return new Response('Error', {
      status: 500,
    });  
  } 
}


// import { Prisma } from "@prisma/client";

// export async function POST(req:Request,res: Response){
//     const body = await req.json();
//     console.log("request object: ", body)

//     const user = prisma.user.create({
//         data: {
//             userId: body.data.id,
//             firstName: body.data.first_name,
//             lastName: body.data.last_name,
//             email: body.data.email_addresses,
//         },
//     })

//     return NextResponse.json({text: "Printed"})

// }