import React from 'react'

const Pdf_to_powerpoint = () => {
  return (
    <>
      <div className="pdf-to-powerpoint parent">
        <div className="pdf-to-powerpoint-cont cont">

            <h1>PDF to PowerPoint Converter</h1>

            <div className="pdf-left">
                <h2>Convert PDF to PowerPoint Easily</h2>
                <p>Our PDF to PowerPoint converter allows you to quickly and easily convert your PDF files into editable PowerPoint presentations. Simply upload your PDF file, and our tool will handle the rest.</p>
                
            </div>

            <div className="pdf-right">
                <h3>Upload your PDF file</h3>
                <input type="file" />
                <button>Convert to PowerPoint</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Pdf_to_powerpoint
