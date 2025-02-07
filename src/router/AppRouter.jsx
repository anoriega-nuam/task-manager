import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { TaskPage } from "../task";

export const AppRouter = () => {

  const authStatus = 'not-authenticated';

  return (
    <Routes>
      {
        (authStatus === 'not-authenticated')
          ? <Route path="/" element={<LoginPage />} />
          : <Route path="/*" element={<TaskPage />} />


      }
      <Route path="/*" element={<Navigate to="/auth/login" />} />

    </Routes>
  )
}
