import { useEffect, useState } from "react";
import {
  getSituations,
  createSituation,
  updateSituation,
  deleteSituation,
} from "./services/api";

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    col1: "",
    col2: "",
    col3: "",
    col4: "",
    col5: "",
    col6: "",
  });
  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const res = await getSituations();
    console.log("API DATA:", res.data);
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update
  const handleSubmit = async () => {
    if (editingId) {
      await updateSituation(editingId, form);
      setEditingId(null);
    } else {
      await createSituation(form);
    }

    setForm({
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    });

    fetchData();
  };

  // Edit click
  const handleEdit = (item) => {
    setForm({
      col1: item.data?.col1 || "",
      col2: item.data?.col2 || "",
      col3: item.data?.col3 || "",
      col4: item.data?.col4 || "",
      col5: item.data?.col5 || "",
      col6: item.data?.col6 || "",
    });

    setEditingId(item.id);
  };

  // Delete
  const handleDelete = async (id) => {
    await deleteSituation(id);
    fetchData();
  };

  //Styling

  const thStyle = {
    padding: "12px",
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "10px",
    textAlign: "center",
  };

  const editBtn = {
    background: "#2196f3",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    marginRight: "5px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const deleteBtn = {
    background: "#f44336",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f5f7fb",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "blueviolet",
            fontWeight: "bold",
          }}
        >
          Situations Dashboard
        </h2>

        <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>
          {editingId ? "Edit your data" : "Add new data from Excel"}
        </p>

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 20px",
              background: editingId ? "#ff9800" : "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>

        {/* FORM */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            marginBottom: "20px",
            gap: "12px",
          }}
        >
          <input
            name="col1"
            placeholder="Col1"
            value={form.col1 || ""}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              outline: "none",
            }}
          />
          <input
            name="col2"
            placeholder="Col2"
            value={form.col2 || ""}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              outline: "none",
            }}
          />
          <input
            name="col3"
            placeholder="Col3"
            value={form.col3 || ""}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              outline: "none",
            }}
          />
          <input
            name="col4"
            placeholder="Col4"
            value={form.col4 || ""}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              outline: "none",
            }}
          />
          <input
            name="col5"
            placeholder="Col5"
            value={form.col5}
            onChange={handleChange || ""}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              outline: "none",
            }}
          />
          <input
            name="col6"
            placeholder="Col6"
            value={form.col6 || ""}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              outline: "none",
            }}
          />
        </div>

        {/* TABLE */}
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead style={{ background: "#4caf50", color: "#fff" }}>
              <tr style={{ cursor: "pointer" }}>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Col1</th>
                <th style={thStyle}>Col2</th>
                <th style={thStyle}>Col3</th>
                <th style={thStyle}>Col4</th>
                <th style={thStyle}>Col5</th>
                <th style={thStyle}>Col6</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan="8"
                    style={{ textAlign: "center", padding: "15px" }}
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td style={tdStyle}>{item.id}</td>
                    <td style={tdStyle}>{item.data?.col1}</td>
                    <td style={tdStyle}>{item.data?.col2}</td>
                    <td style={tdStyle}>{item.data?.col3}</td>
                    <td style={tdStyle}>{item.data?.col4}</td>
                    <td style={tdStyle}>{item.data?.col5}</td>
                    <td style={tdStyle}>{item.data?.col6}</td>

                    <td style={tdStyle}>
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          onClick={() => handleEdit(item)}
                          style={editBtn}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          style={deleteBtn}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
