import Link from "next/link"

export default function Home({params}:{params:{products:string}}) {
  return (
    <>
      <h1>Home</h1>
      <Link href="/about">About Page</Link>
      <div>Your product name is:{params.products}</div>
    </>
  )
}
