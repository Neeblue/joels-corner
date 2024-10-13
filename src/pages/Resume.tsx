

export default function Resume() {
    return (
        <>
            <div className="container p-4 mx-auto text-primary flex flex-col gap-4">
                <Header />
                <Education />
                <Projects />
                <TechnicalSkills />
            </div>
        </>
    )
}

const Header = () => (
    <div className="text-center text-secondary  font-semibold">
        <h1>Joel Miles</h1>
        <p>Washington, USA | <a target="_blank" href="mailto:email@johnbarnes.com">email@joelmiles.com</a></p>
        <p>
            <a target="_blank" href="https://joelmiles.com">joelmiles.com</a> |{' '}
            <a target="_blank" href="https://www.linkedin.com/in/jmrmiles">linkedin.com/in/jmrmiles</a> |{' '}
            <a target="_blank" href="https://github.com/Neeblue">github.com/Neeblue</a>
        </p>
    </div>
);

const Education = () => (
    <section>
        <h2 className="text-secondary font-semibold">Education</h2>
        <div>
            <h3>University of British Columbia, Vancouver, BC</h3>
            <p>Bachelor of Education, Aug. 2021 -- May 2022</p>
        </div>
        <div>
            <h3>University of British Columbia, Vancouver, BC</h3>
            <p>Bachelor of Science, Major in Biochemistry, Co-operative Education Program, Aug. 2014 -- May 2017</p>
        </div>
    </section>
);

const Project = ({ title, date, details }: { title: string, date: string, details: string[] }) => (
    <div>
        <h3 className="text-secondary">{title} <span className="italic float-right">{date}</span></h3>
        <ul>
            {details.map((detail, index) => <li key={index}>• {detail}</li>)}
        </ul>
    </div>
);

const Projects = () => (
    <section className="flex flex-col gap-2">
        <h2 className="text-secondary font-semibold">Projects</h2>
        <Project
            title="Joel's Corner | React, JS, HTML, CSS, TypeScript, Tailwind"
            date="Aug. 2023 -- Present"
            details={[
                'Static, front-end website hosted on Cloudflare pages for displaying personal projects',
                'Responsive design with dynamically generated pages, uses DaisyUI components',
            ]}
        />
        <Project
            title="Disney Booker | C#, ASP.NET, Selenium"
            date="Aug. 2023 -- Oct. 2023"
            details={[
                'Automated detection of Disney World reservations using an API endpoint, with Selenium-powered booking',
                'Features include direct link generation of bookings, and notification through alerts, text, and emails',
            ]}
        />
        <Project
            title="Bookshelf | C#, Avalonia UI, Firebase"
            date="Apr. 2023 -- Sep. 2023"
            details={[
                'A cross-platform digital bookshelf with data storage in Google\'s Firebase',
                'Uses Google Books API and HtmlAgility package to pull data and images from Google and Goodreads',
                'Uses MVVM architecture, dependency injection, and .NET Community Toolkit 8.1 for source generation',
            ]}
        />
        <Project
            title="Work Finder | React, JS, HTML, CSS, TypeScript, Tailwind, ASP.NET, MAUI, WPF"
            date="Sep. 2022 -- Oct. 2022"
            details={[
                'Full stack React C# program for finding work as a substitute teacher',
                'Features include themes, dependency injection, notifications through email and text, and job filtering',
            ]}
        />
    </section>
);

const Experience = () => (
    <section>
        <h2 className="text-secondary font-semibold">Experience</h2>
        <div>
            <h3>Teacher | Surrey Schools District, Surrey, BC</h3>
            <p>Sep. 2022 -- Present</p>
            <ul>
                <li>Instructed a diverse range of subjects including Computer Science, Engineering, Science, and Math</li>
                <li>Collaborated with students with intricate needs to support their tailored learning objectives</li>
                <li>Assisted with the Bases program, aiding students with learning and physical disabilities</li>
            </ul>
        </div>
        <div>
            <h3>Education Assistant | Pacific Academy, Surrey, BC</h3>
            <p>Sep. 2018 -- June 2021</p>
            <ul>
                <li>Adapted courses during COVID-19 by incorporating a self-made website, YouTube lessons, and online sessions</li>
                <li>Promoted inclusivity by offering personalized, one-on-one support to students with diverse needs</li>
            </ul>
        </div>
        <div>
            <h3>Agriculture Lab Technician | SGS Canada, Burnaby, BC</h3>
            <p>Aug. 2017 -- Sep. 2018</p>
            <ul>
                <li>Automated a manual data entry task, reducing processing time from 3 days to 20 minutes</li>
                <li>Delivered protocol-adhered samples for analysis with close to a 100% punctuality rate</li>
            </ul>
        </div>
        <div>
            <h3>Food Residue Technician | Maxxam Analytics, Burnaby, BC</h3>
            <p>May 2015 -- Jan. 2016</p>
            <ul>
                <li>Worked independently and efficiently to deliver sample results within a client's specified timeframe</li>
                <li>Experienced in equipment maintenance, troubleshooting, and precise protocol adherence</li>
            </ul>
        </div>
    </section>
);

const TechnicalSkills = () => (
    <section>
        <h2 className="text-secondary font-semibold">Technical Skills</h2>
        <ul>
            <li><strong>Programming languages:</strong> C#, SQL (MSSQL, SQLite), JavaScript, HTML, CSS</li>
            <li><strong>Frameworks:</strong> React, ASP.NET Core, Microsoft MAUI, Node.js, Angular, TypeScript</li>
            <li><strong>Developer Tools:</strong> Git, VS Code, Visual Studio, Rider, Postman, AWS CLI, Azure CLI</li>
            <li><strong>Libraries:</strong> Selenium, .NET Community Toolkit, Entity Framework, Swagger, Tailwind, Mantine, DaisyUI</li>
            <li><strong>Concepts:</strong> OOP, Version Control Systems, Software Architecture</li>
        </ul>
    </section>
);