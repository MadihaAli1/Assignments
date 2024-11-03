import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Country Information App
      </h1>
      <Link href="/countries">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg  hover:bg-blue-500">
          View Country List
        </button>
      </Link>
    </div>
  );
}
