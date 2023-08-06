'use client';

import React, { use, useEffect, useState } from 'react'
import { useBoardStore } from '@/store/boardStore';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import Column from './Column';
function Board() {
    const getBoard = useBoardStore(state => state.getBoard)
    const board = useBoardStore(state => state.board)

    const [todoList , setTodoList] = useState(undefined)
    const [inProgressList , setInProgressList] = useState(null)
    const [doneList , setDoneList] = useState(null)


    useEffect(() => {
        
        getBoard()
        setTodoList(board.columns.get('todo'))
        setInProgressList(board.columns.get('inProgress'))
        setDoneList(board.columns.get('done'))
    }, [getBoard])
   

    const handleOnDragEnd = (result : DropResult) => {
        
    }
         
    return (
        <div>
            hello
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="board" direction='horizontal' type='column'>
                    {(provided ) =>
                    (
                        <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
                        >
                            {Array.from(board.columns.entries()).map(([id , column] , index) =>(
                                
                                  <Column 
                                  key={id}
                                  id={id} 
                                  todos={column.todos}
                                  index={index}/>
                            ))}
                            
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Board