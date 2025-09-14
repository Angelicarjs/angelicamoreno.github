import { Mail, BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [

    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/angelica-m-moreno/",
    },

    {
        id: 2,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:angelica_uno@hotmail.es",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Angelicarjs",
    },

];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    /*     {
            id: 3,
            title: "Book",
            icon: <BookText size={25} color="#fff" strokeWidth={1} />,
            link: "/services",
        }, */
    {
        id: 4,
        title: "Target",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "GIS Data Analyst",
        subtitle: "IBT Group",
        description: "Conduct comprehensive GIS data analysis to support tender applications for internet services using fiber technology across the USA. Use of Python, Geopandas, QGIS, PostgreSQL - PostGIS. .",
        date: "May 2024 ",
    },
    {
        id: 1,
        title: "GIS Analyst",
        subtitle: "Earth Define",
        description: "QC for projects related with Land Cover around USA. Use of GDAL-OGR.",
        date: "Feb 2024",
    },
    {
        id: 2,
        title: "GIS Consultant",
        subtitle: "FORLIANCE",
        description: "Project development manager of the GIS-based solution on an environmental project on the coast of Colombia financed by IKI. Leading the GIS-based proposals on different tenders in Latin America. Developing the GIS analysis for projects in Africa, Mexico, and Colombia.",
        date: "Aug 2022",
    },
    {
        id: 3,
        title: "GIS Analyst",
        subtitle: "ESRI Colombia",
        description: " Application and testing of ESRI products in the consulting area in different projects in the public and private sector. Using ArcGIS Desktop, ArcGIS Online, ArcGIS for JS developers, dashboards.",
        date: "Ago 2021",
    },
    {
        id: 5,
        title: "GIS Developer",
        subtitle: "Geoproyecciones",
        description: "Frontend development in the geographic area of digital platforms for the cadastral survey. Use of Leaflet, OpenLayers, PHP, PostgreSQL - PostGIS.",
        date: "Dec 2020",
    },
    {
        id: 5,
        title: "Frontend Developer",
        subtitle: "DAHU Labs",
        description: "Web application development using React. Integration with GraphQL + Node.",
        date: "Apr 2020",
    },
    {
        id: 5,
        title: "Researcher",
        subtitle: "Los Andes University",
        description: "Estimation of the loss of groundwater recharge produced by the change in land use. Use of ArcGIS and statistics on field data.",
        date: "Oct 2019",
    },
]

export const dataEducation = [

    {
        id: 1,
        title: "University of Salzburg",
        subtitle: "Copernicus Master in Digital Earth",
        description: "",
        date: "Sep 2024",
    },
    {
        id: 2,
        title: "University of los Andes",
        subtitle: "Bachelor in Geosciences",
        description: "",
        date: "Sep 2019",
    },
]

/* export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
]; */

export const serviceData = [
    {
        icon: <Rocket />,
        title: "Script Tool Development",
        description: "",
        link:"#!"
    },
    {
        icon: <Pencil />,
        title: "ArcPy Mapping Module",
        description: "",
        link:"#!"
    },
    {
        icon: <Computer />,
        title: "ESRI Certificates",
        description: "",
        link: "https://www.linkedin.com/posts/angelica-m-moreno_esri-e-courses-activity-6935012734426107904-j861?utm_source=share&utm_medium=member_desktop&rcm=ACoAACXMAAkBqEdRWlaVszrPvLJENgUsWSDszYo"
    },
    /* {
        icon: <Book />,
        title: "",
        description: "",
    },
    {
        icon: <Crop />,
        title: "",
        description: "",
    }, */
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Google Earth Engine",
        image: "/image-1.png",
        urlGithub: "/google_earth",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Radar",
        image: "/image-2.png",
        urlGithub: "https://plusacat-my.sharepoint.com/:b:/g/personal/angelica_moreno-rojas_stud_plus_ac_at/EbK9uHMQLdJNq9ti859rzZoBJPX-6lF3RPrzOEokbM5n_w?e=G3d4Q3",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Spatial Databases",
        image: "/image-3.png",
        urlGithub: "https://plusacat-my.sharepoint.com/:b:/g/personal/angelica_moreno-rojas_stud_plus_ac_at/EbZ0lMa5FGdPlopvz7NptKsBMVN4GK7YpjHHc_pZCBRm8w?e=i60Ycd",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Data Cubes",
        image: "/image-4.png",
        urlGithub: "/data_cubes",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "ArcGIS",
        image: "/image-5.png",
        urlGithub: "/arcgis",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "R",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "QGIS ",
        image: "/image-7.png",
        urlGithub: "/QGIS",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "OBIA - Edge Based Segmentation",
        image: "/image-8.png",
        urlGithub: "https://colab.research.google.com/drive/1HPnQ2HKFKpsaAtZJbdO04NOHabVZHjdS?usp=sharing",
        urlDemo: "#!",
    },
    {
        id: 9,
        title: "Intership",
        image: "/intership.png",
        urlGithub: "https://plusacat-my.sharepoint.com/:b:/g/personal/angelica_moreno-rojas_stud_plus_ac_at/ERQX0zwaNzNItQ02-JMxzOcBEZyhUJeMz6V45hY3KPb2MQ?e=YFxhOD",
        urlDemo: "#!",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];