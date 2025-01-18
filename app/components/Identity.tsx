import { CheckCircle, LightbulbOff, FileText } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="bg-secondary text-secondary-foreground px-6 py-[90px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission Column */}
        <div className="flex flex-col items-center text-center shadow-lg p-6 rounded-lg">
          <CheckCircle className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-4">Mission</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              To guide today’s young men and women toward holistic education.
            </li>
            <li>To promote excellence in character and academics.</li>
            <li>
              To meet the educational standards set by the school board,
              nurturing individuals to be morally and spiritually productive in
              their service to God and humanity.
            </li>
          </ul>
        </div>

        {/* Motto Column */}
        <div className="flex flex-col items-center text-center shadow-lg p-6 rounded-lg ">
          <LightbulbOff className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-4">Our Motto</h2>
          <p className="text-sm text-muted-foreground">
            At Modern Ideal College, we prioritize academic excellence, hard
            work, discipline, respect, commitment, moral and spiritual growth,
            and love for God and neighbor. These core values are reflected in
            our motto:
          </p>
          <p className="mt-4 font-medium text-muted-foreground">
            &quot;Knowledge, Love and service&quot;
          </p>
        </div>

        {/* Vision Column */}
        <div className="flex flex-col items-center text-center shadow-lg p-6 rounded-lg">
          <FileText className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-4">Vision</h2>
          <p className="text-sm text-muted-foreground">
            Modern Ideal College is dedicated to nurturing today’s young men and
            women into individuals of integrity and future leaders who will be
            valued by our nation and admired globally.
          </p>
        </div>
      </div>
    </div>
  );
}

