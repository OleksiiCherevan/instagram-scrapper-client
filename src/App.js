import "./App.css";
import { observer } from "mobx-react-lite";
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect } from "react";
import users from "./store/users";
import Preloader from "./components/Preloader";
import { getUserInfo } from "./utils";

export default observer(() => {
  useEffect(() => {
    const userInfo = getUserInfo();
    users.currentUserInfo = userInfo;
    users.isLoading = false;
  }, []);


  return (
    <div className="App">
      <Header />
      <Container>
        {
            <Main />
        }
      </Container>
    </div>
  );
})
