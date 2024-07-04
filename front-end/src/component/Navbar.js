import React, {useState} from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)

  let menuicon
  let menu
  let menumask 

  if(showMenu)
  {
    menuicon = <img src='/svg/cross.svg' alt='' onClick={()=> setShowMenu(!showMenu)} />
    menu= <Menu>
        <Div>
            <MenuBar>
                {menuicon}
            </MenuBar>
        </Div>
        <List onClick={() => navigate('/home')}>
                <HomeIcon>
                    <img src='/svg/home.svg' alt='' />
                </HomeIcon>
                <IconValue>
                    <h4>Home</h4>
                </IconValue>
        </List>
        <List onClick={() => navigate('/profile')}>
                <ProfileIcon>
                    <img src='/svg/profile.svg' alt='' />
                </ProfileIcon>
                <IconValue>
                    <h4>Profile</h4>
                </IconValue>
        </List>
        <List onClick={() => navigate('/yourActivity')}>
            <ActivityIcon>
                <img src='/svg/activity.svg' alt='' />
            </ActivityIcon>
            <IconValue>
                <h4>History</h4>
            </IconValue>
        </List>
        <List onClick={() => navigate('/addCase')}>
            <AddIcon>
                <img src='/svg/add.svg' alt='' />
            </AddIcon>
            <IconValue>
                <h4>Add Case</h4>
            </IconValue>
        </List>
        <List>
            <EmergeIcon>
                <img src='/svg/emergence.svg' alt='' />
            </EmergeIcon>
            <IconValue>
                <h4>Emergence</h4>
            </IconValue>
        </List>
        <List>
            <SettingIcon>
                <img src='/svg/setting.svg' alt='' />
            </SettingIcon>
            <IconValue>
                <h4>Setting</h4>
            </IconValue>
        </List>
        <List onClick={() => navigate('/aboutUs')}>
            <AboutusIcon>
                <img src='/svg/im (1).svg' alt='' />
            </AboutusIcon>
            <IconValue>
                <h4>About us</h4>
            </IconValue>
        </List>
        
    </Menu>

    menumask= <MenuMask onClick={()=> setShowMenu(!showMenu)}>
    </MenuMask>

  }
  else
  {
    menuicon = <img src='/svg/menubar.svg' alt='' onClick={()=> setShowMenu(!showMenu)} />
  }


  return (
    <MainContainer>
        <Container>
            <Inner>
                <Left>
                    <MenuBar>
                        {menuicon}
                    </MenuBar>
                    <h2>Tacking Unattended</h2>
                    <Logo >
                        <Link to='/'>
                            <img src='/svg/im.svg' alt='' />
                        </Link>
                    </Logo>
                </Left>
                <SearchBar>
                    <input type='text' placeholder='Search...' />
                    <SearchIcon>
                        <img src='/svg/search.svg' alt='' />
                    </SearchIcon>
                </SearchBar>
                <Right>
                    <NotifiButton >
                        <img src='/svg/noti.svg' alt=''  onClick={() => navigate('./notification')}/>
                    </NotifiButton>
                    <ProfileButton onClick={() => navigate('/profile')}>
                        <img src='/svg/profile.svg' alt='' />
                    </ProfileButton>
                </Right>
            </Inner>
            <MobileSearchBar>
                <input type='text' placeholder='Search...' />
                <SearchIcon>
                    <img src='/svg/search.svg' alt='' />
                </SearchIcon>
            </MobileSearchBar>
        </Container>
        <MenuContainer>
            {menu}
            {menumask}
        </MenuContainer>
    </MainContainer>
  )
}
const MainContainer = styled.div`
    width: 100%;
`;

const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color : white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 550px)
    {
        height: 120px;
        flex-direction: column;
    }
`;

const MenuContainer = styled.div`
    width: 100%;
`;

const Div = styled.div`
    padding : 10px;
`;

const Menu = styled.div`
    position : fixed;
    z-index: 1;
    top: 0px;
    height: 100%;
    width: 45%;
    background-color: white;

    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 550px)
    {
        width: 250px;
    }

`;

const List =styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    
   :hover{
        border: 2px solid #ffa807f5;
        width: 98%;
        border-radius: 5px;
        background-color: #ffa807f5;
        cursor: pointer;
   }
`;

const HomeIcon =styled.div`
    padding-left: 10px;
    padding-right: 2px;
    width: 25%;
    img{
        width: 32px;
    }
`;
const ProfileIcon =styled.div`
    padding-left: 8px;
    padding-right: 4px;
    width: 25%;
    img{
        width: 35px;
    }
`;
const ActivityIcon =styled.div`
    padding-left: 7px;
    padding-right: 5px;
    width: 25%;
    img{
        width: 40px;
    }
`;
const AddIcon =styled.div`
    padding-left: 12px;
    padding-right: 0px;
    width: 25%;
    img{
        width: 32px;
    }
`;
const EmergeIcon =styled.div`
    padding-left: 10px;
    padding-right: 2px;
    width: 25%;
    img{
        width: 35px;
    }
`;
const SettingIcon =styled.div`
    padding-left: 12px;
    padding-right: 0px;
    width: 25%;
    img{
        width: 30px;
    }
`;
const AboutusIcon =styled.div`
    padding-left: 8px;
    padding-right: 4px;
    width: 25%;
    img{
        width: 45px;
    }
`;

const IconValue =styled.div`
    width: 80%;
    align-items: center;
    justify-content: center;

`;

const MenuMask = styled.div`
    top: 0px;
    position : fixed;
    height: 100%;
    width: 100%;
    background-color: #22211f7e;
`;

const Inner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 550px)
    {
        justify-content: space-between;
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    h2{
        font-size: 18px;
        padding-left: 40px;
        width: 100px;
        @media only screen and (max-width: 750px)
        {
            display: none;
        }
        :hover{
            cursor: default;
        }
    }
`;

const MenuBar = styled.div`
    img{
        padding-top: 5px;
        padding-left: 10px;
        width: 30px;
        :hover{
            width:31px;
            cursor: pointer;
        }
    }
`;

const Logo = styled.div`
    img{
        padding-top:9px;
        width: 70px;
        :hover{
            width:71px;
            cursor: pointer;
        }
    }
`;

const SearchBar = styled.div`
    height: 35px;
    flex: 1;
    margin: 0px 10px;
    display: flex;
    align-items: center;

    input{
        flex: 1;
        width: 100%;
        height: 100%;
        border: 1px solid #505051b6;
        border-radius: 5px 0px 0px 5px;

        &::placeholder{
            padding-left:10px;
        }
        
    }

    @media only screen and (max-width: 550px)
    {
        display: none;
    }
    
`;

const SearchIcon = styled.div`
    background-color: #ffa807f5;
    height :105%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #505051b6;
    border-radius: 0px 5px 5px 0px;

    img{
        width: 22px;
    }

`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 5px 15px;
`;

const NotifiButton = styled.div`

    img{
        padding-top:10px;
        width: 40px;
        :hover{
            width:41px;
            cursor: pointer;
        }
    }

`;

const ProfileButton = styled.div`

    img{
        width: 35px;
        height: 28px;
        :hover{
            width:36px;
            height: 29px;
            cursor: pointer;
        }
    }
`;

const MobileSearchBar = styled.div`
    height: 40px;
    width 75%;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    input{
        flex: 1;
        width: 100%;
        height: 100%;
        border: 1px solid #505051b6;
        border-radius: 5px 0px 0px 5px;
        &::placeholder{
            padding-left:10px;
        }
    }
    @media only screen and (min-width: 550px)
    {
        display: none;
    }
`;

export default Navbar