import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const InputLogin = styled(Field)`
  font-size: 22px;
  margin-top: 5px;
`;

export const FormLogin = styled(Form)`
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 5px;
  box-shadow: ${props => props.theme.filters.shadow};
  background-image: ${props => props.theme.gradients.frescoCrush};
`;

export const LabelLogin = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const BtnLogin = styled.button`
  width: 200px;
  padding: 10px;
  margin: 0 auto;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  border: none;
  color: rgb(45, 45, 45);
  border-radius: 5px;
  box-shadow: ${props => props.theme.filters.shadow};
  background-color: rgb(250, 240, 40, 0.3);
  :hover {
    background-color: #fdbb2d;
  }
  :active {
    transform: translateY(1px);
  }
`;
