import type { CSSProperties } from "react";

export const pageWrap: CSSProperties = {
  minHeight: "100vh",
  position: "relative",
};

export const panelStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "36px",
  borderRadius: "8px",
  width: "100%",
  maxWidth: "1120px",
  boxShadow: "0 10px 30px rgba(11, 31, 58, 0.08)",
  border: "1px solid #d5dbe6",
};

export const sectionBox: CSSProperties = {
  padding: "18px",
  backgroundColor: "#f8f7f4",
  borderRadius: "6px",
  border: "1px solid #d5dbe6",
};

export const sectionTitle: CSSProperties = {
  fontSize: "13px",
  color: "#0b1f3a",
  marginBottom: "12px",
  fontWeight: 700,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

export const labelStyle: CSSProperties = {
  fontSize: "12px",
  fontWeight: 700,
  color: "#5c6776",
  marginBottom: "6px",
  display: "block",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

export const inputGroup: CSSProperties = {
  marginBottom: "12px",
};

export const inputStyle: CSSProperties = {
  width: "100%",
  padding: "11px 12px",
  borderRadius: "4px",
  border: "1px solid #d5dbe6",
  fontSize: "15px",
  outline: "none",
  backgroundColor: "#fbfbfd",
  color: "#142033",
};

export const primaryBtnStyle: CSSProperties = {
  width: "100%",
  padding: "13px 18px",
  backgroundColor: "#0b1f3a",
  color: "white",
  borderRadius: "4px",
  border: "1px solid #0b1f3a",
  fontWeight: 650,
  fontSize: "15px",
  cursor: "pointer",
};

export const submitBtn: CSSProperties = {
  ...primaryBtnStyle,
  marginTop: "18px",
};

export const btnStyle: CSSProperties = {
  padding: "10px 16px",
  borderRadius: "4px",
  border: "1px solid #0b1f3a",
  cursor: "pointer",
  fontWeight: 650,
  color: "white",
  backgroundColor: "#0b1f3a",
};

export const backBtnStyle: CSSProperties = {
  padding: "8px 14px",
  borderRadius: "4px",
  border: "1px solid #d5dbe6",
  backgroundColor: "white",
  cursor: "pointer",
  fontWeight: 650,
  fontSize: "14px",
  color: "#0b1f3a",
};

export const btnBack: CSSProperties = {
  ...backBtnStyle,
};

export const btnContinue: CSSProperties = {
  padding: "13px 28px",
  backgroundColor: "#0b1f3a",
  color: "white",
  border: "1px solid #0b1f3a",
  borderRadius: "4px",
  fontSize: "16px",
  fontWeight: 650,
  cursor: "pointer",
};

export const docSheet: CSSProperties = {
  backgroundColor: "white",
  padding: "56px 48px",
  border: "1px solid #cfc6b8",
  borderRadius: "4px",
  fontFamily: "var(--font-serif), Times New Roman, serif",
  color: "#1a1a1a",
};

export const previewBox: CSSProperties = {
  backgroundColor: "white",
  border: "1px solid #cfc6b8",
  padding: "48px",
  height: "550px",
  overflowY: "auto",
  borderRadius: "4px",
  lineHeight: 1.85,
  color: "#1a1a1a",
  fontSize: "17px",
  textAlign: "justify",
  fontFamily: "var(--font-serif), Times New Roman, serif",
  whiteSpace: "pre-line",
};

export const mainCardStyle: CSSProperties = {
  position: "relative",
  backgroundColor: "#ffffff",
  padding: "28px 22px",
  borderRadius: "8px",
  width: "280px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  border: "1px solid #d5dbe6",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxShadow: "0 8px 24px rgba(11, 31, 58, 0.06)",
};

export const cardStyle: CSSProperties = {
  backgroundColor: "white",
  padding: "32px 28px",
  borderRadius: "8px",
  border: "1px solid #d5dbe6",
  cursor: "pointer",
  transition: "all 0.2s ease",
};

export const iconBadgeStyle: CSSProperties = {
  fontSize: "36px",
  marginBottom: "12px",
};

export const cardTextStyle: CSSProperties = {
  fontSize: "20px",
  fontWeight: 700,
  color: "#0b1f3a",
  margin: 0,
};

export const cardSubTextStyle: CSSProperties = {
  fontSize: "13px",
  color: "#5c6776",
  marginTop: "8px",
  fontWeight: 500,
};

export const successToast: CSSProperties = {
  position: "fixed",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#e7f4ec",
  color: "#1d6b4a",
  padding: "12px 22px",
  borderRadius: "4px",
  border: "1px solid #b7d7c4",
  fontWeight: 650,
  zIndex: 3000,
};
