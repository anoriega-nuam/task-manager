import { AppRouter } from "./router"
import { TaskProvider } from "./task/context/TaskProvider"

export const TaskApp = () => {
  return (
    <TaskProvider>
      <AppRouter />
    </TaskProvider>
  )
}
