import React from 'react';
import Image from 'next/image';

export default function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, string, number?] = ["none.svg", "campo vazio", 12]

  if (day === true) image = ["check.svg", "check", 12]
  if (day === false) image = ["close.svg", "close", 12]


  const [src, alt, size] = image

  return (
    <div className='flex items-center justify-center h-9'>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </div>
  );
}