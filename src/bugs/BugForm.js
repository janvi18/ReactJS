import React, { useState } from "react";

export const BugForm = (props) => {
    const [title, settitle] = useState("");
    const [id, setid] = useState("");
    const [description, setdescription] = useState("");
    const [status, setstatus] = useState("");
    const [isActive, setisActive] = useState("");

    const submitHandler = (e) => {


        e.preventDefault()
        var bug = {
            id: id,
            title: title,
            description: description,
            status: status,
            isActive: isActive
        }
        //console.log(bug)
        props.insertBug(bug)


    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Id</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Id"
                        onChange={(e) => { setid(e.target.value) }}
                    />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Title"
                        onChange={(e) => { settitle(e.target.value) }}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Description</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Description"
                        onChange={(e) => { setdescription(e.target.value) }}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Status</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Status"
                        onChange={(e) => { setstatus(e.target.value) }}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Active</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="IsActive"
                        onChange={(e) => { setisActive(e.target.value) }}
                    />
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};