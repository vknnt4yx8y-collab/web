import { useEffect, useState } from 'react';
import { CheckCircle, X, AlertCircle } from 'lucide-react';
import type { ToastMessage } from '../types';

interface ToastProps {
  toast: ToastMessage;
  onClose: (id: string) => void;
}

export function Toast({ toast, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const showTimer = setTimeout(() => setVisible(true), 10);
    // Auto-dismiss after 3 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose(toast.id), 300);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [toast.id, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-400" />,
    error: <AlertCircle className="w-5 h-5 text-red-400" />,
    info: <AlertCircle className="w-5 h-5 text-blue-400" />,
  };

  const borderColors = {
    success: 'border-green-500',
    error: 'border-red-500',
    info: 'border-blue-500',
  };

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg border
        bg-obsidian text-white shadow-lg
        ${borderColors[toast.type]}
        transition-all duration-300 ease-out
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
      `}
    >
      {icons[toast.type]}
      <span className="text-sm font-medium">{toast.message}</span>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => onClose(toast.id), 300);
        }}
        className="ml-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onClose: (id: string) => void;
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
}
