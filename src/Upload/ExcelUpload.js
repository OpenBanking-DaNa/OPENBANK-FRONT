import React, { useCallback, useState } from 'react';
import MenuBar from '../Main/MenuBar';
import ExcelCss from './ExcelUpload.module.css';
import * as XLSX from 'xlsx';

function ExcelUpload() {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);

    const handleDrop = useCallback(async (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const reader = new FileReader();

            reader.onload = async (e) => {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: "array", bookVBA: true });
                    const sheet = workbook.Sheets[workbook.SheetNames[0]];
                    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                    setUploadedFile({ file, jsonData });
                } catch (error) {
                    console.error('Excel 파일을 읽는 중 오류 발생:', error);
                }
            };

            reader.readAsArrayBuffer(file);
        }
    }, []);

    const toggleRow = (rowIndex) => {
        if (selectedRows) {
            setSelectedRows([]);
        } else {
            setSelectedRows(uploadedFile.jsonData.slice(1).map((_, index) => index));
        }
        setSelectedRows(!selectedRows);
    };

    const toggleColumn = (columnIndex) => {
        if (selectedColumns) {
            setSelectedColumns([]);
        } else {
            setSelectedColumns(uploadedFile.jsonData[0].map((_, index) => index));
        }
        setSelectedColumns(!selectedColumns);
    };

    return (
        <section>
            <h2>파일 업로드</h2>
            <input
                className={ExcelCss.input}
                type="file"
                accept=".xlsx, .xls, .csv"
                onChange={(e) => handleDrop(e.target.files)}
            />
            {uploadedFile && (
                <div>
                    <h3>업로드된 데이터:</h3>
                    <table className={ExcelCss.table}>
                        <thead>
                            <tr>
                                <th>
                                    <input
                                        type="checkbox"
                                        checked={selectedColumns}
                                        onChange={toggleColumn}
                                    />
                                    선택
                                </th>
                                {uploadedFile.jsonData[0].map((header, columnIndex) => (
                                    <th key={columnIndex}>
                                        <input
                                            type="checkbox"
                                            checked={selectedColumns.includes(columnIndex)}
                                            onChange={() => toggleColumn(columnIndex)}
                                        />
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {uploadedFile.jsonData.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(rowIndex)}
                                            onChange={() => toggleRow(rowIndex)}
                                        />
                                    </td>
                                    {row.map((cell, columnIndex) => (
                                        <td
                                            key={columnIndex}
                                            onClick={() => toggleRow(rowIndex)}
                                            className={
                                                selectedRows.includes(rowIndex) && selectedColumns.includes(columnIndex)
                                                    ? 'selected'
                                                    : ''
                                            }
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

export default ExcelUpload;
