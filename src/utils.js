export const Utils = {
  getBookmark: () => {
    const bookmark = localStorage.getItem("bookmark");
    return bookmark ? JSON.parse(bookmark) : null;
  },
  setBookmark: (value) => {
    localStorage.setItem("bookmark", JSON.stringify(value));
  },
  removeBookmark: () => localStorage.removeItem("bookmark"),
};
