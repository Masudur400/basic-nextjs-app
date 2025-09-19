import SideBar from "@/components/SideBar";

 

const DashboardLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="flex gap-2">
            <SideBar></SideBar>
            {children}
        </div>
    );
};

export default DashboardLayout;