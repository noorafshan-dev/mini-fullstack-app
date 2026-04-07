if (!req.body.col1) {
    return res.status(400).json({ error: "col1 is required" });
  }