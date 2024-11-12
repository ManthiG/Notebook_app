// src/components/NoteForm.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';

function NoteForm({ noteId, onSuccess }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteId) {
      axiosInstance.get(`notes/${noteId}/`).then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      });
    }
  }, [noteId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (noteId) {
        await axiosInstance.put(`notes/${noteId}/`, { title, content });
      } else {
        await axiosInstance.post('notes/', { title, content });
      }
      onSuccess(); // Callback to refresh the list or navigate
    } catch (error) {
      console.error('Failed to save note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{noteId ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
}

export default NoteForm;
