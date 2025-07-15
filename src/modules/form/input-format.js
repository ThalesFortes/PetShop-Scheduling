
const hourInput = document.getElementById("hour-service")

hourInput.addEventListener("input", () => {
  const value = hourInput.value // exemplo: "13:30"

  const [hour, minute] = value.split(":").map(Number)

  if (minute !== 0) {
    hourInput.setCustomValidity("Apenas horários cheios são permitidos, como 13:00, 14:00, etc.")
  } else {
    hourInput.setCustomValidity("")
  }

  hourInput.reportValidity()
})


export function formatPhoneMask (phone) {
  phone.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, ""); 

  if (value.length > 0) {
    value = value.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4}).*/, (match, ddd, d9, part1, part2) => {
      let result = "";
      if (ddd) result += `(${ddd}`;
      if (ddd.length === 2) result += ") ";
      if (d9) result += `${d9} `;
      if (part1) result += `${part1}`;
      if (part2) result += `-${part2}`;
      return result;
    });
  }
    e.target.value = value;
  });
}


export function verifyHasNumber (input){
  const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/
  if (!nameRegex.test(input)) throw new Error("Nome do tutor inválido")
  if (!nameRegex.test(input)) throw new Error("Nome do pet inválido")
}


