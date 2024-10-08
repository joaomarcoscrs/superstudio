import { useState, useEffect } from "react";
import configSchema from "../schemas/configSchema";

interface ValidationResult {
  isValid: boolean;
  errors?: string[];
}

function useConfigValidation(config: any): ValidationResult {
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  useEffect(() => {
    const { error } = configSchema.validate(config, {
      abortEarly: false,
    });
    if (error) {
      setValidationResult({
        isValid: false,
        errors: error.details.map((detail) => detail.message),
      });
    } else {
      setValidationResult({ isValid: true });
    }
  }, [config]);

  return validationResult;
}

export default useConfigValidation;
