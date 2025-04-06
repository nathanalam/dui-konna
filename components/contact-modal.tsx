"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Facebook } from "lucide-react";
import Link from "next/link";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Phone</h3>
            <a
              href="tel:+8801741954490"
              className="text-blue-600 hover:underline"
            >
              {`(+88) 01741-954490`}
            </a>
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <a
              href="mailto:shamimanasrin1239@gmail.com"
              className="text-blue-600 hover:underline"
            >
              shamimanasrin1239@gmail.com
            </a>
          </div>
          <div>
            <h3 className="font-medium">Facebook</h3>
            <Link
              href="https://www.facebook.com/duikonna01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <Facebook className="h-4 w-4" />
              <span>@duikonna01</span>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
