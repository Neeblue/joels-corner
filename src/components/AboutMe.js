import Collapsible from "react-collapsible";

export default function AboutMe() {    
    return (
        <div>
            <div className="intro">This section contains information about myself. Click on a section to expand it.</div>
            <h1 className="title">About me</h1>
            <Collapsible trigger="(click to expand)">
                <h3 className="header">Avid basketball player</h3>
                <h4 className="sub-header">2015 - 2019</h4>
                <div className="description">
                    Description of the about me
                </div>
            </Collapsible>
        </div>
    );
}
