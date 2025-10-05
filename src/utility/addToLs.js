export const getStoredBook = () => {
  const storedBookStr = localStorage.getItem("readList");
  if (storedBookStr) {
    const storedBook = JSON.parse(storedBookStr);
    return storedBook;
  } else {
    return [];
  }
};

export const addToStorage = (id) => {
  const storedBook = getStoredBook();
  if (storedBook.includes(id)) {
    alert("already exists!");
  } else {
    storedBook.push(id);
    const data = JSON.stringify(storedBook);
    localStorage.setItem("readList", data);
  }
};
