import React from "react";

import TeamPage from "../components/MemberList";

function Team_Page(routerProps){
  let clubname = routerProps.match.params.clubname
  console.log(clubname)
  return (
    <div className="list__main" >
      <TeamPage value={clubname} />
    </div>
  );
}

export default Team_Page;
