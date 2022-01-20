export const seo = {
    methods: {
        set: function(array, type) {
            if (array.arFields['SEO_VALUES']) {
                if (type === "detail") {
                    if (array.arFields['SEO_VALUES']['ELEMENT_META_DESCRIPTION']) {
                        document.querySelector('meta[name="description"]').setAttribute("content", array.arFields['SEO_VALUES']['ELEMENT_META_DESCRIPTION']);
                    } else {
                        if (array.arFields['SEO_VALUES']['SECTION_META_DESCRIPTION']) {
                            document.querySelector('meta[name="description"]').setAttribute("content", array.arFields['SEO_VALUES']['SECTION_META_DESCRIPTION']);
                        } else {
                            document.querySelector('meta[name="description"]').setAttribute("content", "");
                        }
                    }
                    if (array.arFields['SEO_VALUES']['ELEMENT_META_KEYWORDS']) {
                        document.querySelector('meta[name="keywords"]').setAttribute("content", array.arFields['SEO_VALUES']['ELEMENT_META_KEYWORDS']);
                    } else {
                        if (array.arFields['SEO_VALUES']['SECTION_META_KEYWORDS']) {
                            document.querySelector('meta[name="keywords"]').setAttribute("content", array.arFields['SEO_VALUES']['SECTION_META_KEYWORDS']);
                        } else {
                            document.querySelector('meta[name="keywords"]').setAttribute("content", "");
                        }
                    }
                    if (array.arFields['SEO_VALUES']['ELEMENT_META_TITLE']) {
                        document.title = array.arFields['SEO_VALUES']['ELEMENT_META_TITLE'];
                    } else {
                        document.title = array.arFields['NAME'];
                    }
                }
                if (type === "section") {
                    if (array.arFields['SEO_VALUES']['SECTION_META_DESCRIPTION']) document.querySelector('meta[name="description"]').setAttribute("content", array.arFields['SEO_VALUES']['SECTION_META_DESCRIPTION']);
                    if (array.arFields['SEO_VALUES']['SECTION_META_KEYWORDS']) document.querySelector('meta[name="keywords"]').setAttribute("content", array.arFields['SEO_VALUES']['SECTION_META_KEYWORDS']);
                    if (array.arFields['SEO_VALUES']['SECTION_META_TITLE']) {
                        document.title = array.arFields['SEO_VALUES']['SECTION_META_TITLE'];
                    } else {
                        document.title = array['SECTION_NAME'];
                    }
                }
            } else {
                document.title = array['SECTION_NAME'];
            }
        },
    },
};