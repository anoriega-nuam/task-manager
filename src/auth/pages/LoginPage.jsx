import { useState } from 'react';
import './LoginPage.css';

export const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="container mt-5">
      {isRegistering ? (
        <div className="card p-4">
          <h2 className="mb-4">Registro</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre de usuario:</label>
              <input type="text" className="form-control" name="username" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña:</label>
              <input type="password" className="form-control" name="password" required />
            </div>
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </form>
          <button className="btn btn-link mt-3" onClick={toggleForm}>¿Ya tienes una cuenta? Inicia sesión</button>
        </div>
      ) : (
        <div className="card p-4">
          <h2 className="mb-4">Iniciar Sesión</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña:</label>
              <input type="password" className="form-control" name="password" required />
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
          </form>
          <button className="btn btn-link mt-3" onClick={toggleForm}>¿No tienes una cuenta? Regístrate</button>
        </div>
      )}
    </div>
  );
};
