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
                    The following analysis has been done to analyze the changes of the Glaciar Perito Moreno in Argentina in a period of time of
                    10 years using satellite imagery and remote sensing in Google Earth Engine (GEE). By processing the Sentinel-2 images from 2006 and 2016.
                    I have calculated the snow index for 2006 and the true color image. 
                    </p>
                    <p className="mt-2 text-gray-300">
                    The results gives a representation of changes in the cover before and after, with a increased. Also, the index allows to see the direction of the flow of the ice in the area.
                    </p>
                </div>
                </div>


            </ContainerPage>
            <Footer />

        </>
    );
}

export default AboutMePage;