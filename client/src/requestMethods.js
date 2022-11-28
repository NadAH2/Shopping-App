import axios from "axios";
export const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjhhN2JhNDJhYTg1NzlmNjc2M2FhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODU1MzY3MSwiZXhwIjoxNjY4OTEzNjcxfQ.1XpvH5gfeOczedbJ7VE5lNXCDVgj1_6UGVrqRcu49c4";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
