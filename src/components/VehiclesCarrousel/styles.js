import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  padding: 35px 0;

  h1 {
    color: rgb(0, 0, 0);
    font-size: 40px;
    text-align: center;
  }

  .rec.rec-arrow {
    background-color: red;
    color: #000;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid red;
    background-color: #000;
    color: red;
  }

  .rec.rec-arrow:disabled {
    border: none;
    color: #000;
  }
  .hRnmDL {
    background-color: #fff;
    box-shadow: 0 0 1px 3px #fff;
  }
  .hyYnkC {
    background-color: #fff;
    box-shadow: 0 0 1px 3px #fff;
  }
  .fexzrp {
    background-color: #fff;
    box-shadow: 0 0 1px 3px #fff;
  }
`
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 30vh;
  min-width: 20vh;
  height: 22vh;
  min-height: 23vh;
`
