import Image from "next/image";

export default function ExploreFilterTableItem({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) {
  return (
    <div
      className={`${"exploreFilterTableItem"} h-[72px] w-full flex justify-between items-center border-b border-solid border-dark border-opacity-15`}
    >
      <Image width={40} height={40} alt={alt} src={src} quality={100} />
      <p className="text-lg text-dark uppercase font-semibold">{text}</p>
    </div>
  );
}
