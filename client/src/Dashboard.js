import { useState,useEffect } from "react";
import { Navbar } from "./Components/Navbar"
import HeaderName from "./Components/HeaderName"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();
  const [Data, setData] = useState({
    uname:""
  });

  const FetchData = async () => {
    try {
      const res = await fetch("/datafetch", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "applictaion/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      // console.log(data)

      setData({
        uname: data.f_userName
      });

      if (!res.status === 200) {
        navigate("/");
        window.location.reload(false)
      }
    } catch (err) {
      // console.log(err);
      navigate("/");
      window.location.reload(false)
    }
  };

  useEffect(() => {
    FetchData()
  }, []);

  return (
    <>
    <Navbar user={Data} />
    <HeaderName name="Dashboard" />
    <h1 className="text-center py-5">Welome Admin Panel</h1>
    </>
  )
}

export default Dashboard