import Image from "next/image";

export default function Related() {
  return (
    <>
      <div className="text-2xl font-bold border-b-4 border-secondary">
        Related articles
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <div className="flex gap-4 items-center">
          <div>
            <Image
              alt=""
              className="rounded-lg"
              width={90}
              height={90}
              src="https://media.licdn.com/dms/image/D4D03AQGq8FKWQjQm3g/profile-displayphoto-shrink_400_400/0/1673667166925?e=1698278400&v=beta&t=wAsp7Sd_wEYl5CC4XviQHuOnUlWcJnnRzzSSIvaI35s"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">title</div>
            <div className="font-thin">July 12, 2023</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <Image
              alt=""
              className="rounded-lg"
              width={90}
              height={90}
              src="https://media.licdn.com/dms/image/D4D03AQGq8FKWQjQm3g/profile-displayphoto-shrink_400_400/0/1673667166925?e=1698278400&v=beta&t=wAsp7Sd_wEYl5CC4XviQHuOnUlWcJnnRzzSSIvaI35s"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">title</div>
            <div className="font-thin">July 12, 2023</div>
          </div>
        </div>
      </div>
    </>
  );
}
