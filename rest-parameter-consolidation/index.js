// REST CONSOLIDATION - USING THE REST PARAMETER TO LIST OBJECT ITEMS

function getExpanseBooks(series, ...objects) {
  const expanseBooks = objects.map((book) => {
    return `
    <div>
    <p>Book Title: ${book.title}</p>
    <p>Series: ${series}</p>
    </div>
    `;
  });

  return expanseBooks.join(" ");
}

const series = "The Expanse";

document.getElementById("book-shelf").innerHTML = getExpanseBooks(
  series,
  { title: "Leviathan Wakes" },
  { title: "Caliban's War" },
  { title: "Abaddon's Gate " },
  { title: "Cibola Burn" },
  { title: "Nemesis Games" },
  { title: "Babylon's Ashes " },
  { title: "Persepolis Rising" },
  { title: "Tiamat's Wrath" },
  { title: "Leviathan Falls" }
);
