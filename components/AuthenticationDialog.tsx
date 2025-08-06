"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export const AuthDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onAuthenticate: (email: string, code?: string) => void;
}> = ({ isOpen, onClose, onAuthenticate }) => {
  const [authMode, setAuthMode] = useState<"login" | "register" | "verify">(
    "login"
  );
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleEmailAuth = async () => {
    if (!email.trim()) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      if (authMode === "login") {
        onAuthenticate(email);
        resetForm();
      } else {
        setAuthMode("verify");
        toast.success("Verification code sent to your email!");
      }
    }, 1500);
  };

  const handleVerification = async () => {
    if (!verificationCode.trim()) {
      toast.error("Please enter the verification code");
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      onAuthenticate(email, verificationCode);
      resetForm();
    }, 1500);
  };

  const resetForm = () => {
    setEmail("");
    setVerificationCode("");
    setAuthMode("login");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {authMode === "login"
              ? "Sign In"
              : authMode === "register"
              ? "Create Account"
              : "Verify Email"}
          </DialogTitle>
          <DialogDescription>
            {authMode === "verify"
              ? "Please enter the verification code sent to your email"
              : "Enter your email address to continue"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {authMode !== "verify" ? (
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="trader@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="code">Verification Code</Label>
              <Input
                id="code"
                placeholder="Enter 6-digit code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </div>
          )}
        </div>

        <DialogFooter className="sm:justify-start">
          <div className="flex flex-col w-full space-y-3">
            <Button
              onClick={
                authMode === "verify" ? handleVerification : handleEmailAuth
              }
              disabled={
                isVerifying ||
                (!email && authMode !== "verify") ||
                (!verificationCode && authMode === "verify")
              }
              className="w-full bg-gradient-to-r from-[#0dae94] to-teal-600 hover:from-teal-600 hover:to-[#0dae94]"
            >
              {isVerifying ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {authMode === "verify" ? "Verifying..." : "Sending Code..."}
                </div>
              ) : authMode === "verify" ? (
                "Verify & Sign In"
              ) : authMode === "login" ? (
                "Send Login Code"
              ) : (
                "Create Account"
              )}
            </Button>

            {authMode !== "verify" && (
              <Button
                variant="ghost"
                onClick={() =>
                  setAuthMode(authMode === "login" ? "register" : "login")
                }
                className="w-full"
              >
                {authMode === "login"
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
