const db = require("../models/db");

// GET ALL
exports.getAll = (req, res) => {
  // db.all("SELECT * FROM situations", [], (err, rows) => {
  db.all("SELECT * FROM situations ORDER BY id ASC", [], (err, rows) => {
    if (err) return res.status(500).json(err);

    const parsed = rows.map((r) => ({
      ...r,
      data: JSON.parse(r.data),
    }));

    res.json(parsed);
  });
};

// GET BY ID
exports.getOne = (req, res) => {
  db.get(
    "SELECT * FROM situations WHERE id = ?",
    [req.params.id],
    (err, row) => {
      if (err) return res.status(500).json(err);
      if (!row) return res.status(404).json({ message: "Not found" });

      row.data = JSON.parse(row.data);
      res.json(row);
    }
  );
};

// CREATE
exports.create = (req, res) => {
  const data = JSON.stringify(req.body);

  db.run("INSERT INTO situations (data) VALUES (?)", [data], function (err) {
    if (err) return res.status(500).json(err);

    res.json({ id: this.lastID });
  });
};

// UPDATE
exports.update = (req, res) => {
  const data = JSON.stringify(req.body);

  db.run(
    "UPDATE situations SET data = ? WHERE id = ?",
    [data, req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({ updated: this.changes });
    }
  );
};

// DELETE
exports.remove = (req, res) => {
  db.run(
    "DELETE FROM situations WHERE id = ?",
    [req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);

      res.json({ deleted: this.changes });
    }
  );
};
