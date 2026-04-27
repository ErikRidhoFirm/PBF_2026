import {useRouter} from 'next/router';
import useSWR from 'swr';
import fetcher from '../utils/db/swr/fetcher';
import TampilanProduk from '../views/produk';

const halamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router);
    const {query} = useRouter();
    const { data, error, isLoading } = useSWR (
        query.id ? `/api/produk?kategori=${query.id}` : null,
        fetcher
    )
    return (
        <div>
            <h1>Halaman Produk</h1>
            <TampilanProduk products={isLoading ? [] : data?.data || []}/>
        </div>
    );
};

export default halamanProduk;