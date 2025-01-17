import Image from "next/image";
import { notFound } from "next/navigation";
import { campuses, Campus } from "../../data/campuses";

export function generateStaticParams() {
  return campuses.map((campus) => ({
    id: campus.id,
  }));
}

export default async function CampusPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campus = campuses.find((c) => c.id === id);

  if (!campus) {
    notFound();
  }

  return (
    <div className="motion-preset-slide-right-md min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection campus={campus} />
        <FeaturesSection features={campus.features} />
        <StatsSection stats={campus.stats} />
      </main>
    </div>
  );
}

function HeroSection({ campus }: { campus: Campus }) {
  return (
    <div className="relative h-[60vh] flex items-center justify-center text-white">
      <Image
        src={campus.imageUrl || "/placeholder.svg"}
        alt={campus.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{campus.name}</h1>
        <p className="text-xl md:text-2xl mb-8">{campus.slogan}</p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          {campus.description}
        </p>
      </div>
    </div>
  );
}

function FeaturesSection({ features }: { features: string[] }) {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Campus Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-6 w-6 text-primary mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatsSection({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Campus at a Glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
