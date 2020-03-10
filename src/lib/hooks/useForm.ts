import { useState } from 'react'

type ValidationResult = { [key: string]: string }
export type ValidationRules = { [key: string]: (val: string) => string }

export interface State {
  [key: string]: string
}

type UseForm = <ValueState extends State>(
  initialValueState: ValueState,
  validationRules: ValidationRules,
  onSubmit: (values: ValueState) => void
) => [
  State,
  ValidationResult,
  (event: any) => void,
  (event: React.SyntheticEvent) => void
]

const useForm: UseForm = <ValueState extends State>(
  initialValueState: ValueState,
  validationRules: ValidationRules,
  onSubmit: (values: ValueState) => void
) => {
  const [values, setValues] = useState(initialValueState)
  const [errorMessages, setErrorMessages] = useState<ValidationResult>({})

  const handleInputChange = (event: any) => {
    event.preventDefault()
    const {
      target: { id, value },
    } = event
    setValues({
      ...values,
      [id]: value,
    })
    if (errorMessages[id] && value) {
      setErrorMessages({ ...errorMessages, [id]: '' })
    }
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const validationResult: ValidationResult = {}
    Object.keys(values).forEach(field => {
      const fieldValidation = validationRules[field](values[field])
      if (fieldValidation) {
        validationResult[field] = fieldValidation
      }
    })
    setErrorMessages(validationResult)
    const hasError = Object.keys(validationResult).length
    if (!hasError) {
      onSubmit(values)
      setValues({ ...initialValueState })
    }
  }
  return [values, errorMessages, handleInputChange, handleSubmit]
}

export default useForm
