import React, { useState, useEffect } from "react";

function AlgorithmPage() {
    //const sample1 = {id: 1, title: "test", company: "Microsoft", tag: "tree"};
    const [algorithms, setAlgorithms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/algorithms/findAllAlgorithm', {
        headers: {
          "Content-Type": "application/json",
        },
        method: "get",
      }).then((response) => {
        console.log(response)
        return response.json();
      }).then((json) => {
        console.log("before set data")
        console.log(json);
        setAlgorithms(json);
      })
    }, []);

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