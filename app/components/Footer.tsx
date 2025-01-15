import React from "react";

export default function Footer() {
  return (
    <div className="flex container mx-auto">
      <AboutUs />
      <Newsletter /> 
      <QuickLinks />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="flex flex-col items-start text-base text-white max-w-[345px] min-h-[1px]">
      <div className="text-xl font-medium leading-tight text-yellow-400">
        About Us!
      </div>
      <div className="self-stretch mt-11 w-full">
        We are driven to provide world class education in a
      </div>
      <div className="mt-2.5">serene, disciplined and academic stimulating</div>
      <div className="mt-2.5">environment.</div>

      <div className="flex mt-7">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c310e9262fa6c432602a0644c915aca3dfa3b396489aff09d941d29a7fc888c5?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3"
          alt="Location icon"
          className="object-contain shrink-0 self-start w-4 aspect-square"
        />
        <div className="basis-auto">Mordern Ideal College Enugu,</div>
      </div>
      <div className="mt-2.5">54/56 Jim Nwobodo Avenue Trans Ekulu</div>
      <div className="mt-3.5">Enugu, Enugu State.</div>

      <div className="flex mt-4 leading-none text-gray-500">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd7458ac85542532affe9287b497c40318ac0b22d1cc4671dd40801875f63db?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3"
          alt="Phone icon"
          className="object-contain shrink-0 w-4 aspect-square"
        />
        <div className="basis-auto">+23408187065150</div>
      </div>

      <div className="flex mt-4 leading-none text-gray-500">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/39c488d763e8946cba2f045e50d6effc26dc7caeb9f08ff740c901f0ad3daafa?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3"
          alt="Email icon"
          className="object-contain shrink-0 w-4 aspect-square"
        />
        <div className="basis-auto">info@odealcollegeenugu.com</div>
      </div>
    </div>
  );
}

// ===================================== News Letter ===========================
function Newsletter() {
  return (
    <div className="flex flex-col items-end px-20 max-md:pl-5">
      <div className="flex flex-col px-4 max-w-full min-h-[1px] w-[390px]">
        <h2 className="text-xl font-medium leading-tight text-yellow-400">
          Newsletter
        </h2>
        <p className="mt-9 text-base text-white">
          You can trust us. we only send relevant information
        </p>
        <form className="flex relative gap-1 items-start mt-9 w-full">
          <label htmlFor="emailInput" className="sr-only">
            Email Address
          </label>
          <input
            id="emailInput"
            type="email"
            value="email"
            placeholder="Your Email Address"
            className="flex overflow-hidden z-0 flex-1 shrink justify-center px-3 py-3.5 text-sm bg-gray-800 border border-gray-800 border-solid basis-0 min-h-[45px] min-w-[240px] text-neutral-400"
            required
          />
          <button
            type="submit"
            className="flex z-0 flex-col justify-center items-center px-2 py-1.5 bg-amber-300 w-[50px]"
            aria-label="Submit newsletter subscription"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc69b4d60a267a30ce5a714a0cde2d0ae9b5ad966746db50c71c8f2750467682?placeholderIfAbsent=true&apiKey=0870971d7a7c478f9d3167cb07406bc3"
              alt="Submit newsletter subscription"
              className="object-contain w-9 aspect-square"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

// ================================ Quuick Links ==========================

function QuickLinks() {
  return (
    <div className="flex flex-col max-w-[360px] min-h-[1px]">
      <div className="self-start text-xl font-medium leading-tight text-yellow-400">
        Quick Links
      </div>
      <div className="flex gap-8 mt-9 w-full text-base text-white">
        <div className="flex flex-col flex-1 items-start pt-0.5 pb-1">
          <div className="mt-4 first:mt-0 whitespace-nowrap">Admissions</div>
          <div className="mt-4 first:mt-0 whitespace-nowrap">Staff Login</div>
          <div className="mt-4 first:mt-0 whitespace-nowrap">Check Results</div>
        </div>
        <div className="flex flex-col flex-1 items-start pt-0.5 pb-1">
          <div className="mt-4 first:mt-0 whitespace-nowrap">Home</div>
          <div className="mt-4 first:mt-0 whitespace-nowrap">About Us</div>
          <div className="mt-4 first:mt-0 whitespace-nowrap">Contact Us</div>
        </div>
      </div>
    </div>
  );
}
