import Link from 'next/link';

export default function Posts() {
    return (
        <>
            <h1>Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}