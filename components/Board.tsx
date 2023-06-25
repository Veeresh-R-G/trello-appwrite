'use client';

import React, { use, useEffect } from 'react'
import { useBoardStore } from '@/store/boardStore';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
function Board() {
    const getBoard = useBoardStore(state => state.getBoard)
    useEffect(() => {
        
        getBoard()
    
    }, [getBoard])
    return (
        <div>
            hello
            {/* <DragDropContext>
                <Droppable droppableId="board" direction='horizontal' type='column'>
                    {(provided) =>
                    (
                        <div>
                            
                        </div>
                    )}

                </Droppable>
            </DragDropContext> */}
        </div>
    )
}

export default Board