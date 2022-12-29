import React from "react";
import styled from "styled-components";

function Popup(props) {
  const { onClose } = props;

  return (
    <Container
      onClick={() => {
        onClose(false);
      }}
    >
      팝업입니다.
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 100px;
  right: 100px;
  top: 100px;
  bottom: 100px;
  z-index:100;
  background: black;
`

export default Popup;