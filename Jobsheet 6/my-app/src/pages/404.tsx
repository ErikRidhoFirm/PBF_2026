import styles from "@/styles/404.module.scss";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <head>
                <title>404 - Halaman Tidak Ditemukan</title>
            </head>
            <img src="/page-not-found.png" alt="404" className={styles.error_image} />
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Maaf, halaman yang anda cari tidak ada.</p>
            <p>Halaman ini digunakan untuk menampilkaan gambar, pesan ketika halaman yang dituju tidak ditemukan</p>
        </div>
    );
};

export default Custom404;