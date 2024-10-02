/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Breed } from "@/types/cats-api-types";
import Button from "../../_components/Button";

type image = {
  id:string;
  url:string;
}

const fetchOptions = {
  headers: {
    "x-api-key":
      "live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
  },
};

async function CatsOnBreedPage(props: { params: { breed: string } }) {
  const response1 = await fetch(
    `https://api.thecatapi.com/v1/breeds/${props.params.breed}`
  );

  const response2 = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${props.params.breed}`,
    fetchOptions
  );

  const breed = (await response1.json()) as Breed;
  const images = await response2.json();

  console.log(breed);

  return (
    <div className="flex gap-x-6 bg-black text-white">
      <div className="w-[30%] mt-8">
        <h1 className="text-3xl font-bold text-center">{breed.name}</h1>
        <p className="text-center text-lg">{breed.description}</p>

        <div className="w-full h-[100px] mt-3 flex flex-wrap items-center justify-center">
          <h1 className="text-white text-center">이 고양이를 평가해주세요!</h1>
          <Button/>
        </div>
      </div>

      <ul className="grid grid-cols-2 w-full h-full gap-3">
        {images.map((image: image) => (
          <li key={image.id}>
            <img
              src={image.url}
              alt={image.id}
              className="object-cover w-full  h-[100%] border-[4px] border-white "
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatsOnBreedPage;
