import React, { memo } from "react";
import styled from "styled-components";
import { IGameStats } from "../common/interface";

interface Props {
  gameStats: IGameStats;
}

const GameStats = ({ gameStats }: Props) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <Container className="GameStats GameStats__right">
      <li>Level</li>
      <Value>{level}</Value>
      <li>Lines to level</li>
      <Value>{linesToLevel}</Value>
      <li>Points</li>
      <Value>{points}</Value>
    </Container>
  );
};

const Container = styled.ul`
  position: absolute;
  width: 22vw;
  list-style-type: none;
  color: rgba(255, 255, 255, 0.5);

  right: 0;
  bottom: 0;
  text-align: left;
`;

const Value = styled.li`
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 1);
`;

export default memo(GameStats);
