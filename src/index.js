function displayBrandName(response) {
  console.log("brand name generated");
  new Typewriter("#brand-name-result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function generateBrandName(event) {
  event.preventDefault();

  let apiKey = "f31to9e9bf26febbda90c960340f83b6";
  let prompt = `User instructions: Generate 2 creative, memorable business names with matching taglines and include rationale blurbs about your choices. Name should match the kind of business the user added to the instruction`;
  let context = `You are a great business name and tagline generator. Generate 2 creative, memorable business names with matching taglines and rationale blurbs. The names should feel fresh and should match the kind of business the user added to the form.
For each entry, use different generation techniques each time:
- Some blended/mashup words (e.g., combining two real words in unexpected ways)
- Some invented words that sound professional or modern
- Some playful, energetic names
- Some minimal/elegant names
- Some that sound tech-forward
Format each in simple HTML tags. Do NOT include any explanations, extra sentences, markdown formatting, or code fences. the name, tagline and rationale blurb should be in different lines:
[name - add class "brand-name" to the HTML]
[tagline - change the line. Short, punchy tagline that complements the name - add class "brand-tagline" to the HTML]
[rationale blurb - change the line. Short and concise explanation about the name chosen. 1-2 lines only - add class "brand-tagline" to the HTML]
Separate the 2 choices with a line.
Make the taglines actionable or benefit-focused, not just descriptive. Avoid generic corporate speak. Aim for names that are short (1-3 words), easy to spell, and sound like they could actually exist.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating brand name");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayBrandName);
}

let brandNameElement = document.querySelector("#brand-name-form");
brandNameElement.addEventListener("submit", generateBrandName);
