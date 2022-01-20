export const getWidthOrder = {

    methods: {
        order: function(index, arWidthOrder) {
            if (index + 1 > arWidthOrder.length) {
                let remainder = (index + 1) % arWidthOrder.length;
                if (index + 1 >= arWidthOrder.length * 2) {
                    remainder = index % arWidthOrder.length;
                    return arWidthOrder[remainder];
                }
                return arWidthOrder[remainder - 1];
            }
            return arWidthOrder[index];
        },
    },
};