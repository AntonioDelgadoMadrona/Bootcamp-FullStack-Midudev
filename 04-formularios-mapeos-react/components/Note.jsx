const Note = (props) => {
    // Destructuring de props para facilitar la lectura
    // El poner el igual define un valor por defecto de venir null/undefined
    const { id = '', content, date, important } = props;
    // console.log({ ...props });

    return (
        <li key={id}>
            <p>{content}</p>
            <p><time>{date}</time></p>
            <p>{important ? 'Es importante' : "No es importante"}</p>
        </li>
    )
}

export { Note };