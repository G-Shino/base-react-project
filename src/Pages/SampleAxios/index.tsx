import * as React from "react";
import styles from "./style";
import axios from "axios";

//axiosのサンプル　飛ばしてOK

const { WrapperDiv, StyledSelect, StyledButton } = styles;

const ENDPOINT = "https://financialmodelingprep.com/api/v3/company/profile";

export const SampleAxios: React.FC = ({}) => {
  const [symbol, setSymbol] = React.useState("GOOG");
  const [price, setPrice] = React.useState("");

  const handleClick = async () => {
    try {
      const body = {
        params: { address: symbol },
      };
      //resの型定義はできたらする　きびい時はanyに逃げる。。。
      const res = (await axios.get(`${ENDPOINT}/${symbol}`, body)) as any;
      setPrice(res.data.profile.price);
      console.log("OK");
    } catch (e) {
      console.log(`error!!`);
      console.info(e);
    }
  };

  return (
    <WrapperDiv>
      <p>株価検索</p>
      <p> 社名: </p>
      <StyledSelect
        value={symbol}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setSymbol(e.target.value);
        }}
      >
        <option value="GOOG">Alphabet Inc.</option>
        <option value="AAPL">Apple Inc.</option>
        <option value="FB">Facebook Inc.</option>
        <option value="AMZN">Amazon.com Inc.</option>
      </StyledSelect>
      <p> 金額: {price}</p>
      <StyledButton onClick={handleClick}>検索する</StyledButton>
    </WrapperDiv>
  );
};
