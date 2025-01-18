import Image from "next/image";

export default function SchoolStaff() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="flex items-center justify-center relative ">
          <Image
            src={
              "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737079987/PAT_6910_vhrqd7.jpg"
            }
            alt="School Staff"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-4 ">
          <h2 className="text-primary font-medium">
            Excellence in Character & Learning
          </h2>
          <h1 className="text-4xl font-bold">
            We&apos;ve been on the fight against Illiteracy and Ignorance Since
            1992
          </h1>
          <p className="text-muted-foreground">
            Modern Ideal College is noted for her belief in excellence. The
            aspiration of the school management is not less than excellence.
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
      <div className="text-center mb-12 ">
        <h2 className="text-primary uppercase text-sm font-medium mb-2">
          MODERN IDEAL COLLEGE
        </h2>
        <h3 className="text-3xl font-bold">Head Staff</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 ">
        {/* Staff Member 1 */}
        <div className=" p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              src={
                "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737110543/Copy_of_PAT_6985_caapuh.jpg"
              }
              alt="Staff Member"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="space-y-4">
              
              <p className="text-muted-foreground italic">
                &quot;He is a visionary leader driven by an unwavering passion
                to empower young students to become catalysts for global
                transformatione.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Staff Member 2 */}
        <div className="p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              src={
                "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737110651/Copy_of_PAT_6994_mzx5qy.jpg"
              }
              alt="Staff Member"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="space-y-4">
              
              <p className="text-muted-foreground italic">
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

