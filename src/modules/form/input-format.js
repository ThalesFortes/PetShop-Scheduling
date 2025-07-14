const phoneInput = document.getElementById("phone")

phoneInput.addEventListener("input", (e) => {
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