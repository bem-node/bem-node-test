({
    mustDeps: [
        {block: 'i-ajax-proxy'}
    ],
    shouldDeps: [
        {
            block: 'button',
            mods: {theme: 'action', side: 'left', size: 'm'}
        },
        {
            block: 'island',
            mods: {type: 'fly'}
        },
        {
            elem: 'portfolio',
            mods: {visibility: 'hidden'}
        },
        {
            elem: 'portfolio',
            mods: {visibility: 'visible'}
        }
    ]
})