import Link from "next/link";



function Header() {
  return (
    <header className=" text-white bg-black">
      <div className="mx-auto container max-w-screen-lg flex items-center justify-center gap-x-5">

    <Link href="/" className="font-bold text-2xl">고양이가 세상을 지배한다</Link>

        <nav>
          <ul>
            <li>
              <Link href={"/cats"}>고양이</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
