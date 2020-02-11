const username = document.getElementById("username");
console.dir(username);

const validateUsername = event => {
  const regex = /\d\w\W+/g;
  const inputVal = event.target.value;
  if (regex.test(inputVal)) {
    //change color of border of green
    //display a positive message saying username accepted
  } else {
    //change color of border to red
    //display a negative red message to say that it is invalid
  }
};

username.addEventListener("change", validateUsername);
