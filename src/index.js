function displayBrandName(response) {
  console.log("brand name generated");
  new Typewriter("#brand-name-result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function generateBrandName(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-input-text");
  let apiKey = "f31to9e9bf26febbda90c960340f83b6";
  let prompt = `User instructions: Generate 2 creative, memorable business names with matching taglines and rationale blurbs based on ${userInstructions.value}`;
  let context = `You are a great business name and tagline generator. Generate 2 business names with matching taglines and rationale blurbs. The names should feel fresh and work with the business. 
For each entry, use a different generation technique each time:
- Some playful, energetic names,
- Some minimal/elegant names,
- Some invented words that sound professional or modern.
Format each in simple HTML tags. Do NOT include any explanations, extra sentences, markdown formatting, or code fences. the name, tagline and rationale blurb should be in different lines:
[name - add class "brand-name" to the HTML]
[tagline - change the line. Short, punchy tagline that complements the name - add class "brand-tagline" to the HTML]
[rationale blurb - change the line. Short and concise explanation about the name chosen. 1-2 lines only - add class "brand-tagline" to the HTML]
Separate the 2 choices with a line.
Aim for names that are short (1-3 words), easy to spell, and sound like they could actually exist based on the business category.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating brand name");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayBrandName);
}

let brandNameElement = document.querySelector("#brand-name-form");
brandNameElement.addEventListener("submit", generateBrandName);
