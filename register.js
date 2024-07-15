Hooks.once('init', () => {
    if (typeof Babele !== 'undefined') {
        const babele = Babele.get();
        babele.register({
            module: 'starforged-ru',
            lang: 'ru',
            dir: 'compendium',
        });

        babele.registerConverters({
            sfMoveOptionsConverter: (...args) => {
                const obj = args[0];
                const translation = args[4];
                if (translation['trigger options']) {
                    for (let i = 0; i < translation['trigger options'].length; i++) {
                        obj[i].Text = translation['trigger options'][i];
                    }
                }
                return obj;
            },
        });
    }
});
