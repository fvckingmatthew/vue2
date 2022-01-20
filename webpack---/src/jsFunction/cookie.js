export const cookie = {
    methods: {
        set: function(c_name, value, exDays) {
            let exdate = new Date();
            exdate.setDate(exdate.getDate() + exDays);
            let c_value = escape(value) + ((exDays == null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = c_name + "=" + c_value;
        },
        get: function(c_name) {
            let c_value = document.cookie;
            let c_start = c_value.indexOf(" " + c_name + "=");
            if (c_start === -1) {
                c_start = c_value.indexOf(c_name + "=");
            }
            if (c_start === -1) {
                c_value = null;
            } else {
                c_start = c_value.indexOf("=", c_start) + 1;
                var c_end = c_value.indexOf(";", c_start);
                if (c_end === -1) {
                    c_end = c_value.length;
                }
                c_value = unescape(c_value.substring(c_start, c_end));
            }
            return c_value;
        }
    },
};