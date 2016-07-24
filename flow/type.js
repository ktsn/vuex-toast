// @flow

interface ToastMessage {
  id: number;
  text: string;
  type: string;
}

interface ToastState {
  messages: ToastMessage[];
}

interface ToastOptions {
  dismissInterval?: number;
}
