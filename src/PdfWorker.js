import * as pdfjsLib from "pdfjs-dist";

// ✅ Vite + pdfjs v5 compatible worker
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.js",
  import.meta.url
).toString();

export default pdfjsLib;
