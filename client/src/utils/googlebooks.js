import axios from "axios";

export default function googleBooksApiRoutes(searchTerm) {
  const apiKey = "AIzaSyDFqW-mKPfwbTiosSlG1_wmSmE6D53a3cg";
  const formattedSearchTerm = searchTerm.split(" ").join("+");
  const formattedSearchTerm2 = encodeURIComponent(searchTerm.trim());
  const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${formattedSearchTerm2}&key=${apiKey}`;

  return axios.get(endpoint);
}
