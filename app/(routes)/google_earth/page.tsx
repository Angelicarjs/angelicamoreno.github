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
                    Google{' '}
                    <span className="font-bold text-secondary ">
                    Earth Engine
                    </span>
                </h1>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
                {/* Iframe */}
                <iframe
                    src="https://ammorenouno.users.earthengine.app/view/portfolio"
                    width="600"
                    height="400"
                    className="rounded-lg shadow-lg border border-gray-300"
                ></iframe>

                {/* Texto descriptivo */}
                <div className="max-w-md">
                    <h2 className="text-2xl font-bold mb-2 text-blue-200">Glacier Changes Analysis</h2>
                    <p className="text-gray-300">
                    This analysis examines changes in the Perito Moreno Glacier in Argentina over a 10-year period using satellite imagery and remote sensing in Google Earth Engine (GEE). 
                    Sentinel-2 images from 2006 and 2016 were processed to calculate the snow index for 2006 and generate a true-color image for 2016.
                    </p>
                    <p className="mt-2 text-gray-300">
                    The results provide a visual representation of changes in glacier cover over time, highlighting areas of increase and decrease. Additionally, the index helps illustrate the direction of ice flow in the region.
                    </p>
                </div>
                </div>


            </ContainerPage>
            <Footer />

        </>
    );
}

export default AboutMePage;