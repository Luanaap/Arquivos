import './MyForm.css';
import { useState} from 'react';

const MyForm = ({user}) => {
  // 3 - Gerenciamento de dados
  // 4 - Controlled inputs
  const [name, setName] = useState(user ? user.name: "")
  const [email, setEmail] = useState(user ? user.email: "")
  const [bio, setBio] = useState(user ? user.bio: "");
  const [role, setRole] = useState(user ? user.role: "");

  const handleName = (e) => {
    setName(e.target.value)
  }
  
//   console.log(name);
//   console.log(email);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);

    //validacao
    //envio

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
  }


  return (
    <div>
        {/* 5 - Envio de form*/}
        {/* 1 - Criação de Form */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}></input>
            </label>
        {/* 2 - Label envolvendo input */}
        <label>
            <span>
                Email:
            </span>
             {/* 3 - Simplificação de manipulação de state */}
            <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
        </label>
        {/* 8 - textarea */}
        <label>
            <span>Bio:</span>
        <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
         {/* 9 - select */}
         <label>
            <span>
                Função no sistema
            </span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="Admin">Admin</option>
            </select>
         </label>
        <input type="submit" value="Enviar"></input>
        </form>
    </div>
  )
}

export default MyForm