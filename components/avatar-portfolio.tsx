"use client"

import Image from 'next/image';

import { MotionTransition } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position="bottom" className="fixed bottom-0 left-0 right-0 flex justify-center">
            <Image 
                src="/funded_EU.jpg" 
                width={300} 
                height={100} 
                className="w-24 h-auto" 
                alt="Particles" 
            />
        </MotionTransition>



    );
}

export default AvatarPortfolio;