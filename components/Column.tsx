import { Draggable, Droppable } from "react-beautiful-dnd";
type Props = {
    id: TypedColumn,
    todos : Todo[],
    index : number
}


const idToColumnText : {
    [key in TypedColumn] : string;
} = {
    "todo" : 'To Do',
    "inprogress" : 'In Progress',
    "done" : 'Done' 
}

const Column = ({id , todos , index} : Props) => {
    return ( 
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div 
                {...provided.draggableProps}
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                >

                {/* This is for individual tasks that can be moved around */}
                <Droppable droppableId={index.toString()} type="card" >

                {(provided , snapshot) => (
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`p-2 rounded-2xl shadow-sm ${snapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'}`}
                    >   
                    <div className="flex justify-between">
                        <h2 className="flex justify-between font-bold text-xl p-1">{idToColumnText[id]}</h2>
                        <span className="text-gray-500 bg-gray-200 rounded-full w-8 px-3 pt-1 h-8 font-normal text-sm">{todos.length}</span>
                    </div>


                    <div className="space-y-2">
                        {todos.map((todo , index) => (
                            <Draggable
                            key={todo.$id}
                            index={index}
                            draggableId={todo.$id}
                            >
                                {(provided) => (
                                    <TodoCard 
                                    todo={todo}
                                    index={index}
                                    id={id} 
                                    innerRef={provided.innerRef} 
                                    draggableProps={provided.draggableProps} 
                                    dragHandleProps={provided.dragHandleProps) 
                                />
                                )
                                }
                            </Draggable>
                        )
                        }


                    </div>

                    </div>
                )}

                </Droppable>
                </div>
            )}
        </Draggable>
     );
}
 
export default Column;