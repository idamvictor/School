import Image from "next/image";

export default function SchoolStaff() {
  return (
    <div className="bg-white max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="relative">
          <Image
            src={"/placeholder.svg?height=400&width=400"}
            alt="School Staff"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-gray-900 text-yellow-400 p-4 rounded-lg">
            <div className="text-2xl font-bold">25+</div>
            <div className="text-sm">Years of Excellence</div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-yellow-400 font-medium">
            Excellence in Character & Learning
          </h2>
          <h1 className="text-4xl font-bold">
            We&apos;ve been on the fight against Illiteracy and Ignorance Since
            1993
          </h1>
          <p className="text-gray-600">
            Modern Ideal College is noted for her belief in excellence.
            The aspiration of the school management is not less than excellence.
            Here we ensure that nothing short of the best, in academics and high
            moral standard is given to our students. This Philosophy of life has
            led to the increase in the number of our students and maximum
            productivity even amidst trials. Our excellent team of the students
            in external examinations. Our statistics shows that we have more
            than three hundred (300) students in enrolment.
          </p>
        </div>
      </div>

      {/* Head Staff Section */}
      <div className="text-center mb-12">
        <h2 className="text-yellow-400 uppercase text-sm font-medium mb-2">
          MODERN IDEAL COLLEGE
        </h2>
        <h3 className="text-3xl font-bold">Head Staff</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Staff Member 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              src={"/placeholder.svg?height=200&width=200"}
              alt="Staff Member"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="space-y-4">
              <h4 className="font-bold text-xl">Margaret Eze</h4>
              <p className="text-gray-600 italic">
                &quot;A Leader with an unquenchable desire to help young
                students become catalysts for world change.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Staff Member 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              src={"/placeholder.svg?height=200&width=200"}
              alt="Staff Member"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="space-y-4">
              <h4 className="font-bold text-xl">Rev Sister Nora Ubadiniru</h4>
              <p className="text-gray-600 italic">
                &quot;A dogged administrator when it comes to handling the
                affairs of the school and ensuring standards are followed.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

