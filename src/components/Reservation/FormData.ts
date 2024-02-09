interface State {
  name: { value: string; valid: boolean; touched: boolean };
  email: { value: string; valid: boolean; touched: boolean };
  date: { value: string; valid: boolean; touched: boolean };
  time: { value: string; valid: boolean; touched: boolean };
  size: { value: string; valid: boolean; touched: boolean };
  occasion: { value: string; valid: boolean; touched: boolean };
  message: { value: string; valid: boolean; touched: boolean };
}

interface Action {
  type:
    | "set_name"
    | "set_email"
    | "set_date"
    | "set_time"
    | "set_size"
    | "set_occasion"
    | "set_message"
    | "reset";
  object: { value: string; valid: boolean; touched: boolean };
}

export function createInitialState(): State {
  return {
    name: { value: "", valid: false, touched: false },
    email: { value: "", valid: false, touched: false },
    date: { value: "", valid: false, touched: false },
    time: { value: "", valid: false, touched: false },
    size: { value: "", valid: false, touched: false },
    occasion: { value: "", valid: false, touched: false },
    message: { value: "", valid: false, touched: false },
  };
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "set_name":
      return { ...state, name: action.object };
    case "set_email":
      return { ...state, email: action.object };
    case "set_date":
      return { ...state, date: action.object };
    case "set_time":
      return { ...state, time: action.object };
    case "set_size":
      return { ...state, size: action.object };
    case "set_occasion":
      return { ...state, occasion: action.object };
    case "set_message":
      return { ...state, message: action.object };
    case "reset":
      return createInitialState();
  }
}
