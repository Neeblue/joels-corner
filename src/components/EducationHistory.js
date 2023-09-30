import Collapsible from "react-collapsible";

export default function EducationHistory() {    
    return (
        <div>
            <h1 className="title">Education History</h1>
            <Collapsible trigger="(click to expand)">
                <h3 className="header">University of British Columbia</h3>
                <h4 className="sub-header">2015 - 2019</h4>
                <div className="description">
                    Description of the UBC history
                </div>
            </Collapsible>
        </div>  
    );
}