"use client"

//import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
//import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import Footer from "@/components/footer";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Professional{' '}
                    <span className="font-bold text-secondary">
                        trayectory
                    </span>
                </h1>

                <TimeLine />
            </ContainerPage>
            <Footer />
        </>
    );
}

export default AboutMePage;