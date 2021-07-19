import Element from '../../Element.mjs'

const Iframe = new Element({
    tag: 'iframe',
    attributes: {
        srcdoc: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CodePad</title>
            <style>
            ${document.querySelector('.css').value}
            </style>
        </head>
        <body>
            <output>${document.querySelector('.html').value}</output>
            <script>${document.querySelector('.js').value}</script>
        </body>
        </html>
        `,
        class: 'output',
        frameborder: '0',
    },
})

export default Iframe
