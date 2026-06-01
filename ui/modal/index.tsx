"use client";
import { getPath } from "@/app/lib/assets";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Button from "../buttons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/50 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className={`relative w-full ${sizeClasses[size]} bg-white rounded-16 shadow-lg animate-slideUp`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <h2 id="modal-title" className="text-preset-4 text-neutral-900">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2"
            aria-label="Close modal"
          >
            <Image
              src={getPath("icon-close.svg")}
              alt="Close"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

interface SubscriptionModalContentProps {
  plan: "Starter" | "Pro" | "Enterprise";
  price: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const SubscriptionModalContent = ({
  plan,
  price,
  onConfirm,
  onCancel,
}: SubscriptionModalContentProps) => {
  const isCustomPrice = price === "Custom";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-preset-5 text-neutral-700">
          You&apos;re about to subscribe to the <strong>{plan}</strong> plan.
        </p>

        {!isCustomPrice ? (
          <div className="p-4 bg-light-salmon-50 rounded-12">
            <div className="flex items-baseline gap-2">
              <span className="text-preset-3 text-neutral-900">${price}</span>
              <span className="text-preset-5 text-neutral-700">/month</span>
            </div>
            <p className="text-preset-5 text-neutral-700 mt-2">
              Billed monthly • Cancel anytime
            </p>
          </div>
        ) : (
          <div className="p-4 bg-light-salmon-50 rounded-12">
            <p className="text-preset-5 text-neutral-900 font-semibold">
              Custom pricing for your team
            </p>
            <p className="text-preset-5 text-neutral-700 mt-2">
              Our team will contact you within 24 hours to discuss your needs
              and provide a tailored quote.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="text-preset-6 text-neutral-900">What happens next:</h3>
          <ul className="flex flex-col gap-2 ml-6">
            <li className="text-preset-5 text-neutral-700 list-disc">
              {isCustomPrice
                ? "We'll send you an email to schedule a consultation"
                : "You'll receive a confirmation email"}
            </li>
            <li className="text-preset-5 text-neutral-700 list-disc">
              {isCustomPrice
                ? "Discuss your team's requirements and goals"
                : "Get instant access to your membership benefits"}
            </li>
            <li className="text-preset-5 text-neutral-700 list-disc">
              {isCustomPrice
                ? "Receive a custom proposal within 48 hours"
                : "Join our community forums and upcoming events"}
            </li>
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <Button
          label={"Cancel"}
          onClick={onCancel}
          className="w-full mt-8   focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 text-neutral-900 border-2 border-neutral-900"
          bgHoverColor="bg-neutral-100"
        />
        <Button
          label={isCustomPrice ? "Contact Sales" : "Confirm "}
          onClick={onConfirm}
          className="w-full mt-8   focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2"
          bgColor="bg-light-salmon-50"
          bgHoverColor="bg-gradient-hero"
        />
      </div>
    </div>
  );
};
