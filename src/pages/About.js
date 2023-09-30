import AboutMe from "../components/AboutMe";
import EducationHistory from "../components/EducationHistory";
import WorkHistory from "../components/WorkHistory";
import Resume from "../components/Resume";
import './About.css';

export default function About() {
    return (
        <div>
            <div className="intro">This section contains information about myself. Click on a section to expand it.</div>
            <div className="aboutMe">
                <AboutMe />
                <hr />
                <EducationHistory />
                <hr />
                <WorkHistory />
                <hr />
                <Resume />
            </div>
        </div>
    )
}