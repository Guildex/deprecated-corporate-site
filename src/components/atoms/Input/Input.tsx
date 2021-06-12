import * as React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 40px;
`

const LabelText = styled.span`
  display: flex;
  align-items: center;
  width: 30%;
  font-size: 16px;
  font-weight: bold;
`

const InputComponent = styled.input`
  flex: 1;
  padding: 20px 40px;
  color: #444;
  font-size: 18px;
  background-color: #efefef;
  border-radius: 8px;
`

const Required = styled.span`
  margin-left: 20px;
  padding: 8px 12px;
  color: #fff;
  font-size: 12px;
  background-color: #f38989;
  border-radius: 10px;
`

type Props = {
  as?: 'textarea' | 'input'
  label: string
  name: HTMLInputElement['name']
  type: HTMLInputElement['type']
  value: HTMLInputElement['value']
  placeholder: HTMLInputElement['placeholder']
  required?: HTMLInputElement['required']
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({ as, label, ...rest }) => {
  return (
    <Label>
      <LabelText>
        {label}
        {rest.required && <Required>必須</Required>}
      </LabelText>
      <InputComponent as={as ?? 'input'} {...rest} />
    </Label>
  )
}