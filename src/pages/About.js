import AboutMe from "../components/AboutMe";
import EducationHistory from "../components/EducationHistory";
import WorkHistory from "../components/WorkHistory";
import Resume from "../components/Resume";

export default function About() {
    return (
        <div className="aboutMe">
            <AboutMe />
            <hr />
            <EducationHistory />
            <hr />
            <WorkHistory />
            <hr />
            <Resume />
        </div>
    )
}