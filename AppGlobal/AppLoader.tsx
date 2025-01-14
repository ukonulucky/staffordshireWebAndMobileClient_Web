import Image from 'next/image';
const AppLoader = () =>{
    return(
    <div className={"loadingContainer"}>
            <Image
                src={"/images/spinner.png.gif"} alt="loading"
                width={30}
                height={ 30 }

        />

    </div>
    )
 }
 export default AppLoader;