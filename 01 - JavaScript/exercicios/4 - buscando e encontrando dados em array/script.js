const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(`Total de categorias: ${totalCategories}`)

console.log("-----------------------------")
for (let categories of booksByCategory) {
    console.log(`\nTotal de livros da categoria ${categories.category}: ${categories.books.length}`)
}
console.log(`
-----------------------------`)

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books)
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
    }
    console.log(`Total de autores: ${authors.length}`)
}

countAuthors();


function countBooksByAuthor(author) {
    let booksByAuthor = [];
    for (let category of booksByCategory) {
        for (let book of category.books)
            if (book.author === author) {
                booksByAuthor.push(book.title)
            }
    }
    console.log(`Livros de ${author}: ${booksByAuthor.join(", ")} `)
}

countBooksByAuthor("Augusto Cury")