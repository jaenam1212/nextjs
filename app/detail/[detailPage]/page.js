import { connectDB } from "@/utill/database"
import { ObjectId } from "mongodb"

export default async function DetailPage(props) {


  const db = (await connectDB).db("forum")
  let result = await db.collection('post').findOne({_id: ObjectId(props.params.id)})

    return (
        <div>
        <h1>Detail Page</h1>
        <h4>제목</h4>
        <p>내용</p>
        </div>
    )
    }