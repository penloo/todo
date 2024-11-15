import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.1em;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput({
  setTodoList2,
}: {
  setTodoList2: (todo: ITodoItem) => void;
}) {
  const [content, setContent] = React.useState<string>('');

  return (
    <Box>
      <Input
        value={content}
        placeholder="할일을 입력하거라"
        onChange={e => setContent(e.target.value)}
        onKeyDown={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          setTodoList2({
            id: new Date().getTime().toString(),
            edited: false,
            content: content,
            complete: false,
          });
          setContent('');
        }}
      />
    </Box>
  );
}
