import React, { useState } from 'react';
import { Container, Image, FormOrder, Title, Label, Input } from './styles';
import IMGHome from '../../assets/img-home.png';
import Button from '../../components/Button';
import api from '../../service/api';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Home() {
  const [order, setOrder] = useState('')
  const [name, setName] = useState('')

  const history = useHistory();

  async function handleOrder() {
    if (order === '' || name === '') {
      toast.warn('Prencha todos os campos !!!')
      return
    }
    await toast.promise(
      api.post('/order', {order, clienteName: name, price: 10}),
      {
        pending: 'Verificar seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Erro no sitema, tente novamente !'
      }
    )

    history.push('/pedidos')
  }

  return (
    <Container>
      <FormOrder>
        <Image src={IMGHome} alt="logo-image" />
        <Title>Faça seu pedido!</Title>
        <Label>Pedido</Label>
        <Input placeholder='1 Coca-Cola, 1-X-Salada' onChange={(e) => setOrder(e.target.value)} />
        <Label>Nome do Cliente</Label>
        <Input placeholder='Maria silva' type='text' onChange={(e) => setName(e.target.value)} />
        <Button isBack={false} onClick={handleOrder}>Novo pedido</Button>
      </FormOrder>
    </Container>
  );
}