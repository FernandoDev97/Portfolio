import { useState } from 'react';
import toast from 'react-hot-toast'
import { sendContactMail } from '../../../services/senMail';
import theme from '../../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSubmit (event) {
    event.preventDefault()

    if(!name || !email || !message) {
      toast('Preencha todos os campos para enviar seu contato!', {
        style: {
          background: theme.error,
          color: '#FFF',
          fontWeight: 700,
          textAlign: 'center'
        }
      })
      return
    }

    try {
      setLoading(true)
      await sendContactMail(name, email, message)
      setName('')
      setEmail('')
      setMessage('')

      toast('Sua mensagem ja chegou! Obrigado pelo contato :)', {
        style: {
          background: theme.success,
          color: '#FFF',
          fontWeight: 700,
          textAlign: 'center'
        }
      })
    }catch (error) {
      toast('Ops, ocorreu um erro ao enviar sua mensagem. Tente novamente! :(', {
        style: {
          background: theme.error,
          color: '#FFF',
          fontWeight: 700,
          textAlign: 'center'
         
        }
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormContainer data-aos='fade-up' onSubmit={handleSubmit} >
        <Input placeholder='Nome' type='text' value={name} onChange={({target}) => setName(target.value)} />
        <Input placeholder='Email' type='email' value={email} onChange={({target}) => setEmail(target.value)}/>
        <TextArea placeholder='Mensagem' value={message} onChange={({target}) => setMessage(target.value)}/>
        <button type='submit' disabled={loading}>ENVIAR</button>
    </FormContainer>
  );
};

export default Form;
