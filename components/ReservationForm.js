import React, { useState, useEffect } from 'react';
import styles from './ReservationForm.module.css'; // Assuming you have a CSS module for styling
import { supabase } from '../supabaseClient'; // Adjust the path if necessary

const TOTAL_PLACES = 40;

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    persons: 1,
  });
  const [message, setMessage] = useState('');
  const [remainingPlaces, setRemainingPlaces] = useState(TOTAL_PLACES);

    useEffect(() => {
    const fetchTotalPersons = async () => {
      const { data, error } = await supabase
        .from('reservations')
        .select('persons');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        const totalPersons = data.reduce((sum, reservation) => sum + reservation.persons, 0);
        const availablePlaces = TOTAL_PLACES - totalPersons;
        setRemainingPlaces(TOTAL_PLACES - totalPersons);
        if (availablePlaces <= 0) {
          setMessage('No hay lugares disponibles.');
        }
      }
    };

    fetchTotalPersons();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Insert form data into Supabase
    const { data, error } = await supabase
      .from('reservations')
      .insert([
        { name: formData.name, email: formData.email, persons: formData.persons },
      ]);

    if (error) {
      console.error('Error inserting data:', error);
      setMessage(`Hubo un error al hacer la reserva. Por favor intenta de nuevo. Si el problema persiste, contactanos a @raro_duo en IG.`);
    } else {
      console.log('Data inserted successfully:', data);
      setMessage('La reserva se hizo con éxito! Te esperamos');
      setRemainingPlaces(prev => prev - formData.persons);
      setFormData({
        name: '',
        email: '',
        persons: 1,
      });

     // Send confirmation email
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Confirmation email sent successfully');
        } else {
          console.error('Error sending confirmation email');
        }
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
      }
    }
  };

  return (
    <>
    <h5 className={styles.remainingPlaces}>Lugares disponibles: {remainingPlaces}</h5>
    <form className={styles.form} onSubmit={handleSubmit}>

      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre y Apellido:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={remainingPlaces <= 0}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={remainingPlaces <= 0}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="persons">Cantidad (max 4):</label>
        <input
          type="number"
          id="persons"
          name="persons"
          value={formData.persons}
          onChange={handleChange}
          min="1"
          max="4"
          required
          disabled={remainingPlaces <= 0}
        />
      </div>
      <button type="submit" className={styles.button} disabled={remainingPlaces <= 0}>Reservar</button>
      {message && <p className={styles.message}>{message}</p>}
    </form>
    </>
  );
};

export default ReservationForm;