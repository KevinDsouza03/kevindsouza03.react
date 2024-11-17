"use client";

import { useEffect, useState } from "react";


export default function LogList() {
    // So I'll need the Logs, I guess make a way to get them, then a way to display them. That will be this file. Attach the actual grabbing of files later.
    const [log, setLog] = useState("List");
    useEffect(() => {
        console.log(log);

    }, [log])
    return (
        <div>
            {
                logs.map(log => (
                   <div className="" key={[log.id]}> 
                    <h2>{log.title}</h2>
                    <p>{log.description}</p>
                   </div>

                ))}

        </div>

    )

}