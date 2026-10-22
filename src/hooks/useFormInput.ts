import { useState } from "react";

/**
 * This hook manages one form input: the text it holds, and the messages
 * that are shown for it. Each input in a form calls this hook once.
 */
export function useFormInput() {
  const [value, setValue] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  /**
   * Runs the validator callback with the input's current value, replaces the
   * input's messages with the errors it returns, and returns the results.
   * Replacing the messages also clears any old ones.
   */
  function validate(validator: (value: string) => string[]): {
    isValid: boolean;
    errors: string[];
  } {
    const errors = validator(value);
    setMessages(errors);

    return { isValid: errors.length === 0, errors };
  }

  return { value, setValue, messages, validate };
}