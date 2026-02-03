const container = React.createElement('div',{className: 'container', id: 'container'},   [
    React.createElement('section',{key:1},[
        React.createElement('p',{key:1}, 'In React, text is primarily rendered using JSX, which lts'),
        React.createElement('img',{key:2, style:{height: 200, borderRadius: 20} ,src: 'https://fossa.com/_next/image/?url=%2Freact.png&w=3840&q=75&dpl=dpl_3Xjqc9KMirNCHktNk1dN3ep5HkUN', width:250})
    ]
),
    React.createElement('section',{key:2},[
        React.createElement('form',{key:1},[
            React.createElement('div',{key: 1,className: 'input-group'},[
                React.createElement('label',{key:1, htmlFor:'username'}, 'Username'),
            React.createElement('input', { key:1, id:'username'})
            ]),
            React.createElement('div',{key: 2,className: 'input-group'},[
                React.createElement('label',{key:1, htmlFor:'password'}, 'Password'),
            React.createElement('input', { key:1, id:'password', type: 'password'})
            ])

        ] )
    ]
)
    
]
)
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(container);