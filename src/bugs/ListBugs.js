import React from "react";

export const ListBugs = (props) => {
    return (
        <div>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">description</th>
                        <th scope="col">status</th>
                        <th scope="col">isActive</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {props.bugs.map((bug) => {
                        return (
                            <tr>
                                <td scope="row">{bug.id}</td>
                                <td>{bug.title}</td>
                                <td>{bug.description}</td>
                                <td>{bug.status}</td>
                                <td>{bug.isActive ? "Active" : "Inactive"}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            props.deleteBug(bug);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};