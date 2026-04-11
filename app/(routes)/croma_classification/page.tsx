"use client"

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

const CromaClassificationPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 text-blue-200">
                    CROMA{' '}
                    <span className="font-bold text-secondary">
                        Classification
                    </span>
                </h1>

                <div className="flex flex-col items-center gap-6 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">
                        Foundation Model for Remote Sensing Classification
                    </h2>

                    <div className="max-w-2xl text-justify">
                        <p className="text-gray-300">
                            Multi-modal land cover classification using CROMA (Contrastive Radar-Optical
                            Masked Autoencoders), a pretrained Vision Transformer, on the EuroSAT dataset.
                            The model classifies Sentinel-2 satellite imagery into 10 CORINE land cover
                            categories including vegetation, buildings, and water bodies.
                        </p>

                        <p className="mt-4 text-gray-300">
                            The project explored different embedding extraction strategies from the
                            pretrained CROMA-ViT backbone, including integration with HuggingFace
                            SMARTIES transformers. Embeddings were generated with mean-std
                            standardization for cross-sensor robustness and used for downstream
                            classification tasks.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-blue-200">Tech Stack</h3>
                        <p className="mt-2 text-gray-300">
                            PyTorch, torchgeo, CROMA (ViT), HuggingFace Transformers, EuroSAT,
                            Sentinel-2 (13 spectral bands)
                        </p>

                        <div className="h-32"></div>
                    </div>
                </div>

            </ContainerPage>
        </>
    );
}

export default CromaClassificationPage;
