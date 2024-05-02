const Note = (props) => {
    // Destructuring de props para facilitar la lectura
    // El poner el igual define un valor por defecto de venir null/undefined
    const { userId, body, title } = props;
    // console.log({ ...props });

    return (
        <li>
            <p>{userId}</p>
            <p>{body}</p>
            <p>{title}</p>
        </li>
    )
}

export { Note };