export const searchElement = {
    methods: {
        parent: function(elem, parentClass) {
            let parent = elem.parentElement;
            if (parent.localName !== 'body') { // если родительский элемент не body
                for (let i = 0; i <= parent.classList.length; i++) { // перебираем классы родительского элемента
                    if (parent.classList[i] === parentClass && parent.localName !== 'body') { // если тот класс, который мы ищем и все еще не тег body
                        return parent
                    } else if (parent.classList.length <= i) { // если цикл закончился
                        return this.parent(parent, parentClass) // вызываем рекурсию
                    }
                }
            } else {
                return 'BODY'
            }
        },
    },
};