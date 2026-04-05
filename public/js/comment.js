const commentFormHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const postBody = document.querySelector(
    'textarea[name="comment-body"]'
  ).value;

  if (postBody) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        post_id: postId,
        comment_text: postBody,
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

document.querySelectorAll(".delete-comment-btn").forEach((btn) => {
  btn.addEventListener("click", async function () {
    const commentId = this.dataset.id;

    await fetch(`/api/comment/${commentId}`, { method: "DELETE" });

    document.querySelector(`[data-comment-id="${commentId}"]`).remove();
  });
});
