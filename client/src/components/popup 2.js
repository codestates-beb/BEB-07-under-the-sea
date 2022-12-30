import React, { useState } from "react";
import styled from "styled-components";

function Popup(props) {
  const { onClose, handleUsername, currentUsername } = props;
  const [newusername, setNewusername] = useState(currentUsername);

  const hadleNewusername = (event) => {
    setNewusername(event.target.value)
  }

  return (
    <Container>
      <Title>Change Username</Title>
      <Newname >
        <label for="usernamebox">username</label>
        <Input type="text" id="usernamebox" 
        placeholder="Write new username" 
        value={newusername} 
        onChange={hadleNewusername}>
        </Input>
      </Newname>
      <Confirm onClick={() => {
        handleUsername(newusername)
        onClose(false)
        }}>Confirm</Confirm>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 30vw;
  right: 30vw;
  top: 10vw;
  bottom: 20vw;
  background: white;
  border-style: solid;
  width: 600px;
  height: 400px;
  z-index: 1;
`

const Title = styled.div`
  position: relative;
  left: 165px;
  width: 20vw;
  top: 30px;
`

const Newname = styled.div`
  position: relative;
  left: 230px;
  width: 155px;
  top: 130px;
`

const Confirm = styled.button`
  position: relative;
  width: 155px;
  top: 130px;
  left: 230px
`

const Input = styled.input`
  position: relative;
  
`

export default Popup;