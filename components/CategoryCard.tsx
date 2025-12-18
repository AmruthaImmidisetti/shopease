import Link from 'next/link';

type CategoryCardProps = {
  label: string;
  value: string;
};

export default function CategoryCard({
  label,
  value,
}: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${value}`}
      className="
        bg-white rounded-xl shadow-sm
        hover:shadow-md transition
        p-6 flex items-center justify-center
        text-gray-800 font-semibold
        hover:text-blue-600
      "
    >
      {label}
    </Link>
  );
}
