import Link from "next/link";
import { useRouter } from "next/router";
import styles from './register.module.scss';

const TampilanRegister = () => {
    const { push } = useRouter();

    const handleRegister = () => {
        // logic registrasi disini
        push('/auth/login');
    };

    return (
        <div className={styles.register}>
            <div className={styles.card}>
                <h1 className={styles.title}>Daftar Akun</h1>

                <div className={styles.inputGroup}>
                    <label htmlFor="name">Nama Lengkap</label>
                    <input id="name" type="text" placeholder="Masukkan nama lengkap" />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Masukkan email" />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Masukkan password" />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="confirmPassword">Konfirmasi Password</label>
                    <input id="confirmPassword" type="password" placeholder="Ulangi password" />
                </div>

                <button className={styles.submitBtn} onClick={() => handleRegister()}>
                    Daftar
                </button>

                <p className={styles.loginLink}>
                    Sudah punya akun? <Link href="/auth/login">Login di sini</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanRegister;
