import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { Sidebar } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <div className="container mx-auto">
      <Navigation />
    </div>
  );
}

const navigationItems = [
  { label: "About", path: "/about" },
  { label: "Campus", path: "/campus" },
  { label: "Result", path: "/result" },
  { label: "Staff Login", path: "/staff" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export function Navigation() {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:max-w-full">
      <Link href="/" className="flex gap-1 self-stretch my-auto">
        <div className="flex flex-col justify-center py-1.5">
          <Image
            loading="lazy"
            src="/logo.png"
            alt="Mordern Ideal College Enugu Logo"
            className="object-contain aspect-[0.94] w-[45px]"
            height={45}
            width={45}
          />
        </div>
        <div className="my-auto text-lg leading-none text-white">
          Mordern Ideal College Enugu
        </div>
      </Link>
      <div className="hidden md:flex gap-10 self-stretch text-base text-white leading-[80px]">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.label}
            label={item.label}
            path={item.path}
          />
        ))}
      </div>
      <SidebarTrigger className="text-white md:hidden" />
      {/* <ContactInfo
        phoneNumber="+23408187065150"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/71e010b165592ab8d17b87b85b6c345c23b44c51ce221063b8ff084dcdb9d363?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3"
      /> */}
    </div>
  );
}

interface NavigationItemProps {
  label: string;
  path: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  path,
}) => {
  return (
    <div className="flex flex-col whitespace-nowrap min-h-[80px]">
      <Link href={path}>
        <div className="hover:text-gray-300">{label}</div>
      </Link>
    </div>
  );
};

// interface ContactInfoProps {
//   phoneNumber: string;
//   iconSrc: string;
// }

// export const ContactInfo: React.FC<ContactInfoProps> = ({
//   phoneNumber,
//   iconSrc,
// }) => {
//   return (
//     <div className="hidden md:flex gap-4 items-center self-stretch px-8 py-3.5 my-auto text-base leading-relaxed text-white whitespace-nowrap border-2 border-solid border-zinc-700 max-md:px-5">
//       <img
//         loading="lazy"
//         src={iconSrc}
//         alt=""
//         className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
//       />
//       <div className="self-stretch my-auto">{phoneNumber}</div>
//     </div>
//   );
// };
