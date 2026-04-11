"use client"

//import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
//import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

import { dataAboutPage, dataEducation } from "@/data";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Professional{' '}
                    <span className="font-bold text-secondary">
                        trajectory
                    </span>
                </h1>

                <TimeLine data={dataAboutPage} />

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    <span className="font-bold text-secondary">
                        Education
                    </span>
                </h1>

                <TimeLine data={dataEducation}/>

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    ML &amp; Data Science{' '}
                    <span className="font-bold text-secondary">
                        skills
                    </span>
                </h1>

                <div className="mt-5 mb-10 flex flex-wrap gap-3">
                    {[
                        "Decision Trees", "SVM", "Random Forest", "DBSCAN",
                        "PCA", "Cross-Validation", "Hyperparameter Tuning",
                        "Deep Learning", "CNNs", "Foundation Models",
                        "Self-Supervised Learning", "Distributed Computing (Spark)"
                    ].map((skill) => (
                        <span key={skill} className="px-4 py-2 text-sm border border-secondary rounded-full text-secondary">
                            {skill}
                        </span>
                    ))}
                </div>
            </ContainerPage>

        </>
    );
}

export default AboutMePage;