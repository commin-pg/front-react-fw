import React from "react";
import LoadingButton from "../@gull/components/buttons/LoadingButton";
import SimpleCard from "../@gull/components/cards/SimpleCard";
import GullLoadable from "../@gull/components/GullLoadable/GullLoadable";
import GullSidenav from "../@gull/components/GullSidenav/GullSidenav";
import GullSidenavContent from "../@gull/components/GullSidenav/GullSidenavContent";
import GullSidenavContainer from "../@gull/components/GullSidenav/GullSidenavContainer";
import BasicDataTable from "../@gull/views/BasicDataTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeActiveMenu } from "_actions/menu_actions";

function LandingPage({ history }) {

  const menus = useSelector(state => state.menu.menus);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(changeActiveMenu(window.location.pathname));
  }, [])

  return (
    <div>
      {menus ? menus.map((menu, idx) => (
        <div key={idx}> <div>{menu.name}</div>
          <div>{menu.isActive ? 'true' : 'false'}</div>
        </div>

      )) : "2"}
      {/* <GullSidenav>
        <GullSidenavContainer>
          <GullSidenavContent>1123123123123123123</GullSidenavContent>
          <GullSidenavContent>1</GullSidenavContent>
          <GullSidenavContent>1</GullSidenavContent>
        </GullSidenavContainer>
      </GullSidenav>
      <GullLoadable />
      <LoadingButton
        variant="primary"
        loading={false}
        spinnerSize="small"
        className="btn-submit"
      >
        전송
      </LoadingButton>
      <BasicDataTable />
      <SimpleCard /> */}
    </div>
  );
}

export default LandingPage;
