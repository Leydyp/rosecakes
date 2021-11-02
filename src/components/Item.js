import React from "react";
import styled from "styled-components";

const Card = ({ image, children, title }) => {
  return (
    <>
      <Container>
        <img src={image} alt={title} />

        <Info>
          <div>{title}</div>
          <h4>{children}</h4>
        </Info>
      </Container>
    </>
  );
};
export default Card;

const Container = styled.div`
  position: relative;
  padding: 0px;
  width: 100%;
  max-width: 250px;
  overflow: hidden;
  text-align: center;
  border-radius: 1.5rem;
  margin: 100px auto;
  background-color: var(--color-white);
  box-shadow: 0 5rem 10rem -2rem rgba(222, 184, 135);

  img {
    width: 100%;
  }
`;

const Info = styled.div`
  padding: 15px;
  div {
    font-size: 22px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    margin: 3px 0;
  }
`;

const Button = styled.button`
  width: 30%;
  padding: 5px 22px;
  border: 0;
  gap: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
`;