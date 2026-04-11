"use client"

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

const FractalPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 text-blue-200">
                    FRACTAL{' '}
                    <span className="font-bold text-secondary">
                        Spark ML
                    </span>
                </h1>

                <div className="flex flex-col items-center gap-6 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">
                        Distributed ML on 3D Point Clouds with Apache Spark
                    </h2>

                    <div className="max-w-2xl text-justify">
                        <p className="text-gray-300">
                            Distributed machine learning pipeline on the FRACTAL (French Clouds from
                            Targeted Landscapes) LiDAR dataset containing 9.3 billion 3D points.
                            A Random Forest classifier was trained for 7-class semantic segmentation
                            using Spark-based preprocessing and feature engineering.
                        </p>

                        <p className="mt-4 text-gray-300">
                            Key feature engineering steps included vertical coordinate normalization,
                            NDVI computation from spectral bands, and intensity metrics. Scalability
                            was evaluated across different executor and memory configurations on
                            Spark clusters with S3 integration.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-blue-200">Tech Stack</h3>
                        <p className="mt-2 text-gray-300">
                            Apache Spark, PySpark, Random Forest, Docker, AWS S3, LiDAR point cloud data
                        </p>

                        <div className="h-32"></div>
                    </div>
                </div>

            </ContainerPage>
        </>
    );
}

export default FractalPage;
