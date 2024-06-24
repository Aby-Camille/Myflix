'use client';

import useBillboard from "@/app/hooks/useBillboard";
import React from "react";

const Billboard = () => {
    const { data } = useBillboard();

    return (
        <><div className="relative h-[56.25vw]">
            <video className="w-full h-[56.25vw] object-cover brigthness-[60%]"
                autoPlay
                muted
                src={data?.videoUrl}>
            </video>
        </div>
        <div className="absolute top-[30%] md:top-[50%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full [w-50%]">
                    {data?.title}
                </p>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    {data?.description}
                </p>
            </div></>
    )
}

export default Billboard;