
export default function AdmissionApplication() {
  return (
    <div>
      <div className='container mx-auto text-gray-700'><AdmissionPortal /></div>
    </div>
  );
}



const steps = [
  "Input scratched-off card PIN correctly in the pin field.",
  "Once logged in, fill the admission application form correctly.",
  "Print the application form as well as the application slip. Bring along the application slip on the entrance examination day.",
  "Remember to log out once you are done with the portal",
];



export const AdmissionPortal: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-32 py-24 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1170px] max-md:max-w-full">
        <div className="py-px w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-5 pr-3.5 pl-4 min-h-[282px] max-md:max-w-full">
                <div className="w-full text-3xl font-semibold leading-tight text-zinc-800 max-md:max-w-full">
                  Follow the steps below to complete your admission application:
                </div>
                <div className="flex flex-col mt-5 w-full text-base leading-7 text-neutral-400 max-md:max-w-full">
                  {steps.map((step, index) => (
                    <Step key={index} text={step} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-4 py-5 min-h-[282px] max-md:max-w-full">
                <div className="w-full text-3xl font-semibold leading-tight text-zinc-800 max-md:max-w-full">
                  Admission Portal
                </div>
                <form className="flex flex-col mt-5 w-full max-md:max-w-full">
                  <div className="flex flex-col justify-center self-center max-w-full text-sm font-light text-neutral-400 w-[488px]">
                    <FormInput label="Pin" />
                    <FormInput label="Serial Number" />
                  </div>
                  <div className="flex gap-1 items-start mt-4 w-full text-base font-medium leading-relaxed text-center text-white uppercase whitespace-nowrap max-md:max-w-full">
                    <button
                      type="submit"
                      className="px-7 py-3.5 bg-primary rounded  max-md:px-5"
                    >
                      Login
                    </button>
                    <button
                      type="reset"
                      className="px-7 py-3.5 bg-primary rounded  max-md:px-5"
                    >
                      Clear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export interface StepProps {
  text: string;
}



export interface FormInputProps {
  label: string;
  type?: string;
}



export const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
}) => (
  <div className="flex flex-col px-4 w-full whitespace-nowrap max-w-[488px] min-h-[64px] max-md:max-w-full">
    <div className="flex overflow-hidden flex-col justify-center py-4 pr-3.5 pl-5 w-full rounded-md border border-solid bg-gray-800 bg-opacity-10 border-neutral-400 min-h-[48px] max-md:max-w-full">
      <label className="sr-only" htmlFor={`${label.toLowerCase()}Input`}>
        {label}
      </label>
      <input
        type={type}
        id={`${label.toLowerCase()}Input`}
        className="overflow-hidden w-full max-md:max-w-full bg-transparent border-none text-sm font-light text-neutral-400 focus:outline-none"
        placeholder={label}
        aria-label={label}
      />
    </div>
  </div>
);



export const Step: React.FC<StepProps> = ({ text }) => (
  <div className="flex relative flex-col py-1.5 pl-8 w-full max-md:pl-5 max-md:max-w-full">
    <div className="flex absolute left-0 top-1 z-0 w-3.5 h-3.5 bg-white rounded-lg border-2 border-gray-800 border-solid min-h-[14px]" />
    <div className="z-0">{text}</div>
  </div>
);