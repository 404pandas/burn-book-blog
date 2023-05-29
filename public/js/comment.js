const commentFormHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const postBody = document.querySelector(
    'textarea[name="comment-body"]'
  ).value;

  if (postBody) {
    postBody;
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        postId,
        postBody,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
