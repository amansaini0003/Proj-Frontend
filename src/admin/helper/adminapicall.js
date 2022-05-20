import { API } from "../../backend";

//category calls
export const createCategory = async (userId, token, category) => {
  try {
    const res = await fetch(`${API}/category/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    });
    return await res.json();
  } catch (err) {
    return console.log(err, "error in create category");
  }
};

// get all categories
export const getCategories = async () => {
  try {
    const res = await fetch(`${API}/categories`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err, "error in get category");
  }
};

//product calls

//create a product
export const createProduct = async (userId, token, product) => {
  try {
    const res = await fetch(`${API}/product/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: product,
    });
    return await res.json();
  } catch (err) {
    return console.log(err, "error in create product");
  }
};

//get all products
export const getProducts = async () => {
  try {
    const res = await fetch(`${API}/products`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err, "error in get products");
  }
};

//delete a product
export const deleteProduct = async (productId, userId, token, product) => {
  try {
    const res = await fetch(`${API}/product/${productId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  } catch (err) {
    return console.log(err, "error in delete product");
  }
};

// get a product
export const getProduct = async (productId) => {
  try {
    const res = await fetch(`${API}/product/${productId}`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err, "error in get a product");
  }
};

//update a product
export const updateProduct = async (productId, userId, token, product) => {
  try {
    const res = await fetch(`${API}/product/${productId}/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: product,
    });
    return await res.json();
  } catch (err) {
    return console.log(err, "error in update product");
  }
};
