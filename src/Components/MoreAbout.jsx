import React from 'react';

const MoreAbout = () => {
    const cards = [
        {
            img: '/images/coding.jpg', // Add a relevant coding-related image
            title: 'My Coding Journey',
            text: 'I am deeply passionate about coding and software development. From creating full-stack applications with technologies like React and Spring Boot to solving challenging algorithm problems, I enjoy diving into complex codebases, working with big company servers, and building projects that make an impact.',
        },
        {
            img: '/images/life.jpg', // Add an image that represents personal growth or life
            title: 'About My Life',
            text: 'Living on my own for the first time has been a transformative experience. I’ve learned to balance cooking nutritious meals, staying active, and growing as a computer science student. It has taught me resilience and the importance of managing priorities effectively.',
        },
        {
            img: '/images/college.jpg', // Add a university or learning-related image
            title: 'My College Experience',
            text: 'Currently pursuing a computer science degree, I’m building skills in algorithms, data structures, and full-stack development. Courses like CPSC 320 and CPSC 213 have sharpened my problem-solving and low-level programming skills, while projects have honed my practical knowledge.',
        },
        {
            img: '/images/hobby.jpg', // Add an image that reflects hobbies or personal interests
            title: 'My Interests and Hobbies',
            text: 'When I’m not coding, I love exploring new technologies, staying active to increase stamina, and sharing my journey as a developer through my Instagram page, @swey.codes. Staying curious and continuously learning is a big part of who I am.',
        },
    ];

    return (
        <div className="flex flex-col items-center gap-8 p-6 mt-10">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center backdrop-blur-3xl shadow-lg rounded-lg overflow-hidden w-full max-w-6xl ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                    {/* Image */}
                    <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-60 md:w-[500px] md:h-[400px] object-cover"
                    />

                    {/* Content */}
                    <div className="p-6 flex flex-col gap-4 w-full md:w-4/5">
                        <h3 className="text-2xl font-bold">{card.title}</h3>
                        <p className="text-gray-700 text-lg">{card.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MoreAbout;