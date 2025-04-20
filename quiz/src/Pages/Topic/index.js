import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { getListTopic } from "../../services/topicService";
function Topic() {
    const [topics , setTopics] = useState([]);

    useEffect (() => {
        const fetchApi = async () => {
            const response = await getListTopic();
            setTopics(response);
        }
        fetchApi();
    },[]);
    
    return (
        <>
            <h2>danh sach chu de</h2>
            {topics.length > 0 && (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ten chu de</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map(item => (
                    <tr key = {item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <Link to = {"/quiz/" +item.id } >lam bai</Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

            )}
        </>
    )
}

export default Topic;