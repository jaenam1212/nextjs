import { connectDB } from "@/utill/database"

export default async function Home() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()
  console.log(result)


  return (
    <div>
      hihi
    </div>
  )
}
