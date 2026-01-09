import styled from "styled-components";

const StyledInput = styled.input`
    background-color: #dadada;
    height: 35px;
    width: 270px;
    padding-left: 10px;
    border-radius: 10px;
    border: none;
    text-indent: 10px;

    &::placeholder {
        font-weight: bold;
        opacity: 0.5;
    }
`;

function PasswordInput(props) {
    return (
        <>
            <StyledInput type="password" placeholder="Senha:" {...props} />
        </>
    );
}

export default PasswordInput;