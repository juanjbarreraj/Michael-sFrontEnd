new gridjs.Grid({
  search: true,
  sort: true,
  pagination: true,
  fixedHeader: true,
  height: "90%",

  columns: [
    { name: "id", width: "120px" },
    { name: "book_type", width: "200px" },
    { name: "book_name", width: "300px" },
    { name: "author", width: "200px" },
    { name: "rating", width: "120px" },
  ],

  server: {
    url: "https://michael-sbackend.onrender.com/api/v1/library",
    //url: "http://localhost:8004/api/v1/library",
    then: (data) => {
      data.sort((a, b) => b.id - a.id);
      return data.map((book) => [
        book.id,
        book.book_type,
        book.book_name,
        book.author,
        book.rating,
      ]);
    },
  },
}).render(document.getElementById("table"));