export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div>
        <h1 className="text-4xl font-bold text-red-500">Something went wrong</h1>
        <p className="mt-2 text-gray-600">Please try again or contact support.</p>
      </div>
    </div>
  );
}