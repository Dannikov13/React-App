import React from "react";
import { Layout } from "antd";
import AppHeader from "./components/Layout/AppHeader";
import AppSider from "./components/Layout/AppSider";
import AppContent from "./components/Layout/AppContent";

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />s
      </Layout>
    </Layout>
  );
}
