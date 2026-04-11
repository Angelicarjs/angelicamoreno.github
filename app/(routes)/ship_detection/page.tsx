"use client"

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

const ShipDetectionPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 text-blue-200">
                    Ship{' '}
                    <span className="font-bold text-secondary">
                        Detection
                    </span>
                </h1>

                <div className="flex flex-col items-center gap-6 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">
                        Object Detection from Aerial Images
                    </h2>

                    <div className="max-w-2xl text-justify">
                        <p className="text-gray-300">
                            Object detection system for identifying ships and boats in aerial imagery
                            using deep learning. The project uses a dataset of 621 annotated images
                            in PASCAL VOC format with bounding box annotations for ship localization
                            in satellite and drone imagery.
                        </p>

                        <p className="mt-4 text-gray-300">
                            The detection pipeline was implemented using YOLO, processing aerial
                            images to localize and classify vessels. Model performance was evaluated
                            on an annotated validation set to assess detection accuracy and
                            bounding box precision.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-blue-200">Tech Stack</h3>
                        <p className="mt-2 text-gray-300">
                            Python, YOLO, PASCAL VOC annotations, Kaggle dataset
                        </p>

                        <div className="h-32"></div>
                    </div>
                </div>

            </ContainerPage>
        </>
    );
}

export default ShipDetectionPage;
