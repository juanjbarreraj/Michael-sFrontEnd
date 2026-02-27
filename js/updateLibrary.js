const formEl = document.querySelector(".form");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  const id = data.id;
  delete data.id;

  const res = await fetch(`http://localhost:8004/api/v1/library/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    $.toaster({ priority: "danger", title: "Error", message: "Update failed" });
    return;
  }

  $.toaster({ priority: "success", title: "Library", message: "Updated" });
});