// @flow

interface ToastMessage {
  id: number;
  text: string;
  type: string;
  dismissAfter?: number;
}

interface ToastState {
  messages: ToastMessage[];
}

interface ToastOptions {
  dismissInterval?: number;
}
