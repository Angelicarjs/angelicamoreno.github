import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
        <Image src="/uni-sbg-logo-white.png" width="100" height="200" className="w-full h-full " alt="Particles " />
    </MotionTransition>
    );
}

export default AvatarServices;