import { Content, Wrapper } from './Popup.styles'
import { createPortal } from 'react-dom'

export default function Popup() {
    return createPortal(
        <>
            <Wrapper />
            <Content>
                asad
            </Content>
        </>,
        document.getElementById('popup')!
        )
}
