import React, { useEffect, useState } from 'react';
import { Container, Image, FormOrder, Title, ContainerOrder, Details, LabelOrder, LabelName, BtnTrah, ImageTrash } from './styles';
import IMGOrder from '../../assets/img-pedidos.png'
import Trash from '../../assets/trash.svg'
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom'
import api from '../../service/api';


export default function Order() {
  const [orders, setOrders] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function loadOrder() {
      const response = await api.get('/order')
  
      setOrders(response.data)
    }
    loadOrder();
  }, [])

  function handleBack() {
    history.push('/')
  }

  async function deleteUser(id) {
    await api.delete(`/order/${id}`)
    const listOrder = orders.filter(user => user.id !== id)

    setOrders(listOrder)
  }

  return (
    <Container>
      <FormOrder>
        <Image src={IMGOrder} alt="logo-order" />
        <Title>Pedidos</Title>
        {orders.map((order) => (
          <ContainerOrder key={order.id}>
            <Details>
              <LabelOrder>{order.order}</LabelOrder>
              <LabelName>{order.clienteName}</LabelName>
            </Details>
            <BtnTrah onClick={() => deleteUser(order.id)}>
              <ImageTrash src={Trash} alt='icon-trash' />
            </BtnTrah>
          </ContainerOrder>
        ))}

        <Button isBack={true} onClick={handleBack} >Voltar</Button>
      </FormOrder>
    </Container>
  );
}