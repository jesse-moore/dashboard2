import Link from 'next/link';

const IndexPage = () => {
    return (
        <>
            <h1>Hello Next.js 👋</h1>
            <p>
                <Link href="/about">About</Link>
            </p>
        </>
    );
};

export default IndexPage;
