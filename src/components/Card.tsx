import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card({ venueName, imgSrc } : { venueName:string, imgSrc:string }) {
    return (
        <InteractiveCard>
            <div className="w-full h-[60%] relative bg-white">
                <Image
                    src={'/img/' + imgSrc}
                    alt="placeholder"
                    fill={true}
                    className="object-cover"
                />
                <div className="absolute top-[145px] m-[5px]">
                    <h3 className="text-white break-all text-xl m-0 [text-shadow:0_0_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.6),0_0_30px_rgba(0,0,0,0.4)]">
                        {venueName}
                    </h3>
                </div>
            </div>
            
            {/*Was once a description*/}
            <div className="w-full h-[40%] p-[10px]"> 
                <p></p>
            </div>
            
        </InteractiveCard>
    );
}