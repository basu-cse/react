import React from "react";

const UpdatedComponent = OriginalComp =>{
    class NewComp extends React.Component{
        render() {
            return <OriginalComp name="The User" />
        }
    }
    return NewComp;
};
export default UpdatedComponent;