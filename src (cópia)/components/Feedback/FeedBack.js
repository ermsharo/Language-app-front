import Alert from "@mui/material/Alert";

export default function Feedback({ status, success, display }) {
  if (!display) return <></>;
  return <Alert severity={success ? "success" : "error"}>{status}</Alert>;
}
