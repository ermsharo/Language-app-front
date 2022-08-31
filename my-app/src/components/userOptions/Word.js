import styled from 'styled-components'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const GenerateWordColor = (word) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let colors = ['#FEF3E6', '#F8F3ED', '#FFF6E5', '#FCF7E8', '#F8F7ED',
        '#F3F3F2', '#FFFFE5', '#F5F9EC',
        '#F2FFE5',
        '#F2F4F0',
        '#EEF8EC',
        '#E5FFE5',
        '#EBFAEE',
        '#E8FDF1',
        '#EBFAF4',
        '#EFF5F4',
        '#F0F5F5',
        '#E5FFFF',
        '#E7F8FD',
        '#EDF4F7',
        '#F1F2F4',
        '#EEF2F6',
        '#E8EFFD',
        '#EFEFF5',
        '#EFEDF7',
        '#F4E5FF']

    return colors[alphabet.indexOf(word[0])];
}

const WordBox = styled.div`
padding: 4px;
border: 2px solid black;
text-align: center;

`

export default function Word({ item, index }) {




    return (
        <WordBox style={{ backgroundColor: GenerateWordColor(item) }}>
            {item} <AiFillStar /> <AiOutlineStar />
        </WordBox>
    );
}


