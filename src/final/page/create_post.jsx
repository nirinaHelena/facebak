import "./create_post.css";
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Container } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { useAuth } from "../page/AuthContext";

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const {user}=useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      userId: user.id, // Utilisez l'ID de l'utilisateur connecté
    };

    try {
      const response = await axios.put('http://localhost:8080/posts', newPost); // Adjust the URL
      console.log('Nouvelle publication créée:', response.data);
      // Réinitialiser les champs après la création réussie
      setContent('');
      setTitle('');
    } catch (error) {
      console.error('Erreur lors de la création de la publication:', error);
    }
  };

  return (
    <Container maxWidth="sm" className="creatPost">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Titre"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="custom-textfield" 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contenu"
              multiline
              rows={4}
              variant="outlined"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="custom-textfield" 
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutline />}
            >
              Créer la publication
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreatePost;

