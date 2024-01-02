import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    const scale = window.innerWidth < 768 ? 1 : 1.5;
    return (
        <>
            <div className=" max-w-full mx-auto md:m-4 md:mx-auto max-h-full overflow-auto w-[612px] md:w-[918px]">
                <Document file={'/Resume.pdf'}>
                    <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        renderForms={false}
                        scale={scale}
                    />
                </Document>
            </ div>
        </>
    )
}