import { useState, useEffect, createContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Header, Help, Login, Account, Registration, RequiredTraining, UTM, 
  Training, CreateTraining, Admin, UserAccount, CreateUserAccount 
} from './components';

export const AppContext = createContext();

const App = ()=> {

    const [user,setUser]=useState(1);
    const [isVerified, setIsVerified] = useState(false)
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const ContextObject = { user, setUser,
                            isVerified,  setIsVerified,  
                            firstName, setFirstName,
                            lastName, setLastName,
                            testStr: `I'm using context!`
                          }
    
    console.log(ContextObject);
    
    return(
        <>
        <AppWrapper id="App">
            <AppContext.Provider value={ContextObject}>
                <BrowserRouter>
                    <HeaderContainer><Header /></HeaderContainer>
                    <BodyContainer>
                        <Routes>
                            <Route path='/' element={<Help />} />
                            <Route path='/login/*' element={<Login />} />
                            <Route path='/account/*' element={<Account />} />
                            <Route path='/registration/*' element={<Registration />} />
                            <Route path='/required-training/' element={<RequiredTraining />} />
                            <Route path='/required-training/:training/*' element={<Training />} />
                            <Route path='/create-training/*' element={<CreateTraining />} />
                            <Route path='/unit-training-manager/*' element={<UTM />} />
                            <Route path='/administrator/*' element={<Admin />} />
                            <Route path='/accounts/:user/*' element={<UserAccount />} />
                            <Route path='/create-account/*' element={<CreateUserAccount />} />
                            <Route path='/*' element={<Help />} /> catch all
                        </Routes>
                    </BodyContainer>
                </BrowserRouter>
            </AppContext.Provider>
        </AppWrapper>
        </>
    );
}
export default App

const AppWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 10% 90%;
  background-color: Cornsilk;
`;

const HeaderContainer = styled.div`
grid-row: 1 / 2;
`
const BodyContainer = styled.div`
grid-row: 2 / 3;
`