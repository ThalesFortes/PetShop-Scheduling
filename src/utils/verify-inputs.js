export function verifyInputs(value) {
  if (!value || value.trim().length === 0) {
    throw new Error("Preencha todos os campos corretamente.");
  }
}
