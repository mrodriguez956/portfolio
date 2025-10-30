document.addEventListener("DOMContentLoaded", () => {
  const projectTapes = document.querySelectorAll(".tape");
  const projectPreview = document.querySelector(
    "#project-preview",
  ) as HTMLImageElement;

  if (projectTapes?.length > 0 && projectPreview) {
    projectTapes.forEach((tape) => {
      tape.addEventListener("click", (e) => {
        const clickedTape = e.currentTarget as HTMLImageElement;
        const previewSrc = clickedTape.dataset.preview;

        console.log("clicked " + clickedTape);

        if (previewSrc) {
          projectPreview.src = previewSrc;
        }
      });
    });
  }
});
