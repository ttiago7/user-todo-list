import styled from 'styled-components';

export const ContainerSC = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 678px;
    max-width: 100%;
    min-height: 400px;
    `;

export const SignInContainerSC = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 2;
    `;

export const FormSC = styled.form`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    `;

export const TitleSC = styled.h1`
    font-weight: bold;
    margin: 0;
    `;

export const InputSC = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    `;

export const ButtonSC = styled.button`
    border-radius: 20px;
    border: 1px solid #ea7d1e;
    background-color: #ea7d1e;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
    `;

export const AnchorSC = styled.a`
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
    `;
export const OverlayContainerSC = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
`;

export const OverlaySC = styled.div`
background: #ea7d1e;
background: -webkit-linear-gradient(to right, #ff4b2b, #ea7d1e);
background: linear-gradient(to right, #ff4b2b, #ea7d1e);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
`;

export const OverlayPanelSC = styled.div`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    `;

export const RightOverlayPanelSC = styled(OverlayPanelSC)`
        right: 0;
        transform: translateX(0);
    `;

export const ParagraphSC = styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px
    `;
