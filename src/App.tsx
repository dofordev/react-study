import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import DefaultLayout from "./layout/DefaultLayout";
import Main from "./content/Main";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import UserDetail from "./content/UserDetail";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/">
          <DefaultLayout>
            <Pages></Pages>
          </DefaultLayout>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

function Pages(): JSX.Element {
  const location = useLocation();
  return (
    <Routes location={location}>
      {/* 메인화면 */}
      <Route path="/view/main" element={<Main />} />
      {/* 목록 상세 화면 */}
      <Route path="/view/user/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default App;
