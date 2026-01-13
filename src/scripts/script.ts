document.addEventListener("DOMContentLoaded", () => {
  const projectTapes = document.querySelectorAll(".tape");
  const projectPreview = document.querySelector(
    "#project-preview",
  ) as HTMLImageElement;
  const projectPreviewLink = document.querySelector(
    "#project-preview-link",
  ) as HTMLAnchorElement;

  if (projectTapes?.length > 0 && projectPreview && projectPreviewLink) {
    // Set initial preview to the first project
    const firstTape = projectTapes[0] as HTMLElement;
    const initialPreviewSrc = firstTape.dataset.preview;
    const initialLinkSrc = firstTape.dataset.link;

    if (initialPreviewSrc) {
      projectPreview.src = initialPreviewSrc;
    }
    if (initialLinkSrc) {
      projectPreviewLink.href = initialLinkSrc;
    }

    projectTapes.forEach((tape) => {
      tape.addEventListener("click", (e) => {
        const clickedTape = e.currentTarget as HTMLImageElement;
        const previewSrc = clickedTape.dataset.preview;
        const linkSrc = clickedTape.dataset.link;

        console.log("clicked " + clickedTape);

        if (previewSrc) {
          projectPreview.src = previewSrc;
        }
        if (linkSrc) {
          projectPreviewLink.href = linkSrc;
        }
      });
    });
  }
});

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
