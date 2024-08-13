const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,

    printSummary: function() {
        console.log(`"${this.title}" is a novel by ${this.author} consisting of ${this.pages} pages.`);
    }
};

book.printSummary();
