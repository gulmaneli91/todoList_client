import React from "react";
import IconButton from "../template/buttons/iconButton";
import AddButton from "../template/buttons/addButton";
import UndoButton from "../template/buttons/undoButton";
import TrashButton from "../template/buttons/trashButton";

export default props => {
    
    const renderRows =()=> {
        const list =props.list || []
        return list.map(todo =>(
            <tr key= {todo._id}>
                <td className={todo.done? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <AddButton style='success' icon='check' hide={todo.done}
                        onClick={
                            ()=> props.handleMarkAsDone(todo)}>
                    </AddButton>
                    <UndoButton style='warning' icon='undo' hide={!todo.done}
                        onClick={
                            ()=> props.handleMarkAsPending(todo)}>
                    </UndoButton>
                    <TrashButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={
                            () => props.handleRemove(todo)}>
                    </TrashButton>
                </td>
            </tr>
        ))
    }
    
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableactions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}