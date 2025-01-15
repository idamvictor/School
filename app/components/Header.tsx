// import Link from 'next/link';
// import React from 'react'

// export default function Header() {
//   return (
//     <div className=' container mx-auto'>
//       <Navigation />
//     </div>
//   );
// }

// const navigationItems = [
//   { label: "About", path: "/about" },
//   { label: "Students", path: "/students" },
//   { label: "Staff Login", path: "/staff-login" },
//   { label: "Updates", path: "/updates" },
//   { label: "Contact", path: "/contact" },
// ];

// export function Navigation() {
//   return (
//     <div className="flex flex-wrap gap-5 justify-between items-center w-full  max-md:max-w-full">
//       <div className="flex gap-1 self-stretch my-auto">
//         <div className="flex flex-col justify-center py-1.5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/70d08599a7bdd7ee263faf4384e69d77be83a90a447d67e5bacba54e51847d92?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3"
//             alt="Divine Love Secondary School Logo"
//             className="object-contain aspect-[0.94] w-[45px]"
//           />
//         </div>
//         <div className="my-auto text-lg leading-none text-white">
//           Divine Love Secondary School
//         </div>
//       </div>
//       <div className="flex gap-10 self-stretch text-base text-white leading-[80px]">
//         {navigationItems.map((item) => (
//           <NavigationItem
//             key={item.label}
//             label={item.label}
//             path={item.path}
//           />
//         ))}
//       </div>
//       <ContactInfo
//         phoneNumber="+23408187065150"
//         iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/71e010b165592ab8d17b87b85b6c345c23b44c51ce221063b8ff084dcdb9d363?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3"
//       />
//     </div>
//   );
// };


// interface NavigationItemProps {
//   label: string;
//   path: string;
// }

// export const NavigationItem: React.FC<NavigationItemProps> = ({
//   label,
//   path,
// }) => {
//   return (
//     <div className="flex flex-col whitespace-nowrap min-h-[80px]">
//       <Link href={path}>
//         <a className="hover:text-gray-300">{label}</a>
//       </Link>
//     </div>
//   );
// };


// interface ContactInfoProps {
//   phoneNumber: string;
//   iconSrc: string;
// }

// export const ContactInfo: React.FC<ContactInfoProps> = ({
//   phoneNumber,
//   iconSrc,
// }) => {
//   return (
//     <div className="flex gap-4 items-center self-stretch px-8 py-3.5 my-auto text-base leading-relaxed text-white whitespace-nowrap border-2 border-solid border-zinc-700 max-md:px-5">
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



import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto">
      <Navigation />
    </div>
  );
}

const navigationItems = [
  { label: "About", path: "/about" },
  { label: "Students", path: "/admission" },
  { label: "Staff Login", path: "/staff" },
  { label: "Updates", path: "/updates" },
  { label: "Contact", path: "/contact" },
];

export function Navigation() {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:max-w-full">
      <Link href='/' className="flex gap-1 self-stretch my-auto">
        <div className="flex flex-col justify-center py-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70d08599a7bdd7ee263faf4384e69d77be83a90a447d67e5bacba54e51847d92?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3"
            alt="Divine Love Secondary School Logo"
            className="object-contain aspect-[0.94] w-[45px]"
          />
        </div>
        <div className="my-auto text-lg leading-none text-white">
          Divine Love Secondary School
        </div>
      </Link>
      <div className="flex gap-10 self-stretch text-base text-white leading-[80px]">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.label}
            label={item.label}
            path={item.path}
          />
        ))}
      </div>
      <ContactInfo
        phoneNumber="+23408187065150"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/71e010b165592ab8d17b87b85b6c345c23b44c51ce221063b8ff084dcdb9d363?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3"
      />
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

interface ContactInfoProps {
  phoneNumber: string;
  iconSrc: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  phoneNumber,
  iconSrc,
}) => {
  return (
    <div className="flex gap-4 items-center self-stretch px-8 py-3.5 my-auto text-base leading-relaxed text-white whitespace-nowrap border-2 border-solid border-zinc-700 max-md:px-5">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
      />
      <div className="self-stretch my-auto">{phoneNumber}</div>
    </div>
  );
};
