import { database } from "@/appwrite"

export const getTodosGroupedByColumn = async() => 
{
    const data = await database.listDocuments(
        //explain why we use ! in the env vars
    

        process.env.NEXT_PUBLIC_DATABASE_ID!
        ,process.env.NEXT_PUBLIC_COLLECTION_ID!);

    const todos = (data.documents)
}