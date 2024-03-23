import React from 'react';
import { Document, Page } from 'react-pdf';

function Resume({ pdfURL }) {
  return (
    <div>
      <Document fileName={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;
