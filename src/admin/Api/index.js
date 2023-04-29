export const getInventory = () => {
  return fetch("https://dummyjson.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching inventory:", error);
    });
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
