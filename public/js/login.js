const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameElement = document
    .querySelector("#username-input-login")
    .value.trim();
  const passwordElement = document
    .querySelector("#password-input-login")
    .value.trim();

  const response = await fetch("/api/user/login", {
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
    alert("Failed to login");
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
