import Headline from "@/containers/Headline";

async function getHeadlines() {
  const res = await fetch('http:localhost:3000/api')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  // const response = await getHeadlines();
  return (
    <main className="p-4">
      <Headline />
    </main>
  );
}
