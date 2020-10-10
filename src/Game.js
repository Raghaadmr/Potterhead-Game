import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AnswerBox from "./AnswerBox";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const CentreWrapper = styled.div`
background-color: #404040;
margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
`;


const Results = styled(({ score, attempts, ...props }) => (
  <div {...props}>
    Score: <span>{score}</span>, Attempts: <span>{attempts}</span>
  </div>
))`
  display: block;
  font-size: 1.5em;
  color:#660000;
  span {
    font-weight: bold;
    color:white;

  }
`;

const shuffle = arr => [...arr].sort(() => 0.5 - Math.random());

export default props => {
  const [flags, setFlags] = useState(() => shuffle(props.flags));
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(props.attempts);

  const nextFlag = () => {
    setFlags(flags.length > 1 ? flags.slice(1) : shuffle(props.flags));
    setAttempts(props.attempts);
  };

  const onCorrect = () => {
    setScore(score + 1);
    nextFlag();
  };

  const onIncorrect = () => {
    if (attempts > 1) {
      setAttempts(attempts - 1);
      return;
    }

    setScore(Math.max(0, score - 1));
    nextFlag();
  };

  const [{ emoji, name }] = flags;

  useEffect(() => props.cheatMode && console.log(name), [name]);

  return (
    <CentreWrapper>
      <img src={emoji}width="550" height="300" />
      <br/>
      <br/>

      <AnswerBox
        answer={name}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />
            <br/>

      <Results score={score} attempts={attempts} />
    </CentreWrapper>
  );
};