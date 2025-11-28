// src/app/(site)/news/[slug]/loading.tsx
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-red-600"></div>
      <p className="mt-6 text-2xl">Loading News...</p>
    </div>
  );
}