const allBooks = [
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1720313229i/968.jpg",
    alreadyRead: true
  },
  {
    title: "Your Second Life Begins When You Realize You Only Have One",
    author: "Raphaëlle Giordano",
    image: "https://mc-static.maarifculture.com/product/9782266270021-ta-deuxieme-vie-commence-quand-tu-comprends-que-tu-nen-as-quune.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach((book) => {
  const divBook = document.createElement("div");
  divBook.classList.add("book");

  const title = document.createElement("h3");
  title.textContent = `${book.title} written by ${book.author}`;

  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px"; 

  
  if (book.alreadyRead) {
    title.style.color = "red";   }

  divBook.append(title, img);
  section.appendChild(divBook);
});