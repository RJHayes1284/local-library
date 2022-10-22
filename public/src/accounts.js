function findAccountById(accounts, id) {
  const patron = accounts.find((account) => account.id === id);
  return patron;
}

function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((nameA, nameB) =>
    nameA.name.last > nameB.name.last ? 1 : -1
  );
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) {
        count++;
      }
    });
  });
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOut = books.filter(
    (book) =>
      book.borrows[0].returned === false && book.borrows[0].id === account.id
  );
  const booksPossessedByAccount = booksCheckedOut.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);

    return { ...book, author };
  });
  return booksPossessedByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
