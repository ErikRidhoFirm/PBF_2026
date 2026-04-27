import {useRouter} from 'next/router';
import useSWR from 'swr';
import fetcher from '../utils/db/swr/fetcher';
import TampilanProduk from '../views/produk';

const halamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router);
    const {query} = useRouter();
    const { data, error, isLoading } = useSWR (
        query.id ? '/api/produk/${query.id}' : null,
        fetcher
    )
    return (
        <div>
            <h1>Halaman Produk</h1>
            <p>Produk: {query.id}</p>
        </div>
    );
};

export default halamanProduk;