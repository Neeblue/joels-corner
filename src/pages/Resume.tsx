import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {

    return (
        <div style={{ }}>
            <Document file={'/Resume.pdf'}>
                <Page pageNumber={1} renderTextLayer={false}/>
            </Document>
        </div>
    )
}