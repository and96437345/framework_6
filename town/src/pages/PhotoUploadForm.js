import React, { useState } from 'react';

const PhotoUploadForm = () => {
  // Состояния для хранения введенных значений и состояния валидации
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    photo: null,
    description: '',
    tags: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
    photo: '',
    description: '',
    tags: '',
  });

  // Обработчик изменения значений в форме
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Обработка для полей типа file (фотография)
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация формы
    const newErrors = { ...errors };

    // Пример валидации: поле "ник" не должно быть пустым
    if (!formData.username.trim()) {
      newErrors.username = 'Введите ник';
    } else {
      newErrors.username = '';
    }

    // Другие проверки валидации могут быть добавлены по аналогии

    // Обновление состояния ошибок
    setErrors(newErrors);

    // Если нет ошибок, можно выполнить отправку данных на сервер или другую логику
    if (Object.values(newErrors).every((error) => !error)) {
      // Здесь может быть логика отправки данных
      console.log('Данные отправлены:', formData);
    }
  };

  return (
    <div className="photoUploadForm">
      
      <h2>Загрузить фото</h2>
      <form onSubmit={handleSubmit}>
        {/* Ник */}
        <div className='form__input-field'>
          <label>Ник</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="error">{errors.username}</div>
        </div>

        {/* Пароль */}
        <div className='form__input-field'>
          <label>Пароль</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error">{errors.password}</div>
        </div>

        {/* Электронный адрес */}
        <div className='form__input-field'>
          <label>Электронный адрес</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error">{errors.email}</div>
        </div>

        {/* Фотография */}
        <div className='form__input-field'>
          <label>Фотография</label>
          <input
            type="file"
            accept="image/*"
            name="photo"
            onChange={handleChange}
          />
          <div className="error">{errors.photo}</div>
        </div>

        {/* Описание фотографии */}
        <div className='form__input-field'>
          <label>Описание фотографии</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <div className="error">{errors.description}</div>
        </div>

        {/* Теги */}
        <div className='form__input-field'>
          <label>Теги</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
          <div className="error">{errors.tags}</div>
        </div>

        {/* Кнопка отправки */}
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default PhotoUploadForm;