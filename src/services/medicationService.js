import API from "./api";

export async function getAllMedications() {
  const res = await API.get("/medications");
  return res.data;
}

export async function createMedication(payload) {
  const res = await API.post("/medications", payload);
  return res.data;
}

export async function updateMedication(id, payload) {
  const res = await API.put(`/medications/${id}`, payload);
  return res.data;
}

export async function deleteMedication(id) {
  const res = await API.delete(`/medications/${id}`);
  return res.data;
}
