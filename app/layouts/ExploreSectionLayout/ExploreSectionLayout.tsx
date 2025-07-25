import { montserrat, roboto } from "@/app/assets/fonts";
import ExploreFilterTableItem from "@/app/components/ExploreFilterTableItem";

interface exploreFilterTableItem {
   id: number
   src: string,
   alt: string,
   text: string
}

const exploreFilterTableItems: exploreFilterTableItem[] = [
  {
    id: 0,
    src: "/Home/HeroSection/breakfast-item-icon.png",
    alt: "breakfast-icon",
    text: "breakfast",
  },
  {
    id: 1,
    src: "/Home/HeroSection/lunch-item-icon.png",
    alt: "lunch-icon",
    text: "lunch",
  },
  {
    id: 2,
    src: "/Home/HeroSection/dinner-item-icon.png",
    alt: "dinner-icon",
    text: "dinner",
  },
  {
    id: 3,
    src: "/Home/HeroSection/dessert-item-icon.png",
    alt: "dessert-icon",
    text: "dessert",
  },
  {
    id: 4,
    src: "/Home/HeroSection/quick-bite-item-icon.png",
    alt: "quick-bite-icon",
    text: "quick bite!",
  },
];

export default function ExploreSectionLayout() {
  return (
    <section
      className={`exploreSection w-full flex items-center justify-center rounded-[32px] mb-4 bg-primaryLightBlue`}
    >
      <div
        className={`exploreSectionWrapper p-10 flex justify-between md:items-end items-start md:flex-[1_1_50%] flex-[1_1_100%] gap-10 max-md:flex-col`}
      >
        <div className={`exploreFilterText flex flex-col items-start md:w-1/2 w-full`}>
          <div
            className={`exploreFilterTextTag w-20 h-6 rounded-xl flex justify-center items-center bg-primaryRed text-background text-sm uppercase font-medium mb-4`}
          >
            Explore
          </div>
          <h1
            className={`max-w-[400px] text-dark md:text-[2.5rem] text-[1.625rem] uppercase font-bold mb-3 ${montserrat.className}`}
          >
            Our diverse Palette
          </h1>
          <p
            className={`md:text-base text-sm text-dark opacity-80 max-w-[494px] leading-[1.2rem] font-light mb-10 ${roboto.className}`}
          >
            If you are a breakfast enthusiast, a connoisseur of savory delights,
            or on the lookout for irresistible desserts, our curated selection
            has something to satisfy every palate.
          </p>
          <button
            className={`h-9 w-32 bg-primaryLightBlue text-dark text-sm font-medium uppercase rounded-3xl flex items-center justify-center cursor-pointer border border-dark ${roboto.className}`}
          >
            see more
          </button>
        </div>
        <div className={`exploreFilter md:w-1/2 w-full ${montserrat.className}`}>
          <div className={`exploreFilterTable flex flex-col items-end gap-4`}>
            {exploreFilterTableItems.map((el) => (
              <ExploreFilterTableItem
                alt={el.alt}
                src={el.src}
                text={el.text}
                key={el.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
