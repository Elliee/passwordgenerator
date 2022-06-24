let btnEl = document.getElementById("btn");
let pwEl = document.getElementById("password");
let copyPasswordBtn = document.getElementById("copy-pw");
pwEl.style.display = "none";
copyPasswordBtn.style.display = "none";

function generatePassword() {
  let characters = "0123456789!@#$%^&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  for (i = 0; i <= 11; i++) {
    let randNum = Math.floor(Math.random() * characters.length);
    password += characters.slice(randNum, randNum + 1);
    pwEl.value = password;
  }
  pwEl.style.display = "block";
  copyPasswordBtn.style.display = "block";
}

btnEl.addEventListener('click', generatePassword)

function copyPassword() {
  let passwordText = document.getElementById("password");

  passwordText.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}

copyPasswordBtn.addEventListener('click', copyPassword)
