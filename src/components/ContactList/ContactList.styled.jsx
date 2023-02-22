import styled from 'styled-components';

export const ListBtn = styled.button`
  width: 94px;
  height: 28px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #999;
  cursor: pointer;
  margin-left: 16px;
  :hover {
    background-color: #038bfa;
  }
`;

export const ListWrapper = styled.ul`
padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
`;