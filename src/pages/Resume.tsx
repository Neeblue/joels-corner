import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    return (
        <div className="max-w-full mx-auto max-h-full overflow-auto w-[612px]">
            <Document file={'/Resume.pdf'}>
                <Page
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    renderForms={false}       
                />
            </Document>
        </ div>
    )
}