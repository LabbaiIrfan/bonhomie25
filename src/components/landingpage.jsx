import React, { useState } from 'react';
// import axios from 'axios';

// Home Component
const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-white text-gray-800 font-sans">

            <nav className="bg-blue-600 shadow-md fixed w-full z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo Image */}
                    <a href="#" className="text-2xl font-bold text-white">
                        <img
                            src="/logo.png"
                            alt="Bonhomie 2025 Logo"
                            className="h-8 md:h-10"
                        />
                    </a>
                    {/* Toggle Button for Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="block md:hidden text-gray-600 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Links (Responsive Dropdown) */}
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"} md:flex flex-col md:flex-row md:items-center absolute md:relative top-16 md:top-0 left-0 w-full bg-white md:bg-transparent md:w-auto`}
                    >
                        <a href="#hero-section" className="block text-left px-6 py-2 md:py-0 text-black md:text-white">Home</a>
                        <a href="#logo-section" className="block text-left px-6 py-2 md:py-0 text-black md:text-white">Logo</a>
                        <a href="#winners-section" className="block text-left px-6 py-2 md:py-0 text-black md:text-white">Winners</a>
                        <a href="#faculty-section" className="block text-left px-6 py-2 md:py-0 text-black md:text-white">Faculty</a>
                        <a href="#glimpse-section" className="block text-left px-6 py-2 md:py-0 text-black md:text-white">Glimpses</a>
                        <a href="#contact-section" className="block text-left px-6 py-2 md:py-0 text-black md:text-white">Contact</a>
                    </div>
                </div>
            </nav>


            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/bonhomie2k19.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay for Text Visibility */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                {/* Hero Content */}
                <div className="relative z-10 px-6 sm:px-12 text-center">
                    <h1 className="text-5xl sm:text-6xl font-serif font-extrabold leading-tight text-shadow-xl">
                        Bonhomie 2025
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl font-medium max-w-3xl mx-auto">
                        Join us for an exceptional celebration of academic excellence, cultural diversity, and student engagement. Make history with us.
                    </p>
                    <a
                        href="#logo-section"
                        className="mt-8 inline-block px-8 py-3 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Register Now
                    </a>
                </div>
            </header>
            {/* Other Sections */}
            <SectionLogo />
            <SectionWinners />
            <BonhomieEvent />
            {/* <SectionFaculty /> */}
        </div>
    );
};

// SectionLogo Component
const SectionLogo = () => {
    return (
        <section id="logo-section" className="py-20 bg-white shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                {/* Logo Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <img
                        src="/Bonhomie.png"
                        alt="Event Logo"
                        className="mx-auto max-w-s hover:scale-110 transform duration-500"
                    />
                </div>
                {/* Text and Buttons Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Register for Thrilling Events</h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Be a part of the journey where talent meets opportunity, and fun knows no bounds.
                    </p>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <a
                            href="/events"
                            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-10 py-3 rounded-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                        >
                            Sports
                        </a>
                        <a
                            href="/cultural"
                            className="bg-gradient-to-r from-orange-400 to-orange-600  text-white px-10 py-3 rounded-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                        >
                            Cultural
                        </a>
                        <a
                            href="/technical"
                            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-10 py-3 rounded-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                        >
                            Technical
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const BonhomieEvent = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 md:px-8">
            {/* Glimpses of the Past Section - Moved to the Top */}
            <section id="glimpse-section" className="my-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600">Glimpses of the Past</h2>
                <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
                    Relive the best moments from our previous Bonhomie events! Watch unforgettable highlights from the past and feel the spirit of the fest.
                </p>
            </section>
            {/* Bonhomie 2022 Section */}
            <section className="flex flex-col-reverse md:flex-row items-center md:space-x-8 my-12 bg-white rounded-lg shadow-lg p-8">
                <div className="w-full md:w-5/12 mt-6 md:mt-0 text-center md:text-left space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600">Bonhomie 2022 Highlights</h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Watch the exciting highlights from the <span className="font-bold">Bonhomie 2022</span> sports and cultural fest! Enjoy electrifying performances, intense competitions, and moments that made this year unforgettable.
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=55GX9ODHhYM"
                        target="_blank"
                        className="inline-block px-6 py-2 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition ease-in-out duration-300"
                    >
                        View Highlights
                    </a>
                </div>
                <div className="w-full md:w-7/12 rounded-lg overflow-hidden shadow-lg">
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/55GX9ODHhYM?si=msm_uiIvBnFMjI0w"
                            title="Bonhomie 2022 Highlights"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
            {/* Bonhomie 2020 Section */}
            <section className="flex flex-col-reverse md:flex-row items-center md:space-x-8 my-12 bg-white rounded-lg shadow-lg p-8">
                <div className="w-full md:w-5/12 mt-6 md:mt-0 text-center md:text-left space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600">Bonhomie 2020 Highlights</h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Relive the moments from <span className="font-bold">Bonhomie 2019</span>, where the energy was high, and the performances were off the charts. Watch the best moments of the festival unfold on screen!
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=BchAr1ZcIJE"
                        target="_blank"
                        className="inline-block px-6 py-2 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition ease-in-out duration-300"
                    >
                        View Highlights
                    </a>
                </div>
                <div className="w-full md:w-7/12 rounded-lg overflow-hidden shadow-lg">
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/BchAr1ZcIJE?si=I9CGKZm89jz3sq9k"
                            title="Bonhomie 2020 Highlights"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
            {/* Bonhomie 2019 Section */}
            <section className="flex flex-col-reverse md:flex-row items-center md:space-x-8 my-12 bg-white rounded-lg shadow-lg p-8">
                <div className="w-full md:w-5/12 mt-6 md:mt-0 text-center md:text-left space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600">Bonhomie 2019 Highlights</h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Take a trip down memory lane and watch the incredible moments from <span className="font-bold">Bonhomie 2019</span>! This video showcases the most thrilling competitions and artistic performances of that year.
                    </p>
                    <a
                        href="https://www.youtube.com/embed/t0bm5cGCHM4?si=OxWOT43bUtOYvqoE"
                        target="_blank"
                        className="inline-block px-6 py-2 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition ease-in-out duration-300"
                    >
                        View Highlights
                    </a>
                </div>
                <div className="w-full md:w-7/12 rounded-lg overflow-hidden shadow-lg">
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/t0bm5cGCHM4?si=OxWOT43bUtOYvqoE"
                            title="Bonhomie 2019 Highlights"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
            {/* Bonhomie 2018 Section */}
            <section className="flex flex-col-reverse md:flex-row items-center md:space-x-8 my-12 bg-white rounded-lg shadow-lg p-8">
                <div className="w-full md:w-5/12 mt-6 md:mt-0 text-center md:text-left space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600">Bonhomie 2018 Highlights</h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Watch the exciting highlights from the <span className="font-bold">Bonhomie 2018</span> sports and cultural fest! Enjoy electrifying performances, intense competitions, and moments that made this year unforgettable.
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=55GX9ODHhYM"
                        target="_blank"
                        className="inline-block px-6 py-2 text-lg font-semibold text-white bg-blue-600 hover:bg-indigo-700 rounded-lg shadow-md transition ease-in-out duration-300"
                    >
                        View Highlights
                    </a>
                </div>
                <div className="w-full md:w-7/12 rounded-lg overflow-hidden shadow-lg">
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/EcGkj8w4J1M?si=2IpxHBNfObaz23nZ"
                            title="Bonhomie 2018 Highlights"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
};
// SectionEvents Component
const SectionWinners = () => (
    <section id="winners-section" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Past Events</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
            Reliving the energy, excitement, and unforgettable moments. Thank you to everyone who made it a grand success
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <WinnerCard
                imgSrc="/glimpse1.jpg"
                district="VolleyBall"
                winner="Team Falcons"
                description="Spike, serve, and score—it's game time on the volleyball court!"
            />
            <WinnerCard
                imgSrc="/glimpse2.jpg"
                district="BGMI"
                winner="Tech Kings"
                description="Get a sneak peek into the action with BGMI Glimpse"
            />
            <WinnerCard
                imgSrc="/glimpse3.jpg"
                district="Zaika"
                winner="KGN Chef"
                description="Battle of flavors: Where creativity meets competition in the ultimate cooking showdown!"
            />
        </div>
    </section>
);

// WinnerCard Component
const WinnerCard = ({ imgSrc, district, winner, description }) => (
    <div className="relative group">
        <img
            src={imgSrc}
            alt={district}
            className="w-full h-56 object-cover rounded-lg shadow-lg group-hover:scale-105 transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg group-hover:scale-105 duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
            <h3 className="text-xl font-bold">{district}</h3>
            <p className="text-sm font-semibold">{winner}</p>
            <p className="text-sm">{description}</p>
        </div>
    </div>

);

// const SectionFaculty = () => (
//     <section id="faculty-section" className="py-20 bg-gray-100">
//         <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Faculty In-Charges</h2>
//         <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
//             Meet the dedicated faculty members who are leading and organizing these events with passion and commitment.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//             <FacultyCard imgSrc="https://via.placeholder.com/150" name="Mohd Irfan" title="In-Charge, Football Tournament" />
//             <FacultyCard imgSrc="https://via.placeholder.com/150" name="Mohd Irfan" title="In-Charge, Cricket Championship" />
//             <FacultyCard imgSrc="https://via.placeholder.com/150" name="Mohd Irfan" title="In-Charge, Table Tennis" />
//         </div>
//     </section>
// );

// FacultyCard Component

const FacultyCard = ({ imgSrc, name, title }) => (
    <div className="text-center">
        <div className="relative inline-block mb-4">
            <img src={imgSrc} alt={name} className="w-48 h-48 object-cover rounded-full shadow-lg mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
    </div>
);




export default Home;
