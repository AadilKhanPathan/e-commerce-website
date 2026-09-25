
import Card from "./components/Card";
import Hero from "./components/Hero";


export  default async function Home({searchParams}) {
  const params = await searchParams;

  const category = params.category || "Men";
  return (
    <div>
      <Hero/>
      <Card category={category}/>
    
    </div>
  );
}
