"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ToastType = "success" | "error" | "info";

type Toast = {
  id: number;
  type: ToastType;
  message: string;
};

type ToastContextValue = {
  showToast: (type: ToastType, message: string) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((type: ToastType, message: string) => {
    setToasts((current) => {
      const id = Date.now();
      const next = [...current, { id, type, message }];
      setTimeout(() => {
        setToasts((latest) => latest.filter((t) => t.id !== id));
      }, 4000);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Toast container */}
      <div className="fixed top-4 right-4 z-[60] space-y-3 max-w-xs sm:max-w-sm">
        {toasts.map((toast) => {
          const base =
            "rounded-lg px-4 py-3 shadow-lg flex items-start gap-3 text-sm border backdrop-blur bg-white/95";
          const tone =
            toast.type === "success"
              ? "border-emerald-200 text-emerald-900"
              : toast.type === "error"
                ? "border-red-200 text-red-900"
                : "border-slate-200 text-slate-900";
          const dot =
            toast.type === "success"
              ? "bg-emerald-500"
              : toast.type === "error"
                ? "bg-red-500"
                : "bg-slate-500";

          return (
            <div key={toast.id} className={`${base} ${tone}`}>
              <span className={`mt-1 h-2 w-2 rounded-full ${dot}`} />
              <p>{toast.message}</p>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

