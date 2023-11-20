import Link from "next/link"

export default function NavBar() {
    return (
    <div className="navbar">
        <Link href="/">홈</Link>
        <Link href="/list">List</Link>
        <Link href="/cart">Cart</Link>
    </div>
    )
  }
  