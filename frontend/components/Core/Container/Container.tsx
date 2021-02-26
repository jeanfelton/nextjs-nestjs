import Nav from "../Navbar/Navbar";
import { Layout, Menu, Breadcrumb } from "antd";
import styles from "./Container.module.scss";

const { Header, Content, Footer } = Layout;

const Container = (props) => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
            <Nav />
          </Menu>
        </Header>
        <Content style={{ padding: "0 100px" }}>
          <div className={styles.siteLayoutContent}>{props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default Container;
