import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function Contact() {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert('Mesajınız gönderildi!');
    console.log(data);
    reset(); 
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        
        <input
          {...register('name', { required: 'İsim zorunludur' })}
          placeholder="Adınız"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

       
        <input
          type="email"
          {...register('email', {
            required: 'E-posta zorunludur',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Geçerli bir e-posta giriniz'
            }
          })}
          placeholder="E-posta"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

       
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: 'Mesaj alanı zorunludur' }}
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Mesajınız"
            />
          )}
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}

        <button type="submit">Gönder</button>
      </form>
    </section>
  );
}

export default Contact;
