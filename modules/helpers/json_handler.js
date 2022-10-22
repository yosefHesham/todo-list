const toJson = (books) => JSON.stringify(books);
const fromJson = (books) => JSON.parse(books);

export { toJson, fromJson };