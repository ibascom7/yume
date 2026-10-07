import Image from "next/image";

// One photo at the bottom of each tab. Photos live in public/; fill in a caption for each
// (an empty one shows nothing).
const photos = {
  theorems: { src: "/1e9f26ca-75d7-4985-ba33-5d000bd1f5ac.JPG", alt: "Brown dog smiling on a patio", caption: "" },
  definitions: { src: "/41FF06D5-C977-427C-86D5-BCD0D344D711.JPG", alt: "Black and white dog lying belly-up on a bed", caption: "" },
  exercises: { src: "/E3FCA819-8D19-47DE-9312-28AA5416A9A9.JPG", alt: "Brown dog curled up asleep on a blanket", caption: "" },
};

export default function DogPhoto({ tab }: { tab: keyof typeof photos }) {
  const photo = photos[tab];
  return (
    // Same size as the Intermediate Analysis photos: a 450×600 frame, shrinking to fit on phones
    <figure className="mt-8 flex flex-col items-center">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={450}
        height={600}
        sizes="(max-width: 640px) 100vw, 450px"
        className="w-full max-w-[450px] aspect-[3/4] object-cover rounded-lg"
      />
      <figcaption className="mt-2 text-center text-xs sm:text-sm text-gray-600">{photo.caption}</figcaption>
    </figure>
  );
}
