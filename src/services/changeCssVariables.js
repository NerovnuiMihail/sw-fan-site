/*
* Формат CSS-переменной:
* -theme-default-УникальноеИмя # дефолтная переменная
* -theme-light-УникальноеИмя # для светлой темы
* -theme-dark-УникальноеИмя # для темной темы
* -theme-neitral-УникальноеИмя # для нейтральной(дефолтной)
* */



export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

 // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
 // root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`);

    const cssVariables = ['header', 'bgimage'];

    cssVariables.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`
        );
    });

};
