
import { useRouter} from "next/router";

const halamanBlog = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Halaman Blog</h1>
            <p>Slug:  {router.query.slug}</p>
        </div>
    );
};

export default halamanBlog;