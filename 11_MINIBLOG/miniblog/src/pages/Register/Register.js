import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css"
import { useEffect, useState } from "react"

const Register = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
 
  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName, 
      email, 
      password,
    }

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais");
      return;
    }

    const res = await createUser(user);

    console.log(res)
  }

  useEffect(() => {
    if(authError){
      setError(authError);
    }
  }, [authError])


  return (
    <div className={styles.register}>
        <h1>Cadastra-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
          <label>
          <span>Nome:</span>
          <input 
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            />
           <span>E-mail:</span>
            <input 
              type="email"
              name="email"
              required
              placeholder="E-mail do usuário"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
            <span>Senha:</span>
            <input 
              type="password"
              name="password"
              required
              placeholder="Insira a senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              />
            <span>Confirmação de senha:</span>
            <input 
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirme a senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              />
             {!loading &&  <button className="btn">
                Entrar
              </button>}
              {loading &&  <button className="btn" disable>
                Aguarde...
              </button>}
              {error && <p className="error">{error}</p>}
          </label>
        </form>
    </div>
  )
}

export default Register