import { BACKGROUND_COLOR } from "../const";
import { AuthForm } from "./components/AuthForm";


export function AuthScreen() {
  return (
        <div className="mx-auto h-screen flex justify-center items-center">
            <AuthForm />
        </div>
    )
}