import styled from '@emotion/styled';


export const FriendBox = styled.li` display: inline-block;
padding: 5px;
margin-right: 5px;
min-width: 100px;
text-align: center;
align-items: center;
background-color: antiquewhite;
background: linear-gradient(to bottom, rgba(223, 188, 188, 0.1), rgba(219, 191, 191, 0.5));
border: 1px solid black;
    `;

export const FriendStatus = styled.span`
background-color: ${({isOnline }) => (isOnline ? "green" : "red")};
display: flex;
border-radius: 50%;
height: 15px;
width: 15px;
margin-right: 15px;
`


export const Avatar = styled.img`
width: 30px
`;

export const FriendsName = styled.p`
margin-top: 5px;
margin-bottom: 5px;
text-decoration: none;
`