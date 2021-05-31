const Error = (props) => {//Error: toma el err state y un texto string as props, y si el valor es verdadero esto representara el texto. Si es falso, retorna nulo
    if(!props.isError) {
        return null
    }

    return (
        <p className='error'>{props.text}</p>
    )
}

export default Error