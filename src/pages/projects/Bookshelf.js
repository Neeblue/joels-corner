import jsonData from '../../projects.json';

export default function Bookshelf() {
    const project = jsonData.find(project => project.title === "Bookshelf Mobile App") ?? jsonData.projects[1];

    return (
        <div className="Bookshelf">
            <h1 className="title">{project.title}</h1>
            <div className="firstSection">
                <div className="firstParagraph">
                    A .Net MAUI variant of the Librarian project. This is a follow-along/modification of James Montemagno's Monkeys project.
<br></br><br></br>
This app has been tested on Windows and Android. It has a different display of the book details depending on the platform.  Books can be added with a search function. This app uses the Google API and the HtmlAgility package to scrape a book image and rating from Goodreads. 
<br></br><br></br>
Tapping on one of the books brings up a larger image with additional information (such as a description, rating, publisher info etc.). Books can be deleted by swiping the book to the left.
<br></br><br></br>
Additional features that are implemented:
<ui>
    <li>MVVM with dependency injection</li>
    <li>uses .Net Community Toolkit 8.1</li>
    <li>Files are stored in the cloud using Firebase (Firesharp package)</li>
</ui>
                </div>
                <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage1} alt="image missing!" />    
            </div>
            <div className="secondSection">
                <img className='detailsImage' src={process.env.PUBLIC_URL + project.detailsImage2} alt="image missing!" />
                <div className="secondParagraph">
                    <div>{project.detailsDescription1}</div>
                </div>
            </div>
        </div>
    ); /* TODO: Remove white line at bottom */
}