// src/components/NoteDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

function NoteDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axiosInstance.get(`notes/${id}/`);
        setNote(response.data);
      } catch (error) {
        console.error('Failed to fetch note:', error);
      }
    };
    fetchNote();
  }, [id]);

  return note ? (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default NoteDetail;
