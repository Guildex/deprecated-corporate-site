import * as React from 'react'

import { Input } from '@/components/atoms'
import { Container, ButtonBox, Button } from './styles'

export const ContactForm: React.FC = () => {
  const [state, setState] = React.useState({
    name: '',
    subject: '',
    organization: '',
    email: '',
    tel: '',
    body: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  
    const { name, value } = e.currentTarget

    e.preventDefault()
    setState({
      ...state,
      [name]: value,
    })
  }

  return (
    <Container
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field" 
      data-netlify-recaptcha="true"
    >
      <Input label="お名前" name="name" type="text" value={state.name} placeholder="例：ギルデックス太郎" required onChange={handleChange} />
      <Input label="件名" name="subject" type="text" value={state.subject} placeholder="例：○○○○○○について" required onChange={handleChange} />
      <Input label="メールアドレス" name="email" type="email" value={state.email} placeholder="例：info@guildex.co.jp" required onChange={handleChange} />
      <Input label="会社名" name="organization" type="text" value={state.organization} placeholder="例：合同会社Guildex" onChange={handleChange} />
      <Input label="電話番号" name="tel" type="tel" value={state.tel} placeholder="例：xxx-xxxx-xxxxx" onChange={handleChange} />
      <Input as="textarea" label="お問い合わせ内容" name="body" type="text" value={state.body} placeholder="" required onChange={handleChange} />
      <ButtonBox>
        <Button as="button">送信</Button>
      </ButtonBox>
    </Container>
  )
}