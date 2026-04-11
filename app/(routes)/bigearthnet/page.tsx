"use client"

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

const BigEarthNetPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 text-blue-200">
                    BigEarthNet{' '}
                    <span className="font-bold text-secondary">
                        Distributed DL
                    </span>
                </h1>

                <div className="flex flex-col items-center gap-6 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">
                        Scalable Land Cover Classification with Distributed Deep Learning
                    </h2>

                    <div className="max-w-2xl text-justify">
                        <p className="text-gray-300">
                            Scalable U-Net semantic segmentation on the BigEarthNet v2 satellite imagery
                            dataset using distributed TensorFlow training. The pipeline consists of two
                            phases: remote data preprocessing with Petastorm and distributed training
                            across multi-GPU setups using MirroredStrategy.
                        </p>

                        <p className="mt-4 text-gray-300">
                            Benchmarking was conducted at 1%, 5%, and 10% dataset throughput levels.
                            Multi-GPU training (1 to 4 GPUs) demonstrated near-linear scaling efficiency,
                            optimizing I/O and compute trade-offs for cloud-based geospatial workflows.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-blue-200">Tech Stack</h3>
                        <p className="mt-2 text-gray-300">
                            TensorFlow, Petastorm, U-Net, AWS S3, MirroredStrategy (multi-GPU),
                            BigEarthNet v2
                        </p>

                        <div className="h-32"></div>
                    </div>
                </div>

            </ContainerPage>
        </>
    );
}

export default BigEarthNetPage;
