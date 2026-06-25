function generateBrandName(event) {
  event.preventDefault();

  new Typewriter("#brand-name-result", {
    strings: "Brand Name Tagline Rationale Blurb",
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let brandNameElement = document.querySelector("#brand-name-form");
brandNameElement.addEventListener("submit", generateBrandName);
