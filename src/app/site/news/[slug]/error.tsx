'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl">No News Received!</p>
      <p className="mt-4 text-gray-600">{error.message}</p>
    </div>
  );
}