// @flow

declare module vue {
  declare var exports: any;
}

declare module vuex {
  declare var exports: any;
}

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
