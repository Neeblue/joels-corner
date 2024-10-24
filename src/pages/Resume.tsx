

export default function Resume() {
    return (
        <>
            <div className="container p-4 mt-2 mx-auto text-primary flex flex-col gap-8 max-w-4xl text-xl mb-8">
                <Header />
                <Education />
                <Projects />
                <Experience />
                <TechnicalSkills />
            </div>
        </>
    )
}

const Header = () => (
    <div className="text-center text-secondary font-semibold">
        <div className="text-4xl">Joel Miles</div>
        <div className="text-xl">Washington, USA | <a target="_blank" href="mailto:email@johnbarnes.com">email@joelmiles.com</a></div>
        <div className="text-xl">
            <a target="_blank" href="https://joelmiles.com">joelmiles.com</a> |{' '}
            <a target="_blank" href="https://www.linkedin.com/in/jmrmiles">linkedin.com/in/jmrmiles</a> |{' '}
            <a target="_blank" href="https://github.com/Neeblue">github.com/Neeblue</a>
        </div>
    </div>
);

const Education = () => (
    <div>
        <div className="text-secondary font-semibold mb-4">Education</div>
        <div className="projects flex flex-col gap-4">
            <EducationCard
                title="University of British Columbia"
                location="Vancouver, BC"
                details="Bachelor of Education"
                date="Aug. 2021 - May 2022"
            />
            <EducationCard
                title="University of British Columbia"
                location="Vancouver, BC"
                details="Bachelor of Science, Major in Biochemistry, Co-operative Education Program"
                date="Aug. 2014 - May 2017"
            />
        </div>
    </div>
);

const EducationCard = ({ title, location, details, date }: { title: string, location: string, date: string, details: string }) => (
    <div>
        <div className="education">{title}<span className="location float-right ml-4">{location}</span></div>
        <div className="details italic">{details}<span className="date italic float-right ml-4">{date}</span></div>
    </div>
);

const Projects = () => (
    <div>
        <div className="text-secondary font-semibold mb-4">Projects</div>
        <div className="projects flex flex-col gap-4">
            <ProjectCard
                title="Joel's Corner | React, JS, HTML, CSS, TypeScript, Tailwind"
                date="Aug. 2023 - Present"
                details={[
                    'Static, front-end website hosted on Cloudflare pages for displaying personal projects',
                    'Responsive design with dynamically generated pages, uses DaisyUI components',
                ]}
            />
            <ProjectCard
                title="Disney Booker | C#, ASP.NET, Selenium"
                date="Aug. 2023 - Oct. 2023"
                details={[
                    'Automated detection of Disney World reservations using an API endpoint, with Selenium-powered booking',
                    'Features include direct link generation of bookings, and notification through alerts, text, and emails',
                ]}
            />
            <ProjectCard
                title="Bookshelf | C#, Avalonia UI, Firebase"
                date="Apr. 2023 - Sep. 2023"
                details={[
                    'A cross-platform digital bookshelf with data storage in Google\'s Firebase',
                    'Uses Google Books API and HtmlAgility package to pull data and images from Google and Goodreads',
                    'Uses MVVM architecture, dependency injection, and .NET Community Toolkit 8.1 for source generation',
                ]}
            />
            <ProjectCard
                title="Work Finder | React, JS, HTML, CSS, TypeScript, Tailwind, ASP.NET, MAUI, WPF"
                date="Sep. 2022 - Oct. 2022"
                details={[
                    'Full stack React C# program for finding work as a substitute teacher',
                    'Features include themes, dependency injection, notifications through email and text, and job filtering',
                ]}
            />
        </div>
    </div>
);

const ProjectCard = ({ title, date, details }: { title: string, date: string, details: string[] }) => (
    <div>
        <div className="">{title} <span className="italic float-right ml-4">{date}</span></div>
        <ul>
            {details.map((detail, index) => <li className="ml-10 list-disc" key={index}>{detail}</li>)}
        </ul>
    </div>
);

const Experience = () => (
    <section>
        <div className="text-secondary font-semibold mb-4">Experience</div>
        
        <ExperienceCard
            job="Teacher"
            location="Surrey Schools District, Surrey, BC"
            date="Sep. 2022 - Present"
            details={[
                "Instructed a diverse range of subjects including Computer Science, Engineering, Science, and Math",
                "Collaborated with students with intricate needs to support their tailored learning objectives",
                "Assisted with the Bases program, aiding students with learning and physical disabilities"
            ]}
        />

        <ExperienceCard
            job="Education Assistant"
            location="Pacific Academy, Surrey, BC"
            date="Sep. 2018 - June 2021"
            details={[
                "Adapted courses during COVID-19 by incorporating a self-made website, YouTube lessons, and online sessions",
                "Promoted inclusivity by offering personalized, one-on-one support to students with diverse needs"
            ]}
        />

        <ExperienceCard
            job="Agriculture Lab Technician"
            location="SGS Canada, Burnaby, BC"
            date="Aug. 2017 - Sep. 2018"
            details={[
                "Automated a manual data entry task, reducing processing time from 3 days to 20 minutes",
                "Delivered protocol-adhered samples for analysis with close to a 100% punctuality rate"
            ]}
        />

        <ExperienceCard
            job="Food Residue Technician"
            location="Maxxam Analytics, Burnaby, BC"
            date="May 2015 - Jan. 2016"
            details={[
                "Worked independently and efficiently to deliver sample results within a client's specified timeframe",
                "Experienced in equipment maintenance, troubleshooting, and precise protocol adherence"
            ]}
        />
    </section>
);

const ExperienceCard = ({ job, location, date, details }: { job: string, location: string, date: string, details: string[] }) => (
    <div>
        <div className="job">{job}</div>
        <div className="location">{location}</div>
        <div className="date">{date}</div>
        <ul>
            {details.map((detail, index) => (
                <li key={index}>{detail}</li>
            ))}
        </ul>
    </div>
);


const TechnicalSkills = () => (
    <div>
        <div className="text-secondary font-semibold mb-4">Technical Skills</div>
        <div className="grid grid-cols-2">
            <div className="justify-end mr-4">
                <p>Languages:</p>
                <p>Frameworks:</p>
                <p>Developer:</p>
                <p>Libraries:</p>
                <p>Concepts:</p>
            </div>
            <div className="justify-start">
                <p>C#, SQL (MSSQL, SQLite), JavaScript, HTML, CSS</p>
                <p>React, ASP.NET Core, Microsoft MAUI, Node.js, Angular, TypeScript</p>
                <p>Git, VS Code, Visual Studio, Rider, Postman, AWS CLI, Azure CLI</p>
                <p>Selenium, .NET Community Toolkit, Entity Framework, Swagger, Tailwind, Mantine, DaisyUI</p>
                <p>OOP, Version Control Systems, Software Architecture</p>
            </div>
        </div>
    </div>
};
