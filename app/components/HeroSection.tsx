// HeroSection.tsx

export default function HeroSection() {
  return (
    <Hero
      title="Welcome to Divine Love Secondary School!"
      ctaText="Learn more about us"
    />
  );
}

// Hero.tsx

export function Hero({ title, ctaText }: HeroProps) {
  return (
    <div className="flex relative bg-gray-400 gap-10 justify-center items-center font-medium text-center h-[100vh] max-md:px-5 max-md:py-24">
      <div className="flex z-10 flex-col flex-1 px-4 w-full max-w-[1170px]">
        <h1 className="px-9 w-full text-7xl text-yellow-400 leading-[86px] max-md:px-5 max-md:text-4xl max-md:leading-[53px]">
          {title}
        </h1>
        <Button>{ctaText}</Button>
      </div>
    </div>
  );
}

// Button.tsx

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="self-center px-9 py-3 mt-16 text-base leading-10 text-black uppercase bg-amber-300 rounded border border-amber-300 max-md:px-5 max-md:mt-10"
    >
      {children}
    </button>
  );
}

// types.ts
export interface HeroProps {
  title: string;
  ctaText: string;
}
