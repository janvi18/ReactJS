import React from 'react'
import axios from 'axios'

export const UserApiDemo = () => {

    const getUser = () => {

        axios.get("http://localhost:8080/users").then(res => {

            console.log(res.data)
        })
    }

    const addUser = () => {

        axios.post("https://reqres.in/api/users", {
            name: "Raj",
            job: "Artist"
        }).then(res => {
            if (res.status === 201) {
                alert("data addedd")
                console.log(res.data)
            }
        })
    }

    const addUser1 = () => {
        var data = {
            uName: "janvi",
            uEmail: "janvi@gmail.com",
            uPassword: "janvi123",
            birthData: "1999-02-15"
        }
        axios.post("http://localhost:8080/adduser", data).then(res => {
            console.log(res.data)
        })
    }
    const deleteUser = () => {
        axios.delete("https://reqres.in/api/users/2").then(res => {
            if (res.status === 204) {
                alert("data deleted")
                console.log("***", res.data)
            }
        })
    }
    const deleteUser1 = () => {
        axios.delete("http://localhost:8080/delete/15").then(res => {
            console.log(res.data)
        })

    }
    const updateUser = () => {
        var data = {
            name: "raj",
            job: "artist"
        }
        axios.put("https://reqres.in/api/users/2", data).then(res => {

            console.log(res.data)
        })
    }
    const updateUser1 = () => {
        var data = {
            uId: 2,
            uName: "jhanvi",
            uEmail: "jhanvi@gmail.com",
            uPassword: "jhanvi123",
            birthData: "1999-06-13"
        }
        axios.put("http://localhost:8080/updateuser", data).then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <button onClick={getUser}>GET</button>
            <button onClick={addUser}>ADD</button>
            <button onClick={addUser1}>ADD1</button>
            <button onClick={deleteUser}>DELETE</button>
            <button onClick={deleteUser1}>DELETE1</button>
            <button onClick={updateUser}>UPDATE</button>
            <button onClick={updateUser1}>UPDATE1</button>
        </div>
    )
}