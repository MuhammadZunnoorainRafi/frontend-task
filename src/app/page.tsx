import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <section className="min-h-screen pt-32 bg-gray-100">
        <div className="flex items-center justify-end">
          <h1 className="font-bold text-[55px] absolute top-[350px] left-56">
            Galaxy Z Flip4
          </h1>
          <div>
            <Image
              src="/galaxy-z-flip4.jpg"
              height={900}
              width={1010}
              alt="error"
            ></Image>
          </div>
        </div>
      </section>
      <section className="min-h-screen pt-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="max-w-2xl font-semibold mb-28 text-6xl">
            Stand up to the standard
          </h1>
          <div className="grid grid-cols-3 place-items-center ">
            <div className="space-y-4 text-center">
              <Image
                src="/image2.jpg"
                width={250}
                height={250}
                className="rounded-lg"
                alt="error image1"
              ></Image>
              <h1 className="font-semibold text-lg">Welfies by Flip</h1>
            </div>
            <div className="space-y-4 text-center">
              <Image
                src="/image2.jpg"
                width={250}
                height={250}
                className="rounded-lg"
                alt="error image1"
              ></Image>
              <h1 className="font-semibold text-lg">Expert Review</h1>
            </div>
            <div className="space-y-4 text-center">
              <Image
                src="/image3.jpg"
                width={250}
                height={250}
                className="rounded-lg"
                alt="error image1"
              ></Image>
              <h1 className="font-semibold text-lg">Official Launch Film</h1>
            </div>
          </div>
          <div className="my-14 grid grid-cols-2 max-w-2xl mx-auto gap-6 ">
            <div>
              <div className="p-5 pt-28 rounded-lg bg-slate-50 h-[450px]  flex flex-col items-center justify-between">
                <h1 className="font-semibold text-xl text-center">
                  &quot;...the Galaxy Z Flip4 is the best in its class.&quot;
                </h1>
                <div className="text-center">
                  <h1 className="font-semibold text-2xl">Digital Trends</h1>
                  <p className="font-semibold">Joe Maring</p>
                </div>
              </div>
              <p className="text-center pt-2 text-sm">
                From Digital Trends. © 2022 Digital Trends Media Group. All
                rights reserved. Used under license.
              </p>
            </div>
            <div className="p-5 pt-16 rounded-lg bg-slate-50 h-[450px]  flex flex-col items-center justify-between">
              <div>
                <h1 className="max-w-44 mx-auto font-semibold">
                  Samsung Galaxy Z Fold4 and Z Flip4
                </h1>
                <h1 className="font-semibold text-xl text-center">
                  &quot;Foldable devices are about to be not just a thing, but
                  THE thing&quot;
                </h1>
              </div>
              <div className="text-center">
                <h1 className="font-semibold text-2xl">Tech Radar</h1>
                <p className="font-semibold">08/2022</p>
              </div>
            </div>
          </div>
          <div className="flex items-center font-semibold text-lg justify-between my-28 ">
            <button className="rounded-full px-6 py-1 border-black border hover:bg-black hover:text-white duration-200">
              Design
            </button>
            <button className="rounded-full px-6 py-1 border-black border hover:bg-black hover:text-white duration-200">
              Camera
            </button>
            <button className="rounded-full px-6 py-1 border-black border hover:bg-black hover:text-white duration-200">
              Durability
            </button>
            <button className="rounded-full px-6 py-1 border-black border hover:bg-black hover:text-white duration-200">
              Battery
            </button>
            <button className="rounded-full px-6 py-1 border-black border hover:bg-black hover:text-white duration-200">
              Ecosystem
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
