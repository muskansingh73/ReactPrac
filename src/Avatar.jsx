export default function Avatar({height,width,person}){
    const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXuM2b4djVbMt63hftHrWFFMeQmccyytKlQ&s"
   
    

    return(
        <>
        <img src={avatar} height={height} width={width} alt="desc" className="avatar"/> <br/>
        <b>{person.name}</b>
        </>
    )
}