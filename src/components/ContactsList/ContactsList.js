//Шаг 11 прописываем базовую разметку
import React from 'react'

const ContactsList = (props) => {
    console.log(props)
    return (// Шаг 12 - отобразим контакты в виде отдельного ul списка
        <div>
            {props.contacts.map((item,index) =>(
                //Шаг 18 Удаляем Index 
                //Шаг 13 - В key подставим наш index
                <ul key={item.id}>
                    <li>{item.name}</li>
                    <li>{item.surname}</li>
                    <li>{item.phone}</li>
                    <li>
                        <button onClick={()=> props.handleDeleteContact(item.id)}
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => props.handleEditIndex(index)}>
                            
                            Edit
                        </button>
                    </li>
                    
                </ul>// Шаг 16 добави 4й li там у нас будет button
            ))}
        </div>
    );
};

export default ContactsList;

//Шаг 12 импортируем ContactsList в App