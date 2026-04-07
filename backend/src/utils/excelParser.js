const XLSX = require("xlsx");
const db = require("../models/db");

const importExcel = (filePath) => {
  db.run("DELETE FROM situations"); // clear old data
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet);

  db.serialize(() => {
    db.run("DELETE FROM situations");

    data.forEach((row) => {
      db.run(`INSERT INTO situations (data) VALUES (?)`, [JSON.stringify(row)]);
    });
  });

  console.log("Excel data imported!");
};

module.exports = importExcel;
