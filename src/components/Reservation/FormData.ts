import {
  validateName,
  validateEmail,
  validateDate,
  validateSize,
} from "../../utilities/utils.ts";
interface State {
  name: { value: string; valid: boolean; touched: boolean };
  email: { value: string; valid: boolean; touched: boolean };
  date: { value: string; valid: boolean; touched: boolean };
  time: { value: string; valid: boolean; touched: boolean };
  size: { value: number; valid: boolean; touched: boolean };
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
    | "set_touched"
    | "reset";
  value: string;
}

export function createInitialState(): State {
  return {
    name: { value: "", valid: false, touched: false },
    email: { value: "", valid: false, touched: false },
    date: { value: "", valid: false, touched: false },
    time: { value: "", valid: false, touched: false },
    size: { value: 0, valid: false, touched: false },
    occasion: { value: "", valid: false, touched: false },
    message: { value: "", valid: false, touched: false },
  };
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "set_name":
      return {
        ...state,
        name: {
          ...state.name,
          value: action.value,
          valid: validateName(action.value),
        },
      };
    case "set_email":
      return {
        ...state,
        email: {
          ...state.email,
          value: action.value,
          valid: validateEmail(action.value),
        },
      };

    case "set_date":
      return {
        ...state,
        date: {
          ...state.date,
          value: action.value,
          valid: validateDate(action.value),
        },
      };
    case "set_time":
      return {
        ...state,
        time: { ...state.time, value: action.value, valid: true },
      };
    case "set_size":
      const value = parseInt(action.value);
      return {
        ...state,
        size: {
          ...state.size,
          value: value,
          valid: validateSize(parseInt(action.value)),
        },
      };
    case "set_occasion":
      return {
        ...state,
        occasion: { ...state.occasion, value: action.value, valid: true },
      };
    case "set_message":
      return {
        ...state,
        message: { ...state.message, value: action.value, valid: true },
      };
    case "set_touched":
      return {
        ...state,
        [action.value]: { ...state[action.value], touched: true },
      };
    case "reset":
      return createInitialState();
  }
}
