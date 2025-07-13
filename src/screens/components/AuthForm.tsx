
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { useState } from 'react';
import { LoginCard } from './LoginCard';
import { SignUpCard } from './SignUpCard';


export function AuthForm(){
    const [tab, setTab] = useState<string>("login")
    
    return (
        <Tabs defaultValue="login" className="w-full max-w-sm">
            <TabsList>
                <TabsTrigger value="login" onClick={() => setTab("login")}>Login</TabsTrigger>
                <TabsTrigger value="signup" onClick={() => setTab("signup")}>Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <LoginCard/>
            </TabsContent>
            <TabsContent value="signup">
                <SignUpCard />
            </TabsContent>
        </Tabs>
    )
}
