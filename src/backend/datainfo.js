

const XLSX = require("xlsx");
const fs = require("fs");

// Read the Excel file
const workbook = XLSX.readFile("C:\\Users\\isaiah.yusuf\\Desktop\\GG Rada\\EComm\\dashboard\\src\\data\\NTP Sheet.xlsx");
let i = 0
for(i; i < 6; i++){

        // Get the first sheet
    const sheetName = workbook.SheetNames[i];
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet to JSON (array of objects, using header row as keys)
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    //return jsonData;
    // [{ Party: "SMS Joy", Hours: 153 }, { Party: "Geowell", Hours: 140 }, ...]

    // Optionally save it to a .json file
    fs.writeFileSync(`output${i}.json`, JSON.stringify(jsonData, null, 2));
}
