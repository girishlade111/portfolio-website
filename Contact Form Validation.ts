const form = document.querySelector("form")!;
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  
  // AJAX Submission
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    
    if (res.ok) {
      form.style.display = "none";
      document.getElementById("thank-you")!.style.opacity = "1";
    }
  } catch (err) {
    console.error(err);
  }
});