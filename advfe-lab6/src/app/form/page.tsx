"use client";
import { useState } from 'react';

function BasicValidationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    
    // Password validation
    if (newPassword.length < 6) {
      setErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters long' }));
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!email.includes('@') || !email.includes('.')) newErrors.email = 'Invalid email format';
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
  
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ margin:'10px' }}/>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </label><br />
      
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin:'10px' }}/>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </label><br />
      
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} style={{ margin:'10px' }}/>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </label><br />
      
      <input type="submit" value="Submit" />
    </form>
  );
}

export default function App() {
  return (
    <div>
      <h1>Submit Information Here</h1>
      <BasicValidationForm />
    </div>
  );
}
