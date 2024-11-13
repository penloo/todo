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

export default function TodoInput() {
  return (
    <Box>
      <Input />
    </Box>
  );
}
