import React from 'react'
import { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { cn } from "@/lib/utils"

const RegisterForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        await registerUser({ fullName, email, password });
        navigate("/login");
    };

  return (
    <div className={cn("flex flex-col gap-6")} >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleRegister}>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">FullName</Label>
                    <Input
                        id="fullName"
                        type="text"
                        placeholder="Mohammad Zishan Ansari"
                        required
                        onChange={(e) => setFullName(e.target.value)} 
                    />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    onChange={(e) => setEmail(e.target.value)} 
                />
                </div>
                <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)}  required />
                </div>
                <Button type="submit" className="w-full">
                    Register
                </Button>
            </div>
            <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                    Login
                </a>
            </div>
        </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterForm