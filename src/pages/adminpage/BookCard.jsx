import BookSingle from "./BookSingle";

const BookCard = ({ books }) => {
  // console.log("books received", books);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto max-h-screen">
      {books.map((book) => (
        <BookSingle key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookCard;
