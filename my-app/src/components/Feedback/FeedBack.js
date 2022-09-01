import styled from "styled-components";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function CreateUser({ status, success, display }) {
  if (!display) return <></>;
  return <Alert severity={success ? "success" : "error"}>{status}</Alert>;
}
