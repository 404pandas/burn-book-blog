const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameElement = document.querySelector("#username-input-signup");
  const passwordElement = document.querySelector("#password-input-signup");

  const response = await fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username: usernameElement.value,
      password: passwordElement.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up, please try again");
  }
};
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
