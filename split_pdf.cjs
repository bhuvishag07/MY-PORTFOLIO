const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

async function splitPdf() {
    const pdfBytes = fs.readFileSync('./src/data/updated cv.pdf');
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Page 1 is index 0 (CV)
    // Page 2 is index 1 (Certificate 1)
    // Page 3 is index 2 (Certificate 2)

    // Save Cert 1
    const cert1Doc = await PDFDocument.create();
    const [cert1Page] = await cert1Doc.copyPages(pdfDoc, [1]);
    cert1Doc.addPage(cert1Page);
    fs.writeFileSync('./public/certificate_1.pdf', await cert1Doc.save());

    // Save Cert 2
    const cert2Doc = await PDFDocument.create();
    const [cert2Page] = await cert2Doc.copyPages(pdfDoc, [2]);
    cert2Doc.addPage(cert2Page);
    fs.writeFileSync('./public/certificate_2.pdf', await cert2Doc.save());

    console.log("Extracted certificates.");
}

splitPdf();
