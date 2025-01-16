import Link from "next/link";
import { campuses } from "../data/campuses";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">
            Welcome to Our University
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campuses.map((campus) => (
              <Link
                key={campus.id}
                href={`/campus/${campus.id}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2">{campus.name}</h2>
                <p className="text-gray-600 mb-4">{campus.slogan}</p>
                <span className="text-blue-600 hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}