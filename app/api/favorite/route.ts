//import { NextApiRequest, NextApiResponse } from "next";

//import prismadb from "@/lib/prismadb";


//export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //try {
        //if (req.method === 'POST') {
            //const { movieId } = req.body;
            //const { existingMovie } = await prismadb.movie.findUnique({
              //  where: {
                //    id: movieId,
               // }
           // });

            //if (!existingMovie) {
                //throw new Error ('Invalid Id');
            //}
        //}
    //} catch (error) {
        //console.log(error);
        //return res.status(400);
    //}
//}