import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyInput from 'react-currency-masked-input';
import Form from '~/components/Form';
import TextField from '~/components/TextField';
import SubmitButton from '~/components/SubmitButton';
import getHandler from './handleSubmit';
import { initialValues, validationSchema } from './constants';

import { Container, FormContainer, InfoContainer, Label } from './styles';

import Upload from '../../components/Upload';

export default function NewDish() {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const history = useHistory();
  const handleSubmit = getHandler(history, photo);

  const handleDropPhoto = files => {
    setPhoto(files[0]);
    const url = URL.createObjectURL(files[0]);
    setPreview(url);
  };

  return (
    <Container>
      <InfoContainer />
      <FormContainer>
        <h1>Novo prato</h1>
        <Upload onDrop={handleDropPhoto} preview={preview} />
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            label="Nome do seu prato"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
          />
          <TextField
            name="description"
            label="Descrição"
            placeholder="Descreva em poucas palavras seu prato"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
          />
          <TextField
            name="price"
            label="Preço"
            type="number"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
          />
          <SubmitButton
            variant="contained"
            color="primary"
            shape="rounded"
            style={{ justifySelf: 'center' }}
          >
            Enviar
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
}
