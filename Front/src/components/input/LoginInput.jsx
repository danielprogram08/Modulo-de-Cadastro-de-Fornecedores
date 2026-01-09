import styled from "styled-components";

const StyledInput = styled.input`
    background-color: #dadada;
    height: 35px;
    width: 270px;
    padding-left: 10px;
    border-radius: 10px;
    border: none;
    text-indent: 10px;
    margin-bottom: 10%;

    &::placeholder {
        font-weight: bold;
        opacity: 0.5;
    }
`;

function LoginInput(props) {
    return (
        <>
            <StyledInput type="text" placeholder="Login:" {...props} />
        </>
    );
}

export default LoginInput;