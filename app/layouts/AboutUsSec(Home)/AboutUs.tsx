import { montserrat, roboto } from "@/app/assets/fonts";
import Image from "next/image";

const TextAndImage = () => {
  return (
    <div className="textAndImage flex flex-col gap-4 sm:flex-row sm:justify-between">
      <div
        className={`textWrapper flex flex-col items-start p-2 ${roboto.className} sm:w-1/2 lg:w-[48%]`}
      >
        <div className="aboutUsMarking mb-2 flex h-6 w-[83px] items-center justify-center rounded-xl bg-primaryRed">
          <p className="text-sm font-medium uppercase text-background">
            about us
          </p>
        </div>
        <h1
          className={`mb-4 text-4xl font-bold uppercase text-dark lg:text-[2.5rem] ${montserrat.className}`}
        >
          Our Culinary Chronicle
        </h1>
        <p className="mb-4 text-base font-light text-dark opacity-80">
          Our journey is crafted with dedication, creativity, and an unrelenting
          commitment to delivering delightful culinary experiences. Join us in
          savoring the essence of every dish and the stories that unfold.
        </p>
        <button className="h-[38px] w-[126px] rounded-3xl border border-solid border-dark bg-background text-sm font-medium uppercase text-dark">
          read more
        </button>
      </div>
      <div className="textImage w-full sm:w-1/2 lg:w-[48%] flex">
        <Image
          src={"/Home/AboutUsSection/grilled-sandwich.png"}
          alt="grill"
          width={327}
          height={326}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
          className="h-auto max-sm:h-[327px] w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="aboutUsSection mx-auto mb-16 max-w-[1313px] rounded-3xl border border-solid border-dark border-opacity-25 bg-background p-4">
      <div className="aboutUsSectionWrapper flex flex-col gap-4 lg:flex-row">
        <div className="leftColumn flex w-full flex-col gap-4 lg:w-2/3">
          <TextAndImage />
          <div className="lowerImage w-full">
            <Image
              src={"/Home/AboutUsSection/grilled-vegetables.png"}
              alt="veg"
              width={861}
              height={331}
              className="h-auto w-full rounded-2xl object-cover max-sm:hidden"
            />
            <Image
              src={"/Home/AboutUsSection/grilled-veggies-mobile.png"}
              alt="veggies mobile"
              width={324}
              height={327}
              className="h-[324px] w-full rounded-2xl object-cover sm:hidden"
            />
          </div>
        </div>
        <div className="rightSideImage w-full lg:w-1/3">
          <Image
            src={"/Home/AboutUsSection/cooks-image.png"}
            alt="cooks image"
            width={411}
            height={665}
            className="h-full w-full rounded-2xl object-cover max-lg:hidden"
          />
          <Image
            src={"/Home/AboutUsSection/cooks-image-mobile.png"}
            alt="cooks image"
            width={324}
            height={327}
            className="h-[324px] w-full rounded-2xl object-cover lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
