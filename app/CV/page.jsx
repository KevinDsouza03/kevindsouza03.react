'use client'

import Navbar from "../Navbar/Navbar.jsx"
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function CV() {
    return (
        <div className="bg-[#343434] p-5">
            <div className="bg-[#1A2421] bg-opacity-30 p-20">
                <Navbar/>
                <Document file="Kevin_Dsouza_Resume.pdf"> 
                    <Page pageNumber={1}
                        width={900}
                    />
                </Document>
            </div>
        </div>

    )

}