import React from "react";
import { Reply } from "../../components/Admin/Reply";
import AdminNavbar from "../../components/Admin/Navbar/Navbar";

const Replypage = (props) => {
    return (
        <div>
            <AdminNavbar onLogout={props.onLogout} />
            <Reply />
        </div>
    );
};

export default Replypage;
