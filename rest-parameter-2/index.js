// complete this REST Parameter challenge (07/02/2024)
function getLabelsHtml(text, sender, objects) {
  // Use map to generate an array of HTML strings
  const htmlArray = objects.map(
    (object) => `
      <div class="label-card">
          <p>Dear ${object.name} </p>
          <p>${text}</p>
          <p>Best wishes,</p>
          <p>${sender}</p>
      </div>`
  );

  // Use join to concatenate the array into a single string
  return htmlArray.join("");
}

const text = "Thank you for all your hard work throughout the year!";
const sender = "James";

document.getElementById("labels-container").innerHTML = getLabelsHtml(
  text,
  sender,
  [{ name: "Sally" }, { name: "Mike" }, { name: "Rob" }, { name: "Harriet" }]
);
