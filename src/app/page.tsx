import { database } from "@/drizzle";
import { hello } from "@/drizzle/schema";

export default async function Home() {
  
  const helloworld = await database.selectDistinct().from(hello);
  return (
    <div>
      <h1>rtvcl starter</h1>
      <p>{helloworld[0].description}</p>
    </div>
  );
}
