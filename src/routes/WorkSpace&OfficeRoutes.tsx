import WorkspaceDetalies from "../screens/Workspaces/WorkspaceDetalies";
import Workspaces from "../screens/Workspaces";


const WorkSpaceAndOffice =[  
{ path: "/workspaces/:id", element: <WorkspaceDetalies /> },
{ path: "/workspaces", element: <Workspaces /> },

]
export default WorkSpaceAndOffice;


