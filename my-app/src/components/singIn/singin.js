import Header from "../header/Header";
import { Grid } from "../../Styles/GridSystem";
import styled from 'styled-components'
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";


export default function SingIn() {

    const WordInfoBox = styled.div`
    grid-column: 1/3;

    `

    const OptionsBox = styled.div`
    grid-column: 3/8;

    `


    const PageBox = styled.div`
padding-top: 32px;

`
    return (
        <PageBox>
           Sing in 
        </PageBox>
    );
}


