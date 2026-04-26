import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//menambahkan field category untuk menampilkan category
type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
  // warna: string;
}

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  // if (!isLogin) {
  //   PushManager("/auth/login");
  // }
  // },[]);

  const fetchProducts = () => {
    fetch("/api/produk")
    .then((response) => response.json())
    .then((responsedata) => {
      //console.log("Data produk: ", responsedata.data);
      setProducts(responsedata.data);
    })
    .catch((error) => {
      console.error("Error fetching produk: ", error);
    });
  };

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <button onClick={fetchProducts} style={{ marginBottom: '10px' }}>Refresh Data</button>
      {products.map((products:ProductType) => (
        <div key={products.id}>
          <h2>{products.name}</h2>
          <p>Harga: {products.price}</p>
          <p>Ukuran: {products.size}</p>
          {/*menambahkan field category untuk menampilkan category*/}
          <p>category: {products.category}</p><hr />
          {/* <p>Warna: {products.warna}</p> */}
        </div>
      ))}
    </div>
  );
};

export default kategori;