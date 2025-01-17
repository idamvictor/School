import Image from "next/image";

interface CampusProps {
  name: string;
  description: string;
  location: string;
  imageUrl: string;
}

export function Campus({ name, description, location, imageUrl }: CampusProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={`${name} campus`}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500">
          <strong>Location:</strong> {location}
        </p>
      </div>
    </div>
  );
}
