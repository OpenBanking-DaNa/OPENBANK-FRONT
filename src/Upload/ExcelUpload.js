import React, { useCallback, useState } from 'react';
import MenuBar from '../Main/MenuBar';
import ExcelCss from './ExcelUpload.module.css';
import * as XLSX from 'xlsx';

function ExcelUpload() {

    const [uploadedFile, setUploadedFile] = useState(null);

    const handleDrop = useCallback(async (acceptedFiles) => {

        if (acceptedFiles.length > 0) {

            const file = acceptedFiles[0];
            const reader = new FileReader();
            reader.onload = async (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: "array", bookVBA: true });

                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet);

                setUploadedFile({ file, jsonData });
            };

            reader.readAsArrayBuffer(file);
        }
    }, []);


    return (
        <section>
            <MenuBar />
            <h2> 파일 업로드 </h2>
            <input className={ExcelCss.input}
                type='file'
                accept='.xlsx, .xls, .csv'
                onChange={(e) => handleDrop(e.target.files)} />
            {uploadedFile && (
                <div>
                    <h3>업로드 파일</h3>
                    <p>{JSON.stringify(uploadedFile.jsonData)}</p>
                </div>
            )}
        </section>
    );
}

export default ExcelUpload;
