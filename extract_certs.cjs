const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

async function run() {
    const pdfPath = './src/components/Certificates/updated cv.pdf';
    const bytes = fs.readFileSync(pdfPath);
    const doc = await PDFDocument.load(bytes);
    const total = doc.getPageCount();
    console.log('Total pages:', total);

    for (let i = 1; i < total; i++) {
        const newDoc = await PDFDocument.create();
        const [page] = await newDoc.copyPages(doc, [i]);
        newDoc.addPage(page);
        fs.writeFileSync('./public/cert_page_' + i + '.pdf', await newDoc.save());
        console.log('Saved cert_page_' + i + '.pdf');
    }
}
run().catch(console.error);
