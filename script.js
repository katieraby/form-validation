const username = document.getElementById("username");
//console.dir(username);
const usernameLabel = document.querySelectorAll("label")[0];
//console.dir(usernameLabel);
const validateUsername = event => {
  const regex = /\d\w\W+/g;
  const inputVal = event.target.value;

  if (regex.test(inputVal)) {
    event.target.classList.add("valid-input");
    event.target.classList.remove("invalid-input");
    const validMessage = document.createElement("p");
    validMessage.classList.add("valid-p");
    validMessage.innerText = "Great! username is available";
    usernameLabel.appendChild(validMessage);
  } else {
    event.target.classList.add("invalid-input");
    event.target.classList.remove("valid-input");
    const invalidMessage = document.createElement("p");
    invalidMessage.classList.add("invalid-p");
    invalidMessage.innerText = "Username is not available";
    usernameLabel.appendChild(invalidMessage);
  }
};

const removeMessages = event => {
  const removeValid = document.getElementById("valid-input");
  const removeInvalid = document.getElementById("invalid-input");
  usernameLabel.removeChild(removeValid);
  usernameLabel.removeChild(removeInvalid);
};

username.addEventListener("change", validateUsername);
username.addEventListener("focus", removeMessages);
