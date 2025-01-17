import { CheckCircle, LightbulbOff, FileText } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="bg-secondary text-secondary-foreground px-6 py-[90px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission Column */}
        <div className="flex flex-col items-center text-center shadow-lg p-6 rounded-lg intersect:motion-preset-slide-down-lg intersect:motion-delay-500">
          <CheckCircle className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-4">Mission</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
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
        <div className="flex flex-col items-center text-center shadow-lg p-6 rounded-lg intersect:motion-preset-slide-down-lg intersect:motion-delay-700">
          <LightbulbOff className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-4">Our Motto</h2>
          <p className="text-sm text-muted-foreground">
            In Modern Ideal college emphasis on academic excellence, hard work,
            discipline, respect, commitment, moral and spiritual education, love
            for God and neighbour remain our hall mark, hence the reasons for
            the choice of the attributes noted in our motto thus:
          </p>
          <p className="mt-4 font-medium text-muted-foreground">
            &quot;Knowledge, Love and service&quot;
          </p>
        </div>

        {/* Vision Column */}
        <div className="flex flex-col items-center text-center shadow-lg p-6 rounded-lg intersect:motion-preset-slide-down-lg intersect:motion-delay-900">
          <FileText className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-4">Vision</h2>
          <p className="text-sm text-muted-foreground">
            Modern Ideal College is geared towards the training of male and
            female children of our time to become persons of integrity and
            leaders of tomorrow that our country cherishes and the world at
            large deserve.
          </p>
        </div>
      </div>
    </div>
  );
}

