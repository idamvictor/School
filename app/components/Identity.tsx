import React from "react";
import { CircleCheck } from "lucide-react";

export default function Identity() {
  return (
    <div className="flex container mx-auto">
      <IdentityCard />
      <IdentityCard />
      <IdentityCard />
    </div>
  );
}

function IdentityCard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <CircleCheck />
      <div className="text-2xl font-bold leading-tight text-white whitespace-nowrap">
        Mission
      </div>
      <div>
        In Mordern Ideal College emphasis on academic excellence, hard work,
        discipline, conduct, comportment, moral and spiritual education, love
        for God and neighbour remain our hall mark. Hence the reasons for the
        choice of the attributes involved in our motto thus: &apos;Knowledge,
        Love and service&apos;
      </div>
    </div>
  );
}
