import React, {useState} from 'react';
import data from './assets/data';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function PageList (){
    const {list: dataList} = data;
    const [list, setState] = useState (dataList);
    let listCount = document.getElementsByClassName("list-group-item");
    function showButton(){
        if (listCount.length >= 2){
            return (
                <div><Link to={'/'} activeClassName={"Button"} exact>Main</Link></div>
            )} else {
            return (
                <Button onClick={()=>{
                        setState([...list, ...data.list])
                }}>
            Show more
        </Button>
    )}}
    return (
        <div>
        <h1>List</h1>
        <ListGroup>
        {list.map(({title, description}, key) => (
            <ListGroup.Item key={key} as={Link} to='/detail' >
                <h3>{title}</h3>
                <div>{description}</div>
            </ListGroup.Item>
        ))}
        </ListGroup>
            {showButton()}
        </div>
)}


export default PageList;