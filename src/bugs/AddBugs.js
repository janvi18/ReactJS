import React, { useState } from 'react'
import { BugForm } from './BugForm'
import { ListBugs } from './ListBugs'


export const AddBugs = () => {

    var [bugs, setbugs] = useState(
        [
            {
                id: 1,
                title: 'Bug 1',
                description: 'Bug 1 description',
                status: 'New',
                isActive: true
            }

        ])
    const insertBug = (bug) => {
        console.log("insert bug....")
        console.log(bug)
        //spread operator.//push.
        setbugs([...bugs, bug])

    }
    const deleteBug = (bug) => {
        console.log(bug)
        bugs = bugs.filter(bugs => { return bugs.id !== bug.id })
        setbugs(bugs)

    }
    return (
        <div>
            <BugForm insertBug={insertBug} />
            <ListBugs bugs={bugs} deleteBug={deleteBug} />
        </div>
    )
}