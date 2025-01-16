import { CheckCircle, LightbulbOff, FileText } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="bg-slate-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission Column */}
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
          <h2 className="text-xl font-semibold mb-4">Mission</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              To lead our male and female child of our time to the path of
              wholistic education.
            </li>
            <li>To foster excellence in character and learning.</li>
            <li>
              To fulfill the obligatory educational requirements of the
              Department of Divine Law and to make them morally and spiritually
              productive in service to God and humanity.
            </li>
          </ul>
        </div>

        {/* Motto Column */}
        <div className="flex flex-col items-center text-center">
          <LightbulbOff className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-xl font-semibold mb-4">Our Motto</h2>
          <p className="text-sm text-gray-300">
            In Divine Love Secondary School emphasis on academic excellence,
            hard work, discipline, respect, commitment, moral and spiritual
            education, love for God and neighbour remain our hall mark, hence
            the reasons for the choice of the attributes noted in our motto
            thus:
          </p>
          <p className="mt-4 font-medium text-gray-200">
            &quot;Knowledge, Love and service&quot;
          </p>
        </div>

        {/* Vision Column */}
        <div className="flex flex-col items-center text-center">
          <FileText className="w-12 h-12 text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-4">Vision</h2>
          <p className="text-sm text-gray-300">
            Divine Love Secondary School is geared towards the training of male
            and female children of our time to become persons of integrity and
            leaders of tomorrow that our country cherishes and the world at
            large deserve.
          </p>
        </div>
      </div>
    </div>
  );
}

