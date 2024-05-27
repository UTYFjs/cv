import React from 'react';
import { Document, Page } from 'react-pdf';
import PDF from '~/assets/CV_Suhakou_Henadzi_Frontend_05.2024_RU.pdf';
export const PDFViewer = () => {
  const pdfURL = '/assets/CV_Suhakou_Henadzi_Frontend_05.2024_RU.pdf';
  return (
    <div>
      {/* <iframe
        //src="https://drive.google.com/file/d/1f69ssc5raMnJPZ1NW4Iul66N7JAbEcW8/view?usp=sharing"
        src="/CV_Suhakou_Henadzi_Frontend_05.2024_RU.pdf"
        width="100%"
        height="100%"
      /> */}
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
