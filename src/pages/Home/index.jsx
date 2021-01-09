import React, { useState } from 'react';
import {Container, Search, Logos} from './style';
import logo from '../../assets/logo.svg';
import TextField, {Input} from '@material/react-text-field';


const Home = () => {
    const [inputValue,setInputValue] = useState('');
    return(
    <Container>
        <Search>
            <Logos src={logo} alt="logo buscador restaurante"/>
            <TextField
                label='Pesquisar Restaurante'
                outlined
                ><Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            </TextField>
        </Search>
    </Container>
    );
};

export default Home;
