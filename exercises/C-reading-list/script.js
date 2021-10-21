function readingList(books) {
  // Write your code here...
  let bookList = document.createElement("ul");
  books.forEach((book) => {
    let bookDisplay = document.createElement("li");
    let bookDetails = document.createElement("p");
    let bookImage = document.createElement("img");
    bookImage.src = book.bookCover;
    bookDetails.innerText = `${book.title} by ${book.author}`;
    bookDisplay.append(bookDetails, bookImage);
    bookList.append(bookDisplay);
    if (book.alreadyRead) {
      bookDisplay.style.backgroundColor = "green";
    } else bookDisplay.style.backgroundColor = "red";
  });

  let content = document.getElementById("content");
  content.appendChild(bookList);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCover: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCover: "https://blackwells.co.uk/jacket/l/9780241956052.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCover: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
