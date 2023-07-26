class Book {
  constructor(author) {
    this.hamza = author;
  }
  // getter
  get writer() {
    return this.hamza;
  }
  // setter
  set writer(updatedAuthor) {
    this.hamza = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
// console.log(novel.writer);
console.log(novel);
