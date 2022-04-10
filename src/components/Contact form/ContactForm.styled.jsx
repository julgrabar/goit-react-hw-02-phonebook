import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
    border: solid 2px gray;
    border-radius: 5px;
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    label{
        margin-bottom: 15px;
    }

    button{
        width: 100px;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        background-color: #bab5b5;
        cursor: pointer;
    }
`