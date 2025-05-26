export default function Resume() {
    return (
        <>
            <div className="text-primary text-center text-sm">(This page is my resume converted to HTML. To download my PDF resume click <a target="_blank" href="/Resume.pdf" className="underline">HERE</a>)</div>
            <Header />
            <div className="container px-4 mx-auto text-primary flex flex-col gap-8 max-w-6xl text-xl mb-8" role="main">
                <Education />
                <hr className="border border-primary" />
                <Projects />
                <hr className="border border-primary" />
                <Experience />
                <hr className="border border-primary" />
                <TechnicalSkills />
            </div>
        </>
    )
}

const Header = () => (
    <header className="text-center self-center text-secondary font-semibold p-4 flex justify-center mx-auto max-w-6xl text-xl">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
            <div className="left-col">
                <div className="text-4xl">Joel Miles</div>
                <div className="text-sm">Washington, USA</div>
            </div>
            <div className="right-col">
                <div><a href="mailto: email@joelmiles.com" aria-label="Email Joel Miles">email@joelmiles.com</a></div>
                <div className="links">
                    <a href="https://github.com/Neeblue" target="_blank" className="mr-4" aria-label="Joel Miles on Github">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current inline mr-1">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                        Github</a>
                    <a href="https://www.linkedin.com/in/jmrmiles/" target="_blank" aria-label="Joel Miles on LinkedIn"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current inline mr-1">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>LinkedIn</a>
                </div>
            </div>
        </div>
    </header>
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
    <div className="flex flex-col">
        <div className="flex flex-col justify-between min-[500px]:gap-4 min-[500px]:flex-row">
            <div className="font-semibold">{title}</div>
            <div className="">{location}</div>
        </div>
        <div className="flex flex-col justify-between min-[500px]:gap-4 min-[500px]:flex-row">
            <div className="italic">{details}</div>
            <div className="italic text-right whitespace-nowrap">{date}</div>
        </div>
    </div>
);

const Projects = () => (
    <div>
        <div className="text-secondary font-semibold mb-4">Projects</div>
        <div className="flex flex-col gap-4">
            <ProjectCard
                title="Joel's Corner"
                tags="React, JS, HTML, CSS, TypeScript, Tailwind"
                date="Aug. 2023 - Present"
                details={[
                    'Static, front-end website hosted on Cloudflare pages for displaying personal projects',
                    'Responsive design with dynamically generated pages, uses DaisyUI components',
                ]}
            />
            <ProjectCard
                title="Disney Booker"
                tags="C#, ASP.NET, Selenium"
                date="Aug. 2023 - Oct. 2023"
                details={[
                    'Automated detection of Disney World reservations using an API endpoint, with Selenium-powered booking',
                    'Features include direct link generation of bookings, and notification through alerts, text, and emails',
                ]}
            />
            <ProjectCard
                title="Bookshelf"
                tags="C#, Avalonia UI, Firebase"
                date="Apr. 2023 - Sep. 2023"
                details={[
                    'A cross-platform digital bookshelf with data storage in Google\'s Firebase',
                    'Uses Google Books API and HtmlAgility package to pull data and images from Google and Goodreads',
                    'Uses MVVM architecture, dependency injection, and .NET Community Toolkit 8.1 for source generation',
                ]}
            />
            <ProjectCard
                title="Work Finder"
                tags="React, JS, HTML, CSS, TypeScript, Tailwind, ASP.NET, MAUI, WPF"
                date="Sep. 2022 - Oct. 2022"
                details={[
                    'Full stack React C# program for finding work as a substitute teacher',
                    'Features include themes, dependency injection, notifications through email and text, and job filtering',
                ]}
            />
        </div>
    </div>
);

const ProjectCard = ({ title, tags, date, details }: { title: string, tags: string, date: string, details: string[] }) => (
    <div className="grid grid-rows-[auto_auto_auto] sm:grid-rows-[auto_auto] sm:grid-cols-[fr1_auto]">
        <div><span className="font-semibold">{title}</span><span>{" | "}{tags}</span></div>
        <div className="text-right">{date}</div>
        <div className="sm:col-span-2">
            <ul>
                {details.map((detail, index) => <li className="ml-10 list-disc" key={index}>{detail}</li>)}
            </ul>
        </div>
    </div>
);

const Experience = () => (
    <section>
        <div className="text-secondary font-semibold mb-4">Experience</div>
        <div className="flex flex-col gap-4">

            <ExperienceCard
                job="Teacher"
                location="Surrey Schools District"
                city="Surrey, BC"
                date="Sep. 2022 - Present"
                details={[
                    "Instructed a diverse range of subjects including Computer Science, Engineering, Science, and Math",
                    "Collaborated with students with intricate needs to support their tailored learning objectives",
                    "Assisted with the Bases program, aiding students with learning and physical disabilities"
                ]}
            />

            <ExperienceCard
                job="Education Assistant"
                location="Pacific Academy"
                city="Surrey, BC"
                date="Sep. 2018 - June 2021"
                details={[
                    "Adapted courses during COVID-19 by incorporating a self-made website, YouTube lessons, and online sessions",
                    "Promoted inclusivity by offering personalized, one-on-one support to students with diverse needs"
                ]}
            />

            <ExperienceCard
                job="Agriculture Lab Technician"
                location="SGS Canada"
                city="Burnaby, BC"
                date="Aug. 2017 - Sep. 2018"
                details={[
                    "Automated a manual data entry task, reducing processing time from 3 days to 20 minutes",
                    "Delivered protocol-adhered samples for analysis with close to a 100% punctuality rate"
                ]}
            />

            <ExperienceCard
                job="Food Residue Technician"
                location="Maxxam Analytics"
                city="Burnaby, BC"
                date="May 2015 - Jan. 2016"
                details={[
                    "Worked independently and efficiently to deliver sample results within a client's specified timeframe",
                    "Experienced in equipment maintenance, troubleshooting, and precise protocol adherence"
                ]}
            />

        </div>

    </section>
);

const ExperienceCard = ({ job, location, city, date, details }: { job: string, location: string, city: string, date: string, details: string[] }) => (
    <div className="">
        <div className="flex flex-col justify-between gap-x-4 min-[500px]:flex-row">
            <div className="font-semibold">{job}</div>
            <div className="text-right whitespace-nowrap">{date}</div>
        </div>
        <div className="flex flex-col justify-between gapx-4 min-[300px]:flex-row">
            <div className="italic">{location}</div>
            <div className="italic text-right">{city}</div>
        </div>
        <div className="">
            <ul>
                {details.map((detail, index) => <li className="ml-10 list-disc" key={index}>{detail}</li>)}
            </ul>
        </div>
    </div>
);


const TechnicalSkills = () => (
    <div>
        <div className="text-secondary font-semibold mb-4">Technical Skills</div>
        <div className="grid grid-cols-[min-content_1fr] gap-2">
            <div className="font-semibold text-right">Languages:</div>
            <div>C#, SQL (MSSQL, SQLite), JavaScript, HTML, CSS</div>
            <div className="font-semibold text-right">Frameworks:</div>
            <div>React, ASP.NET Core, Microsoft MAUI, Node.js, Angular, TypeScript</div>
            <div className="font-semibold text-right">Developer:</div>
            <div>Git, VS Code, Visual Studio, Rider, Postman, AWS CLI, Azure CLI</div>
            <div className="font-semibold text-right">Libraries:</div>
            <div>Selenium, .NET Community Toolkit, Entity Framework, Swagger, Tailwind, Mantine, DaisyUI</div>
            <div className="font-semibold text-right">Concepts:</div>
            <div>OOP, Version Control Systems, Software Architecture</div>
        </div>
    </div>
);
