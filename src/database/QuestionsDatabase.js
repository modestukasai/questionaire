import QUESTIONS_14_1 from "./Questions14_1";
import QUESTIONS_D1 from "./Questions_D1";
import QUESTIONS_15_1 from "./Questions_15_1";


const Database = [
    QUESTIONS_14_1,
    QUESTIONS_D1,
    QUESTIONS_15_1
];

function QuestionsDatabase(){
    return JSON.parse(JSON.stringify(Database));
}

export default QuestionsDatabase;
