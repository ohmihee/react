import Document,{
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document{
    static async getInitialProps(ctx){
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.originalRenderPage
        try{
            ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp
            })
        }
    }
}