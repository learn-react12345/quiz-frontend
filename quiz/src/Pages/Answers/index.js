import { useEffect, useState } from "react";
import { getAnswersByUserId } from "../../services/answersService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom"
function Answers() {
    const [dataAnswers, setDataAnswers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const answersByUserId = await getAnswersByUserId();
            const topics = await getListTopic();

            let result = [];
            for (let i = 0 ; i < answersByUserId.length ; i++) {
                result.push({
                    ...topics.find(item => String(item.id) === String(answersByUserId[i].topicId)),
                    ...answersByUserId[i]
                });
            }
            setDataAnswers(result.reverse());
        }
        fetchApi();
    },[]);
    return (
        <>
            <h2>danh sach cac bai da lam </h2>
            {dataAnswers.length > 0 && (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ten chu de</th>
                    </tr>
                </thead>
                <tbody>
                    {dataAnswers.map(item => (
                    <tr key = {item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <Link to = {"/result/" +item.id } >xem chi tiet</Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

            )}
        </>
    )
}

export default Answers;