
import React, {useState} from "react";
import './styles/App.scss';


const questions = [
    {
        title: 'Вопрос 1',
        level: 'Eazy',
        variants: ['Ответ1', 'Ответ2', 'Ответ3'],
        correct: 0,
    },
    {
        title: 'Вопрос 2 ',
        level: 'Middle',
        variants:  ['Ответ1', 'Ответ2', 'Ответ3'],
        correct: 1,
    },
    {
        title: 'Вопрос 3',
        level: 'Hard',
        variants: ['Ответ1', 'Ответ2', 'Ответ3'],
        correct: 0,
    },
];

function Result({correct}) {
    return (
        <div className="result">
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

function Game({ step, question, onClickVariant}) {

    const   percentage = Math.round(step / questions.length * 100);

    return (
        <>
            <h3>{question.level}</h3>
            <div className="progress">
                <div style={{width: `${percentage}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => (
                        <li onClick={() => onClickVariant(index)} key={text}>
                            {text}
                        </li>
                    ))}
            </ul>
        </>
    );
}

const Quizz = function () {

    const [step,setStep] = useState(0);
    const [correct,setCorrect] = useState(0);
    const question = questions[step];

    const onClickVariant = (index) => {
        console.log(step,index);
        setStep(step+1);
        if (index === question.correct) {
            setCorrect(correct+1);
        }
    }

    return (
        <div className="App">
            {step !== questions.length ? (<Game step ={step} question={question} onClickVariant = {onClickVariant}/>
            ) : (
                <Result correct ={correct} />
            )}

            {/* <Result /> */}
        </div>
    );
}

export default Quizz;
