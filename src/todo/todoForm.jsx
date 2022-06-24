import React from "react";
import SearchButton from "../template/buttons/searchButton";
import Grid from "../template/grid";
import IconButton from "../template/buttons/iconButton";
import ClearButton from "../template/buttons/clearButton";



export default props =>{
    const keyHandler=(e) =>{
        if (e.key ==='Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if (e.key ==='Escape'){
            props.handleClear()
        }
    }
    return(
        <div role='form' className="todoForm">
    
            <Grid cols='12 9 10'>
                <input id="description" className="form-control" 
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    placeholder="Adicione uma tarefa"
                    value={props.description}></input>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={props.handleAdd}/>
                    <SearchButton style='info' icon='search'
                        onClick={props.handleSearch}/>
                    <ClearButton style='default' icon='close'
                        onClick={props.handleClear}/>
                    
                </Grid>
            </Grid>
        </div>
    )
}