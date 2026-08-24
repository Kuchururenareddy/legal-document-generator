"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function MyVault() {
  const router = useRouter();
  const [notice, setNotice] = useState("");

  const savedDocs = [
    { id: 1, name: "House Sale Deed - Banjara Hills", date: "2026-01-20", status: "Draft", path: "/house-sale-deed-draft" },
    { id: 2, name: "Plot Gift Deed - Gachibowli", date: "2026-01-15", status: "Completed", path: "/gift-plot-draft" },
  ];

  return (
    <div className="ld-page px-6 py-10 md:px-10">
      <nav className="mb-8 flex items-center gap-4">
        <button type="button" className="ld-btn-primary" onClick={() => router.push("/welcome")}>
          ← Back
        </button>
        <h1 className="ld-title m-0" style={{ fontSize: 32 }}>My Saved Vault</h1>
      </nav>

      {notice && (
        <p className="mb-4 text-sm text-[#1d6b4a]" role="status">{notice}</p>
      )}

      <div className="max-w-[900px] overflow-x-auto ld-panel">
        <table className="ld-table">
          <thead>
            <tr>
              <th>Document</th>
              <th>Modified</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {savedDocs.map((doc) => (
              <tr key={doc.id}>
                <td className="font-semibold text-[#0b1f3a]">{doc.name}</td>
                <td>{doc.date}</td>
                <td>
                  <span className={doc.status === "Completed" ? "ld-status ld-status-done" : "ld-status ld-status-draft"}>
                    {doc.status}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="ld-btn-outline"
                    onClick={() => {
                      setNotice("Opening saved draft…");
                      router.push(doc.path);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
