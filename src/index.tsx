import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import "./index.css";
import Statistics from "./components/Statistics";
import WidgetInfo from "./components/WidgetInfo";
import ShapeWrap from "./components/ShapeWrap";
import Header from "./components/Header";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;
  height: 100vh;
`;

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  height: 500px;
  max-width: 768px;
  width: 100%;
  padding: 24px;
  border: 1px solid #EDEFF5;
  border-radius: 8px;
`;

const StyledMainWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 8px;
`;

const StyledWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledChartWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {

  const widgetItems1 = [
    {
      text: "Product charges",
      value: 126151.07,
      subBalance: [],
      tooltipText: "This is Tooltip Text"
    },
    {
      text: "Shipping",
      value: 2251.87,
      subBalance: [],
      tooltipText: "This is Tooltip Text"
    },
    {
      text: "Other",
      value: 700.11,
      subBalance: [
        {
          text: "Other",
          value: 500,
          subBalance: [],
          tooltipText: "This is Tooltip Text"
        },
        {
          text: "Other",
          value: 200.11,
          subBalance: [],
          tooltipText: "This is Tooltip Text"
        }
      ],
      tooltipText: "This is Tooltip Text"
    },
    {
      text: "Refunded expenses",
      value: 541.85,
      subBalance: [],
      tooltipText: "This is Tooltip Text"
    }
  ];


  const widgetItems2 = [
    {
      text: "Refunded sales",
      value: -3890.82,
      subBalance: [],
      tooltipText: "This is Tooltip Text"
    },
    {
      text: "Promo rebates",
      value: -1808.24,
      subBalance: [],
      tooltipText: "This is Tooltip Text"
    },
    {
      text: "FBA fees",
      value: -1315.51,
      subBalance: [],
      tooltipText: "This is Tooltip Text"
    },
    {
      text: "Cost of Advertising",
      value: -10095.06,
      subBalance: [],
      tooltipText: "This is Tooltip Text"
    },
    {
      text: "Amazon fees",
      value: -57534.55,
      subBalance: [],
      tooltipText: "This is Tooltip Text"
    },
    {
      text: "Other",
      value: -10.43,
      subBalance: [],
      tooltipText: "This is Tooltip Text"
    }
  ];
  return (
    <StyledApp>
      <StyledAppContainer>
        <Header />
        <StyledMainWrap>
          <Statistics />
          <StyledChartWrap>
            <ShapeWrap shapeItems={widgetItems1} total={129103} sourceY={190} targetY={4} width={210} height={220} />
            <ShapeWrap shapeItems={widgetItems2} total={74763} sourceY={0} targetY={20} width={210} height={220} />
          </StyledChartWrap>
          <StyledWidgetContainer>
            <WidgetInfo widgetItems={widgetItems1} total={129103.05} />
            <WidgetInfo widgetItems={widgetItems2} total={70763.79} />
          </StyledWidgetContainer>
        </StyledMainWrap>
      </StyledAppContainer>

      <ReactTooltip place="right" type="light" effect="float" />
    </StyledApp>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
