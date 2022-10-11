import React, { useState } from "react";

function AlgorithmPage() {
    const sample1 = {id: 1, title: "test", company: "Microsoft", tag: "tree"};
    const [algorithms, setAlgorithms] = useState([sample1]);

    const DisplayData = algorithms.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.title}</td>
                    <td>{info.tag}</td>
                    <td>{info.company}</td>
                </tr>
            )
        }
    )

    return (
        <div>
            <table class="algorithmList">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>tag</th>
                    <th>company</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
             
        </div>
    )
}

export default AlgorithmPage;