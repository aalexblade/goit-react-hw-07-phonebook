import styled from 'styled-components';

export const NameForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid;
  padding: 16px;
  border-radius: 5px;
  gap: 8px;
`;

export const FormLabel = styled.label`
  display: inline-flex;
  flex-direction: column;
  font-weight: 500;
`;

export const FormInput = styled.input`
  margin: 8px 0;
  width: 180px;
  height: 18px;
`;

export const SubmitBtn = styled.button`
  width: 130px;
  height: 28px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #999;
  cursor: pointer;
  :hover {
    background-color: #038bfa;
  }
`;




export const PhoneBookWrapper = styled.div`
padding-left: 24px;
`;
