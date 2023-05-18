import './Main.css'
import { useMediaQuery } from 'react-responsive'

const Main = (props) => {
    
    const isBigScreen = useMediaQuery({query: '(min-width: 1440px'})

    return (
        <main className='main'>
            {isBigScreen && <h2 className='main__titulo'>Navegue pela galeria</h2>}
            {props.children}
        </main>
    );
}

export default Main;
