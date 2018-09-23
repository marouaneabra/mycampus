import styled from "styled-components";
const Wrapper = styled.div`
  display: inline-block;
  background-color: blue;
  position: absolute;
  left: 0;
  top: 0;
  width: 30vw;
  height: 100vh;
`;

export default Wrapper;

// import React, {Children} from 'react';

// const InputField = (props) => {
//     props.onEnterName()
//     return (
//     <Wrapper>
//         {Children.toArray(props.children)}
//     </Wrapper>
//     );
// }

// <InputField>Press me</InputField>
