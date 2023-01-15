import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  color: #fff;
  background-color: #2b4055d0;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.7) 0px 2px 5px 0px;

  :hover {
    background-color: #2b4055f0;
    box-shadow: rgba(99, 99, 99, 0.9) 0px 2px 5px 1px;
  }
  :disabled {
    background-color: #2b405580;
    box-shadow: rgba(99, 99, 99, 0.4) 0px 2px 5px 0px;
  }
`;

export const Text = styled.p`
  flex-grow: 1;
  margin-right: 8px;

  :first-of-type {
    flex-grow: 0;
    font-weight: 500;
  }
`;