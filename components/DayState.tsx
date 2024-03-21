import Image from "next/image";

function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, string, number?] = [
    "/images/gray-mark.svg",
    "gray mark",
    12,
  ];

  if (day === true) image = ["/images/check.svg", "green check icon", 18];
  if (day === false) image = ["/images/x.svg", "red x mark", 18];

  const [src, alt, size] = image;
  return (
    <div className="flex items-center justify-center w-5  pt-2">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
}

export default DayState;
