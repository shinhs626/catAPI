/* eslint-disable @next/next/no-img-element */

import { getCatBreeds } from "@/api/cat.api";
import Link from "next/link";

async function HomePage() {
  const breeds = await getCatBreeds();

  console.log(breeds);

  return (
      breeds ? (
      <ul>
        {breeds.map((breed) => (
          <li key={breed.name}>
            <article className="border">
              <h2 className="font-bold text-lg">
                <Link
                  href={`/cats/${breed.id}`}
                  className="text-blue-500 underline"
                >
                  {breed.name}
                </Link>
              </h2>
              <p className="text-sm">
                <a href={breed.wikipedia_url} target="_blank">
                  {breed.description}
                </a>
              </p>
            </article>
          </li>
        ))}
      </ul>
  ) : (
    <h4>고양이를 불러오는데</h4>
  )
)
}
export default HomePage;