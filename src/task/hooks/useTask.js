import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"



export const useTask = () => {

  const {taskState} = useContext(TaskContext)
  const {tasks} = taskState
  return {
    tasks
  }
}
