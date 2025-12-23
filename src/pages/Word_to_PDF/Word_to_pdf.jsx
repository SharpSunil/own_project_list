import React, { useState } from "react";
import "./word.scss";
import { renderAsync } from "docx-preview";
import { jsPDF } from "jspdf";

const Word_to_pdf = () => {
  const [htmlContent, setHtmlContent] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file || !file.name.endsWith(".docx")) {
      alert("Please upload a .docx file");
      return;
    }

    const container = document.createElement("div");
    await renderAsync(file, container);
    setHtmlContent(container.innerHTML);
  };

  const convertToPdf = () => {
    if (!htmlContent) {
      alert("Please upload a Word file first");
      return;
    }

    const pdf = new jsPDF("p", "pt", "a4");

    pdf.html(htmlContent, {
      x: 20,
      y: 20,
      width: 555,
      callback: function (doc) {
        doc.save("Word-to-PDF.pdf");
      },
    });
  };

  return (
    <div className="word-pdf-parent parent">
      <div className="word-pdf-cont">
        <h1>Word to PDF Converter</h1>

        <div className="main-box">
          <div className="word-left">
            <h2>Convert Word Documents to PDF</h2>
            <p>Upload a DOCX file and download it as PDF.</p>

            <input
              type="file"
              accept=".docx"
              onChange={handleFileChange}
            />

            <button onClick={convertToPdf}>
              Convert to PDF
            </button>
          </div>

          <div className="word-right">
            {htmlContent ? (
              <div
                className="preview-box"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            ) : (
              <p>Word preview will appear here</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Word_to_pdf;
