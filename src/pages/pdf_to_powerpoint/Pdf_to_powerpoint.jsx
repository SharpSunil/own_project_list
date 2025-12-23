import React, { useState } from "react";
import "./powerpoint.scss";
import PptxGenJS from "pptxgenjs";
import pdfjsLib from "../../pdfWorker";




const Pdf_to_powerpoint = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const convertToPowerPoint = async () => {
    if (!file) {
      alert("Please upload a PDF file");
      return;
    }

    setLoading(true);

    const pptx = new PptxGenJS();
    const pdfData = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 2 });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;

      const imgData = canvas.toDataURL("image/png");

      const slide = pptx.addSlide();
      slide.addImage({
        data: imgData,
        x: 0,
        y: 0,
        w: "100%",
        h: "100%",
      });
    }

    await pptx.writeFile("PDF-to-PowerPoint.pptx");
    setLoading(false);
  };

  return (
    <div className="pdf-to-powerpoint parent">
      <div className="pdf-to-powerpoint-cont cont">
        <h1>PDF to PowerPoint Converter</h1>

        <div className="main-box">
          <div className="pdf-left">
            <h2>Convert PDF to PowerPoint Easily</h2>
            <p>
              Convert each PDF page into a PowerPoint slide.  
              (Text will not be editable.)
            </p>

            <h3>Upload your PDF file</h3>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />

            <button onClick={convertToPowerPoint} disabled={loading}>
              {loading ? "Converting..." : "Convert to PowerPoint"}
            </button>
          </div>

          <div className="pdf-right">
            <p>
              Your PowerPoint file will be downloaded automatically after conversion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf_to_powerpoint;
