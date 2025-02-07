import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            <CircleImage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Lastest <span className="font-bold text-secondary"> projects</span></h1>
                
                {/* <h2 className="text-2xl leading-tight text-left md:text-2xl md:mb-5">Google Earth Engine </h2>

                <iframe src="https://ammorenouno.users.earthengine.app/view/portfolio" 
                    width="800" 
                    height="600">
                </iframe>

                <div>
                The following analysis has been done on the effects of these wildfires using satellite imagery and remote sensing 
                in Google Earth Engine (GEE). By processing the pre and post-fire Sentinel-2 images, I have computed the NDVI, 
                showing the vegetation health using Near-Infrared and Red bands. The NDVI analysis gave me a representation of 
                changes in vegetation cover before and after the fire, with noticeable areas that experienced heavy reduction 
                because of the intensity of burning.
                </div>

                <h2 className="text-2xl leading-tight text-left md:text-2xl md:mb-5">Radar </h2>

                <h2 className="text-2xl leading-tight text-left md:text-2xl md:mb-5">Spatial Databases </h2>

                <h2 className="text-2xl leading-tight text-left md:text-2xl md:mb-5">Data Cubes</h2>

                <h2 className="text-2xl leading-tight text-left md:text-2xl md:mb-5">ArcGIS</h2>

                <h2 className="text-2xl leading-tight text-left md:text-2xl md:mb-5">R</h2> */}

                 <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;