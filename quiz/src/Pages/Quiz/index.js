import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopic } from "../../services/topicService";
import { getListQuestion } from "../../services/questionService";

function Quiz() {
    const params = useParams();
    const [dataTopic, setDataTopic] = useState();
    const [dataQuestions , setDataQuestions] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id);
            setDataTopic(response);
        }
        fetchApi();
    },[]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListQuestion(params.id);
            setDataQuestions(response);
        }
        fetchApi();
    },[]);


    return (
        <>
            <h2>chu de quiz : {dataTopic && (<>{dataTopic.name}</>)}</h2>
        </>
    )
}

export default Quiz;