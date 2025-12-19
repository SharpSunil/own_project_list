import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import "./merge.scss";
import { FaCheck } from "react-icons/fa6";
const Merge_pdf = () => {
  const [pdf1, setPdf1] = useState(null);
  const [pdf2, setPdf2] = useState(null);
  const [pdf3, setPdf3] = useState(null);
  const [pdf4, setPdf4] = useState(null);
  const [mergedPdfUrl, setMergedPdfUrl] = useState(null);
  const [error, setError] = useState("");

  const mergePdfs = async () => {
    if (!pdf1 || !pdf2) {
      setError("PDF 1 and PDF 2 are required");
      return;
    }

    try {
      const mergedPdf = await PDFDocument.create();
      const pdfFiles = [pdf1, pdf2, pdf3, pdf4].filter(Boolean);

      for (const file of pdfFiles) {
        const buffer = await file.arrayBuffer();

        const pdf = await PDFDocument.load(buffer, {
          ignoreEncryption: true,
        });

        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach((page) => mergedPdf.addPage(page));
      }

      const bytes = await mergedPdf.save();
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setMergedPdfUrl(url);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to merge PDFs. One file may be password protected.");
    }
  };

  // helper for green tick
  const Tick = () => <span className="tick">✔</span>;

  return (
    <div className="merge-parent parent">
      <div className="merge-cont cont">
        <h2 className="heading">Merge PDF files</h2>
        <p className="desc">
          Upload minimum 2 PDFs. Optional PDFs will be merged if added.
        </p>

        <div className="left-merge-box">
          {/* LEFT SIDE */}
          <div className="upload-merge-box upload-box">
            <h3 className="upload-heading">Upload PDF files</h3>

            {/* PDF 1 */}
            <div className="upload-item">
              {pdf1 && <FaCheck />}
              <label>
                PDF 1
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setPdf1(e.target.files[0])}
              />
            </div>

            {/* PDF 2 */}
            <div className="upload-item">
              {pdf2 && <FaCheck />}
              <label>
                PDF 2 
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setPdf2(e.target.files[0])}
              />
            </div>

            {/* PDF 3 */}
            <div className="upload-item">
              {pdf3 && <FaCheck />}
              <label>
                PDF 3 
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setPdf3(e.target.files[0])}
              />
            </div>

            {/* PDF 4 */}
            <div className="upload-item">
               {pdf4 && <FaCheck />}
              <label>
                PDF 4
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setPdf4(e.target.files[0])}
              />
            </div>

            <button className="upload-btn btn" onClick={mergePdfs}>
              Merge PDFs
            </button>

            {error && <p className="error">{error}</p>}
          </div>

          {/* RIGHT SIDE */}
          <div className="right-merge-box right-box">
            <h3 className="right-heading">Preview of PDF</h3>

            {mergedPdfUrl ? (
              <iframe
                src={mergedPdfUrl}
                width="100%"
                height="500px"
                title="Merged PDF Preview"
              />
            ) : (
              <p>No merged PDF yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merge_pdf;
