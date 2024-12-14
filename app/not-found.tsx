import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <p className="px-6 py-3 bg-[#6B0606] text-white rounded-md hover:bg-gray-500">
          Go Back Home
        </p>
      </Link>
    </div>
  );
}
