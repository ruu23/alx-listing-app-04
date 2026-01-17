import type { PropertyProps } from "@/interfaces/index";

type Props = {
  property: PropertyProps;
};

export default function PropertyCard({ property }: Props) {
  return (
    <div className="rounded-xl border p-3">
      <img
        src={property.image}
        alt={property.name}
        className="h-48 w-full rounded-lg object-cover"
      />

      <div className="mt-3">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-600">{property.address.city}</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="font-medium">${property.price}</span>
          {property.rating != null && (
            <span className="text-sm">⭐ {property.rating}</span>
          )}
        </div>
      </div>
    </div>
  );
}
