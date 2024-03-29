import React, { useEffect } from "react";
import ResumePDF from './../Heikkinen_Resume.pdf';

import { Document, Page, pdfjs } from "react-pdf";

import "../styles/Resume.css";    

function Resume(props) {

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, []);

	return (
		<div className="column">	
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h2>Résumé</h2>
                    </div>
                    <div className="column">
                        <a href="../" className="button resume-back float-right">
                            Back
                        </a>
                        <a href={ResumePDF} download rel="noreferrer" className="button button-outline resume-download float-right">
                            PDF Download
                        </a>
                    </div>
                </div>
            </div>
			<div className="container">
                <div className="row">
                    <div className="column">
                        <Document file={{url: ResumePDF}} className="resume-pdf">
                            <Page pageNumber={1} />
                        </Document>
                    </div>
                </div>
			</div>
		</div>
	)
}

export default Resume;
