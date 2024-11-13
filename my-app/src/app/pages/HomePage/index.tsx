import TodoInput from 'app/components/TodoInput';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff0000;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 25px 100px -60px rgba(0, 0, 0, 0.18);
`;
const TitleBox = styled.div`
  width: 40%;
  margin: 10px;
  border-radius: 30px;
  background-color: #2a66ff;
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 20px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

const TodoList = styled.div``;

const TodoItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  font-size: 1.2em;
  border-bottom: 1px solid #f0f0f0;
`;
const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <TitleBox>
            {' '}
            <Title>To do List</Title>
          </TitleBox>
          <TodoInput />
          <TodoList>
            <TodoItem>
              <TodoCheck type="checkbox" />
              <span>하재민</span>
              <button>Done</button>
            </TodoItem>
            <TodoItem>
              <TodoCheck type="checkbox" />
              <span>뭘봐</span>
              <button>Done</button>
            </TodoItem>
            <TodoItem>
              <TodoCheck type="checkbox" />
              <span>흥</span>
              <button>Done</button>
            </TodoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
