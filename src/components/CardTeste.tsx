import '../App.css'

interface ICard{
    id:number,
    title:string,
    paragraph:string
}

export const CardTeste = ({id, title, paragraph}: ICard) => {
    return(
        <div id="Card">
            <h1>Card{id}</h1>
            <p>{title}</p>
            <p>{paragraph}</p>
        </div>
    )
}