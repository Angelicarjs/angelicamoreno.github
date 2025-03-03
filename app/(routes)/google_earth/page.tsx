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
                    <h2 className="text-2xl font-bold mb-2 text-blue-200">Wildfire Impact Analysis</h2>
                    <p className="text-gray-300">
                    The following analysis has been done on the effects of these wildfires using satellite imagery and remote sensing 
                    in Google Earth Engine (GEE). By processing the pre and post-fire Sentinel-2 images, I have computed the NDVI, 
                    showing the vegetation health using Near-Infrared and Red bands.
                    </p>
                    <p className="mt-2 text-gray-300">
                    The NDVI analysis gave me a representation of changes in vegetation cover before and after the fire, with noticeable 
                    areas that experienced heavy reduction because of the intensity of burning.
                    </p>
                </div>
                </div>


            </ContainerPage>
            <Footer />

        </>
    );
}

export default AboutMePage;