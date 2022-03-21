import styled from 'styled-components';

export const MainStyle = styled.main`
  display: flex;
  justify-content: center;
  font-family: arial;
  background-color: #E0F8EC;

  h1 {
    text-align: center;
  }
`;

export const AddTaskStyle = styled.span`
  display: flex;
  justify-content: flex-end;
`;

export const SectionStyle = styled.section`
  h3 {
    text-align: center;
  }
`;

export const FiltersTastks = styled.div`
  padding: 10px;
  margin: 10px;
  

  label {
    font-size: 1.2em;
    margin-rigth: 10px;
    margin-left: 10px;
  }
`;

export const FilterTitle = styled.label`
  display: flex;
  justify-content: center;
  font-size: 1.2em;
`;

export const MainTask = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    text-align: center;
  }

  li {
    list-style: none;
    padding: 10px;
  }

  button {
    padding: 5px;
    margin-top: 8px;
    margin-rigth: 10px;
    font-size: 0.9em;
    border: 1px solid;
    border-radius: 5px;
  }

  span {
    font-weight: bold;
  }
`;

export const RegiterStyle = styled.div`
  display: flex;
  justify-content: center;
  
  h1 {
    text-align: center;
  }

  form div {
    display: flex;
    flex-direction: column;
  }

  form label {
    margin: 5px;
  }

  form input {
    margin-top: 2.5px;
  }

  form textarea {
    margin-top: 2.5px;
  }

  form button {    
    align-self: flex-end;
    padding: 10px;
    margin-left: 12px;
    width: 75px;
    font-size: 1em;
    background-color: green;
    border: 1px solid;
    border-radius: 5px;
  }
`;

export const AddEditStyle = styled.div`
  background-color: #E0F8EC;
  padding: 10px;
    
`;

export const EditStyle = styled.div`
  display: flex;
  justify-content: center;
  
  h1 {
    text-align: center;
  }

  form div {
    display: flex;
    flex-direction: column;
  }

  form label {
    margin: 5px;
  }

  form input {
    margin-top: 2.5px;
  }

  form textarea {
    margin-top: 2.5px;
  }

  form button {    
    align-self: flex-end;
    padding: 10px;
    margin-left: 12px;
    width: 75px;
    font-size: 1em;
    background-color: green;
    border: 1px solid;
    border-radius: 5px;
  }
`;
