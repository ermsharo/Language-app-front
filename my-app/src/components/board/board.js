import Header from "../header/Header";
import { Grid } from "../../Styles/GridSystem";
import styled from 'styled-components'
import WordInfo from "../word-info/WordInfo";
import OptionsTabs from "./../userOptions/OptionsTab";


export default function Board() {

    const WordInfoBox = styled.div`
    grid-column: 1/3;

    `

    const OptionsBox = styled.div`
    grid-column: 3/8;

    `


    const BoardBox = styled.div`
padding-top: 32px;

`
    return (
        <>
 
            
            <BoardBox>
                <Grid>
                    <WordInfoBox>
                        <WordInfo />
                    </WordInfoBox>
                    <OptionsBox>
                        <OptionsTabs></OptionsTabs>
                    </OptionsBox>

                </Grid>

            </BoardBox>
        </>
    );
}


