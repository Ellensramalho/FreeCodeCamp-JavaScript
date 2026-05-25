function maskEmail(email) {
  let [nome, dominio] = email.split("@");

  return nome[0] +
         "*".repeat(nome.length - 2) +
         nome[nome.length - 1] +
         "@" +
         dominio;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));