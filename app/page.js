import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
      <h1 className="text-4xl m-4">Task Mangement App</h1>
      <Link href='/tasks'>Go to Dashboard</Link>
    </main>
  );
}
