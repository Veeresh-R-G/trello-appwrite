interface Board{
    columns : Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column{
    id : TypedColumn,
    todos : Todo[]
}

interface Todo{
    $id : string, // $ is used to denote that this is a unique id
    $createdAt : string,
    title: string,  
    status: TypedColumn;
    image?: Image; // not compulsory to all the todos so ? is used
}

interface Image{
    bucketID : string,
    fileID : string,
}