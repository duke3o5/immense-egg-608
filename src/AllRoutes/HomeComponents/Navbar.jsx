import { Button, Heading, Text, Image} from '@chakra-ui/react';
import '../Styles/Navbar.css'

export default function Navbar() {

    return (
        <>
            <div className='Navbar'>
                <div className='topNav-left'>
                    <div style={{ width: '15%' }}>
                        <Image src="https://www.linkpicture.com/q/InShot_20230119_121832513.jpg" alt="logo" width='100%' />
                        
                        
                    </div>
                </div>
                <div className='topNav-right'>
                    <Text id='Nav-Text'>Login/Register</Text>
                    <Button>Post Free Ad</Button>
                </div>
            </div>
        </>
    )

}