const getTheTitles = function(bookArr) {
    const bookTitle = [];
    bookArr.map((book) => bookTitle.push(book.title));
    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;