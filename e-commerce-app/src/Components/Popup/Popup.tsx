import { Content, Wrapper } from './Popup.styles'
import { createPortal } from 'react-dom'

interface Props{
    text:string
}

export default function Popup({text}:Props) {
    return createPortal(
        <>
            <Wrapper />
            <Content>
                {text} added!
            </Content>
        </>,
        document.getElementById('popup')!
        )
}
