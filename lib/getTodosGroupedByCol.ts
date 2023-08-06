import { database } from "@/appwrite"

export const getTodosGroupedByColumn = async() => 
{
    const data = await database.listDocuments(
        //explain why we use ! in the env vars
    

        process.env.NEXT_PUBLIC_DATABASE_ID!
        ,process.env.NEXT_PUBLIC_COLLECTION_ID!);
    
    // console.log(data.documents);
    const todos = (data.documents)

    const columns = todos.reduce((acc , todo) => {

        if(!acc.get(todo.status))
        {
            acc.set(todo.status , {
                id : todo.status,
                todos : []
            })
        }
        acc.get(todo.status)!.todos.push({
            $id : todo.$id,
            $createdAt : todo.$createdAt,
            title : todo.title,
            status : todo.status,
            ...(todo.image && {image : (todo.image)})
        });
        return acc; 
    }, new Map<TypedColumn , Column>);


    


    //adding the columns that are not in the database
    const columnsTypes: TypedColumn[] = ["todo" , "inprogress" , "done"];  
    for(const type of columnsTypes)
    {
        if(!columns.get(type))
        {
            columns.set(type , {
                id : type,
                todos : []
            })
        }
    }

   

    const sortedColumns = new Map(
        Array.from(columns.entries()).sort((a , b) => (
            columnsTypes.indexOf(a[0]) - columnsTypes.indexOf(b[0])
        ))
    )

    const board : Board = {
        columns : sortedColumns
    }

    return board;
}