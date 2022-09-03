import React, { useState } from "react";

export const RegisterBug = () => {

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')

    const descriptonHandler = (e) => {
        console.log(e.target.value)
        setdescription(e.target.value)
    }


    const submitHandler = (e) => {
        //event
        e.preventDefault();
        //console.log(e.target.elements.title.value);
        alert(`Title: ${title} \n Description: ${description}`)
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <table>
                    <tr>
                        <td>Enter Title</td>
                        <td>
                            <input type="text" name="title" onChange={(e) => { settitle(e.target.value) }}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter description</td>
                        <td>
                            <input type="text" name="description" onChange={(e) => { descriptonHandler(e) }}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Submit"></input>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};