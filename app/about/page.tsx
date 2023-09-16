import Image from "next/image";
import Link from "next/link";

export default function about() {
    return (
        <>
            <h1>About Page</h1>
            <br />
            <Image src="/img.jpeg" alt="About Image" width={"300"} height={"300"} />
            <Image src="/img.jpeg" alt="About Image" width={"300"} height={"300"} />
            <br />
            <Link href={"/"}>Home</Link>
        </>
    )
}
