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
                    Data{' '}
                    <span className="font-bold text-secondary ">
                    Cubes
                    </span>
                </h1>

                <div className="flex flex-col items-center gap-6 p-6 text-white">
                <h2 className="text-2xl font-bold mb-4 text-blue-200">Lakes Presence Model</h2>
                

                {/* Texto descriptivo */}
                <div className="max-w-2xl text-justify">

                    
                    <p className="text-gray-300">
                    A data cube is a multi-dimensional structure for organizing and analyzing data across various dimensions (e.g., time, location). 
                    A semantic data cube enhances this by adding metadata and relationships, 
                    allowing the request of data. In the Sen2Cube.at semantic EO data cube
                    it is possible to create and execute semantic models.
                    <br />
                    <br />
                    </p>

                    <div className="flex justify-center">
                    <img 
                        src="data_cube.png" 
                        alt="Lakes Presence Model" 
                        className="rounded-lg shadow-lg w-[600px] h-auto"
                    />
                    </div>



                    <p className="mt-4 text-gray-300">
                    One of the objectives of the data cube is to study identifiable phenomena in the real world. 
                    In my case, I consider lakes because they are water objects with specific properties of color, texture, and compactness. 
                    I associated 4 categories with water: Deep water or shadow, Shallow water or shadow, Turbid water or shadow, and Salty shadow water.
                    </p>

                    <p className="mt-4 text-gray-300">
                    Additionally, lakes remain in areas considered flat. For that reason, I added 
                    the slope of less than 2 characteristics. This aspect is based on the topography 
                    using a digital elevation model and is valid for the entire time span 
                    (unlike satellite images, which are stacked upon each other).
                    <br />
                    <br />
                    </p>

                    <div className="flex justify-center">
                    <br />
                     <video 
                        src="/data_cube.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        className="rounded-lg shadow-lg w-[600px] h-auto"
                    />
                    </div>

                    <p className="mt-4 text-gray-300">
                    <br />
                    As a result, the model shows two layers: one with the count of pixels classified as lakes and another with the percentage of lakes over space. 
                    It also includes a time series of the percentage of pixels classified as lakes. 
                    The model was applied in four different regions in Austria to validate satisfactory results.
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