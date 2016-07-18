// @flow

interface ToastMessage {
  id: number;
  text: string;
}

interface ToastState {
  messages: ToastMessage[];
}

interface ToastOptions {
  dismissInterval?: number;
}
