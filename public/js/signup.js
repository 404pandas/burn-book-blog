const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameElement = document
    .querySelector("#username-input-signup")
    .value.trim();
  const passwordElement = document
    .querySelector("#password-input-signup")
    .value.trim();

  const response = await fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      usernameElement,
      passwordElement,
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
