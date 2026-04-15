"use client"

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

const InternshipPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 text-blue-200">
                    Internship{' '}
                    <span className="font-bold text-secondary">
                        GIS Analysis for Broadband Development
                    </span>
                </h1>

                <div className="flex flex-col items-center gap-6 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-4 text-blue-200">
                        BEAD Broadband Grant Analysis (March – June 2025)
                    </h2>

                    <div className="max-w-2xl text-justify">
                        <p className="text-gray-300">
                            Four-month internship focused on identifying and analyzing locations
                            eligible for BEAD (Broadband Equity, Access, and Deployment) grant
                            funding across the United States. The work combined QGIS and SQL to
                            evaluate household density, business presence, and cost optimization
                            criteria, supporting decisions on where fiber infrastructure
                            investments could be most impactful.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-blue-200">Tasks</h3>
                        <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                            <li>
                                Identified and analyzed BEAD-eligible locations using QGIS and SQL,
                                weighting household density, business presence, and cost factors.
                            </li>
                            <li>
                                Collaborated with cross-functional teams so that the GIS outputs
                                fed directly into broader business development strategies.
                            </li>
                            <li>
                                Automated repetitive GIS workflows through SQL and QGIS to improve
                                efficiency, reproducibility, and accuracy.
                            </li>
                            <li>
                                Optimized the analysis of spatial layers to accelerate
                                decision-making.
                            </li>
                        </ul>

                        <h3 className="mt-6 text-xl font-bold text-blue-200">Learning Objectives</h3>
                        <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                            <li>
                                Practical integration of GIS with PostgreSQL/PostGIS for advanced
                                spatial data management and analysis.
                            </li>
                            <li>
                                Designing automated workflows in QGIS and SQL that reduce manual
                                effort and human error.
                            </li>
                            <li>
                                Translating technical geospatial outputs into actionable business
                                insights for non-technical stakeholders.
                            </li>
                            <li>
                                Understanding how geospatial evidence shapes investment strategies,
                                particularly for broadband grant funding.
                            </li>
                        </ul>

                        <h3 className="mt-6 text-xl font-bold text-blue-200">Lessons Learned</h3>
                        <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                            <li>
                                Automation pays off — investing time in reproducible SQL and QGIS
                                pipelines compounds across every later analysis.
                            </li>
                            <li>
                                Communication matters — adapting technical language to different
                                audiences is as important as the analysis itself.
                            </li>
                            <li>
                                Adaptability — datasets vary widely in format and quality, and
                                flexibility is required to deliver consistent results.
                            </li>
                        </ul>

                        <h3 className="mt-6 text-xl font-bold text-blue-200">Final Reflection</h3>
                        <p className="mt-2 text-gray-300">
                            This internship bridged academic knowledge with professional practice
                            in GIS and data sciences. Beyond technical growth, it strengthened
                            teamwork, communication, and problem-solving skills — all directly
                            relevant to a career in digital earth applications and geospatial
                            analysis.
                        </p>

                        <h3 className="mt-6 text-xl font-bold text-blue-200">Tech Stack</h3>
                        <p className="mt-2 text-gray-300">
                            QGIS, SQL, PostgreSQL / PostGIS, Python, Geopandas
                        </p>

                        <div className="h-32"></div>
                    </div>
                </div>

            </ContainerPage>
        </>
    );
}

export default InternshipPage;
