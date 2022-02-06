import React from "react";
import BasicTab from "./BasicTab/BasicTab";

function TabPage() {
  return (
    <div>
      <BasicTab
        tabItems={[
          { title: "Tab1", content: <div>abc1</div> },
          { title: "Tab2", content: <div>abc2</div> },
        ]}
      >
        <div>aa1</div>
        <div>aa2</div>
      </BasicTab>
    </div>
  );
}

export default TabPage;
