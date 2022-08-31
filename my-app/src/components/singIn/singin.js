import styled from 'styled-components'
import { useState } from "react";
import UserInput from "./UserInput";
import PasswordInput from "./PasswordInput";

const PageBox = styled.div`
padding-top: 32px;

`
export default function SingIn() {




    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <PageBox>
            <UserInput user={user} setUser={setUser} />
            <PasswordInput setPassword={setPassword} />
        </PageBox>
    );
}


