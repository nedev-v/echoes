import { useForm } from "react-hook-form"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { SECONDARY_COLOR, TERTIARY } from "../../const"
import { useAuth } from "../shared/hooks/useSignup"
import { useNavigate } from "react-router-dom"

export const SignUpCard = () => {
    const { register, handleSubmit } = useForm();
    const {signup} = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try{
            console.log("Signing up in...", data);
            await signup(data.email, data.password, data.username);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
                    <Card className="w-full max-w-sm" style={{backgroundColor: TERTIARY, color: SECONDARY_COLOR}}>
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription>
                        Create an account using your email address and a strong password.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input {...register("username", { required: true })}
                                id="username"
                                type="text"
                                placeholder="@john_doe_2025"
                                required
                            />
                            </div>
                            <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input {...register("email", { required: true })}
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                            </div>
                            <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                href="#"
                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" required {...register("password", { required: true })} />
                            </div>
                        </div>
                        
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" variant={"default"} className="w-full hover:cursor-pointer">
                            Sign Up
                        </Button>
                        <Button variant="ghost" className="w-full hover:cursor-pointer">
                        Sign Up with Google
                        </Button>
                    </CardFooter>
                    </Card>
                </form>
                )
}