"use client"

//import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
//import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import Footer from "@/components/footer";
import { dataAboutPage, dataEducation } from "@/data";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 text-blue-200">
                    QGIS{' '}
                    <span className="font-bold text-secondary ">
                    Tool
                    </span>
                </h1>

                <div className="flex flex-col items-center gap-6 p-6 text-white">
                <h2 className="text-2xl font-bold mb-4 text-blue-200">Fixed Wireless Internet Provide Analysis</h2>
                

                {/* Texto descriptivo */}
                <div className="max-w-2xl text-justify">

                    
                    <p className="text-gray-300">
                    This tool was created to assess the application of fixed wireless technology for internet supply 
                    
                    <br />
                    <br />
                    </p>

                    <p className="mt-4 text-gray-300">
                   
                    </p>

                    <p className="mt-4 text-gray-300">
                    
                    <br />
                    <br />
                    </p>

                    <div className="flex justify-center">
                    <br />
                     <video 
                        src="/wireless.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        className="rounded-lg shadow-lg w-[1200px] h-auto"
                    />
                    </div>

                    <p className="mt-4 text-gray-300">
                    <br />
                   
                    <br />
                    </p>

                    <div className="h-32">





                    </div>

                </div>
                </div>


            </ContainerPage>
            <Footer />

        </>
    );
}

export default AboutMePage;