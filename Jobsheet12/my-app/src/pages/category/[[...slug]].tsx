import { useRouter } from "next/router";
import halamanToko from "../shop/[[...slug]]";

const halamanCategory = () => {
  // const Router = useRouter();
  // console.log (Router);
  const { query } = useRouter();
  const slug = query.slug; // Deklarasi slug dari query.slug
  return (
    <div>
      <h1>Halaman Toko</h1>
      {/* <p>Toko: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p> */}
      <p>Toko: {Array.isArray(query.slug) ? query.slug.join("-") : query.slug}</p>
      <p>Kategori: {slug ? slug[0] : "Semua Kategori"}</p>
    </div>
  );
};

export default halamanCategory;
