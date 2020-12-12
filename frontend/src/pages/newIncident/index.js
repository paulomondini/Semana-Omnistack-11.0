import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api'; 
import './styles.css';
 
export default function NewIncident(){
    const history = useHistory(); 
    
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();
        
        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers:{
                    autorization:ongId,
                }
            });

            history.push('/profile');

        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente');
        }

    }

    return(
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolvê-lo</p>
                
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o Perfil da ONG
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeHolder="Título do caso"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}    
                    />
                    <textarea
                        placeHolder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}   
                    />
                    <input 
                        placeHolder="Valor em reais"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}   
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}