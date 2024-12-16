import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";

const ServicesPage = () => {
    return (
        <>
        <ContainerPage>
            <TransitionPage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Lastest <span className="font-bold text-secondary">projects</span></h1>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </ContainerPage>
            
        </>
    );
}

export default ServicesPage;