const formEl = document.querySelector(".form");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  // Basic validation
  if (!data.book_type || !data.book_name) {
    $.toaster({ priority: "danger", title: "Error", message: "Missing fields" });
    return;
  }

  const res = await fetch("http://localhost:8004/api/v1/library", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    $.toaster({ priority: "danger", title: "Error", message: "Add failed" });
    return;
  }

  $.toaster({ priority: "success", title: "Library", message: "Book added" });
  formEl.reset();
});


