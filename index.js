function formatCep(value){
  return String(value).replace(/\D/g, "").splice(0, 8).replace(/(\d{5})(\d)/, "$1-$2")
}

console.log(formatCep("654600001273"))
