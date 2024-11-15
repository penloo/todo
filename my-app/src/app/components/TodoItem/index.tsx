import React from 'react';
import styled from 'styled-components';
import Block from '../Block/index';
import Checkbox from '../Checkbox';

const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  font-size: 1.2em;
  border-bottom: 1px solid #f0f0f0;
`;

const TodoContent = styled.span<{ checked?: boolean }>`
  overflow: hidden; //넘치는 텍스트 숨김
  text-overflow: ellipsis; //텍스트가 넘치면 ...으로 표시
  word-wrap: break-word; //텍스트가 길어지면 줄바꿈
  display: -webkit-box;
  -webkit-line-clamp: 3; //3줄이 넘기면 ...으로 표시
  -webkit-box-orient: vertical;
  cursor: text; //텍스트 입력 커서
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : 'black')};
`;

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <Checkbox checked={todo.complete} />
      <Block marginTop="10px" />
      <TodoContent checked={todo.complete}>{todo.content}</TodoContent>
    </Box>
  );
}
