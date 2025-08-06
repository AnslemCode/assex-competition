"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RegistrationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  competition: Competition | null;
  onConfirmRegistration: (competitionId: number, entryAmount: number) => void;
}

export const RegistrationDialog: React.FC<RegistrationDialogProps> = ({
  isOpen,
  onClose,
  competition,
  onConfirmRegistration,
}) => {
  const [entryAmount, setEntryAmount] = useState(competition?.entryFee || 100);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (competition) {
      setEntryAmount(competition.entryFee);
    }
  }, [competition]);

  if (!competition) return null;

  const handleConfirm = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      onConfirmRegistration(competition.id, entryAmount);
      setIsProcessing(false);
      onClose();
    }, 1000);
  };

  const estimatedPrize = Math.round(
    (competition.prizePool + (entryAmount - competition.entryFee)) * 0.6
  );

  const spotsLeft = competition.maxParticipants - competition.participants;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md space-y-4">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Join &quot;{competition.title}&quot;
          </DialogTitle>
          <DialogDescription className="text-sm">
            Secure your spot by confirming your entry.
          </DialogDescription>
        </DialogHeader>

        {/* Entry Amount */}
        <div>
          <Label htmlFor="entry" className="block mb-1 text-sm font-medium">
            Entry Amount ($)
          </Label>
          <Input
            id="entry"
            type="number"
            min={25}
            max={1000}
            step={25}
            value={entryAmount}
            onChange={(e) => setEntryAmount(Number(e.target.value))}
            className="text-center font-semibold text-lg"
          />
          <div className="mt-2 grid grid-cols-4 gap-2">
            {[50, 100, 250, 500].map((amount) => (
              <Button
                key={amount}
                variant={entryAmount === amount ? "default" : "outline"}
                size="sm"
                className="w-full"
                onClick={() => setEntryAmount(amount)}
              >
                ${amount}
              </Button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">Min: $25 – Max: $1,000</p>
        </div>

        {/* Prize Estimate */}
        <div className="rounded-md bg-green-50 p-3 text-sm">
          <p className="text-gray-700">
            <span className="font-medium">Est. 1st Prize:</span>{" "}
            <span className="text-green-700 font-semibold text-lg">
              ${estimatedPrize.toLocaleString()}
            </span>
          </p>
          <p className="text-gray-500 mt-1">
            Based on current prize pool and your entry.
          </p>
        </div>

        {/* Spots left */}
        {spotsLeft <= 20 && (
          <div className="bg-orange-50 border border-orange-200 rounded-md p-3 text-sm text-orange-700">
            Only {spotsLeft} spot{spotsLeft !== 1 ? "s" : ""} left!
          </div>
        )}

        {/* Summary */}
        <div className="border rounded-md p-3 text-sm space-y-2">
          <div className="flex justify-between">
            <span>Entry:</span>
            <span>${entryAmount}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${entryAmount}</span>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose} disabled={isProcessing}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={isProcessing}>
            {isProcessing ? (
              <span className="animate-pulse">Processing...</span>
            ) : (
              "Confirm"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
